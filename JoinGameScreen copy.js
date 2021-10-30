import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { changeScreen } from './ActionsReducer'

function JoinGameScreen(props) {
    return (
        <View>
            <Text>Join Game Screen</Text>
        </View>
    );
}

export default JoinGameScreen