import Main from './Pages/Main/Main.jsx';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Main />
      <ToastContainer />
    </div>
  );
}