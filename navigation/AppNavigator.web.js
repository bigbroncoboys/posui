import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ChargeScreen from '../screens/ChargeScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import EmployeesScreen from '../screens/EmployeesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ItemsScreen from '../screens/ItemsScreen';
import OrderScreen from '../screens/OrderScreen';

const switchNavigator = createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
        Login: LoginScreen,
        Register: RegisterScreen,
        Home: HomeScreen,
        Charge: ChargeScreen,
        CreditCard: CreditCardScreen,
        Employees: EmployeesScreen,
        Settings: SettingsScreen,
        Items: ItemsScreen,
        Order: OrderScreen
    },
    {
        initialRouteName: 'Login'
    }
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
