import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../modules/cartSlice"; 
import Card from "./Card";

const mockStore = configureStore({
    reducer: {
      cart: cartReducer,
    },
});


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
        
    })
})

describe('Card component function', () => {
    it('')
})
