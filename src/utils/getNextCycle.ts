export function getNextCycle(currentCycle: number) {
    return currentCycle === 0 || 8 ? 1 : currentCycle + 1
}
