import { formatTime } from '../dateUtils/formatTime';

describe('formatTime function', () => {
  it('returns a formatted time', () => {
    const testDate = 2356581;
    const expected = '0:39:16';
    const result = formatTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns template string for a string', () => {
    const testDate = 'any string';
    const expected = '0:00:00';
    const result = formatTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns template string for a null', () => {
    const testDate = null;
    const expected = '0:00:00';
    const result = formatTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns template string for a undefined', () => {
    const testDate = undefined;
    const expected = '0:00:00';
    const result = formatTime(testDate);
    expect(result).toEqual(expected);
  });
});
