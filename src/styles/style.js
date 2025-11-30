import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const SQUARE_SIZE = Math.round(SCREEN_WIDTH * 0.28);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  header1: {
    fontSize: 34,
    marginBottom: 10,         // ⬅ większy oddech
    color: '#111827',
    fontFamily: 'Merriweather-Italic',
  },

  header2: {
    fontSize: 22,
    marginBottom: 10,
    color: '#111827',
    fontFamily: 'Merriweather-Italic',
  },

  carouselWrap: {
    height: 370,
    paddingBottom: 4,         // ⬅ minimalny luz na dole
  },

  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',  // ⬅ jaśniejszy, subtelniejszy kolor
    marginVertical: 16,          // ⬅ więcej przestrzeni
    width: '100%',               
  },

});

export default styles;
