import { Image, Text, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.35;
const IMAGE_MAX_HEIGHT = 250;

export default function BookCard({ book }) {
  const imageHeight = Math.min(CARD_WIDTH * book.aspectRatio, IMAGE_MAX_HEIGHT);

  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={book.cover}
        style={[styles.cover, { height: imageHeight }]}
        resizeMode="cover"
      />

      <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
      <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH + 40,
    height: CARD_WIDTH * 2.25,
    marginRight: 20,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#f0f4f8",

    // cień
    shadowColor: "#156eccff",
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 4 },
    elevation: 3,
  },

  cover: {
    width: "100%",
    borderRadius: 14,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontFamily: 'Lora',
    marginTop: 2,
    color: "#111827",
  },

  author: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: "#6B7280",
    marginTop: 4,
  },
});
