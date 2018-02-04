import React from "react";

class ProductsFilter extends React.Component {
  handleChange = e => {
    this.props.onSelectionChange(e.target.value);
  };

  handleCheckBoxChange = e => {
    this.props.onCheckBoxChange(e.target.checked);
  };

  render() {
    const { title, data, value, checked } = this.props;
    const options = data.map(tr => tr.name);

    return (
      <div className="filter-data">
        <h3>{title}</h3>
        <label htmlFor="newCheck">
          New Only{" "}
          <input
            type="checkbox"
            id="newCheck"
            checked={checked}
            onChange={this.handleCheckBoxChange}
          />
        </label>
        <label htmlFor="car-type" className="select-opt">
          Select Type{" "}
          <select id="car-type" value={value} onChange={this.handleChange}>
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
