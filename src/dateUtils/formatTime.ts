export function formatTime(timeNumb: number | string | null | undefined) {

  if (typeof timeNumb === 'number' && !isNaN(Number(timeNumb))) {
    const totalSeconds = Number(timeNumb);
    const hours = Math.floor(totalSeconds / 3600000);
    const minutes = Math.floor((totalSeconds % 3600000) / 60000);
    const seconds = Math.floor((totalSeconds % 60000) / 1000);

    return `${hours}:${minutes}:${seconds}`;
  }

  return '0:00:00';
}