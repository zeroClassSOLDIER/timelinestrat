// create a dataSet with groups
var names = ["top", "bottom", "zero", "none", "group", "none"];
var groups = new vis.DataSet();
groups.add({
  id: 0,
  content: names[0],
  options: {
    shaded: {
      orientation: "top",
    },
  },
});

groups.add({
  id: 1,
  content: names[1],
  options: {
    shaded: {
      orientation: "bottom",
    },
  },
});

groups.add({
  id: 2,
  content: names[2],
  options: {
    shaded: {
      orientation: "zero",
    },
  },
});

groups.add({
  id: 3,
  options: {
    excludeFromLegend: true,
  },
});

groups.add({
  id: 4,
  content: names[4],
  options: {
    shaded: {
      orientation: "group",
      groupId: "3",
    },
  },
});

groups.add({
  id: 5,
  content: names[5],
});

var container = document.getElementById("visualization");
var items = [
  { x: "2014-06-11", y: 0, group: 0 },
  { x: "2014-06-12", y: 15, group: 0 },
  { x: "2014-06-13", y: -15, group: 0 },
  { x: "2014-06-14", y: 0, group: 0 },
  { x: "2014-06-15", y: 0, group: 1 },
  { x: "2014-06-16", y: 15, group: 1 },
  { x: "2014-06-17", y: -15, group: 1 },
  { x: "2014-06-18", y: 0, group: 1 },
  { x: "2014-06-19", y: 0, group: 2 },
  { x: "2014-06-20", y: 15, group: 2 },
  { x: "2014-06-21", y: -15, group: 2 },
  { x: "2014-06-22", y: 0, group: 2 },
  { x: "2014-06-23", y: -2, group: 3 },
  { x: "2014-06-24", y: 13, group: 3 },
  { x: "2014-06-25", y: -17, group: 3 },
  { x: "2014-06-26", y: -2, group: 3 },
  { x: "2014-06-23", y: 2, group: 4 },
  { x: "2014-06-24", y: 17, group: 4 },
  { x: "2014-06-25", y: -13, group: 4 },
  { x: "2014-06-26", y: 2, group: 4 },
  { x: "2014-06-27", y: 0, group: 5 },
  { x: "2014-06-28", y: 15, group: 5 },
  { x: "2014-06-29", y: -15, group: 5 },
  { x: "2014-06-30", y: 0, group: 5 },
];

var dataset = new vis.DataSet(items);
var options = {
  legend: true,
  start: "2018-12-31",
  end: "2020-01-01",
  moveable: false,
};
var graph2d = new vis.Graph2d(container, dataset, groups, options);
