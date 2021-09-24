import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';

const data = [
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/onboard1.png')
    },
    {
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/images/onboard2.png'),
    },
    {
      title: 'Spend more time doing the things you love',
      text: 'Get started within five minutes',
      image: require('../assets/images/onboard3.png')
    }
  ];

const Onboard = (props) => {
    const renderItem = ({item}) => {
        return (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image}/>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        );
      };
    
      const keyExtractor = (item) => item.title;
    
      const renderNextButton = () => {
        return (
          <View style={styles.rightTextWrapper}>
            <Text style={styles.rightText}>Next</Text>
          </View>
        );
      };
      const renderDoneButton = () => {
        return (
          <View style={styles.rightTextWrapper}>
            <Text style={styles.rightText}>Done</Text>
          </View>
        );
      };
      const renderPrevButton = () => {
        return (
          <View style={styles.leftTextWrapper}>
            <Text style={styles.leftText}>Prev</Text>
          </View>
        );
      };
      const handleDone = () => {
          props.handleDone();
      };
    
      return (
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              renderDoneButton={renderDoneButton}
              renderNextButton={renderNextButton}
              renderPrevButton={renderPrevButton}
              showPrevButton
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
              data={data}
              onDone={handleDone}
            />
          </View>
      );
}

export default Onboard

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    image: {
      marginVertical: 60,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.black,
      textAlign: 'center',
      // fontFamily: 'OpenSans-SemiBold',
      marginHorizontal: 60,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.gray,
      textAlign: 'center',
      // fontFamily: 'OpenSans-SemiBold',
      marginHorizontal: 60,
      marginTop: 10,
    },
    rightTextWrapper: {
      width: 40,
      height: 40,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightText: {
      color: colors.blue,
      fontSize: 14,
    },
    leftTextWrapper: {
      width: 40,
      height: 40,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftText: {
      color: colors.blue,
      fontSize: 14,
    },
    dotStyle:{
      backgroundColor: colors.bluefaded,
    },
    activeDotStyle:{
      backgroundColor: colors.blue,
    }
  });