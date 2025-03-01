export const toArray = (arg: any) => [].concat(...[arg]);

export const normalizeSpaces = (text: string) => text.replace(/\u00A0/g, ' ');
