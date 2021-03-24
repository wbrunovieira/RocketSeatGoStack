import { startOfHour } from 'date-fns'

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository){
        this.appointmentsRepository = appointmentsRepository;
    }
    public execute( { date, provider }:Request): Appointment{
        const appointmendDate = startOfHour(date)

   const findAppointmentsInSameDate = this.appointmentsRepository.findByDate(appointmendDate);

    if (findAppointmentsInSameDate) {
        throw Error('Esse horario nao esta disponivel');

    }

   const appointment = this.appointmentsRepository.create( { provider, date: appointmendDate})

   return appointment;
    }
}

export default CreateAppointmentService;
