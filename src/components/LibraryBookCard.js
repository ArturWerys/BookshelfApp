import { Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Zwiększamy szerokość karty
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.35; // większa karta
const IMAGE_MAX_HEIGHT = 500;           // większa wysokość obrazka

export default function BookCard({ book }) {
  const imageHeight = Math.min(CARD_WIDTH * book.aspectRatio, IMAGE_MAX_HEIGHT);

  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={book.cover}
        style={{
          width: '100%',
          height: imageHeight,
          borderRadius: 12,
          marginBottom: 8,
        }}
        resizeMode="contain"
      />
      <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
      <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginRight: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,          
    fontFamily: 'Lora',
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
});
