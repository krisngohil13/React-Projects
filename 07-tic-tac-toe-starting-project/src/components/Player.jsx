import { useState } from "react";


export default function Player({ initialName, symbol }) {

    const [playerName,setPlayerName]=useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEdit() {
      setIsEditing((isEditing)=>!isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

  return (
    <li>
      <span className="player">
        {isEditing ? ( 
            <input type="text" required value={playerName} onChange={handleChange}/>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing? 'Edit':'Save'}</button>
      
    </li>
  )
}