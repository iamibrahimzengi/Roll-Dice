import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import metroConfig from './metro.config';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 2,
    BorderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8ea7e9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
