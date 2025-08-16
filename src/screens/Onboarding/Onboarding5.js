import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Onboarding5 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/ob-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.brand}>BONKERS{'\n'}CORNER</Text>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.buttonText}>Start Browsing</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don’t have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.replace('Signup')}
          >
            SignUp
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    marginTop: 80,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'MontserratAlternates-Bold',
    color: '#000',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'MontserratAlternates-Bold',
  },
  signupText: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'MontserratAlternates-Medium',
  },
  signupLink: {
    fontWeight: '700',
    color: '#000',
  },
});

export default Onboarding5;
