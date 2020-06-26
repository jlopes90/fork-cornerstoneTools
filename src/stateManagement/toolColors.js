let defaultColor = 'white',
  activeColor = 'greenyellow',
  defaultColorSelected = '#33ccff',
  activeColorSelected = '#009bff',
  fillColor = 'transparent';

function setFillColor(color) {
  fillColor = color;
}

function getFillColor() {
  return fillColor;
}

function setToolColor(color) {
  defaultColor = color;
}

function getToolColor() {
  return defaultColor;
}

function setActiveColor(color) {
  activeColor = color;
}

function getActiveColor() {
  return activeColor;
}

function setToolColorSelected(color) {
  defaultColorSelected = color;
}

function getToolColorSelected() {
  return defaultColorSelected;
}

function setActiveColorSelected(color) {
  activeColorSelected = color;
}

function getActiveColorSelected() {
  return activeColorSelected;
}

function getColorIfActive(data) {
  if (data.activeSelected === true) {
    if (data.active === true) {
      return data.colorSelected || defaultColorSelected;
    }

    return data.activeColorSelected || activeColorSelected;
  } else if (data.active === true) {
    return data.activeColor || activeColor;
  }

  return data.color || defaultColor;
}

const toolColors = {
  setFillColor,
  getFillColor,
  setToolColor,
  getToolColor,
  setActiveColor,
  getActiveColor,
  setToolColorSelected,
  getToolColorSelected,
  setActiveColorSelected,
  getActiveColorSelected,
  getColorIfActive,
};

export default toolColors;
