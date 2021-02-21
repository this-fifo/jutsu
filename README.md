# &lt;Jutsu /&gt;
> A jitsi meet component wrapper and custom hook moulded with react's chakra 💠

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

> You can choose to load the script another way, the hook will return an error until the jitsi API is available in `window` scope.

## Two options
> You can use the provided component for simple scenarios or the hook for access to the jitsi meet api
```js
import { Jutsu } from 'react-jutsu' // Component
import { useJitsi } from 'react-jutsu' // Custom hook
```

## Sample Usage (Hook)
```jsx
import React, { useEffect } from 'react'
import { useJitsi } from 'react-jutsu'

const App = () => {
  const jitsiConfig = {
    roomName: 'konoha',
    displayName: 'Naruto Uzumaki',
    password: 'dattebayo',
    subject: 'fan',
    parentNode: 'jitsi-container',
  };
  const { loading, error, jitsi } = useJitsi(jitsiConfig);

  return (
    <div>
      {error && <p>{error}</p>}
      <div id={jitsiConfig.parentNode} />
    </div>
  );
}
```

## Sample Usage (Component)
```jsx
import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

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
      displayName={name}
      password={password}
      onMeetingEnd={() => console.log('Meeting has ended')}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} />
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
> Check the [Jitsi Meet API docs](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe) for full configuration and how to use api commands when using the `useJitsi` hook

### Room Name
The meeting room name
>This prop is required to start a meeting

### Display Name
The participant's displayed name
>This prop is optional

### Password
The meeting room password
>This prop is optional

### onMeetingEnd
Callback function executed after readyToClose event is fired
>This prop is optional

### Subject
The meeting subject (what is displayed at the top)
>This prop is optional

```jsx
<Jutsu
  subject='fan'
  roomName='naruto'
  password='dattebayo'
  displayName='uzumaki'
  onMeetingEnd={() => console.log('Meeting has ended')}
/>
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

### Error Component
```jsx
<Jutsu errorComponent={<p>Oops, something went wrong...</p>}>
```
An optional error component, the default value is a `<p>` containing the error.

### Styles
Internally Jutsu is constructed inside 2 containers, you can add custom styles for each by specifying `containerStyles` and `jitsiContainerstyles`

The default values set as

```jsx
<div
  style={{...{
    width: '800px',
    height: '400px'
  }, ...containerStyles}}
>
  <div
    style={{...{
      display: loading ? 'none' : 'block', // <- used for loadingComponent logic
      width: '100%',
      height: '100%'
    }, ...jitsiContainerStyles}}
  />
</div>
```

An example override could be
```jsx
<Jutsu containerStyles={{ width: '1200px', height: '800px' }}>
```

### configOverwrite
Configuration object to overwrite.
>This prop is optional
>More details about possible key/values [here](https://github.com/jitsi/jitsi-meet/blob/master/config.js)

### interfaceConfigOverwrite
Interface configuration object to overwrite.
>This prop is optional
>More details about possible key/values [here](https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js)

### onError
Callback function to be called with an error as the only parameter if any.
>This prop is optional

### onJitsi
Callback function to be called with the jitsi API client when instantiated.
>This prop is optional

### any other prop
Any other prop passed to the component will be passed to jitsi API constructor as part of the `options` parameter.
> For instance: `jwt`, `devices`, `userInfo`

## License

MIT © [this-fifo](https://github.com/this-fifo)
