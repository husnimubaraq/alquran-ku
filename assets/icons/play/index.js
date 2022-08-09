import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../../src/constants/colors';

const PlayIcon = ({ size, color, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 8 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.596 5.697 1.233 9.39C.693 9.702 0 9.323 0 8.692V1.308C0 .678.692.298 1.233.612l6.363 3.692a.802.802 0 0 1 0 1.393Z"
      fill={color}
    />
  </Svg>
);

PlayIcon.defaultProps = {
  size: 24,
  color: Colors.black,
};

export default PlayIcon;