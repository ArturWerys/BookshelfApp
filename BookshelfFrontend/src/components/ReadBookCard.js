import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.34;
const IMAGE_MAX_HEIGHT = 500;

export default function ReadBookCard({ book }) {
  const imageHeight = Math.min(CARD_WIDTH * book.aspectRatio, IMAGE_MAX_HEIGHT);

  return (
    <View style={styles.card}>

      {/* OBRAZ + TEKST */}
      <View style={styles.row}>
        <Image
          source={book.cover}
          style={[
            styles.cover,
            { width: CARD_WIDTH, height: imageHeight }
          ]}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
          <Text style={styles.author} numberOfLines={1}>{book.author}</Text>

          <View style={styles.stars}>
            <MaterialIcons name="star" size={22} color="#FACC15" />
            <MaterialIcons name="star" size={22} color="#FACC15" />
            <MaterialIcons name="star" size={22} color="#FACC15" />
            <MaterialIcons name="star" size={22} color="#FACC15" />
            <MaterialIcons name="star-border" size={22} color="#D1D5DB" />
          </View>
        </View>
      </View>

      {/* OPIS */}
      <Text style={styles.description} numberOfLines={2}>
        {book.description}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH - 32,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f0f4f8",

    // cień – iOS + Android
    shadowColor: "#156eccff",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    marginBottom: 24
  },

  row: {
    flexDirection: 'row',
  },

  cover: {
    borderRadius: 14,
    marginRight: 16,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontFamily: 'Lora',
    fontWeight: 'bold',
    color: "#111827",
  },
  author: {
    fontSize: 16,
    color: "#6B7280",
    fontFamily: 'Inter',
    marginTop: 6,
  },

  stars: {
    flexDirection: 'row',
    marginTop: 10,
  },

  description: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    color: '#4B5563',
    fontFamily: 'Inter',
  },
});
