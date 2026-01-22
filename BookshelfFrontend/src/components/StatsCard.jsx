import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

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

        const colors = ["#009FFF", "#93FCF8", "#BDB2FA", "#FFA5BA", "#FFCD6B"];
        const genereChartData = Object.entries(genreCount)
          .map(([genre, count], idx) => ({
            value: count,
            color: colors[idx % colors.length],
            gradientCenterColor: colors[idx % colors.length],
            label: genre.charAt(0).toUpperCase() + genre.slice(1),
          }))
          .sort((a, b) => b.value - a.value);

        setGenerePieData(genereChartData);

        // 2️⃣ Przeczytane / Nieprzeczytane
        const readCount = data.filter((b) => b.isRead).length;
        const unreadCount = data.length - readCount;
        const percentRead = Math.round((readCount / data.length) * 100);

        const readPieData = [
          {
            value: readCount,
            color: "#009FFF", // pasuje do pierwszego wykresu
            gradientCenterColor: "#006DFF",
            label: "Przeczytane",
          },
          {
            value: unreadCount,
            color: "#BDB2FA", // pasuje do pierwszego wykresu
            gradientCenterColor: "#8F80F3",
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
    return data.map((item, index) => (
      <View
        key={index}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        {renderDot(item.color)}
        <Text style={{ color: "white" }}>
          {item.label}: {item.value} {item.value === 1 ? "książka" : "książek"}
        </Text>
      </View>
    ));
  };

  return (
    <View style={{ paddingVertical: 20, flex: 1, backgroundColor: "#34448B" }}>
      {/* Wykres gatunków */}
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#232B5D",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Książki według gatunku
        </Text>
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            data={generePieData}
            donut
            showGradient
            sectionAutoFocus
            radius={100}
            innerRadius={70}
            innerCircleColor={"#232B5D"}
            centerLabelComponent={() => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {generePieData.length > 0 && (
                  <>
                    <Text
                      style={{
                        fontSize: 22,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {generePieData[0].value}
                    </Text>
                    <Text style={{ fontSize: 14, color: "white" }}>
                      {generePieData[0].label}
                    </Text>
                  </>
                )}
              </View>
            )}
          />
        </View>
        {renderLegendComponent(generePieData)}
      </View>

      {/* Wykres przeczytane / nieprzeczytane */}
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#232B5D",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Przeczytane / Nieprzeczytane
        </Text>
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            data={readPieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={70}
            innerCircleColor={"#232B5D"}
            centerLabelComponent={() => (
              <Text
                style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
              >
                {readPercent}%
              </Text>
            )}
          />
        </View>
        {renderLegendComponent(readPieData)}
      </View>
    </View>
  );
};

export default StatsCard;
