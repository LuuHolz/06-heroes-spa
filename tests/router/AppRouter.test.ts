import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter} from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";



describe('Pruebas en AppRouter', () => {
    //evaluamos cualquier parte o texto qeu aparezca en el login, con eso alcanza

    test('Debe de mostrar el login si no esta autenticado ', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //espero que la palabra Login aparezca al menos dos veces(2)
        expect( screen.getAllByAltText('Login').length ).toBe(2);
      
    });

    test('Debe de mostrar el login si esta autenticado ', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Luciana',
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

         //espero que la palabra Marvel aparezca al menos una vez(1)
        expect( screen.getAllByAltText('Marvel').length ).toBe(2);
        //otra opcion:
        //espero que la palabra Marvel aparezca al menos una vez o mas >=1
        expect( screen.getAllByAltText('Marvel').length ).toBeGreaterThanOrEqual(1);

      
    });
    
})