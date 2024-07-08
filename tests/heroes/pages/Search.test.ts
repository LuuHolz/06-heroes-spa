import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en Search', () => { 

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <Search/>
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
      
    });


    //hice la busqueda de BATMAN en el navegador e hice las pruebas
    test('Debe de mostrarse a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?=batman']}>
                <Search/>
            </MemoryRouter>
        );

        //valor del input
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('Batman');
        
        //que se muestre la imagen de Batman
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        //alert y su estilo 'none'
        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');
    });

    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
      
        render(
            <MemoryRouter initialEntries={['/search?=batman123']}>
                <Search/>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');
    });
    

    test('Debe de llamar el navigate a la pantalla nueva', () => {
      

        render(
            <MemoryRouter initialEntries={['/search']}>
                <Search/>
            </MemoryRouter>
        );

        //con el const tengo acceso a analizar el input, el form y despues hago el evento
        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: 'superman'}});

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');
    });
    
 });