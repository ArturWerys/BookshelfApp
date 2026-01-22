import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Switch,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import stylesFile from "../styles/style.js"; // Twój plik ze stylami fontów itp.

export default function AddBookCard() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [readDate, setReadDate] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Brak uprawnień", "Musisz zezwolić na dostęp do zdjęć.");
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.Images,
        quality: 1,
        allowsEditing: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        if (asset.uri) {
          setCover(asset);
        }
      }
    } catch (error) {
      console.error("Błąd ImagePicker:", error);
      Alert.alert("Błąd", "Nie udało się wybrać okładki.");
    }
  };

  const submitBook = async () => {
    if (!title || !cover) {
      Alert.alert("Błąd", "Tytuł i okładka są wymagane!");
      return;
    }

    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Author", author);
    formData.append("Rating", rating);
    formData.append("IsRead", isRead);
    formData.append("ReadDate", isRead && readDate ? readDate : "");
    formData.append("LiteraryGenre", genre);

    if (isRead) {
      formData.append("Review", review);
    }

    const uriParts = cover.uri.split(".");
    const fileType = uriParts[uriParts.length - 1];

    formData.append("cover", {
      uri: cover.uri,
      name: `cover.${fileType}`,
      type: `image/${fileType}`,
    });

    try {
      const response = await fetch(
        "http://10.0.2.2:5184/api/books/with-cover",
        {
          method: "POST",
          body: formData,
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (response.ok) {
        const data = await response.json();
        Alert.alert("Sukces", `Dodano książkę: ${data.title}`);
        setTitle("");
        setAuthor("");
        setReview("");
        setRating("");
        setGenre("");
        setIsRead(false);
        setReadDate("");
        setCover(null);
      } else {
        const text = await response.text();
        console.error("Błąd backendu:", text);
        Alert.alert("Błąd", "Backend zwrócił błąd. Sprawdź konsolę.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Błąd", "Wystąpił problem z serwerem.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={stylesFile.header1}>Dodaj książkę</Text>
      <TextInput
        placeholder="Tytuł"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
        style={styles.input}
      />
      <TextInput
        placeholder="Gatunek"
        value={genre}
        onChangeText={setGenre}
        style={styles.input}
      />

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Przeczytana:</Text>
        <Switch
          value={isRead}
          onValueChange={setIsRead}
          thumbColor="#a5b4fc"
          trackColor={{ true: "#e0e7ff", false: "#c7d2fe" }}
        />
      </View>

      {isRead && (
        <>
          <TextInput
            placeholder="Data przeczytania (RRRR-MM-DD)"
            value={readDate}
            onChangeText={setReadDate}
            style={styles.input}
          />
          <TextInput
            placeholder="Ocena (1-5)"
            value={rating}
            onChangeText={setRating}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Przemyślenia o książce"
            value={review}
            onChangeText={setReview}
            style={styles.input}
          />
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Wybierz okładkę</Text>
      </TouchableOpacity>

      {cover && (
        <Image
          source={{ uri: cover.uri }}
          style={{ width: 100, height: 150, marginTop: 10, borderRadius: 12 }}
        />
      )}

      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={submitBook}
      >
        <Text style={styles.buttonText}>Dodaj książkę</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
  },

  input: {
    height: 50,
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontFamily: "Lora",
    fontSize: 14,
    color: "#0f172a",
  },

  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Lora",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#156eccff",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 4 },
    elevation: 3,
  },
  header2: {
    fontSize: 20,
    fontFamily: "Lora",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  switchLabel: {
    fontFamily: "Lora",
    fontSize: 16,
    color: "#0f172a",
    marginRight: 8,
  },
  button: {
    backgroundColor: "#60a5fa",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Lora",
    fontWeight: "600",
  },
  coverPreview: {
    width: 100,
    height: 150,
    marginTop: 12,
    borderRadius: 12,
  },
});
