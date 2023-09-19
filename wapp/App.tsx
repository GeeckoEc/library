import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from './assets/src/presentation/views/Inicio/Menu';
import { NuevoScreen } from './assets/src/presentation/views/NuevoLibro/Nuevo';
import { ListaScreen } from './assets/src/presentation/views/ListaLibros/Lista';
import { EditarScreen } from './assets/src/presentation/views/EditarLibro/Editar';
import { EliminarScreen } from './assets/src/presentation/views/EliminarLibro/Eliminar';

export type RootStackParamList = {
  MenuScreen:     undefined,
  NuevoScreen:    undefined,
  EditarScreen:   undefined,
  ListaScreen:    undefined,
  EliminarScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }>
        <Stack.Screen
          name='ListaScreen'
          component={ListaScreen}
          options={{title:'Libros registrados', headerShown: true}}
        />
        <Stack.Screen
          name='MenuScreen'
          component={MenuScreen}
          options={{title:'Biblioteca', headerShown: true}}
        />
        <Stack.Screen
          name='EliminarScreen'
          component={EliminarScreen}
          options={{title:'EliminarLibro', headerShown: true}}
        />
        <Stack.Screen
          name='EditarScreen'
          component={EditarScreen}
          options={{title:'Editar libro', headerShown: true}}
        />
        <Stack.Screen
          name='NuevoScreen'
          component={NuevoScreen}
          options={{title:'Crear nuevo libro', headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;