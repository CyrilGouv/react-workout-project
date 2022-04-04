import { useState } from 'react'

import './Exo.css'


const Exo = ( { id, name, description, image, deleteExo } ) => {

    const [readmore, setReadmore] = useState(false)

    return (
        <article className='exo'>
            <div className='exo__img'>
                <img src={ image } alt={ name } />
            </div>
            <div className='exo__footer'>
                <p className='exo__desc'>
                    {
                        readmore ? description : `${description.substring(0, 100)}...` 
                    }
                    <span onClick={ () => setReadmore(!readmore) } className='exo__desc__btn'>
                        {
                            readmore ? 'Fermer' : 'Voir plus' 
                        }
                    </span>
                </p>

                <button onClick={ () => deleteExo(id) } className='exo__delete'>Supprimer</button>
            </div>
        </article>
    )
}

export default Exo