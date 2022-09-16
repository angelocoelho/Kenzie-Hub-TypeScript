import './App.css';
import RoutesMain from './routes';
import {ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
        <RoutesMain />
        <ToastContainer autoClose={1500} position={'top-right'} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true}/>
    </div>
  );
}

export default App;
