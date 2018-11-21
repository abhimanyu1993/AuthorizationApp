import React from 'react';
import { Text, View } from 'react-native';

const Header = (prop) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {prop.headerText}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width:0, height: 20},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
