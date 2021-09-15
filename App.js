import React, { Fragment, useEffect } from 'react';
import { StatusBar, LogBox, } from 'react-native';
import { Colors } from "./app/res/style/colors"
import StackRoute from './app/src/router/StackRoute';
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
                <StatusBar barStyle="light-content" backgroundColor={Colors.NewBackgroundColor} />
                <StackRoute />
                
        </Fragment>
    );
};

export default App;