import React from 'react';
import {
  Container,
  Option,
  Title,
  Img
} from './style';
import img8 from '../../assets/08.png';
import img9 from '../../assets/09.png';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6272a4'
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ff5555'
  },{
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#50fa7b'
  },{
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ff79c6'
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ffb86c'
  },
]
export default function Tips(){
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img}/>
        </Option>
      ))}

    </Container>

  );
}
