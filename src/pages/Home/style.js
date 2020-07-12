import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #282a36;
  flex:1;
`;

export const Container = styled.ScrollView``;
export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  color: #000;
`;
export const BalanceTitle = styled.Text`
  color: #f8f8f2;
  font-size: 14px;
  text-align: center;
`;
export const Balance = styled.Text`
  color: #f8f8f2;
  text-align:center;
  font-size: 20px;
  font-weight: bold;
`;
