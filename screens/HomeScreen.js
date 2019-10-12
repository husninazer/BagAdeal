import React from "react";
import styled from "styled-components"
import Card from "../components/Card";
import { ScrollView,SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
           header: () => null,
        } 
    }
    render() {
      return (
        <Container>
          <TitleBar>
          <Wrapper>
            <Ionicons name="md-pin" size={20} color="white" />
            <Title>Red Sea Mall, Jeddah</Title>
          </Wrapper>
          </TitleBar>
          <ScrollView horizontal={false} style={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
            this.props.navigation.push("Section");
      }}
    >
          <Card
            title="Shake Shack"
           onP image={require("../assets/shakeshack.jpeg")}
            caption="Today 18:00 - 19:00"
            logo={require("../assets/shackshacklogo.jpeg")}
            subtitle="50m"
            price="15 SAR"
          />
    </TouchableOpacity>
          <Card
            title="KFC"
            image={require("../assets/kfc.jpeg")}
            caption="Nothing Available     "
            logo={require("../assets/kfclogo.jpeg")}
            subtitle="75m"
            price="10 SAR"
          />
          <Card
            title="Krispy Kreme"
            image={require("../assets/krispykreme.jpeg")}
            caption="Today 22:00 - 23:00"
            logo={require("../assets/krispykremelogo.jpg")}
            subtitle="80m"
            price="10 SAR"
          />
          <Card
            title="Shawarmer"
            image={require("../assets/shawarmer.jpeg")}
            caption="Today 23:00 - 23:59  "
            logo={require("../assets/shawarmerlogo.jpg")}
            subtitle="80m"
            price="5 SAR"
          />
          </ScrollView>
        </Container>
      );
    }
  }
  
  
  const Container = styled.View`
    background: #f0f3f5;
    flex: 1;
  `;
  
  const Wrapper = styled.View`
    
    flex-direction:row;
    padding-top:8%;
    padding-left:20%;
    
  `
  
  const TitleBar = styled.View`
    width: 100%;
    height:10%;
    margin-top: 0px;
    background-color: grey;
  `;
  
  const Title = styled.Text`
    font-size: 20px;
    color: #b8bece;
    font-weight: bold;
    padding-left:4%;
  `;
  
  
  const Avatar = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 0;
  `;
  
  
  const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 50px;
    text-transform: uppercase;
  `;
  