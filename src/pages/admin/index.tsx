
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { FormEvent, useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { db } from '../../services/firebaseConnection';


interface LinkProps{
    id: string;
    name: string;
    url: string;
    textColor: string;
    bgColor: string;
    created: Date;
}
export function Admin() {

    const [inputLink, setInputLink] = useState(""); 
    const [inputUrl, setInputUrl] = useState(""); 
    const [textColorInput, setTextcolorInput] = useState("#f1f1f1"); 
    const [bgColorInput, setBgColorInput] = useState("#121212"); 

    const [links, setLinks] = useState<LinkProps[]>([]);


    useEffect(() => {
        async function loadLinks() {
            const linksRef= collection(db,"links");
            const queyRef=query(linksRef,orderBy("created", "asc"));
            // onshapshot é listeners pegar os dados todas vez que atualizar dados na Bd
            const unsub= onSnapshot(
                queyRef,(snapshot)=>{
                    const listaLink: LinkProps[] =[]
                    snapshot.forEach(doc=>{
                        listaLink.push({
                            id: doc.id,  // document id
                            name: doc.data().name,
                            url: doc.data().url,
                            textColor: doc.data().textColor,
                            bgColor: doc.data().bgColor,
                            created: doc.data().created
                        });
                    })
                    setLinks(listaLink);
                    console.log(listaLink);
                }
           );
           // serve  para remover esse listener  quando fexchar a componente
           return () => unsub(); // unsubscribe on unmount
        }
        loadLinks();
       
    }, []);
        



      function handleRegistrer(event: FormEvent) {
        event.preventDefault();
        if(inputLink === '' || inputUrl === '') {
            alert('Preencha todos os campos');
            return;
        }
         addDoc(collection( db,'links'), { 
            name: inputLink,
            url:inputUrl,
            textColor: textColorInput,
            bgColor: bgColorInput,
            created: new Date()  // Automatically assigns the current timestamp
        })
        .then(() => {  
            console.log("Document successfully written!");
            toast.success('Registro efetuado com sucesso');
            setInputLink('');
            setInputUrl('');
            setBgColorInput ("#121212");
            setTextcolorInput("#f1f1f1"); 


          })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
    }

    async function handleDeleteLink(id : string) {
        await deleteDoc(doc(db,'links', id))
        .then(() => {
            toast.success('Link deletado com sucesso!');
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
            toast.error('Erro ao deletar link!');
        });
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />
            <form action="" className='flex flex-col mt-8 mb-3 w-full max-w-xl' onSubmit={handleRegistrer}>
                <label className='text-white font-medium mt-2 mb-2'>Nome do Link</label>
                <Input
                    placeholder='Digite o nome do link'
                    type='text'
                    value={inputLink}
                    onChange={(e) => setInputLink(e.target.value)}
                    required
                />

                <label  className='text-white font-medium mt-2 mb-2'>URL do Link</label>
               <Input
                    placeholder='Digite a URL do link'
                    type='url'
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
               />
                <section className='flex my-4 gap-5'>
                    <div className='flex gap-2'>
                        <label className='text-white font-medium mt-2 mb-2'>Fundo do link</label>
                        <input 
                            type='color'
                            value={bgColorInput}
                            onChange={(e) => setBgColorInput(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-2'>
                    <label className='text-white font-medium mt-2 mb-2'>Cor do link</label>
                        <input 
                            type='color'
                            value={textColorInput  }
                            onChange={(e) =>  setTextcolorInput(e.target.value)}
                        />
                    </div>
                </section>
               
                { inputLink && 
                
                    <div className='flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md mt-4'>
                        <label className='text-white font-medium mt-2 mb-2'>Veja como esta ficando</label>
                        <article className='w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3'
                            style={{
                            marginBottom: 8,
                            marginTop:8,
                            backgroundColor: bgColorInput,
                            }}
                        >
                            <p  className='font-medium'style={ { color: textColorInput}}>
                            { inputLink}
                            </p>
                        </article>
                    </div>
                }
                <button  type='submit' className='h-9 bg-blue-600  rounded-md text-lg font-medium text-white gap-4 flex justify-center items-center mb-7'>
                    Cadastrar
                </button>
            </form>

            <h2 className='text-white mb-4 font-bold text-2xl'> Meus Links</h2>
            
            { links.map((item )=> (
                <article className='flex items-center justify-between w-full  max-w-xl rounded py-3 px-2 mb-2 select-none h-9'
                style={{ background:item.bgColor, color: item.textColor }}
                key={item.id}
                >
                    <p> {item.name}</p>
                    <div>
                        <button className= 'border border-dashed p-1 rounded '
                            onClick = {() => handleDeleteLink(item.id)}
                        >
                            <FiTrash size={18} color='#FFF'/>
                            
                        </button>
                    </div>
                </article>
                
            )
                
                

            )}
            
           
        </div>
    )
}