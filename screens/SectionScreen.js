import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "react-native";
import { withOrientation } from "react-navigation";



class SectionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null,
    } 
}
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={require("../assets/shakeshack.jpeg")} />
          <Title>Shake Shack</Title>
        </Cover>
        
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 30,
            left: 20,
          }}
        >
          <CloseView>
            <Ionicons
              name="ios-arrow-round-back"
              size={40}
              style={{ marginTop: -2 }}
              color="white"
            />
          </CloseView>
        </TouchableOpacity>
    
      </Container>
    );
  }
}

export default SectionScreen;

const CloseView = styled.View`
width: 32px;
height: 32px;
border-radius: 22px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
justify-content: center;
align-items: center;
`;

const Container = styled.View`
flex: 1;
`;

const Cover = styled.View`
height: 15%;
`;

const Image = styled.Image`
height: 100%;
width: 100%;
position: absolute;
top: 0;
background: grey;
`;

const Title = styled.Text`
font-size: 24px;
color: white;
background-color: #ffffff30
font-weight: bold;
width: 100%;
position: absolute;
top: 33px;
left: 70px;
`;

const Caption = styled.Text`
color: white;
font-size: 17;
position: absolute;
bottom: 20px;
left: 20px;
max-width: 300px;
`;