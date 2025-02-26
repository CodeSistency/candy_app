import { ReactNode } from "react";
import { z } from "zod";

export interface FormProviderCompType {
	children: ReactNode;
	persist?: string;
	schema?: z.Schema;
	debug?: boolean;
}
