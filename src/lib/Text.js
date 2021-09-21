import React from "react";
import { Text } from 'react-native';
import {styleSheet} from './CustomStyle';

const CustomText = (props) => {
	const { index, onPress, children, className, style, numberOfLines } = props;
    
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

	return <Text key={index} style={styleArr} numberOfLines={numberOfLines} onPress={onPress}>
        {children}
    </Text>
}

export default CustomText;
