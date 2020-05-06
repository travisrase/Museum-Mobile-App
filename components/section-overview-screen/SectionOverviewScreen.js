import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";
import sectionOverviewScreenService from "./sectionOverviewScreenService";
import GlobalVariables from '../../styles/variables';
import styles from './sectionOverviewScreenStyle'
import {connect} from 'react-redux';
import {setArtPiece} from '../art-piece-screen/artPieceScreenActions';

class SectionOverviewScreen extends React.Component {

    state = {
        title1: '',
        title2: '',
        title3: '',
        title4: '',
        title5: '',
        title6: '',
    };

    componentDidMount() {
        let information1 = sectionOverviewScreenService.getTitle1();
        let information2 = sectionOverviewScreenService.getTitle2();
        let information3 = sectionOverviewScreenService.getTitle3();
        let information4 = sectionOverviewScreenService.getTitle4();
        let information5 = sectionOverviewScreenService.getTitle5();
        let information6 = sectionOverviewScreenService.getTitle6();
        this.setState({
            title1: information1.title,
            title2: information2.title,
            title3: information3.title,
            title4: information4.title,
            title5: information5.title,
            title6: information6.title,
        });
    };

    onSwipe(gestureName, navigation) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
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
                navigation.navigate('ArtPiece')
                //  this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                console.log("RIGHT")
                navigation.navigate('RoomOverview')
                break;
        }
    }
    onDoubleTap(navigation, title, id){
        //Call Redux function
        this.props.setArtPiece(title,id)
        navigation.navigate('ArtPiece')
    }


    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
            >
                <View style={styles.container}>
                    <Text style = {GlobalVariables.navigationLabels}>
                        Swipe Up To Return Home
                    </Text>

                    <Text style = {styles.header}>
                        Section 1
                    </Text>

                    <View style = {styles.columnLayout}>
                        <TouchableOpacity style = {styles.artPieceTitleButton}>
                            <DoubleClick
                                singleTap={() => {
                                    console.log("single tap");
                                }}
                                doubleTap={() => this.onDoubleTap(this.props.navigation, this.state.title1, 1)}
                                delay={300}
                            >
                                <Text style = {styles.buttonText}>
                                    {this.state.title1} 
                                </Text>
                            </DoubleClick>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.artPieceTitleButton}>
                            {/* need to add in DOUBLE TAP layer */}
                            <Text style = {styles.buttonText}>
                                {this.state.title2} 
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.columnLayout}>
                        <TouchableOpacity style = {styles.artPieceTitleButton}>
                            {/* need to add in DOUBLE TAP layer */}
                            <Text style = {styles.buttonText}>
                                {this.state.title3} 
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.artPieceTitleButton}>
                            {/* need to add in DOUBLE TAP layer */}
                            <Text style = {styles.buttonText}>
                                {this.state.title4} 
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.columnLayout}>
                        <TouchableOpacity style = {styles.artPieceTitleButton}>
                            {/* need to add in DOUBLE TAP layer */}
                            <Text style = {styles.buttonText}>
                                {this.state.title5} 
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.artPieceTitleButton}>
                            {/* need to add in DOUBLE TAP layer */}
                            <Text style = {styles.buttonText}>
                                {this.state.title6} 
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/*
                    <View>
                        <DoubleClick
                            singleTap={() => {
                                console.log("single tap");
                            }}
                            doubleTap={() => this.onDoubleTap(this.props.navigation)}
                            delay={300}
                        >
                            <Text style = {styles.header}>Section Screen</Text>
                        </DoubleClick>
                    </View>
                    */}

                </View>
            </GestureRecognizer>
        )
    }
}

//You have to connect the component to the Redux Store.
export default connect(null, {setArtPiece})(SectionOverviewScreen);