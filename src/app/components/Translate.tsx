import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./translate.css"


const Translate: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [targetLanguage, setTargetLanguage] = useState<string>('fr');
  const [showTranslateButton, setShowTranslateButton] = useState<boolean>(false);
  const [translatedLanguage, setTranslatedLanguage] = useState<string>('en'); // Language for translated text

  const translateText = async () => {
    try {
    //   const response = await axios.post(
    //     `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`,
    //     {
    //       q: text,
    //       target: targetLanguage,
    //     }
    //   );
      setTranslatedText(text);
    } catch (error) {
      console.error('Translation Error:', error);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setShowTranslateButton(e.target.value !== '');
  };

  return (
    <Container className="mt-4">
    <div className='translate-container'>
        {" "}
      <div className='translate-select'>
        <h1 className='translate-heading'>Translate:</h1>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
        {"  "}To{"  "} 
        <select
          value={translatedLanguage}
          onChange={(e) => setTranslatedLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
        
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <textarea
          className='translate-textarea'
          rows={2}
          value={text}
          placeholder='Enter text...'
          onChange={handleTextChange}
        />
        <textarea
          className='translate-translation'
          rows={4}
          placeholder='Translation'
          value={translatedText}
          readOnly
        />
      </div>
    
      {showTranslateButton && (
        <div>
          <button
            className='translate-button'
            onClick={translateText}
          >
            Translate
          </button>
        </div>
      )}
    </div>
    </Container>
  );
};

export default Translate;
