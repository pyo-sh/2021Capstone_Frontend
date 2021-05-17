import React from 'react';
import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';

import Main from '~/screens/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="main" hideNavBar component={Main}
                    gestureEnabled={false} panHandlers={null} />
                {/*
                <Scene key="intro" hideNavBar component={Intro}
                    gesturesEnabled={false} panHandlers={null} />
                <Scene key="login" hideNavBar component={Login}
                    gesturesEnabled={false} panHandlers={null} />
                ... else
                */}
            </Stack>
        </Router>
    );
};

export default RouterComponent;