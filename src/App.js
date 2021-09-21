import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Router from '~/config/router';
import store from '~/config/store';

const App = () => {
    return (
        <>
        {Platform.OS == 'ios'
        ?
            <Provider store={store}>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }}></SafeAreaView>
                <SafeAreaView style={{ flex: 1, }}>
                    <StatusBar barStyle="dark-content" />
                    <Router />
                </SafeAreaView>
            </Provider>
        :
            <Provider store={store}>
                <SafeAreaProvider>
                    <Router />
                </SafeAreaProvider>
            </Provider>
        }
        </>
    )
}

export default App;
