import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ChargeScreen from '../screens/ChargeScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import EmployeesScreen from '../screens/EmployeesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
        Home: HomeScreen,
        Charge: ChargeScreen,
        CreditCard: CreditCardScreen,
        Employees: EmployeesScreen,
        Settings: SettingsScreen
    },
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(AppNavigator);