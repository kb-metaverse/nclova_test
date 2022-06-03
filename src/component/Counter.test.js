import { render, screen } from "@testing-library/react";


describe('Counter Test' , () => {

    it('should render Counter' , () => {
        render(<Counter/>);

        //두 쿼리 모두 같은 Element 탐색
        screen.getByRole('button' , {name : '+'});
        screen.getByText('+');
    });
});