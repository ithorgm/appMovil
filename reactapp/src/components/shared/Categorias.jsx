import React from 'react';
import './Categorias.css';

function Categorias() {
  const categorias = [
    { title: 'Por hacer', imageUrl: 'path_to_image1' },
    { title: 'Hechas', imageUrl: 'path_to_image2' },
    { title: 'Pendientes', imageUrl: 'path_to_image3' },
    { title: 'Próximas', imageUrl: 'path_to_image4' },
  ];

  return (
    <div className="categorias-container">
        <h1>categorias</h1>
      {categorias.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.imageUrl} alt={category.title} className="category-image" />
          <h3>{category.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categorias;
