import { useState } from "react";

const Exercicio4 = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <p>Você clicou { clicks } { clicks === 1 ? 'vez' : 'vezes' }</p>
      <button onClick={() => setClicks(clicks + 1)}>Incrementar</button>
      <button onClick={() => setClicks(0)}>Zerar</button>
    </div>
  );
};

export default Exercicio4;