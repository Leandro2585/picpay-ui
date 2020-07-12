import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';
import creditCard from '../../assets/credit-card.png';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Text,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddLabel,
  AddButton,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel
 }from './style';

export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true);
    const [UseBalance, setUseBalance] = useState(true);
    function handleToggleVisibility(){
      setIsVisible(prevState => !prevState);
    }
    function handleToggleUseBalance(){
      setUseBalance(prevState => !prevState);
    }
    return (
      <Wrapper>
        <Header colors={UseBalance ? ['#50fa7b','#1ab563'] : ['#d3d3d3','#868686']}>
          <HeaderContainer>
            <Text>Saldo PicPay</Text>
            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
              </Value>

              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} color="#f8f8f2" size={28}/>
              </EyeButton>
            </BalanceContainer>

            <Info>
              Seu saldo está rendendo 100% do CDI
            </Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={20} color="#f8f8f2"/>
                <ActionLabel>Adicionar</ActionLabel>
              </Action>
              <Action>
                <MaterialCommunityIcons name="bank" size={20} color="#f8f8f2"/>
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>


        <UseBalance>
          <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
          <Switch value={UseBalance} onValueChange={handleToggleUseBalance}/>
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>
            Formas de Pagamento
          </PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                <CardInfo>Cadastre seu cartão de crédito para realizar pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
              </CardDetails>

              <Img source={creditCard} resizeMode="contain"/>
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" size={30} color='#50fa7b'/>
              <AddLabel>Adicionar cartão de crédito</AddLabel>
            </AddButton>
          </Card>

          <UseTicketContainer>
            <UseTicketButton>
              <MaterialCommunityIcons name="ticket-outline" size={20} color="#f8f8f2"/>
              <UseTicketLabel>
                Usar código promocional
              </UseTicketLabel>
            </UseTicketButton>
          </UseTicketContainer>
        </PaymentMethods>
      </Wrapper>
    );
}
