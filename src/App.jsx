import './App.css';
import { Comments } from './comments/Comments';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/:num?' element={<Comments />} />
      </Routes>
    </>
  )
}

export default App;