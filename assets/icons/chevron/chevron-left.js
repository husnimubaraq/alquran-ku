import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../../src/constants/colors';

const ChevronLeftIcon = ({ size, color, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.5 5.7 0 3.2v-.7L2.5 0l.71.7-1.64 1.65h5.57v1H1.57L3.22 5l-.72.7Z"
      fill={color}
    />
  </Svg>
);

ChevronLeftIcon.defaultProps = {
  size: 24,
  color: Colors.black,
};

export default ChevronLeftIcon;