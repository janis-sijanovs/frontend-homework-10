import React from 'react';
import './App.scss';
import Task from './components/Task/task';
import VegetableListFirst from './components/VegetableListFirst/vegetableListFirst';
import VegetableListSecond from './components/VegetableListSecond/vegetableListSecond';

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
];

const App = () => (
  <div className="App">

    <div className="task-box">
      {tasks.map(({
        id, text, done,
      }) => (
        <div key={id} className="task-item">
          <Task isDone={done} text={text} />
        </div>
      ))}
    </div>

    <div className="task-box">
      {tasks
        .filter(({ done }) => !done)
        .map(({
          id, text, done,
        }) => (
          <div key={id} className="task-item">
            <Task text={text} />
          </div>
        ))}
    </div>

    <VegetableListFirst />

    <VegetableListSecond />

  </div>
);

export default App;
