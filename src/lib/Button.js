import React from "react";
import { TouchableOpacity } from 'react-native';
import { styleSheet } from '~/lib/CustomStyle';

const Button = (props) => {
	const { index, onPress, children, className, style } = props;

    let styleArr = []
	if(style) {
        styleArr.push(style);
    }
	if(className) {
		className.split(' ').forEach((item) => {
			if(item === "") return;
	  	    styleArr.push(styleSheet[item]);
		})
	}

	return <TouchableOpacity key={index} onPress={onPress} style={styleArr}>
		{children}
	</TouchableOpacity>
}

export default Button;
