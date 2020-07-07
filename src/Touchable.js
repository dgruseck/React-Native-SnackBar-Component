import React from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ViewPropTypes,
} from "react-native";
import { IS_ANDROID, IS_LT_LOLLIPOP, noop } from "./utils";

const Touchable = ({ onPress, style, actionProps, children }) => {
  if (IS_ANDROID && !IS_LT_LOLLIPOP) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={onPress}
        {...actionProps}
      >
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={style} {...actionProps}>
      {children}
    </TouchableOpacity>
  );
};

Touchable.propTypes = {
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  children: PropTypes.node.isRequired,
  actionProps: PropTypes.shape({}),
};

Touchable.defaultProps = {
  onPress: noop,
  style: {},
  actionProps: {},
};

export default Touchable;
