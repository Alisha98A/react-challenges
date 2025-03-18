import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodAsPropsParent';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import NavBarForm from "./components/NavBarForm";
import RenderingLists from "./components/RenderingLists";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <SideBar />
      <NavBarSimple />
      <NavBarForm />
      <StatefulGreeting greeting="I am a stateful class component!" name="Mike" />
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
      <NestingComponents />
      <MethodsAsPropsChild />
      <MethodsAsPropsParent />
      <RenderingLists />
    </div>
  );
}

export default App;
