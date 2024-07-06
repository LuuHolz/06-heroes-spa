import { render, screen } from "@testing-library/react";
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from "../../src/auth/context/AuthContext";



describe('Pruebas en <PrivateRoute />', () => { 

    test('Debe de mostrar el children si está autenticado', () => {

            //asegurarme que el locals haya sido llamado con 'lastPath'
            Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Luciana'
            }
        };

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });


    
    
 });