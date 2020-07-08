import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Newstylesheet from './components/Newstylesheet';
import Inlinecss from './components/Inlinecss';
import './appStyle.css';
import styles from './appStyle.module.css';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComponents from './components/PureComponents';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
function App() {
  return (
    <div className="App">
      <FocusInput />
        {/* <RefDemo /> */}
    </div>
  );
}

export default App;
