import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function LibraryHome({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.item}>
        <Button
          title="Dogs"
          onPress={() => navigation.navigate('Dog Sizes')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }
})