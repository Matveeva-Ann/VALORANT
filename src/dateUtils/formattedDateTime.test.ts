
import {formattedDateTime} from './formattedDateTime';

describe('formattedDateTime function', () => {
  it('returns a formatted date and time string', () => {
    const testDate = '2065-04-26T02:19:47.547Z';
    const expected = '26.04.2065, 05:19';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns an template string for any string', () => {
    const testDate = 'bla bla bla';
    const expected = '00.00.00, 00:00';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns an template string for null', () => {
    const testDate = null;
    const expected = '00.00.00, 00:00';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  })
  it('returns an template string for undefined', () => {
    const testDate = undefined;
    const expected = '00.00.00, 00:00';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  })
});