import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Tools/CategoryButton';
import ToolBar from './Tools/ToolBar';

const handleProps = ({ categories, tools = [] }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  tools,
});

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, tools: props.tools });
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.tools.sort((a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    }).filter((tool) => (actCat === 'All' || tool.category.includes(actCat)))
      .map((tool) => (
        <ToolBar
          categories={this.props.categories}
          data={tool}
          key={tool.title}
        />
      ));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  }

  render() {
    return (
      <div className="tools">
        <div className="link-to" id="tools" />
        <div className="title">
          <h3>Tools</h3>
          <p>Note: These are the tools I use for development and design.</p>
        </div>
        <div className="tool-button-container">
          {this.getButtons()}
        </div>
        <div className="tool-row-container">
          {this.getRows()}
        </div>
      </div>
    );
  }
}

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Tools.defaultProps = {
  tools: [],
  categories: [],
};

export default Tools;
