import styled from 'styled-components/native';
export const Container = styled.View`
  margin-top: 20px;
  padding: 0 16px;
`;
export const Header = styled.View`
  height: 15px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f8f8f2;
`;
export const Card = styled.View`
  background: #44475a;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CardBody = styled.View`
  margin-top: 20px;
`;
export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Avatar = styled.Image``;
export const Description = styled.Text`
  color: #f8f8f2;
  margin-left: 15px;
  font-size: 16px;
`;
export const Bold = styled.Text`
  font-weight:bold;
`;
export const UserName = styled.Text`
  font-size: 20px;
  color: #f8f8f2;
  font-weight: bold;
`;
export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  color: #ff5555;
  font-size: 14px;
  font-weight: bold;
`;
export const Divider = styled.View`
  width: 2px;
  height: 13px;
  opacity: 0.5;
  background-color:#282a36;
  margin: 0 10px;
`;
export const Date = styled.Text`
  flex-direction: row;
  color: #f8f8f2;
  margin-left: 5px;
`;
export const Actions = styled.View`
  flex-direction: row;
`;
export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;
export const OptionLabel = styled.Text`
  color: #f8f8f2;
  font-size: 14px;
  margin-left: 5px;
`;
