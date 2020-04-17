import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import HomeScreenComponent from "../components/home-screen/HomeScreen";
import styles from '../styles/App.scss';

export default function HomeScreen({ navigation }) {
  return (
      <View>
        <HomeScreenComponent
            navigation={navigation}
        ></HomeScreenComponent>
      </View>

  )
}