import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MainEntryTab from '../MainTabs/MainEntryTab';

class AuthScreen extends Component {

    loginHandler = () => {
        MainEntryTab();
    }

    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        )
    }
}

export default AuthScreen;
