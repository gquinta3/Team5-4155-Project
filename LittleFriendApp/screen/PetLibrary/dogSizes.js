import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function dogSizes({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.item}>
        <Button
          title="Small Dogs"
          onPress={() => navigation.navigate('Small Dogs')}
        />
      </View>

      <View style={styles.item}>
        <Button
          title="Medium Dogs"
          onPress={() => navigation.navigate('Medium Dogs')}
        />
      </View>

      <View style={styles.item}>
        <Button
          title="Large Dogs"
          onPress={() => navigation.navigate('Large Dogs')}
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
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }
})