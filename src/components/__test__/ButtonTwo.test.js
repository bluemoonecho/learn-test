import React from 'react'
import ButtonTwo from './../ButtonTwo'
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'

afterEach(cleanup);
it('renders without crashing', () =>{
    const div = document.createElement('div')
    render(<ButtonTwo/>, div)
})

it('renders button correctly', ()=>{
    const {getByTestId} =  render(<ButtonTwo label='save'/>)
    expect(getByTestId('button')).toHaveTextContent('save')
})

it('matches snapshot 1', ()=>{
    const tree = renderer.create(<ButtonTwo label='save'></ButtonTwo>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches snapshot 2', ()=>{
    const tree = renderer.create(<ButtonTwo label='click me please'></ButtonTwo>).toJSON();
    expect(tree).toMatchSnapshot();
})
