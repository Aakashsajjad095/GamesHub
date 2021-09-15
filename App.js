import React, { Fragment, useEffect } from 'react';
import { StatusBar, LogBox, } from 'react-native';
import { Colors } from "./app/res/style/colors"
import StackRoute from './app/src/router/StackRoute';
import { Provider } from "react-redux"
import { store, persistor } from './app/src/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

    useEffect(()=>{
    setTimeout(()=>{
        SplashScreen.hide();
    },1000)
       
        LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();
    },[])

    return (
        <Fragment>
              <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}></PersistGate>
                <StatusBar barStyle="light-content" backgroundColor={Colors.NewBackgroundColor} />
                <StackRoute  />
                </Provider>
        </Fragment>
    );
};

export default App;