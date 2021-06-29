import {multiply, makeLowerCase} from './HelperFunctions'

test('multiply', () =>{
    expect(multiply(2,10)).toBe(20);
    expect(multiply(6,-2)).toBe(-12);
    expect(multiply(3,3)).toBe(9);
    }
)

test('makeLowerCase', ()=>{
    expect(makeLowerCase('HeLLo')).toBe('hello');
    expect(makeLowerCase('SdCCdDd')).toBe('sdccddd');
})