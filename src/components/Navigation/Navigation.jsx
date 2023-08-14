// export default function Navigation({  onClose }) {
//     const { isLoggedIn } = useAuth();
//     const [showElement, setShowElement] = useState(() => {
//       const storedValue = localStorage.getItem('showElement');
//       return storedValue !== null ? JSON.parse(storedValue) : false;
//     });

//     useEffect(() => {
//       function handleResize() {
//         setShowElement(window.innerWidth <= 768);
//         console.log(window.innerWidth);
//       }

//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);

//     useEffect(() => {
//       localStorage.setItem('showElement', JSON.stringify(showElement));
//     }, [showElement]);

//     const path = useLocation().pathname;

//     const isOnMovies = (path === '/movies' || path === '/movies/saved')

//     return (
//       <>
//         {!isLoggedIn ? (
//           <nav className='nav-auth'>
//             <ul className='nav-auth__list'>
//               <li className='nav-auth__list-item'>
//                 <Link className='link nav-auth__link' to='/sign-up'>
//                   Регистрация
//                 </Link>
//               </li>
//               <li className='button nav-auth__list-item'>
//                 <Link className='nav-auth__link nav-auth__link_login' to='/sign-in'>
//                   Войти
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         ) : (
//           <>
//             {!showElement ? (
//               <nav className='nav-auth nav-auth_type_login'>
//                 <ul className='nav-auth__list nav-auth__list_type_login'>
//                   <div className='nav-auth__films'>
//                     <li className='nav-auth__list-item'>
//                       <NavLink className={({ isActive }) =>
//                         isActive ? `${isOnMovies ? 'nav-auth__link-black' : 'link'} nav-auth__link nav-auth__link_type_active` : `${isOnMovies ? 'nav-auth__link-black' : 'link'} nav-auth__link`}
//                         to='/movies'>
//                         Фильмы
//                       </NavLink>
//                     </li>
//                     <li className='nav-auth__list-item'>
//                       <NavLink className={({ isActive }) =>
//                         isActive ? `${isOnMovies ? 'nav-auth__link-black' : 'link'} nav-auth__link nav-auth__link_type_active` : `${isOnMovies ? 'nav-auth__link-black' : 'link'} nav-auth__link`}
//                         to='/movies/saved'>
//                         Сохраненные фильмы
//                       </NavLink>
//                     </li>
//                   </div>
//                   <li className='nav-auth__list-item'>
//                     <NavLink className={`${isOnMovies ? 'nav-auth__link-black' : 'link' } nav-auth__link nav-auth__link_type_acc-btn`} to='/profile'>
//                       Аккаунт
//                       <img className='nav-auth__acc-image' src={AccountIcon} alt='Иконка профиля'/>
//                     </NavLink>
//                   </li>
//                 </ul>
//               </nav>
//             ) : (
//               <button type='button' className='button nav-auth__popup-button' onClick={onClose}><img className='nav-auth__popup-img' src={PopupImage} alt='Иконка меню' /></button>
//             )
//             }
//           </>
//         )}
//       </>
//     );
//   };
import React from 'react';
import { Link } from 'react-router-dom';
import "../Navigation/Navigation.css"

function Navigation() {
  return (
    <div className='nav__link_contaner'>
      <Link to="/movies" className="nav__link__one">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="nav__link_two">
        Сохраненные фильмы
      </Link>
      <Link to="/profile" className="nav__link_three">
        Аккаунт
      </Link>
    </div>
  );
}

export default Navigation;