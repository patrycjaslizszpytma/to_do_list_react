import './style.css';
const Buttons = ({tasks, hideDoneTasks}) =>
	tasks.length > 0 && (
		//if false (no tasks in list) -> no buttons shown
		<div className='buttons'>
			<button className='buttons__button'>
				{hideDoneTasks ? 'Show' : 'Hide'} done tasks
			</button>
			<button
				className='buttons__button'
				disabled={tasks.every(({done}) => done)}>
				Select all as done
			</button>
		</div>
	);

export default Buttons;
