import React from 'react'

function Filter({deliveryFilterList}) {
  return (
    <div className="filter-container">
      {
        deliveryFilterList &&  deliveryFilterList.map((ele) => {
          return (
            <div className="Filter-Btn">
            
              <button>{ele.title}</button>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default Filter