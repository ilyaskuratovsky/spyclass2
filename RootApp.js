import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import StartOrJoinGameScreen from './StartOrJoinGameScreen';
import StartNewGameScreen from './StartNewGameScreen';
import ErrorScreen from './ErrorScreen';
import { useSelector, useDispatch } from 'react-redux'
import { goToScreen, increment } from './Actions'


function RootApp(props, state) {
    const screen = useSelector((state) => state.main.screen)
    if (screen === 'START_OR_JOIN_GAME') {
        return <StartOrJoinGameScreen/>
    }
    else if (screen === 'START_NEW_GAME') {
        return <StartNewGameScreen />
    } else {
        return <ErrorScreen />
    }
    /*
    return (
        <View><Text>Hello{screen}</Text>
            <Button
                aria-label="Increment value"
                onPress={() => {
                    dispatch(goToScreen('SOME_OTHER_SCREEN'))
                }}
            />
        </View>
    )
    */
}

export default RootApp