import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBuy from "./ButtonBuy";

describe('ButtonBuy component', () => {
    it('should render a button with the text Add to Cart', () => {
        render(<ButtonBuy handleBuy={() => {}}/>);

        const button = screen.getByRole('button', {name: /add to cart/i});

        expect(button).toBeInTheDocument();
    })

    it('should call the handleBuy when clicked', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup(); 
        render(<ButtonBuy handleBuy={onClick}/>);

        const button = screen.getByRole('button', {name: /add to cart/i});

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    })

    it('should not call the handleBuy when it isnt clicked', async () => {
        const onClik = vi.fn();
        render(<ButtonBuy handleBuy={onClik}/>);

        expect(onClik).not.toHaveBeenCalled();
    })
})