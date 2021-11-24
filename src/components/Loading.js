import React from "react";
import { View, Image } from "react-native";

const Loading = () => {
	return (
		<View>
			<Image
				source={require("../components/icons/splash.png")}
				resizeMode="stretch"
				style={[{ width: "100%", height: "100%" }]}
			/>
		</View>
	);
};

export default Loading;
