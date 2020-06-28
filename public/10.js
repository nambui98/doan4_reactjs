(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/isomophic/admin/containers/Charts/GoogleChart/config.js":
/*!******************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Charts/GoogleChart/config.js ***!
  \******************************************************************************/
/*! exports provided: BarChart, lineChart, BubbleChart, Histogram, ScatterChart, AreaChart, CandlestickChart, ComboChart, DonutChart, SteppedAreaChart, Table, Timeline, TreeMap, TrendLines, Waterfall, Gantt, WordTree, BarChart2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChart", function() { return lineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleChart", function() { return BubbleChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Histogram", function() { return Histogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChart", function() { return ScatterChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChart", function() { return AreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickChart", function() { return CandlestickChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboChart", function() { return ComboChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedAreaChart", function() { return SteppedAreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMap", function() { return TreeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendLines", function() { return TrendLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waterfall", function() { return Waterfall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gantt", function() { return Gantt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTree", function() { return WordTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart2", function() { return BarChart2; });
var width = '90%';
var height = '400px';
var BarChart = {
  title: 'BarChart',
  key: 'BarChart',
  chartType: 'ColumnChart',
  width: width,
  height: height,
  data: [['Year', 'Trafic', {
    role: 'style'
  }], // ['2010', 10000, 'fill-color: #48A6F2; fill-opacity: 0.4'],
  ['2012', 21500, 'fill-color: #f64744; fill-opacity: 0.4'], ['2014', 56598, 'fill-color: #ffbf00; fill-opacity: 0.4'], ['2016', 85256, 'fill-color: #511E78; fill-opacity: 0.4']],
  options: {
    title: 'Danh sách số tiền đơn hàng',
    titleTextStyle: {
      color: '#788195'
    },
    bar: {
      groupWidth: '95%'
    },
    legend: {
      position: 'none'
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#1b9e77', '#d95f02', '#7570b3']
  },
  chartEvents: [{
    eventName: 'onmouseover'
  }]
};
var BarChart2 = {
  title: 'BarChart',
  key: 'BarChart',
  chartType: 'ColumnChart',
  width: width,
  height: height,
  data: [['Year', 'Trafic', {
    role: 'style'
  }], // ['2010', 10000, 'fill-color: #48A6F2; fill-opacity: 0.4'],
  ['2012', 21500, 'fill-color: #f64744; fill-opacity: 0.4'], ['2014', 56598, 'fill-color: #ffbf00; fill-opacity: 0.4'], ['2016', 85256, 'fill-color: #511E78; fill-opacity: 0.4']],
  options: {
    title: ' Danh sách số cứu hộ',
    titleTextStyle: {
      color: '#788195'
    },
    bar: {
      groupWidth: '95%'
    },
    legend: {
      position: 'none'
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#1b9e77', '#d95f02', '#7570b3'] //width:1000

  },
  chartEvents: [{
    eventName: 'onmouseover'
  }]
};
/* * * * * * * * * * * * * * * * * * * *
              Line Charts
* * * * * * * * * * * * * * * * * * * */

var lineChart = {
  title: 'Line Chart',
  chartType: 'LineChart',
  key: 'LineChart',
  width: width,
  height: height,
  columns: [{
    label: 'time',
    type: 'number'
  }, {
    label: 'Air Passengers',
    type: 'number'
  }],
  rows: [[1949, 11], [1949.08333333333, 11], [1949.16666666667, 13], [1949.25, 12], [1949.33333333333, 12], [1949.41666666667, 13], [1949.5, 14], [1949.58333333333, 14], [1949.66666666667, 136], [1949.75, 119], [1949.83333333333, 104], [1949.91666666667, 118], [1950, 115], [1950.08333333333, 126], [1950.16666666667, 141], [1950.25, 135], [1950.33333333333, 125], [1950.41666666667, 149], [1950.5, 170], [1950.58333333333, 170], [1950.66666666667, 158], [1950.75, 133], [1950.83333333333, 114], [1950.91666666667, 140], [1951, 145], [1951.08333333333, 150], [1951.16666666667, 178], [1951.25, 163], [1951.33333333333, 172], [1951.41666666667, 178], [1951.5, 199], [1951.58333333333, 199], [1951.66666666667, 184], [1951.75, 162], [1951.83333333333, 146], [1951.91666666667, 166], [1952, 171], [1952.08333333333, 180], [1952.16666666667, 193], [1952.25, 181], [1952.33333333333, 183], [1952.41666666667, 218], [1952.5, 230], [1952.58333333333, 242], [1952.66666666667, 209], [1952.75, 191], [1952.83333333333, 172], [1952.91666666667, 194], [1953, 196], [1953.08333333333, 196], [1953.16666666667, 236], [1953.25, 235], [1953.33333333333, 229], [1953.41666666667, 243], [1953.5, 264], [1953.58333333333, 272], [1953.66666666667, 237], [1953.75, 211], [1953.83333333333, 180], [1953.91666666667, 201], [1954, 204], [1954.08333333333, 188], [1954.16666666667, 235], [1954.25, 227], [1954.33333333333, 234], [1954.41666666667, 264], [1954.5, 302], [1954.58333333333, 293], [1954.66666666667, 259], [1954.75, 229], [1954.83333333333, 203], [1954.91666666667, 229], [1955, 242], [1955.08333333334, 233], [1955.16666666667, 267], [1955.25, 269], [1955.33333333334, 270], [1955.41666666667, 315], [1955.5, 364], [1955.58333333334, 347], [1955.66666666667, 312], [1955.75, 274], [1955.83333333334, 237], [1955.91666666667, 278], [1956, 284], [1956.08333333334, 277], [1956.16666666667, 317], [1956.25, 313], [1956.33333333334, 318], [1956.41666666667, 374], [1956.5, 413], [1956.58333333334, 405], [1956.66666666667, 355], [1956.75, 306], [1956.83333333334, 271], [1956.91666666667, 306], [1957, 315], [1957.08333333334, 301], [1957.16666666667, 356], [1957.25, 348], [1957.33333333334, 355], [1957.41666666667, 422], [1957.5, 465], [1957.58333333334, 467], [1957.66666666667, 404], [1957.75, 347], [1957.83333333334, 305], [1957.91666666667, 336], [1958, 340], [1958.08333333334, 318], [1958.16666666667, 362], [1958.25, 348], [1958.33333333334, 363], [1958.41666666667, 435], [1958.5, 491], [1958.58333333334, 505], [1958.66666666667, 404], [1958.75, 359], [1958.83333333334, 310], [1958.91666666667, 337], [1959, 360], [1959.08333333334, 342], [1959.16666666667, 406], [1959.25, 396], [1959.33333333334, 420], [1959.41666666667, 472], [1959.5, 548], [1959.58333333334, 559], [1959.66666666667, 463], [1959.75, 407], [1959.83333333334, 362], [1959.91666666667, 405], [1960, 417], [1960.08333333334, 391], [1960.16666666667, 419], [1960.25, 461], [1960.33333333334, 472], [1960.41666666667, 535], [1960.5, 622], [1960.58333333334, 606], [1960.66666666667, 508], [1960.75, 461], [1960.83333333334, 390], [1960.91666666667, 432]],
  options: {
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Time',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Air Passengers',
      titleTextStyle: {
        color: '#788195'
      }
    },
    colors: ['#48A6F2'],
    dataOpacity: 1.0,
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Bubble Charts
* * * * * * * * * * * * * * * * * * * */

var BubbleChart = {
  title: 'Bubble Chart',
  key: 'BubbleChart',
  chartType: 'BubbleChart',
  width: width,
  height: height,
  data: [['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'], ['CAN', 80.66, 1.67, 'North America', 33739900], ['DEU', 79.84, 1.36, 'Europe', 81902307], ['DNK', 78.6, 1.84, 'Europe', 5523095], ['EGY', 72.73, 2.78, 'Middle East', 79716203], ['GBR', 80.05, 2, 'Europe', 61801570], ['IRN', 72.49, 1.7, 'Middle East', 73137148], ['IRQ', 68.09, 4.77, 'Middle East', 31090763], ['ISR', 81.55, 2.96, 'Middle East', 7485600], ['RUS', 68.6, 1.54, 'Europe', 141850000], ['USA', 78.09, 2.05, 'North America', 307007000]],
  options: {
    title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Life Expectancy',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Fertility Rate',
      titleTextStyle: {
        color: '#788195'
      }
    },
    bubble: {
      opacity: 0.6,
      stroke: '#ffffff',
      textStyle: {
        fontSize: 11,
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#48A6F2', '#F55F82', '#ffbf00'],
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
          Histogram Charts
* * * * * * * * * * * * * * * * * * * */

var Histogram = {
  title: 'Histogram',
  key: 'Histogram',
  chartType: 'Histogram',
  width: width,
  height: height,
  data: [['Dinosaur', 'Length'], ['Acrocanthosaurus (top-spined lizard)', 12.2], ['Albertosaurus (Alberta lizard)', 9.1], ['Allosaurus (other lizard)', 12.2], ['Apatosaurus (deceptive lizard)', 22.9], ['Archaeopteryx (ancient wing)', 0.9], ['Argentinosaurus (Argentina lizard)', 36.6], ['Baryonyx (heavy claws)', 9.1], ['Brachiosaurus (arm lizard)', 30.5], ['Ceratosaurus (horned lizard)', 6.1], ['Coelophysis (hollow form)', 2.7], ['Compsognathus (elegant jaw)', 0.9], ['Deinonychus (terrible claw)', 2.7], ['Diplodocus (double beam)', 27.1], ['Dromicelomimus (emu mimic)', 3.4], ['Gallimimus (fowl mimic)', 5.5], ['Mamenchisaurus (Mamenchi lizard)', 21], ['Megalosaurus (big lizard)', 7.9], ['Microvenator (small hunter)', 1.2], ['Ornithomimus (bird mimic)', 4.6], ['Oviraptor (egg robber)', 1.5], ['Plateosaurus (flat lizard)', 7.9], ['Sauronithoides (narrow-clawed lizard)', 2], ['Seismosaurus (tremor lizard)', 45.7], ['Spinosaurus (spiny lizard)', 12.2], ['Supersaurus (super lizard)', 30.5], ['Tyrannosaurus (tyrant lizard)', 15.2], ['Ultrasaurus (ultra lizard)', 30.5], ['Velociraptor (swift robber)', 1.8]],
  options: {
    title: 'Lengths of dinosaurs, in meters',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#511E78'],
    dataOpacity: 0.6,
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Scatter Charts
* * * * * * * * * * * * * * * * * * * */

var ScatterChart = {
  title: 'Scatter Chart',
  key: 'ScatterChart',
  chartType: 'ScatterChart',
  width: width,
  height: height,
  data: [['Age', 'Weight'], [8, 12], [4, 10.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7], [8, 11], [12, 8], [9.5, 14], [6.5, 12]],
  options: {
    title: 'Age vs. Weight Comparison',
    titleTextStyle: {
      color: '#788195'
    },
    hAxis: {
      title: 'Age',
      titleTextStyle: {
        color: '#788195'
      },
      minValue: 0,
      maxValue: 15,
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      title: 'Weight',
      titleTextStyle: {
        color: '#788195'
      },
      minValue: 0,
      maxValue: 15,
      textStyle: {
        color: '#788195'
      }
    },
    legend: 'none',
    colors: ['#42A5F5'],
    dataOpacity: 0.8,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Area Charts
* * * * * * * * * * * * * * * * * * * */

var AreaChart = {
  title: 'Area Chart',
  key: 'AreaChart',
  chartType: 'AreaChart',
  width: width,
  height: height,
  data: [['Year', 'Sales', 'Expenses'], ['2013', 1000, 400], ['2014', 1170, 460], ['2015', 660, 1120], ['2016', 1030, 540]],
  options: {
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#48A6F2', '#511E78'],
    dataOpacity: 0.6,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Candle Stick Charts
* * * * * * * * * * * * * * * * * * * */

var CandlestickChart = {
  title: 'Candlestick Chart',
  key: 'CandlestickChart',
  chartType: 'CandlestickChart',
  width: width,
  height: height,
  data: [['DAY', 'val1', 'val2', 'val3', 'val4'], ['Mon', 20, 28, 38, 45], ['Tue', 31, 38, 55, 66], ['Wed', 50, 55, 77, 80], ['Thu', 77, 77, 66, 50], ['Fri', 68, 66, 22, 15]],
  options: {
    title: 'Visitors Per Day',
    titleTextStyle: {
      color: '#788195'
    },
    legend: 'none',
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    colors: ['#48A6F2'],
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Combo Charts
* * * * * * * * * * * * * * * * * * * */

var ComboChart = {
  title: 'Combo Chart',
  key: 'ComboChart',
  chartType: 'ComboChart',
  width: width,
  height: height,
  data: [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2004/05', 165, 938, 522, 998, 450, 614.6], ['2005/06', 135, 1120, 599, 1268, 288, 682], ['2006/07', 157, 1167, 587, 807, 397, 623], ['2007/08', 139, 1110, 615, 968, 215, 609.4], ['2008/09', 136, 691, 629, 1026, 366, 569.6]],
  options: {
    title: 'Monthly Coffee Production by Country',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Cups',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Month',
      titleTextStyle: {
        color: '#788195'
      }
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    colors: ['#00b16a', '#ff6384', '#511E78', '#01C0C8', '#ffbf00', '#48A6F2'],
    dataOpacity: 0.6,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Donut Charts
* * * * * * * * * * * * * * * * * * * */

var DonutChart = {
  title: 'Donut Chart',
  key: 'DonutChart',
  chartType: 'PieChart',
  width: width,
  height: height,
  data: [['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]],
  options: {
    title: 'My Daily Activities',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: '#ffffff'
    },
    is3D: true,
    colors: ['#9678AE', '#F99FB4', '#C8E4FB', '#01C0C8', '#ffbf00'],
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
          Stepped Area Charts
* * * * * * * * * * * * * * * * * * * */

var SteppedAreaChart = {
  title: 'Stepped Area Chart',
  key: 'SteppedAreaChart',
  chartType: 'SteppedAreaChart',
  width: width,
  height: height,
  data: [['Director (Year)', 'Rotten Tomatoes', 'IMDB'], ['Alfred Hitchcock (1935)', 8.4, 7.9], ['Ralph Thomas (1959)', 6.9, 6.5], ['Don Sharp (1978)', 6.5, 6.4], ['James Hawes (2008)', 4.4, 6.2]],
  options: {
    title: 'The decline of The 39 Steps',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    colors: ['#511E78', '#F55F82'],
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Accumulated Rating',
      titleTextStyle: {
        color: '#788195'
      }
    },
    isStacked: true,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Table
* * * * * * * * * * * * * * * * * * * */

var Table = {
  title: 'Table',
  key: 'Table',
  chartType: 'Table',
  chartPackages: ['table'],
  width: width,
  height: height,
  columns: [{
    type: 'string',
    label: 'Name'
  }, {
    type: 'number',
    label: 'Salary'
  }, {
    type: 'boolean',
    label: 'Full Time Employee'
  }],
  rows: [['Mike', {
    v: 10000,
    f: '$10,000'
  }, true], ['Jim', {
    v: 8000,
    f: '$8,000'
  }, false], ['Alice', {
    v: 12500,
    f: '$12,500'
  }, true], ['Bob', {
    v: 7000,
    f: '$7,000'
  }, true]]
};
/* * * * * * * * * * * * * * * * * * * *
            Timeline Charts
* * * * * * * * * * * * * * * * * * * */

var Timeline = {
  title: 'Timeline',
  key: 'Timeline',
  chartType: 'Timeline',
  chartPackage: 'timeline',
  width: width,
  height: height,
  columns: [{
    id: 'Term',
    type: 'string'
  }, {
    id: 'President',
    type: 'string'
  }, {
    id: 'Start',
    type: 'date'
  }, {
    id: 'End',
    type: 'date'
  }],
  rows: [['1', 'Washington', new Date('1789-04-29T18:00:00.000Z'), new Date('1797-03-03T18:00:00.000Z')], ['2', 'Adams', new Date('1797-03-03T18:00:00.000Z'), new Date('1801-03-03T18:00:00.000Z')], ['3', 'Jefferson', new Date('1801-03-03T18:00:00.000Z'), new Date('1809-03-03T18:00:00.000Z')]],
  options: {
    colors: ['#ffbf00', '#F55F82', '#48A6F2'],
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Tree Map
* * * * * * * * * * * * * * * * * * * */

var TreeMap = {
  title: 'TreeMap',
  key: 'TreeMap',
  chartType: 'TreeMap',
  chartPackages: ['treemap'],
  width: width,
  height: height,
  data: [['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'], ['Global', null, 0, 0], ['America', 'Global', 0, 0], ['Europe', 'Global', 0, 0], ['Asia', 'Global', 0, 0], ['Australia', 'Global', 0, 0], ['Africa', 'Global', 0, 0], ['Brazil', 'America', 11, 10], ['USA', 'America', 52, 31], ['Mexico', 'America', 24, 12], ['Canada', 'America', 16, -23], ['France', 'Europe', 42, -11], ['Germany', 'Europe', 31, -2], ['Sweden', 'Europe', 22, -13], ['Italy', 'Europe', 17, 4], ['UK', 'Europe', 21, -5], ['China', 'Asia', 36, 4], ['Japan', 'Asia', 20, -12], ['India', 'Asia', 40, 63], ['Laos', 'Asia', 4, 34], ['Mongolia', 'Asia', 1, -5], ['Israel', 'Asia', 12, 24], ['Iran', 'Asia', 18, 13], ['Pakistan', 'Asia', 11, -52], ['Egypt', 'Africa', 21, 0], ['S. Africa', 'Africa', 30, 43], ['Sudan', 'Africa', 12, 2], ['Congo', 'Africa', 10, 12], ['Zaire', 'Africa', 8, 10]],
  options: {
    minColor: '#511E78',
    midColor: '#C8E4FB',
    maxColor: '#48A6F2'
  }
};
/* * * * * * * * * * * * * * * * * * * *
          Trend Lines Charts
* * * * * * * * * * * * * * * * * * * */

var TrendLines = {
  title: 'TrendLines',
  key: 'TrendLines',
  chartType: 'ScatterChart',
  width: width,
  height: height,
  data: [['Diameter', 'Age'], [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]],
  options: {
    title: 'Age of sugar maples vs. trunk diameter, in inches',
    titleTextStyle: {
      color: '#788195'
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Diameter',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Age',
      titleTextStyle: {
        color: '#788195'
      }
    },
    legend: 'none',
    trendlines: {
      0: {
        type: 'exponential',
        colors: '#48A6F2'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
            Water Fall Charts
* * * * * * * * * * * * * * * * * * * */

var Waterfall = {
  title: 'Waterfall',
  key: 'Waterfall',
  chartType: 'CandlestickChart',
  width: width,
  height: height,
  data: [['DAY', 'val1', 'val2', 'val3', 'val4'], ['Mon', 20, 28, 38, 45], ['Tue', 31, 38, 55, 66], ['Wed', 50, 55, 77, 80], ['Thu', 77, 77, 66, 50], ['Fri', 68, 66, 22, 15]],
  options: {
    legend: 'none',
    bar: {
      groupWidth: '100%'
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    candlestick: {
      fallingColor: {
        strokeWidth: 0,
        fill: '#F55F82'
      },
      risingColor: {
        strokeWidth: 0,
        fill: '#48A6F2'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Gantt Charts
* * * * * * * * * * * * * * * * * * * */

var Gantt = {
  title: 'Gantt',
  key: 'Gantt',
  chartType: 'Gantt',
  chartPackages: ['gantt'],
  width: width,
  height: height,
  columns: [{
    id: 'Task ID',
    type: 'string'
  }, {
    id: 'Task Name',
    type: 'string'
  }, {
    id: 'Start Date',
    type: 'date'
  }, {
    id: 'End Date',
    type: 'date'
  }, {
    id: 'Duration',
    type: 'number'
  }, {
    id: 'Percent Complete',
    type: 'number'
  }, {
    id: 'Dependencies',
    type: 'string'
  }],
  rows: [['Research', 'Find sources', new Date('2014-12-31T18:00:00.000Z'), new Date('2015-01-04T18:00:00.000Z'), null, 100, null], ['Write', 'Write paper', null, new Date('2015-01-08T18:00:00.000Z'), 259200000, 25, 'Research,Outline'], ['Cite', 'Create bibliography', null, new Date('2015-01-06T18:00:00.000Z'), 86400000, 20, 'Research'], ['Complete', 'Hand in paper', null, new Date('2015-01-09T18:00:00.000Z'), 86400000, 0, 'Cite,Write'], ['Outline', 'Outline paper', null, new Date('2015-01-05T18:00:00.000Z'), 86400000, 100, 'Research']],
  options: {
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    gantt: {
      criticalPathEnabled: false,
      // Critical path arrows will be the same as other arrows.
      arrow: {
        angle: 100,
        width: 2,
        color: '#9678AE',
        radius: 0
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Word Tree Charts
* * * * * * * * * * * * * * * * * * * */

var WordTree = {
  title: 'WordTree',
  key: 'WordTree',
  chartType: 'WordTree',
  chartPackages: ['wordtree'],
  width: width,
  height: height,
  data: [['Phrases'], ['cats are better than dogs'], ['cats eat kibble'], ['cats are better than hamsters'], ['cats are awesome'], ['cats are people too'], ['cats eat mice'], ['cats meowing'], ['cats in the cradle'], ['cats eat mice'], ['cats in the cradle lyrics'], ['cats eat kibble'], ['cats for adoption'], ['cats are family'], ['cats eat mice'], ['cats are better than kittens'], ['cats are evil'], ['cats are weird'], ['cats eat mice']],
  options: {
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    wordtree: {
      format: 'implicit',
      word: 'cats'
    }
  }
};


/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Charts/GoogleChart/index.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Charts/GoogleChart/index.js ***!
  \*****************************************************************************/
/*! exports provided: default, GoogleChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChart", function() { return GoogleChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/asyncComponent */ "./resources/js/isomophic/helpers/asyncComponent.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/utility/pageHeader */ "./resources/js/isomophic/components/utility/pageHeader.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/utility/contentHolder */ "./resources/js/isomophic/components/utility/contentHolder.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./resources/js/isomophic/admin/containers/Charts/GoogleChart/config.js");
/* harmony import */ var _chart_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chart.style */ "./resources/js/isomophic/admin/containers/Charts/chart.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












var GoogleChart = function GoogleChart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chart_style__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_asyncComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    load: __webpack_require__.e(/*! import() | googleChart */ "vendors~googleChart").then(__webpack_require__.t.bind(null, /*! react-google-charts */ "./node_modules/react-google-charts/build/index.js", 7)),
    componentProps: props,
    componentArguement: 'googleChart'
  }));
};

var ReCharts = /*#__PURE__*/function (_Component) {
  _inherits(ReCharts, _Component);

  var _super = _createSuper(ReCharts);

  function ReCharts() {
    _classCallCheck(this, ReCharts);

    return _super.apply(this, arguments);
  }

  _createClass(ReCharts, [{
    key: "render",
    value: function render() {
      var chartEvents = [{
        eventName: 'select',
        callback: function callback(Chart) {}
      }];
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].gutter;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "isoMapPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Google Charts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["BarChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _extends({}, _config__WEBPACK_IMPORTED_MODULE_8__["BarChart"], {
        chartEvents: chartEvents
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["lineChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["lineChart"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["BubbleChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["BubbleChart"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["Histogram"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["Histogram"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["ScatterChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["ScatterChart"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["AreaChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["AreaChart"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["CandlestickChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["CandlestickChart"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["ComboChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["ComboChart"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["DonutChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["DonutChart"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["SteppedAreaChart"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["SteppedAreaChart"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["Timeline"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["Timeline"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["TreeMap"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["TreeMap"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["TrendLines"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["TrendLines"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["Waterfall"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["Waterfall"]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["Gantt"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["Gantt"])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: _config__WEBPACK_IMPORTED_MODULE_8__["WordTree"].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleChart, _config__WEBPACK_IMPORTED_MODULE_8__["WordTree"]))))));
    }
  }]);

  return ReCharts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);




/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Charts/chart.style.js":
/*!***********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Charts/chart.style.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .isoChartControl {\n    display: flex;\n    align-items: center;\n    margin-left: ", ";\n    margin-right: ", ";\n    margin-bottom: 20px;\n\n    span {\n      font-size: 13px;\n      color: ", ";\n      font-weight: 400;\n      margin-right: ", ";\n      margin-left: ", ";\n    }\n\n    button {\n      border: 1px solid ", ";\n      padding: 0 10px;\n      border-radius: 0;\n      position: relative;\n\n      span {\n        margin: 0;\n      }\n\n      &:last-child {\n        margin-left: ", ";\n        margin-right: ", ";\n      }\n\n      &:hover {\n        color: ", ";\n        border-color: ", ";\n        z-index: 1;\n\n        span {\n          color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : 'auto';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'auto' : 'inherit';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '15px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '15px' : 'inherit';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '-1px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '-1px' : 'inherit';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["default"] = (Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(ChartWrapper));

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Dashboard/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Dashboard/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Dashboard/actions */ "./resources/js/isomophic/admin/redux/Dashboard/actions.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _components_utility_layoutWrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../components/utility/layoutWrapper.js */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var _containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../containers/Widgets/widgets-wrapper */ "./resources/js/isomophic/admin/containers/Widgets/widgets-wrapper.js");
/* harmony import */ var _containers_Widgets_sale_sale_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../containers/Widgets/sale/sale-widget */ "./resources/js/isomophic/admin/containers/Widgets/sale/sale-widget.js");
/* harmony import */ var _containers_Widgets_widget_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../containers/Widgets/widget-box */ "./resources/js/isomophic/admin/containers/Widgets/widget-box.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _containers_Widgets_sticker_sticker_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../containers/Widgets/sticker/sticker-widget */ "./resources/js/isomophic/admin/containers/Widgets/sticker/sticker-widget.js");
/* harmony import */ var _containers_Tables_antTables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../containers/Tables/antTables */ "./resources/js/isomophic/containers/Tables/antTables/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var react_window_size_listener__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-window-size-listener */ "./node_modules/react-window-size-listener/lib/index.js");
/* harmony import */ var react_window_size_listener__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_window_size_listener__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _containers_Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../containers/Charts/GoogleChart/config */ "./resources/js/isomophic/admin/containers/Charts/GoogleChart/config.js");
/* harmony import */ var _containers_Charts_GoogleChart___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../containers/Charts/GoogleChart/ */ "./resources/js/isomophic/admin/containers/Charts/GoogleChart/index.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var convertNumber = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].convertNumber;
var tableDataList = clone__WEBPACK_IMPORTED_MODULE_3___default()(_containers_Tables_antTables__WEBPACK_IMPORTED_MODULE_13__["dataList"]);
tableDataList.size = 5;

var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _super.call(this, props); // this.state = {
    // 	type: 7,
    // 	startDate: moment(new Date()).subtract(7, 'days').format('YYYY/MM/DD 00:00:00'),
    // 	endDate: moment(new Date()).format('YYYY/MM/DD 23:59:59')
    // };

    _defineProperty(_assertThisInitialized(_this), "handelSeachToday", function () {
      var page = {
        type: 4,
        year: 2020
      };

      _this.setState(page);

      _this.props.loadData(page);
    });

    _defineProperty(_assertThisInitialized(_this), "handelSeachLast7Days", function () {
      var page = {
        type: 1,
        year: 2020
      };

      _this.setState(page);

      _this.props.loadData(page);
    });

    _defineProperty(_assertThisInitialized(_this), "handelSeachLast30Days", function () {
      var page = {
        type: 2,
        year: 2020
      };

      _this.setState(page);

      _this.props.loadData(page);
    });

    _defineProperty(_assertThisInitialized(_this), "handelSeachLast6months", function () {
      var page = {
        type: 3,
        year: 2020
      };

      _this.setState(page);

      _this.props.loadData(page);
    });

    _this.state = {
      type: 1
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = {
        type: 1,
        year: 2020 // endDate: this.state.endDate

      };
      this.props.loadData(page);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].colStyle;
      var data = this.props.data;
      console.log(data); // data = null;

      var type = this.state.type; // const wisgetPageStyle = {
      // 	display: 'flex',
      // 	flexFlow: 'row wrap',
      // 	alignItems: 'flex-start',
      // 	overflow: 'hidden',
      // 	marginTop: 10
      // };

      var _this$props = this.props,
          cartCancel = _this$props.cartCancel,
          cartSuccess = _this$props.cartSuccess,
          cartDelivery = _this$props.cartDelivery,
          totalCart = _this$props.totalCart,
          lostMoney = _this$props.lostMoney,
          soldMoney = _this$props.soldMoney;
      var chartEvents = [{
        eventName: 'select',
        callback: function callback(Chart) {}
      }]; // console.log(shopReportIncome);

      var wisgetPageStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        overflow: 'hidden',
        marginTop: 10
      };
      var datashopReportIncome = [['Year', 'Doanh thu', {
        role: 'style'
      }]];

      if (data && data.length > 0) {
        // console.log(this.props.shopReportIncome);
        this.props.data.forEach(function (element) {
          var data = [];
          data[0] = _this2.state.type === 3 ? element.month : moment__WEBPACK_IMPORTED_MODULE_16___default()(element.date).format('DD-MM');
          data[1] = element.profit;
          data[2] = 'fill-color: #3498db; fill-opacity: 0.4';
          datashopReportIncome.push(data);
        });
      } // else{
      //     const data = [];
      //     data[0] = this.state.type === 3 ? element.month : moment(element.date).format('DD-MM');
      //     data[1] = 0;
      //     data[2] = 'fill-color: #3498db; fill-opacity: 0.4';
      //     datashopReportIncome.push(data);
      // }


      _containers_Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_17__["AreaChart"].data = datashopReportIncome.sort(function (a, b) {
        return new Date(a[0]) - new Date(b[0]);
      });

      var stackConfigGoogleChart = _objectSpread({}, _containers_Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_17__["AreaChart"], {
        width: window.innerWidth < 450 ? 300 : window.innerWidth < 700 ? 550 : window.innerWidth < 1200 && datashopReportIncome.length > 11 ? 1050 : datashopReportIncome.length > 11 ? 1300 : datashopReportIncome.length > 6 ? 800 : 500
      }); //rechartConfigs.CustomShapeBarChart.datas=datasRechart;


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          padding: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        className: "DisplayStyleButton",
        type: "global"
      }), "\xA0 Th\u1ED1ng k\xEA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: wisgetPageStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["TitleWrapper"], {
        className: "titleWrapper allInner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "btWizard",
        onClick: this.handelSeachToday,
        style: {
          paddingLeft: 15,
          marginRight: 15
        }
      }, "H\xF4m nay"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "btWizard",
        onClick: this.handelSeachLast7Days,
        style: {
          paddingLeft: 15,
          marginRight: 15
        }
      }, "Trong tu\u1EA7n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "btWizard",
        onClick: this.handelSeachLast30Days,
        style: {
          paddingLeft: 15,
          marginRight: 15
        }
      }, "Trong th\xE1ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "btWizard",
        onClick: this.handelSeachLast6months,
        style: {
          paddingLeft: 15,
          marginRight: 15
        }
      }, "Trong n\u0103m"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["TitleWrapper"], {
        className: "titleWrapper allInner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["ComponentTitle"], null, this.props.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
        size: "large"
      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.type === 4 ? 'Hôm nay' : this.state.type === 1 ? 'Trong tuần' : this.state.type === 2 ? 'Trong tháng' : this.state.type === 3 ? 'Trong năm' : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        style: rowStyle,
        gutter: 0,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sticker_sticker_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          border: '2px solid #d9ba85'
        },
        number: totalCart ? totalCart.count : '',
        text: "T\u1ED5ng s\u1ED1 \u0111\u01A1n h\xE0ng",
        icon: "ion-filing",
        fontColor: "#ffffff",
        bgColor: "#7266BA",
        height: "120px"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sticker_sticker_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        number: cartSuccess ? cartSuccess.count : '',
        text: "S\u1ED1 \u0111\u01A1n h\xE0ng th\xE0nh c\xF4ng",
        icon: "ion-outlet",
        fontColor: "#ffffff",
        bgColor: "#42A5F6",
        height: "120px"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sticker_sticker_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        number: cartDelivery ? cartDelivery.count : '',
        text: "S\u1ED1 \u0111\u01A1n h\xE0ng \u0111ang giao",
        icon: "ion-checkmark-circled",
        fontColor: "#ffffff",
        bgColor: "#7ED320",
        height: "120px"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sticker_sticker_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        number: cartCancel ? cartCancel.count : '',
        text: "S\u1ED1 \u0111\u01A1n h\xE0ng b\u1ECB hu\u1EF7",
        icon: "ion-help-circled",
        fontColor: "#ffffff",
        bgColor: "#F75D81",
        height: "120px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        style: rowStyle,
        gutter: 0,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sale_sale_widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "T\u1ED5ng ti\u1EC1n b\xE1n \u0111\u01B0\u1EE3c",
        price: convertNumber(parseInt(soldMoney ? soldMoney.sold : '')) + ' đ',
        details: "T\u1ED5ng s\u1ED1 ti\u1EC1n b\xE1n \u0111\u01B0\u1EE3c",
        fontColor: "#795548"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sale_sale_widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "T\u1ED5ng ti\u1EC1n m\u1EA5t \u0111i",
        price: convertNumber(parseInt(lostMoney ? lostMoney.lost : '')) + ' đ',
        details: "T\u1ED5ng s\u1ED1 ti\u1EC1n m\u1EA5t \u0111i do s\u1EA3n ph\u1EA9m h\u1EBFt h\u1EA1n",
        fontColor: "#795548"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_sale_sale_widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "T\u1ED5ng l\xE3i",
        price: convertNumber(parseInt(lostMoney && soldMoney ? soldMoney.sold - lostMoney.lost : '')) + ' đ',
        details: "T\u1ED5ng s\u1ED1 ti\u1EC1n l\xE3i \u0111\u01B0\u1EE3c",
        fontColor: "#795548"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 24,
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widgets_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Widgets_widget_box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        height: 455,
        style: {
          overflow: 'hidden'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Charts_GoogleChart___WEBPACK_IMPORTED_MODULE_18__["GoogleChart"], _extends({}, stackConfigGoogleChart, {
        chartEvents: chartEvents
      }))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.DashboardReducer);
}, _objectSpread({}, _redux_Dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"]))(Object(react_window_size_listener__WEBPACK_IMPORTED_MODULE_15__["withWindowSizeListener"])(Index)));

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/sale/sale-widget.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/sale/sale-widget.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./resources/js/isomophic/admin/containers/Widgets/sale/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fontColor = _this$props.fontColor,
          label = _this$props.label,
          height = _this$props.height,
          price = _this$props.price,
          details = _this$props.details;
      var textColor = {
        color: fontColor
      };
      var styleSale = {
        height: height
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SaleWidgetWrapper"], {
        className: "isoSaleWidget",
        style: styleSale
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "isoSaleLabel"
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "isoSalePrice",
        style: textColor
      }, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "isoSaleDetails"
      }, details));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/sale/style.js":
/*!***********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/sale/style.js ***!
  \***********************************************************************/
/*! exports provided: SaleWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleWidgetWrapper", function() { return SaleWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  background-color: #ffffff;\n  overflow: hidden;\n  border: 1px solid ", ";\n\n  .isoSaleLabel {\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 1.2;\n    text-transform: uppercase;\n    color: ", ";\n    margin: 0 0 20px;\n  }\n\n  .isoSalePrice {\n    font-size: 28px;\n    font-weight: 300;\n    line-height: 1.2;\n    margin: 0 0 20px;\n  }\n\n  .isoSaleDetails {\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: ", ";\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SaleWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2));


/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/sticker/sticker-widget.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/sticker/sticker-widget.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./resources/js/isomophic/admin/containers/Widgets/sticker/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fontColor = _this$props.fontColor,
          bgColor = _this$props.bgColor,
          width = _this$props.width,
          height = _this$props.height,
          icon = _this$props.icon,
          number = _this$props.number,
          text = _this$props.text;
      var textColor = {
        color: fontColor
      };
      var widgetStyle = {
        backgroundColor: bgColor,
        width: width,
        height: height
      };
      var iconStyle = {
        color: fontColor
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["StickerWidgetWrapper"], {
        className: "isoStickerWidget",
        style: widgetStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoIconWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: icon,
        style: iconStyle
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoContentWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "isoStatNumber",
        style: textColor
      }, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "isoLabel",
        style: textColor
      }, text)));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/sticker/style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/sticker/style.js ***!
  \**************************************************************************/
/*! exports provided: StickerWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerWidgetWrapper", function() { return StickerWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _settings_style_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../settings/style-util */ "./resources/js/isomophic/settings/style-util.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n  overflow: hidden;\n  ", ";\n\n  .isoIconWrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 80px;\n    flex-shrink: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n\n    i {\n      font-size: 30px;\n    }\n  }\n\n  .isoContentWrapper {\n    width: 100%;\n    padding: 20px 15px 20px 20px;\n    display: flex;\n    flex-direction: column;\n\n    .isoStatNumber {\n      font-size: 20px;\n      font-weight: 500;\n      line-height: 1.1;\n      margin: 0 0 5px;\n    }\n\n    .isoLabel {\n      font-size: 16px;\n      font-weight: 400;\n      margin: 0;\n      line-height: 1.2;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StickerWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_1__["borderRadius"])('5px'));


/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/style.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/style.js ***!
  \******************************************************************/
/*! exports provided: WidgetWrapper, WidgetBox, WidgetColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetWrapper", function() { return WidgetWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetBox", function() { return WidgetBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetColumn", function() { return WidgetColumn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  align-content: flex-start;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  padding: ", ";\n  background-color: #ffffff;\n  border: 1px solid ", ";\n\n  canvas {\n    width: 100% !important;\n    height: 100% !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 10px;\n\n  @media only screen and (max-width: 767) {\n    margin-right: 0 !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var WidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
var WidgetBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (props) {
  return props.height ? "".concat(props.height, "px") : '100%';
}, function (props) {
  return props.padding ? props.padding : '30px';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2));
var WidgetColumn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());


/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/widget-box.js":
/*!***********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/widget-box.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./resources/js/isomophic/admin/containers/Widgets/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style,
          height = _this$props.height,
          padding = _this$props.padding; // const boxStyle = {
      //   height: this.props.height,
      //   padding: this.props.padding,
      //   ...style,
      // };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["WidgetBox"], {
        className: "isoWidgetBox",
        height: height,
        padding: padding,
        style: style
      }, children);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Widgets/widgets-wrapper.js":
/*!****************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Widgets/widgets-wrapper.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./resources/js/isomophic/admin/containers/Widgets/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          gutterTop = _this$props.gutterTop,
          gutterRight = _this$props.gutterRight,
          gutterBottom = _this$props.gutterBottom,
          gutterLeft = _this$props.gutterLeft,
          padding = _this$props.padding,
          bgColor = _this$props.bgColor,
          children = _this$props.children;
      var wrapperStyle = {
        width: width,
        marginTop: gutterTop,
        marginRight: gutterRight,
        marginBottom: gutterBottom,
        marginLeft: gutterLeft,
        padding: padding,
        backgroundColor: bgColor
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["WidgetWrapper"], {
        className: "isoWidgetsWrapper",
        style: wrapperStyle
      }, children);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/components/feedback/popconfirm.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/components/feedback/popconfirm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Popconfirm"]);

/***/ }),

/***/ "./resources/js/isomophic/components/tables/deleteCell.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/components/tables/deleteCell.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feedback_popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feedback/popconfirm */ "./resources/js/isomophic/components/feedback/popconfirm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          onDeleteCell = _this$props.onDeleteCell;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feedback_popconfirm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Sure to delete?",
        okText: "DELETE",
        cancelText: "No",
        onConfirm: function onConfirm() {
          return onDeleteCell(index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Delete"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/components/tables/editableCell.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/components/tables/editableCell.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uielements_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uielements/input */ "./resources/js/isomophic/components/uielements/input.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.value,
      editable: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.target.value;

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      _this.setState({
        editable: false
      });

      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value, _this.props.columnsKey, _this.props.index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "edit", function () {
      _this.setState({
        editable: true
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          editable = _this$state.editable;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoEditData"
      }, editable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoEditDataWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_uielements_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: value,
        onChange: this.handleChange,
        onPressEnter: this.check
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "check",
        className: "isoEditIcon",
        onClick: this.check
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "isoDataWrapper"
      }, value || ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "edit",
        className: "isoEditIcon",
        onClick: this.edit
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/components/tables/filterDropdown.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/components/tables/filterDropdown.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uielements_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uielements/input */ "./resources/js/isomophic/components/uielements/input.js");
/* harmony import */ var _uielements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uielements/button */ "./resources/js/isomophic/components/uielements/button.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          searchText = _this$props.searchText,
          onInputChange = _this$props.onInputChange,
          onSearch = _this$props.onSearch;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoTableSearchBox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_uielements_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "tableFilterInput",
        placeholder: "Search name",
        value: searchText,
        onChange: onInputChange,
        onPressEnter: onSearch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_uielements_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "primary",
        onClick: onSearch
      }, "Search"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/components/tables/helperCells.js":
/*!*****************************************************************!*\
  !*** ./resources/js/isomophic/components/tables/helperCells.js ***!
  \*****************************************************************/
/*! exports provided: DateCell, ImageCell, LinkCell, TextCell, EditableCell, DeleteCell, FilterDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCell", function() { return DateCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCell", function() { return ImageCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCell", function() { return LinkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCell", function() { return TextCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCell */ "./resources/js/isomophic/components/tables/imageCell.js");
/* harmony import */ var _deleteCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteCell */ "./resources/js/isomophic/components/tables/deleteCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteCell", function() { return _deleteCell__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _editableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editableCell */ "./resources/js/isomophic/components/tables/editableCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableCell", function() { return _editableCell__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _filterDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterDropdown */ "./resources/js/isomophic/components/tables/filterDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDropdown", function() { return _filterDropdown__WEBPACK_IMPORTED_MODULE_4__["default"]; });







var DateCell = function DateCell(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.toLocaleString());
};

var ImageCell = function ImageCell(src) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: src
  });
};

var LinkCell = function LinkCell(link, href) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href ? href : '#'
  }, link);
};

var TextCell = function TextCell(text) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text);
};



/***/ }),

/***/ "./resources/js/isomophic/components/tables/imageCell.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/components/tables/imageCell.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PendingPool = {};
var ReadyPool = {};

var ImageCell = /*#__PURE__*/function (_Component) {
  _inherits(ImageCell, _Component);

  var _super = _createSuper(ImageCell);

  function ImageCell(props) {
    var _this;

    _classCallCheck(this, ImageCell);

    _this = _super.call(this, props);
    _this.loadImage = _this.loadImage.bind(_assertThisInitialized(_this));
    _this.onLoadImage = _this.onLoadImage.bind(_assertThisInitialized(_this));
    _this.state = {
      ready: false
    };
    return _this;
  }

  _createClass(ImageCell, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadImage(this.props.src);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this.setState({
          src: null
        });
        this.loadImage(nextProps.src);
      }
    }
  }, {
    key: "loadImage",
    value: function loadImage(src) {
      if (ReadyPool[src]) {
        this.setState({
          src: src
        });
        return;
      }

      if (PendingPool[src]) {
        PendingPool[src].push(this.onLoadImage);
        return;
      }

      PendingPool[src] = [this.onLoadImage];
      var img = new Image();

      img.onload = function () {
        PendingPool[src].forEach(function (callback) {
          callback(src);
        });
        delete PendingPool[src];
        img.onload = null;
        src = undefined;
      };

      img.src = src;
    }
  }, {
    key: "onLoadImage",
    value: function onLoadImage(src) {
      ReadyPool[src] = true;

      if (src === this.props.src) {
        this.setState({
          src: src
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.state.src ? {
        backgroundImage: "url(".concat(this.state.src, ")"),
        width: '70px',
        height: '70px',
        backgroundSize: 'cover'
      } : undefined;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "exampleImage",
        style: style
      });
    }
  }]);

  return ImageCell;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/components/uielements/form.js":
/*!**************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/form.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Form"]);

/***/ }),

/***/ "./resources/js/isomophic/components/uielements/styles/switch.style.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/styles/switch.style.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &.ant-switch-checked {\n    border-color: ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var AntSwitch = function AntSwitch(ComponentName) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentName)(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
};

/* harmony default export */ __webpack_exports__["default"] = (AntSwitch);

/***/ }),

/***/ "./resources/js/isomophic/components/uielements/styles/tab.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/styles/tab.style.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &.ant-tabs {\n    &:not(.ant-tabs-vertical) {\n      > .ant-tabs-content-animated {\n        display: ", ";\n      }\n    }\n\n    .ant-tabs-nav {\n      .ant-tabs-tab {\n        margin: ", ";\n\n        .anticon:not(.anticon-close) {\n          margin: ", ";\n\n          &.anticon-close{\n            right: ", ";;\n            left: ", ";;\n          }\n        }\n      }\n    }\n\n    .ant-tabs-tab-prev {\n      left: ", ";\n      right ", ";\n      transform: ", ";\n\n    }\n\n    .ant-tabs-tab-next {\n      left: ", ";\n      right ", ";\n      transform: ", ";\n    }\n\n    &.ant-tabs-vertical{\n      .ant-tabs-tab-prev,\n      .ant-tabs-tab-next{\n        transform: rotate(0);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var AntTab = function AntTab(ComponentName) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentName)(_templateObject(), function (props) {
    return props['data-rtl'] === 'rtl' ? 'block' : 'flex';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? '0 0 0 24px' : '0 24px 0 0';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? 'inherit' : '2px';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? '2px' : 'inherit';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? 'inherit' : '0';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? '2px' : 'inherit';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? '0' : 'inherit';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? 'inherit' : '2px';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AntTab);

/***/ }),

/***/ "./resources/js/isomophic/components/uielements/switch.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/switch.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_switch_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/switch.style */ "./resources/js/isomophic/components/uielements/styles/switch.style.js");


var Switches = Object(_styles_switch_style__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"]);
/* harmony default export */ __webpack_exports__["default"] = (Switches);

/***/ }),

/***/ "./resources/js/isomophic/components/uielements/tabs.js":
/*!**************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/tabs.js ***!
  \**************************************************************/
/*! exports provided: default, TabPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_tab_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/tab.style */ "./resources/js/isomophic/components/uielements/styles/tab.style.js");
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");



var WDTabs = Object(_styles_tab_style__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tabs"]);
var TabPane = antd__WEBPACK_IMPORTED_MODULE_0__["Tabs"].TabPane;
var isoTabs = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDTabs);
/* harmony default export */ __webpack_exports__["default"] = (isoTabs);


/***/ }),

/***/ "./resources/js/isomophic/components/utility/box.js":
/*!**********************************************************!*\
  !*** ./resources/js/isomophic/components/utility/box.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boxTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxTitle */ "./resources/js/isomophic/components/utility/boxTitle.js");
/* harmony import */ var _box_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box.style */ "./resources/js/isomophic/components/utility/box.style.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box_style__WEBPACK_IMPORTED_MODULE_2__["BoxWrapper"], {
    className: "".concat(props.className, " isoBoxWrapper"),
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    subtitle: props.subtitle
  }), props.children);
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/box.style.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/box.style.js ***!
  \****************************************************************/
/*! exports provided: BoxWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxWrapper", function() { return BoxWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ", ";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ", ";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), ''
/* margin: 0 10px 30px; */
);


/***/ }),

/***/ "./resources/js/isomophic/components/utility/boxTitle.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/boxTitle.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boxTitle_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxTitle.style */ "./resources/js/isomophic/components/utility/boxTitle.style.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle_style__WEBPACK_IMPORTED_MODULE_1__["BoxTitle"], {
    className: "isoBoxTitle"
  }, ' ', props.title, ' ') : '', props.subtitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle_style__WEBPACK_IMPORTED_MODULE_1__["BoxSubTitle"], {
    className: "isoBoxSubTitle"
  }, ' ', props.subtitle, ' ') : '');
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/boxTitle.style.js":
/*!*********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/boxTitle.style.js ***!
  \*********************************************************************/
/*! exports provided: BoxTitle, BoxSubTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxTitle", function() { return BoxTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSubTitle", function() { return BoxSubTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ", ";\n  line-height: 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  margin: 0;\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0));
var BoxSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject2(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));


/***/ }),

/***/ "./resources/js/isomophic/components/utility/contentHolder.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/contentHolder.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentHolder_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentHolder.style */ "./resources/js/isomophic/components/utility/contentHolder.style.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contentHolder_style__WEBPACK_IMPORTED_MODULE_1__["ContentHolderWrapper"], {
    className: "isoExampleWrapper",
    style: props.style
  }, props.children);
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/contentHolder.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/contentHolder.style.js ***!
  \**************************************************************************/
/*! exports provided: ContentHolderWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHolderWrapper", function() { return ContentHolderWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ", ";\n    margin-left: ", ";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ", ";\n      margin-right: ", ";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ", ";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ", ";\n      margin-right: ", ";\n    }\n\n    &:nth-child(4) {\n      margin-left: ", ";\n      margin-right: ", ";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ", ";\n      white-space: nowrap;\n      margin-right: ", ";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ", ";\n      margin-left: ", ";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ", ";\n      margin-left: ", ";\n\n      &:last-child {\n        margin-right: ", ";\n        margin-left: ", ";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var WDContentHolderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '10px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '10px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '70px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '70px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'right' : 'left';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '295px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '295px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '70px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '70px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '8px' : '0 !important';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0 !important' : '8px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '8px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '8px' : '0';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 1), function (props) {
  return props['data-rtl'] === 'rtl' ? 'auto' : '6px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '6px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '15px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '15px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '0';
});
var ContentHolderWrapper = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDContentHolderWrapper);


/***/ }),

/***/ "./resources/js/isomophic/components/utility/pageHeader.js":
/*!*****************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/pageHeader.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageHeader_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader.style */ "./resources/js/isomophic/components/utility/pageHeader.style.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pageHeader_style__WEBPACK_IMPORTED_MODULE_1__["ComponentTitleWrapper"], {
    className: "isoComponentTitle"
  }, props.children);
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/pageHeader.style.js":
/*!***********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/pageHeader.style.js ***!
  \***********************************************************************/
/*! exports provided: ComponentTitleWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTitleWrapper", function() { return ComponentTitleWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ", ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ", ";\n    display: flex;\n    margin: ", ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ", ";\n    display: flex;\n    margin: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var WDComponentTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 3), function (props) {
  return props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 3), function (props) {
  return props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px';
});
var ComponentTitleWrapper = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDComponentTitleWrapper);


/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/configs.js":
/*!***********************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/configs.js ***!
  \***********************************************************************/
/*! exports provided: columns, tableinfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableinfos", function() { return tableinfos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tables/helperCells */ "./resources/js/isomophic/components/tables/helperCells.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var renderCell = function renderCell(object, type, key) {
  var value = object[key];

  switch (type) {
    case 'ImageCell':
      return Object(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__["ImageCell"])(value);

    case 'DateCell':
      return Object(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__["DateCell"])(value);

    case 'LinkCell':
      return Object(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__["LinkCell"])(value);

    default:
      return Object(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__["TextCell"])(value);
  }
};

var columns = [{
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.image"
  }),
  key: 'avatar',
  width: '1%',
  className: 'isoImageCell',
  render: function render(object) {
    return renderCell(object, 'ImageCell', 'avatar');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.firstName"
  }),
  key: 'firstName',
  width: 100,
  render: function render(object) {
    return renderCell(object, 'TextCell', 'firstName');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.lastName"
  }),
  key: 'lastName',
  width: 100,
  render: function render(object) {
    return renderCell(object, 'TextCell', 'lastName');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.city"
  }),
  key: 'city',
  width: 200,
  render: function render(object) {
    return renderCell(object, 'TextCell', 'city');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.street"
  }),
  key: 'street',
  width: 200,
  render: function render(object) {
    return renderCell(object, 'TextCell', 'street');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.email"
  }),
  key: 'email',
  width: 200,
  render: function render(object) {
    return renderCell(object, 'LinkCell', 'email');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "antTable.title.dob"
  }),
  key: 'date',
  width: 200,
  render: function render(object) {
    return renderCell(object, 'DateCell', 'date');
  }
}];
var smallColumns = [columns[1], columns[2], columns[3], columns[4]];
var sortColumns = [_objectSpread({}, columns[1], {
  sorter: true
}), _objectSpread({}, columns[2], {
  sorter: true
}), _objectSpread({}, columns[3], {
  sorter: true
}), _objectSpread({}, columns[4], {
  sorter: true
})];
var editColumns = [_objectSpread({}, columns[1], {
  width: 300
}), _objectSpread({}, columns[2], {
  width: 300
}), columns[3], columns[4]];
var groupColumns = [columns[0], {
  title: 'Name',
  children: [columns[1], columns[2]]
}, {
  title: 'Address',
  children: [columns[3], columns[4]]
}];
var tableinfos = [{
  title: 'Simple Table',
  value: 'simple',
  columns: clone__WEBPACK_IMPORTED_MODULE_1___default()(smallColumns)
}, {
  title: 'Sortable Table',
  value: 'sortView',
  columns: clone__WEBPACK_IMPORTED_MODULE_1___default()(sortColumns)
}, {
  title: 'Search Text',
  value: 'filterView',
  columns: clone__WEBPACK_IMPORTED_MODULE_1___default()(smallColumns)
}, {
  title: 'Editable View',
  value: 'editView',
  columns: clone__WEBPACK_IMPORTED_MODULE_1___default()(editColumns)
}, {
  title: 'Grouping View',
  value: 'groupView',
  columns: clone__WEBPACK_IMPORTED_MODULE_1___default()(groupColumns)
}, {
  title: 'Customized View',
  value: 'customizedView',
  columns: clone__WEBPACK_IMPORTED_MODULE_1___default()(columns)
}];


/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/demo.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/demo.style.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ant-tabs-content {\n    margin-top: 40px;\n  }\n\n  .ant-tabs-nav {\n    > div {\n      color: ", ";\n\n      &.ant-tabs-ink-bar {\n        background-color: ", ";\n      }\n\n      &.ant-tabs-tab-active {\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var TableDemoStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["default"] = (TableDemoStyle);

/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/index.js ***!
  \*********************************************************************/
/*! exports provided: default, TableViews, tableinfos, dataList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AntTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataList", function() { return dataList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_uielements_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/uielements/tabs */ "./resources/js/isomophic/components/uielements/tabs.js");
/* harmony import */ var _components_utility_layoutWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper.js */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _demo_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.style */ "./resources/js/isomophic/containers/Tables/antTables/demo.style.js");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fakeData */ "./resources/js/isomophic/containers/Tables/fakeData.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs */ "./resources/js/isomophic/containers/Tables/antTables/configs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableinfos", function() { return _configs__WEBPACK_IMPORTED_MODULE_5__["tableinfos"]; });

/* harmony import */ var _tableViews___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableViews/ */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "TableViews", function() { return _tableViews___WEBPACK_IMPORTED_MODULE_6__; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var dataList = new _fakeData__WEBPACK_IMPORTED_MODULE_4__["default"](10);

var AntTable = /*#__PURE__*/function (_Component) {
  _inherits(AntTable, _Component);

  var _super = _createSuper(AntTable);

  function AntTable() {
    _classCallCheck(this, AntTable);

    return _super.apply(this, arguments);
  }

  _createClass(AntTable, [{
    key: "renderTable",
    value: function renderTable(tableInfo) {
      var Component;

      switch (tableInfo.value) {
        case 'sortView':
          Component = _tableViews___WEBPACK_IMPORTED_MODULE_6__["SortView"];
          break;

        case 'filterView':
          Component = _tableViews___WEBPACK_IMPORTED_MODULE_6__["FilterView"];
          break;

        case 'editView':
          Component = _tableViews___WEBPACK_IMPORTED_MODULE_6__["EditView"];
          break;

        case 'groupView':
          Component = _tableViews___WEBPACK_IMPORTED_MODULE_6__["GroupView"];
          break;

        case 'customizedView':
          Component = _tableViews___WEBPACK_IMPORTED_MODULE_6__["CustomizedView"];
          break;

        default:
          Component = _tableViews___WEBPACK_IMPORTED_MODULE_6__["SimpleView"];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        tableInfo: tableInfo,
        dataList: dataList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_demo_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "isoLayoutContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "isoTableDisplayTab"
      }, _configs__WEBPACK_IMPORTED_MODULE_5__["tableinfos"].map(function (tableInfo) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
          tab: tableInfo.title,
          key: tableInfo.value
        }, _this.renderTable(tableInfo));
      }))));
    }
  }]);

  return AntTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);




/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/customizedView.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/customizedView.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antTable_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../antTable.style */ "./resources/js/isomophic/containers/Tables/antTables/antTable.style.js");
/* harmony import */ var _components_uielements_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/uielements/switch */ "./resources/js/isomophic/components/uielements/switch.js");
/* harmony import */ var _components_uielements_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/uielements/form */ "./resources/js/isomophic/components/uielements/form.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var FormItem = _components_uielements_form__WEBPACK_IMPORTED_MODULE_3__["default"].Item;

var expandedRowRender = function expandedRowRender(record) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(record.firstName, " lives in ").concat(record.city));
};

var title = function title() {
  return 'Here is title';
};

var showHeader = true;

var footer = function footer() {
  return 'Here is footer';
};

var scroll = {
  y: 240
};
var toggleOptions = [{
  defaultValue: true,
  title: 'Bordered',
  key: 'bordered'
}, {
  defaultValue: true,
  title: 'Loading',
  key: 'loading'
}, {
  defaultValue: true,
  title: 'Pagination',
  key: 'pagination'
}, {
  defaultValue: title,
  title: 'Title',
  key: 'title'
}, {
  defaultValue: showHeader,
  title: 'Show Header',
  key: 'showHeader'
}, {
  defaultValue: footer,
  title: 'Footer',
  key: 'footer'
}, {
  defaultValue: expandedRowRender,
  title: 'Expanded Row Render',
  key: 'expandedRowRender'
}, {
  defaultValue: {},
  title: 'Checkbox',
  key: 'rowSelection'
}, {
  defaultValue: scroll,
  title: 'Scrollable',
  key: 'scroll'
}];

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.renderSwitch = _this.renderSwitch.bind(_assertThisInitialized(_this));
    _this.state = {
      bordered: undefined,
      loading: undefined,
      pagination: true,
      size: 'default',
      expandedRowRender: expandedRowRender,
      title: title,
      showHeader: showHeader,
      footer: footer,
      rowSelection: {},
      scroll: undefined
    };
    return _this;
  }

  _createClass(_default, [{
    key: "renderSwitch",
    value: function renderSwitch(option) {
      var _this2 = this;

      var checked = this.state[option.key] !== undefined;

      var onChange = function onChange() {
        if (!checked) {
          _this2.setState(_defineProperty({}, option.key, option.defaultValue));
        } else {
          _this2.setState(_defineProperty({}, option.key, undefined));
        }
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
        label: option.title,
        key: option.key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        checked: checked,
        onChange: onChange
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_1__["CustomizedTableWrapper"], {
        className: "isoCustomizedTableWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoCustomizedTableControlBar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
        layout: "inline"
      }, toggleOptions.map(function (option) {
        return _this3.renderSwitch(option);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.state, {
        columns: this.props.tableInfo.columns,
        dataSource: this.props.dataList.getAll(),
        className: "isoCustomizedTable"
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/editView.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/editView.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _antTable_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../antTable.style */ "./resources/js/isomophic/containers/Tables/antTables/antTable.style.js");
/* harmony import */ var _components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/tables/helperCells */ "./resources/js/isomophic/components/tables/helperCells.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDeleteCell", function (index) {
      var dataList = _this.state.dataList;
      dataList.splice(index, 1);

      _this.setState({
        dataList: dataList
      });
    });

    _this.onCellChange = _this.onCellChange.bind(_assertThisInitialized(_this));
    _this.onDeleteCell = _this.onDeleteCell.bind(_assertThisInitialized(_this));
    _this.state = {
      columns: _this.createcolumns(clone__WEBPACK_IMPORTED_MODULE_1___default()(_this.props.tableInfo.columns)),
      dataList: _this.props.dataList.getAll()
    };
    return _this;
  }

  _createClass(_default, [{
    key: "createcolumns",
    value: function createcolumns(columns) {
      var _this2 = this;

      var editColumnRender = function editColumnRender(text, record, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__["EditableCell"], {
          index: index,
          columnsKey: columns[0].key,
          value: text[columns[0].key],
          onChange: _this2.onCellChange
        });
      };

      columns[0].render = editColumnRender;
      var deleteColumn = {
        title: 'operation',
        dataIndex: 'operation',
        render: function render(text, record, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_3__["DeleteCell"], {
            index: index,
            onDeleteCell: _this2.onDeleteCell
          });
        }
      };
      columns.push(deleteColumn);
      return columns;
    }
  }, {
    key: "onCellChange",
    value: function onCellChange(value, columnsKey, index) {
      var dataList = this.state.dataList;
      dataList[index][columnsKey] = value;
      this.setState({
        dataList: dataList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          columns = _this$state.columns,
          dataList = _this$state.dataList;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        columns: columns,
        dataSource: dataList,
        className: "isoEditableTable"
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/filterView.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/filterView.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_tables_helperCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/tables/helperCells */ "./resources/js/isomophic/components/tables/helperCells.js");
/* harmony import */ var _antTable_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../antTable.style */ "./resources/js/isomophic/containers/Tables/antTables/antTable.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.onSearch = _this.onSearch.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.state = {
      dataList: _this.props.dataList.getAll(),
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    };
    return _this;
  }

  _createClass(_default, [{
    key: "onSearch",
    value: function onSearch() {
      var searchText = this.state.searchText;
      searchText = searchText.toUpperCase();
      var dataList = this.props.dataList.getAll().filter(function (data) {
        return data['firstName'].toUpperCase().includes(searchText);
      });
      this.setState({
        dataList: dataList,
        filterDropdownVisible: false,
        searchText: '',
        filtered: false
      });
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      this.setState({
        searchText: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var searchText = this.state.searchText;
      var columns = this.props.tableInfo.columns;
      var filterDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tables_helperCells__WEBPACK_IMPORTED_MODULE_2__["FilterDropdown"], {
        searchText: searchText,
        onInputChange: this.onInputChange,
        onSearch: this.onSearch
      });
      columns[0] = _objectSpread({}, columns[0], {
        filterDropdown: filterDropdown,
        filterIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "search",
          style: {
            color: this.state.filtered ? '#108ee9' : '#aaa'
          }
        }),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
          return _this2.setState({
            filterDropdownVisible: visible
          }, function () {
            return document.getElementById('tableFilterInput').focus();
          });
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
        columns: columns,
        onChange: this.onChange,
        dataSource: this.state.dataList,
        className: "isoSearchableTable"
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/groupView.js":
/*!************************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/groupView.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antTable_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../antTable.style */ "./resources/js/isomophic/containers/Tables/antTables/antTable.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
        columns: this.props.tableInfo.columns,
        dataSource: this.props.dataList.getAll(),
        className: "isoGroupTable"
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/index.js ***!
  \********************************************************************************/
/*! exports provided: SimpleView, SortView, CustomizedView, FilterView, GroupView, EditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customizedView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizedView */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/customizedView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizedView", function() { return _customizedView__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _simpleView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simpleView */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/simpleView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleView", function() { return _simpleView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sortView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortView */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/sortView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortView", function() { return _sortView__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _filterView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterView */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/filterView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterView", function() { return _filterView__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _groupView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groupView */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/groupView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupView", function() { return _groupView__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _editView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editView */ "./resources/js/isomophic/containers/Tables/antTables/tableViews/editView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditView", function() { return _editView__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/simpleView.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/simpleView.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antTable_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../antTable.style */ "./resources/js/isomophic/containers/Tables/antTables/antTable.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var dataSource = this.props.dataSource || this.props.dataList.getAll();
      var columns = this.props.columns || this.props.tableInfo.columns;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
        pagination: false,
        columns: columns,
        dataSource: dataSource,
        className: "isoSimpleTable"
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/antTables/tableViews/sortView.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/antTables/tableViews/sortView.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antTable_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../antTable.style */ "./resources/js/isomophic/containers/Tables/antTables/antTable.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.state = {
      dataList: _this.props.dataList.getAll()
    };
    return _this;
  }

  _createClass(_default, [{
    key: "onChange",
    value: function onChange(pagination, filters, sorter) {
      var dataList = this.props.dataList;

      if (sorter && sorter.columnKey && sorter.order) {
        if (sorter.order === 'ascend') {
          dataList.getSortAsc(sorter.columnKey);
        } else {
          dataList.getSortDesc(sorter.columnKey);
        }

        this.setState({
          dataList: dataList.getAll()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_antTable_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
        columns: this.props.tableInfo.columns,
        onChange: this.onChange,
        dataSource: this.state.dataList,
        className: "isoSortingTable"
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/isomophic/containers/Tables/fakeData.js":
/*!**************************************************************!*\
  !*** ./resources/js/isomophic/containers/Tables/fakeData.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var tableData = JSON.parse("[{\n  \"id\": 0,\n  \"key\": 0,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg\",\n  \"city\": \"Lake Zelda\",\n  \"email\": \"Lonny79@hotmail.com\",\n  \"firstName\": \"Emelia\",\n  \"lastName\": \"Gislason\",\n  \"street\": \"Kulas Shoals\",\n  \"zipCode\": \"52677\",\n  \"date\": \"2016-09-27T08:18:56.302Z\",\n  \"bs\": \"back-end optimize e-markets\",\n  \"catchPhrase\": \"Devolved heuristic focus group\",\n  \"companyName\": \"Kessler LLC\",\n  \"words\": \"dignissimos et natus\",\n  \"sentence\": \"Illum molestiae saepe eaque odit magnam veritatis eligendi est qui.\"\n}, {\n  \"id\": 1,\n  \"key\": 1,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg\",\n  \"city\": \"East Pierce\",\n  \"email\": \"Lucinda_Gottlieb@hotmail.com\",\n  \"firstName\": \"Cloyd\",\n  \"lastName\": \"Armstrong\",\n  \"street\": \"Lyla Heights\",\n  \"zipCode\": \"64903\",\n  \"date\": \"2016-10-08T06:30:16.347Z\",\n  \"bs\": \"seamless mesh vortals\",\n  \"catchPhrase\": \"Managed background migration\",\n  \"companyName\": \"Doyle and Sons\",\n  \"words\": \"voluptatum dignissimos possimus\",\n  \"sentence\": \"Aut similique a qui.\"\n}, {\n  \"id\": 2,\n  \"key\": 2,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg\",\n  \"city\": \"Sibylside\",\n  \"email\": \"Ransom.Bergstrom@gmail.com\",\n  \"firstName\": \"Rahul\",\n  \"lastName\": \"Funk\",\n  \"street\": \"Jolie Shoals\",\n  \"zipCode\": \"46659\",\n  \"date\": \"2017-05-16T02:02:32.105Z\",\n  \"bs\": \"bleeding-edge enhance e-commerce\",\n  \"catchPhrase\": \"Public-key intermediate hardware\",\n  \"companyName\": \"Champlin and Sons\",\n  \"words\": \"est est corrupti\",\n  \"sentence\": \"Qui consequatur aut dignissimos error qui praesentium sit et unde.\"\n}, {\n  \"id\": 3,\n  \"key\": 3,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg\",\n  \"city\": \"Anaisshire\",\n  \"email\": \"Loyce.Upton@hotmail.com\",\n  \"firstName\": \"Hilbert\",\n  \"lastName\": \"Langosh\",\n  \"street\": \"Sim Station\",\n  \"zipCode\": \"22101\",\n  \"date\": \"2017-01-28T01:56:10.609Z\",\n  \"bs\": \"24/7 orchestrate communities\",\n  \"catchPhrase\": \"Team-oriented fault-tolerant help-desk\",\n  \"companyName\": \"Shields Inc\",\n  \"words\": \"aut perspiciatis totam\",\n  \"sentence\": \"Ut omnis et.\"\n}, {\n  \"id\": 4,\n  \"key\": 4,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg\",\n  \"city\": \"North Brad\",\n  \"email\": \"Cassidy48@hotmail.com\",\n  \"firstName\": \"Cloyd\",\n  \"lastName\": \"Wilderman\",\n  \"street\": \"Ruecker Turnpike\",\n  \"zipCode\": \"93686\",\n  \"date\": \"2016-12-30T12:07:39.922Z\",\n  \"bs\": \"sticky e-enable metrics\",\n  \"catchPhrase\": \"Re-engineered intangible methodology\",\n  \"companyName\": \"Hoeger Inc\",\n  \"words\": \"iusto ut voluptatem\",\n  \"sentence\": \"Praesentium sit exercitationem aut.\"\n}, {\n  \"id\": 5,\n  \"key\": 5,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg\",\n  \"city\": \"Goyetteside\",\n  \"email\": \"Tamia.Abbott98@hotmail.com\",\n  \"firstName\": \"Jonatan\",\n  \"lastName\": \"Gutmann\",\n  \"street\": \"Donnelly Mountains\",\n  \"zipCode\": \"92491-2242\",\n  \"date\": \"2016-10-14T20:54:07.802Z\",\n  \"bs\": \"B2C reintermediate initiatives\",\n  \"catchPhrase\": \"Upgradable leading edge access\",\n  \"companyName\": \"Greenholt and Sons\",\n  \"words\": \"deserunt vel expedita\",\n  \"sentence\": \"Sed dolorem amet voluptatem sed quasi.\"\n}, {\n  \"id\": 6,\n  \"key\": 6,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg\",\n  \"city\": \"West Terrence\",\n  \"email\": \"Tina.Stehr66@hotmail.com\",\n  \"firstName\": \"Verdie\",\n  \"lastName\": \"O'Conner\",\n  \"street\": \"Windler Mountains\",\n  \"zipCode\": \"93882\",\n  \"date\": \"2017-02-20T15:34:54.827Z\",\n  \"bs\": \"one-to-one deploy technologies\",\n  \"catchPhrase\": \"Multi-lateral 24 hour workforce\",\n  \"companyName\": \"Herzog - Pagac\",\n  \"words\": \"maiores sit distinctio\",\n  \"sentence\": \"Rem illum voluptatibus asperiores.\"\n}, {\n  \"id\": 7,\n  \"key\": 7,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/okseanjay/128.jpg\",\n  \"city\": \"Dietrichfort\",\n  \"email\": \"Hobart_Bashirian67@hotmail.com\",\n  \"firstName\": \"Elza\",\n  \"lastName\": \"Hoeger\",\n  \"street\": \"Howe Stravenue\",\n  \"zipCode\": \"11044\",\n  \"date\": \"2016-09-15T07:33:19.033Z\",\n  \"bs\": \"wireless generate methodologies\",\n  \"catchPhrase\": \"Optional background secured line\",\n  \"companyName\": \"Corwin LLC\",\n  \"words\": \"sit dolores aut\",\n  \"sentence\": \"Non non sit quas.\"\n}, {\n  \"id\": 8,\n  \"key\": 8,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/haligaliharun/128.jpg\",\n  \"city\": \"Kaitlynmouth\",\n  \"email\": \"Jefferey33@hotmail.com\",\n  \"firstName\": \"Gennaro\",\n  \"lastName\": \"Waters\",\n  \"street\": \"O'Hara Radial\",\n  \"zipCode\": \"91831\",\n  \"date\": \"2017-01-14T19:25:48.665Z\",\n  \"bs\": \"open-source morph convergence\",\n  \"catchPhrase\": \"Polarised interactive protocol\",\n  \"companyName\": \"Osinski, Gleason and Schimmel\",\n  \"words\": \"sapiente et praesentium\",\n  \"sentence\": \"Omnis in voluptatibus enim unde nobis.\"\n}, {\n  \"id\": 9,\n  \"key\": 9,\n  \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/mhaligowski/128.jpg\",\n  \"city\": \"Hammeschester\",\n  \"email\": \"Hildegard.Durgan@yahoo.com\",\n  \"firstName\": \"Erling\",\n  \"lastName\": \"Armstrong\",\n  \"street\": \"Fanny Lights\",\n  \"zipCode\": \"96737-2299\",\n  \"date\": \"2016-11-13T03:00:06.957Z\",\n  \"bs\": \"magnetic utilize infrastructures\",\n  \"catchPhrase\": \"Phased reciprocal firmware\",\n  \"companyName\": \"Walker - Cartwright\",\n  \"words\": \"ut qui excepturi\",\n  \"sentence\": \"Culpa dolore nisi vero non.\"\n}]");
var sortOption = {};

var fakeData = /*#__PURE__*/function () {
  function fakeData(size) {
    _classCallCheck(this, fakeData);

    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }

  _createClass(fakeData, [{
    key: "dataModel",
    value: function dataModel(index) {
      return tableData[index];
    }
  }, {
    key: "getObjectAt",
    value: function getObjectAt(index) {
      if (index < 0 || index > this.size) {
        return undefined;
      }

      if (this.datas[index] === undefined) {
        this.datas[index] = this.dataModel(index);
      }

      return this.datas[index];
    }
  }, {
    key: "getAll",
    value: function getAll() {
      if (this.datas.length < this.size) {
        for (var i = 0; i < this.size; i++) {
          this.getObjectAt(i);
        }
      }

      return this.datas.slice();
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "getSortAsc",
    value: function getSortAsc(sortKey) {
      sortOption.sortKey = sortKey;
      sortOption.sortDir = 'ASC';
      return this.datas.sort(this.sort);
    }
  }, {
    key: "getSortDesc",
    value: function getSortDesc(sortKey) {
      sortOption.sortKey = sortKey;
      sortOption.sortDir = 'DESC';
      return this.datas.sort(this.sort);
    }
  }, {
    key: "sort",
    value: function sort(optionA, optionB) {
      var valueA = optionA[sortOption.sortKey].toUpperCase();
      var valueB = optionB[sortOption.sortKey].toUpperCase();
      var sortVal = 0;

      if (valueA > valueB) {
        sortVal = 1;
      }

      if (valueA < valueB) {
        sortVal = -1;
      }

      if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
        return sortVal * -1;
      }

      return sortVal;
    }
  }]);

  return fakeData;
}();

/* harmony default export */ __webpack_exports__["default"] = (fakeData);

/***/ }),

/***/ "./resources/js/isomophic/helpers/asyncComponent.js":
/*!**********************************************************!*\
  !*** ./resources/js/isomophic/helpers/asyncComponent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_placeholder_lib_reactPlaceholder_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder/lib/reactPlaceholder.css */ "./node_modules/react-placeholder/lib/reactPlaceholder.css");
/* harmony import */ var react_placeholder_lib_reactPlaceholder_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_placeholder_lib_reactPlaceholder_css__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AsyncComponent = /*#__PURE__*/function (_Component) {
  _inherits(AsyncComponent, _Component);

  var _super = _createSuper(AsyncComponent);

  function AsyncComponent() {
    var _this;

    _classCallCheck(this, AsyncComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      Component: undefined
    });

    return _this;
  }

  _createClass(AsyncComponent, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var componentArguement, Component, _yield$this$props$loa, googleChart, _yield$this$props$loa2, newComponent;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mounted = true;
                componentArguement = this.props.componentArguement;
                _context.t0 = componentArguement;
                _context.next = _context.t0 === 'googleChart' ? 5 : 11;
                break;

              case 5:
                _context.next = 7;
                return this.props.load;

              case 7:
                _yield$this$props$loa = _context.sent;
                googleChart = _yield$this$props$loa.Chart;
                Component = googleChart;
                return _context.abrupt("break", 16);

              case 11:
                _context.next = 13;
                return this.props.load;

              case 13:
                _yield$this$props$loa2 = _context.sent;
                newComponent = _yield$this$props$loa2["default"];
                Component = newComponent;

              case 16:
                if (this.mounted) {
                  this.setState({
                    Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props.componentProps)
                  });
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // by Duyên

  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(prevProps) {
        var componentArguement, Component, _yield$this$props$loa3, googleChart, _yield$this$props$loa4, newComponent, _componentArguement, _Component2, _yield$this$props$loa5, _googleChart, _yield$this$props$loa6, _newComponent;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.props.componentProps.datas !== prevProps.componentProps.datas)) {
                  _context2.next = 18;
                  break;
                }

                this.mounted = true;
                componentArguement = this.props.componentArguement;
                _context2.t0 = componentArguement;
                _context2.next = _context2.t0 === 'googleChart' ? 6 : 12;
                break;

              case 6:
                _context2.next = 8;
                return this.props.load;

              case 8:
                _yield$this$props$loa3 = _context2.sent;
                googleChart = _yield$this$props$loa3.Chart;
                Component = googleChart;
                return _context2.abrupt("break", 17);

              case 12:
                _context2.next = 14;
                return this.props.load;

              case 14:
                _yield$this$props$loa4 = _context2.sent;
                newComponent = _yield$this$props$loa4["default"];
                Component = newComponent;

              case 17:
                if (this.mounted) {
                  this.setState({
                    Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props.componentProps)
                  });
                }

              case 18:
                if (!(this.props.componentProps.data !== prevProps.componentProps.data)) {
                  _context2.next = 36;
                  break;
                }

                this.mounted = true;
                _componentArguement = this.props.componentArguement;
                _context2.t1 = _componentArguement;
                _context2.next = _context2.t1 === 'googleChart' ? 24 : 30;
                break;

              case 24:
                _context2.next = 26;
                return this.props.load;

              case 26:
                _yield$this$props$loa5 = _context2.sent;
                _googleChart = _yield$this$props$loa5.Chart;
                _Component2 = _googleChart;
                return _context2.abrupt("break", 35);

              case 30:
                _context2.next = 32;
                return this.props.load;

              case 32:
                _yield$this$props$loa6 = _context2.sent;
                _newComponent = _yield$this$props$loa6["default"];
                _Component2 = _newComponent;

              case 35:
                if (this.mounted) {
                  this.setState({
                    Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Component2, this.props.componentProps)
                  });
                }

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidUpdate(_x) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var Component = this.state.Component || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      try {
        if (this.mounted) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_placeholder__WEBPACK_IMPORTED_MODULE_2___default.a, {
            type: "text",
            rows: 7,
            ready: Component !== undefined
          }, Component);
        }
      } catch (e) {}

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  }]);

  return AsyncComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AsyncComponent);

/***/ }),

/***/ "./resources/js/isomophic/settings/basicStyle.js":
/*!*******************************************************!*\
  !*** ./resources/js/isomophic/settings/basicStyle.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rowStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  margin: 0
};
var colStyle = {
  marginBottom: '0',
  padding: 0
};
var gutter = 16;
var basicStyle = {
  rowStyle: rowStyle,
  colStyle: colStyle,
  gutter: gutter
};
/* harmony default export */ __webpack_exports__["default"] = (basicStyle);

/***/ })

}]);