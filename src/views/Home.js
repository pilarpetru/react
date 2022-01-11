import React, { useEffect } from 'react';
import { Text, Image } from '../context/LangTextImg';
import '../Home.css';

export function Home() {

    useEffect(() => {
        document.title = `Home`;
    });

    return (
        <div>
            <p class="f">
                <h2 id="w"><Text tid="welcome" /></h2>
                <h3 id="e"><Text tid="explanation" /></h3>
                <h3 id="c"><Text tid="click" /></h3>
                <Image iid="photo" /></p>
        </div>
    );
};

export default Home;