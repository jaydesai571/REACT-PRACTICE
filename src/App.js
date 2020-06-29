import React from 'react';
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
function App() {
  return (
    <div className="App">

      <NameList />
        {/* <Greet name="vishwas" heroName="superman">
          <p>This is child propss</p>
        </Greet>
        <Greet name="jay" heroName="Iron Man">
          <p>This is another child props</p>
        </Greet> */}
{/* 
        <button>Action</button>

        <Welcome name="vishwas" heroName="superman" />
        <Welcome name="jay" heroName="Iron Man" />
          <Hello /> 

        <Message></Message>

       

        <Counter /> */}
        {/* <Functionclick />

        <Classclick></Classclick>
         */}
{/* 
         <EventBind></EventBind> */}

         {/* <ParentComponent /> */}

         {/* <UserGreeting /> */}
    </div>
  );
}

export default App;
