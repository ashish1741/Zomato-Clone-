import React from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantMenu } from '../data';

function CardDetail() {
  const { id } = useParams();
  const dataIndex = id - 1;

  // Check if dataIndex is a valid index for RestaurantMenu
  if (dataIndex >= 0 && dataIndex < RestaurantMenu.length) {
    const data = RestaurantMenu[dataIndex];
    console.log('data is', data);
  } else {
    console.log(`Invalid id: ${id}`);
  }

  return <div>CardDetail</div>;
}

export default CardDetail;
