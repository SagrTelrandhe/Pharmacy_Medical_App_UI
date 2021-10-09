import React, {useEffect} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {Back} from '../../components/backbutton';
import HeaderTab from '../../components/header';
import Icon from 'react-native-easy-icon';
import LinearGradient from 'react-native-linear-gradient';
import Reminders from '@wiicamp/react-native-reminders';

const MedicineDetails = props => {
  const {data} = props.route.params;
  console.log('Data', data);

  const GotoShopLocations = () => {
    props.navigation.navigate('ShopLocations');
  };

  const GoToTestScreen =()=>{
    props.navigation.navigate('TestHtmlToPdf'); }

  const getReminder = () => {
    Reminders.getReminders()
      .then(d => {
        console.log('reminder: ', d);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    Reminders.requestPermission()
      .then(re => {
        console.log('per: ', re);
      })
      .catch(e => {
        console.log('per e: ', e);
      });
    // Reminders.addReminder({
    //   title: 'Wake-up reminder',
    //   note: 'Wake-up and have breakfast!',
    //   timestamp: Date.now() * 60000 * 1,
    // })
    //   .then(result => {
    //     console.log('result ', result);
    //   })
    //   .catch(e => {
    //     console.log('add e: ', e);
    //   });
    // Reminders.removeReminder('the-reminder-id');
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f2f2f2',
          borderRadius: 50,
          padding: 15,
        }}>
        <HeaderTab textColor="black" />
        <Back onpress={() => props.navigation.goBack()} />
        <View
          style={{
            flex: 1,
            // backgroundColor: 'tomato',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 35, fontWeight: '300'}}>
            {data.title}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            // backgroundColor: 'lawngreen',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/whiteCapsules.png')}
            style={{
              height: '100%',
              width: '100%',
              // backgroundColor: 'red',
            }}
          />
        </View>

        <TouchableOpacity
          // onPress={() => GotoShopLocations()}
          // onPress={() => getReminder()}
          onPress={()=>GoToTestScreen()}
          style={{
            height: 60,
            width: '97.5%',
            borderRadius: 50,
            // backgroundColor: 'black',
            position: 'absolute',
            bottom: 30,
            alignSelf: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}>
          <LinearGradient
            colors={['#09203f', '#537895', '#09203f']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            useAngle={true}
            angle={355}
            style={{
              height: 60,
              width: '97.5%',
              borderRadius: 50,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 25,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Where to Buy
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View
          style={{
            flex: 6,
            //  backgroundColor: '#E6E6E6'
          }}>
          <ScrollView>
            <View
              style={{
                flex: 1.5,
                // backgroundColor: 'red',
                flexDirection: 'row',
                borderBottomWidth: 0.7,
                borderColor: '#d9d9d9',
              }}>
              <View
                style={{
                  flex: 2,
                  // backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="ionicon"
                  name="md-calendar-outline"
                  color="black"
                  size={22}
                />
              </View>
              <View
                style={{
                  flex: 8,
                  // backgroundColor: '#E6E6E6',
                  marginVertical: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1, height: 20}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}>
                      Course:
                    </Text>
                  </View>
                  <View style={{flex: 4, height: 20}}>
                    <Text style={{color: 'black', marginLeft: 5}}>
                      {data.course}
                    </Text>
                  </View>
                </View>

                <View style={{flex: 1}}>
                  <Text style={{color: 'black'}}>{data.duration}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1.5,
                // backgroundColor: 'pink',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: '#d9d9d9',
              }}>
              <View
                style={{
                  flex: 2,
                  // backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="fontisto"
                  name="blood-drop"
                  color="black"
                  size={22}
                />
              </View>
              <View
                style={{
                  flex: 8,
                  // backgroundColor: '#E6E6E6',
                  marginVertical: 10,
                }}>
                <View style={{flex: 1}}>
                  <Text style={{color: 'black'}}>{data.direction}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    {data.avoid}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 2,
                  // backgroundColor: 'white',
                  alignItems: 'center',
                  paddingTop: 25,
                }}>
                <Icon
                  type="material"
                  name="description"
                  color="black"
                  size={22}
                />
              </View>
              <View
                style={{
                  flex: 8,
                  // backgroundColor: '#E6E6E6',
                  marginTop: 10,
                }}>
                <View style={{flex: 1.6}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '700',
                      fontSize: 15,
                    }}>
                    Description
                  </Text>
                </View>
                <View style={{flex: 8}}>
                  <Text style={{color: 'black', textAlign: 'justify'}}>
                    {data.description}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default MedicineDetails;
