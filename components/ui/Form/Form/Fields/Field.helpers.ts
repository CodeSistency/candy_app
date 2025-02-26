import { FieldError } from "react-hook-form";
import {
	classNameBorderDanger,
	classNameBorderSuccess,
} from "./Field.constants";

export const classNameDangerHelper = (
	error: FieldError | undefined,
	invalid: boolean,
	isOpcional: boolean = false,
): string => {
	if (isOpcional === true) return "";

	if (error && invalid) {
		return classNameBorderDanger;
	} else {
		return "";
	}
};

export const classNameSuccessHelper = (
	error: FieldError | undefined,
	isSubmitted: boolean,
	isOpcional: boolean = false,
): string => {
	if (isOpcional) return "";

	if (!error && isSubmitted) {
		return classNameBorderSuccess;
	} else {
		return "";
	}
};
