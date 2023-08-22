import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {HStack, ScrollView, VStack, Divider} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {cardData2} from '../screens/Data';

const BarrowTab = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      {/* Cards Section */}
      <View style={styles.card_sec_main}>
        <Text
          style={{
            marginVertical: 16,
            fontSize: 22,
            fontFamily: 'Sansation_Regular',
          }}>
          Borrow
        </Text>
        {cardData2.map(res => {
          return (
            <View key={res.id} style={styles.cardMain}>
              <View style={styles.cardInner}>
                <HStack alignItems={'center'}>
                  <Image
                    style={styles.cardImg}
                    source={res.image}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 10,
                      fontFamily: 'Sansation_Regular',
                    }}>
                    {res.title}
                  </Text>
                </HStack>
                <HStack
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  marginY={4}>
                  <VStack>
                    <Text
                      style={{
                        color: '#727C8E',
                        fontFamily: 'Sansation_Regular',
                      }}>
                      Wallet Balance
                    </Text>
                    <Text
                      style={{fontSize: 22, fontFamily: 'Sansation_Regular'}}>
                      {res.balance}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text
                      style={{
                        color: '#727C8E',
                        fontFamily: 'Sansation_Regular',
                      }}>
                      YPI
                    </Text>
                    <Text
                      style={{fontSize: 22, fontFamily: 'Sansation_Regular'}}>
                      {res.ypi}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text
                      style={{
                        color: '#727C8E',
                        fontFamily: 'Sansation_Regular',
                      }}>
                      Collateral
                    </Text>
                    <Switch
                      trackColor={{false: '#3F5CC8', true: '#b92f79'}}
                      thumbColor={isEnabled ? '#3F5CC8' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </VStack>
                </HStack>
                <Text
                  style={{color: '#727C8E', fontFamily: 'Sansation_Regular'}}>
                  {res.bottom_text}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      {/* Cards Section */}
    </>
  );
};

export default BarrowTab;

const styles = StyleSheet.create({
  card_sec_main: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  cardMain: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 6,
    marginVertical: 5,
  },
  cardImg: {
    width: '12%',
    aspectRatio: 1,
    height: undefined,
  },
});
