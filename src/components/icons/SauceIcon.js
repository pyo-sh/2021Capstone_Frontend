import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const icon = color => {
	return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="31" height="31" viewBox="0 0 70 70" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 70) scale(0.1, -0.1)" fill=${color ?? "#000000"} stroke="none">
        <path d="M336 678 c-3 -7 -9 -38 -13 -68 -7 -50 -10 -55 -36 -58 -28 -3 -45 -37 -34 -66 3 -8 -1 -20 -9 -26 -11 -10 -14 -54 -14 -236 l0 -224 120 0 120 0 0 229 c0 136 -4 232 -10 236 -5 3 -7 12 -3 20 11 30 -6 64 -35 67 -25 3 -28 7 -37 68 -8 49 -14 66 -28 68 -9 2 -19 -2 -21 -10z m31 -89 c7 -49 11 -54 36 -57 21 -3 27 -9 27 -28 0 -25 -1 -25 -77 -22 -70 3 -78 5 -78 23 0 16 8 21 43 23 40 3 56 16 31 24 -8 3 -10 19 -5 52 4 26 9 46 12 44 2 -2 7 -29 11 -59z m76 -142 c16 -11 17 -33 15 -222 l-3 -210 -100 0 -100 0 -3 210 c-3 246 -8 235 103 235 41 0 78 -5 88 -13z"/>
        <path d="M420 295 c0 -77 4 -125 10 -125 6 0 10 48 10 125 0 77 -4 125 -10 125 -6 0 -10 -48 -10 -125z"/>
        <path d="M420 130 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/>
      </g>
    </svg>
    `;
};

const SauceIcon = ({ style, color }) => {
	return (
		<View style={style ?? {}}>
			<SvgXml xml={icon(color)} />
		</View>
	);
};

export default SauceIcon;
