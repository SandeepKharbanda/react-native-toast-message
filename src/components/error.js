import React from 'react';

import BaseToast from './base';
import { icons } from '../assets';
import colors from '../colors';

function ErrorToast(props) {
  return (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.redColor }}
      leadingIcon={icons.error}
      tintColor={colors.redColor}
    />
  );
}

ErrorToast.propTypes = BaseToast.propTypes;

export default ErrorToast;
