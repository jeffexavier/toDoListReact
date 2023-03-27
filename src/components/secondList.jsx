import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default ItemsList;