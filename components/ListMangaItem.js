import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import cover from '../assets/images/cover/001.jpg';
import useTheme from '../hooks/useTheme';

const { font_size, font_color } = useTheme();

const styles = StyleSheet.create({
  publisherName: {
    fontSize: font_size.size.sm,
  },
  publishDate: {
    fontSize: font_size.size.xs,
    color: font_color.text.secondary,
  },
  ImageWrapper: {
    marginVertical: 12,
    position: 'relative',
    margin: '1%',
    borderRadius: 10,
  },
  coverText: {
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: '1%',
    fontSize: font_size.size.md,
  },
  mangaCover: {
    width: 110,
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  star: {
    width: 70, 
    height: 30, 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'yellow', 
    paddingTop: 8,
    paddingHorizontal: 15,
    marginVertical: 7,
    position: 'absolute',
    left: 40,
    bottom: 115
  },
  history: {
    paddingHorizontal: '1%',
    fontSize: font_size.size.md,
    color: font_color.text.secondary,
    marginBottom: 8
  },
  chap: {
    flexDirection: 'row',
    marginTop: 35,
  }
});

const ListMangaItem = ({ navigation }) => (
  <View style={{ marginBottom: 4 }}>

    <TouchableOpacity
      style={styles.ImageWrapper}
      onPress={() => navigation.navigate('Details')}
    >
      <View style={{ flexDirection: 'row' }}>
      <Image
        style={styles.mangaCover}
        source={cover}
      />

      <View style={styles.star}>
      <FontAwesome
          name="star"
          size={14}
          style={{ color: font_color.common.black }}
        >  7.9</FontAwesome>
        </View>

      <View style={styles.history}>
        <Text style={styles.coverText}>World Without Blessings</Text>
        <Text style={styles.history}>25 Chapter</Text>
        <Text style={styles.history}>Last Updated: 16/1/21</Text>
        </View>
      </View>
      

    </TouchableOpacity>
  </View>
);

export default ListMangaItem;