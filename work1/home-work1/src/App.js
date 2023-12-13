import React from 'react';
import image from './winter.jpg';
import './App.css';

function App() {

  const elementH = React.createElement('h2', null, 'Зима');
  const elementP = React.createElement('p', null, ' Основна ознака цієї пори року — низька стійка температура (нижче 0 градусів за Цельсієм) у багатьох районах Землі, на поверхню землі випадає і лягає сніг.');
  const elementI = React.createElement('img', {src: image});

  return (
    <>
      <h2>Зима</h2>
      <p>
        Основна ознака цієї пори року — низька стійка температура (нижче 0 градусів за Цельсієм) у багатьох районах Землі, на поверхню землі випадає і лягає сніг.
      </p>
      <img  src={image} alt="logo"/>

      {elementH}
      {elementP}
      {elementI}
    </>
  );
}

export default App;