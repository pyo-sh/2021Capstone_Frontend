import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Splash from "@src/screens/Splash";
import Login from "@src/screens/Login";
import Main from "@src/screens/Main";
import Search from "@src/screens/Search";
import Recipes from "@src/screens/Recipes";
import Setting from "@src/screens/Setting";
import AddIngr from "@src/screens/AddIngr";
import SignUp from "@src/components/login/SignUp";

import MainTabIcon from "@src/components/icons/MainTabIcon";
import SearchTabIcon from "@src/components/icons/SearchTabIcon";
import RecipesTabIcon from "@src/components/icons/RecipesTabIcon";
import SettingTabIcon from "@src/components/icons/SettingTabIcon";

import TopBar from "@src/components/TopBar";

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root">
				<Scene
					key="splash"
					hideNavBar
					component={Splash}
					gestureEnabled={false}
					panHandlers={null}
				/>
				<Scene
					key="login"
					hideNavBar
					component={Login}
					gestureEnabled={false}
					panHandlers={null}
				/>
				<Scene
					key="signup"
					hideNavBar
					component={SignUp}
					gestureEnabled={false}
					panHandlers={null}
				/>
				<Scene
					key="addingr"
					navBar={TopBar}
					component={AddIngr}
					gestureEnabled={false}
					panHandlers={null}
					title="식자재 등록"
					hasPop={true}
				/>
				<Scene key="BottomTab" hideNavBar showLabel={false} tabs={true} default="main">
					<Scene
						key="main"
						hideNavBar
						component={Main}
						wrap={false}
						gestureEnabled={false}
						panHandlers={null}
						icon={MainTabIcon}
					/>
					<Scene
						key="search"
						navBar={TopBar}
						component={Search}
						gestureEnabled={false}
						panHandlers={null}
						icon={SearchTabIcon}
						title="카테고리"
						hasPop={false}
					/>
					<Scene
						key="recipes"
						navBar={TopBar}
						component={Recipes}
						gestureEnabled={false}
						panHandlers={null}
						icon={RecipesTabIcon}
						title="레시피"
						hasPop={false}
					/>
					<Scene
						key="setting"
						navBar={TopBar}
						component={Setting}
						gestureEnabled={false}
						panHandlers={null}
						icon={SettingTabIcon}
						title="내 정보"
						hasPop={false}
					/>
				</Scene>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
