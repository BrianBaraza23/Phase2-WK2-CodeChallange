import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function CardRender({ bot, handleAdd, handleDelete }) {
  const { id, avatar_url, name, bot_class, catchphrase, health, damage, armor } = bot;

  return (
    <div className="ui column" id={id}>
      <div className="ui card" key={id} id={id} onClick={() => handleAdd(bot)}>
        <div className="image">
          <img alt="oh no!" src={avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {name}
            <i className={botTypeClasses[bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {health}
          </span>
          <span>
            <i className="icon lightning" />
            {damage}
          </span>
          <span>
            <i className="icon shield" />
            {armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button id={id} className="ui mini red button" onClick={() => handleDelete(bot)}>
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardRender;
