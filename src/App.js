import React from 'react';
import './App.css';

const App = () => {

  const renderHeader = () => {
    return (
      <div className='header'>
        <button className='menu_button'>Пункт меню 1</button>
        <button className='menu_button'>Пункт меню 2</button>
        <button className='menu_button'>Пункт меню 3</button>
      </div>
    )
  }

  const renderFooter = () => {
    return(
      <div className='footer'>
         <strong>Это делал не Денис Охотников © 2022</strong>
      </div>
    )
  }

  const renderMain = () => {
    return(
      <table className='table'>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </thead>
        <tbody>
          <td>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/1535103/pub_60b652dade903c65f526eead_60b65432f073137351c9478c/scale_1200" 
            width={300} 
            height={100} 
            alt="кто"
            />
          </td>
          <td>19</td>
          <td>Male</td>
        </tbody>
        <tbody>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tbody>
        <tbody>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tbody>
      </table>
    )
  };

  return( 
    <div>
      {renderHeader()}
      {renderMain()}
      {renderFooter()}
    </div>
  )
}

export default App;