import { useState } from "react";

const Background = () => {
  const [darkMode, setDarkMode] = useState('#FFF')
  const [inputValue, setInputValue] = useState('#FFF')

  return (
    <div style={{ height: '10vh', width: '10vw', background: darkMode }}>
      <p>TESTE</p>
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={() => setDarkMode(inputValue)}>Mudar tema</button>
    </div>
  )

};

export default Background;