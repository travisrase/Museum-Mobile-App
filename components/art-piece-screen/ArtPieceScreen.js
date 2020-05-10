import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./artPieceScreenStyle";
import GlobalVariables from '../../styles/variables';
import {resetArtPiece} from './artPieceScreenActions';
import { connect } from 'react-redux';
import artPieceScreenService from './artPieceScreenService';
import { Image, View, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
import {  Card, CardItem, Text, } from 'native-base';

class ArtPieceScreen extends React.Component {

    state = {
        title: '',
        medium: '',
        dimensions: '',
        descriptionBasic: '',
        descriptionSpatial: '',
        descriptionThematic: '',
        imageUrl: '',
        countryOrigin: ''
    };

    componentDidMount =  async () => {
        //Calling on the Redux Store
        let artPieceId = this.props.id;
        let artPiece = await artPieceScreenService.getArtPieceInfo(artPieceId);
        this.setState({
            title: artPiece.body.title,
            imageUrl: artPiece.body.image_url,
            descriptionBasic: artPiece.body.description_basic,
            descriptionThematic: artPiece.body.description_thematic,
            descriptionSpatial: artPiece.body.description_spatial,
            countryOrigin: artPiece.body.country_origin
        });
    };

    //store piece title etc as variables
    //make this class a type of interface? not sure proper term
    //so that it can be replicated


    onSwipe(gestureName, navigation) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                //Calling function from redux to reset the art piece data
                this.props.resetArtPiece();
                navigation.navigate('Home')
                // this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                console.log("DOWN")
                navigation.navigate('ArtDescription')
                //  this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                console.log("LEFT")
                //this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                navigation.navigate('SectionOverview')
                break;
        }
    }

    render(){
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        let imageHieght = windowHeight/2
        if(this.state.imageUrl === ''){
            return (<View></View>)
        } else {
            return(
                <GestureRecognizer
                    onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation )}
                    //onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
                >
                    <View>
                        <Card>
                            <CardItem header border>
                                <Text> Title: {this.state.title}</Text>
                            </CardItem>
                            <CardItem>
                                <Image source={{uri: this.state.imageUrl}} style={{height: imageHieght, width: windowWidth, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Text> Country of Origin: {this.state.countryOrigin}</Text>
                            </CardItem>
                        </Card>
                    </View>
                    <Text style = {GlobalVariables.navigationLabels}>
                        Swipe Down To Access Descriptions
                    </Text>
                </GestureRecognizer>
            )
        }
    }
}

//Get props from redux state 
const mapStateToProps = state => ({
    title: state.artPieceData.title,
    id: state.artPieceData.id

});

//Connect both state (props) and function (dispatches) to Component; 
export default connect(mapStateToProps, {resetArtPiece})(ArtPieceScreen);