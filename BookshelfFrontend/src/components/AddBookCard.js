import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, FlatList } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function AddBookCard() {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);

    /* Wyszukiwanie od dwóch znaków */
    /* Inaczej czyścić wyniki */
    /* Trim usuwa spacje z początku i końca */

    useEffect(() => {
        if (searchText.trim().length < 2) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(() => {
            fetch(`http://10.0.2.2:5184/api/books/search?query=${searchText}`)
                .then(res => res.json())
                .then(data => setResults(data))
                .catch(err => console.error(err));
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchText]
    );

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                {/* Pole do wpisania */}
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Wyszukaj książkę..."
                    placeholderTextColor="#888"
                />


                <View style={styles.carouselWrap}>
                    <FlatList
                        style={{ marginTop: 20, width: '100%' }}
                        data={results}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.resultItem}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.author}>{item.author}</Text>
                            </View>
                        )}
                    />

                </View>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: '#f0f4f8',
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
    resultItem: {
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 12,
        marginBottom: 8,
        width: '100%',
    },

    title: {
        fontSize: 16,
        fontFamily: 'Lora',
        color: '#111827',
    },

    author: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 2,
    },
});
