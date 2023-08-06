import React from 'react'

function LocationSuggestions({location_data}) {
    return (
    <datalist id="suggestions">
      {location_data.map((location, index)=>(<option key={index} value={location.fields.ascii_name} />))}
    </datalist>
  )
}

export default LocationSuggestions