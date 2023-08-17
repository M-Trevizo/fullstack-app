import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const User = () => {
    const query = useLocalSearchParams<{id: string}>();

    return(
        <View>
            <Text>Hello {query.id}!</Text>
        </View>
    )
}

export default User;