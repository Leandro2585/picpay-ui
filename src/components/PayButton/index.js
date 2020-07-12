import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import { Button, Label } from './style';
import { TouchableWithoutFeedback } from 'react-native';

export default function PayButton({ onPress, focused }){
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <Button
            colors={
              focused
              ? ['#f8f8f2','#44475a']
              : ['#50fa7b', '#50fa7b']
            }
            start={[1, 0.2]}
        >
            <MaterialIcons
              name="attach-money"
              size={30}
              color={focused ? '#282a36': '#f8f8f2'}/>
            <Label focused={focused}>Pagar</Label>
        </Button>
        </TouchableWithoutFeedback>
    );
}
