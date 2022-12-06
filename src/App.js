
import './App.css';
import { List } from './List';
import imageTwo from './making-list.jpg';

function App() {
  return (
    <div className="App">
     <div className='container'>
<img className='photo' src={imageTwo} width='250px' alt='story'/>
    </div>
    <div className='container'>
<h1> TO DO LIST</h1>
     </div>
     <List/>
    </div>
  );
}

export default App;
