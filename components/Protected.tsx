import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { userAuth } from '../context/AuthContext'

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//     const { user } = userAuth()
//     const router = useRouter()

//     useEffect(() => {
//         if(!user) {
//             router.push('/login')
//         }
//     }, [router, user])

//     return <>{user ? children : null}</>
// }

const Protected = ({ children }: { children: React.ReactNode }) => {
    const { user } = userAuth();
    const router = useRouter;
    if (!user) {
        return Router.push('/login');
    }
    return children;
};

export default Protected;