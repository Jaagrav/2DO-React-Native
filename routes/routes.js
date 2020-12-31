import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from "../screens/Home";
import EditTask from "../screens/EditTask";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    EditTask: {
        screen: EditTask,
        navigationOptions: {
            headerShown: false,
        }
    }
}
const stack = createStackNavigator(screens);

export default createAppContainer(stack);