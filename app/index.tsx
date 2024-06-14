import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const images = [
  { uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/dXpCriky5BvIrL41bIU8Ag/348s.jpg', name: 'Goshi Sushi', distance: '2.3 Miles', price: '$$$' },
  { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/06/17/4a/a2/ribs-and-tri-tip-sandwich.jpg', name: 'Firestone Grill', distance: '1.7 Miles', price: '$$' },
  { uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/SQuVCEZgBWAvuZjHoE0GTQ/348s.jpg', name: 'J&L Hawaiian BBQ', distance: '2.5 Miles', price: '$' },
  { uri: 'https://images.squarespace-cdn.com/content/v1/645ac227944da67258b1f4be/2ef377d2-d356-4a47-b387-c07290802159/luna-red-restaurant-brunch-1.jpg', name: 'Luna Red', distance: '1.5 Miles', price: '$$' },
  { uri: 'https://moesmediterranean.com/img/banner_image.jpg', name: 'Moe\s Mediterranean', distance: '1.3 Miles', price: '$$' },
  { uri: 'https://lh5.googleusercontent.com/p/AF1QipMCkJ0yMHtW0PWA6ETwiWChIOlch5M1VNQOJsPG=w260-h175-n-k-no', name: 'Todo Bueno', distance: '3.1 Miles', price: '$$' },
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TasteVote!</Text>
      <View style={styles.card}>
        <Image source={{ uri: currentImage.uri }} style={styles.image} />
        <Text style={styles.text}>{currentImage.name}</Text>
        <Text style={styles.subText}>{currentImage.distance} | {currentImage.price}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Icon name="close" size={40} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Icon name="check" size={40} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  card: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
