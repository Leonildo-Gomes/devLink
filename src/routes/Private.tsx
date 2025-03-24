
import { onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/loading';
import { auth } from '../services/firebaseConnection';
interface PrivateProps { 
    children: ReactNode;

 }

export function Private({ children }: PrivateProps ) {
    const  [loading, setLoading]=useState<boolean>(true)
    const  [signed, setSigned]=useState<boolean>(false)
    useEffect(()=>{  
        // ver se o user esta logado
        const unsub=onAuthStateChanged(auth, (user)=> {

            if(user) {
                const userData= { 
                    uid: user?.uid,
                    email: user?.email,
                }
                localStorage.setItem('@reactLinks', JSON.stringify(userData));
                setSigned(true);
                setLoading(false);

            } else {
                setSigned(false);
                setLoading(false);
               
            }
    
        })
        return ()=>unsub();


    },  [])

    if(loading) return <Loading size={35}/>

    if(!signed) {
        return <Navigate to="/login"/>
    }
    return (
        children
    )
}