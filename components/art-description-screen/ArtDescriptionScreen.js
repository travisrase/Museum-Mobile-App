import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import DoubleClick from "react-native-double-tap";
import styles from "./ArtDescriptionScreenStyles";
//import Tts from 'react-native-tts';
import * as Speech from 'expo-speech'
import GlobalVariables from '../../styles/variables';
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
                        <TouchableOpacity style = {styles.artPieceRightButton}>
                        <DoubleClick
                                singleTap={() => {
                                    console.log("single tap");
                                }}
                                doubleTap={() => {Speech.speak(this.state.basic)}}
                                delay={300}
                            >
                                
                            <Text style = {styles.buttonLabels}>
                                Basic Description
                            </Text>
                            
                            </DoubleClick>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.artPieceRightButton}>
                        <DoubleClick
                                singleTap={() => {
                                    console.log("single tap");
                                }}
                                doubleTap={() => {Speech.speak(this.state.spatial);}
                                }
                                delay={300}
                            >
                            <Text style = {styles.buttonLabels}>
                                Spatial Description
                            </Text>
                            </DoubleClick>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.artPieceRightButton}>
                        <DoubleClick
                                singleTap={() => {
                                    console.log("single tap");
                                }}
                                doubleTap={() => {Speech.speak(this.state.thematic);}
                                }
                                delay={300}
                            >
                            <Text style = {styles.buttonLabels}>
                                Thematic Description
                            </Text>
                        </DoubleClick>
                        </TouchableOpacity>
                </View>
                </View>
            </GestureRecognizer>
        )
    }
}
export default ArtDescriptionScreen;