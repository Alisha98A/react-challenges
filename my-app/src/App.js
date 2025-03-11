import css from './App.module.css';
import SideBar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <SideBar />
      <StatefulGreeting greeting="I am a stateful class component!" name="Mike" />
    </div>
  );
}

export default App;