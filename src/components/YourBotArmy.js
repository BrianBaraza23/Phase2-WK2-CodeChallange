import React from "react";
import CardRender from "./CardRender";

function YourBotArmy({ yourBots, addBotToArmy, handleDelete }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBots.map((bot) => (
            <CardRender
              key={bot.id} 
              bot={bot}
              handleAdd={addBotToArmy}
              handleDelete={handleDelete}
            />
          ))}
          <b>Moringa Bot Army</b>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
