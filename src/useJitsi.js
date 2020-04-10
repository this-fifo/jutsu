import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useJitsi = ({ domain = 'meet.jit.si', roomName, parentNodeId }) => {
  const [jitsi, setJitsi] = useState(null)

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      const parentNode = parentNodeId
        ? document.getElementById(parentNodeId)
        : document.body
      // eslint-disable-next-line no-undef
      setJitsi(new JitsiMeetExternalAPI(domain, { roomName, parentNode }))
    } else {
      setJitsi({ error: 'JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded' })
    }
    return () => jitsi && jitsi.dispose()
  }, [])

  return jitsi
}

useJitsi.propTypes = {
  domain: PropTypes.string,
  roomName: PropTypes.string.isRequired,
  parentNodeId: PropTypes.string.isRequired
}

export default useJitsi
