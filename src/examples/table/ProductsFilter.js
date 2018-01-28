import React from "react";

class ProductsFilter extends React.Component {
  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { title, options } = this.props;
    return (
      <div className="filter-data">
        <h3>{title}</h3>
        <label htmlFor="newCheck">
          New Only <input type="checkbox" id="newCheck" />
        </label>
        <label htmlFor="car-type" className="select-opt">
          Select Type{" "}
          <select id="car-type" onChange={this.handleChange}>
            <option value="All">All</option>
            {options.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default ProductsFilter;
