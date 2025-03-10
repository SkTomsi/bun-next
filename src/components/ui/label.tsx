"use client";

// biome-ignore lint/style/noNamespaceImport: <explanation>
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
	"font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = ({ ref, className, ...props }) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(), className)}
		{...props}
	/>
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
