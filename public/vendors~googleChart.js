(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~googleChart"],{

/***/ "./node_modules/loadjs/dist/loadjs.umd.js":
/*!************************************************!*\
  !*** ./node_modules/loadjs/dist/loadjs.umd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
/**
 * Global dependencies.
 * @global {Object} document - DOM
 */

var devnull = function() {},
    bundleIdCache = {},
    bundleResultCache = {},
    bundleCallbackQueue = {};


/**
 * Subscribe to bundle load event.
 * @param {string[]} bundleIds - Bundle ids
 * @param {Function} callbackFn - The callback function
 */
function subscribe(bundleIds, callbackFn) {
  // listify
  bundleIds = bundleIds.push ? bundleIds : [bundleIds];

  var depsNotFound = [],
      i = bundleIds.length,
      numWaiting = i,
      fn,
      bundleId,
      r,
      q;

  // define callback function
  fn = function (bundleId, pathsNotFound) {
    if (pathsNotFound.length) depsNotFound.push(bundleId);

    numWaiting--;
    if (!numWaiting) callbackFn(depsNotFound);
  };

  // register callback
  while (i--) {
    bundleId = bundleIds[i];

    // execute callback if in result cache
    r = bundleResultCache[bundleId];
    if (r) {
      fn(bundleId, r);
      continue;
    }

    // add to callback queue
    q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
    q.push(fn);
  }
}


/**
 * Publish bundle load event.
 * @param {string} bundleId - Bundle id
 * @param {string[]} pathsNotFound - List of files not found
 */
function publish(bundleId, pathsNotFound) {
  // exit if id isn't defined
  if (!bundleId) return;

  var q = bundleCallbackQueue[bundleId];

  // cache result
  bundleResultCache[bundleId] = pathsNotFound;

  // exit if queue is empty
  if (!q) return;

  // empty callback queue
  while (q.length) {
    q[0](bundleId, pathsNotFound);
    q.splice(0, 1);
  }
}


/**
 * Execute callbacks.
 * @param {Object or Function} args - The callback args
 * @param {string[]} depsNotFound - List of dependencies not found
 */
function executeCallbacks(args, depsNotFound) {
  // accept function as argument
  if (args.call) args = {success: args};

  // success and error callbacks
  if (depsNotFound.length) (args.error || devnull)(depsNotFound);
  else (args.success || devnull)(args);
}


/**
 * Load individual file.
 * @param {string} path - The file path
 * @param {Function} callbackFn - The callback function
 */
function loadFile(path, callbackFn, args, numTries) {
  var doc = document,
      async = args.async,
      maxTries = (args.numRetries || 0) + 1,
      beforeCallbackFn = args.before || devnull,
      pathStripped = path.replace(/^(css|img)!/, ''),
      isLegacyIECss,
      e;

  numTries = numTries || 0;

  if (/(^css!|\.css$)/.test(path)) {
    // css
    e = doc.createElement('link');
    e.rel = 'stylesheet';
    e.href = pathStripped;

    // tag IE9+
    isLegacyIECss = 'hideFocus' in e;

    // use preload in IE Edge (to detect load errors)
    if (isLegacyIECss && e.relList) {
      isLegacyIECss = 0;
      e.rel = 'preload';
      e.as = 'style';
    }
  } else if (/(^img!|\.(png|gif|jpg|svg)$)/.test(path)) {
    // image
    e = doc.createElement('img');
    e.src = pathStripped;    
  } else {
    // javascript
    e = doc.createElement('script');
    e.src = path;
    e.async = async === undefined ? true : async;
  }

  e.onload = e.onerror = e.onbeforeload = function (ev) {
    var result = ev.type[0];

    // treat empty stylesheets as failures to get around lack of onerror
    // support in IE9-11
    if (isLegacyIECss) {
      try {
        if (!e.sheet.cssText.length) result = 'e';
      } catch (x) {
        // sheets objects created from load errors don't allow access to
        // `cssText` (unless error is Code:18 SecurityError)
        if (x.code != 18) result = 'e';
      }
    }

    // handle retries in case of load failure
    if (result == 'e') {
      // increment counter
      numTries += 1;

      // exit function and try again
      if (numTries < maxTries) {
        return loadFile(path, callbackFn, args, numTries);
      }
    } else if (e.rel == 'preload' && e.as == 'style') {
      // activate preloaded stylesheets
      return e.rel = 'stylesheet'; // jshint ignore:line
    }
    
    // execute callback
    callbackFn(path, result, ev.defaultPrevented);
  };

  // add to document (unless callback returns `false`)
  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
}


/**
 * Load multiple files.
 * @param {string[]} paths - The file paths
 * @param {Function} callbackFn - The callback function
 */
function loadFiles(paths, callbackFn, args) {
  // listify paths
  paths = paths.push ? paths : [paths];

  var numWaiting = paths.length,
      x = numWaiting,
      pathsNotFound = [],
      fn,
      i;

  // define callback function
  fn = function(path, result, defaultPrevented) {
    // handle error
    if (result == 'e') pathsNotFound.push(path);

    // handle beforeload event. If defaultPrevented then that means the load
    // will be blocked (ex. Ghostery/ABP on Safari)
    if (result == 'b') {
      if (defaultPrevented) pathsNotFound.push(path);
      else return;
    }

    numWaiting--;
    if (!numWaiting) callbackFn(pathsNotFound);
  };

  // load scripts
  for (i=0; i < x; i++) loadFile(paths[i], fn, args);
}


/**
 * Initiate script load and register bundle.
 * @param {(string|string[])} paths - The file paths
 * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
 *   callback or (3) object literal with success/error arguments, numRetries,
 *   etc.
 * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
 *   literal with success/error arguments, numRetries, etc.
 */
function loadjs(paths, arg1, arg2) {
  var bundleId,
      args;

  // bundleId (if string)
  if (arg1 && arg1.trim) bundleId = arg1;

  // args (default is {})
  args = (bundleId ? arg2 : arg1) || {};

  // throw error if bundle is already defined
  if (bundleId) {
    if (bundleId in bundleIdCache) {
      throw "LoadJS";
    } else {
      bundleIdCache[bundleId] = true;
    }
  }

  function loadFn(resolve, reject) {
    loadFiles(paths, function (pathsNotFound) {
      // execute callbacks
      executeCallbacks(args, pathsNotFound);
      
      // resolve Promise
      if (resolve) {
        executeCallbacks({success: resolve, error: reject}, pathsNotFound);
      }

      // publish bundle load event
      publish(bundleId, pathsNotFound);
    }, args);
  }
  
  if (args.returnPromise) return new Promise(loadFn);
  else loadFn();
}


/**
 * Execute callbacks when dependencies have been satisfied.
 * @param {(string|string[])} deps - List of bundle ids
 * @param {Object} args - success/error arguments
 */
loadjs.ready = function ready(deps, args) {
  // subscribe to bundle load event
  subscribe(deps, function (depsNotFound) {
    // execute callbacks
    executeCallbacks(args, depsNotFound);
  });

  return loadjs;
};


/**
 * Manually satisfy bundle dependencies.
 * @param {string} bundleId - The bundle id
 */
loadjs.done = function done(bundleId) {
  publish(bundleId, []);
};


/**
 * Reset loadjs dependencies statuses
 */
loadjs.reset = function reset() {
  bundleIdCache = {};
  bundleResultCache = {};
  bundleCallbackQueue = {};
};


/**
 * Determine if bundle has already been defined
 * @param String} bundleId - The bundle id
 */
loadjs.isDefined = function isDefined(bundleId) {
  return bundleId in bundleIdCache;
};


// export
return loadjs;

}));


/***/ }),

/***/ "./node_modules/react-google-charts/build/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-google-charts/build/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var t=__webpack_require__(/*! react */ "./node_modules/react/index.js"),o=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],e=Object.freeze({DEFAULT_CHART_COLORS:o,default:o}),a=function(t){if(void 0===t&&(t=window),void 0===t)return{};if(void 0===t.google)throw new Error("google not in window object. Error in get-google-charts.");return t.google},r=new function(){var t=this;this.isLoaded=!1,this.isLoading=!1,this.loadScript=null,this.destroy=function(){t.isLoading=!1,t.isLoaded=!1,t.loadScript=null},this.init=function(o,e,a,r){if((t.isLoading||t.isLoaded)&&null!==t.loadScript)return t.loadScript;t.isLoading=!0;var n="undefined"!=typeof window?__webpack_require__(/*! loadjs */ "./node_modules/loadjs/dist/loadjs.umd.js"):function(t,o){return(0,o.success)()};return t.loadScript=new Promise(function(i){n("https://www.gstatic.com/charts/loader.js",{success:function(){var n=function(t){if(void 0===t&&(t=window),void 0===t)return{};if(void 0===t.google)throw new Error("google not in window object. Error in get-google-charts.");return t.google.charts}(window);n.load(e||"current",{packages:o||["corechart"],language:a||"en",mapsApiKey:r}),n.setOnLoadCallback(function(){t.isLoaded=!0,t.isLoading=!1,i()})}})}),t.isLoading=!0,t.loadScript}},n=0,i=function(){return"reactgooglegraph-"+(n+=1)},s=function(o){function n(t){var r=this;o.call(this,t),this.chart=null,this.wrapper=null,this.hidden_columns={},this.dataTable=[],this.isUnmounted=!1,this.onResize=function(){r.drawChart()},this.onSelectToggle=function(){if(null!==r.chart&&r.props.legend_toggle){var t=r.chart.getSelection();if(t.length>0)if(null==t[0].row)r.togglePoints(t[0].column)}},this.getColumnColor=function(t){if(r.props.options&&r.props.options.colors){if(r.props.options.colors[t])return r.props.options.colors[t]}else if(t in e)return e[t];return e[0]},this.applyNumberFormat=function(t,o){new(a(window).visualization.NumberFormat)(o).format(r.dataTable,t)},this.applyDateFormat=function(t,o){new(a(window).visualization.DateFormat)(o).format(r.dataTable,t)},this.buildDataTableFromProps=function(){var t=r.props.chartType,o=a(window);if(r.props.diffdata&&null!==r.props.chartType){var e=r.props.diffdata,n=o.visualization.arrayToDataTable(e.old),i=o.visualization.arrayToDataTable(e.new);return(0,o.visualization[t].prototype.computeDiff)(n,i)}if(null===r.props.data&&r.props.rows&&0===r.props.rows.length&&!1==!r.props.allowEmptyRows)throw new Error("Can't build DataTable from rows and columns: rows array in props is empty");if(null===r.props.data&&r.props.columns&&0===r.props.columns.length)throw new Error("Can't build DataTable from rows and columns: columns array in props is empty");if(null!==r.props.data)try{return r.wrapper.setDataTable(r.props.data),r.wrapper.getDataTable()}catch(t){throw new Error("Failed to set DataTable from data props ! ",t)}var s=new window.google.visualization.DataTable;if(r.props.columns.forEach(function(t){s.addColumn(t)}),s.addRows(r.props.rows),r.props.numberFormat){var l=r.props.numberFormat;r.applyNumberFormat(l.column,l.options)}if(r.props.dateFormat){var p=r.props.dateFormat,d=p.options;p.columns.forEach(function(t){r.applyDateFormat(t,d)})}return r.props.formatters.forEach(function(t){var o=t.type,e=t.column,a=t.options;switch(o){case"NumberFormat":r.applyNumberFormat(e,a);break;case"DateFormat":r.applyDateFormat(e,a);break;default:console.log("Unkown formatter type: "+o)}}),s},this.updateDataTable=function(){return window.google.visualization.errors.removeAll(document.getElementById(r.wrapper.getContainerId())),r.dataTable.removeRows(0,r.dataTable.getNumberOfRows()),r.dataTable.removeColumns(0,r.dataTable.getNumberOfColumns()),r.dataTable=r.buildDataTableFromProps(),r.dataTable},this.drawChart=function(){if(!r.isUnmounted){if(r.wrapper){if(r.updateDataTable(),r.wrapper.setDataTable(r.dataTable),r.wrapper.setOptions(r.props.options),r.wrapper.getChartType()!==r.props.chartType){window.google.visualization.events.removeAllListeners(r.wrapper),r.wrapper.setChartType(r.props.chartType);var t=r;window.google.visualization.events.addOneTimeListener(r.wrapper,"ready",function(){t.chart=t.wrapper.getChart(),t.listenToChartEvents.call(t)})}}else r.wrapper=new window.google.visualization.ChartWrapper({chartType:r.props.chartType,options:r.props.options,containerId:r.state.graphID}),r.dataTable=r.buildDataTableFromProps(),r.wrapper.setDataTable(r.dataTable),window.google.visualization.events.addOneTimeListener(r.wrapper,"ready",function(){r.chart=r.wrapper.getChart(),r.listenToChartEvents(),r.addChartActions()});r.wrapper.draw()}},this.addChartActions=function(){null!==r.props.chartActions&&r.props.chartActions.forEach(function(t){r.chart.setAction({id:t.id,text:t.text,action:t.action.bind(r,r.chart)})})},this.listenToChartEvents=function(){r.props.legend_toggle&&window.google.visualization.events.addListener(r.wrapper,"select",r.onSelectToggle),r.props.chartEvents.forEach(function(t){var o;"ready"===t.eventName?t.callback(r):(o=t,window.google.visualization.events.addListener(r.chart,o.eventName,function(t){o.callback(r,t)}))})},this.buildColumnFromSourceData=function(t){return{label:r.dataTable.getColumnLabel(t),type:r.dataTable.getColumnType(t),sourceColumn:t,role:r.dataTable.getColumnRole(t)}},this.buildEmptyColumnFromSourceData=function(t){return{label:r.dataTable.getColumnLabel(t),type:r.dataTable.getColumnType(t),calc:function(){return null},role:r.dataTable.getColumnRole(t)}},this.addEmptyColumnTo=function(t,o){var e=r.buildEmptyColumnFromSourceData(o);t.push(e)},this.hideColumn=function(t,o){r.isHidden(o)||(r.hidden_columns[o]={color:r.getColumnColor(o-1)}),t.push("#CCCCCC")},this.addSourceColumnTo=function(t,o){var e=r.buildColumnFromSourceData(o);t.push(e)},this.isHidden=function(t){return void 0!==r.hidden_columns[t]},this.restoreColorTo=function(t,o){var e;r.isHidden(o)?(e=r.hidden_columns[o].color,delete r.hidden_columns[o]):e=r.getColumnColor(o-1),0!==o&&t.push(e)},this.debounce=function(t,o){var e;return function(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];var n=this;clearTimeout(e),e=setTimeout(function(){return t.apply(n,a)},o)}},this.togglePoints=function(t){for(var o=new window.google.visualization.DataView(r.wrapper.getDataTable()),e=o.getNumberOfColumns(),a=[],n=[],i=0;i<e;i+=1)0===i?r.addSourceColumnTo(n,i):i===t?r.isHidden(i)?(r.addSourceColumnTo(n,i),r.restoreColorTo(a,i)):(r.addEmptyColumnTo(n,i),r.hideColumn(a,i)):r.isHidden(i)?(r.addEmptyColumnTo(n,i),r.hideColumn(a,i)):(r.addSourceColumnTo(n,i),r.restoreColorTo(a,i));o.setColumns(n),r.props.options.colors=a,r.chart.draw(o,r.props.options)},this.state={graphID:t.graph_id||i()}}return o&&(n.__proto__=o),(n.prototype=Object.create(o&&o.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=this;"undefined"!=typeof window&&(this.props.loadCharts?r.init(this.props.chartPackages,this.props.chartVersion,this.props.chartLanguage,this.props.mapsApiKey).then(function(){t.drawChart(),t.onResize=t.debounce(t.onResize,200),window.addEventListener("resize",t.onResize)}):this.drawChart())},n.prototype.componentDidUpdate=function(){var t=this;this.props.loadCharts?r.isLoading?r.loadScript&&r.loadScript.then(function(){t.drawChart()}):r.isLoaded&&this.drawChart():this.drawChart()},n.prototype.componentWillUnmount=function(){this.isUnmounted=!0,r.destroy();try{window&&(window.google&&window.google.visualization&&window.google.visualization.events.removeAllListeners(this.wrapper),window.removeEventListener("resize",this.onResize))}catch(t){return}},n.prototype.render=function(){return t.createElement("div",{id:this.state.graphID,style:{height:this.props.height||this.props.options.height,width:this.props.width||this.props.options.width}},this.props.loader?this.props.loader:"Rendering Chart...")},n}(t.Component);s.defaultProps={chartType:"LineChart",rows:[],columns:[],options:{chart:{title:"Chart Title",subtitle:"Subtitle"},hAxis:{title:"X Label"},vAxis:{title:"Y Label"},width:"100%",height:"100%"},width:"400px",height:"300px",chartEvents:[],chartActions:null,data:null,legend_toggle:!1,allowEmptyRows:!1,loadCharts:!0,loader:t.createElement("div",null,"Rendering Chart"),chartPackages:["corechart"],chartVersion:"current",chartLanguage:"en",numberFormat:null,dateFormat:null,formatters:[],diffdata:null},module.exports={Chart:s};
//# sourceMappingURL=index.js.map


/***/ })

}]);