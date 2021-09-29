import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const backIcon = (color) => {
    return `
        <svg width="13" height="25" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 19.678L19.6777 2.00031" stroke="${color}" stroke-width="4"/>
            <path d="M2 17.678L19.6777 35.3556" stroke="${color}" stroke-width="4"/>
        </svg>
    `;
}

const TopBar = (props) => {
    const { title, hasPop } = props; 

    return <View style={styleSheet.wrapper}>
        <View style={{ width:30, marginLeft: 10 }}>
            {hasPop
            ?   <TouchableOpacity index={1} onPress={() => {}}>
                    <SvgXml xml={backIcon(Color.primary_1)}/>
                </TouchableOpacity>
            :   null
            }
        </View>
        <Text style={styleSheet.title}>
            {title}
        </Text>
        <View style={{ width:30, marginRight: 10 }}>
            {/* Empty Space */}
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
        fontFamily: 'NotoSansKR',
    },
});

export default TopBar;
