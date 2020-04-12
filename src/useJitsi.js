import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useJitsi = (options, domain = 'meet.jit.si') => {
  const [jitsi, setJitsi] = useState(null)

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      options.parentNode = document.getElementById(options.parentNode)
      // eslint-disable-next-line no-undef
      setJitsi(new JitsiMeetExternalAPI(domain, options))
    } else {
      setJitsi({ error: 'JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded' })
    }
    return () => jitsi && jitsi.dispose()
  }, [])

  return jitsi
}

useJitsi.propTypes = {
  options: PropTypes.shape({
    roomName: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    parentNode: PropTypes.string,
    configOverwrite: PropTypes.string,
    interfaceConfigOverwrite: PropTypes.object,
    noSSL: PropTypes.bool,
    jwt: PropTypes.string,
    onload: PropTypes.func,
    invitees: PropTypes.array,
    devices: PropTypes.object,
    userInfo: PropTypes.object
  }),
  domain: PropTypes.string
}

export default useJitsi
