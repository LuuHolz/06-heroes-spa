import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";

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
    
 });