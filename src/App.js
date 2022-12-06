import './App.css';
import { MainRoute } from './Router';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
       <MainRoute />
    </Router>
    
  );
}

export default App;
