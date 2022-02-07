import React, {useState} from 'react';

export default function Toggle(props) {
    const [isToggleOn, setToggleOn] = useState(true);

    function handleClick() {
        setToggleOn(!isToggleOn)
        if (isToggleOn) {
            props.stop();
        } else {
            props.start();
        }
    }

  return (
    <div>
        <button onClick={handleClick}>
            {isToggleOn ? 'Stop':'Start'}
        </button>
    </div>
  );
}
