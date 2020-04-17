'use strict'

import {StyleSheet} from "react-native";
import GlobalVariables from '../../styles/variables'


const styles = StyleSheet.create({
    sectionName: {
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24
    },
    bodyText: {
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24
    },
    column: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 380,
        height: 400
    }
});

export default styles;