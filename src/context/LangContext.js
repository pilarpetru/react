import React, { useState } from 'react';
import { languageOptions, dictionaryList } from './LangOptions';

export const LangContext = React.createContext({
  userLanguage: 'es',
  dictionary: dictionaryList.es
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('es');
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'es'
      setUserLanguage(newLanguage);
    }
  };

  return (
    <LangContext.Provider value={provider}>
      {children}
    </LangContext.Provider>
  );
};