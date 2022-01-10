import './App.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="App">
      <CopyToClipboard text="texto a pegar">
        <p
          onClick={() => {
            toast('Texto copiado!!', { position: 'top-right' });
            setCopied(true);
          }}
          style={{ cursor: 'pointer' }}
        >
          Copy me!!
        </p>
      </CopyToClipboard>

      {copied && <input type="text" placeholder="Pegar" />}

      <Toaster></Toaster>
    </div>
  );
}

export default App;
