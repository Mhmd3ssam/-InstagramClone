import React from 'react'
import { Text , View , Button} from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function Landing() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Text>
                <Button
                    title="Register"
                    onPress={()=> navigation.navigate("Register")}
                />
                <Button
                    title="Login"
                    onPress={()=> navigation.navigate("Login")}
                />
            </Text>
        </View>
    )
}
