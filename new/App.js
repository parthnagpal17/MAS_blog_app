import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import { Provider as BlogProvider } from './src/context/blogContext';
import ShowScreen from './src/screens/ShowScreen' ;
import CreateScreen from './src/screens/CreateScreen' ;
import EditScreen from './src/screens/EditScreen' ;

const navigator = createStackNavigator({
  Indexx : IndexScreen,
  ShowScreen : ShowScreen,
  CreateScreen : CreateScreen,
  EditScreen: EditScreen
}, {
  initialRouteName : 'Indexx',
  defaultNavigationOptions : {
    title : 'Blogs'
  }
})

const App = createAppContainer(navigator);

export default () => {
  return (
  <BlogProvider>
      <App />
    </BlogProvider>
    )
}




