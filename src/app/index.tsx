import { Text, View, StyleSheet, TextInput, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { Link, router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { pb } from '@/src/pb/pocketbase';
import { useSelector } from 'react-redux';
import { selectUsername, selectPassword } from '@/src/components/formSlice';

const Login = () => {
  const insets = useSafeAreaInsets();
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);

  const handleLogin = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const authData = await pb.collection('users').authWithPassword(username, password);
      if(pb.authStore) {
        router.replace(`/users/${authData.record.id}`);
      }
      else {
        console.log('There was a problem logging in. Check your username and password');
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <View style={ {...styles.container, paddingTop: insets.top} }>
      <Text style={styles.heading}>Bluuit Login Page</Text>
      <TextInput
        style={ styles.input }
        placeholder='Username'
        placeholderTextColor='#FFF'
      />
      <TextInput
        style={ styles.input }
        secureTextEntry
        placeholder='Password'
        placeholderTextColor='#FFF'
      />
      <TouchableHighlight style={ styles.button } underlayColor="#1291C8" onPress={ handleLogin }>
        <Text style={ styles.text }>Login</Text>
      </TouchableHighlight>
      <Link href="/register" asChild>
        <TouchableHighlight style={ styles.button } underlayColor="#1291C8">
          <Text style={ styles.text }>Register</Text>
        </TouchableHighlight>
      </Link>
    </View>
  );
}
  
export default Login;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252525',
    rowGap: 15,
    columnGap: 10
  },
  heading: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    color: '#FFFFFF',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    width: '60%',
    maxWidth: 300,
    paddingTop: 2,
    marginBottom: 20,
    outlineStyle: 'none'
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#15A6E5',
    color: '#FFF',
    width: '50%',
    maxWidth: 225,
    paddingVertical: 10,
    borderRadius: 20
  }
});
