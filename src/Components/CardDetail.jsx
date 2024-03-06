import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantMenu } from '../data';

function CardDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataIndex = id - 1;
    if (dataIndex >= 0 && dataIndex < RestaurantMenu.length) {
      setData(RestaurantMenu[dataIndex]);
    } else {
      console.log(`Invalid id: ${id}`);
    }
  }, [id]);

  return (
    <div className='max-width'>
      {data && (
        <div className="card-details container">
          <div className="banner">
            <img src={data.img} alt={data.img} style={{width: '70%', height: '50%', borderRadius: '10px', objectFit: 'cover', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s ease'}} />
            <div className="info">
              <h1>{data.name}</h1>
              <span>{data.menu[0].rate} *</span>
            </div>
            <div className="location">
              <h3>{data.address}</h3>
              <p>{data.distance} 🚚</p>
              <span>{data.status}</span>
            </div>
          </div>
          <div className="resturentDetails">
            <div className="menu">
              <h1>This is menu</h1>
            </div>
            <div className="review">
              <h1>This is review</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetail;
