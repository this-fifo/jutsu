import React, { createRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Jutsu = ({
  roomName,
  userName,
  domain = 'meet.jit.si',
  password,
  loadingComponent,
  containerStyles,
  jitsiContainerStyles
}) => {
  const [loading, setLoading] = useState(true)
  const ref = createRef()

  const containerStyle = {
    width: '800px',
    height: '400px'
  }

  const jitsiContainerStyle = {
    display: loading ? 'none' : 'block',
    width: '100%',
    height: '100%'
  }

  const startConference = () => {
    try {
      // eslint-disable-next-line no-undef
      const api = new JitsiMeetExternalAPI(domain, { roomName, parentNode: ref.current })
      api.addEventListener('videoConferenceJoined', () => {
        console.info(`${userName} has entered ${roomName}`)
        setLoading(false)
        api.executeCommand('displayName', userName)
        if (password) {
          api.executeCommand('password', password)
        }
      })
    } catch (error) {
      console.error('Failed to load Jitsi API', error)
    }
  }

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) startConference()
    else console.error('Jitsi Meet API script not loaded')
  }, [])

  return (
    <div
      style={{...containerStyle, ...containerStyles}}
    >
      {loading && (loadingComponent || <p>Loading ...</p>)}
      <div
        id='jitsi-container'
        ref={ref}
        style={{...jitsiContainerStyle, ...jitsiContainerStyles}}
      />
    </div>
  )
}

Jutsu.propTypes = {
  roomName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  domain: PropTypes.string,
  password: PropTypes.string,
  loadingComponent: PropTypes.object,
  containerStyles: PropTypes.object,
  jitsiContainerStyles: PropTypes.object
}

export default Jutsu
