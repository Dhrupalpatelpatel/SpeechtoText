import React, { useState } from 'react';
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

const App= () => {

  const [settexttocopy, setcopy] = useState(true);
  const [isCopied, setCopied] = useClipboard(settexttocopy);
  const startListening = ()=>  SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className='container'>
        <h2>Speech to Text Converter</h2>
        <br/>
        <p>React hook that convert speech from the microphone to text and make it available to your component.</p>


        <div className='main-content' onClick={()=> setcopy(transcript)}>
                {transcript}
        </div>

        <div className='btn-style'>
        <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
         <button onClick={startListening}> start listening</button>
         <button onClick={SpeechRecognition.stopListening}> stop listening</button>

        </div>


      </div>
    </>
  )
}

export default App;
