'use strict'

import {StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables';
import { Dimensions } from 'react-native';
const widthW = Dimensions.get('window').width;
const heightW = Dimensions.get('window').height;



const styles = StyleSheet.create({
    window: {
        width: widthW,
        height: heightW,
        borderWidth: 3,
        borderColor: 'yellow'
    },
    header: {
        color: GlobalVariables.commonColors.color,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 20
    },
    bodyText: {
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        borderWidth: 1,
        flexShrink: 1,
        //width: '50%',
        borderColor: GlobalVariables.commonColors.color
    },
    columnLayout: {
        flexDirection:'column',
        alignItems:'center',
        borderWidth: 5,
        borderColor: 'black'
    },
    image: {
        flexShrink: 1,
        width: '75%',
        height: '65%',
        marginTop: 0,
        marginBottom: 0,
        //marginRight:10,
        //marginLeft:10,
        resizeMode:'contain',
        
        borderWidth: 1,
        borderColor: GlobalVariables.commonColors.color
    }
});

export default styles;