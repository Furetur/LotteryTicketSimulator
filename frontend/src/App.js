import styles from "./App.module.css";
import Ticket from "./components/Ticket/Ticket";
import React, { useEffect, useState } from "react";
import AskForMoneyDialog from "./components/AskForMoneyDialog/AskForMoneyDialog";

const Pages = {
  LANDING: "landing",
  MONEY: "money",
  TICKET: "ticket",
};

function App() {
  const [money, setMoney] = useState(0);
  const [currentPage, setCurrentPage] = useState(Pages.LANDING);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const getMyMoney = async () => {
      const response = await fetch("/myMoney");
      const text = await response.text();
      setMoney(parseInt(text));
    };
    getMyMoney();
  }, []);

  const buyTicket = async () => {
    setCurrentPage(Pages.TICKET);
    const response = await fetch("/buyTicket", {
      method: "POST",
    });
    if (response.status === 200) {
      const ticket = await response.json();
      setTicket(ticket);
      setMoney(money - 1);
    } else {
      alert("Not enough money");
    }
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Lottery Ticket Simulator</h1>
      <span className={styles.money}>Money: {money}</span>
      <div className={styles.mainContainer}>
        <aside className={styles.aside}>
          <button
            onClick={buyTicket}
            disabled={money < 1}
            className={styles.button}
          >
            Buy ticket
          </button>
          <button
            onClick={() => setCurrentPage(Pages.MONEY)}
            className={styles.button}
            disabled={currentPage === Pages.MONEY}
          >
            Call Mom
          </button>
        </aside>
        <main className={styles.main}>
          {currentPage === Pages.LANDING && (
            <div className={styles.tipContainer}>
              <span className={styles.tip}>Buy a ticket or call your mom</span>
            </div>
          )}
          {currentPage === Pages.MONEY && (
            <AskForMoneyDialog onReceiveMoneyFromMom={setMoney} />
          )}
          {ticket != null && currentPage === Pages.TICKET && (
            <Ticket ticket={ticket} onMoneyUpdate={setMoney} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
