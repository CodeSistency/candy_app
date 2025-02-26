import React, { FC, ReactElement } from "react";
import { FormLabelCompType } from "./Label.types";
import { Text } from "react-native";

export const FormLabelComp: FC<FormLabelCompType> = ({
  text: { main, inbrackets, sub, sup },
  className = "p-fw-medium", // Adjusted to PrimeReact-like naming
  hidden = false,
  style,
}) => {
  if (hidden) return null;

  return (
    <Text className={`text-base font-medium ${className}`} style={style}>
      {main}
      {sub && <Text className="text-xs pl-1">{sub}</Text>}
      {sup && <Text className="text-xs pl-1">{sup}</Text>}
      {inbrackets && (
        <Text className="text-gray-500">{` (${inbrackets})`}</Text>
      )}
    </Text>
  );
};