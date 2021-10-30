import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Actions from './Actions';


function StartOrJoinGameScreen(props) {
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Start or Join Game Screen</Text>
            <Button
                title="Start New Game"
                onPress={() =>
                    dispatch(Actions.goToScreen('START_NEW_GAME'))
                }
            />        
            <Button
                title="Join Game"
                onPress={() =>
                    dispatch(Actions.goToScreen('JOIN_GAME'))
                }
            />
        </View>
    );
}


export default StartOrJoinGameScreen