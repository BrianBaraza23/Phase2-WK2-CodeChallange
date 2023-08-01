import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function Robots() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    fetch("https://bot-battlr-data-base.onrender.com/bots")
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
    fetch(`https://bot-battlr-data-base.onrender.com/bots/${bot.id}`, {
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
      <YourBotArmy
        yourBots={yourBots}
        addBotToArmy={removeFromYourBots}
        handleDelete={handleDelete}
      />
      <BotCollection
        bots={bots}
        addBotToArmy={addBotToArmy}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Robots;
