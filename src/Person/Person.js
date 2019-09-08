import React from 'react';


/*
let name = 'Josh';
let lName = 'Cutcher';
let age = Math.floor(Math.random() * 100);
let gender = [
    'male',
    'female'
];

*/

// let genderGenerator = Math.floor(Math.random() * 2);



const person = (props) => {
    return (
        <div>
            <h1>Hello, I'm {props.name} and I'm {props.age}.</h1>
            <p onClick={props.click}>{props.children}</p>
            <input type='text' onChange={props.changeByInput} value={props.name}/>
        </div>
        
    );
    
};

export default person;