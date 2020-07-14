import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DonationScreen() {
    return (
      <View style={{ flexDirection:"row", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Donation Home Screen{"\n\n\n\n\n"}</Text>
        
        
      </View>
    );
  }

  export default DonationScreen;