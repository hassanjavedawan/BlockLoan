import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList } from 'react-native'
import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HStack, ScrollView } from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { FILTERS } from '../../components/Filter';

const Gallery = ({navigation}) => {
    const [imageSource, setImageSource] = useState(null);

  
    const extractedUri = imageSource
    const [selectedFilterIndex, setIndex] = useState(0);

    const onExtractImage = ({nativeEvent}) => {
        extractedUri.current = nativeEvent.uri;
      };
      const onSelectFilter = selectedIndex => {
        setIndex(selectedIndex);
      };
      const renderFilterComponent = ({item, index}) => {
        const FilterComponent = item.filterComponent;
        const image = (
          <Image
            style={styles.filterSelector}
            source={{ uri: imageSource }}
            resizeMode={'cover'}
          />
        );
        return (
            <TouchableOpacity onPress={() => onSelectFilter(index)}>
            {imageSource !== null ? (
              <>
                <Text style={styles.filterTitle}>{item.title}</Text>
                <FilterComponent image={image} />
              </>
            ) : ''}
          </TouchableOpacity>
        );
      };
      
      const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;
    

    const openImagePicker = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 3000,
          maxWidth: 3000,
        };
    
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImageSource(imageUri);
          }
        });
      }
      
    const  handleCameraLaunch = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 3000,
          maxWidth: 3000,
        };
      
        launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.error) {
            console.log('Camera Error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImageSource(imageUri);
          }
        });
      }

  return (
    <>
       <View style={styles.container}>
       <HStack justifyContent={'space-between'} alignItems={'center'} style={{paddingHorizontal: 6,paddingVertical: 16}}>
        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Icon name='arrow-left' size={28} color="#fff" />   
        </TouchableOpacity>
        <Text style={styles.headText}>Povo.Ai</Text>
        <TouchableOpacity >
            <Text style={styles.topBtn}>Publish</Text>
        </TouchableOpacity>
        </HStack>
        <ScrollView>
        <HStack justifyContent={'center'} marginY={8}>
            <TouchableOpacity  onPress={handleCameraLaunch} style={{marginHorizontal: 10}}>
                <Icon name='camera' size={40} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity  onPress={openImagePicker} style={{marginHorizontal: 10}}>
               <Icon name='image' size={40} color="#fff" />
            </TouchableOpacity>
        </HStack>
        <HStack justifyContent={'center'} marginY={4} style={styles.imgMain}>
       {imageSource !== null  ?
         selectedFilterIndex === 0 ? (
            <Image
              style={styles.Gallery}
              source={{ uri: imageSource }}
              resizeMode={'cover'}
            />
          ) : (
            <SelectedFilterComponent
              onExtractImage={onExtractImage}
              extractImageEnabled={true}
              image={
                <Image
                  style={styles.Gallery}
                  source={{ uri: imageSource }}
                  resizeMode={'cover'}
                />
              }
            />
          ) : 
        <Text style={styles.hideText}>Choose file please</Text>
        }
       
        </HStack>
      <FlatList
        data={FILTERS}
        keyExtractor={item => item.title}
        horizontal={true}
        renderItem={renderFilterComponent}
      />
      </ScrollView>
        </View>        
    </>
  )
}

export default Gallery

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    topBtn:{
        color: '#fff',
        fontSize: 15,
        letterSpacing: 0.5,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6
    },
    Gallery:{
        width: 340,
        height: 500,
        borderRadius: 10
    },
    filterSelector: {
        width: 100,
        height: 100,
        margin: 4,
        marginBottom: 20
      },
      filterTitle: {
        fontSize: 13,
        textAlign: 'center',
        color: '#fff',
      },
      hideText:{
        color: '#fff',
        fontSize: 22,
        marginVertical: 60
      },
      headText:{
        color: '#fff',
        fontFamily: 'Type Juice - Unison Pro Light Round',
        letterSpacing: 0.8,
        textAlign: 'center',
        fontSize: 25,
        marginLeft: 50
      },
})