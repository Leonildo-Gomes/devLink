import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../services/firebaseConnection';
export function Login () {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        if(email === '' || password === '') {
            toast.warning('Preencha todos os campos');
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .then(() => {
            navigate('/admin', {replace: true});
        })
        .catch((error) => {
            console.error('Error signing in with email and password:', error);
            toast.error('Falha ao logar');
        });
    }

    return(
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className='mt-11 text-white mb-7 font-bold text-5xl'> Dev
                    <span className='bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent' >Link</span>
                </h1>
            </Link>
            <form  onSubmit={handleSubmit} className='w-full max-w-xl flex flex-col px-1'>
                 <Input
                    placeholder='Digite o seu email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                 />
                 <Input
                    placeholder='*********'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                 />
                <button  type='submit' className='h-9 bg-blue-600 border-0 text-lg font-medium text-white'>
                    Acessar
                </button>
            </form>
           
        </div>
    )
}