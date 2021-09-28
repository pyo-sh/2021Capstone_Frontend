import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const hamburgerIcon = (color) => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 45 25" fill="none">
            <path d="M2.5 2.89999H42.5" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
            <path d="M2.5 12.6H42.5" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
            <path d="M2.5 22.1H42.5" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
        </svg>
    `;
}

const TopBar = (props) => {
    const { title, hasMenu } = props; 

    return <View style={styleSheet.wrapper}>
        <View style={{ width:30, marginLeft: 10 }}>
            {hasMenu
            ?   <TouchableOpacity index={1} onPress={() => {}}>
                    <SvgXml xml={hamburgerIcon(Color.primary_1)}/>
                </TouchableOpacity>
            :   null
            }
        </View>
        <Text style={styleSheet.title}>
            {title}
        </Text>
        <View style={{ width:30, marginRight: 10 }}>

        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 65,
        paddingTop: 5,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: Color.white,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: Color.primary_1,
        fontSize: 23,
    },
});

export default TopBar;
