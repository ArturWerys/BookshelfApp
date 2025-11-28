import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './src/styles/style.js';
import BottomBar from './src/components/BottomBar.js';

// Mock danych książek
const mockBooks = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  title: `Książka ${i + 1}`,
  color: i % 2 === 0 ? '#A3D8F4' : '#F4C2C2',
}));

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

  const renderAllBooks = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
      <Text style={styles.cardTitle} numberOfLines={3}>
        {item.title}
        {"\n"}
        {"Autor: Jan Kowalski"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biblioteka</Text>

      {/* Wszystkie książki */}
      <View style={styles.carouselWrap}>
        <FlatList
          data={mockBooks}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderAllBooks}
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
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}
