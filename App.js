import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login/Login';
import MainNavigation from './src/navigations/MainNavigation';
import {WalletConnectModal} from '@walletconnect/modal-react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const projectId = 'b014e603b69a5ac004e7bd6918655dd1';

  const providerMetadata = {
    name: 'BlockLoan',
    description: '',
    url: 'https://hopeaccelerated.com/',
    icons: ['http://hopeaccelerated.com/wp-content/uploads/thegem-logos/logo_49f2dff8f186f5b984175af1096a5c97_1x.png'],
    redirect: {
      native: 'blockloan://',
      universal: 'blockloan',
    },
  };
  const sessionParams = {
    namespaces: {
      eip155: {
        methods: [
          'eth_sendTransaction',
          'eth_signTransaction',
          'eth_sign',
          'personal_sign',
          'eth_signTypedData',
        ],
        chains: ['eip155:80001'],
        events: ['chainChanged', 'accountsChanged'],
        rpcMap: {},
      },
    },
  };
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <Provider store={store}>
            <MainNavigation />
          </Provider>
        </NativeBaseProvider>
      </NavigationContainer>
      <WalletConnectModal
        themeMode="dark"
        projectId={projectId}
        providerMetadata={providerMetadata}
        sessionParams={sessionParams}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
