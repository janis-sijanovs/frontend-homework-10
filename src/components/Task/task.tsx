import React, { FC } from 'react';
import './task.scss';

type TaskProps = {
  text: string;
  isDone?: boolean;
}

const Task: FC<TaskProps> = ({
  text, isDone,
}) => (
  <p
    className="task"
    style={{ textDecoration: isDone ? 'line-through' : 'none' }}
  >
    {text}
  </p>
);

export default Task;
