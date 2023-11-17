import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import RadioButtonRN from 'radio-buttons-react-native';
import COLORS from '../consts/colors';
import {SecondaryButton} from '../components/Button';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');


const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  const data = [
    {
      label: '1/2 bread                         3.500 Dt'
     },
     {
      label: 'bread                                4.200 Dt'
     }
    ];
    const [isChecked, setIsChecked] = useState({
      Egg: false,
      Kwika: false,
      Cheese: false,
      Salami : false,
      Jambon: false,
      Escalope : false,
    });
    const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
    // Get the current list of favorites from AsyncStorage
    const favoritesString = await AsyncStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];

    // Toggle the favorite status
    setIsFavorite(!isFavorite);

    // Add or remove the item from favorites
    if (!isFavorite) {
      favorites.push({ id: Date.now(), name: 'Item Name' }); // Replace 'Item Name' with the actual item name
    } else {
      const indexToRemove = favorites.findIndex(item => item.name === 'Item Name'); // Replace 'Item Name' with the actual item name
      favorites.splice(indexToRemove, 1);
    }

    // Save the updated favorites list back to AsyncStorage
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: height -640, width: width}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
              {item.name}
            </Text>
            <TouchableOpacity
            style={[ isFavorite ? styles.favoriteActive : null]}
            onPress={toggleFavorite}
            >
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
            </TouchableOpacity>
          </View>
          <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          color="black"
          />
          <Text
            style={{flex: 1, padding: 10, fontSize: 17}}
          >Optional</Text>
          <CheckBox
          style={{flex: 1, padding: 10}}
          isChecked={isChecked.Egg}
          onClick={()=>
          setIsChecked({...isChecked, Egg: !isChecked.Egg})}
          rightText={"Egg             (1000 Dt)"}
          rightTextStyle={{fontSize: 16, color: isChecked.Egg ? "black" : "grey"}}
         />
             <CheckBox
          style={{flex: 1, padding: 10}}
          isChecked={isChecked.Cheese}
          onClick={()=>
          setIsChecked({...isChecked, Cheese: !isChecked.Cheese})}
          rightText={"Cheese       (1600 Dt)"}
          rightTextStyle={{fontSize: 16, color: isChecked.Cheese ? "black" : "grey"}}
         />
             <CheckBox
          style={{flex: 1, padding: 10}}
          isChecked={isChecked.Kwika}
          onClick={()=>
          setIsChecked({...isChecked, Kwika: !isChecked.Kwika})}
          rightText={"Kwika         (1000 Dt)"}
          rightTextStyle={{fontSize: 16, color: isChecked.Kwika ? "black" : "grey"}}
         />
             <CheckBox
          style={{flex: 1, padding: 10}}
          isChecked={isChecked.Salami}
          onClick={()=>
          setIsChecked({...isChecked, Salami: !isChecked.Salami})}
          rightText={"Salami        (900 Dt)"}
          rightTextStyle={{fontSize: 16, color: isChecked.Salami ? "black" : "grey"}}
         />
          <CheckBox
          style={{flex: 1, padding: 10}}
          isChecked={isChecked.Jambon}
          onClick={()=>
          setIsChecked({...isChecked, Jambon: !isChecked.Jambon})}
          rightText={"Jambon     (1000 Dt)"}
          rightTextStyle={{fontSize: 16, color: isChecked.Jambon ? "black" : "grey"}}
         />
         <CheckBox
          style={{flex: 1, padding: 10}}
          isChecked={isChecked.Escalope}
          onClick={()=>
          setIsChecked({...isChecked, Escalope: !isChecked.Escalope})}
          rightText={"Escalope   (3500 Dt)"}
          rightTextStyle={{fontSize: 16, color: isChecked.Escalope ? "black" : "grey"}}
         />
          <View style={{marginTop: 40, marginBottom: 40}}>
            <SecondaryButton title="Add To Cart" backgroundColor="black"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: '#F0F0F0',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: 'black',
  },
  favoriteActive: {
    backgroundColor: 'red',
  },
});

export default DetailsScreen;
