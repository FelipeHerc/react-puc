import { useState } from "react";

const Exercicio5 = () => {
  const [background, setBackground] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={ { backgroundColor: background, width: '100vw', height: '100vh  ' } }>
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={() => setBackground(inputValue)}>Aplicar</button>
    </div>
  );
};

export default Exercicio5;