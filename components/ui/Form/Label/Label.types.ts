import React, { CSSProperties } from "react";
import { StyleProp, TextStyle } from "react-native";

/**
 * Defines the properties of a custom form label component in React.
 */
export interface FormLabelCompType {
	/**
	 * Defines the text properties that will compose the form label.
	 */
	text: {
		/**
		 * The main text of the form label.
		 */
		main: string;

		/**
		 * (Optional) Additional text to be displayed within brackets.
		 */
		inbrackets?: string;

		/**
		 * (Optional) Text considered as subtext and displayed with a different style.
		 */
		sub?: string;

		/**
		 * (Optional) Text considered as superscript and may be displayed differently.
		 */
		sup?: string;
	};

	/**
	 * (Optional) A CSS class that can be applied to the form label component.
	 */
	className?: string;

	/**
	 * (Optional) A boolean flag that allows hiding the component when set to `true`.
	 */
	hidden?: boolean;

	/**
	 * (Optional) A CSS style object that can be applied to the form label component.
	 */
	style?: StyleProp<TextStyle>;

	element?: React.ReactNode;
}
