import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Greetings from './Greetings'

test('render greeting message with given name',()=>{
    //arrange
    const name = "hello" ;

    //act
    render(<Greetings name={name}/>);

    //assert
    const greetingText = screen.getByText(`Hello ${name}`);
    expect(greetingText).toBeInTheDocument();

})