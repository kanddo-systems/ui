export type Size = "none" | "small" | "medium" | "large" | "xsmall" | "xlarge" | "xxlarge"; 
export type RoundedSize = Exclude<Size, "xsmall" | "xlarge" | "xxlarge">;
export type InputSize = Exclude<Size, "none" | "xsmall" | "xlarge" | "xxlarge">;