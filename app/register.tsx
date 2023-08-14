import { View, Text, StyleSheet, TextInput, Pressable, GestureResponderEvent, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { setUsername, setPassword, setPasswordConfirm, setEmail, selectForm } from "@/components/formSlice";
import { useDispatch, useSelector } from "react-redux";
import PocketBase from 'pocketbase';

const RegisterPage = () => {
  const insets = useSafeAreaInsets();
  const formFields = useSelector(selectForm);
  const dispatch = useDispatch();
  const pb = new PocketBase('http://127.0.0.1:8090');
  
  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    console.log(formFields);
    try {
      const record = await pb.collection('users').create(formFields);
      if(record.id !== undefined) {
        console.log(`User created: ${record}`);
      }
      else {
        console.log(`There was an problem creating the record: ${record}`);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  const changeUsername = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(setUsername(e.nativeEvent.text));
  }

  const changePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(setPassword(e.nativeEvent.text));
  }

  const changePasswordConfirm = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(setPasswordConfirm(e.nativeEvent.text));
  }

  const changeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(setEmail(e.nativeEvent.text));
  }

  return (
    <View style={ {...styles.container, paddingTop: insets.top} }>
        <Text style={styles.heading}>Bluuit Register Page</Text>
        <TextInput
            style={ styles.input }
            id="username"
            placeholder='Username'
            placeholderTextColor='#FFF'
            onChange={ changeUsername }
        />
        <TextInput
            style={ styles.input }
            id="email"
            placeholder='E-mail'
            placeholderTextColor='#FFF'
            onChange={ changeEmail }
        />
        <TextInput
            style={ styles.input }
            secureTextEntry
            id="password"
            placeholder='Password'
            placeholderTextColor='#FFF'
            onChange={ changePassword }
        />
        <TextInput
            style={ styles.input }
            secureTextEntry
            id="password-confirm"
            placeholder='Re-type Password'
            placeholderTextColor='#FFF'
            onChange={ changePasswordConfirm }
        />
        <Link href="/" asChild>
            <Pressable style={ styles.button } onPress={ handleSubmit }>
                <Text style={ styles.text }>Register</Text>
            </Pressable>
        </Link>
    </View>
  );
}

export default RegisterPage;

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