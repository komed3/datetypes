export type MonthFull = ( typeof MonthsFull )[ number ];
export const MonthsFull = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
] as const;

export type MonthShort = ( typeof MonthsShort )[ number ];
export const MonthsShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
] as const;

export type MonthName = MonthFull | MonthShort;
