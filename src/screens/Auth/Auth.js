import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { HStack, useToast, Box  } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


  

const Auth = ({navigation}) => {
    const [first, setfirst] = useState([])
    const toast = useToast();
    const id = "test-toast";

    const authHandle = () => {
        if(first.userInfo){
            navigation.navigate('Gallery')
        }else{
            if (!toast.isActive(id)) {
                toast.show({
                  id,
                  title: "Please Login!"
                });
              }
            navigation.navigate('Auth')
            setfirst('')
        }
    }


    // Initialize GoogleSignin
    GoogleSignin.configure({
        // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        androidClientId: '370608610378-49a6tjog37uhhvme1mg5j63baifjtvgc.apps.googleusercontent.com',
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
       
    });
  
    
  
    // Implement Google Sign-In
  const signInWithGoogle = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // console.warn('User Info:', userInfo);
        setfirst({userInfo})
        navigation.navigate('Gallery')
        // Use the user information as needed
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // User cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // Operation (e.g. sign-in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // Play services not available or outdated
        } else {
          // Some other error occurred
        }
      }
    };

  return (
    <>
       
      <View style={styles.container}>
        <HStack style={{paddingHorizontal: 12,paddingVertical: 16}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Icon name='arrow-left' size={28} color="#fff" />   
        </TouchableOpacity>
         <Text style={styles.headText}>Povo.Ai</Text>
        </HStack>
        <HStack justifyContent={'center'} marginY={8}>
            <TouchableOpacity onPress={authHandle}>
                <Icon name='camera' size={35} color="#fff" />
            </TouchableOpacity>
        </HStack>
        <TouchableOpacity onPress={signInWithGoogle}>
           <HStack style={styles.btn_bg} justifyContent={'center'} alignItems={'center'}>
            <Image style={styles.img2} source={require('../../../assets/images/google.png')} resizeMode='contain' />
           <Text style={styles.btn}>Google</Text>
           </HStack>
        </TouchableOpacity>
        <TouchableOpacity >
           <HStack style={styles.btn_bg} justifyContent={'center'} alignItems={'center'}>
            <Image style={styles.img2} source={require('../../../assets/images/facebook.png')} resizeMode='contain' />
           <Text style={styles.btn}>Facebook</Text>
           </HStack>
        </TouchableOpacity>
        <TouchableOpacity >
           <HStack style={styles.btn_bg} justifyContent={'center'} alignItems={'center'}>
            <Image style={styles.img2} source={require('../../../assets/images/twitter.webp')} resizeMode='contain' />
           <Text style={styles.btn}>Twitter</Text>
           </HStack>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Auth

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    btn:{
        fontSize: 20,
        letterSpacing: 0.8,
        marginRight: 15,
        color: '#fff',
        marginHorizontal: 6
    },
    img2:{
        width: '10%',
        height: undefined,
        aspectRatio: 0.6,
        marginHorizontal: 10
    },
    btn_bg:{
        marginVertical: 8,
        backgroundColor: 'none',
        marginHorizontal: 22,
        borderRadius: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#fff',

    },
    headText:{
        color: '#fff',
        fontFamily: 'Type Juice - Unison Pro Light Round',
        letterSpacing: 0.8,
        textAlign: 'center',
        fontSize: 25,
        marginLeft: 80
      },
})