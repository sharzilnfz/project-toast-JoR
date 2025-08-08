import { ToastProvider } from '../../context/ToastProvider';
import Footer from '../Footer';
import ToastPlayground from '../ToastPlayground';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
