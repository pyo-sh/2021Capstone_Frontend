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
import AddIngr from '~/screens/AddIngr';
import SignUp  from '../components/login/SignUp';
import Interlock from '../components/shoppingmall/Interlock';

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
                <Scene key="login" navBar={TopBar} component={Login}
                    gestureEnabled={false} panHandlers={null}
                    icon={SettingTabIcon} title="로그인" hasPop={false}
                    />
                <Scene key="addingr" navBar={TopBar} component={AddIngr}
                    gestureEnabled={false} panHandlers={null}
                    title="식자재 등록" hasPop={true}/>
                <Scene key="signup" navBar={TopBar} component={SignUp}
                    gestureEnabled={false} panHandlers={null}
                    title="회원가입" hasPop={true}/>
                
                <Scene key="interlock" navBar={TopBar} component={Interlock}
                    gestureEnabled={false} panHandlers={null}
                    title="쇼핑몰 연동" hasPop={true}/>

                <Scene key="BottomTab" hideNavBar showLabel={false}
                    tabs={true} default="main"
                    >
                    <Scene key="main" hideNavBar component={Main}
                        gestureEnabled={false} panHandlers={null}
                        icon={MainTabIcon}
                        />
                    <Scene key="search" navBar={TopBar} component={Search}
                        gestureEnabled={false} panHandlers={null}
                        icon={SearchTabIcon} title="카테고리" hasPop={false}
                        />
                    <Scene key="recipes" navBar={TopBar} component={Recipes}
                        gestureEnabled={false} panHandlers={null}
                        icon={RecipesTabIcon} title="레시피" hasPop={false}
                        />
                    <Scene key="setting" navBar={TopBar} component={Setting}
                        gestureEnabled={false} panHandlers={null}
                        icon={SettingTabIcon} title="내 정보" hasPop={false}
                        />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;