
import './App.css';
import { Comments, Posts, Users } from './components/Api/Api';


function App() {
  return (
<div className='app'>
  <div className='top'>
    <Users/>
    <Posts/>
  </div>
  <div>
    <Comments/>
  </div>
</div>
  );
}

export default App;
