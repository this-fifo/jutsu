import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useJitsi = ({
  domain = 'meet.jit.si',
  parentNode,
  subject,
  password,
  displayName,
  onMeetingEnd,
  ...options
}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [jitsi, setJitsi] = useState(null)

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      setError('JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded')
      return
    }

    options.parentNode = document.getElementById(parentNode)
    if (!options.parentNode) {
      setError(`Parent node is not available, check container have the correct id: "${parentNode}"`)
      return
    }

    const client = new window.JitsiMeetExternalAPI(domain, {...options})
    setJitsi(client)
    setLoading(false)
    setError(null)

    subject && client.executeCommand('subject', subject)

    client.addEventListener('videoConferenceJoined', () => {
      password && client.executeCommand('password', password)
      displayName && client.executeCommand('displayName', displayName)
    })

    client.addEventListener('passwordRequired', () => {
      password && client.executeCommand('password', password)
    })
    onMeetingEnd && client.addEventListener('readyToClose', onMeetingEnd)

    return () => jitsi && jitsi.dispose()
  }, [window.JitsiMeetExternalAPI])

  return {jitsi, error, loading}
}

useJitsi.propTypes = {
  options: PropTypes.shape({
    domain: PropTypes.string,
    roomName: PropTypes.string.isRequired,
    subject: PropTypes.string,
    password: PropTypes.string,
    displayName: PropTypes.string,
    onMeetingEnd: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    parentNode: PropTypes.string,
    configOverwrite: PropTypes.object,
    interfaceConfigOverwrite: PropTypes.object,
    noSSL: PropTypes.bool,
    jwt: PropTypes.string,
    onload: PropTypes.func,
    invitees: PropTypes.array,
    devices: PropTypes.object,
    userInfo: PropTypes.object
  })
}

export default useJitsi
