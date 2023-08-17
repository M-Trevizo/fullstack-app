import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { pb, currentUser } from '@/src/pb/pocketbase';

const User = () => {
    const user = currentUser();
    

    return(
        <View>
            <Text>Hello { user ? user.username : 'NULL' }!</Text>
        </View>
    )
}

export default User;