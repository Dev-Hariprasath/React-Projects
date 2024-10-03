import React, { useState } from 'react'
import Square from './Square'
import Input from './Input'


function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexvalue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  
  return (
    <div className='App'>
      <Square
       colorValue={colorValue}
       hexValue={hexValue}
       isDarkText={isDarkText}
      />
      <Input
      colorValue={colorValue}
      setColorValue={setColorValue}
      setHexvalue={setHexvalue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText} 
      />
    </div>
    
  );
}


export default App

