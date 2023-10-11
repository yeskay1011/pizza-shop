import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Comments from './components/Comments';
import Menu from './components/Menu';
import PicoftheWeek from './components/PicoftheWeek';

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <PicoftheWeek />
      <Comments />
      <div className="text-center my-3 text-danger small">Copyrights @ 2023</div>
    </>
  );
}

export default App;
