import { BaseSyntheticEvent, ReactNode } from "react";
import { z } from "zod";

export type GenericOnSubmitType = (
	data: Record<string, unknown>,
	event?: BaseSyntheticEvent,
) => void;

export interface FormCompType {
	onSubmit: (data: any, event?: BaseSyntheticEvent) => void;
	children: ReactNode;
	debug?: boolean;
}

export interface FormProviderCompType {
	children: ReactNode;
	validator: z.Schema;
	persist?: string;
	debug?: boolean;
}
