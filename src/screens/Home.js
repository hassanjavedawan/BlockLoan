import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import {HStack, ScrollView, VStack, Divider, Box, Input} from 'native-base';
import BarrowTab from '../components/BarrowTab';
import {numberToHex, sanitizeHex} from '@walletconnect/encoding';
import LinearGradient from 'react-native-linear-gradient';
import {useWalletConnectModal} from '@walletconnect/modal-react-native';
import {BlockchainActions} from '../components/BlockchainActions';
import {ethers} from 'ethers';

import {readContract} from '../util/ContractUtil';
import {handelBorrow, handelDeposit} from '../util/MethodUtil';
import {RequestModal} from '../components/RequestModal';

const Home = ({navigation}) => {
  const {isConnected, provider, open,address} = useWalletConnectModal();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [amount, setAmount] = React.useState('');
  const [account, setAccount] = React.useState('');

  const toWei = sanitizeHex(numberToHex(amount));

  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect().then(() => navigation.navigate('Login'));
    }
    return open();
  };
console.log("user Address => ",address);
  //  blockchain action
  const [rpcResponse, setRpcResponse] = useState();
  const [rpcError, setRpcError] = useState();

  const web3Provider = useMemo(
    () => (provider ? new ethers.providers.Web3Provider(provider) : undefined),
    [provider],
  );

  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onModalClose = () => {
    setModalShow(false);
    setLoading(false);
    setRpcResponse(undefined);
    setRpcError(undefined);
  };

  const getDepositAction = (method, rpcRequest) => async () => {
    if (!web3Provider) {
      return;
    }
    
    setRpcResponse(undefined);
    setRpcError(undefined);
    setModalShow(true);
    try {
      setLoading(true);
      if (!amount) {
        throw new Error('No amount found');
      }
      const result = await rpcRequest({web3Provider, method}, toWei);
      setRpcResponse(result);
      setRpcError(undefined);
      setAccount('');
      setAmount('');
    } catch (error) {
      console.error('RPC request failed:', error);
      setRpcResponse(undefined);
      setRpcError({method, error: error?.message});
    } finally {
      setLoading(false);
    }
  };

  const getBorrowAction = (method, rpcRequest) => async () => {
  console.log('handelBorrow. 2 ===>', account);

    if (!web3Provider) {
      return;
    }

    setRpcResponse(undefined);
    setRpcError(undefined);
    setModalShow(true);
    try {
      setLoading(true);
      if (!account) {
        throw new Error('No account found');
      }
      const result = await rpcRequest({web3Provider, method}, account);
      setRpcResponse(result);
      setRpcError(undefined);
      setAccount('');
      setAmount('');
    } catch (error) {
      console.error('RPC request failed:', error);
      setRpcResponse(undefined);
      setRpcError({method, error: error?.message});
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* Top Image */}
          <HStack justifyContent={'center'}>
            <Image
              style={styles.img}
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </HStack>
          {/* Top Image */}

          {/* Hero Image */}
          <HStack justifyContent={'center'}>
            <ImageBackground
              style={styles.img2}
              source={require('../../assets/images/Group.png')}
              resizeMode="contain">
              <Image
                style={styles.left}
                source={require('../../assets/images/left.png')}
                resizeMode="contain"
              />
              <Image
                style={styles.right}
                source={require('../../assets/images/right.png')}
                resizeMode="contain"
              />
              <HStack justifyContent={'center'} marginTop={35}>
                <VStack justifyContent={'center'} alignItems={'center'}>
                  <Text style={styles.numb}>715</Text>
                  <Text style={styles.title}>CRYPTO{'\n'}BALANCE</Text>
                </VStack>
                <Divider
                  orientation="vertical"
                  mx="10"
                  thickness="2"
                  h="78"
                  style={{marginTop: 15}}
                  _light={{
                    bg: 'muted.300',
                  }}
                  _dark={{
                    bg: 'muted.40',
                  }}
                />
                <VStack justifyContent={'center'} alignItems={'center'}>
                  <Text style={styles.numb}>715</Text>
                  <Text style={styles.title}>LOAN{'\n'}BALANCE</Text>
                </VStack>
              </HStack>
            </ImageBackground>
          </HStack>
          {/* Hero Image */}
          {/* Top Buttons */}
          {isConnected ? (
            <HStack
              style={styles.btnMain}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.deposit_btn}>Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible1(true)}>
                <LinearGradient
                  start={{x: 0, y: 1.5}}
                  end={{x: 1, y: 1.7}}
                  colors={['#3F5CC8', '#E12160']}
                  style={styles.linearGradient}>
                  <Text style={styles.borrow_btn}>Borrow</Text>
                </LinearGradient>
              </TouchableOpacity>
            </HStack>
          ) : (
            <HStack justifyContent={'center'}>
              <LinearGradient
                start={{x: 0, y: 1.5}}
                end={{x: 1, y: 1.7}}
                colors={['#3F5CC8', '#E12160']}
                style={styles.linearGradient}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleButtonPress}>
                  <Text style={styles.borrow_btn}>
                    {isConnected ? 'Disconnect' : 'Connect Wallet'}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </HStack>
          )}

          <BarrowTab />
          {/* Top Buttons */}
        </ScrollView>
      </View>
      {/* deposit  Model start */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() =>
            modalVisible ? setModalVisible(!modalVisible) : null
          }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.label}>
                Enter the amount you {'\n'} wish to deposit.
              </Text>
              <Box style={{width: '100%'}} mt="2">
                <Input
                  size="md"
                  onChangeText={itemValue => setAmount(itemValue)}
                  value={amount}
                  placeholder="Enter amount here"
                  focusOutlineColor="#000"
                  _focus={{shadow: 'none', backgroundColor: 'transparent'}}
                  isFocused={true}
                  bg="#fff"
                  isRequired={true}
                  variant="filled"
                  style={{
                    width: '100%',
                    fontFamily: 'Sansation_Regular',
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}
                />
              </Box>

              <Box style={{width: '90%', marginTop: 20}}>
                <TouchableOpacity
                  onPress={getDepositAction('Deposit', handelDeposit)}>
                  <LinearGradient
                    start={{x: 0, y: 1.5}}
                    end={{x: 1, y: 1.7}}
                    colors={['#3F5CC8', '#E12160']}
                    style={styles.linearGradient}>
                    <Text style={styles.borrow_btn}>Confirm</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Box>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* end */}
      {/* borrow  Model start */}
      <Modal animationType="slide" transparent={true} visible={modalVisible1}>
        <TouchableWithoutFeedback
          onPress={() =>
            modalVisible1 ? setModalVisible1(!modalVisible1) : null
          }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.label}>
                Enter the account {'\n'} to borrow.
              </Text>
              <Box style={{width: '100%'}} mt="2">
                <Input
                  size="md"
                  onChangeText={itemValue => setAccount(itemValue)}
                  placeholder="Enter account here"
                  shadow="1"
                  value={account}
                  focusOutlineColor="#000"
                  _focus={{shadow: 'none', backgroundColor: 'transparent'}}
                  isFocused={true}
                  bg="#fff"
                  isRequired
                  variant="filled"
                  style={{
                    width: '100%',
                    fontFamily: 'Sansation_Regular',
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box style={{width: '90%', marginTop: 20}}>
                <TouchableOpacity
                  onPress={getBorrowAction('isBorrow', handelBorrow)}>
                  <LinearGradient
                    start={{x: 0, y: 1.5}}
                    end={{x: 1, y: 1.7}}
                    colors={['#3F5CC8', '#E12160']}
                    style={styles.linearGradient}>
                    <Text style={styles.borrow_btn}>Confirm</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Box>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* end */}

      <RequestModal
        rpcResponse={rpcResponse}
        rpcError={rpcError}
        isLoading={loading}
        isVisible={modalShow}
        onClose={onModalClose}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  linearGradient: {
    borderRadius: 5,
  },
  btnMain: {
    paddingHorizontal: 16,
  },
  deposit_btn: {
    textTransform: 'capitalize',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    borderRadius: 5,
    fontFamily: 'Sansation_Regular',
  },
  borrow_btn: {
    textTransform: 'capitalize',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
    paddingHorizontal: 50,
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Sansation_Regular',
  },
  img: {
    width: '45%',
    aspectRatio: 1.8,
    height: undefined,
  },
  img2: {
    width: '100%',
    aspectRatio: 2,
    height: undefined,
  },
  left: {
    width: '40%',
    aspectRatio: 1.4,
    height: undefined,
    position: 'absolute',
    bottom: 20,
    left: -14,
  },
  right: {
    width: '40%',
    aspectRatio: 1.4,
    height: undefined,
    position: 'absolute',
    top: 0,
    right: -15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
    color: 'red',
    fontFamily: 'Sansation_Regular',
  },
  numb: {
    color: '#fff',
    fontSize: 45,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Sansation_Regular',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    width: '90%',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
