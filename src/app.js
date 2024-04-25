import React, { useState } from 'react';
import { MyButton } from './mybutton';
import './app.css';

export const App = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('blue');
    console.log('render', count);
    return (
    <div>
        <div style={{color: color}}>
            color: { color}
            <br />
            count: { count }
        </div>
        <MyButton label='Click Me' onClick={ev => {setCount(count +1)}} />
    </div>
    )
};

// const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
//     params: {
//         q: inputValue,
//         api_key: 'GOf3UG8U012O5dN4uAeXEhaGQjiLkWhv',
//     }
// });