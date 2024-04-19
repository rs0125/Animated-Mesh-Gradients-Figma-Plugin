
figma.showUI(__html__);

figma.ui.resize(400,450)

function parseColor(hex : string) {
  // Remove the '#' character if present
  hex = hex.replace('#', '');

  // Parse the hexadecimal color value into RGB components
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  // Return the RGB components as an object
  return { r, g, b };
}

figma.ui.onmessage = pluginMessage => {
  const nodes: SceneNode[] = [];
  const colorValues: string[] = [];

// Loop through the keys of the colors object and push the values into the array
for (const key in pluginMessage) {
  if (pluginMessage.hasOwnProperty(key)) {
    const colorValue = pluginMessage[key];
    colorValues.push(colorValue);
  }
}

//testing working of color input
  let xcord : number  = 100;
  for (const col of colorValues){
      const rect = figma.createFrame();
      rect.x = xcord;
      rect.fills = [{type: 'SOLID', color: parseColor(col)}];
      figma.currentPage.appendChild(rect);
      xcord += 100
  }

    figma.closePlugin()
}
