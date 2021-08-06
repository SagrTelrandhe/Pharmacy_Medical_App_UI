import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';

export const Back = props => {
  console.log('Props:', props);

  const BackNavigation = () => {
    console.log('PropsInner', props);
    return props.navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: 'row',
        // backgroundColor: 'pink',
      }}>
      <TouchableOpacity
        style={{flex: 0.25, flexDirection: 'row', alignItems: 'center'}}
        onPress={props.onpress}>
        <Icon type="ionicon" name="arrow-back" color="black" size={22} />

        <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
          Back
        </Text>
      </TouchableOpacity>
      <View style={{flex: 0.95}}></View>
    </View>
  );
};
