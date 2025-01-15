import { render, screen } from '@testing-library/react';
import ButtonNext from './ButtonNext';
import userEvent from '@testing-library/user-event';

describe('ButtonNext component', () => {
    it('should be render ButtonNext without text', () => {
        render(<ButtonNext handleNext={() => {}} />);

        const button = screen.getByRole('button', { name: '' });

        expect(button).toBeInTheDocument();
    });

    it('should call the handleNext when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<ButtonNext handleNext={onClick} />);

        const button = screen.getByRole('button', { name: '' });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it('should not call the havleNext when not clicked', async () => {
        const onClick = vi.fn();
        render(<ButtonNext handleNext={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});
