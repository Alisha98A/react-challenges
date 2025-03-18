import "./App.module.css";
import Content from "./components/content";
import SideBar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return <div className="App">
      <SideBar />
      <NavBarForm />
    <Content />
  </div>;
}

export default App;