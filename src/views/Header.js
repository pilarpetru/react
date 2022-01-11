import React from 'react';
import { Text } from '../context/LangTextImg';
import '../Header.css';


export function Header() {
    return (
        <div>
            <header>
                <h1 id="titulo">
                    <Text tid="myGames" />
                </h1>

            </header>
        </div>
    );
};

export default Header;