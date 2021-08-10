import React from 'react';
import {View, Text, FlatList} from 'react-native';
import HeaderTab from '../../components/header';
import Icon from 'react-native-easy-icon';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const ShopLocations = () => {
  const shopDetails = [
    {
      shopName: 'Apollo',
      shopAddress: 'Apollo Hospital, Nagpur-441203',
      shoptimings: '8:00 am - 8:00 pm',
      shopDistance: '800 m',
      medicinePrice: '550',
    },
    {
      shopName: 'Med-Plus',
      shopAddress: 'Medical Sq, Nagpur-440014',
      shoptimings: '8:00 am - 8:00 pm',
      shopDistance: '5 Km',
      medicinePrice: '560',
    },
    {
      shopName: 'Rajat Medicals',
      shopAddress: 'Bhande Plot, Nagpur-440014',
      shoptimings: '9:00 am - 9:00 pm',
      shopDistance: '400 m',
      medicinePrice: '590',
    },
    {
      shopName: 'Surya Medical Stores',
      shopAddress: 'Wanjari Hospital, Nagpur-441203',
      shoptimings: '10:00 am - 10:00 pm',
      shopDistance: '600 m',
      medicinePrice: '580',
    },
    {
      shopName: 'Om Shanti Medical Stores',
      shopAddress: 'Bhande Plot, Nagpur-440014',
      shoptimings: '9:00 am - 9:00 pm',
      shopDistance: '200 m',
      medicinePrice: '570',
    },
  ];

  const displayItem = item => {
    return (
      <View style={{flex: 3, backgroundColor: 'green'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 70,
              width: '75%',
              // backgroundColor: 'tomato',
            }}>
            <View
              style={{
                height: 25,
                width: '100%',
                // backgroundColor: 'yellow',
              }}>
              <Text
                style={{
                  color: '#1a1aff',
                  fontSize: 18,
                  fontWeight: '700',
                  textAlign: 'left',
                }}>
                {item.shopName}
              </Text>
            </View>
            <View
              style={{
                height: 20,
                width: '100%',
                // backgroundColor: 'black',
              }}>
              <Text style={{color: '#b3b3b3', fontSize: 15}}>
                {item.shopAddress}
              </Text>
            </View>
            <View
              style={{
                height: 20,
                width: '100%',
                // backgroundColor: 'lightblue',
              }}>
              <Text style={{color: '#b3b3b3', fontSize: 15}}>
                {item.shoptimings}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: '25%',
              // backgroundColor: 'lawngreen',
            }}>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'lightgreen',
                alignItems: 'center',
              }}>
              <Text style={{color: '#b3b3b3', fontSize: 16}}>
                {item.shopDistance}
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                // backgroundColor: 'pink',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                type="feather"
                name="dollar-sign"
                color="#b3b3b3"
                size={15}
                style={{paddingBottom: 10}}
              />
              <Text style={{color: '#333333', fontSize: 35}}>
                {item.medicinePrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

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
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 0.75,
                  backgroundColor: 'pink',
                  // alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Text style={{color: 'black', fontSize: 26, fontWeight: '700'}}>
                  Where to buy ?
                </Text>
              </View>
              <View
                style={{
                  flex: 0.25,
                  // backgroundColor: 'yellow',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 15}}>nearest </Text>
                <Icon
                  type="evilicon"
                  name="chevron-down"
                  color="black"
                  size={22}
                />
              </View>
            </View>

            <FlatList
              data={shopDetails}
              renderItem={({item, index, separators}) => displayItem(item)}
              keyExtractor={(item, index) => item.key}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#b3b3b3',
                    }}></View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ShopLocations;
