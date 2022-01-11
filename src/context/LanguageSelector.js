import React, { useContext } from 'react';
import { languageOptions } from './LangOptions';
import { LangContext } from './LangContext';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LangContext);
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  return (
    <div id="selector">
      <select onChange={handleLanguageChange} value={userLanguage}>
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
};