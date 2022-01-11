import React from 'react';

import imgDef from '../assets/defaultImages/imgDef.png';

export default function Image(props) {
    let asked = props.asked;
    let contador = props.contador;

    return (
        <div className='Image'>
            {asked[contador].attachment === null ? (
                <div> <img id="image2" src={imgDef} alt="Imagen por defecto" /></div>
            ) : (
                <div>
                    {asked[contador].attachment.url === null ?
                        <img id="image2" src={imgDef} alt="Imagen por defecto" />
                        :
                        <img id="image2" src={asked[contador].attachment.url} alt="Imagen del quiz" />}
                </div>
            )}
        </div>
    );
}