import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useJitsi from './useJitsi'

const Jutsu = (props) => {
  const { roomName, displayName, password, subject } = props
  const { loadingComponent, containerStyles, jitsiContainerStyles } = props

  const [loading, setLoading] = useState(true)
  const jitsi = useJitsi({ roomName, parentNode: 'jitsi-container' })

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
      jitsi.addEventListener('videoConferenceJoined', () => {
        if (password) jitsi.executeCommand('password', password)
        jitsi.executeCommand('displayName', displayName)
        jitsi.executeCommand('subject', subject)
      })
      setLoading(false)
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
  roomName: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  password: PropTypes.string,
  subject: PropTypes.string,
  loadingComponent: PropTypes.object,
  containerStyles: PropTypes.object,
  jitsiContainerStyles: PropTypes.object
}

export { Jutsu, useJitsi }
