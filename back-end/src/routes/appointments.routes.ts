import { Router } from "express";
import {uuid} from 'uuidv4'

const appointmentRouter = Router();

const appointments = []; // inicialmente vamos salvar os agendamentos dentro de um vetor ate definir as rotas, depois sera feita a persistencia no banco de dados

appointmentRouter.post('/', (request, response) => {
    const {provider, date} = request.body;// dados necessarios para criar um agendamento

    const appointment = {
        id:uuid(),
        provider,
        date,
    }

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentRouter;