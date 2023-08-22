import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import type {FormattedRpcError, FormattedRpcResponse} from '../types/methods';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  isLoading?: boolean;
  rpcResponse?: FormattedRpcResponse;
  rpcError?: FormattedRpcError;
}

export function RequestModal({
  isVisible,
  onClose,
  isLoading,
  rpcResponse,
  rpcError,
}: Props) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.innerContainer}>
        {isLoading && (
          <>
            <Text style={styles.title}>Pending Request</Text>
            <ActivityIndicator color="#3396FF" style={styles.loader} />
            <Text style={styles.center}>
              Approve or reject request using your wallet if needed
            </Text>
          </>
        )}
        {rpcResponse && (
          <>
            <Text
              style={[
                styles.title,
                styles.successText,
                {fontFamily: 'Sansation_Bold'},
              ]}>
              Request Response
            </Text>
            {Object.keys(rpcResponse).map(key => (
              <Text
                key={key}
                style={[styles.subtitle, {fontFamily: 'Sansation_Bold'}]}>
                {key}:{' '}
                <Text style={styles.responseText}>
                  {rpcResponse[key as keyof FormattedRpcResponse]?.toString()}
                </Text>
              </Text>
            ))}
          </>
        )}
        {rpcError && (
          <>
            <Text style={[styles.title, styles.failureText]}>
              Request Failure
            </Text>
            <Text style={styles.subtitle}>
              Method: <Text style={styles.responseText}>{rpcError.method}</Text>
            </Text>
            <Text style={styles.subtitle}>
              Error: <Text style={styles.responseText}>{rpcError.error}</Text>
            </Text>
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 8,
  },
  innerContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  loader: {
    marginVertical: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Sansation_Bold',
  },
  successText: {
    color: '#3396FF',
    fontFamily: 'Sansation_Regular',
  },
  failureText: {
    color: '#F05142',
    fontFamily: 'Sansation_Bold',
  },
  subtitle: {
    fontWeight: 'bold',
    marginVertical: 4,
    fontFamily: 'Sansation_Bold',
  },
  center: {
    textAlign: 'center',
    fontFamily: 'Sansation_Regular',
  },
  responseText: {
    fontWeight: '300',
    fontFamily: 'Sansation_Regular',
  },
});
