import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import homeScreenService from "./homeScreenService";
import GlobalVariables from '../../styles/variables';
import { getAllArtPieces} from "../art-piece-screen/artPieceScreenActions";
import {connect} from 'react-redux';
import styles from "./homeScreenStyle";

class HomeScreen extends React.Component {
    state = {
        location: ""
    };

    componentDidMount() {
        this.props.getAllArtPieces();
        let location = homeScreenService.getCurrentLocation();
        console.log(location)
        this.setState({location: location})
    };

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

    navigateToRoomOverview = () => {
        console.log("pressed")
        this.props.navigation.navigate('RoomOverview')
    }

    render() {
        console.log(styles.homePageHeader.color)
        return(
            <View style={styles.container} accessible={true}>
                <GestureRecognizer
                    onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
                    onSwipeLeft={(direction) => this.onSwipeLeft(direction, this.props.navigation)}
                >
                    <Text style = {styles.homePageHeader}>
                        Bowdoin Art Museum
                    </Text>
                    <Image
                        style={styles.bowdoinSeal}
                        source={require('../../assets/images/Bowdoin_Seal.png')}
                    />
                    <Text style = {GlobalVariables.navigationLabels}>
                        Swipe Left for Overview of Room
                    </Text>

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
                                Room: Main
                            </Text>
                            <Text style = {styles.subheaderText}>
                                Section: 1

                            </Text>
                        </View>
                        <TouchableOpacity 
                            style = {styles.sectionOverviewButton} 
                            onPress={this.navigateToRoomOverview}
                            accessibilityLabel= "Click to Natigate to Room Overview Screen"
                        >
                            <Text style = {styles.sectionOverviewButtonText}>
                                Room Overview
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </GestureRecognizer>
            </View>
        );
    }
}

export default connect(null, {getAllArtPieces})(HomeScreen);