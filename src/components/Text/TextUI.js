import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {},
});

export default ({ children, style, accent, bold, size }) => {
  let fontSize = 17;
  // let fontFamily = bold ? "AvenirNextLTPro-Bold" : "AvenirNextLTPro-Regular";

  switch (size) {
    case "lg":
      fontSize = 20;
      break;
    case "md":
      fontSize = 17;
      break;
    case "sm":
      fontSize = 15;
      break;
    default:
      fontSize = 17;
      break;
  }

  return (
    <Text
      style={{
        ...styles.text,
        color: accent ? "#F54B64" : "#FFFFFF",
        // fontFamily,
        fontSize: 15,
        textAlignVertical: "center",
        height: fontSize,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
