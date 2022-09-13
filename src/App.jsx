import React, { useState } from "react";
import Chirp from "./components/Chirp";
// import { ReactDOM } from "react";

const App = () => {

    const [myUsername, setMyUsername] = useState('');
    const [myThoughts, setMyThoughts] = useState('');
    const [myChirps, setMyChirps] = useState([]);
    const [count, setCount] = useState(0);

    const handleChirpClick = () => {
        console.log('Hello from handleChirpClick')
        setMyChirps([...myChirps, { userName: myUsername, thoughts: myThoughts, id: { count } }])
        setCount(count + 1);
    };


    return (
        <>
            <h1>Hello</h1>
            <form action="">
                <input type="text" placeholder="UserName" value={myUsername} onChange={e => setMyUsername(e.target.value)} />
                <input type="text" placeholder="Thoughts?" value={myThoughts} onChange={e => setMyThoughts(e.target.value)} />
                <button type='button' onClick={handleChirpClick}>Chirp it!</button>
            </form>

            <section>
                <ul>
                    {myChirps.map((chirp) => <Chirp userName={chirp.userName} thoughts={chirp.thoughts} key={chirp.value} />)}
                </ul>
            </section>


        </>
    );


};

export default App;
