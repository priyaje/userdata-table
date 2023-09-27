import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./userSlice";
import styled from "styled-components";

const UserTable = () => {
  const user = useSelector((state) => state.users);

  const deleteHandler = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <h2 style={{ marginTop: "5rem" }}>User details table: </h2>
        <br />
        <Link to="/create">
          <button
            style={{
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              backgroundColor: "violet",
              marginLeft: "55%",
              borderRadius: "5px",
              width: "4rem",
            }}
          >
            Create
          </button>
        </Link>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Functions</th>
            </tr>
          </thead>

          <tbody>
            {user.map((client, index) => (
              <tr key={index}>
                <td>{client.id}</td>
                <td>{client.uname}</td>
                <td>{client.uemail}</td>
                <td>{client.uaddress}</td>
                <td>{client.uphone}</td>
                <td>
                  <ButtonContainer>
                    <Link to={`/edit/${client.id}`}>
                      <button
                        style={{
                          backgroundColor: "lightGreen",
                          fontWeight: "bold",
                          cursor: "pointer",
                          width: "3rem",
                          borderRadius: "5px",
                        }}
                      >
                        edit
                      </button>
                    </Link>
                    <button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "salmon",
                        fontWeight: "bold",
                        width: "3rem",
                        borderRadius: "5px",
                      }}
                      onClick={() => deleteHandler(client.id)}
                    >
                      delete
                    </button>
                  </ButtonContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

const Table = styled.table`
  height: 400px;
  width: 60%;
  font-size: 20px;

  th {
    background-color: lightcoral;
  }

  th,
  td {
    text-align: center;
  }

  table,
  th,
  td {
    border: 1px solid darkolivegreen;
  }

  tbody {
    background-color: lightblue;
    font-weight: "bold";
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Container = styled.div`
  margin-left: 10rem;
`;

export default UserTable;