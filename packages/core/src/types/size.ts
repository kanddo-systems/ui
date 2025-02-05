export type Size = "none" | "small" | "medium" | "large" | "xsmall" | "xlarge" | "full"; 
export type RoundedSize = Exclude<Size, "xsmall" | "xlarge">;
export type InputSize = Exclude<Size, "none" | "xsmall" | "xlarge" | "full">;