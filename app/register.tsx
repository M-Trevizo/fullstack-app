import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";

const RegisterPage = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={ {...styles.container, paddingTop: insets.top} }>
            <Text style={styles.heading}>Bluuit Register Page</Text>
            <TextInput
                style={ styles.input }
                placeholder='Username'
                placeholderTextColor='#FFF'
            />
            <TextInput
                style={ styles.input }
                placeholder='E-mail'
                placeholderTextColor='#FFF'
            />
            <TextInput
                style={ styles.input }
                secureTextEntry
                placeholder='Password'
                placeholderTextColor='#FFF'
            />
            <TextInput
                style={ styles.input }
                secureTextEntry
                placeholder='Re-type Password'
                placeholderTextColor='#FFF'
            />
            <Link href="/" asChild>
                <Pressable style={ styles.button }>
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
      paddingTop: 2,
      marginBottom: 20
    },
    text: {
      color: '#FFFFFF',
      textAlign: 'center'
    },
    button: {
      backgroundColor: '#15A6E5',
      color: '#FFF',
      width: '50%',
      paddingVertical: 10,
      borderRadius: 20
    }
});