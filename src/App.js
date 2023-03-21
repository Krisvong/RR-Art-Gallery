import { useState, useEffect } from 'react'
import './App.css';
import Gallery from './components/Gallery'
import ButtonBar from './components/ButtonBar'

function App() {
  // Define state variables using the useState hook
  let [data, setData] = useState({})
  let [objectId, setObjectId] = useState(12770)

  // Use the useEffect hook to fetch data from an API endpoint when objectId changes
  useEffect(() => {
    // Set the title of the page
    document.title='Welcome to ArtWorld'
    // Fetch data from the API endpoint using the objectId variable
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
      .then(response => response.json())
      .then(resdata => setData(resdata))
  }, [objectId])

  // Define a function to handle the iteration of the objectId variable
  const handleIterate = (e) => {
    // Update the objectId variable by adding the value of the clicked button
    setObjectId(objectId + Number(e.target.value))
  }

  // Define a function to display the image in the Gallery component
  const displayImage = () => {
    // Check if there is a primary image in the fetched data
    if(!data.primaryImage) {
      // If there is no primary image, display a message
      return (
        <h2>No Image!</h2>
      )
    }
    // If there is a primary image, render the Gallery component with the image and title data
    return (
      <Gallery objectImg={data.primaryImage} title={data.title} />
    )
  }

  // Render the App component with the Gallery component and ButtonBar component
  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{'width': '100%'}}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;

