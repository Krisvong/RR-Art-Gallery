// Define a React functional component named ButtonBar that accepts props as its argument
const ButtonBar = (props) => {
  // Render a div element containing four buttons with values of -5, -1, 1, and 5, respectively, each of which invokes the handleIterate function passed in through props when clicked
  return (
    <div>
      <button value={-5} onClick={props.handleIterate}>Way Back</button>
      <button value={-1} onClick={props.handleIterate}>Back</button>
      <button value={1} onClick={props.handleIterate}>Next</button>
      <button value={5} onClick={props.handleIterate}>Big Next</button>
    </div>
  )
}

// Export the ButtonBar component as the default export of this module
export default ButtonBar

