import React from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";
import { useNavigation } from '@react-navigation/native';
import styles from './RoomOverviewScreenStyles'


class RoomOverviewScreen extends React.Component {

    onSwipe(gestureName, navigation) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                console.log("UP")
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                break;
            case SWIPE_LEFT:
                console.log("LEFT")
                navigation.navigate('SectionOverview')
                break;
            case SWIPE_RIGHT:
                console.log("RIGHT")
                navigation.navigate('Home')
                break;
        }
    }

    onDoubleTap(navigation) {
        navigation.navigate('SectionOverview');
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
                            delay={200}
                        >
                            <Text style={styles.header}>
                                Room Screen
                            </Text>
                        </DoubleClick>
                    </View>

                </View>
            </GestureRecognizer>
        );
    }
}

export default RoomOverviewScreen;