import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const personIcon = (color) => {
    return `
        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.55703 38.4458C1.55703 38.4458 0.403027 20.8608 19.138 20.8608C37.873 20.8608 36.719 38.4418 36.719 38.4418" stroke="${color}" stroke-width="2"/>
            <path d="M19.638 20.9609C24.8847 20.9609 29.138 16.7076 29.138 11.4609C29.138 6.21423 24.8847 1.96094 19.638 1.96094C14.3913 1.96094 10.138 6.21423 10.138 11.4609C10.138 16.7076 14.3913 20.9609 19.638 20.9609Z" stroke="${color}" stroke-width="2"/>
        </svg>
    `;
}
const plusButton = (color) => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" viewBox="0 0 42 45" fill="none">
            <path d="M21 1.97705V43.0231V1.97705Z" fill="${color}"/>
            <path d="M21 1.97705V43.0231" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.05701 22.5H39.942H2.05701Z" fill="${color}"/>
            <path d="M2.05701 22.5H39.942" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}
const Main = () => {
    return <View style={styleSheet.wrapper}>
        <View style={styleSheet.headerWrapper}>
            <View style={styleSheet.header}>
                <View style={styleSheet.headerImage}>
                    <SvgXml xml={personIcon(Color.primary_2)}/>
                </View>
                <View style={styleSheet.headerTitle}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25 }}>내</Text>
                        <Text style={{ fontSize: 25, color: Color.primary_1, paddingHorizontal: 10 }}>'냉장고'</Text>
                    </View>
                    <Text style={{ fontSize: 25 }}>현명하게 관리하기</Text>
                </View>
            </View>
        </View>
        <View style={styleSheet.contentWrapper}>
            {/* Infinite Scroll */}
            {/* Card Components */}
        </View>
        <TouchableOpacity index={1} onPress={() => {}} style={styleSheet.addButton}>
            <SvgXml xml={plusButton(Color.white)}/>
        </TouchableOpacity>
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
    },
	headerWrapper: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: Color.background,
    },
    header: {
        width: '100%',
        marginVertical: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerImage: {
        width: 100,
        height: 100,
        marginHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Color.primary_2,
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: Color.white,
    },
    headerTitle: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 30,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: Color.white,
    },
    addButton: {
        width: 80,
        height: 80,
        position: 'absolute',
        right: 16,
        bottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Color.primary_2,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
});


export default Main;
