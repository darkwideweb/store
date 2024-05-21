import React from 'react';

function Content() {
  return (
    <div className="content">
    <img src={process.env.PUBLIC_URL + '/icon.png'} alt="Изображение" />
      <p></p>
    </div>
  );
}

export default Content;
