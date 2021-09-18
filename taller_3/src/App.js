import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Calculadora from './components/Calculadora';
import Sidebar from './components/Sidebar';
import {  GraficaLinealPage, GraficaTortaPage, GraficaHistogramaPage } from './pages/GraficasPage';
import LandingPage from './components/LandingPage';

function App() {
    return (
        <>
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/calculadora" exact component={Calculadora}/>
                    <Route path="/graficas" exact component={GraficaLinealPage}/>
                    <Route path='/graficas/graficalineal' exact component={GraficaLinealPage} />
                    <Route path='/graficas/graficatorta' exact component={GraficaTortaPage} />
                    <Route path='/graficas/graficahistograma' exact component={GraficaHistogramaPage} />
                </Switch>
            </Router>
            <LandingPage />
        </>
    );
}

export default App;
