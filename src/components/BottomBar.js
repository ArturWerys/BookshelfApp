import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomBar({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      
      {/* Home */}
      <TouchableOpacity onPress={() => setActiveTab('home')} style={styles.button}>
        <Ionicons
          name="home"
          size={28}
          color={activeTab === 'home' ? '#1E90FF' : '#777'}
        />
      </TouchableOpacity>

      {/* Add */}
      <TouchableOpacity onPress={() => setActiveTab('add')} style={styles.button}>
        <Ionicons
          name="add-circle"
          size={32}
          color={activeTab === 'add' ? '#1E90FF' : '#777'}
        />
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
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
