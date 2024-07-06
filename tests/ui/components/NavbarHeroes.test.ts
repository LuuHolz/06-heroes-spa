import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../src/auth/context/AuthContext";
import { NavbarHeroes } from "../../../src/ui/components/NavbarHeroes"


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom');
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en NavbarHeroes', () => { 

    const contextValue = {  
        logged: true,
        user: {
            name: 'Luciana'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('Debe de mostrar el nombre del usuario ', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <NavbarHeroes/>
            </MemoryRouter>
            </AuthContext.Provider>

            //tiene que existir el texto "Luciana"
            expect( screen.getAllByText('Luciana') ).toBeTruthy();
        );
      
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el boton ', () => {
      
        render(
            <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <NavbarHeroes/>
            </MemoryRouter>
            </AuthContext.Provider>

            //tiene que existir el texto "Luciana"
            expect( screen.getAllByText('Luciana') ).toBeTruthy();
        );

        //boton
        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        //que haya sido llamado una vez
        expect( contextValue.logout ).toHaveBeenCalled();

        expect( contextValue.logout ).toHaveBeenNthCalledWith('/login', {"replace": true});

    });
    
 });