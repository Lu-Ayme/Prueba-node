let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }]
  estudiantes.push({
    nombre: "Juan",
    promedio: 5,
    curso:"iOS",
  }),
  estudiantes.push({
    nombre:"Miguel",
    promedio:2,
    curso:"Android"
  })
  console.log(estudiantes)


  let estudiantes2 = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  estudiantes2.unshift({
  nombre:"Mariana",
  promedio:9, 
  curso:"Full Stack", 
  })
  estudiantes2.unshift=({
  nombre:"Francisco", 
  promedio:2, 
  curso:"Android"
  })
  console.log(estudiantes2)