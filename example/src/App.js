import React, { useState } from 'react'

import Jutsu from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return (
    <div>
      <h2>&lt;Jutsu /&gt; Demo !</h2>
      <blockquote>Please check <a href="https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md">jitsi-meet</a> for the full configuration</blockquote>
      {call ? (<Jutsu
        roomName={room}
        userName={name}
        loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
        : (
          <form>
            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )}
      <p>Made with <span role='img' aria-label='coffee'>☕</span> by <a href="https://github.com/this-fifo">Filipe Herculano</a></p>
    </div>
  )
}

export default App