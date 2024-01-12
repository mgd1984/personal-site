import React from 'react';
import PropTypes from 'prop-types';

const ToolBar = ({ data, categories, startCategory }) => {
  const { category, competency, title } = data;

  // If startCategory is provided, use it as the initial category
  const initialCategory = startCategory || category;

  const titleStyle = {
    background: categories
      .filter((cat) => initialCategory.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div className="toolbar clearfix">
      <div className="toolbar-title" style={titleStyle}><span>{title}</span></div>
      <div className="toolbar-bar" style={barStyle} />
      <div className="toolbar-percent">{competency}</div>
    </div>
  );
};

ToolBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string),
    competency: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
  startCategory: PropTypes.arrayOf(PropTypes.string),
};

ToolBar.defaultProps = {
  startCategory: [],
};

export default ToolBar;
