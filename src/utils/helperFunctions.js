import React from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export function HeaderLeft(navigation) {
    return () => {
      return <TouchableWithoutFeedback onPress={() => { navigation.openDrawer(); } }><Icon name='menu' size={38}></Icon></TouchableWithoutFeedback>;
    };
  }

  export const images ={
    ratings:{
      '1': require('../../assets/rating-1.png'),
      '2': require('../../assets/rating-2.png'),
      '3': require('../../assets/rating-3.png'),
      '4': require('../../assets/rating-4.png'),
      '5': require('../../assets/rating-5.png'),
    }
  }