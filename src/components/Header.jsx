import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMathRoute = (route) => {
    if (route === location.pathname) {
        return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" 
                    className='h-5 cursor-pointer' onClick={() => navigate('/')}
                />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMathRoute('/') && "text-black border-b-red-500"}`}
                        onClick={() => navigate('/')}>
                        Accueil
                    </li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMathRoute('/offres') && "text-black border-b-red-500"}`}
                        onClick={() => navigate('/offres')}>
                        Offres
                    </li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMathRoute('/connexion') && "text-black border-b-red-500"}`}
                        onClick={() => navigate('/connexion')}>
                        Se connecter
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header;
