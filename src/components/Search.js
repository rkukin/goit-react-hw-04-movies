import React, {Component} from "react";
import styled from "styled-components";

const SearchForm = styled.form`
margin-top: 50px;
display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: solid 1px black;
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder{
    font: inherit;
    font-size: 18px;
  }
`;

export default class Search extends Component {

  state = {
    searchQuery: ""

  };

  render() {
    return(
      <SearchForm onSubmit={this.onSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="searchQuery"
          value={this.state.searchQuery}
          // onChange={this.onChange}
        />
      </SearchForm>
    )
  }
}