import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton'

export default function MemoDetailScreen () {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2020円12月24日 10:00</Text>
            </View>
            <ScrollView style>={styles.memoBody}>
                <Text style={styles.memoText}>
                    買い物リスト
                    書体やレイアウトなどを確認するめに用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>
            <CircleButton style={ top: 160, bottom: 'auto' }>+</CircleButton>
        </View>
    ):
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoHerder: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContents: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize; 20,
        LineHeight: 32,
        fonrWeight: 'bold',
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27;
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24;
    },
});