import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configStore from './src/store/config';

import AuthScreen from './src/screens/auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import placeDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configStore();

// Register Screens 
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlacesScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlacesScreen",() => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => placeDetail, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => SideDrawer);

//Start Application
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-place.AuthScreen",
    title: "Login"
  }
})