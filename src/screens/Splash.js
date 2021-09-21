import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => {
    useEffect(() => {
        // TODO: 로그인 관련 여부 확인
        
        // 메인 이동
        setTimeout(() => {
            Actions.main();
        }, 1000);

        // 로그인 이동
        // Actions.login();
    }, [])

    return <View>
        <Text>
            Login Checking...
        </Text>
    </View>
}

export default Splash;
