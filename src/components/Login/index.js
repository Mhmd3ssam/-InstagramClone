import React from 'react'
import styles from './styles';
import { View, Button, TextInput } from 'react-native'
import { useState } from 'react'
import { useAuth } from '../../Context/Context';



function Login() {

    const { login,getAuth} = useAuth();
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleLogin = async() => {
        await login(auth,email,password);
    }

    return (
        <View style={styles.conntainer}>
            <TextInput
                placeholder="Email"
                onChangeText={(value) => { setEmail(value) }}
            />
            <TextInput
                placeholder="Password"
                onChangeText={(value) => { setPassword(value) }}
                secureTextEntry={true}
            />
            <Button
                title="Sign In"
                onPress={() => handleLogin()}
                style={styles.btn}
            />
        </View>
    )
}

export {Register};
