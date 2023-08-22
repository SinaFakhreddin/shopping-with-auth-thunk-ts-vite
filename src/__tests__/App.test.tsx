// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from "./../App"
import MyCartComponent from "../components/cart";
import Dashboard from "../components/dashboard";

// Tests
describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(
            <Dashboard/>
        );
        const h1 = await screen.queryByText('dashboard');

        // Expectations
        expect(h1).not.toBeNull();
    });
});