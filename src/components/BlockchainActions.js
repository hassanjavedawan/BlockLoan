import React from 'react';
import {useWalletConnectModal} from '@walletconnect/modal-react-native';
import {ethers} from 'ethers';
import {useMemo, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import {readContract} from '../util/ContractUtil';
import {handelBorrow} from '../util/MethodUtil';
import {RequestModal} from './RequestModal';

export function BlockchainActions() {
  const [rpcResponse, setRpcResponse] = useState();
  const [rpcError, setRpcError] = useState();
  const {provider} = useWalletConnectModal();

  const web3Provider = useMemo(
    () => (provider ? new ethers.providers.Web3Provider(provider) : undefined),
    [provider],
  );

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onModalClose = () => {
    setModalVisible(false);
    setLoading(false);
    setRpcResponse(undefined);
    setRpcError(undefined);
  };

  const getEthereumAction = (method, rpcRequest) => async () => {
    if (!web3Provider) {
      return;
    }

    setRpcResponse(undefined);
    setRpcError(undefined);
    setModalVisible(true);
    try {
      setLoading(true);
      const result = await rpcRequest({web3Provider, method});
      setRpcResponse(result);
      setRpcError(undefined);
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
      <TouchableOpacity
        style={styles.button}
        onPress={getEthereumAction('eth_sendTransaction', handelBorrow)}>
        <Text style={styles.buttonText}>Send Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={getEthereumAction('read', readContract)}>
        <Text style={styles.buttonText}>read Transaction</Text>
      </TouchableOpacity>

      <RequestModal
        rpcResponse={rpcResponse}
        rpcError={rpcError}
        isLoading={loading}
        isVisible={modalVisible}
        onClose={onModalClose}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3396FF',
    borderRadius: 20,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Sansation_Regular',
  },
  modalContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Sansation_Bold',
  },
  subtitle: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  responseText: {
    fontWeight: '300',
    fontFamily: 'Sansation_Regular',
  },
  listContent: {
    alignItems: 'center',
    fontFamily: 'Sansation_Regular',
  },
});
