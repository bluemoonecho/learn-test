import { act, fireEvent, render } from '@testing-library/react'
import Input from './Input'

describe('Input component test', () => {
    it('redered input', () => {
        const {getByTestId} = render(<Input showDiv={false}/>)
        const input = getByTestId('inputBar')
        expect(input).toBeTruthy();
    })
    
    it('render div', ()=>{
        const {getByTestId} = render(<Input showDiv={true}/>)
        const div = getByTestId('divShow')
        expect(div).toBeTruthy();
    })

    it('dont render div', ()=>{
        const {queryByTestId} = render(<Input showDiv={false}/>)
        const div = queryByTestId('divShow')
        expect(div).toBeFalsy();
    })

    it('change on input changes value', async()=>{
        await act(async ()=>{
            const {getByTestId} = render(<Input showDiv={false}/>)
            const input = getByTestId('inputBar')
            const display = getByTestId('displayValue')
            const inputWord = 'Hello'
            await fireEvent.change(input, {target: {value: inputWord}});
            expect(display.innerHTML).toBe(inputWord)
        })
        
    })

})

