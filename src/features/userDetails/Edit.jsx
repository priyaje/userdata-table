import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./userSlice";
import styled from "styled-components";

const Edit = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users);

  const currentUser = user.filter((c) => c.id === id);
  const { uname, uemail, uaddress, uphone } = currentUser[0];

  const [updatename, setUpdateName] = useState(uname);
  const [updateemail, setUpdateEmail] = useState(uemail);
  const [updateaddress, setUpdateAddress] = useState(uaddress);
  const [updatephone, setUpdatePhone] = useState(uphone);

  const nameChangeHandler = (e) => {
    setUpdateName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setUpdateEmail(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setUpdateAddress(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setUpdatePhone(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        uname: updatename,
        uemail: updateemail,
        uaddress: updateaddress,
        uphone: updatephone,
      })
    );

    navigate("/");
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h2 style={{ marginLeft: "5rem" }}>Edit User Details:</h2>
      <br />
      <Container>
        <Wrapper>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={updatename}
              onChange={nameChangeHandler}
            />
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={updateemail}
              onChange={emailChangeHandler}
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={updateaddress}
              onChange={addressChangeHandler}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={updatephone}
              onChange={phoneChangeHandler}
            />

            <button
              style={{
                backgroundColor: "lightBlue",
                cursor: "pointer",
                marginLeft: "1em",
                borderRadius: "5px",
                width: "3rem",
              }}
            >
              update
            </button>
          </form>
        </Wrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 50px;
  width: 70%;
  background-color: #9bb36d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10%;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  height: 30px;
`;

export default Edit;
