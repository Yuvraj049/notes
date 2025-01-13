import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import TasksList from './components/TasksList';

const App = () => {
	const [notes, setNotes] = useState(()=>{
		const savedNotes = JSON.parse(localStorage.getItem('react-app-notes-data'));
		return savedNotes || [];
		}
	);
	const [tasks, setTasks] = useState(()=>{
		const savedTasks = JSON.parse(localStorage.getItem('react-app-tasks-data'));
		return savedTasks || [];
		}
	);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-app-notes-data')
		);
		const savedTasks = JSON.parse(
			localStorage.getItem('react-app-tasks-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
		if (savedTasks) {
			setNotes(savedTasks);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-app-notes-data',
			JSON.stringify(notes)
		);
	}, [notes]);
	useEffect(() => {
		localStorage.setItem(
			'react-app-tasks-data',
			JSON.stringify(tasks)
		);
	}, [tasks]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			created: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
	const addTask = (text,reminder) => {
		const date = new Date();
		const newTask = {
			id: nanoid(),
			text: text,
			reminder: reminder,
			created: date.toLocaleDateString(),
		};
		const newTasks = [...tasks, newTask];
		setTasks(newTasks);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
				<TasksList
					tasks={tasks.filter((task) =>
						task.text.toLowerCase().includes(searchText)
					)}
					handleAddTask={addTask}
					handleDeleteTask={deleteTask}
				/>
			</div>
		</div>
	);
};

export default App;