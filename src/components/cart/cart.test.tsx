// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from "./../App"
import MyCartComponent from "../components/cart";
import Dashboard from "../components/dashboard";
import Cart from "./index";
import {Provider} from "react-redux";
import {store} from "../../store/store";

// Tests
describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
       const wrapper = render(
           <Provider store={store}>
            <Cart/>
           </Provider>
        );
        const text = (wrapper.getByTestId("cart-button").textContent)
        expect(text).contains("add to cart")
        // Expectations
        expect(h1).not.toBeNull();
    });
});