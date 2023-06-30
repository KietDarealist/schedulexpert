import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface ITextProps extends RNTextProps {}

const Text: React.FC<ITextProps> = props => {
  return <Text {...props}>{props.children}</Text>;
};

export default Text;
