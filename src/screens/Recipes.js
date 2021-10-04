import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import { Color } from '~/Constant';
import SearchInput from '~/components/search/SearchInput';
import ImnIngrItem from '~/components/recipe/ImnIngrItem';

const imnIngrs = [
    { presetIngrNum: 1, ingrName: '파', },
    { presetIngrNum: 2, ingrName: '양파', },
    { presetIngrNum: 3, ingrName: '두부', },
    { presetIngrNum: 4, ingrName: '우유', },
];

const Recipes = () => {
    const [ingredient, setIngredient] = useState('');

    return <View style={{ height: '100%', backgroundColor: Color.background }}>
        <View style={styleSheet.topSide}>
            <Text style={styleSheet.topTitle}>
                - - 유통기한 임박 재료 - - - - - - - - - - - - - - -
            </Text>
            <FlatList
                style={styleSheet.imnIngrList}
                data={imnIngrs}
                renderItem={({item}) => {
                    const { ingrName } = item;
                    return <ImnIngrItem
                        isSelected={ingredient === ingrName}
                        ingrName={ingrName}
                        setIngredient={() => setIngredient(ingrName)}
                    />
                }}
                keyExtractor={(item) => item.presetIngrNum}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
            />
        </View>
        <View style={styleSheet.content}>
            <SearchInput
                text={ingredient}
                onChangeText={(value) => setIngredient(value)}
                placeholder={"재료 이름을 검색하세요"}
                onSubmitEditing={() => console.log(ingredient)}
            />
            <Text style={styleSheet.info}>
                - - {ingredient ? `' ${ingredient} '로 검색한 결과` : '검색 결과'}  - - - - - - - - - - - - - - -
            </Text>
        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    topSide: {
        height: 100,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: Color.white,
    },
    topTitle: {
        color: Color.primary_4,
    },
    imnIngrList: {
        marginTop: 10,
    },
    content: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: Color.white,
    },
    info: {
        paddingVertical: 20,
        color: Color.primary_1,
    }
});

export default Recipes;
