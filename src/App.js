
import './App.css';
import Lottie from 'lottie-react';
import Loading from './animation.js'
import { useState, useEffect } from 'react';
import List from './components/list.js'



function App() {
  const [loading, setLoading] = useState(true)
  const [background, setBackground] = useState(false)
  const [list, setList] = useState(false)

  useEffect( () => {
    
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    setTimeout(() => {
      setBackground(true)
     }, 2000);

    setTimeout(() => {
      setList(true)
     }, 2500);


  }, []);




  return (
    <div className="App">
      <div className='container'>
            <div className = {`cover ${background ? 'reveal': '' }`}>
            
            {loading && <Loading /> }
            </div>
            <div className={`list ${list ? 'reveal' : ''}`}>
             <List /> 
            </div>
     
            
        
      </div>       
     
    </div>
  );
}

export default App;
