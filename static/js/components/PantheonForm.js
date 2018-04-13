import React from "react";
import PropTypes from "prop-types";
import GodForm from "./GodForm";

export default class PantheonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namesSource: "",
      textsSource: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    console.log(`User selected ${target.id}: ${target.value}`);
    this.setState(
      {
        [target.id]: target.value
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const options = {};
    this.props.fetchPantheon(options);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h4 className="title">Seed Words</h4>
          <div className="row">
            <div className="form-group col-md-6">
              <label>1st God of Creation:</label>
              <input type="text" className="form-control" placeholder="milk" />
              <input type="text" className="form-control" placeholder="honey" />
              <select className="form-control pantheon-form-select" id="chromosomes" value="">
                <option value="XX">XX chromosomes</option>
                <option value="XY">XY chromosomes</option>
              </select>
              <select className="form-control pantheon-form-select" id="gender" value={this.state.gender} onChange={this.handleChange}>
                <option value="nb">non-binary</option>
                <option value="f">female</option>
                <option value="m">male</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>2nd God of Creation:</label>
              <input type="text" className="form-control" placeholder="milk" />
              <input type="text" className="form-control" placeholder="honey" />
              <select className="form-control pantheon-form-select" id="chromosomes" value="">
                <option value="XX">XX chromosomes</option>
                <option value="XY">XY chromosomes</option>
              </select>
              <select className="form-control pantheon-form-select" id="gender" value={this.state.gender} onChange={this.handleChange}>
                <option value="nb">non-binary</option>
                <option value="f">female</option>
                <option value="m">male</option>
              </select>
            </div>
          </div>

          <h4 className="title">Sources</h4>
          <div class="row">
            <div className="form-group col-md-6">
              <select className="form-control pantheon-form-select" placeholder="names" id="namesSource" value={this.state.namesSource} onChange={this.handleChange}>
                {this.props.sourcesOfNames.map((namesSource,i) => (
                  <option value={namesSource} key={"namesSource"+i}>{namesSource} names</option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-6">
              <select className="form-control pantheon-form-select" name="textsSource" value={this.state.textsSource} onChange={this.handleChange}>
                {this.props.sourcesOfTexts.map((textsSource,i) => (
                  <option value={textsSource} key={"textsSource"+i}>books about {textsSource}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Generate" className="btn"/>
          </div>
        </form>
      </div>
    );
  }
}

PantheonForm.propTypes = {
  sourcesOfNames: PropTypes.array.isRequired,
  sourcesOfTexts: PropTypes.array.isRequired
}
