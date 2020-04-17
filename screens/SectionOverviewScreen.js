import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SectionOverviewScreenComponent from "../components/section-overview-screen/SectionOverviewScreen";
import DoubleClick from "react-native-double-tap";
import styles from '../styles/App.scss';


export default function SectionOverviewScreen({ navigation }) {
    return (
        <View>
            <SectionOverviewScreenComponent
                navigation={navigation}
            ></SectionOverviewScreenComponent>
        </View>
    )
}

