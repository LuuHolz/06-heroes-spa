import { types } from "../../../src/auth/types/types";

describe('Pruebas en "Types', () => { 

    test('Debe de regresar estos types', () => {

        //espero que esos tipos sean igual al objeto, mismas propiedades, valores, mismos nombres
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    });

 });