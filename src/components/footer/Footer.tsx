import { type ReactNode, useContext } from 'react';
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-pink-500 text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>

                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/pamelaoliveira14/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        
                        <a href="https://github.com/heypamela" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                        
                        <a href="https://www.instagram.com/generationbrasil/p/DHJ98FCvJdo/" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            {component}
        </>
    )
}

export default Footer