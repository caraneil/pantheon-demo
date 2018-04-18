import React from "react";
import { titleCase } from "voca";

const XX = "XX";
const XY = "XY";
const femaleGender = "female";
const maleGender = "male";
const nonBinaryGender = "non-binary";
const genderTitleMap = {
  [femaleGender]: "Goddess",
  [maleGender]: "God",
  [nonBinaryGender]: "Divine Being"
};

export default class GodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chromosomes: this.props.defaultChromosomes || XX,
      gender: "",
      seedWordA: "",
      seedWordB: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static get XX() {
    return XX;
  }
  static get XY() {
    return XY;
  }

  handleChange(e) {
    const target = e.target;

    console.log(`Setting ${target.name}: ${target.value}`);
    this.setState({
      [target.name]: target.value
    });
    const newState = Object.assign(this.state, { [target.name]: target.value });
    this.props.onChange(newState);
  }

  render() {
    const godTitle = genderTitleMap[this.state.gender] || "...";
    const domainA = titleCase(this.state.seedWordA) || "...";
    const domainB = titleCase(this.state.seedWordB) || "...";

    return (
      <div>
        <p className="god-form-preview">
          The {godTitle} of {domainA} and {domainB}
        </p>
        <div className="pantheon-form-item" style={{ display: "block" }}>
          <label htmlFor="chromosomes">Chromosomes</label>
          <select
            name="chromosomes"
            value={this.state.chromosomes}
            onChange={this.handleChange}
          >
            <option value={XX}>XX (egg donor)</option>
            <option value={XY}>XY (sperm donor)</option>
          </select>
        </div>

        <div className="pantheon-form-item" style={{ display: "block" }}>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose...
            </option>
            <option value={femaleGender}>
              {this.state.chromosomes === "XX" ? "female" : "female (trans)"}
            </option>
            <option value={maleGender}>
              {this.state.chromosomes === "XY" ? "male" : "male (trans)"}
            </option>
            <option value={nonBinaryGender}>non-binary</option>
          </select>
        </div>
        <div className="pantheon-form-item" style={{ display: "block" }}>
          <label htmlFor="seedWordA">Egg Word</label>
          <input
            type="text"
            placeholder={this.state.seedWordA || ""}
            name="seedWordA"
            onChange={this.handleChange}
          />
        </div>
        <div className="pantheon-form-item" style={{ display: "block" }}>
          <label htmlFor="seedWordB">Sperm Word</label>
          <input
            type="text"
            placeholder={this.state.seedWordB}
            name="seedWordB"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
