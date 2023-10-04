
import { Toaster } from 'sonner';
import Main from './Main';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import { ContextTurneroProvider } from './ContextTurnero';



function App() {
  return (
    <BrowserRouter>
      <ContextTurneroProvider>
        <NavBar/>
        <Toaster position="bottom-right" expand={false} autoClose={200} duration={1500} closeOnClick= {true} richColors/>
        <Main  />
      </ContextTurneroProvider>
    </BrowserRouter>
  );
}

export default App;
