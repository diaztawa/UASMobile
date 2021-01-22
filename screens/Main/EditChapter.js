import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { StatusBar } from 'expo-status-bar';
import { Content, Header, Body, Title, Separator, Left, Right, Button, Card } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';


const { font_color, font_size, radius } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.gray.light,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: font_size.size.xl,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  row: { flexDirection: 'row' },
  input: {
    borderColor: font_color.common.gray.main,
    borderWidth: 3,
    backgroundColor: '#dbebfa',
    borderColor: font_color.primary.main,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.pil,
    fontSize: font_size.size.md
  },
  button: {
    backgroundColor: font_color.primary.main,
    borderRadius: radius.pil,
    padding: 28,
    alignItems: 'center',
  },
  alert: {
    padding: 16,
    marginBottom: 16,
    borderRadius: radius.normal,
    backgroundColor: font_color.error.main,
  },
  imageBackground: {
    width: '100%',
    height: 75,
    backgroundColor: font_color.primary.main,
  },
  objectMargin: {
      marginVertical: 5
  },
  inputChap: {
    height: 225, 
    width: 175, 
    backgroundColor: 'white', 
    borderRadius: 20,
    margin: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    right: 10
  }
});

export default function EditChapterScreen({navigation}) {

  return(
    <View style={styles.container}>
        <Header style={{ backgroundColor: font_color.primary.main }}>
            <Left style={{ flex: 0.8}}>
                <Button transparent icon onPress={() => navigation.goBack()}>
                    <FontAwesome name="chevron-left" size={20} style={{ color: font_color.common.white }}/>
                </Button>
            </Left>
            <Body style={{flex: 1, justifyContent: 'center'}}>
                <Title>Edit Chapter</Title>
            </Body>
            <Right style={{flex: 0.2}}/>
        </Header>
        <Content style={styles.container}>
            <View style={{paddingHorizontal: 20}}>

                <View style={{ marginTop: 15}}>
                    <Text style={{ fontSize: font_size.size.md }}>Chapter Title</Text>
                </View>
                <TextInput 
                placeholder="Edit Chapter Name"
                style={[styles.input, styles.objectMargin]}>
                </TextInput>
                <View style={{ marginTop:15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#ddedfb', width: 200, borderRadius: 20}}>
                            <TouchableOpacity style={styles.inputChap}>
                                <FontAwesome name="plus-circle" size={65} color={'gray'}style={{ alignSelf: 'center', paddingTop: 65}}/>
                                <Text style={{ color: 'black', alignSelf: 'center' }}>Add Chapter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={[styles.objectMargin, { marginTop: 38, justifyContent: 'space-evenly', flexDirection: 'row' }]}>
                <Button style={[styles.button, { alignSelf: 'center' }]}>
                  <Text style={{ color: font_color.common.white, fontSize: font_size.size.md }}>
                    Submit
                  </Text>
                </Button>
                <Button style={[styles.button, { alignSelf: 'center', backgroundColor: font_color.error.main }]}>
                  <Text style={{ color: font_color.common.white, fontSize: font_size.size.md }}>
                    Delete Chapter
                  </Text>
                </Button>  
                </View>


            </View>
        </Content>
        <StatusBar hidden/>
    </View>
  );
};