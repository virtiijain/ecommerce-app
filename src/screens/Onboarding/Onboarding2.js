import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';

const Onboarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/ob1.png')}
        style={styles.topImage}
        resizeMode="stretch"  
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Style. Curated. You</Text>
        <Text style={styles.subtitle}>
          Explore trends & find what flatters you. We make it simple.
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        {/* Pagination dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, { backgroundColor: '#000' }]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <CustomButton
          title="next →"
          backgroundColor="#000"
          textColor="#fff"
          onPress={() => navigation.navigate('Onboarding3')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  topImage: {
    width: '100%',
    height: 550,  
    marginTop: 0,
    paddingTop: 0,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: "MontserratAlternates-Bold"
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    fontFamily: "MontserratAlternates-Medium",
    lineHeight: 20,
  },
  bottomContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
});

export default Onboarding2;
