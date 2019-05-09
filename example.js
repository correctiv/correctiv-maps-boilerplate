var map = d3.playbooks.choroplethMap({
  width: 560,
  height: 700,
  elementId: 'example-map', // id of html element to render map into
  cssNamespace: 'example-map', // css prefix for class names
  geoDataUrl: './data/landkreise_sim200.topo.json', // url to geojson data
  isTopojson: true, // geodata is in compressed topojson format
  topojsonLayerName: 'landkreise_sim200',
  responsiveSvg: true, // use some css magic to render the svg responsive based on screen resolution (instead of do the resizing via javascript)
  getId: function(feature) {
    return Number(feature.properties.RS); // remove leading `0`
  }, // function to access the ID for each geo feature
  dataUrl: './data/sample.csv', // url to csv data
  xCol: 'kreis', // x-column (the column with the IDs for each region)
  yCol: '2018_suchende_pro_stelle', // y-column (the column with the values in it)
});

map.render();

// add a legend
map.legend({
  element: '#example-map__legend',
  wrapperTemplate: '<ul name="legend">{body}</ul>',
  itemTemplate: '<li style="background-color:{color}">{label} %</li>'
})

// add an infobox that gets displayed on hovering
map.infobox({
  element: '#example-map__infobox',  // css-selector for element
  template: `
    <h3>{kreis_name}</h3>
    <p class="infobox__data">{2018_suchende_pro_stelle}</p>
    <p class="infobox__subtitle">Suchende pro Stelle (2018)</p>
  `,  // use csv column names as placeholders
});
