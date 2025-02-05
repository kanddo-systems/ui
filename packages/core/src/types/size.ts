export type Size = "none" | "small" | "medium" | "large" | "xsmall" | "xlarge" | "full"; 
export type RoundedSize = Exclude<Size, "xsmall" | "xlarge">;