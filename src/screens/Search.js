import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    Text,
} from 'react-native';
import { Color } from '~/Constant';
import SearchInput from '~/components/search/SearchInput';
import SearchedFood from '~/components/search/SearchedFood';

const tempIcon = ({title, color}) => {
    return <View
        style={
            {
                width: 58,
                height: 58,
                paddingBottom: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
            }
        }
    >
        <Text style={{ fontSize: 11 }}>{title}</Text>
    </View>;
}
const temp = () => {
    return <View style={{width: 10}}>

    </View>
}
const categories = [
    { id: 1, name: 'Vegetable', icon: tempIcon },
    { id: 2, name: 'Fruit', icon: tempIcon },
    { id: 3, name: 'Meat', icon: tempIcon },
    { id: 4, name: 'Seafood', icon: tempIcon },
    { id: 5, name: 'Sauce', icon: tempIcon },
    { id: 6, name: 'Condiment', icon: tempIcon },
    { id: 7, name: 'Dairy', icon: tempIcon },
    { id: 8, name: 'Grain', icon: tempIcon },
    { id: 9, name: 'Others', icon: tempIcon },
];
const foods = [
    { id: 1, name: '토마토' },
    { id: 2, name: '상추' },
    { id: 3, name: '당근' }
];

const Search = () => {
    const [text, setText] = useState('');

    return <View style={{ height: '100%' }}>
        <View style={styleSheet.topSide}>
            <SearchInput
                text={text}
                onChangeText={(value) => setText(value)}
                placeholder={"재료 이름을 검색하세요"}
                onSubmitEditing={() => console.log(text)}
            />
        </View>
        <SafeAreaView style={styleSheet.categories}>
            <FlatList
                data={categories}
                renderItem={({item}) => <item.icon title={item.name}></item.icon>}
                keyExtractor={item => item.id}
                horizontal={true}
                ItemSeparatorComponent={temp}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
        <View style={styleSheet.content}>
            <Text style={styleSheet.info}>- - ' {text} '로 검색한 결과 - - - - - - - - - - - - - - -</Text>
            <FlatList
                style={styleSheet.searched}
                data={foods}
                keyExtractor={item => item.id}
                renderItem={({item}) => <SearchedFood data={item}/>}
            />
        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    topSide: {
        width: '100%',
        height: 100,
        paddingVertical: 17,
        paddingHorizontal: 30,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    categories: {
        width: '100%',
        height: 80,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: Color.white,
    },
    info: {
        color: Color.primary_3,
        marginBottom: 10,
    },
    searched: {
        paddingHorizontal: 20,
    },
});

export default Search;
