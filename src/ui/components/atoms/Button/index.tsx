import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IButtonProps extends TouchableOpacityProps {}

const Button: React.FC<IButtonProps> = props => {
  return (
    <TouchableOpacity {...(props as any)}>
      <Text></Text>
    </TouchableOpacity>
  );
};

export default Button;
