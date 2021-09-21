import React from 'react';
import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';

import Splash from '~/screens/Splash';
import Login from '~/screens/Login';
import Main from '~/screens/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="splash" hideNavBar component={Splash}
                    gestureEnabled={false} panHandlers={null} />
                <Scene key="login" hideNavBar component={Login}
                    gestureEnabled={false} panHandlers={null} />
                <Scene key="main" hideNavBar component={Main}
                    gestureEnabled={false} panHandlers={null} />
            </Stack>
        </Router>
    );
};

export default RouterComponent;