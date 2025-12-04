// --- Months ---------------------------------------------------------------

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

// --- Weekdays -------------------------------------------------------------

export type WeekdayFull = ( typeof WeekdaysFull )[ number ];
export const WeekdaysFull = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
] as const;

export type WeekdayShort = ( typeof WeekdaysShort )[ number ];
export const WeekdaysShort = [
    'Mon', 'Tue', 'Tues', 'Wed', 'Thu', 'Thur',
    'Thurs', 'Fri', 'Sat', 'Sun'
] as const;

export type WeekdayName = WeekdayFull | WeekdayShort;

// --- Ordinal Day Suffix ---------------------------------------------------

export type OrdinalSuffix = ( typeof OrdinalSuffix )[ number ];
export const OrdinalSuffix = [ 'st', 'nd', 'rd', 'th' ] as const;

export type OrdinalDay = `${number}${OrdinalSuffix}`;

// --- Time Components ------------------------------------------------------
