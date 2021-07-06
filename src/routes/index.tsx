import React, { useContext } from 'react';

import { StackRoutes } from './Stack.routes';
import AuthRoutes from './Auth.routes';

import { AuthContext } from '../context/Auth'



const Routes: React.FC = () => {

    const { signed } = useContext(AuthContext)

    return signed ? <AuthRoutes /> : <StackRoutes />;

}

export default Routes;