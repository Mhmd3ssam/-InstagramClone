import React from 'react'
import styles from './styles';
import { View, Button, TextInput } from 'react-native'
import { useState } from 'react'
import { useAuth } from '../../Context/Context';



function Register() {
    const { login,signup,getAuth,setUser} = useAuth();
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const data = {email,password, name};

     const handleRegister = async() => {
       await signup(auth,email,password);
       await setUser('user',email,data);
       
    }
    return (
        <View style={styles.conntainer}>
            <TextInput
                placeholder="Name"
                onChangeText={(value) => { setName(value) }}
            />
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
                title="Sign Up"
                onPress={() => handleRegister()}
                style={styles.btn}
            />
        </View>
    )
}

export default Register;
