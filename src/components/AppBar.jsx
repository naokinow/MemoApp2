import Rect from 'react';
import { View, Text, Stylesheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create{
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
      
},