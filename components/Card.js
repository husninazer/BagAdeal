import React from "react";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';



const Card = props => (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Logo source={props.logo} />
        <WrapperLeft>
            <MiniWrapper>
            <Ionicons name="md-time" size={15} color="black" />
            <Caption> {props.caption}</Caption>
            </MiniWrapper>
            <Spacing/>
            <MiniWrapper>
            <Ionicons name="md-pin" size={15} color="black" />
            <Subtitle>  {props.subtitle}</Subtitle>
            </MiniWrapper>  
        </WrapperLeft>
        <WrapperRight>
            <MiniWrapper>
            <Price> {props.price}</Price>
            </MiniWrapper>
        </WrapperRight>
      </Content>
    </Container>
  )

export default Card;

const Container = styled.View`
  background-color: white;
  width: 90%;
  height: 180px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  margin-top: 20px;
`;

const Cover = styled.View`
  width: 100%;
  height: 130px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 90%;
  margin-top: 20px;
  margin-left: 20px;
  background-color: #ffffff90
`;

const Content = styled.View`
  flex-direction: row;
  padding-top:1%;
  padding-left:1%;
  height:100px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 0.5;
  
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 15px;
  font-weight: 600;
`;

const Price = styled.Text`
  color: green;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 0px;
`;

const WrapperLeft = styled.View`
  margin-left: 10px;
`

const WrapperRight = styled.View`
  margin-left: 45px;
  margin-top: 8px;
  flex-direction:row;
  justify-content: flex-end;
`

const Spacing = styled.View`
  margin-left: 2px;
`

const MiniWrapper = styled.View`
  flex-direction:row;
  padding-top: 2px;
`

const MenuLeft = styled.View`
  flex-direction:row;
`
