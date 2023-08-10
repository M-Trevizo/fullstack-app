import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const RegisterPage = () => {
    const insets = useSafeAreaInsets();

    return(
        
        <View style={{paddingTop: insets.top, flex: 1, alignItems: "center"}}>
            <Text>This is the Register Page!</Text>
        </View>
    )
    
}

export default RegisterPage;