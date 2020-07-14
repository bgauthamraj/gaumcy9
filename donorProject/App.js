import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableHighlight,FlatList, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DonationScreen from './DonationScreen';



function HomeScreen({navigation}) {
  return (
    <View style={{ flexDirection:"row", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen{"\n\n\n\n\n"}</Text>
      <Button
        title="Donors"
        onPress={() => navigation.navigate('Donors')}
      /> 
      <Button
        title="Schools"
        onPress={() => navigation.navigate('Schools')}
      />
    </View>
  );
}

function DonorScreen() {
  return (
  
      <Tab.Navigator>
        <Tab.Screen name="DonorHome" component={DonorHome} />
        <Tab.Screen name="Donate" component={DonationScreen}/> 
        
      </Tab.Navigator>
      
    /*  import screen as tabHow to have button,view and tab in same screen <View style={{flexDirection:"row", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Donor Screen~{"\n"}</Text>
      {/*<Button
        //title="Home"
        //onPress={() => navigation.navigate('Home')}
      /> /*

// Donation Screen imported from another file
      <Button 
        title="Schools "
        onPress={() => navigation.navigate('Home')}
      />*/



    
  );
}

function SchoolScreen({navigation}) {
  return (
    <View style={{ flexDirection:"row", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>School Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Donors"
        onPress={() => navigation.navigate('Donors')}
      />
    </View>
  );
}

function DonorHome({navigation}) {
  return (
    <View>
      <Text>Donor Home Screen{"\n\n\n\n\n"}</Text>
      <FlatList
        data={[
          {key: 'School1'},
          {key: 'School2'},
          
        ]}renderItem={({item}) => 
        
        {return(
          
          <TouchableHighlight onPress={() => navigation.navigate('Details')}>
          <Text >{item.key}</Text>
     </TouchableHighlight>
   
               
        )
      }
    }
        />
      
    </View>
  );
}

function Details({navigation}) {


  return (
    <View style={{ flexDirection:"row", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
  <Text> School Name: </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donors" component={DonorScreen} />
        <Stack.Screen name="Schools" component={SchoolScreen} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


