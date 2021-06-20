import {Router} from 'express';
import appointmentRouter from './appointments.routes';

/**Nesse arquivo contem o import de rotas para cada entidade do sistema.
 * Será feito um arquivo de rota para cada entidade mapeada no sistema e depois importada aqui para depois ser carregada]
 * no arquivo server.ts na raiz do peojeto
 */

const routes = Router();

routes.use('/appointments', appointmentRouter);

export default routes;