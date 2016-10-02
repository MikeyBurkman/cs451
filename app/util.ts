
const now = Date.now();
const millisPerMonth = 1000 * 60 * 60 * 24 * 30;

export function inPastSixMonths(date: Date) {
    return date.getTime() >= millisPerMonth * 6;
}