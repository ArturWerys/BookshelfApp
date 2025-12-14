import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './src/styles/style.js';
import BottomBar from './src/components/BottomBar.js';
import LibraryItemCard from './src/components/LibraryBookCard.js';
import ReadBookCard from './src/components/ReadBookCard.js';
import AddBookCard from './src/components/AddBookCard.js'; 
import booksStatic from './src/data/books.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const firstBook = booksStatic[2];
  const [books, setBooks] = useState([]); // książki z backendu


  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.ttf'),
    'Lora': require('./assets/fonts/Lora.ttf'),
    'Lora-Italic': require('./assets/fonts/Lora-Italic.ttf'),
    'Merriweather': require('./assets/fonts/Merriweather.ttf'),
    'Merriweather-Italic': require('./assets/fonts/Merriweather-Italic.ttf'),
  });

 
  // fetch książek z backendu
  useEffect(() => {
    fetch('http://10.0.2.2:5184/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      {/* Home Screen */}
      {activeTab === 'home' && (
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
          <ReadBookCard book={firstBook} />
        </View>
      )}

      {/* Stats Screen */}
      {activeTab === 'stats' && (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={styles.header1}>Statystyki</Text>
          <Text>Wkrótce...</Text>
        </View>
      )}

      {/* Add Book Screen */}
      {activeTab === 'add_book' && <AddBookCard />}

      {/* Bottom Bar */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}
