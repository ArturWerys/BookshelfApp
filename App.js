import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './src/styles/style.js';
import BottomBar from './src/components/BottomBar.js';
import LibraryItemCard from './src/components/LibraryBookCard.js';
import books from './src/data/books.js';
import ReadBookCard from './src/components/ReadBookCard.js';

export default function App() {

  const [activeTab, setActiveTab] = useState('home');

  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.ttf'),
    'Lora': require('./assets/fonts/Lora.ttf'),
    'Lora-Italic': require('./assets/fonts/Lora-Italic.ttf'),
    'Merriweather': require('./assets/fonts/Merriweather.ttf'),
    'Merriweather-Italic': require('./assets/fonts/Merriweather-Italic.ttf'),
  });
  const firstBook = books[1];


  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Biblioteka</Text>

      {/* Wszystkie książki */}
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

      <Text style={styles.header2}>Przeczytane</Text>

      {/* Pojedyncza książka */}
      <ReadBookCard book={firstBook} />

      {/* Dolny pasek */}
      {/* <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </View>
  );
}
