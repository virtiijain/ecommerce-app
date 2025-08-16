import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/ob-bg.png')}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Log into{'\n'}Your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone number/ Email"
          placeholderTextColor="#ccc"
        />
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgot}>forget?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.footer}>
            Don’t have an account? <Text style={styles.link}>SignUp</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'MontserratAlternates-Regular',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'MontserratAlternates-Bold',
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    color: '#fff',
    marginBottom: 20,
    paddingVertical: 8,
  },
  passwordRow: { flexDirection: 'row', alignItems: 'center' },
  forgot: { color: '#ccc', marginLeft: 10 },
  primaryBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
  },
  primaryText: { textAlign: 'center', color: '#fff', fontSize: 16 },
  googleBtn: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 15,
  },
  googleText: { textAlign: 'center', color: '#000', fontWeight: '600' },
  footer: { color: '#ccc', textAlign: 'center', marginTop: 25 },
  link: { color: '#fff', fontWeight: '700' },
});

export default LoginScreen;
