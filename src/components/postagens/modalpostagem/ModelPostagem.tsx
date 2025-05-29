import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './ModalPostagem.css'
import FormPostagem from '../formpostagens/FormPostagem';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-4 py-2 hover:bg-white hover:text-pink-700'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;