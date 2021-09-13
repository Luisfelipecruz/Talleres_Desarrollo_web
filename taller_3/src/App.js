import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculadora  from './components/Calculadora';
import Graficas  from './components/Graficas';
import Sidebar from './components/Sidebar';


function App() {
  return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/calculadora' exact component={Calculadora} />
          <Route path='/graficas' exact component={Graficas} />
        </Switch>
      </Router>
  );
}

export default App;
