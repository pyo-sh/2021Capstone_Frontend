import React from 'react';
import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';

import Splash from '~/screens/Splash';
import Login from '~/screens/Login';
import Main from '~/screens/Main';
import Search from '~/screens/Search';
import Recipes from '~/screens/Recipes';
import Setting from '~/screens/Setting';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="splash" hideNavBar component={Splash}
                    gestureEnabled={false} panHandlers={null} />
                <Scene key="login" hideNavBar component={Login}
                    gestureEnabled={false} panHandlers={null} />
                <Scene key="BottomTab" hideNavBar tabs={true} default="main">
                    <Scene key="main" hideNavBar component={Main}
                        gestureEnabled={false} panHandlers={null} />
                    <Scene key="search" hideNavBar component={Search}
                        gestureEnabled={false} panHandlers={null} />
                    <Scene key="recipes" hideNavBar component={Recipes}
                        gestureEnabled={false} panHandlers={null} />
                    <Scene key="setting" hideNavBar component={Setting}
                        gestureEnabled={false} panHandlers={null} />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;