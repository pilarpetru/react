import React from 'react';
import { Text } from '../context/LangTextImg';

import authorDef from '../assets/defaultImages/authorDef.png';
const authorNameDef = <Text tid="author" />;

export default function Author(props) {
    let asked = props.asked;
    let contador = props.contador;

    return (
        <div className="Author">
            {
                asked[contador].author === null ? (
                    <div>
                        <p id="author1">
                            <p id="authorUser">
                                <Text tid="created" />{authorNameDef}
                            </p>
                            <img id="authorImg" src={authorDef} alt="Imagen de autor por defecto" />
                        </p>
                    </div>
                ) : (
                    <div>
                        <p id="author1">
                            <div>
                                <p id="authorUser">
                                    <Text tid="created" />{asked[contador].author.username === null ? authorNameDef : asked[contador].author.username}
                                </p>
                            </div>
                            <div>
                                {asked[contador].author.photo.url === null ? <img id="authorImg" src={authorDef} alt="Imagen de autor por defecto" /> : <img id="authorImg" src={asked[contador].author.photo.url} alt="Imagen del autor" />}
                            </div>
                        </p>
                    </div>
                )
            }
        </div>
    );
}