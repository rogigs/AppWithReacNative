/**
 *  Learning about React Native
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

const CountClick = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <TouchableOpacity style={style.buttons} onPress={() => setCount(count + 1)}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <View>
        <Text>You clicked {count} times</Text>
      </View>
    </View>
  );
};
const Greeting = props => {
  return (
    <View style={style.center}>
      <Text>Hello {props.name}</Text>
    </View>
  );
};

const HelloWorld = () => {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
        <CountClick />
      </View>
  );
};

export default HelloWorld;
