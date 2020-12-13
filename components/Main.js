import React from 'react'
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { sumNumber, decreaseNumber } from '../redux/actions/actions';

const Main = ({ sumNumber, decreaseNumber }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="increase" onPress={sumNumber} />
            <Button title="decrease" onPress={decreaseNumber} />
        </View>
    )
}
export default connect(null, { sumNumber, decreaseNumber })(Main);