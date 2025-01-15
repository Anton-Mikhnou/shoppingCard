import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonAdd from "./ButtonAdd";

describe('ButtonAdd', () => {
    it('should render a button with the text +', () => {
        render(<ButtonAdd handleAddCount={() => {}}/>);

        const button = screen.getByRole('button', {name: '+'});

        expect(button).toBeInTheDocument();
    })

    it('should call the handleAddCount when clicked', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup(); 
        render(<ButtonAdd handleAddCount={onClick}/>);

        const button = screen.getByRole('button', {name: '+'});

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    })

    it('should not call the handleAddCount when it isnt clicked', async () => {
        const onClik = vi.fn();
        render(<ButtonAdd handleAddCount={onClik}/>);

        expect(onClik).not.toHaveBeenCalled();
    })
})