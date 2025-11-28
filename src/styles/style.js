import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
export const SQUARE_SIZE = Math.round(SCREEN_WIDTH * 0.28);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 32,
    marginBottom: 16,
    color: '#111827',
    fontFamily: 'Merriweather-Regular',
  },

  carouselWrap: {
    height: SQUARE_SIZE + 10,
  },

  flatListContent: {
    paddingRight: 16,
  },

  card: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  cardTitle: {
    fontSize: 14,
    color: '#111827',
    textAlign: 'center',
    paddingHorizontal: 6,
    fontFamily: 'Lora',
  },

  bookRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },

  authorContainer: {
    marginLeft: 16,
  },
});

export default styles;
