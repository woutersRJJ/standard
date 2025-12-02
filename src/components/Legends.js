import {firestoreDatabase} from "../services/firestore";
import {useState} from "react";

export function Legends(){
    const [legends,setLegends] = useState([])

    async function loadLegends() {
        const result = await firestoreDatabase.collection('legends').get();
        setLegends(result.docs.map(doc => ({...doc.data()})));
    }

    return <>
        <h2>Legends</h2>
        <button onClick={()=>{loadLegends()}}>Load</button>
        {legends.map((l,index)=><Legend legend={l} key={index}/>)}
    </>
}

function Legend({legend}){
    return <div className='speler'>
        <div>{legend.naam} {legend.voornaam}</div>
        <div>Geboren {legend.geboortejaar}</div>
        <div>{legend.nationaliteit}</div>
        <div>{legend.debuutseizoen}-{legend.eindseizoen}</div>
        <Teams teams={legend.teams}/>
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