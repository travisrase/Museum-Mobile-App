import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import HomeScreenComponent from "../components/home-screen/HomeScreen";
import styles from '../styles/App.scss';
// import { MonoText } from '../components/StyledText';
//
// const styles = StyleSheet.create({
//   homePageHeader: {
//     color: 'black',
//     textAlign: 'center',
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     fontSize: 30
//   },
//   bowdoinSeal: {
//     marginTop: 20,
//     width: 70,
//     height: 70,
//     alignSelf: 'center'
//   },
//   blackPageView: {
//     backgroundColor: 'black',
//     height: 400,
//     marginLeft: 5,
//     marginRight: 5,
//     alignSelf: 'center',
//     marginTop: 60
//   },
//   whitePageView: {
//     backgroundColor: 'white',
//     height: 380,
//     marginLeft: 10,
//     marginRight: 10,
//     alignSelf: 'center',
//     marginTop: 10
//   },
//   subheaderText: {
//     color: 'black',
//     textAlign: 'center',
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     fontSize: 25
//   },
//   bodyText: {
//     color: 'black',
//     textAlign: 'center',
//     fontStyle: 'normal',
//     fontSize: 17
//   }
// });
//
// function onSwipe(gestureName, navigation) {
//   const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
//   //this.setState({gestureName: gestureName});
//   switch (gestureName) {
//     case SWIPE_UP:
//       console.log("UP")
//       // this.setState({backgroundColor: 'red'});
//       break;
//     case SWIPE_DOWN:
//       console.log("DOWN")
//       //  this.setState({backgroundColor: 'green'});
//       break;
//     case SWIPE_LEFT:
//       navigation.navigate('RoomOverview')
//       //  this.setState({backgroundColor: 'blue'});
//       break;
//     case SWIPE_RIGHT:
//       break;
//   }
// }
//
// function onSwipeLeft(direction, navigation) {
//   navigation.navigate('RoomOverview');
// }

export default function HomeScreen({ navigation }) {
  return (
      <View>
        <HomeScreenComponent
            navigation={navigation}
        ></HomeScreenComponent>
      </View>

  )
}