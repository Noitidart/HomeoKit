// @flow

import React, { Component } from 'react'
import { AppRegistry, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import store from './flow-control'

import AppNavigator from './AppNavigator'

import styles from './styles'

type State = {
    isOpaque: false
}

export default class App extends Component<void, State> {
    state = {
        isOpaque: false
    }

    render() {
        const { isOpaque } = this.state;

        return (
            <Provider store={store}>
                <View style={isOpaque ? styles.appOpaque : styles.app}>
                    <AppNavigator onNavigationStateChange={null} screenProps={{ setAppOpaque:this.setAppOpaque }} />
                </View>
            </Provider>
        )
    }

    setAppOpaque = () => this.setState( () => ({ isOpaque:true }) )
}

AppRegistry.registerComponent('homeokit', () => App);
