import React from 'react';
import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Description,
  Bold,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel
} from './style';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import avatar from '../../assets/avatar.png';
export default function Activities(){
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou o <Bold>@code2585</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Leandro Real</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider/>

            <Feather name="lock" color="#f8f8f2" size={14}/>

            <Date>há 3 meses</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#f8f8f2"/>
              <OptionLabel>12</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14} color="#f8f8f2"/>
              <OptionLabel>5</OptionLabel>
            </Option>
          </Actions>

        </CardFooter>
      </Card>
    </Container>
  );
}
