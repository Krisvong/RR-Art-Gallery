// Define a React functional component named Gallery that accepts props as its argument
const Gallery = (props) => {
    // Render a div element with a width of 100%
    return (
        <div style={{'width': '100%'}}>
            {/* Render an img element with a maxWidth of 100vw, a source of the objectImg prop, and an alt attribute of the title prop */}
            <img style={{'maxWidth': '100vw'}} src={props.objectImg} alt={props.title} />
        </div>
    )
}

// Export the Gallery component as the default export of this module
export default Gallery
