

import { TouchableOpacity, View } from "react-native";
import { useFormContext } from "react-hook-form";
import { FormSubmitButtonProps } from "./Submit.types";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";

// New FormSubmitButton component
export function FormSubmitButton({
  onSubmit,
  title,
  className = "",
  style,
  textStyle,
  disabled = false,
  loading = false,
  children,
}: FormSubmitButtonProps) {
  const { handleSubmit, formState: { isSubmitting } } = useFormContext();

  const handlePress = () => {
    handleSubmit(onSubmit)(); // Trigger form submission
  };

  return (
    <TouchableOpacity
      className={`p-3 bg-blue-500 rounded ${className} ${disabled || isSubmitting || loading ? "opacity-50" : ""}`}
      style={style}
      onPress={handlePress}
      disabled={disabled || isSubmitting || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : children ? (
        children
      ) : (
        <Text className="text-white text-center font-medium" style={textStyle}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
