import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native';

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      // Load favorites from AsyncStorage when the component mounts
      const loadFavorites = async () => {
        const favoritesString = await AsyncStorage.getItem('favorites');
        const favorites = favoritesString ? JSON.parse(favoritesString) : [];
        setFavorites(favorites);
      };
  
      loadFavorites();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Favorites</Text>
        {favorites.map((item) => (
          <Text key={item.id} style={styles.favoriteItem}>
            {item.name}
          </Text>
        ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemName: {
      fontSize: 20,
      marginBottom: 20,
    },
    favoriteButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    favoriteActive: {
      backgroundColor: 'red',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    favoriteItem: {
      fontSize: 16,
      marginBottom: 10,
    },
  });

  
  export default FavoritesScreen;