import { Router } from 'express';
import { uuid } from 'uuidv4';
import { parseISO, startOfHour, isEqual } from 'date-fns'

const appointmentsRouter = Router();

interface Appointment {
    id: string;
    provider: string;
    date:Date;
}

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date));

    const findAppointmentsInSameDate = appointments.find(appointment => isEqual(parsedDate, appointment.date));

    if (findAppointmentsInSameDate) {
        return response.status(400).json({message: 'Esse horario nao esta disponivel'})
    }

    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };

    appointments.push(appointment);

    return response.json(appointment);
})

export default appointmentsRouter;