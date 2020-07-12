import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient'
export const Wrapper = styled.View`
  background: #282a36;
  flex: 1;
`;
export const Header = styled(LinearGradient)`
  height: 300px;
`;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #f8f8f2;
  font-size: 16px;
  font-weight: bold;
`;
export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  font-size: 38px;
  color: #f8f8f2;
  font-weight: 200;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;
export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const Info = styled.Text`
  color: #f8f8f2;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid #f8f8f2;
  width: 150px;
  height: 45px;
  border-radius: 25px;
  justify-content: center;
  margin: 0 10px;
`;
export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #f8f8f2;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background:#44475a;
  height: 60px;
  flex-direction: row;
  padding:0 16px;
  align-items: center;
  justify-content: space-between;
`;
export const UseBalanceTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #f8f8f2;
`;
export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const PaymentMethodsTitle = styled.Text`
  color: #868693;
  text-transform: uppercase;
`;
export const Card = styled.View`
  background: #44475a;
  padding: 20px;
  border-radius: 18px;
  margin-top: 10px;
`;
export const CardBody = styled.View`
  flex-direction: row;
`;
export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;
export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f8f8f2;
`;
export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  margin-top: 15px;
`;
export const Img = styled.Image`
  width: 80px;
`;
export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;
export const AddLabel = styled.Text`
  color: #50fa7b;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;
export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 25px;
`;
export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`;
export const UseTicketLabel = styled.Text`
  color: #50fa7b;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`;