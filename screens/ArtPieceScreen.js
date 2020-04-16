import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import ArtPieceScreenComponent from "../components/art-piece-screen/ArtPieceScreen";
import styles from '../styles/App.scss';

export default function ArtPieceScreen({ navigation }) {
    return (
        <View>
          <ArtPieceScreenComponent
              navigation={navigation}
          ></ArtPieceScreenComponent>
        </View>
  
    )
  }