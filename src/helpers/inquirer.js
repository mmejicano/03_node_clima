import inquirer from "inquirer";
import "colors";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    choices: [
      { value: 1, name: `1. Buscar ciudad` },
      { value: 2, name: `2. Historial` },
      { value: 0, name: `0. Salir` }
    ]
  }
];

export const menuOptions = async () => {
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

export const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message
    }
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

export const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ];
  const { enter } = await inquirer.prompt(question);
  return enter;
};


export const listarLugares = async(lugares = []) => {
  const choices = lugares.map((lugar,i) => {
    const idx = `${i+1}`.green
    return {
      value: lugar.id,
      name: `${idx} ${lugar.nombre}`
    }
  })
  choices.unshift({
    value: '0',
    name: '0.'.green+ 'Cancelar'
  })
  const preguntas = [
    {type: 'list', name: 'id', message: 'Seleccione un lugar', choices}
  ]

  const {id} = await inquirer.prompt(preguntas)
  return id
}