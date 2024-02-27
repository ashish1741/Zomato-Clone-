import React from 'react'

function OptionItem({activePage, setActivePage}) {
  return (
    <div>
      <button onClick={() => {setActivePage("NightLife")}}>Click</button>
    </div>
  )
}

export default OptionItem