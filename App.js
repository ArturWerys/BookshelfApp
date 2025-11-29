import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './src/styles/style.js';
import BottomBar from './src/components/BottomBar.js';
import BookCard from './src/components/LibraryBookCard.js';
import books from './src/data/books.js';

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
          renderItem={({ item }) => <BookCard book={item} />}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      {/* Przeczytane */}
      <View style={styles.bookRow}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#83cebfff' }]}>
          <Text style={styles.cardTitle} numberOfLines={3}>Okładka</Text>
        </TouchableOpacity>

        <View style={styles.authorContainer}>
          <Text style={styles.cardTitle}>Bolesław Prus</Text>
          <Text style={styles.cardTitle}>Lalka</Text>
        </View>
      </View>

      {/* Dolny pasek */}
      {/* <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </View>
  );
}
