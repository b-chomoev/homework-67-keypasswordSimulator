import {useDispatch} from "react-redux";
import {getValue} from "../../containers/counterSlice.ts";
import {NUMBERS} from "../../constants.ts";
import './Button.css';

const Button = () => {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='container'>
        {NUMBERS.map((number) => (
          <button className='button' key={number.id} value={number.value} onClick={(e) => dispatch(getValue(e.currentTarget.value))}>
            {number.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;