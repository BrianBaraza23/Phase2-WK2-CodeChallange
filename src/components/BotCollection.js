import React from "react";
import CardRender from "./CardRender";

function BotCollection({ bots, addBotToArmy, handleDelete }) {
  console.log(bots);

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <CardRender
            key={bot.id}
            bot={bot}
            handleAdd={addBotToArmy}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
