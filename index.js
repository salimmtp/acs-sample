/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.js';
import BluetoothScanner from './BluetoothScanner.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BluetoothScanner);
