import { View, Text } from 'react-native'
import { currentUser } from '@/src/pb/pocketbase';

const User = () => {
    const user = currentUser();
    

    return(
        <View style={ styles.view }>
            <Text style={ styles.text }>Hello { user ? user.username : 'NULL' }!</Text>
        </View>
    )
}

export default User;

const styles = {
    view: {
        backgroundColor: '#252525',
    },
    text: {
        color: '#FFFFFF'
    }
}