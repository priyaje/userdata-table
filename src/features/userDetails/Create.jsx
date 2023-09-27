import React, { useState } from "react";
import { createUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Create = () => {
  const [uname, setName] = useState("");
  const [uemail, setEmail] = useState("");
  const [uaddress, setAddress] = useState("");
  const [uphone, setPhone] = useState();

  const user = useSelector((state) => state.users);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        id: user[user.length - 1].id + 1,
        uname,
        uemail,
        uaddress,
        uphone,
      })
    );
    navigate("/");
  };

  return (
    <div>
        <br/>
      <h2>Create new user details:</h2>
      <br/>
      <Container>
        <Wrapper>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={uname}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={uemail}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          onChange={addressChangeHandler}
          value={uaddress}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          onChange={phoneChangeHandler}
          value={uphone}
        />

        <button style={{marginLeft:'1em', backgroundColor:'lightPink', cursor:'pointer',borderRadius:'5px', width:'3rem'}}>save</button>
      </form>
      </Wrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 50px;
  width: 60%;
  background-color: #9bb36d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left:10%;
  border-radius:10px;
`;

const Wrapper = styled.div`
  height: 30px;
`;



export default Create;