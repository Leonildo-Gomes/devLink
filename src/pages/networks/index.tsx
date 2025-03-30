

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FormEvent, useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { db } from '../../services/firebaseConnection';
export function Networks() {
    const colectionName: string='social';
    const docName:string='link';
    const [facebook, setFacebook] = useState(""); 
    const [instagram, setInstagram] = useState(""); 
    const [youtube, setYoutube] = useState(""); 
   

    useEffect(() => {
        function loadSocials() {
            const docRef = doc(db,colectionName, docName);
             getDoc(docRef)
            .then(( snapshot) => {
                const data = snapshot.data();
                if(data !== undefined) {
                    setFacebook(data?.facebook);
                    setInstagram(data?.instagram);
                    setYoutube(data?.youtube);
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
            
        }
        loadSocials();

    }, []);
            
                    
    function handleRegister(event: FormEvent)  {
        event.preventDefault();
        setDoc( doc( db,colectionName, docName),{
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        })
        .then(() => {
            toast.success("Document successfully written!");
        })
        .catch((error) => {
            toast.error("Error adding document: ", error);
        });
    }

    return (
        <div className='flex items-center flex-col min-h-screen pb-7 px-2'>
            <Header />
            <h1 className='text-white text-2xl font-medium mt-8 mb-4'>Minhas redes Sociais</h1>

            <form action="" className='flex flex-col mt-5 w-full max-w-xl' onSubmit={handleRegister}>
            <label className='text-white font-medium mt-2 mb-2'>Link Facebook</label>
            <Input
                placeholder='Digite a url...'
                type='url'
                value={facebook}
                onChange={(e)=>setFacebook(e.target.value)}
            />
            <label className='text-white font-medium mt-2 mb-2'>Link Instagram</label>
            <Input
                placeholder='Digite a url...'
                type='url'
                value={instagram}
                onChange={(e)=>setInstagram(e.target.value)}
            />
            <label className='text-white font-medium mt-2 mb-2'>Link Youtube</label>
            <Input
                placeholder='Digite a url...'
                type='url'
                value={youtube}
                onChange={(e)=>setYoutube(e.target.value)}
            />
            <button type='submit' className='h-9 bg-blue-600  rounded-md text-lg font-medium text-white gap-4 flex justify-center items-center'>
                Salvar Links
                <FiTrash size={18} color='#FFF'/>
            </button>
            </form>
           
        </div>
    )
}