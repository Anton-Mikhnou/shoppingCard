import { render, screen } from "@testing-library/react";
import ButtonDiminish from "./ButtonDiminish";
import userEvent from "@testing-library/user-event";

describe('ButtonDiminish component', () => {
    it('should render ButtonDiminish with text -', () => {
        render(<ButtonDiminish handleSabtractCount={() => {}}/>);

        const button = screen.getByRole('button', {name: /-/i})

        expect(button).toBeInTheDocument();
    })

    it('should call the handleSabtractCount when clicked', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<ButtonDiminish handleSabtractCount={onClick}/>);

        const button = screen.getByRole('button', {name: /-/i})

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    }) 

    it('should not call the handleSabtractCount when not clicked', async () => {
        const onClick = vi.fn();
        render(<ButtonDiminish handleSabtractCount={onClick}/>);

        expect(onClick).not.toHaveBeenCalled();
    }) 
})