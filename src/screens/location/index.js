import React from 'react';
import {View, Text} from 'react-native';
import HeaderTab from '../../components/header';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const ShopLocations = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00001a',
          borderRadius: 40,
          paddingTop: 10,
        }}>
        <HeaderTab textColor="#FFFFFF" marginLeft="2.5%" />
        {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
        <View
          style={{
            flex: 10,
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: '#E6E6E6',
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
            }}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={{height: '100%', width: '100%'}}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>
          <View
            style={{
              flex: 1,
              height: 200,
              backgroundColor: 'tomato',
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              // overflow: 'hidden',
            }}></View>
        </View>
      </View>
    </View>
  );
};
export default ShopLocations;
