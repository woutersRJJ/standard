import {firestoreDatabase} from "../services/firestore";
import {useState} from "react";

export function Players(){
    const [players,setPlayers] = useState([])

    async function loadPlayers() {
        const result = await firestoreDatabase.collection('players').get();
        setPlayers(result.docs.map(doc => ({...doc.data()})));
    }

    return <>
        <h2>Players</h2>
        <button onClick={()=>{loadPlayers()}}>Load</button>
        {players.map((p,index)=><Player player={p} key={index}/>)}
    </>
}

function Player({player}){
    return <div className='speler'>
        <div style={{marginTop: '10px'}}>{player.naam} {player.voornaam}</div>
        <div>Geboren {player.geboortejaar}</div>
        <div>{player.nationaliteit}</div>
        <div>{player.debuutseizoen}-{player.eindseizoen}</div>
        <Teams teams={player.teams}/>
    </div>
}

function Teams(props) {
    const {teams} = props

    if (teams == null)
        return <p>geen andere clubs</p>
    else
        return <div>
            <p>Clubs</p>
            <ul>{teams.map((c, index) => <Team team={c} key={index}/>)}</ul>
        </div>
}

function Team(props) {
    const {team} = props

    return <li>{team}</li>
}