import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.tsx'
// import StarRating from './components/StarRating';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} color={'pink'} size={32} />
    <StarRating maxRating={5} color={'grey'} size={42} />
    <StarRating
      maxRating={5}
      message={['terrible', 'bad', 'okay', 'good', 'amazing']}
    /> */}
    {/* <StarRating maxRating={10}/>
    <StarRating /> */}
  </StrictMode>,
);
