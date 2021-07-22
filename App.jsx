import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container} />
     <View style={styles.appbar}>
       <View style={styles.appbarInner}>
       <Text style={styles.appbarTitle}>Memo App</Text>
       <Text style={styles.appbarRight}>ログアウト</Text>
    </View>
</View>
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListItemTitle}>買い物リスト</View>
        <View style={styles.memoListItemDate}>2020年12月24日 10:00</View>
      </View>
    </View>
    <Text>X</Text>
  </View>
</View>
</View>
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListItemTitle}>買い物リスト</View>
        <View style={styles.memoListItemDate}>2020年12月24日 10:00</View>
      </View>
    </View>
    <Text>X</Text>
  </View>
</View>

</View>
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListItemTitle}>買い物リスト</View>
        <View style={styles.memoListItemDate}>2020年12月24日 10:00</View>
      </View>
    </View>
    <Text>X</Text>
  </View>
</View>

<View style={styles.circleButton}>
  <Text style={styles.circleLabel}>+</Text>
  </View>
  </View>
</View>
  );
}

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
appbar: {
  width: '100%'
  heigh: 104,
  backgroundColor: '#467FD3',
  justifyContent: 'flex-end',
},
appbarInner:{
  backgroundColor: 'gray',
  alignItems: 'center',
},
appbarRight:{
  position: 'absolute',
  right: 19,
  bottom: 16,
  color: 'rgba(255,255, 255, 0.8)',
},
appbarTitle: {
  marginBottom: 8;
  fontSize: 24;
  lineHeight: 32,
  color: '#ffffff',
  fontWeignt: 'bold',
},
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
  },
  circleButtonLabel: {
    color: '#ffffff'
    fontSize: 40,
    lineHeight: 40,
  },
});
