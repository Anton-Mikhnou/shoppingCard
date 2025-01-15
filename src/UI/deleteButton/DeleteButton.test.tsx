import { render, screen } from '@testing-library/react';
import DeleteButton from './DeleteButton';
import userEvent from '@testing-library/user-event';

describe('DeleteButton component', () => {
    it('should be render DeleteButton without text', () => {
        render(<DeleteButton handleDelete={() => {}} />);

        const button = screen.getByRole('button', { name: /delete/i});

        expect(button).toBeInTheDocument();
    });

    it('should call the handleDelete when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<DeleteButton handleDelete={onClick} />);

        const button = screen.getByRole('button', { name: /delete/i });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it('should not call the havleNext when not clicked', async () => {
        const onClick = vi.fn();
        render(<DeleteButton handleDelete={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});
