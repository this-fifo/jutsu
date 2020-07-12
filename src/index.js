import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useJitsi from './useJitsi'

const Jutsu = (props) => {
  const { domain, roomName, displayName, password, jwt = null, subject } = props
  const { loadingComponent, containerStyles, jitsiContainerStyles, onMeetingEnd } = props

  const [loading, setLoading] = useState(true)
  const jitsi = useJitsi({ roomName, parentNode: 'jitsi-container', jwt: jwt }, domain)

  const containerStyle = {
    width: '800px',
    height: '400px'
  }

  const jitsiContainerStyle = {
    display: loading ? 'none' : 'block',
    width: '100%',
    height: '100%'
  }

  useEffect(() => {
    if (jitsi) {
      setLoading(false)
      jitsi.executeCommand('subject', subject)

      jitsi.addEventListener('videoConferenceJoined', () => {
        if (password) jitsi.executeCommand('password', password)
        jitsi.executeCommand('displayName', displayName)
      })

      jitsi.addEventListener('passwordRequired', () => {
        if (password) {
          jitsi.executeCommand('password', password)
        }
      })
      if (onMeetingEnd) jitsi.addEventListener('readyToClose', onMeetingEnd)
    }

    return () => jitsi && jitsi.dispose()
  }, [jitsi])

  return (
    <div style={{ ...containerStyle, ...containerStyles }}>
      {loading && (loadingComponent || <p>Loading ...</p>)}
      <div
        id='jitsi-container'
        style={{ ...jitsiContainerStyle, ...jitsiContainerStyles }}
      />
    </div>
  )
}

Jutsu.propTypes = {
  jwt: PropTypes.string,
  domain: PropTypes.string,
  subject: PropTypes.string,
  password: PropTypes.string,
  roomName: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  onMeetingEnd: PropTypes.func,
  loadingComponent: PropTypes.object,
  containerStyles: PropTypes.object,
  jitsiContainerStyles: PropTypes.object
}

export { Jutsu, useJitsi }
