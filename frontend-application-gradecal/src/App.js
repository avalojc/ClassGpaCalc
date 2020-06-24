import React from 'react'
import './App.css';
import StudentApp from './component/StudentApp';
import ListCoursesComponent from './component/ListCoursesComponent'

function App() {
  return (
    <div className="App">
      <StudentApp/>
      <ListCoursesComponent/>
    </div>
  );
}

export default App;
