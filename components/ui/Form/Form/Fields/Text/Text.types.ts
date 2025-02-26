import { ReactElement } from "react";
import {
	FieldInputType,
	FieldLabelType,
	FieldMessageType,
} from "../Field.types";

type FieldInputPropTypeRegExpType =
  | "allCharacters"
  | "onlyAmount"
  | "onlyLettersWithoutSpace_ENG"
  | "onlyLettersWithSpace"
  | "onlyNumeric"
  | "alphanumeric";

export interface FormFieldTextCompType<T> extends FieldLabelType, FieldMessageType {
  input: FieldInputType<T> & {
    typeRegExp: FieldInputPropTypeRegExpType;
    maxLength?: number;
  };
  side?: {
    left?: ReactElement;
    right?: ReactElement;
  };
}
