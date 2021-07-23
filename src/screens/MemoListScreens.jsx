import React from 'react';
import { StyleSheet, View } from from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/memoList';
import CircleButton from '../components/CircleButton';

import MemoListScreen from './src/screens/MemoListScreen';

export default function MemolistScreen() {
    return (
       <View style={styles.container}>
          <AppBar />
          <MemoList />
          <CircleButton name='plus'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
});
