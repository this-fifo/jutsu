# &lt;Jutsu /&gt;

> A jitsi meet component wrapper moulded with react&#x27;s chakra 💠

[View live demo](https://this-fifo.github.io/jutsu/)

[![NPM](https://img.shields.io/npm/v/react-jutsu.svg)](https://www.npmjs.com/package/react-jutsu)

## Install

```bash
yarn add react-jutsu
```

## Add the Jitsi Meet API js file to the html body

```html
<body>
  <script src='https://meet.jit.si/external_api.js'></script>
</body>
```

## Sample Usage

```jsx
import React, { useState } from 'react'

import Jutsu from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu
      roomName={room}
      userName={name}
      password={password}
      loadingComponent={<p>loading ...</p>} />
  ) : (
    <form>
      <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
      <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}

export default App
```

## Supported Configuration
> Check the [Jitsi Meet API docs](https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md#api--new-jitsimeetexternalapidomain-options) for more

### Room Name
The meeting room name
>This prop is required for jitsi to load

### User Name
The participant's name
>This prop is required for jitsi to load

### Password
The meeting room password
>This prop is optional

```jsx
<Jutsu roomName='sao' userName='kirito' password='asuna'>
```

### Domain
```jsx
<Jutsu domain='my-custom-domain.com'>
```
Your Jitsi domain to use, the default value is `meet.jit.si`

### Loading Component
```jsx
<Jutsu loadingComponent={<ProgressBar />}>
```
An optional loading component, the default value is `<p>Loading ...</p>`

### Styles
```jsx
<div
  style={{...containerStyle, ...containerStyles}}
>
  <div
    style={{...jitsiContainerStyle, ...jitsiContainerStyles}}
  />
</div>
```
Internally Jutsu is constructed inside 2 containers, you can add custom styles for each by specifying `containerStyles` and `jitsiContainerstyles`

The default values are

```js
const containerStyle = {
  width: '800px',
  height: '400px'
}

const jitsiContainerStyle = {
  display: loading ? 'none' : 'block', // <- used for loadingComponent logic
  width: '100%',
  height: '100%'
}
```

An example override could be
```jsx
<Jutsu containerStyles={{ width: '1200px', height: '800px' }}>
```

## License

MIT © [this-fifo](https://github.com/this-fifo)
