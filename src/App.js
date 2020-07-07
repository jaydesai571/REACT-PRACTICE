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
import Newstylesheet from './components/Newstylesheet';
import Inlinecss from './components/Inlinecss';
import './appStyle.css';
import styles from './appStyle.module.css';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
        <Table />
        {/* <FragmentDemo /> */}
     {/* FORM CONTROLLER LIKE INPUT tag and textarea */}
      {/* <Form /> */}
      {/* CSS FILE AND CSS VIA MODULE STYLE  */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
        // INLINE CSS EXAMPLE 
      <Inlinecss /> */}
      {/* <Newstylesheet primary={true} /> */}
     
      {/* <NameList /> */}
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
