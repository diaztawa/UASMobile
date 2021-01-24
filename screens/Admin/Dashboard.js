import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Constants from 'expo-constants';
import useTheme from '../../hooks/useTheme';

const { font_color, font_size } = useTheme();
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
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  Navbaar: {
    width: 400,
    height: 100,
    backgroundColor: "#6496b7",
  },
  text3: {
    fontSize: 15,
    color: "#f8f8f8",
    alignSelf: 'center',
    fontWeight: "bold",
  },
  text4: {
    fontSize: 15,
    color: "#f8f8f8",
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
    fontWeight: "bold",
  },
  icon: {
    alignSelf: 'center',
  },
  icon2: {
    width: 165,
    height: 209,
    backgroundColor: "#6496b8",
    paddingVertical: 50,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
});


const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{
            padding: 10,
            backgroundColor: font_color.primary.main,
          }}
          >
            <Text style={styles.text}>Admin Dashboard </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Hello, Insert Name
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.icon2} onPress={()=>navigation.navigate('MangaList')}>
            <View>
              <FontAwesome 
              name="folder"
              size={90} 
              color="#f8f8f8"
              style={styles.icon}
              ></FontAwesome>
              <Text style={styles.text3}>Manga List</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon2} onPress={()=>navigation.navigate('CRUDChapter')}>
            <View>
              <FontAwesome
                name="folder"
                size={90}
                color="white"
                style={styles.icon}
              ></FontAwesome>
              <Text style={styles.text3}>Chapter List</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default DashboardScreen;

