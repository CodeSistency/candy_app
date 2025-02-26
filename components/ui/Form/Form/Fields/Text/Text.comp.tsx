import { View, TextInput, Text } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { ReactElement } from "react";
import { getRegExpByType } from "./Text.funcs";
import {
  FormFieldTextCompType,
} from "./Text.types";
import { FormLabelComp } from "../../../Label";

export const FormFieldTextComp = <T,>({
  input: {
    name,
    placeholder,
    typeRegExp,
    className,
    defaultValue,
    disabled,
    isOpcional,
    maxLength,
    isPassword,
  },
  label,
  message,
  side,
}: FormFieldTextCompType<T>): ReactElement => {
  const {
    control,
    formState: { isSubmitted, isSubmitting },
  } = useFormContext();

  const validRegExp = getRegExpByType(typeRegExp);

  const isValidInput = (value: string) => validRegExp.test(value);

  return (
    <View className="mb-4">
      {label?.element && (
        <FormLabelComp text={{ main: label.element as string }} className="mb-1" />
      )}
      <Controller
        control={control}
        name={name as string} // Path<T> is compatible with string
        defaultValue={defaultValue || ""}
        render={({ field, fieldState: { error, invalid } }) => {
          const isSuccess =
            isSubmitted && !invalid && field.value && isValidInput(field.value as string);
          const inputClassName = `${invalid ? "border-red-500" : isSuccess ? "border-green-500" : "border-gray-300"} p-2 border rounded flex-1 ${className || ""}`;

          return (
            <View>
              <View className="flex-row items-center">
                {side?.left && <View className="mr-2">{side.left}</View>}
                <TextInput
                  className={inputClassName}
                  value={field.value as string || ""}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  editable={!disabled && !isSubmitting}
                  secureTextEntry={isPassword}
                  onChangeText={(text) => {
                    if (isValidInput(text)) {
                      field.onChange(text);
                    }
                  }}
                />
                {side?.right && <View className="ml-2">{side.right}</View>}
              </View>
              {invalid && error?.message && (
                <Text className="text-red-500 text-sm mt-1">
                  {error.message}
                </Text>
              )}
              {message?.information && !invalid && (
                <Text className="text-gray-500 text-sm mt-1">
                  {message.information}
                </Text>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

