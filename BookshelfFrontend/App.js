import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useFonts } from "expo-font";
import styles from "./src/styles/style.js";
import BottomBar from "./src/components/BottomBar.jsx";
import LibraryItemCard from "./src/components/LibraryBookCard.jsx";
import ReadBookCard from "./src/components/ReadBookCard.jsx";
import AddBookCard from "./src/components/AddBookCard.jsx";
import booksStatic from "./src/data/books.jsx";
import StatsCard from "./src/components/StatsCard.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const firstBook = booksStatic[2];
  const [books, setBooks] = useState([]); // książki z backendu

  const [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
    "Inter-Italic": require("./assets/fonts/Inter-Italic.ttf"),
    Lora: require("./assets/fonts/Lora.ttf"),
    "Lora-Italic": require("./assets/fonts/Lora-Italic.ttf"),
    Merriweather: require("./assets/fonts/Merriweather.ttf"),
    "Merriweather-Italic": require("./assets/fonts/Merriweather-Italic.ttf"),
  });
  const [randomReadBook, setRandomReadBook] = useState(null);
  useEffect(() => {
    if (activeTab === "home") {
      fetch("http://10.0.2.2:5184/api/books")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);

          const readBooks = data.filter((b) => b.isRead);
          if (readBooks.length > 0) {
            const randomIndex = Math.floor(Math.random() * readBooks.length);
            setRandomReadBook(readBooks[randomIndex]);
          } else {
            setRandomReadBook(null);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [activeTab]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      {/* Home Screen */}
      {activeTab === "home" && (
        <View style={styles.container}>
          <Text style={styles.header1}>Biblioteka</Text>
          <View style={styles.carouselWrap}>
            <FlatList
              data={books}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <LibraryItemCard book={item} />}
              contentContainerStyle={styles.flatListContent}
            />
          </View>

          <View style={styles.separator} />

          <Text style={styles.header2}>Przeczytane</Text>
          <ReadBookCard book={randomReadBook || firstBook} />
        </View>
      )}

      {/* Stats Screen */}
      {activeTab === "stats" && <StatsCard />}

      {/* Add Book Screen */}
      {activeTab === "add_book" && <AddBookCard />}

      {/* Bottom Bar */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}
