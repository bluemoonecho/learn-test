import { act, fireEvent, render } from '@testing-library/react'
import ButtonThree from './ButtonThree'

describe('Button Three component test', () => {

    it('redered button three', () => {
        const {getByTestId} = render(<ButtonThree/>)
        const btn = getByTestId('button')
        expect(btn).toBeTruthy();
    })
    it('render 1 button before button click', () => {
        const {getAllByTestId} = render(<ButtonThree/>)
        const btnList = getAllByTestId('button');
        expect(btnList).toHaveLength(1)
    })
    it('render 2 buttons after button click', async() => {
        await act(async ()=>{
            const {getAllByTestId} = render(<ButtonThree/>)
            const btnList = getAllByTestId('button')
                await fireEvent.click(btnList[0])
            expect(getAllByTestId('button')).toHaveLength(2)
        })
    })

})

