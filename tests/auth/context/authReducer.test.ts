import { authReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';


describe('Pruebas en authReducer', () => { 

    test('Debe de regresar el estado por defecto', () => {
      
        //estado inicial
        const state = authReducer({ logged: false}, {});
        expect( state ).toEqual( { logged: false} );
    });
    
    test('Debe de (login) llamar el login autenticar y establecer el user', () => {
      
        const action = {
            type: types.login,
            payload: {
                name: 'Luciana',
                id: '1232'
            }
        }

        const state = authReducer({ logged: false }, action );
        expect( state ).toEqual({ 
            logged: true,
            user: action.payload
        })

    });
    
    test('Debe de (logout) borrar el name del usuario y logged en false', () => {
      
        const state = {
            logged: true,
            user: { id: '123', name: 'Luciana' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        // console.log(newState)

        expect( newState ).toEqual({ logged: false, user: null });

    });
 })