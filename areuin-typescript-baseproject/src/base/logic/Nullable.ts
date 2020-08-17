export function isAbssent(value: any): boolean {
  return value === null || value === undefined;
}

export function isPresent(value: any): boolean {
  return !isAbssent(value);
}
