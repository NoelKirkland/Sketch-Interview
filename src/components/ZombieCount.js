import React, { useState } from 'react';

function ZombieCount(){
  const [zombieKills, setZombieKills] = useState(0);

  function zombieKilled(){
    setZombieKills(prevCount => prevCount + 1)
  }

  function zombieRevived(){
    setZombieKills(prevCount => prevCount - 1)
  }

  return(
    <React.Fragment>
      <h2>How many zombies have you bagged today?</h2><br/>
      <button onClick={zombieRevived}>Came back to life?!?</button>
      <h3>{zombieKills}</h3>
      <button onClick={zombieKilled}>Got em!</button>
    </React.Fragment>
  )
}

export default ZombieCount;