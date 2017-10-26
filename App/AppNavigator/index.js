// @flow

import React from 'react'
import { StackNavigator } from 'react-navigation'

import ScreenDemo from './ScreenDemo'
import ScreenThree from './ScreenThree'
import ScreenTwo from './ScreenTwo'

import styles from './styles'

const AppNavigator = StackNavigator(
    {
        demo:     { screen:ScreenDemo },
        two:      { screen:ScreenTwo },
        three:    { screen:ScreenThree }
    },
    {
        initialRouteName: 'demo',
        cardStyle: styles.card
    }
)

export default AppNavigator
