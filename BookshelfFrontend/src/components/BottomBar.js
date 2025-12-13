import { View, TouchableOpacity, StyleSheet } from 'react-native';
import HomeIcon from '../../assets/icons/home.svg';
import StatsIcon from '../../assets/icons/stats.svg';
import AddIcon from '../../assets/icons/bookmark.svg';

export default function BottomBar({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActiveTab('home')}>
        <HomeIcon width={25} height={25} fill={activeTab === 'home' ? '#156ecc' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('stats')}>
        <StatsIcon width={25} height={25} fill={activeTab === 'stats' ? '#156ecc' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('add_book')}>
        <AddIcon width={25} height={25} fill={activeTab === 'add_book' ? '#156ecc' : '#999'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 12,
  },
});
