import React, {CSSProperties, ReactElement} from 'react'
// @ts-ignore
import core from './index.js'

export interface JutsuProps extends React.HTMLProps<React.ReactElement<any, any>> {

  // The meeting room name
  roomName: string;

  // The participant's displayed name
  displayName?: string;

  // The meeting room password
  password?: string;

  // Callback function executed after readyToClose event is fired
  onMeetingEnd?: () => void;

  // The meeting subject (what is displayed at the top)
  subject?: string;

  // Custom jitsi domain
  domain?: string;

  // component displayed while loading
  loadingComponent?: React.ReactElement<any, any>;

  // component displayed on error
  errorComponent?: React.ReactElement<any, any>;

  // Internally Jutsu is constructed inside 2 containers, you can add custom styles for each by specifying containerStyles and jitsiContainerstyles
  containerStyles?: CSSProperties;
  jitsiContainerStyles?: CSSProperties;

  // Configuration object to overwrite. Visit https://github.com/jitsi/jitsi-meet/blob/master/config.js
  configOverwrite?: any;

  // Interface configuration object to overwrite. Visit https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js
  interfaceConfigOverwrite?: any;

  // Callback function to be called with an error as the only parameter if any.
  onError?: () => void;

  // Callback function to be called with the jitsi API client when instantiated.
  onJitsi?: () => void;

  // Any other prop passed to the component will be passed to jitsi API constructor as part of the options parameter.
  jwt?: any;
  devices?: any;
  userInfo?: any;
}

export const Jutsu: (props: JutsuProps) => ReactElement = core.Jutsu
