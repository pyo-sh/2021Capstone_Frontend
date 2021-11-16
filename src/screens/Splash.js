import React, { useEffect } from 'react';
import {
    View,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => {
    useEffect(() => {
        // TODO: 로그인 관련 여부 확인
        
        // 메인 이동
        setTimeout(() => {
            Actions.login();
        }, 2000);

        // 로그인 이동

    }, [])

    return <View>
        <Image 
            source={require('../components/icons/splash.png')}
            resizeMode = 'stretch'
            style={[{width:'100%',
            height: '100%',}
            ]}
            />
    </View>
}

export default Splash;
