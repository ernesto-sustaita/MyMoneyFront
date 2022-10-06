import './App.css';
import {useState, useEffect} from "react";
import { Account } from './api/account'; 

const accountController = new Account();

export default function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    (async () =>{
      const response = await accountController.obtain(); 
      setAccounts(response);  
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>MyMoney</p>
        <span>Accounts</span>
        <pre>
          {JSON.stringify(accounts, undefined,1)}
        </pre>
      </header>
    </div>
  );
};
