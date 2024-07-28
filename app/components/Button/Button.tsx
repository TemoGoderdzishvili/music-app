import React, { useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  initialText: string;
  filledText: string;
  textOnlyText: string;
}

const Button: React.FC<ButtonProps> = ({ initialText, filledText, textOnlyText }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [text, setText] = useState(initialText);
  const toggleMode = () => {
    setIsFilled(!isFilled);
    setText(isFilled ? filledText : textOnlyText);
  };
  return (
    <button
      className={`${styles.button} ${isFilled ? styles.filled : styles.textOnly}`}
      onClick={toggleMode}
    >
      {text}
    </button>
  );
};

export default Button;