import React, {useContext, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import AuthContext from '../context/AuthContext';
import useTheme from '../hooks/useTheme';
import firebase from '../firebase.config';
import { StatusBar } from 'expo-status-bar';


const { font_color, font_size, radius } = useTheme();

const styles = StyleSheet.create({
  container: {
    
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
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
    borderWidth: 1,
    backgroundColor: '#dbebfa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.pil,
    fontSize: font_size.size.md
  },
  button: {
    backgroundColor: font_color.primary.main,
    borderRadius: radius.pil,
    padding: 12,
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
  textSecondary:{
      fontSize: font_size.size.md,
      color: font_color.text.secondary
  }
});

export default function SettingsProfile({navigation}) {
    const [user, setUser] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [shown, setShown] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const {logout} = useContext(AuthContext);
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        setUser(user);
        });
        return () => unsubscribe();
    }, []);

    async function LogoutLogic() {
        setLoading(true);
        try {
          await logout();
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }

  return(
    <View style={styles.container}>


        <View>
          <View>
            <Text style={styles.textSecondary}>Edit Profile Name</Text>
            <TextInput
              value={user}
              onChangeText={(text) => setUser(text)}
              placeholder="Profile Name"
              style={[styles.input, { marginBottom: 12 }]}
            />
          </View>

          <View style={{ marginTop: 8 }}>
              <Text style={styles.textSecondary}>Edit Password</Text>
            <TextInput
              secureTextEntry={!shown}
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="******"
              style={styles.input}
            />
            <TextInput
              secureTextEntry={!shown}
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="New Password"
              style={[styles.input, { marginTop: 12 }]}
            />
            <TextInput
              secureTextEntry={!shown}
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="Retype New Password"
              style={[styles.input, { marginTop: 12 }]}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={styles.textSecondary}>Edit Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={[styles.input, { marginBottom: 12 }]}
            />
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: font_color.common.white, fontSize: font_size.size.md }}>Edit</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, {backgroundColor: font_color.error.main, marginTop: 12}]}
              onPress={LogoutLogic}
            >
              <Text style={{ color: font_color.common.white, fontSize: font_size.size.md }}>Log out</Text>
            </TouchableOpacity>
          </View>

        </View>
        <StatusBar hidden/>
    </View>
  );
};