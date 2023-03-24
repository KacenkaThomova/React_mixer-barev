import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './Components/ColorSlider/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState ()
  const [greenValue, setGreenValue] = useState ()
  const [blueValue, setBlueValue] = useState ()
  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`

  return (
    <div className="container">
      <main>
      <div className="color-panel">
		<h1>Mixér barev</h1>
    <ColorSlider baseColor='red' colorName='Cervena' onValueChange={setRedValue} />
    <ColorSlider baseColor='green' colorName='Zelena' onValueChange={setGreenValue}/>
    <ColorSlider baseColor='blue' colorName='Modra' onValueChange={setBlueValue}/>
    <div className="color-box" style={{backgroundColor: {color} }} id="color-box"></div>
	</div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
