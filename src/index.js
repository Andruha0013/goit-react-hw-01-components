import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from 'components/App';
//import { Profile } from 'components/Profile/Profile';
import { Container } from 'components/Container/Container';
import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';

import MyJson from './data/user.json';
import Data from "./data/data.json";
import Friends from "./data/friends.json";
import Transactions from "./data/transactions.json";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container 
    element={
      <Profile 
        username={MyJson.username}
        avatar={MyJson.avatar}
        tag={MyJson.tag}
        location={MyJson.location}
        stats={MyJson.stats}
      />
    }/>
    <Statistics
      stats={Data}
      title={"Upload stats"}
    />
    <FriendList
      friends={Friends}
    />
    <Container
      element={
      <TransactionHistory
      data={Transactions}
      />
    }
      bgWhite={true}
    />
  </React.StrictMode>
);
