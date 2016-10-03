
const millisPerMonth = 1000 * 60 * 60 * 24 * 30;

export function inPastSixMonths(date: Date) {
    return date.getTime() >= Date.now() - millisPerMonth * 6;
}