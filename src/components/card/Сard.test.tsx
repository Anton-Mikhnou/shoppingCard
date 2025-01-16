import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../modules/cartSlice"; 
import Card from "./Card";
import userEvent from "@testing-library/user-event";
import * as hooks from '../../app/hooks';

const mockStore = configureStore({
    reducer: {
      cart: cartReducer,
    },
});

const mockDispatch = vi.spyOn(hooks, 'useAppDispatch');
const mockSelector = vi.spyOn(hooks, 'useAppSelector');

describe('Card component', () => {
    it('render card', () => {
    
        render(
            <Provider store={mockStore}>
                <Card title="Product" price={100} url="../../public/img/970743.webp" id={1}/>
            </Provider>
        );

        const headingTwo = screen.getByRole('heading',{level: 2});
        expect(headingTwo).toHaveTextContent(/product/i);

        const headintTrird = screen.getByRole('heading', {level: 3});
        expect(headintTrird).toHaveTextContent(/100/i);

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', '../../public/img/970743.webp');

        screen.debug();
        
    });

    it('should dispatch action when "+" button is clicked', async () => {
        const user = userEvent.setup();
        const dispatch = vi.fn()
        mockDispatch.mockReturnValue(dispatch);
        mockSelector.mockReturnValue([
            { id: 1, quality: 2 }, 
        ]);
        
        render(
            <Provider store={mockStore}>
                <Card title="Product" price={100} url="../../public/img/970743.webp" id={1}/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name: /\+/i}));

        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch).toHaveBeenCalledWith({type: 'counter/increment', payload: 1})
        expect(dispatch).toHaveBeenCalledWith({type: 'cart/incrementQuality', payload: 1})
    })

    it('should dispatch action when "-" button is clicked', async () => {
        const user = userEvent.setup();
        const dispatch = vi.fn()
        mockDispatch.mockReturnValue(dispatch);
        mockSelector.mockReturnValue([
            { id: 1, quality: 2 }, 
        ]);
        
        render(
            <Provider store={mockStore}>
                <Card title="Product" price={100} url="../../public/img/970743.webp" id={1}/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name: '-'}));

        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch).toHaveBeenCalledWith({type: 'counter/decrement'});
        expect(dispatch).toHaveBeenCalledWith({type: 'cart/decrementQuality', payload: 1});
    })


    it('should dispatch action when "ButtonBuy" button is clicked', async () => {
        const user = userEvent.setup();
        const dispatch = vi.fn()
        mockDispatch.mockReturnValue(dispatch);
        mockSelector.mockReturnValue([]);

        const data = {
            id: 1,
            title: 'Product',
            url: '../../public/img/970743.webp',
            price: 100,
            quality: 1,
        }
        
        render(
            <Provider store={mockStore}>
                <Card title="Product" price={100} url="../../public/img/970743.webp" id={1}/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name: /add to cart/i}));

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({type: 'counter/increment', payload: 1});
        expect(dispatch).toHaveBeenCalledWith({type: 'cart/addToCart', payload: data});
    })

    it('should dispatch action when "Delete" button is clicked', async () => {
        const user = userEvent.setup();
        const dispatch = vi.fn()
        mockDispatch.mockReturnValue(dispatch);
        const data = {
            id: 1,
            title: 'Product',
            url: '../../public/img/970743.webp',
            price: 100,
            quality: 1,
        }
        mockSelector.mockReturnValue([data]);

        
        render(
            <Provider store={mockStore}>
                <Card title="Product" price={100} url="../../public/img/970743.webp" id={1}/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name: /delete/i}));

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({type: 'counter/decrement', payload: data.quality});
        expect(dispatch).toHaveBeenCalledWith({type: 'cart/deleteCart', payload: data.id});
    });
})



