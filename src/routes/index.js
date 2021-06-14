import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { AuthRoutes } from './auth.routes'

import { AppRoutes } from './app.routes'

import { Load } from '../components/Load'


export function Routes() {
    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return(
            <Load />
        )
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

