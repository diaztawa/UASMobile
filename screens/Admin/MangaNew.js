import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import cover from '../../assets/images/cover/010.jpg';
import Constants from 'expo-constants';
import useTheme from '../../hooks/useTheme';

const { font_color, font_size } = useTheme();

const MangaNewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: font_color.primary.main,
        }}
      >
      <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.goBack()}>
        <FontAwesome
          name="angle-left"
          size={30}
          style={{ color: font_color.common.white, }}
        />
      </TouchableOpacity>
      <Text style={styles.text}>New Manga</Text>
    </View>
      <ScrollView>

        <TouchableOpacity style={styles.icon2}>
          <View style={{ padding: 30, marginLeft: 30 }}>
            <FontAwesome
              name="plus-circle"
              size={90}
              color="#bdd1df"
            ></FontAwesome>
          </View>
          <View>
            <Text style={styles.text3}>Add Cover</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.Name}>Manga Name</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Insert Manga Name"
              placeholderTextColor="#003f5c"
            />
          </View>
        </View>

        <View>
          <Text style={styles.Name}>Alternative Name</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Edit Name"
              placeholderTextColor="#003f5c"
            />
          </View>
        </View>

        <View>
          <Text style={styles.Name}>Release Year </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Edit Year"
              placeholderTextColor="#003f5c"
            />
          </View>
        </View>

        <View>
          <Text style={styles.Name}>Author</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Edit Author"
              placeholderTextColor="#003f5c"
            />
          </View>
        </View>

        <View>
          <Text style={styles.Name}>Artist</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Edit Artist"
              placeholderTextColor="#003f5c"
            />
          </View>
        </View>

        <View>
          <Text style={styles.Name2}>Synopsis</Text>
          <View style={styles.inputView2}>
            <TextInput
              style={styles.inputText2}
              placeholder="Desc Goes Here"
              placeholderTextColor="#003f5c"
            />
          </View>
        </View>

        <View style={styles.button1}>
          <TouchableOpacity style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Text style={styles.textButton2}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MangaNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    flexDirection: "row",
    width: 400,
    backgroundColor: "#6496b7",
    marginTop: "auto",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 5,
    marginHorizontal: 80,
    alignSelf: 'center',
  },
  text3: {
    fontSize: 21,
    color: "#c7c7c7",
    paddingVertical: 5,
    paddingHorizontal: 50,
    paddingBottom: 20,
    fontWeight: "bold",
  },
  cover: {
    width: 222,
    height: 298,
    justifyContent: "center",
    marginLeft: 70,
    marginTop: 20,
  },
  inputView: {
    borderColor: "#6496b7",
    backgroundColor: "#ddedfc",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    marginTop: 10,
    width: 350,
    borderWidth: 1,
    borderColor: "#6496b7",
    marginLeft: 5,
  },
  inputText: {
    height: 30,
    color: "black",
    fontSize: 16,
  },
  Name: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },

  inputView2: {
    borderColor: "#6496b7",
    backgroundColor: "#ddedfc",
    borderRadius: 30,
    paddingBottom: 90,
    paddingHorizontal: 20,
    fontSize: 20,
    marginTop: 10,
    width: 350,
    borderWidth: 1,
    borderColor: "#6496b7",
    marginLeft: 5,
  },
  inputText2: {
    color: "black",
    marginTop: 10,
    fontSize: 16,
    marginBottom: 30,
  },
  Name2: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },

  button1: {
    flexDirection: "row",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#6496b7",
    paddingVertical: 20,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 90,
    alignItems: "center",
  },

  textButton2: {
    color: "#FFFF",
    fontSize: 16,
    marginLeft: 50,
    marginRight: 50,
  },
  icon2: {
    width: 200,
    height: 210,
    backgroundColor: "#ffff",
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 70,
  },
});
