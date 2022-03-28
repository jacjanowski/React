import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
    }

    if(+enteredAge < 1){
        return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card classNameProp={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" value={enteredUserName} id="username" onChange={usernameChangeHandler}/>

        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>

        <Button type="submit" id="username">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
