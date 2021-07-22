import { ToastProvider } from 'react-toast-notifications';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import CurrentUserContextProvider from './contexts/CurrentUserContext';

function App() {
  return (
    <div className="min-h-screen">
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="top-right"
      >
        <CurrentUserContextProvider>
          <Header />
          <Main />
        </CurrentUserContextProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
