import React, {Component} from 'react';
import '../css/SearchForm.css';

const SearchForm = (props) => {
  return(
    <form className="search-form">
      <input placeholder="Procurar Tarefa" onChange={e => props.changeText(e)} value={props.searchText} />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default SearchForm;
