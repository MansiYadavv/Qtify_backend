// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./components/Page/Home/Home.jsx";
// import Album from "./components/Page/Album/Album.jsx";
// import SongsPage from "./components/Page/Songs/Songs.jsx" ;
// import App from './App.jsx';
// import './index.css';

// const Main = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home showFilters />} />
//           <Route path="album/:albumId" element={<Album />} />
//           <Route path="songs" element={<SongsPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>,
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
