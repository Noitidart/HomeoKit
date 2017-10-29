// @flow

import React, { PureComponent } from 'react'
import { ScrollView, View, Text, Image, Button } from 'react-native'
import CardView from 'react-native-cardview'

import styles from './styles'
import stylesNavigator from '../styles'

import PIC from './pic.jpg'

class ScreenThree extends PureComponent<void> {
    static navigationOptions = {
        title: 'HomeoKit'
    }

    render() {
        return (
            <View style={stylesNavigator.screen}>
                <ScrollView>
                    <View style={styles.bio}>
                        <Image source={PIC} style={styles.bioPic} />
                        <View style={styles.bioContent}>
                            <View style={styles.bioNameWrap}>
                                <Text style={styles.bioName}>Hakim Archuletta</Text>
                            </View>
                            <View style={styles.bioRoleWrap}>
                                <View style={styles.hr} />
                                <View style={styles.block} />
                                <Text style={styles.bioRole}>HOMEOPATH</Text>
                            </View>
                            <View>
                                <Text>
                                    Below, I have put together a list of free homeopathic home kit's for various persona's. If you are not sure which persona you fit into, or you would like a personalized kit, schedule an appointment.
                                </Text>
                            </View>
                            <View>
                                <Button title="Schedule Consultation" onPress={this.gotoSchedule} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.persona}>
                        <View style={styles.personaUnderlay} />
                        <View>
                            <Text style={styles.personaTitle}>Biker</Text>
                            <Text>
                                If you ride bikes you are under stresses from high speeds. You are also exposed to high pressure winds.
                            </Text>
                            <View>
                                <Button title="View" onPress={()=>null} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.persona}>
                        <View style={styles.personaUnderlay} />
                        <View style={styles.personaContent}>
                            <Text style={styles.personaTitle}>Dog</Text>
                            <Text>
                                For your pet dog.
                            </Text>
                            <View>
                                <Button title="View" onPress={()=>null} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.persona}>
                        <View style={styles.personaUnderlay} />
                        <View>
                            <Text style={styles.personaTitle}>Cat</Text>
                            <Text>
                                For your pet cat.
                            </Text>
                            <View>
                                <Button title="View" onPress={()=>null} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    gotoSchedule = () => null
}

export default ScreenThree
