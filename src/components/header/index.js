import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-easy-icon';

const HeaderTab = props => {
  return (
    <View
      style={{
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: 'center',
        paddingLeft: 5,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          marginLeft: props.marginLeft,
        }}>
        <TouchableOpacity>
          <Icon
            type="antdesign"
            name="menu-unfold"
            color={props.textColor}
            size={21}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity>
          <Icon
            type="antdesign"
            name="search1"
            color={props.textColor}
            size={21}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type="feather" name="info" color={props.textColor} size={21} />
        </TouchableOpacity>

        <Image
          style={{
            height: '50%',
            width: '15%',
            borderRadius: 40,
            backgroundColor: 'red',
          }}
          source={require('../../assets/images/sagar.jpg')}
        />
      </View>
    </View>
  );
};
export default HeaderTab;
