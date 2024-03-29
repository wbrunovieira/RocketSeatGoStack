import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

import AppError from '../errors/AppError'

interface Request {
    provider_id: string;
    date: Date;
}

class CreateAppointmentService {

    public async execute( { date, provider_id }:Request): Promise<Appointment>{

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmentDate = startOfHour(date)

   const findAppointmentsInSameDate = await appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentsInSameDate) {
        throw new AppError('Esse horario nao esta disponivel');

    }

   const appointment = appointmentsRepository.create( { provider_id, date: appointmentDate,});

   await appointmentsRepository.save(appointment);

   return appointment;
    }
}

export default CreateAppointmentService;
