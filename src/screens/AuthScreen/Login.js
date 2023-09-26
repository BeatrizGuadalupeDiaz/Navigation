import { View, Text } from "react-native"
import MyButton from "../../components/MyButton"
import { stylesGlobal } from "../../styles/global"
import MyInput from "../../components/MyInput"
import { useState } from "react"

const Login = () => {
    const [token, setToken] = useState('')
  return (
    <View style={stylesGlobal.screenContainer}>
        <Text style={stylesGlobal.title}>
            Login
        </Text>
        <MyInput label={'Correo'} value={token} onChangeText={setToken}/>
        <MyInput label={'Contraseña'} secureTextEntry/>
        <MyButton title={'Sign In'} OnPress={() => console.log() }/>
    </View>
  )
}

export default Login