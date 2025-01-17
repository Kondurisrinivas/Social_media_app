import './App.css'
import './CoverPage.css'
import './CoverPage'
import CoverPage from './CoverPage'
import flight from './assets/flightimg.png'
import rightarrow from './assets/rightarrow.png'
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate('/create-account');
  };
  return (
    <div>
      <CoverPage/>
      <div className='headertwo'>
          <img id='flight' src={flight} alt="flight"/> 
          <p id='textfr'>For Indian Users Only</p> 
      </div>
      
      <div id='contentdump1'>
        <p id='herotext'>Start posting anonymously where no one will judge.</p>
      </div>

      <div id='contentdump2'>
        <p id='herotext2'>Share your thoughts, feelings, and opinions with the world.</p>
      </div>

      <div id="createButton" onClick={handleCreateAccount}>
        <p id="Btncreate">Create Your Account</p>
        <img id="arrow" src={rightarrow} alt="Right Arrow" />
      </div>

      <div id='accnthave'>
        <p id='accthavetxt'>Already have account? <u>Login</u></p>
      </div>
    </div>
  )
}

export default App
