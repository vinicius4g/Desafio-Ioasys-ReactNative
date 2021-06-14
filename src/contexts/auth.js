import React, { useState, createContext, useEffect } from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    
    const [user, setUser] = useState(null)
    const [header, setHeader] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)

   //conferindo se tem algum usuario logado
    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user')
            const storageHeader = await AsyncStorage.getItem('Header_user')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                
                if(storageHeader){
                    setHeader(JSON.parse(storageHeader))
                }
                setLoading(false)
            }

            setLoading(false)
        }
    
        loadStorage()

    },[])
    
    //funcao de logar
    function signIn(email, password) {
        setLoadingAuth(true)

		let data = {
			email, 
            password, 
		}
		
		api.post(`api/v1/users/auth/sign_in`, data, {headers:{"Content-Type" : "application/json"}})
        .then( async  (value) => {
            const dataHeader = {
                access_token: value.headers['access-token'],
                uid: value.headers.uid,
                client: value.headers.client
            }   
            setHeader(dataHeader)
            headerUser(dataHeader)
            // console.log(dataHeader)
            
            const storageData = value.data
            setUser(storageData)
            storageUser(storageData)

            setLoadingAuth(false)
        })
        .catch( (error) => {
            setLoadingAuth(false)
            Alert.alert('Não foi possível fazer o login tente novamente 😢!')
        })
    }

    //funcao de deslogar 
    async function signOut(){
        await AsyncStorage.clear()
        .then( () => {
            setUser(null)
        })
    }
    
    //funcao para salvar os dados do usuario no async storage
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    //funcao para salvar os headers, para fazer as outras req
    async function headerUser(dataHeader){
        await AsyncStorage.setItem('Header_user', JSON.stringify(dataHeader))
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, header, loading, loadingAuth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider