export const toArray = (arg: any) => [].concat(...[arg]);

export const normalizeSpaces = (text: string) => text.replace(/\u00A0/g, ' ');

export const sum = (a: number, b: number) => a + b;
