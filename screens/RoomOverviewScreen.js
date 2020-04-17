import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import RoomOverviewScreenComponent from "../components/room-overview-screen/RoomOverviewScreen";
import DoubleClick from "react-native-double-tap";
import styles from '../styles/App.scss';


export default function RoomOverviewScreen({ navigation }) {
    return (
        <View>
            <RoomOverviewScreenComponent
                navigation={navigation}
                ></RoomOverviewScreenComponent>
        </View>
    )
}

