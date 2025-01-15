import { render, screen } from '@testing-library/react';
import ButtonPrev from './ButtonPrev';
import userEvent from '@testing-library/user-event';

describe('ButtonPrev component', () => {
    it('should be render ButtonPrev without text', () => {
        render(<ButtonPrev handlePrev={() => {}} />);

        const button = screen.getByRole('button', { name: '' });

        expect(button).toBeInTheDocument();
    });

    it('should call the handlePrev when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<ButtonPrev handlePrev={onClick} />);

        const button = screen.getByRole('button', { name: '' });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it('should not call the havleNext when not clicked', async () => {
        const onClick = vi.fn();
        render(<ButtonPrev handlePrev={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});
