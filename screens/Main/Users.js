import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import ListMangaItem from '../../components/ListMangaItem';
import SettingsProfile from '../../components/SettingsProfile';
import covers from '../../assets/images/cover/Users/001.jpg';
import avatar from '../../assets/images/avatar/user1.jpg';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const { font_color, radius, font_size } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  covers: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  totalBookmark: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: font_color.primary.main,
    borderRadius: radius.normal,
  },
  bookmarkLabel: {
    paddingHorizontal: 2,
    color: font_color.common.white,
  },
  imageInnerWrapper: {
    zIndex: 1,
    borderRadius: radius.pil,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: font_color.common.white,
  },
  imageOuterWrapper: {
    position: 'absolute',
    alignItems: 'center',
    bottom: -40,
    right: 0,
    left: 0,
  },
  username: {
    fontSize: font_size.size.md,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    color: font_color.text.secondary,
  },
  Title: {
    marginBottom: 14,
    fontSize: font_size.size.md,
    fontWeight: 'bold',
  },
  scene: {
    flex: 1,
  },
});

const UsersScreen = ({ navigation }) => {
  const FirstRoute = () => (
    <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
          
          <View>
            {[1, 2, 3, 4].map((i) => (
              <ListMangaItem key={i} navigation={navigation} />
            ))}
          </View>
  
    </View>
  );
  const SecondRoute = () => (
    <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
          
          <View>
            {[1, 2, 3, 4].map((i) => (
              <ListMangaItem key={i} navigation={navigation} />
            ))}
          </View>
  
    </View>
  );
  const ThirdRoute = () => (
    <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
          
          <View>
            <SettingsProfile/>
          </View>
  
    </View>
  );
  const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Bookmark' },
      { key: 'second', title: 'History' },
      { key: 'third', title: 'Settings' },
    ]);
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
    });

  return(
  <ScrollView style={styles.container}>

    <View>
      <Image
        style={styles.covers}
        source={covers}
      />
      
      <View style={styles.imageOuterWrapper}>
        
        <View style={styles.imageInnerWrapper}>
          <Image
            style={styles.avatar}
            source={avatar}
          />
        </View>
      
      </View>

    </View>

    <View>
      
      <View style={{ alignItems: 'center', marginTop: 42, paddingHorizontal: 24 }}>
        <Text style={styles.username}>Hanzu Seinaru</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.description, { fontWeight: 'bold' }]}>Date Joined: </Text>
          <Text style={ styles.description }>16/1/21</Text>
        </View>
        
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ color: font_color.text.secondary, fontWeight: 'bold' }}>
              Status: 
          </Text>
          <Text style={{ color: font_color.text.secondary }}>Member</Text>
        </View>

      </View>

      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={{ marginTop: 10 }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          activeColor={font_color.common.white}
          style={{
            backgroundColor: font_color.primary.main,
            elevation: 0,
            borderBottomWidth: 1,
            borderColor: '#e0e0e0',
          }}
          indicatorStyle={{backgroundColor: font_color.common.white}}
        />
      )}
    />

    </View>

  </ScrollView>
)};

export default UsersScreen;