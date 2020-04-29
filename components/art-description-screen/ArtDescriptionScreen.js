import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./ArtDescriptionScreenStyles";
import artDescriptionScreenService from "./ArtDescriptionScreenService";


class ArtDescriptionScreen extends React.Component {

    state = {
        title: '',
        basic: '',
        spatial: '',
        thematic: ''
    };

    componentDidMount() {
        let information = artDescriptionScreenService.getArtPieceDescriptions();
        this.setState({
            title: information.title,
            basic: information.basic,
            spatial: information.spatial,
            thematic: information.thematic
        });
    };

    onSwipe(gestureName, navigation) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                console.log("UP")
                navigation.navigate('Home')
                // this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                //  this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                console.log("LEFT")
                //this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                navigation.navigate('RoomOverview')
                break;
        }
    }

    render(){
        return(
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation )}
                //onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
            >
                <View style={styles.container}>

                    <Text style = {styles.header}>
                        {this.state.title}
                    </Text>
                    <View style = {styles.columnLayout}>
                        <View>
                            <Text style = {styles.bodyText}>
                                Basic Description: {this.state.basic}

                            </Text>
                            <Text style = {styles.bodyText}>
                                Spatial Description: {this.state.spatial}
                            </Text>
                            <Text style = {styles.bodyText}>
                                Thematic Description: {this.state.thematic}
                            </Text>
                        </View>
                    </View>
                </View>
            </GestureRecognizer>
        )
    }
}

export default ArtDescriptionScreen;