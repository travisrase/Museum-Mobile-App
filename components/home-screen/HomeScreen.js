import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./homeScreenStyle";

class HomeScreen extends React.Component {

    onSwipe(gestureName, navigation) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                console.log("UP")
                // this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                //  this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                navigation.navigate('RoomOverview')
                //  this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                break;
        }
    }

    onSwipeLeft(direction, navigation) {
        navigation.navigate('RoomOverview');
    }

    render() {
        console.log(styles.homePageHeader.color)
        return(
            <View style={styles.container} accessible={true}>
                <GestureRecognizer
                    onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation )}
                    onSwipeLeft={(direction) => this.onSwipeLeft(direction, this.props.navigation)}
                >
                    <Text style = {styles.homePageHeader}>
                        Bowdoin Art Museum
                    </Text>
                    <Image
                        style={styles.bowdoinSeal}
                        source={require('../../assets/images/Bowdoin_Seal.png')}
                    />
                    <View style = {styles.blackPageView}>
                        <View style = {styles.whitePageView}>
                            <Text style = {styles.subheaderText}>
                                Welcome!
                            </Text>
                        <View style = {styles.locationView}>
                            <Text style = {styles.subheaderText}>
                                Your Location
                                {"\n"}
                            </Text>
                            <Text style = {styles.subheaderText}>
                                Room: _____
                            </Text>
                            <Text style = {styles.subheaderText}>
                                Section: _____
                            </Text>
                        </View>
                        <TouchableOpacity style = {styles.sectionOverviewButton}>
                            <Text style = {styles.sectionOverviewButtonText}>
                                Section Overview
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </GestureRecognizer>
            </View>
        );
    }
}

export default HomeScreen;