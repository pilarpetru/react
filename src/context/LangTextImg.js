import React, { useContext } from 'react';

import { LangContext } from './LangContext';

export function Text({ tid }) {
    const languageContext = useContext(LangContext);
    return languageContext.dictionary[tid] || tid;
};

export function Image({ iid }) {
    const languageContext = useContext(LangContext);
    const route = languageContext.dictionary[iid] || iid;
    return <img id="imagenHome" src={route} alt="" />;
}