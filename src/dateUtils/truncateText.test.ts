import {truncateText} from './truncateText';

describe('test truncateText function', ()=>{
    it('returns string', ()=>{
        const testDate = 'test string short length';
        const expected = 'test string short length';
        const result = truncateText(testDate, 100);
        expect(result).toEqual(expected);
    })
    it('returns string', ()=>{
        const testDate = 'test string length 21';
        const expected = 'test string ...';
        const result = truncateText(testDate, 12);
        expect(result).toEqual(expected);
    })
    it('returns empty string if error or arg is not a string', ()=>{
        const testDate = null;
        const expected = '';
        const result = truncateText(testDate, 100);
        expect(result).toEqual(expected);
    })
    it('returns empty string if error or arg is not a string', ()=>{
        const testDate = undefined;
        const expected = '';
        const result = truncateText(testDate, 100);
        expect(result).toEqual(expected);
    })
    it('returns empty string if error or arg is not a string', ()=>{
        const testDate = 123;
        const expected = '';
        const result = truncateText(testDate, 100);
        expect(result).toEqual(expected);
    })
})