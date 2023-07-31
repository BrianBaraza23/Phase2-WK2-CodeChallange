import React, { useEffect, useState } from "react";
import MoringaBotsArmy from "./MoringaBotArmy";
import BotList from "./BotList";

function Robots() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  function addBotToArmy(bot) {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot]);
    }
  }
  
  function removeFromYourBots(bot) {
    setYourBots((yourBots) => yourBots.filter((yourBot) => yourBot.id !== bot.id));
  }

  function handleDelete(bot) {
    fetch(`http://localhost:4000/bots/${bot.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setBots((bots) => bots.filter((botss) => botss.id !== bot.id));
      removeFromYourBots(bot);
    });
  }

  return (
    <div>
      <MoringaBotsArmy
        yourBots={yourBots}
        addBotToArmy={removeFromYourBots}
        handleDelete={handleDelete}
      />
      <BotList
        bots={bots}
        addBotToArmy={addBotToArmy}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Robots;
