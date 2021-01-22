import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import useTheme from '../../hooks/useTheme';
import {Picker} from '@react-native-picker/picker';
import ChapterRead from "../../components/ChapterRead";

const { font_color, font_size } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    width: 150,
    height: 35,
  },
  iconButton: {
    padding: 8,
    borderRadius: 100,
  },
});

const ReadScreen = ({ navigation }) => {
  const [language, setLanguage] = useState("");
  const MangaBack = () => {
    navigation.navigate('Details');
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

      <View>
          <Picker
            selectedValue = {language}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setLanguage(itemValue)
            }>
          <Picker.Item label="Chapter 29" value="29"/>
          <Picker.Item label="Chapter 30" value="30"/>
          </Picker>
      </View>


      <TouchableOpacity style={{
        height: 50,
        width: 225,
        paddingVertical: 13,
      }}
        onPress={MangaBack}
      >
        <Text style={{fontSize: font_size.size.sm}}>
          World Without Blessings
        </Text>
      </TouchableOpacity>

    </View>

    <ScrollView style={{ paddingHorizontal: 0 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <ChapterRead key={i} navigation={navigation} />
      ))}
    </ScrollView>

  </View>
  )};

export default ReadScreen;