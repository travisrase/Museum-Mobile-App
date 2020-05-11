import React from 'react';
import { View, Text,Button } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";
import { useNavigation } from '@react-navigation/native';
import roomOverviewScreenService from './roomOverviewScreenService';
import GlobalVariables from '../../styles/variables';
import styles from './roomOverviewScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {setZone} from '../section-overview-screen/sectionOverviewScreenActions';
import { connect } from 'react-redux';


class RoomOverviewScreen extends React.Component {

    state = {
        zones: []
    };

    onSwipe(gestureName, navigation) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                navigation.navigate('Home')
                break;
            case SWIPE_DOWN:
                break;
            case SWIPE_LEFT:
                navigation.navigate('SectionOverview')
                break;
            case SWIPE_RIGHT:
                navigation.navigate('Home')
                break;
        }
    }

    onDoubleTap(navigation) {
        navigation.navigate('SectionOverview');
    }

    async componentDidMount(){
        const response = await roomOverviewScreenService.getZones()
        const zone_objects = response.body.zones
        var zones = []
        for ( var i =0; i<zone_objects.length; i++){
            zones.push(
                {
                    id: zone_objects[i].id,
                    name: zone_objects[i].name
                })
        }
        this.setState({zones:zones})
    }

    renderZoneButtons = () => {
        const views = [];
        for ( var i =0; i<this.state.zones.length; i++){
         views.push(
            <TouchableOpacity
               key={this.state.zones[i].id}
               onPress={setZone(1)}
               style={styles.zoneButton}
               accessibilityLabel= {"Click to Natigate to Learn more about Zone: " + this.state.zones[i]}
            >
                <Text style = {styles.zoneButtonText}>
                    {this.state.zones[i].name}
                </Text>
            </TouchableOpacity>
        );
        } 
        return views;
    }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation)}
            >
                <View style={styles.container}>
                    <View>
                        <DoubleClick
                            doubleTap={() => this.onDoubleTap(this.props.navigation)}
                            delay={300}
                        >
                            <Text style={styles.header}>
                                Room Screen
                            </Text>
                        </DoubleClick>
                        <View style = {styles.zoneButtonView}>
                            {this.renderZoneButtons()}
                        </View>
                    </View>

                </View>
            </GestureRecognizer>
        );
    }
}

//Connect both state (props) and function (dispatches) to Component; 
export default connect(null,{setZone})(RoomOverviewScreen);