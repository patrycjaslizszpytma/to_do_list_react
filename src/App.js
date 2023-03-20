import Form from './Form';
import Tasks from './Tasks';

const tasks = [
	{id: 1, content: 'task1', done: false},
	{id: 2, content: 'task2', done: true},
];

const hideDoneTasks = false;

function App() {
	return (
		<main className='container'>
			<header>
				<h1> To do list </h1>
			</header>

			<section className='section'>
				<header className='section__header'>
					<h2>Add new task</h2>
				</header>

				<div className='section__body'>
					<Form />
				</div>
			</section>

			<section className='section'>
				<header className='section__header'>
					<h2>Task list</h2>
					<div className='buttons'>
						<button className='buttons__button'>Hide done tasks</button>
						<button className='buttons__button'>
							Select as done all tasks
						</button>
					</div>
				</header>

				<div className='section__body'>
					<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} key={tasks.id} />
				</div>
			</section>
		</main>
	);
}

export default App;
