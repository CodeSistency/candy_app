import { BaseSyntheticEvent, ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type GenericOnSubmitType = (
	data: Record<string, unknown>,
	event?: BaseSyntheticEvent,
) => void;



export interface FormSubmitButtonProps {
	onSubmit: GenericOnSubmitType;
	title: string; // Button text
	className?: string; // NativeWind styling
	style?: StyleProp<ViewStyle>; // Custom RN styles for the button container
	textStyle?: StyleProp<TextStyle>; // Custom RN styles for the text
	disabled?: boolean; // Disable the button
	loading?: boolean; // Show a loading spinner
	children?: ReactNode; // Optional custom content (e.g., icons)
  }