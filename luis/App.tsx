import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/Home/home';
import { RegisterScreen } from './src/Presentation/views/Register/Register';
import { UpdateScreen } from './src/Presentation/views/Update/Update';
import { ListScreen } from './src/Presentation/views/List/List';
import { UpdateRegisterScreen } from './src/Presentation/views/UpdateRegister/UpdateRegister';


export type RootStackParamList= {
  HomeScreen:undefined,
  RegisterScreen:undefined,
  UpdateScreen:undefined,
  ListScreen:undefined,
  UpdateRegisterScreen:undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Menú', headerShown:true}}
        />
          <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: 'Registro', headerShown:true }}
        />
        <Stack.Screen
          name="UpdateScreen"
          component={UpdateScreen}
          options={{title: 'Actualizar', headerShown:true }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{title: 'Lista', headerShown:true }}
        />
        <Stack.Screen
          name="UpdateRegisterScreen"
          component={UpdateRegisterScreen}
          options={{title: 'Editar Registro', headerShown:true }}
        />
       
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;