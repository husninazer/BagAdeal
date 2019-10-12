import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
   
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import MapScreen from "../screens/MapScreen";
import { Ionicons } from '@expo/vector-icons';

const activeColor = "green";
const inactiveColor = "#b8bece";



    



    const List = createStackNavigator({
        Home: HomeScreen,
        Section: SectionScreen
      });
      
      const Map = createStackNavigator({
        Map: MapScreen
      });
      
      const Profile = createStackNavigator({
        Profile: SectionScreen
      });

      List.navigationOptions = ({ navigation }) => {
        var tabBarVisible = true;
        const routeName = navigation.state.routes[navigation.state.index].routeName;
      
        if (routeName == "Section") {
          tabBarVisible = false;
        }
      
        return {
          tabBarVisible,
          tabBarLabel: "List",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          )
        };
      };

      Map.navigationOptions = {
        tabBarLabel: "Map",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="md-map"
            size={26}
            color={focused ? activeColor : inactiveColor}
          />
        )
      };

      Profile.navigationOptions = {
        tabBarLabel: "Profile",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="md-person"
            size={26}
            color={focused ? activeColor : inactiveColor}
          />
        )
      };

      const TabNavigator = createBottomTabNavigator({
        List,
        Map,
        Profile
      }, {
        tabBarOptions: {
          activeTintColor: activeColor,
          inactiveTintColor: inactiveColor
        }
      });
      
      export default TabNavigator;