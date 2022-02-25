/**
 * @format
 */
// Finally found a solution for this by adding this line to gradle.properties.
// org.gradle.jvmargs=-Xmx4608m
import {AppRegistry} from 'react-native';
import App from './App';
import PlayView from './PlayView';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PlayView);
