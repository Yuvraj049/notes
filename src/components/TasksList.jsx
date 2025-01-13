import React, { useEffect, useState, useRef} from 'react';
import Task from './Task'
function TasksList(props){

    const [taskText, setTaskText] = useState('');
	const [reminder, setReminder] = useState('');

    const handleSaveClick = () => {
		if (taskText.trim().length > 0) {
			console.log(`${taskText} ${reminder}`);
			props.handleAddTask(taskText, reminder);
			setTaskText('');
			setReminder('');
		}
	};
    const handleChange = (e) => {
		setTaskText(e.target.value);
	};
	const handleReminderChange = (e) => {
		setReminder(e.target.value);
	  };
    const handleKeyPress = (e) => {
		console.log(`${taskText} ${reminder}`);
        if (e.key === 'Enter') {
          handleSaveClick(taskText, reminder);
        }
    };
  return (
    <div className='tasks-list'>
            <div class="input-group mb-3">
                <input onKeyPress={handleKeyPress} value={taskText} onChange={handleChange} type="text" class="form-control" placeholder="Enter Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
				<input
					type="date"
					value={reminder}
					onChange={handleReminderChange}
					placeholder='Enter Reminder Date'
					className="form-control"
					aria-label="Reminder date"
				/>
                <button class="btn btn-primary" type="submit" onClick={handleSaveClick}>Add</button>
            </div>
			{props.tasks.map((task) => (
				<Task
					id={task.id}
					text={task.text}
					date={task.reminder}
					handleDeleteTask={props.handleDeleteTask}
				/>
			))}
		</div>
    
  )
}

export default TasksList