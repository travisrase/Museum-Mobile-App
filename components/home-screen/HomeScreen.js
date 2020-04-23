import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import homeScreenService from "./homeScreenService";

import styles from "./homeScreenStyle";

class HomeScreen extends React.Component {

    state = {
        location: ""
    };

    componentDidMount() {
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
                                Welcome to the Bowdoin Art Museum App!
                            </Text>
                            <Text style = {styles.bodyText}>
                                You are currently in {this.state.location}
                            </Text>
                            <Text style = {styles.bodyText}>
                                To learn more about this exhibit swipe left
                            </Text>
                        </View>
                    </View>
                </GestureRecognizer>
            </View>
        );
    }
}

export default HomeScreen;