import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const icon = color => {
	return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="31" viewBox="0 0 55 57" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 57) scale(0.100000,-0.100000)" fill="${color}" stroke="none">
        <path d="M360 561 c-18 -5 -30 -21 -45 -61 -18 -46 -25 -55 -54 -63 -52 -13 -122 -93 -174 -199 -49 -99 -89 -207 -81 -220 3 -5 24 -8 46 -8 36 0 54 10 132 69 50 37 115 81 144 97 75 40 102 74 102 132 0 43 3 49 63 104 l62 58 -24 19 c-15 11 -22 24 -18 34 10 26 -98 53 -153 38z m14 -56 c-8 -46 13 -47 43 -1 17 26 27 33 43 29 28 -7 25 -17 -16 -63 -46 -51 -38 -62 15 -21 55 44 60 24 6 -29 l-44 -43 -30 26 c-17 14 -40 28 -50 32 -19 6 -19 8 -6 46 18 50 24 59 36 59 6 0 7 -14 3 -35z m-23 -108 c23 -15 38 -37 47 -64 20 -63 3 -90 -85 -134 -39 -20 -106 -64 -149 -98 -73 -58 -117 -81 -131 -68 -13 13 104 257 148 311 37 44 85 76 115 76 12 0 36 -10 55 -23z"/>
        <path d="M280 392 c0 -5 11 -19 25 -32 30 -28 34 -13 5 18 -22 23 -30 27 -30 14z"/>
        <path d="M240 330 c14 -10 27 -16 30 -13 6 6 -30 33 -44 33 -6 0 0 -9 14 -20z"/>
        <path d="M180 270 c33 -26 52 -25 21 0 -13 11 -28 20 -35 20 -6 0 0 -9 14 -20z"/>
        <path d="M127 178 c13 -12 25 -19 28 -16 8 7 -23 38 -38 38 -6 0 -2 -10 10 -22z"/>
      </g>
    </svg>
    `;
};

const VegetableIcon = ({ style, color }) => {
	return (
		<View style={style ?? {}}>
			<SvgXml xml={icon(color ?? "#000000")} />
		</View>
	);
};

export default VegetableIcon;
