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
            <h2>This is State demonstration component</h2>
        
            <button onClick={() => setnum(num+1)}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h3>{num}</h3>

            <h3>LIve Name Change: My name is {name1}</h3>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName1(e.target.value)} />

            <h3>ON Click Name Change: My name is {name2}</h3>
            <input type="text" placeholder="Enter your name" onChange={(e) => setTempName(e.target.value)} />
            <button onClick={() => setName2(tempname)}>Update Name</button>
        </div>
    );
}

export default StateComp;