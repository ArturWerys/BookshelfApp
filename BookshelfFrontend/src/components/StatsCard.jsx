import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import styles from "../styles/style.js"; // Twój plik ze stylami fontów itp.

const StatsCard = () => {
  const [books, setBooks] = useState([]);
  const [generePieData, setGenerePieData] = useState([]);
  const [readPieData, setReadPieData] = useState([]);
  const [readPercent, setReadPercent] = useState(0);

  useEffect(() => {
    fetch("http://10.0.2.2:5184/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);

        // 1️⃣ Grupowanie po gatunkach
        const genreCount = {};
        data.forEach((book) => {
          const genre = book.literaryGenre || "Brak gatunku";
          genreCount[genre] = (genreCount[genre] || 0) + 1;
        });

        const colors = [
          "#3b82f6",
          "#60a5fa",
          "#a5b4fc",
          "#c7d2fe",
          "#e0e7ff",
          "#4f46e5",
        ];
        const genereChartData = Object.entries(genreCount)
          .map(([genre, count], idx) => ({
            value: count,
            color: colors[idx % colors.length],
            gradientCenterColor: colors[idx % colors.length],
            label: genre.charAt(0).toUpperCase() + genre.slice(1),
          }))
          .sort((a, b) => b.value - a.value);

        setGenerePieData(genereChartData);

        const readCount = data.filter((b) => b.isRead).length;
        const unreadCount = data.length - readCount;
        const percentRead = Math.round((readCount / data.length) * 100);

        const readPieData = [
          {
            value: readCount,
            color: "#3b82f6",
            gradientCenterColor: "#60a5fa",
            label: "Przeczytane",
          },
          {
            value: unreadCount,
            color: "#a5b4fc",
            gradientCenterColor: "#c7d2fe",
            label: "Nieprzeczytane",
          },
        ];

        setReadPieData(readPieData);
        setReadPercent(percentRead);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderDot = (color) => (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: color,
        marginRight: 10,
      }}
    />
  );

  const renderLegendComponent = (data) => {
    return (
      <View style={{ paddingLeft: 8, marginTop: 8 }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            {renderDot(item.color)}
            <Text
              style={{ color: "#111827", fontFamily: "Lora", fontSize: 16 }}
            >
              {item.label}: {item.value}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f0f4f8" }}
      contentContainerStyle={{ paddingVertical: 30 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Wykres gatunków */}
      <View
        style={{
          margin: 20,
          marginTop: 40,
          padding: 12,
          borderRadius: 16,
          backgroundColor: "#ffffff", // dopasowane do LibraryBookCard
          shadowColor: "#156eccff",
          shadowOpacity: 1,
          shadowRadius: 8,
          shadowOffset: { width: 1, height: 4 },
          elevation: 3,
        }}
      >
        <Text style={styles.header2}>Książki według gatunku</Text>
        <View style={{ padding: 16, alignItems: "center" }}>
          <PieChart
            data={generePieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={"#ffffff"} // dopasowane do karty
            centerLabelComponent={() => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {generePieData.length > 0 && (
                  <>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#0f172a",
                        fontFamily: "Lora",
                        fontWeight: "600",
                      }}
                    >
                      {generePieData[0].value}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#475569",
                        fontFamily: "Lora",
                      }}
                    >
                      {generePieData[0].label}
                    </Text>
                  </>
                )}
              </View>
            )}
          />
        </View>
        <ScrollView style={{ maxHeight: 120 }}>
          {renderLegendComponent(generePieData)}
        </ScrollView>
      </View>

      {/* Wykres przeczytane / nieprzeczytane */}
      <View
        style={{
          marginHorizontal: 20,
          padding: 12,
          borderRadius: 16,
          backgroundColor: "#ffffff", // dopasowane do LibraryBookCard
          shadowColor: "#156eccff",
          shadowOpacity: 1,
          shadowRadius: 8,
          shadowOffset: { width: 1, height: 4 },
          elevation: 3,
        }}
      >
        <Text style={styles.header2}>Przeczytane i nieprzeczytane</Text>
        <View style={{ padding: 16, alignItems: "center" }}>
          <PieChart
            data={readPieData}
            donut
            showGradient
            sectionAutoFocus
            radius={80}
            innerRadius={55}
            innerCircleColor={"#ffffff"}
            centerLabelComponent={() => (
              <Text
                style={{
                  fontSize: 20,
                  color: "#0f172a",
                  fontFamily: "Lora",
                  fontWeight: "600",
                }}
              >
                {readPercent}%
              </Text>
            )}
          />
        </View>
        {renderLegendComponent(readPieData)}
      </View>
    </ScrollView>
  );
};

export default StatsCard;
