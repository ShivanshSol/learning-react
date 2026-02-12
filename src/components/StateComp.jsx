import {useState} from 'react';


const StateComp = () => {

    const [num, setnum]= useState(0);
    const decrement =() =>{
        setnum(prevNum => prevNum-1);
    }
    const [name1, setName1] = useState("Your Name Here");

    const [name2, setName2] = useState("Your Name Here");

    const [tempname, setTempName] = useState("");


    return(
        <div>
            <h1>This is State demonstration component</h1>
        
            <button onClick={() => setnum(num+1)}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>{num}</h2>

            <h2>LIve Name Change: My name is {name1}</h2>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName1(e.target.value)} />

            <h2>ON Click Name Change: My name is {name2}</h2>
            <input type="text" placeholder="Enter your name" onChange={(e) => setTempName(e.target.value)} />
            <button onClick={() => setName2(tempname)}>Update Name</button>
        </div>
    );
}

export default StateComp;