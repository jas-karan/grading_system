import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import StudentList from "./components/StudentList.js";

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
