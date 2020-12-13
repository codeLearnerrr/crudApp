import { connect } from 'react-redux';
import Realm from 'realm';
import React from 'react';
import { getRealmApp } from '../getRealmApp';
const app = getRealmApp();
import { Button } from 'react-native';
import { sumNumber } from '../../redux/actions/actions';

const SignIn = ({ sumNumber }) => {
    return (
        <>
            <Button title="add number" onPress={sumNumber} />
        </>
    )
}
export default connect(null, { sumNumber })(SignIn);