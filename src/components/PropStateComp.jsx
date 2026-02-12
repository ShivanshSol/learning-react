import React, { useState } from 'react';

const PropStateComp = (props) => {

    const [name, setName] = useState(props.name);
    const [tempname, setTempName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [tempage, setTempAge] = useState(props.age);

    return(
        <div>
            <h1>This is Prop & State demonstration component</h1>
            <h2>Props received: Name = {name}, Age = {age}</h2>

            <p>Edit Name:</p>
            <input type="text" placeholder={props.name} onChange = {(e) => setTempName(e.target.value)}/>
            <button onClick={() => setName(tempname)}>Update Name</button>
            
            <p>Edit Age:</p>
            <input type="text" placeholder={props.age} onChange = {(e) => setTempAge(e.target.value)}/>
            <button onClick={() => setAge(tempage)}>Update Age</button>
        </div>
    );
}

export default PropStateComp;