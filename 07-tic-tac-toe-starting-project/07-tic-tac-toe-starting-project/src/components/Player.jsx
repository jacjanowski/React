import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [playerName, setEditablePlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      // Save the name when editing is done
      onNameChange(symbol, playerName);
    }
  }
  function handleNameChange(event) {
    setEditablePlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        onChange={handleNameChange}
        value={playerName}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
