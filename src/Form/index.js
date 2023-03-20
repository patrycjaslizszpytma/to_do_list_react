import './style.css';
const Form = (props) => {
	return (
		<form className='form'>
			<input className='form__input' placeholder='Tap your new task here' />
			<button className='form__button button__animation'> Add new task</button>
		</form>
	);
};

export default Form;
