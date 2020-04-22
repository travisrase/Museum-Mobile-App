'use strict'

import {StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables'


const styles = StyleSheet.create({
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
        width: '50%',
        borderColor: GlobalVariables.commonColors.color
    },
    columnLayout: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: 5,
        borderColor: 'black'
    },
    image: {
        width: '50%',
        marginRight:10,
        marginLeft:10,
        resizeMode:'contain',
        
        borderWidth: 1,
        borderColor: GlobalVariables.commonColors.color
    }
});

export default styles;