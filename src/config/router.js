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
import RecipeInfo from "@src/screens/RecipeInfo";
import Bookmark from "@src/screens/Bookmark";
import Interlock from "@src/components/shoppingmall/Interlock";
import MainTabIcon from "@src/components/icons/MainTabIcon";
import SearchTabIcon from "@src/components/icons/SearchTabIcon";
import RecipesTabIcon from "@src/components/icons/RecipesTabIcon";
import SettingTabIcon from "@src/components/icons/SettingTabIcon";
import StarTabIcon from "@src/components/icons/StarTabIcon";

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
					navBar={TopBar}
					title="로그인"
					hasPop={false}
					icon={SettingTabIcon}
					component={Login}
					gestureEnabled={false}
					panHandlers={null}
				/>
				<Scene
					key="signup"
					navBar={TopBar}
					component={SignUp}
					title="회원가입"
					hasPop={true}
					gestureEnabled={false}
					panHandlers={null}
				/>
				<Scene
					key="interlock"
					navBar={TopBar}
					component={Interlock}
					gestureEnabled={false}
					panHandlers={null}
					title="쇼핑몰 연동"
					hasPop={true}
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
				<Scene
					key="recipeinfo"
					navBar={TopBar}
					component={RecipeInfo}
					gestureEnabled={false}
					panHandlers={null}
					title="레시피"
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
						title="식자재 검색"
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
						key="bookmark"
						navBar={TopBar}
						component={Bookmark}
						gestureEnabled={false}
						panHandlers={null}
						icon={StarTabIcon}
						title="즐겨찾기 레시피"
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
