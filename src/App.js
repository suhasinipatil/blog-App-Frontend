import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BlogApp from "./BlogApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BlogApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
