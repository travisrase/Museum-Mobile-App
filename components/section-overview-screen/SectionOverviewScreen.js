import React from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";
import styles from './sectionOverviewScreenStyle'

class SectionOverviewScreen extends React.Component {
    onSwipe(gestureName, navigation) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
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
    onDoubleTap(navigation){
        navigation.navigate('ArtPiece')
    }


    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
            >
                <View style={styles.container}>
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

                </View>
            </GestureRecognizer>
        )
    }
}

export default SectionOverviewScreen;