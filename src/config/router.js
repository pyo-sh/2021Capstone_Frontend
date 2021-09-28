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

import MainTabIcon from '~/components/icons/MainTabIcon';
import SearchTabIcon from '~/components/icons/SearchTabIcon';
import RecipesTabIcon from '~/components/icons/RecipesTabIcon';
import SettingTabIcon from '~/components/icons/SettingTabIcon';

import TopBar from '~/components/TopBar';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="splash" hideNavBar component={Splash}
                    gestureEnabled={false} panHandlers={null} />
                <Scene key="login" hideNavBar component={Login}
                    gestureEnabled={false} panHandlers={null} />
                <Scene key="BottomTab" hideNavBar showLabel={false}
                    tabs={true} default="main"
                    >
                    <Scene key="main" hideNavBar component={Main}
                        gestureEnabled={false} panHandlers={null}
                        icon={MainTabIcon}
                        />
                    <Scene key="search" navBar={TopBar} component={Search}
                        gestureEnabled={false} panHandlers={null}
                        icon={SearchTabIcon} title="카테고리" hasMenu={true}
                        />
                    <Scene key="recipes" navBar={TopBar} component={Recipes}
                        gestureEnabled={false} panHandlers={null}
                        icon={RecipesTabIcon} title="레시피" hasMenu={true}
                        />
                    <Scene key="setting" navBar={TopBar} component={Setting}
                        gestureEnabled={false} panHandlers={null}
                        icon={SettingTabIcon} title="내 정보" hasMenu={true}
                        />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;