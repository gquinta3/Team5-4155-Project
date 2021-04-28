import React from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';

export default class Library extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,

        }
    }

    componentDidMount() {
        return fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': '0c69499c-4076-4f2c-9b03-b0416f69d8d1'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
            })

            .catch((error) => {
                console.log(error)
            });
    }

    render() {

        if (this.state.isLoading) {

            return (
                <SafeAreaView style={styles.background}>
                    <ActivityIndicator />
                </SafeAreaView>
            )
        } else {

            let breeds = this.state.dataSource.map((val, key) => {
                return (
                    <View key={key} style={styles.item}>
                        <Button title={val.name} color='dodgerblue' />
                    </View>
                )
            })

            return (
                <SafeAreaView style={styles.background}>
                    {breeds}
                </SafeAreaView>
            );
        }
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    }
})

