import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterButtonChange = this.handleFilterButtonChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleFilterButtonChange(e) {
    this.props.onFilterButtonChange(e.target.name)
  }
  render() {
    const sortBy = this.props.sortBy
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={this.handleFilterTextChange}
              value={this.props.filterText}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${sortBy === "name" ? "is-selected" : ""}`}
            type="button"
            name="name"
            onClick={this.handleFilterButtonChange}
          >
            Nome
          </button>

          <button
            className={`filters__item ${sortBy === "country" ? "is-selected" : ""}`}
            type="button"
            name="country"
            onClick={this.handleFilterButtonChange}
          >
            País
          </button>

          <button
            className={`filters__item ${sortBy === "company" ? "is-selected" : ""}`}
            type="button"
            name="company"
            onClick={this.handleFilterButtonChange}
          >
            Empresa
          </button>

          <button
            className={`filters__item ${sortBy === "department" ? "is-selected" : ""}`}
            type="button"
            name="department"
            onClick={this.handleFilterButtonChange}
          >
            Departamento
          </button>

          <button
            className={`filters__item ${sortBy === "admissionDate" ? "is-selected" : ""}`}
            type="button"
            name="admissionDate"
            onClick={this.handleFilterButtonChange}
          >
            Data de admissão
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
