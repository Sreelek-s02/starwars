import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharList from './CharList';  // or whatever the location is
import CharDetails from './CharDetails/CharDetails'; // or whatever the location is
import FavoritesView  from './FavoritesView/FavoritesView';

export default () => (
<BrowserRouter>
    <Routes>
      <Route exact path="/" component={CharList}/>
      <Route path="/charDetails" component={CharDetails}/>
      <Route path="/favoritesView" component={FavoritesView}/>
    </Routes>
</BrowserRouter>
);