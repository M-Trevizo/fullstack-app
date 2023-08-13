import { View, Text, StyleSheet, TextInput, Pressable, GestureResponderEvent, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { setUsername, setPassword, setPasswordConfirm, setEmail, selectForm } from "@/components/formSlice";
import { useSelector } from "react-redux";

const RegisterPage = () => {
  const insets = useSafeAreaInsets();
  const dbUrl = 'http://127.0.0.1:8090/api/collections/users/records';
  const formFields = useSelector(selectForm);

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: formFields.username,
        password: formFields.password,
        passwordConfirm: formFields.passwordConfirm,
        email: formFields.email
      })
    }
    try {
      const res = await fetch(dbUrl, options);
      console.log(options.body);
      if(res.ok) {
        const json = await res.json();
        console.log(`User created: ${json}`);
      }
      else {
        console.log(`${res.status}: ${res.statusText}`);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  /*
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    switch(e.nativeEvent.target) {
      case 0 : setUsername(e.nativeEvent.text);
      break;
      case 1 : setPassword(e.nativeEvent.text);
      break;
      case 2 : setPasswordConfirm(e.nativeEvent.text);
      break;
      case 3 : setEmail(e.nativeEvent.text);
      break;
      default: console.log('The change handler broke. ' + );
    }
  }
  */

  const changeUsername = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setUsername(e.nativeEvent.text);
  }

  const changePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(e.nativeEvent.text);
  }

  const changePasswordConfirm = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPasswordConfirm(e.nativeEvent.text);
  }

  const changeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.nativeEvent.text);
    console.log(e.nativeEvent.text);
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