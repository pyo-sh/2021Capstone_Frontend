import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color } from '~/Constant';
import LeftArrowIcon from '~/components/icons/LeftArrowIcon';

const TopBar = (props) => {
    const { title, hasPop } = props; 

    return <View style={styleSheet.wrapper}>
        <View style={{ width:30, marginLeft: 10 }}>
            {hasPop
            ?   <TouchableOpacity index={1} onPress={() => {}}>
                    <LeftArrowIcon color={Color.primary_1}/>
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
        shadowColor: Color.primary_1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        elevation: 4,
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
