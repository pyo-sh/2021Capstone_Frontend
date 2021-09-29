import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Swiper from 'react-native-swiper'
import RightArrowIcon from '~/components/icons/RightArrowIcon';
import LeftArrowIcon from '~/components/icons/LeftArrowIcon';
import Fridge from '~/components/main/Fridge';
import { Color } from '~/Constant';

const Main = () => {
    return (
        <Swiper style={{}}
            showsButtons
            nextButton={<RightArrowIcon color={Color.primary_1}/>}
            prevButton={<LeftArrowIcon color={Color.primary_1}/>}
            activeDotColor={Color.primary_1}
            loop={false}
            index={1}
        >
            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#9DD6EB'
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: 'bold'
                    }}
                >
                    추천 레시피 페이지
                </Text>
            </View>
            <Fridge/>
            <Fridge/>
        </Swiper>
    );
}

const styleSheet = StyleSheet.create({

});


export default Main;
