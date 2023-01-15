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
  { x: "2019-01-01", y: 98.57, group: 0 },
  { x: "2019-01-03", y: 99.5, group: 0 },
  { x: "2019-02-05", y: 106, group: 0 },
  { x: "2019-02-11", y: 99.76, group: 0 },
  { x: "2019-03-01", y: 95.06, group: 0 },
  { x: "2019-03-15", y: 104.61, group: 0 },
  { x: "2019-04-05", y: 101.57, group: 0 },
  { x: "2019-04-19", y: 96.59, group: 0 },
  { x: "2019-05-01", y: 99.57, group: 0 },
  { x: "2019-05-19", y: 97.4, group: 0 },
  { x: "2019-06-05", y: 99.57, group: 0 },
  { x: "2019-06-19", y: 101.59, group: 0 },
  { x: "2019-07-01", y: 99.57, group: 0 },
  { x: "2019-07-19", y: 115.59, group: 0 },
  { x: "2019-08-01", y: 99.57, group: 0 },
  { x: "2019-08-25", y: 103.59, group: 0 },
  { x: "2019-09-01", y: 102.57, group: 0 },
  { x: "2019-09-12", y: 101.59, group: 0 },
  { x: "2019-10-01", y: 99.57, group: 0 },
  { x: "2019-10-21", y: 112.59, group: 0 },
  { x: "2019-11-01", y: 99.57, group: 0 },
  { x: "2019-11-10", y: 105.59, group: 0 },
  { x: "2019-12-01", y: 99.57, group: 0 },
  { x: "2019-12-20", y: 113.59, group: 0 },
  { x: "2019-12-31", y: 100.59, group: 0 },

  { x: "2019-01-01", y: 95.78, group: 1 },
  { x: "2019-01-16", y: 96.19, group: 1 },
  { x: "2019-02-07", y: 99.00, group: 1 },
  { x: "2019-02-25", y: 104.78, group: 1 },
  { x: "2019-03-05", y: 98.67, group: 1 },
  { x: "2019-03-21", y: 98.37, group: 1 },
  { x: "2019-04-07", y: 95.79, group: 1 },
  { x: "2019-04-21", y: 101.45, group: 1 },
  { x: "2019-05-05", y: 101.00, group: 1 },
  { x: "2019-05-16", y: 112.39, group: 1 },
  { x: "2019-06-07", y: 116.14, group: 1 },
  { x: "2019-06-21", y: 116.18, group: 1 },
  { x: "2019-07-07", y: 104.57, group: 1 },
  { x: "2019-07-18", y: 123.16, group: 1 },
  { x: "2019-08-07", y: 88.6, group: 1 },
  { x: "2019-08-25", y: 87.1, group: 1 },
  { x: "2019-09-07", y: 99.00, group: 1 },
  { x: "2019-09-25", y: 100.00, group: 1 },
  { x: "2019-10-07", y: 120, group: 1 },
  { x: "2019-10-25", y: 119, group: 1 },
  { x: "2019-11-07", y: 102, group: 1 },
  { x: "2019-11-25", y: 104, group: 1 },
  { x: "2019-12-07", y: 114, group: 1 },
  { x: "2019-12-25", y: 118, group: 1 },
  { x: "2019-12-31", y: 118, group: 1 },
  
  { x: "2019-01-01", y: 117.96, group: 2 },
  { x: "2019-01-15", y: 118.37, group: 2 },
  { x: "2019-02-10", y: 106.13, group: 2 },
  { x: "2019-02-22", y: 94.56, group: 2 },
  { x: "2019-03-09", y: 103.9854, group: 2 },
  { x: "2019-03-20", y: 96.76, group: 2 },
  { x: "2019-04-12", y: 105.90, group: 2 },
  { x: "2019-04-22", y: 105.13, group: 2 },
  { x: "2019-05-05", y: 116, group: 2 },
  { x: "2019-05-20", y: 105, group: 2 },
  { x: "2019-06-12", y: 107.96, group: 2 },
  { x: "2019-06-22", y: 103.14, group: 2 },
  { x: "2019-07-05", y: 101.09, group: 2 },
  { x: "2019-07-20", y: 96.78, group: 2 },
  { x: "2019-08-12", y: 103.30, group: 2 },
  { x: "2019-08-22", y: 108, group: 2 },
  { x: "2019-09-13", y: 97.14, group: 2 },
  { x: "2019-09-27", y: 99.5, group: 2 },
  { x: "2019-10-07", y: 94.678, group: 2 },
  { x: "2019-10-20", y: 91.65, group: 2 },
  { x: "2019-11-09", y: 96.890, group: 2 },
  { x: "2019-11-20", y: 101.27, group: 2 },
  { x: "2019-12-07", y: 103.14, group: 2 },
  { x: "2019-12-22", y: 112.90, group: 2 },
  { x: "2019-12-31", y: 112.90, group: 2 },

  { x: "2019-01-01", y: 107.68, group: 3 },
  { x: "2019-01-03", y: 99.5, group: 3 },
  { x: "2019-02-05", y: 97.14, group: 3 },
  { x: "2019-02-11", y: 98.68, group: 3 },
  { x: "2019-03-01", y: 100.06, group: 3 },
  { x: "2019-03-15", y: 90.61, group: 3 },
  { x: "2019-04-05", y: 105.57, group: 3 },
  { x: "2019-04-19", y: 116.59, group: 3 },
  { x: "2019-05-01", y: 93.57, group: 3 },
  { x: "2019-05-19", y: 97.4, group: 3 },
  { x: "2019-06-05", y: 99.57, group: 3 },
  { x: "2019-06-19", y: 101.59, group: 3 },
  { x: "2019-07-01", y: 100.57, group: 3 },
  { x: "2019-07-19", y: 112.59, group: 3 },
  { x: "2019-08-01", y: 99.57, group: 3 },
  { x: "2019-08-25", y: 103.59, group: 3 },
  { x: "2019-09-01", y: 102.57, group: 3 },
  { x: "2019-09-12", y: 101.59, group: 3 },
  { x: "2019-10-01", y: 99.57, group: 3 },
  { x: "2019-10-21", y: 114.59, group: 3 },
  { x: "2019-11-01", y: 99.57, group: 3 },
  { x: "2019-11-10", y: 105.59, group: 3 },
  { x: "2019-12-01", y: 115.57, group: 3 },
  { x: "2019-12-20", y: 113.59, group: 3 },
  { x: "2019-12-31", y: 100.59, group: 3 },

  { x: "2019-01-10", y: 88.78, group: 4 },
  { x: "2019-01-20", y: 99.19, group: 4 },
  { x: "2019-02-07", y: 99.00, group: 4 },
  { x: "2019-02-15", y: 116.85, group: 4 },
  { x: "2019-03-09", y: 91.67, group: 4 },
  { x: "2019-03-23", y: 95.37, group: 4 },
  { x: "2019-04-08", y: 95.79, group: 4 },
  { x: "2019-04-18", y: 113.45, group: 4 },
  { x: "2019-05-05", y: 101.00, group: 4 },
  { x: "2019-05-20", y: 116.39, group: 4 },
  { x: "2019-06-09", y: 120.14, group: 4 },
  { x: "2019-06-23", y: 125.18, group: 4 },
  { x: "2019-07-07", y: 104.57, group: 4 },
  { x: "2019-07-18", y: 119.16, group: 4 },
  { x: "2019-08-07", y: 88.6, group: 4 },
  { x: "2019-08-25", y: 87.1, group: 4 },
  { x: "2019-09-07", y: 99.00, group: 4 },
  { x: "2019-09-25", y: 78.00, group: 4 },
  { x: "2019-10-07", y: 114.47, group: 4 },
  { x: "2019-10-25", y: 98.56, group: 4 },
  { x: "2019-11-07", y: 94.14, group: 4 },
  { x: "2019-11-25", y: 119.96, group: 4 },
  { x: "2019-12-07", y: 145.86, group: 4 },
  { x: "2019-12-25", y: 120.13, group: 4 },
  { x: "2019-12-31", y: 100.78, group: 4 },
  
  { x: "2019-01-01", y: 110.96, group: 5 },
  { x: "2019-01-15", y: 105.37, group: 5 },
  { x: "2019-02-10", y: 119.13, group: 5 },
  { x: "2019-02-22", y: 99.56, group: 5 },
  { x: "2019-03-09", y: 92.9854, group: 5 },
  { x: "2019-03-20", y: 96.76, group: 5 },
  { x: "2019-04-12", y: 109.90, group: 5 },
  { x: "2019-04-22", y: 108.13, group: 5 },
  { x: "2019-05-05", y: 119, group: 5 },
  { x: "2019-05-20", y: 98, group: 5 },
  { x: "2019-06-12", y: 85.96, group: 5 },
  { x: "2019-06-22", y: 105.14, group: 5 },
  { x: "2019-07-05", y: 111.09, group: 5 },
  { x: "2019-07-20", y: 97.78, group: 5 },
  { x: "2019-08-12", y: 114.30, group: 5 },
  { x: "2019-08-22", y: 109, group: 5 },
  { x: "2019-09-13", y: 97.14, group: 5 },
  { x: "2019-09-27", y: 99.5, group: 5 },
  { x: "2019-10-07", y: 94.678, group: 5 },
  { x: "2019-10-20", y: 91.65, group: 5 },
  { x: "2019-11-09", y: 96.890, group: 5 },
  { x: "2019-11-20", y: 101.27, group: 5 },
  { x: "2019-12-07", y: 103.14, group: 5 },
  { x: "2019-12-22", y: 112.90, group: 5 },
  { x: "2019-12-31", y: 112.90, group: 5 },
];

var dataset = new vis.DataSet(items);
var options = {
  legend: true,
  start: "2018-12-31",
  end: "2020-01-01",
  moveable: false,
};
var graph2d = new vis.Graph2d(document.getElementById("visualization"), dataset, groups, options);
var graph2d2 = new vis.Graph2d(document.getElementById("visualization2"), dataset, groups, options);

graph2d.setOptions({
  groups: {
    visibility: { 0: true, 1: true, 2: true, 3: false, 4: false, 5: false },
  },
});
graph2d2.setOptions({
  groups: {
    visibility: { 0: false, 1: false, 2: false, 3: true, 4: true, 5: true },
  },
}); 

//Select Group
function selectGroup() {
  var eID = document.getElementById("MDSCode");
  var codeVal = eID.options[eID.selectedIndex].value;
  if (codeVal === "B001B1")
  {
    graph2d.setOptions({
      groups: {
        visibility: { 0: true, 1: false, 2: false, 3: false, 4: false, 5: false },
      },
    });
  }
  else if (codeVal === "B002A1")
  {
    graph2d.setOptions({
      groups: {
        visibility: { 0: false, 1: true, 2: false, 3: false, 4: false, 5: false },
      },
    });
  }
  else if (codeVal === "B052H1")
  {
    graph2d.setOptions({
      groups: {
        visibility: { 0: false, 1: false, 2: true, 3: false, 4: false, 5: false  },
      },
    });
  }
  else if (codeVal === "Default1")
  {
    graph2d.setOptions({
      groups: {
        visibility: { 0: true, 1: true, 2: true, 3: false, 4: false, 5: false  },
      },
    });
  }
}

//Select Group
function selectGroup2() {
  var eID = document.getElementById("MDSCode2");
  var codeVal = eID.options[eID.selectedIndex].value;
 
  if (codeVal === "B001B2")
  {
    graph2d2.setOptions({
      groups: {
        visibility: {  0: false, 1: false, 2: false, 3: true, 4: false, 5: false },
      },
    });
  }
  else if (codeVal === "B002A2")
  {
    graph2d2.setOptions({
      groups: {
        visibility: { 0: false, 1: false, 2: false, 3: false, 4: true, 5: false },
      },
    });
  }
  else if (codeVal === "B052H2")
  {
    graph2d2.setOptions({
      groups: {
        visibility: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: true },
      },
    });
  }
  else if (codeVal === "Default2")
  {
    graph2d2.setOptions({
      groups: {
        visibility: { 0: false, 1: false, 2: false,  3: true, 4: true, 5: true  },
      },
    });
  }
  else {
    graph2d.setOptions({
      groups: {
        visibility: { 0: true, 1: true, 2: true,  3: false, 4: false, 5: false  },
      },
    });    
    graph2d2.setOptions({
      groups: {
        visibility: { 0: false, 1: false, 2: false,  3: true, 4: true, 5: true  },
      },
    });
  }
}