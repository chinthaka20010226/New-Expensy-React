import React from 'react';
import SideBar from "./Components/UserSystem/UserSystemComponentsMain/UserSideBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

import UserDashBoard from './Components/UserSystem/UserSystemComponentsSub/UserDashBoardComponents/UserDashBoard.js';
import Analysis from './Components/UserSystem/UserSystemComponentsSub/AnalysisComponents/Analysis.js';
import BankAccount from './Components/UserSystem/UserSystemComponentsSub/BankAccountComponents/BankAccount.js';
import BankCard from './Components/UserSystem/UserSystemComponentsSub/BankCardComponents/BankCard.js';
import Notifications from './Components/UserSystem/UserSystemComponentsSub/NotificationsComponents/Notifications.js';
import Organization from './Components/UserSystem/UserSystemComponentsSub/OrganizationComponents/Organization.js';
import Report from './Components/UserSystem/UserSystemComponentsSub/ReportComponents/Report.js';
import Setting from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsMain/Setting.js';
import Transactions from './Components/UserSystem/UserSystemComponentsSub/TransactionComponents/Transaction.js';

import SettingBank from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsSub/SettingBank.js';
import SettingNotfication from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsSub/SettingNotification.js';
import SettingEmail from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsSub/SettingEmail.js';
import SettingAPI from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsSub/SettingAPI.js';
import SettingTeam from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsSub/SettingTeam.js';
import SettingPassword from './Components/UserSystem/UserSystemComponentsSub/SettingComponents/SettingComponentsSub/SettingPassword.js';

function App() {
  return (
    <Router>
    <SideBar>
      <Routes>
        <Route path="/" element={<UserDashBoard />} />
        <Route path="userDashBoard" element={<UserDashBoard />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="bankAccount" element={<BankAccount />} />
        <Route path="bankCard" element={<BankCard />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="organization" element={<Organization />} />
        <Route path="report" element={<Report />} />
        <Route path="setting" element={<Setting />}>
          {/* <Route index element={<SettingBank />} /> */}
          <Route path="settingBank" element={<SettingBank />} />
          <Route path="settingNotification" element={<SettingNotfication />} />
          <Route path="settingEmail" element={<SettingEmail />} />
          <Route path="settingAPI" element={<SettingAPI />} />
          <Route path="settingTeam" element={<SettingTeam />} />
          <Route path="settingPassword" element={<SettingPassword />} />
        </Route>
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </SideBar>
  </Router>
  );
}

export default App;
