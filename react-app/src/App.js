import './App.css';
import {Posts} from './components/Api/api';
import {Comments} from './components/Api/api';
import {Users} from "./components/Api/api";


function App() {
    return (
    <div className='App'>
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
