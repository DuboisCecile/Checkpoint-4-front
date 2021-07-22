import { ToastProvider } from 'react-toast-notifications';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import SiteContextProvider from './contexts/SiteContext';

function App() {
  return (
    <div className="min-h-screen">
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="top-right"
      >
        <SiteContextProvider>
          <Header />
          <Main />
        </SiteContextProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
