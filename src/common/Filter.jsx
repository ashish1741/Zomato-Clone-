import React from 'react'

function Filter({deliveryFilterList}) {
  return (
    <div className="filter-container">
      {
        deliveryFilterList &&  deliveryFilterList.map((ele) => {
          return (
            <div className="Filter-Btn" key={ele.id}>
            
              <button>{ele.title}</button>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default Filter