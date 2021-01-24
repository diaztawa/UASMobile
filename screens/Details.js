import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import useTheme from '../hooks/useTheme';
import cover from '../assets/images/cover/001.jpg';

const { font_color, font_size, radius } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
  },
  page: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
    marginHorizontal: 10,
  },
  iconButton: {
    padding: 8,
    borderRadius: 100,
    flexDirection: 'row',
  },
  banner: {
    width: 278,
    height: 415,
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  Title: {
    fontSize: font_size.size.md,
    fontWeight: '700',
    marginBottom: 5,
    paddingTop: 5,
    alignSelf: 'center',
    fontSize: 21,
  },
  subtitle: {
    fontSize: font_size.size.md,
    fontWeight: '700',
    marginBottom: 5,
    paddingTop: 5,
  },
  subtxttitle: {
    marginVertical: 2,
    paddingTop: 5,
    fontSize: 18,
    color: 'gray',
  },
  chap: {
    fontSize: font_size.size.md,
    fontWeight: '700',
    marginBottom: 5,
    paddingTop: 5,
    alignSelf: 'center',
    fontSize: 29,
  },
  fixtitle: {
    flexDirection: 'row',
  },
  Description: {
    color: font_color.text.secondary,
    marginBottom: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    marginTop: 2,
  },
  buttonGenre: {
    fontSize: font_size.size.md,
    backgroundColor: font_color.primary.main,
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    borderRadius: radius.normal,
  },
  metaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: font_color.primary.main,
  },
  recipeImageWrapper: {
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: radius.normal,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockViews: {
    borderColor: font_color.common.gray.light, 
    flexDirection: 'row',
  },
  blockViews2: { 
    borderColor: font_color.common.gray.light, 
    paddingTop: 10,
    marginBottom: 50,
  },
  downWrapper: {
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 5,
    marginHorizontal: 4,
  },
  downbutton: {
    backgroundColor: font_color.primary.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: font_color.primary.main,
    borderRadius: 40,
    flexDirection: 'row',
  },
  downtextButton: {
      color: "#FFFFFF",
      fontSize: 16,
  },
  bookWrapper: {
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 5,
    marginHorizontal: 4,
  },
  bookbutton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: font_color.primary.main,
    borderRadius: 40,
    flexDirection: 'row',
  },
  booktextButton: {
      color: font_color.primary.main,
      fontSize: 16,
  },
  back: {
    fontSize: 16,
    marginTop: 5,
    color: font_color.common.white,
  },
  star:{
    width: 85, 
    height: 35, 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'yellow', 
    paddingTop: 6,
    paddingHorizontal: 15,
    top: 50,
    left: 250,
    position: 'absolute',
    flexDirection: 'row',
  },
  rating:{
    paddingLeft: 7,
    fontSize: 16,
  },
  genre: {
    color: font_color.common.white, 
    paddingVertical: 1,
    paddingHorizontal: 5,
  }
});

export default function DetailsScreen({navigation}) {
  const BackLogic = () => {
    navigation.goBack();
  }
  return(
  <View style={styles.container}>

  <View style={{
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: font_color.primary.main,
    }}
    >
      <TouchableOpacity 
      onPress={BackLogic}
      style={styles.iconButton}>
        <Text>
        <FontAwesome
          name="angle-left"
          size={30}
          style={{ color: font_color.common.white, }}
        /> </Text>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={styles.page}>
      <View>
        <Image
          style={styles.banner}
          source={cover}
        />
        </View>
      <View style={styles.star}>
        <Text>
      <FontAwesome
          name="star"
          size={22}
          style={{ color: font_color.common.black }}
        /> </Text>
        <Text style={styles.rating}>7.9</Text>
        </View>
      <View style={{ paddingHorizontal: 25 }}>
      <Text style={styles.Title}>World Without Blessings</Text>
      <View style={styles.fixtitle}>
      <Text style={styles.subtitle}>Alternative Name:  </Text> 
      <Text style={styles.subtxttitle}>Insert Alt Name</Text>
      </View>
      <View style={styles.fixtitle}>
      <Text style={styles.subtitle}>Status: </Text> 
      <Text style={styles.subtxttitle}>Finished/Ongoing </Text>
      </View>
      <View style={styles.fixtitle}>
      <Text style={styles.subtitle}>Year of Release: </Text> 
      <Text style={styles.subtxttitle}>1974</Text>
      </View>
      <View style={styles.fixtitle}>
      <Text style={styles.subtitle}>Author: </Text> 
      <Text style={styles.subtxttitle}>Insert Author Name</Text>
      </View>
      <View style={styles.fixtitle}>
      <Text style={styles.subtitle}>Artist: </Text> 
      <Text style={styles.subtxttitle}>Insert Artist Name</Text>
      </View>
      <View style={styles.blockViews}>
          <Text style={styles.subtitle}>Genre: </Text>
      <View>
          <View style={styles.flexRow}>
            {[1, 2, 3,].map((i) => (
            <TouchableOpacity
                key={`genre${i}`}
                style={styles.buttonGenre}
            >
                <Text style={styles.genre}>Genre</Text>
            </TouchableOpacity>
            ))}
          </View>

        </View>
        </View>
        <Text style={styles.subtitle}>Synopsis:</Text>
        <Text style={styles.Description}>
        Ketika membicarakan soal isekai, hal pertama yang terlintas di benak kalian pasti adalah dunia fantastis yang dipenuhi banyak makhluk mitologi seperti ras elf, iblis, kurcaci, demi-human, dan lain-lain.

Kalian juga pasti membayangkan kalau akan mendapat kekuatan luar biasa yang membuat seisi dunia ini bersorak kagum dan mengagungkan eksistensi kalian.

Kejayaan, kekayaan, wanita, semua berkah tersebut seakan berlimpah pada protagonis yang berpindah ke isekai.

Namun, kenyataan tidaklah semanis itu.

Benar, aku Nishida Kyouichi. Mau tidak mau harus mengakuinya, dunia tempatku terlempar ini… adalah dunia kejam yang tidak diberkahi!
        </Text>
        <View style={[styles.fixtitle, { justifyContent: 'space-evenly' }]}>
        <TouchableOpacity style={styles.downWrapper}>
            <View style={styles.downbutton}>
            <Text style={styles.downtextButton}>Download</Text>
            <Text style={{ marginTop: 4, marginLeft: 5,}}>
            <FontAwesome
                    name="download"
                    size={16}
                    style={{ color: 'white' }}
                    />
            </Text>
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookWrapper}>
            <View style={styles.bookbutton}>
            <Text style={styles.booktextButton}>Bookmark</Text>
            <Text style={{ marginTop: 4, marginLeft: 5,}}>
            <FontAwesome
                    name="bookmark"
                    size={16}
                    style={{ color: font_color.primary.main, marginRight: 4 }}
                    />
            </Text>
            </View>
      </TouchableOpacity>
      </View>

        <View style={styles.blockViews2}>
            <Text style={styles.chap}>Chapter</Text>
            <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main, fontSize: 18, fontWeight: '700', }}>Chapter 5</Text>
                </View>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={20}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main, fontSize: 18, fontWeight: '700', }}>Chapter 4</Text>
                </View>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={20}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main, fontSize: 18, fontWeight: '700', }}>Chapter 3</Text>
                </View>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={20}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main, fontSize: 18, fontWeight: '700', }}>Chapter 2</Text>
                </View>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={20}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main, fontSize: 18, fontWeight: '700', }}>Chapter 1</Text>
                </View>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={20}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    </View>
  </ScrollView>
  </View>
);
};