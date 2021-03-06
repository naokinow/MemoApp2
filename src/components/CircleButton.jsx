import React from 'react';
import { ViewBase, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

export default function CircleButton (props) {
    const { style, name } = props;
    return (
<View style={[styles.circleButton, style]}>
    <AntDesign name={name} size={32} color="white" />
</View>
  );
}

CircleButton.propTypes = {
    children: string.isRequired,
    styles: shape(),
    name: string.isRequired
};

CircleButton.defaultProps = {
    style: null
    children: string.isRequired,
};

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: '#467FD3'
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alighItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,

    circleButtonLabel: {
        color: '#ffffff'
        fontSize: 40,
        lineHeight: 40,

})
