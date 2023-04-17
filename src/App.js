import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
	{id: 1, content: 'task1', done: false},
	{id: 2, content: 'task2', done: true},
];

const hideDoneTasks = false;

function App() {
	return (
		<Container>
			<Header title='To do list' />
			<Section title='Add new task' body={<Form />} />
			<Section
				title='Task list'
				body={
					<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} key={tasks.id} />
				}
				extraHeaderContent={
					<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
				}
			/>
		</Container>
	);
}

export default App;
