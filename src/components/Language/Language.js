import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Language() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          
          <button onClick={()=>handleClick('chi')} >
            Chinese
         </button>
        </nav>
        <header className="App-header">
          
          <p>
            <h3>{t('Choose')}</h3>   
          </p>
        </header>
    </div>
  );
}

export default Language;