import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {HStack, ScrollView} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useWalletConnectModal} from '@walletconnect/modal-react-native';


const Login = ({navigation}) => {
  const {open, isConnected} = useWalletConnectModal();

  const ConnectWallet = async () => {
    await open().then(() => {
      navigation.navigate('Home');
    });
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <HStack justifyContent={'center'} mt="5" pt="5">
            <Text style={styles.heading}>Alpha Wallet</Text>
          </HStack>

          <HStack justifyContent={'center'} mt="5">
            <Text style={styles.para}>
              Do you want a completely FREE way to earn real money? Money “that
              you can send to your family in our BlockM Wallet, get a Doctor at
              BlockMed, a lesson at BlockMed, pay for products at BigMudi, a
              delivery/ride at BlockRide, convert to local currency with
              Lendsend, pay for your energy bills, recharge airtime and data for
              your Mobile service? Sign Up Today and Opt-In now!”
            </Text>
          </HStack>
          <HStack justifyContent={'center'}>
            <Image
              style={styles.img2}
              source={require('../../../assets/images/mask.png')}
              resizeMode="contain"
            />
          </HStack>

          {isConnected ? (
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3F5CC8', '#E12160']}
                  style={styles.linearGradient}>
                  <Text style={styles.btn}>Start</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.text}>Please Connect Wallet </Text>

              <TouchableOpacity onPress={ConnectWallet}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3F5CC8', '#E12160']}
                  style={styles.linearGradient}>
                  <Text style={styles.btn}>Connect Wallet</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  img2: {
    width: '65%',
    aspectRatio: 0.7,
  },
  text: {
    textAlign: 'center',
    color: '#010169',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Sansation_Bold',
  },
  para: {
    textAlign: 'center',
    color: '#1D2126',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Sansation_Regular',
    width: '80%',
  },
  heading: {
    textAlign: 'center',
    color: '#010169',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Sansation_Bold',
  },
  linearGradient: {
    marginTop: 50,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    textTransform: 'uppercase',
    color: '#fff',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
    fontFamily: 'Sansation_Regular',
  },
});
