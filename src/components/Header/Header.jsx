import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import { Button } from 'antd';
const Header = () => {

  




  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <SearchForm />
        <h1 className="text-white header-title ls-2">
          Fresh And <p className='text-orange'>Organic</p> Products For You
        </h1>
        <p className="text-uppercase text-white my-3 ls-1 text-gray">
          Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It
          Has Roots In A Piece Of <br /> Classical Latin Literature From 45 BC,
          Making It Over 2000 Years Old
        </p>

<Button>Shop Now</Button>

      </div>
    </header>
  );
}

export default Header