import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
    provider: string;
    date: Date;
}

class CreateAppointmentService {

    public async execute( { date, provider }:Request): Promise<Appointment>{

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmendDate = startOfHour(date)

   const findAppointmentsInSameDate = await appointmentsRepository.findByDate(appointmendDate);

    if (findAppointmentsInSameDate) {
        throw Error('Esse horario nao esta disponivel');

    }

   const appointment = appointmentsRepository.create( { provider, date: appointmendDate});

   await appointmentsRepository.save(appointment);

   return appointment;
    }
}

export default CreateAppointmentService;
