import React from 'react';
import { ViewBase, Text, StyleSheet } from 'react-native';

export default function MemoList()
return (
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListItemTitle}>買い物リスト</View>
        <View style={styles.memoListItemDate}>2020年12月24日 10:00</View>
      </View>
    </View>
    <Text>X</Text>
  </View >
</View >
</View >
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListItemTitle}>買い物リスト</View>
        <View style={styles.memoListItemDate}>2020年12月24日 10:00</View>
      </View>
    </View>
    <Text>X</Text>
  </View >
</View >

</View >
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListItemTitle}>買い物リスト</View>
        <View style={styles.memoListItemDate}>2020年12月24日 10:00</View>
      </View>
    </View>
    <Text>X</Text>
  </View >
</View >

);
)

const styles = Stylesheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddinghorizontal: 19,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        },
        memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
        color: '#848484'
        },
        memoListItemDate: {
          fontSize: 12,
          lineHeight: 16,
          color: '#848484'
          },

          },
})
