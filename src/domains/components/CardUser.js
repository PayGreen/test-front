import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const Header = styled.header`
  display: flex;
  width: 40%;
  max-height: 150px;
  margin: 32px;
  border: 1px solid #33ad73;
  padding: 12px;
  h1, h2 {
    color: #33ad73;
    font-size: 14px
  }
`;

const Profile = styled.div`
  font-size: 12px;
  padding-left: 32px;
  display: flex;
  ul {
    margin: 0;
    padding: 0;
  } 
  div {
    padding-left: 12px;
    padding-right: 12px;
    border-left: 1px solid #d5f3e5;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

export const CardUser = ({
  id,
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <Contain>
      <aside  key={id}>
        <Header>
          <h1>Name: {name}</h1>
          <h2>Email: {email}</h2>
          <h2>Phone: {phone}</h2>
          <h2>Website: {website}</h2>
        </Header>
        <Profile>
          <div>
            <p>Adress:</p>
            <ul>
              <li>{address.suite}</li>
              <li>{address.street}</li>
              <li>{`${address.zipcode} - ${address.city}`}</li>
            </ul>
          </div>
          <div>
            <p>Company details:</p>
            <ul>
              <li>{company.name}</li>
              <li>{company.catchPhrase}</li>
              <li>{company.bs}</li>
            </ul>
          </div>
        </Profile>
      </aside>
    </Contain>
  );
};

CardUser.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.object,
  address: PropTypes.object,
};