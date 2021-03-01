import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs} from '../../const';

const TabsList = () => {
  const activeTab = `Deatails`;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Tabs.map((tab) => (
          <li className={`movie-nav__item` + (activeTab === tab ? ` movie-nav__item--active` : ``)} key={tab}>
            <Link className="movie-nav__link" to="/">{tab}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabsList;
