import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
export const CARD_WIDTH = SCREEN_WIDTH * 0.35;
export const UNIT = 8; // bazowa jednostka dla spacingu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: UNIT * 8,      // 64px
    paddingHorizontal: UNIT * 2, // 16px
    backgroundColor: '#fff',
  },

  // Nagłówki
  header1: {
    fontSize: 34,
    marginBottom: UNIT * 2,     // 16px
    color: '#111827',
    fontFamily: 'Merriweather-Italic',
  },
  header2: {
    fontSize: 22,
    marginBottom: UNIT * 1.5,   // 12px
    color: '#111827',
    fontFamily: 'Merriweather-Italic',
  },

  // Karuzela książek
  carouselWrap: {
    paddingBottom: UNIT,       // 8px minimalny luz
  },
  flatListContent: {
    paddingRight: UNIT * 2,    // 16px
  },

  // Separator między sekcjami
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: UNIT * 1.5, // 12px
    width: '100%',
  },

  // Karta książki
  card: {
    width: CARD_WIDTH + UNIT * 5,   // karta szersza niż obrazek
    height: CARD_WIDTH * 2.25,      // proporcje karty
    marginRight: UNIT * 2,          // 16px między kartami
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
    marginBottom: UNIT,            // 8px pod obrazkiem
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

  description: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: "#555",
    marginTop: UNIT,               
  },

 
  textContainer: {
    flex: 1,
  },

  stars: {
    flexDirection: 'row',
    marginTop: UNIT * 0.75,       // 6px
    marginBottom: UNIT * 0.75,    // 6px
  },

  // Dolny pasek
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: UNIT * 8,             // 64px
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: UNIT * 1.5,    // 12px
  },
  tab: {
    fontSize: 28,
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
});

export default styles;
