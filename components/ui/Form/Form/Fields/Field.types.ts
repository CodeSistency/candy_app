import React from "react";
import { Path } from "react-hook-form";
import { FormLabelCompType } from "../../Label";
// import { FormLabelCompType } from "../Label";

export interface FieldInputType<T> {
	name: Path<T>;
	placeholder: string;
	className?: string;
	defaultValue?: string;
	disabled?: boolean;
	isOpcional?: boolean;
	isPassword?: boolean;
}

export interface FieldLabelType {
	label?: FormLabelCompType;
}

export interface FieldMessageType {
	message?: {
		error?: string;
		information?: string;
	};
}
