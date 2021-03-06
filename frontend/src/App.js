import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Beer from './components/Beer';



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route path="/beers">
          <Beer />
        </Route>
      </Switch>
    )}

  </>
);
}














//     <header>
//       <div className='navi'>
//         <div className='logo'>TAPP-IN</div>
//         <div className='thepub'>The Pub</div>
//         <div className='toprated'>Top Rated</div>
//         <div className='supporters'>Supporters</div>
//         <div className='help'>Help</div>
//         <div className='profilepic'>
//         <div>
//             <a href='https://dosequis.com/beers-and-recipes/?utm_source=google&utm_medium=cpc&utm_campaign=DosEquis_Brand_Exact&utm_term=dos%20equis&pkw=dos%20equis&locationID=9032882&interestID=&gclid=CjwKCAiAzNj9BRBDEiwAPsL0d5bBH_3z4AxYsIEkIINQKsQANjUkPWtRftlyh-SQxVQPKhrsYjCNOxoCaLEQAvD_BwE'>
//               <img src='https://i.imgur.com/ALE7wiT.jpg' alt='Profile Picture'/>
//             </a>
//           </div>
//         </div>
//         <div className='searchbar'>
//           <input type='text' placeholder='Find a beer, brewery 🔍' />
//         </div>
//       </div>
//       <Switch>
//         <Route path='/login'>
//           <LoginFormPage />
//         </Route>
//         <Route path='/signup'>
//           <SignUpFormPage />
//         </Route>
//       </Switch>
//     </header>
//   );
// }

export default App;
