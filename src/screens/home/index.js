import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Icon from 'react-native-easy-icon';
import HeaderTab from '../../components/header';

const HomeScreen = props => {
  const Medicines = [
    {
      title: 'Omega 3',
      course: '1 month',
      duration: '3 x for day',
      bkgrnd: '#ff99cc',
      require: require('../../assets/images/blueCapsules.jpg'),
      direction: 'Take with water',
      avoid: 'No coffee',
      description:
        'Omega-3 fatty acids: A class of essential fatty acids found in fish oils, especially from salmon and other cold-water fish, that acts to lower the levels of cholesterol and LDL (low-density lipoproteins) in the blood. (LDL cholesterol is the "bad" cholesterol).EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) are the two principal omega-3 fatty acids. The body has a limited ability to manufacture EPA and DHA by converting the essential fatty acid, alpha-linolenic acid (ALA) which is found in flaxseed oil, canola oil or walnuts.Omega-3 fish oil is considered a nutraceutical, a food that provides health benefits. Eating fish has been reported, for example, to protect against late age-related macular degeneration, a common eye disease. The American Heart Association recommends eating fish at least two times a week.',
    },

    {
      title: 'Ibuprofen',
      course: '2 weeks',
      duration: '2 x for day',
      bkgrnd: '#ff4d4d',
      require: require('../../assets/images/cbdcapsules.jpg'),
      direction: 'Take with water',
      avoid: 'No juice, no alcohol',
      description:
        "Ibuprofen is used to relieve pain from various conditions such as headache, dental pain, menstrual cramps, muscle aches, or arthritis. It is also used to reduce fever and to relieve minor aches and pain due to the common cold or flu. Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID). It works by blocking your body's production of certain natural substances that cause inflammation. This effect helps to decrease swelling, pain, or fever.If you are treating a chronic condition such as arthritis, ask your doctor about non-drug treatments and/or using other medications to treat your pain. See also Warning section.Check the ingredients on the label even if you have used the product before. The manufacturer may have changed the ingredients. Also, products with similar names may contain different ingredients meant for different purposes. Taking the wrong product could harm you.If you are taking the over-the-counter product, read all directions on the product package before taking this medication. If your doctor has prescribed this medication, read the Medication Guide provided by your pharmacist before you start taking ibuprofen and each time you get a refill. If you have any questions, ask your doctor or pharmacist. Take this medication by mouth, usually every 4 to 6 hours with a full glass of water (8 ounces/240 milliliters) unless your doctor directs you otherwise. Do not lie down for at least 10 minutes after taking this drug. If you have stomach upset while taking this medication, take it with food, milk, or an antacid.The dosage is based on your medical condition and response to treatment. To reduce your risk of stomach bleeding and other side effects, take this medication at the lowest effective dose for the shortest possible time. Do not increase your dose or take this drug more often than directed by your doctor or the package label. For ongoing conditions such as arthritis, continue taking this medication as directed by your doctor.",
    },

    {
      title: 'Biotin',
      course: '1 month',
      duration: '1 x for day',
      bkgrnd: 'blue',
      require: require('../../assets/images/capsules2.png'),
      direction: 'Take with water',
      avoid: 'No tea, no coffee',
      description:
        'Biotin is a water-soluble vitamin that’s a part of the vitamin B family. It’s also known as vitamin H. Your body needs biotin to help convert certain nutrients into energy. It also plays an important role in the health of your hair, skin, and nails. If you aren’t getting enough biotin, you may experience hair loss or a scaly red rash. However, a deficiency is rare. In most cases, the biotin you get from your diet is enough for you to reap the health benefits it offers.  Still, many people are increasing their intake in hopes of additional benefits. Keep reading to find out how to add biotin to your diet, what to look for in a biotin supplement, possible side effects, and more.',
    },

    {
      title: 'Melatonin',
      course: '1 month',
      duration: '1 x for day',
      bkgrnd: '#47d147',
      require: require('../../assets/images/diabeties.jpg'),
      direction: 'Take with water',
      avoid: 'No alcohol',
      description:
        "Melatonin is a hormone found naturally in the body. Melatonin used as medicine is usually made synthetically in a laboratory. It is most commonly available in pill form, but melatonin is also available in forms that can be placed in the cheek or under the tongue. This allows the melatonin to be absorbed directly into the body. Some people take melatonin by mouth to adjust the body's internal clock. Melatonin is most commonly used for insomnia and improving sleep in different conditions. For example, it is used for jet lag, for adjusting sleep-wake cycles in people whose daily work schedule changes (shift-work disorder), and for helping people establish a day and night cycle. Coronavirus disease 2019 (COVID-19): There is no good evidence to support using melatonin for COVID-19. Follow healthy lifestyle choices and proven prevention methods instead.",
    },

    {
      title: 'Vitamin C',
      course: '1 month',
      duration: '3 x for day',
      bkgrnd: '#9933ff',
      require: require('../../assets/images/vitamins.png'),
      direction: 'Take with water',
      avoid: 'No alcohol',
      description:
        'Vitamin C is one of the safest and most effective nutrients, experts say. Though it may not be the cure for the common cold, the benefits of vitamin C may include protection against immune system deficiencies, cardiovascular disease, prenatal health problems, eye disease, and even skin wrinkling. The tolerable upper intake level (or the maximum amount you can take in a day that likely won’t cause harm) is 2000 mg a day for adults. A recent study published in Seminars in Preventive and Alternative Medicine that looked at over 100 studies over 10 years revealed a growing list of possible benefits of vitamin C. "Vitamin C has received a great deal of attention, and with good reason. Higher blood levels of vitamin C may be the ideal nutrition marker for overall health," says study researcher Mark Moyad, MD, MPH, of the University of Michigan. "The more we study vitamin C, the better our understanding of how diverse it is in protecting our health, from cardiovascular, cancer, stroke, eye health [and] immunity to living longer." ',
    },
  ];

  // console.log('Props:', props);
  // console.log('Navigation', props.navigation);

  const GotoDetails = ({item, index}) => {
    // console.log('Props:', props);
    // console.log('Item', item);
    // console.log('Index', index);
    // props.navigation.navigate('MedicineDetails');
    props.navigation.navigate('MedicineDetails', {data: item});
  };
  const displayItem = ({item, index}) => {
    // console.log('Props:', props);

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          width: 310,
          paddingVertical: 10,
          borderRadius: 15,
          paddingHorizontal: 20,
          backgroundColor: item.bkgrnd,
          flexDirection: 'row',
          zIndex: 1,
        }}
        onPress={() => GotoDetails({index, item})}>
        <View>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 25}}>
            {item.title}
          </Text>
          <Text style={{color: 'white', fontSize: 15}}>
            course:{item.course}
          </Text>
          <Text style={{color: 'white', fontSize: 15}}>{item.duration}</Text>
        </View>

        <Image
          source={item.require}
          style={{
            height: 70,
            width: 70,
            backgroundColor: 'white',
            marginLeft: '30%',
            position: 'absolute',
            bottom: 35,
            right: 10,
            zIndex: 2,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E8E8FC',
        borderRadius: 50,
        padding: 15,
      }}>
      <HeaderTab />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
        }}>
        <Text style={{fontSize: 32, fontWeight: '500'}}>Hi, </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          sagar !
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#E8E8FC',
          alignItems: 'center',
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 0.75,
            backgroundColor: '#E8E8FC',
            height: '100%',
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8E8FC',
              width: '100%',
              height: '80%',
              borderRadius: 50,
              borderColor: 'dimgrey',
              borderWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="material-community"
              name="clipboard-list-outline"
              color="dimgrey"
              size={21}
            />
            <Text
              style={{
                textTransform: 'capitalize',
                fontSize: 15,
                color: 'dimgrey',
              }}>
              {' '}
              your recipe
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#E8E8FC',
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8E8FC',
              height: '80%',
              borderRadius: 50,
              width: '22.5%',
              borderColor: 'dimgrey',
              borderWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="font-awesome"
              name="heartbeat"
              color="dimgrey"
              size={21}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8E8FC',
              height: '80%',
              borderRadius: 50,
              width: '22.5%',
              borderColor: 'dimgrey',
              borderWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon type="fontisto" name="test-tube" color="dimgrey" size={21} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8E8FC',
              height: '80%',
              borderRadius: 50,
              width: '22.5%',
              borderColor: 'dimgrey',
              borderWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="material-community"
              name="clock-time-seven-outline"
              color="dimgrey"
              size={21}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#E8E8FC', paddingLeft: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: '400',
            textTransform: 'capitalize',
            lineHeight: 30,
          }}>
          your recipe
        </Text>
        <View
          style={{
            flexDirection: 'row',
            lineHeight: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'dimgrey',
              fontSize: 15,
            }}>
            Written by
          </Text>
          <Text
            style={{
              color: 'indigo',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {' '}
            Rosalie Alvarez{' '}
          </Text>
          <Icon
            type="font-awesome"
            name="stethoscope"
            color="indigo"
            size={18}
          />
        </View>
      </View>
      <View
        style={{
          flex: 6,
          paddingHorizontal: 10,
          // backgroundColor: 'yellow',
          marginTop: 5,
          borderRadius: 40,
          alignItems: 'center',
        }}>
        <FlatList
          data={Medicines}
          renderItem={({item, index, separators}) => displayItem({item, index})}
          keyExtractor={(item, index) => item.key}
          ItemSeparatorComponent={() => {
            return <View style={{paddingVertical: 7}}></View>;
          }}
        />
        <View
          style={{
            backgroundColor: '#000033',
            width: '114%',
            height: 80,
            // flex: 2,
            borderRadius: 50,
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'grey',
              height: '80%',
              width: '100%',
              justifyContent: 'center',
              marginLeft: 12,
            }}>
            <Image
              source={require('../../assets/images/doctor.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'white',
              }}
            />
          </View>
          <View style={{flex: 3, paddingLeft: 18}}>
            <Text style={{color: '#FFFFFF', fontSize: 13}}>
              Online consultation with doctor
            </Text>
            <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: '700'}}>
              Hi, can I help you ?
            </Text>
            <Text style={{color: '#FFFFFF', fontSize: 13}}>
              Dipali Bawankule, Therapist
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              // backgroundColor: 'grey',
              height: '80%',
              borderRadius: 50,
              marginRight: 7.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="simple-line-icon"
              name="options"
              color="#FFFFFF"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
