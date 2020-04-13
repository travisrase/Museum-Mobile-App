import React from 'react';
import { View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";

function onSwipe(gestureName, navigation) {
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
            console.log("LEFT")
            //  this.setState({backgroundColor: 'blue'});
            break;
        case SWIPE_RIGHT:
            navigation.navigate('Home')
            break;
    }
}

function onSwipeRight(direction, navigation) {
    navigation.navigate('Home');
};

function onDoubleTap(navigation) {
    navigation.navigate('SectionOverview');

}


export default function RoomOverviewScreen({ navigation }) {
    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, navigation )}
            onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
        >
                <View>
                    <DoubleClick
                        singleTap={() => {
                            console.log("single tap");
                        }}
                        doubleTap={() => onDoubleTap(navigation)}
                        delay={200}
                    >
                    <Text>Room Screen</Text>
                    </DoubleClick>
                </View>
        </GestureRecognizer>
    )
}