import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Sidebar, Main, PageLoad } from './components';
import { useState } from 'react';

function App() {

  const [ weatherData, setWeatherData ] = useState([{}, {}]);
  const [ imperial, setImperial ] = useState(true);
  const [ ready, setReady ] = useState(false);

  return (
    <ChakraProvider>
      <div className="App container-fluid m-0 p-0">
        <div className='row flex flex-col lg:flex-row items-center lg:items-start m-0 p-0'>
          <Sidebar weatherData={weatherData} setWeatherData={setWeatherData} ready={ready} setReady={setReady} imperial={imperial} />
          { !ready ? (
            <PageLoad />
          ) : (
            <Main weatherData={weatherData} imperial={imperial} setImperial={setImperial} />
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

