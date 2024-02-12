type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatra = pacientes.filter((paciente) => paciente.especialidad === 'Pediatra');
    return pacientesPediatra;
  };

  const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);

  console.log(pacientesPediatria);

  
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatraDiez = pacientes.filter((paciente) => paciente.especialidad === 'Pediatra' && paciente.edad < 10);
    return pacientesPediatraDiez;
  };

  const pacientesPediatriaDiez = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);


  console.log(pacientesPediatriaDiez)


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {  
    return pacientes.some((paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39)
  };

  const pacienteUrgencias = activarProtocoloUrgencia(pacientes)

  console.log(pacienteUrgencias)


const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.map(paciente => {
        if(paciente.especialidad === 'Pediatra'){
            return{...paciente, especialidad: 'Medico de familia'}
        }
        return paciente;
});
};

  const pacienteReasignado = reasignaPacientesAMedicoFamilia(pacientes)
  console.log(pacienteReasignado)



const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.every((paciente) => paciente.especialidad === 'Pediatra')
  };

const pacientesPeatria = HayPacientesDePediatria(pacientes)

console.log(pacientesPeatria)


interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let conteoEspecialidades: NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    };

    pacientes.filter(paciente => {
        if(paciente.especialidad==='Pediatra'){
            conteoEspecialidades.pediatria++
        } else if (paciente.especialidad==='Cardiólogo'){
            conteoEspecialidades.cardiologia++
        } else if(paciente.especialidad==='Medico de familia'){
            conteoEspecialidades.medicoDeFamilia++
        }
    });

    return conteoEspecialidades;
};

const pacientesPorEspecialidad = cuentaPacientesPorEspecialidad(pacientes);

console.log(`Pacientes de:
Pediatría: ${pacientesPorEspecialidad.pediatria},
Médico de Familia: ${pacientesPorEspecialidad.medicoDeFamilia},
Cardiología: ${pacientesPorEspecialidad.cardiologia}`);
