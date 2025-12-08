import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function AddBookCard() {
    const [searchText, setSearchText] = useState(''); // start pusty

    return (
        <View style={styles.container}>
            {/* Pole do wpisania */}
            <TextInput
                style={styles.input}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Wyszukaj książkę..."
                placeholderTextColor="#888"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: SCREEN_WIDTH - 40,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
});
