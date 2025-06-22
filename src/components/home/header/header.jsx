import React, { useState, useEffect, use } from 'react';
import {menuIcon, searchIcon, logo, userIcon, shopIcon} from '../../../assets/images';
import Menu from '../header/menu';
import Search from '../header/search';
import ShopBar from '../header/shopBar';
import { Link } from 'react-router-dom';






export default function Header(){
    const [bol, setBol] = useState(false);
    const [boolean, setBoolean] = useState(false);
    const [barBol, setBarBol] = useState(false);
    const openMenu = () => setBol(bol => !bol);
    const openSearch = () => setBoolean(boolean => !boolean);
    const openShopBar = () => setBarBol(barBol => !barBol);

    useEffect(() => {
    if (bol || barBol)
        document.body.classList.add("overflow-hidden");
    else   
        document.body.classList.remove("overflow-hidden");
        
    }, [bol, barBol])


    
   

    return (
        <>
         <header className="flex justify-between relative items-center z-50 bg-white "> 
            <div className='ml-7'>

            <Menu bol={bol} />              
            
            <button 
            className="ml-7  w-8 cursor-pointer hover:opacity-70 transition ease-in-out"
            onClick={openMenu}>
                <img src={menuIcon} alt="menu"/>
            </button>
            
                
            <Search bol={boolean} onClose={() => setBoolean(false)}/>
            <button 
            className="ml-7  w-8 cursor-pointer hover:opacity-70 transition-transform ease-in-out"
            onClick={openSearch}
            >
                <img src={searchIcon} alt="search"/>
            </button>
        </div>
        
        <div>
            <Link to="/"><img className=" p-5 w-28 " src={logo} alt="classical book"/></Link>
        </div>
        
        <div className="flex mr-7">
            <Link
            to="/account" 
            className="mr-8 w-7 cursor-pointer hover:opacity-80 transition-transform ease-in-out" >
                <img src={userIcon} alt="use"/>
            </Link>

            <ShopBar bol={barBol} />

            <button className="mr-8 w-7 cursor-pointer hover:opacity-80 transition-transform ease-in-out" 
            onClick={openShopBar}
            >
                <img src={shopIcon} alt="shop"/>
            </button>
        </div>
        </header>
        
        {(bol || barBol ) && (
                <div
                    className="fixed inset-0 bg-black/10 z-40"
                        onClick={() => {
                            if (bol) setBol(false);
                            if (barBol) setBarBol(false);
                        }}
                        tabIndex={-1}
                        aria-hidden="true"
                />
            )}
    </>
    );
};