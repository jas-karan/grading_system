import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'
import CourseList from './components/CourseList.js';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Header />
      <CourseList />
      <Footer />
    </div>
  );
}

export default App;
