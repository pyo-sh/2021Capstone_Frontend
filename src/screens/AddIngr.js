import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Color } from '~/Constant';

const AddIngr = () => {
    return <View style={styleSheet.wrapper}>
        <View style={styleSheet.otherwise}>
            <Text>식자재 가져오기</Text>
            <View>
                <TouchableOpacity>
                    <Text>쇼핑몰</Text>
                    <Text>주문목록</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>영수증</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>바코드</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styleSheet.controls}>

        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.background,
    },
    otherwise: {
        width: '100%',
        height: 80,
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor: Color.white,
    },
    controls: {
        width: '100%',
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: Color.white,
    },
});

export default AddIngr;
