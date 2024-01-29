// Posible mensaje de error
// Dependiendo del editor que estés usando, podrías recibir un mensaje de error en este punto:
// Captura de pantalla de vs code mostrando un error de eslint: "name is missing in props validation"
// Este realmente no es un error, es una advertencia causada por la herramienta ESLint. Tu puedes silenciar la advertencia react/prop-types añadiendo la siguiente línea al archivo .eslintrc.cjs

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>{course}</h1>
      {/* <h1>{props.course}</h1>   */}
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p> {part1} {exercises1} </p>
      <p> {part2} {exercises2} </p>
      <p> {part3} {exercises3} </p>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}


const App = () => {
  
  
  return (
    <div>
      <Header/>
      <Content/>
      <Total/>
      
    </div>
  )
}

export default App


