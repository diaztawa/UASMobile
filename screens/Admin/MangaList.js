import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import cover from '../../assets/images/cover/010.jpg';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Constants from 'expo-constants';
import useTheme from '../../hooks/useTheme';

const { font_color, font_size } = useTheme();

const MangaListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{
              padding: 10,
              backgroundColor: font_color.primary.main,
            }}
            >
              <Text style={styles.text}>Admin Panel</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Search"
            placeholderTextColor="#003f5c"
          />
        </View>
        <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('MangaNew')}>
          <View style={{ padding: 10 }}>
            <FontAwesome
              name="plus-circle"
              size={60}
              color="#bdd1df"
            ></FontAwesome>
          </View>
          <View>
            <Text style={styles.text2}>New Add Manga</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.komik}>
          <Image source={cover} style={styles.cover} />
          <View>
            <Text style={styles.textkomik1}>
              R.I.P Yugihama Yui (2013-2020)
            </Text>
            <Text style={styles.textkomik2}>25 CHAPTERS</Text>
            <Text style={styles.textkomik3}>Last Update 16/1/21</Text>
            <View style={styles.button1}>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('Edit')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Edit Manga</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('AddChapter')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Add New Chapter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.komik}>
          <Image source={cover} style={styles.cover} />
          <View>
            <Text style={styles.textkomik1}>
              R.I.P Yugihama Yui (2013-2020)
            </Text>
            <Text style={styles.textkomik2}>25 CHAPTERS</Text>
            <Text style={styles.textkomik3}>Last Update 16/1/21</Text>
            <View style={styles.button1}>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('Edit')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Edit Manga</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('AddChapter')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Add New Chapter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.komik}>
          <Image source={cover} style={styles.cover} />
          <View>
            <Text style={styles.textkomik1}>
              R.I.P Yugihama Yui (2013-2020)
            </Text>
            <Text style={styles.textkomik2}>25 CHAPTERS</Text>
            <Text style={styles.textkomik3}>Last Update 16/1/21</Text>
            <View style={styles.button1}>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('Edit')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Edit Manga</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('AddChapter')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Add New Chapter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.komik}>
          <Image source={cover} style={styles.cover} />
          <View>
            <Text style={styles.textkomik1}>
              R.I.P Yugihama Yui (2013-2020)
            </Text>
            <Text style={styles.textkomik2}>25 CHAPTERS</Text>
            <Text style={styles.textkomik3}>Last Update 16/1/21</Text>
            <View style={styles.button1}>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('Edit')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Edit Manga</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('AddChapter')}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Add New Chapter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MangaListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 5,
    alignSelf: 'center',
  },
  Navbaar: {
    width: 400,
    height: 100,
    backgroundColor: "#6496b7",
  },
  inputView: {
    borderColor: "#6496b7",
    backgroundColor: "#ddedfc",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 5,
    width: 350,
  },
  inputText: {
    height: 30,
    color: "black",
  },
  icon: {
    flexDirection: "row",
    width: 330,
    backgroundColor: "#ffff",
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  text2: {
    fontSize: 20,
    color: "#c7c7c7",
    paddingVertical: 30,
    alignItems: "center",
  },
  komik: {
    flexDirection: "row",
  },
  cover: {
    marginTop: 10,
    width: 111,
    height: 149,
    marginLeft: 10,
  },
  textkomik1: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
    maxWidth: 400,
    marginLeft: 10,
  },
  textkomik2: {
    fontSize: 15,
    marginTop: 5,
    maxWidth: 400,
    marginLeft: 10,
  },
  textkomik3: {
    fontSize: 15,
    marginTop: 5,
    maxWidth: 400,
    marginLeft: 10,
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#6496b7",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
  },
  textButton: {
    color: "#FFFF",
    fontSize: 12,
  },

  button1: {
    flexDirection: "row",
  },
});
