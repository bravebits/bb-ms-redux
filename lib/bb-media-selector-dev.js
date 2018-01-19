(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("underscore"), require("jquery"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "underscore", "jquery", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["BBMediaSelector"] = factory(require("react"), require("underscore"), require("jquery"), require("react-dom"));
	else
		root["BBMediaSelector"] = factory(root["React"], root["_"], root["$"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(61)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?modules&localIdentName=[local]_[hash:base64:3]!../../node_modules/postcss-loader/lib/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?modules&localIdentName=[local]_[hash:base64:3]!../../node_modules/postcss-loader/lib/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i["return"]) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError("Invalid attempt to destructure non-iterable instance");
		}
	};
}();

exports.init = init;
exports.getAllFiles = getAllFiles;
exports.setCurrentPath = setCurrentPath;
exports.fetchFiles = fetchFiles;
exports.expandTreeNode = expandTreeNode;
exports.checkAndExpand = checkAndExpand;
exports.collapseTreeNode = collapseTreeNode;
exports.changeViewType = changeViewType;
exports.toggleSidebar = toggleSidebar;
exports.updateSearchString = updateSearchString;
exports.addUploadingFile = addUploadingFile;
exports.onUploadSuccess = onUploadSuccess;
exports.handleUploadFile = handleUploadFile;
exports.handleUploadFiles = handleUploadFiles;
exports.onCreateFolderSuccess = onCreateFolderSuccess;
exports.createFolder = createFolder;
exports.onRenameFolderSuccess = onRenameFolderSuccess;
exports.renameFolder = renameFolder;
exports.onRenameFileSuccess = onRenameFileSuccess;
exports.renameFile = renameFile;
exports.chooseFile = chooseFile;
exports.selectFile = selectFile;
exports.deselectFile = deselectFile;
exports.onDeleteFileSuccess = onDeleteFileSuccess;
exports.deleteFile = deleteFile;
exports.onDeleteFolderSuccess = onDeleteFolderSuccess;
exports.deleteFolder = deleteFolder;
exports.selectMultiFileAdd = selectMultiFileAdd;
exports.selectMultiFileRemove = selectMultiFileRemove;
exports.deleteFilesSuccess = deleteFilesSuccess;
exports.deleteMultiFiles = deleteMultiFiles;
exports.addMessage = addMessage;
exports.showMessage = showMessage;
exports.hideMessage = hideMessage;
exports.onCancel = onCancel;
exports.checkAll = checkAll;
exports.uncheckAll = uncheckAll;
exports.setRoot = setRoot;
exports.setFileType = setFileType;

var _joomla = __webpack_require__(64);

var joomlaApi = _interopRequireWildcard(_joomla);

var _actions = __webpack_require__(14);

var actConstants = _interopRequireWildcard(_actions);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _general = __webpack_require__(9);

var generalConstants = _interopRequireWildcard(_general);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

var _globalVariables = __webpack_require__(7);

var _globalVariables2 = _interopRequireDefault(_globalVariables);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function init(options) {
	var root = options.root,
	    path = options.path,
	    selected = options.selected,
	    type = options.type;

	return function (dispatch) {
		type && dispatch(setFileType(type));

		_underscore2.default.reduce(path.split('/').slice(0, -1), function (path, dir) {
			path += dir + '/';
			dispatch(getAllFiles(path));
			selected && dispatch(expandTreeNode(path));
			return path;
		}, '');

		root && dispatch(setRoot(root));
		dispatch(setCurrentPath(path));
		selected && dispatch(selectFile(selected));
	};
}

function getAllFiles(path) {
	return function (dispatch, getState) {
		var fileType = getState().fileReducer.fileType;

		joomlaApi.getAllFiles(path, fileType).done(function (res) {
			dispatch({
				type: actConstants.GET_ALL_FILES,
				path: path,
				files: libs.parseJSON(res)
			});
		});
	};
}

function setCurrentPath(path) {
	libs.setPathToLocal(path);
	return function (dispatch) {
		dispatch({
			type: actConstants.SET_CURRENT_PATH,
			path: path
		});
		dispatch(deselectFile());
	};
}

function fetchFiles(path) {
	return function (dispatch) {
		dispatch(getAllFiles(path));
		dispatch(setCurrentPath(path));
	};
}

function expandTreeNode(path) {
	return {
		type: actConstants.EXPAND_TREE_NODE,
		path: path
	};
}

function checkAndExpand(path) {
	return function (dispatch, getState) {
		var treeNodes = getState().fileReducer.treeNodes;

		if (libs.getNodeByPath(treeNodes, path).children === undefined) {
			dispatch(getAllFiles(path));
		}
		dispatch(expandTreeNode(path));
	};
}

function collapseTreeNode(path) {
	return {
		type: actConstants.COLLAPSE_TREE_NODE,
		path: path
	};
}

function changeViewType(v) {
	return {
		type: actConstants.CHANGE_VIEW_TYPE,
		viewType: v
	};
}

function toggleSidebar() {
	return {
		type: actConstants.TOGGLE_SIDEBAR
	};
}

function updateSearchString(k) {
	return function (dispatch) {
		dispatch({
			type: actConstants.UPDATE_SEARCH_STRING,
			keyWord: k
		});
		dispatch(deselectFile());
	};
}

function addUploadingFile(files, file, willSelect) {
	// Check file upload name
	// In case there are some files with the same name with upload file, we need to add some index to upload file
	// For example: image.jpg, image(1).jpg, image(2).jpg, etc.
	var splitExtension = function splitExtension(name) {
		var pos = name.lastIndexOf('.');
		return pos !== -1 ? [name.substr(0, pos), name.substr(pos)] : [name, ''];
	};

	var _splitExtension = splitExtension(file.name),
	    _splitExtension2 = _slicedToArray(_splitExtension, 2),
	    fileName = _splitExtension2[0],
	    fileExt = _splitExtension2[1];

	var lastIndex = _underscore2.default.reduce(files, function (result, f) {
		if (f.type !== 'file') return result;

		var _splitExtension3 = splitExtension(f.name),
		    _splitExtension4 = _slicedToArray(_splitExtension3, 2),
		    fName = _splitExtension4[0],
		    fExt = _splitExtension4[1];

		if (fileExt != fExt || fName.substr(0, fileName.length) !== fileName) return result;
		var suffix = fName.substr(fileName.length);
		var index = suffix === '' ? 0 : parseInt(suffix.slice(1, -1));
		return Math.max(result, index);
	}, -1);
	var newFileName = lastIndex === -1 ? file.name : fileName + '(' + (lastIndex + 1) + ')' + fileExt;
	// End

	return {
		type: actConstants.ADD_UPLOADING_FILE,
		name: newFileName,
		willSelect: willSelect,
		file: file
	};
}

function onUploadSuccess(f) {
	return {
		type: actConstants.UPLOAD_SUCCESS,
		file: f
	};
}

function handleUploadFile(path, file, fileName, onProcess) {
	return function (dispatch) {
		joomlaApi.handleUploadFile(path, file, fileName, onProcess).then(function (res) {
			var result = libs.parseJSON(res);
			if (result && result.message === 'done') {
				var uploadedFile = _underscore2.default.find(result.list, function (item) {
					return item.name === fileName;
				});
				delete uploadedFile.key;
				dispatch(onUploadSuccess(uploadedFile));
				dispatch(addMessage({
					type: generalConstants.TOAST_SUCCESS,
					content: 'Upload successfully.',
					duration: 1000
				}));
			} else {
				dispatch(onDeleteFileSuccess(fileName));
				dispatch(addMessage({
					type: generalConstants.TOAST_ERROR,
					content: 'File is not uploaded, please recheck the file type.',
					duration: 1000
				}));
			}
		});
	};
}

function handleUploadFiles(currentFiles, uploadFiles) {
	return function (dispatch) {
		_underscore2.default.each(uploadFiles, function (file) {
			return dispatch(addUploadingFile(currentFiles, file, uploadFiles.length === 1));
		});
	};
}

function onCreateFolderSuccess(f) {
	return {
		type: actConstants.CREATE_FOLDER_SUCCESS,
		file: f
	};
}

function createFolder(path, files) {
	var getLastIndOfSameName = function getLastIndOfSameName(name) {
		//find the last ind
		var lastInd = _underscore2.default.chain(files).filter(function (child) {
			return child.type === 'dir';
		}).map(function (child) {
			var int = parseInt(child.name.replace(name + ' ', '0'), 10);
			return !isNaN(int) ? int : parseInt(child.name.replace('' + name, '0'), 10) || 0;
		}).sortBy(function (num) {
			return num;
		}).last().value();
		return lastInd;
	};
	var nextInd = getLastIndOfSameName(generalConstants.DEFAULT_NEW_FOLDER_NAME) + 1;
	var name = generalConstants.DEFAULT_NEW_FOLDER_NAME + ' ' + (!isNaN(nextInd) ? nextInd : '');
	return function (dispatch) {
		joomlaApi.createFolder(path, name).done(function (res) {
			var result = libs.parseJSON(res);
			if (result.success) {
				var folder = {
					name: name,
					type: 'dir'
				};
				dispatch(onCreateFolderSuccess(folder));
				dispatch(addMessage({
					type: generalConstants.TOAST_SUCCESS,
					content: 'Create folder successfully.',
					duration: 1000
				}));
			}
		});
	};
}

function onRenameFolderSuccess(on, nn) {
	return {
		type: actConstants.RENAME_FOLDER_SUCCESS,
		oldName: on,
		newName: nn
	};
}

function renameFolder(path, newPath, currentPath, onRenameFail) {
	return function (dispatch) {
		if (path !== newPath) {
			var oldName = path.replace(currentPath, '');
			var newName = newPath.replace(currentPath, '');
			joomlaApi.renameFolder(path, newPath).done(function (res) {
				var result = libs.parseJSON(res);
				if (result.success) {
					dispatch(onRenameFolderSuccess(oldName, newName));
					dispatch(addMessage({
						type: generalConstants.TOAST_SUCCESS,
						content: 'Rename folder successfully.',
						duration: 1000
					}));
				} else {
					onRenameFail();
					dispatch(addMessage({
						type: generalConstants.TOAST_ERROR,
						content: 'Rename folder failed, please check it again.',
						duration: 1000
					}));
				}
			});
		}
	};
}

function onRenameFileSuccess(on, nn) {
	return {
		type: actConstants.RENAME_FILE_SUCCESS,
		oldName: on,
		newName: nn
	};
}

function renameFile(path, newPath, currentPath, onRenameFail) {
	return function (dispatch, getState) {
		var selectedFile = getState().fileReducer.selectedFile;
		if (path !== newPath) {
			var oldName = path.replace(currentPath, '');
			var newName = newPath.replace(currentPath, '');
			joomlaApi.renameFile(path, newPath).done(function (res) {
				var result = libs.parseJSON(res);
				if (result.success) {
					dispatch(onRenameFileSuccess(oldName, newName));
					path === selectedFile && dispatch(selectFile(newPath));
					dispatch(addMessage({
						type: generalConstants.TOAST_SUCCESS,
						content: 'Rename file successfully.',
						duration: 1000
					}));
				} else {
					onRenameFail();
					dispatch(addMessage({
						type: generalConstants.TOAST_ERROR,
						content: 'Rename file failed, please check again.',
						duration: 1000
					}));
				}
			});
		}
	};
}

function chooseFile(p) {
	var event = new CustomEvent('choose-file', {
		detail: p && p.substr(1) //remove '/' from head of path
	});
	document.dispatchEvent(event);
	return {
		type: actConstants.CHOOSE_FILE,
		path: p
	};
}

function selectFile(p) {
	var event = new CustomEvent('select-file', {
		detail: p && p.substr(1)
	});
	document.dispatchEvent(event);
	return {
		type: actConstants.SELECT_FILE,
		path: p
	};
}

function deselectFile() {
	var event = new CustomEvent('deselect-file');
	document.dispatchEvent(event);
	return {
		type: actConstants.DESELECT_FILE
	};
}

function onDeleteFileSuccess(fn) {
	return {
		type: actConstants.DELETE_FILE_SUCCESS,
		name: fn
	};
}

function deleteFile(path, currentPath, mode) {
	return function (dispatch, getState) {
		var selectedFile = getState().fileReducer.selectedFile;
		var fileName = path.replace(currentPath, '');
		if (mode === 'multi') {
			joomlaApi.deleteFile(path).done(function (res) {
				var result = libs.parseJSON(res);
				if (result.success) {
					dispatch(onDeleteFileSuccess(fileName));
					path === selectedFile && dispatch(deselectFile());
				}
			});
		} else {
			var cResult = confirm('Are you sure you want to delete?');
			if (cResult) {
				joomlaApi.deleteFile(path).done(function (res) {
					var result = libs.parseJSON(res);
					if (result.success) {
						dispatch(onDeleteFileSuccess(fileName));
						path === selectedFile && dispatch(deselectFile());
						dispatch(addMessage({
							type: generalConstants.TOAST_SUCCESS,
							content: 'Delete successfully.',
							duration: 1000
						}));
					}
				});
			}
		}
	};
}

function onDeleteFolderSuccess(fn) {
	return {
		type: actConstants.DELETE_FOLDER_SUCCESS,
		name: fn
	};
}

function deleteFolder(path, currentPath, mode) {
	return function (dispatch) {
		var folderName = path.replace(currentPath, '');
		if (mode === 'multi') {
			joomlaApi.deleteFolder(path).done(function (res) {
				var result = libs.parseJSON(res);
				if (result.success) {
					dispatch(onDeleteFolderSuccess(folderName));
				}
			});
		} else {
			var cResult = confirm('Are you sure you want to delete?');
			if (cResult) {
				joomlaApi.deleteFolder(path).done(function (res) {
					var result = libs.parseJSON(res);
					if (result.success) {
						dispatch(onDeleteFolderSuccess(folderName));
						dispatch(addMessage({
							type: generalConstants.TOAST_SUCCESS,
							content: 'Delete folder successfully.',
							duration: 1000
						}));
					}
				});
			}
		}
	};
}

function selectMultiFileAdd(p) {
	return {
		type: actConstants.SELECT_MULTI_FILE_ADD,
		path: p
	};
}

function selectMultiFileRemove(p) {
	return {
		type: actConstants.SELECT_MULTI_FILE_REMOVE,
		path: p
	};
}

function deleteFilesSuccess() {
	return {
		type: actConstants.DELETE_FILES_SUCCESS
	};
}

function deleteMultiFiles(files, currentPath) {
	return function (dispatch) {
		var cResult = confirm('Are you sure you want to delete?');
		if (cResult) {
			for (var i = 0; i < files.length; i++) {
				if (files[i].match(/\./)) {
					if (_globalVariables2.default.get('fileType') === generalConstants.TYPE_FILE) {
						dispatch(deleteFile(files[i], currentPath, 'multi'));
					} else {
						if (libs.isMedia(files[i])) {
							dispatch(deleteFile(files[i], currentPath, 'multi'));
						}
					}
				} else {
					dispatch(deleteFolder(files[i], currentPath, 'multi'));
				}
			}
			dispatch(deleteFilesSuccess());
			dispatch(addMessage({
				type: generalConstants.TOAST_SUCCESS,
				content: 'Delete files successfully.',
				duration: 1000
			}));
		}
	};
}

function addMessage(message) {
	return function (dispatch) {
		dispatch(showMessage(message));
		setTimeout(function () {
			dispatch(hideMessage(message));
		}, message.duration);
	};
}

function showMessage(m) {
	return {
		type: actConstants.SHOW_MESSAGE,
		message: m
	};
}

function hideMessage(m) {
	return {
		type: actConstants.HIDE_MESSAGE,
		message: m
	};
}

function onCancel() {
	var event = new CustomEvent('cancel-file');
	document.dispatchEvent(event);
	return {
		type: actConstants.CANCEL
	};
}

function checkAll() {
	return {
		type: actConstants.CHECK_ALL
	};
}

function uncheckAll() {
	return {
		type: actConstants.UNCHECK_ALL
	};
}

function setRoot(path) {
	return {
		type: actConstants.SET_ROOT,
		path: path
	};
}

function setFileType(fileType) {
	return {
		type: actConstants.SET_FILE_TYPE,
		fileType: fileType
	};
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i["return"]) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError("Invalid attempt to destructure non-iterable instance");
		}
	};
}();

exports.mapViewType = mapViewType;
exports.isMedia = isMedia;
exports.setPathToLocal = setPathToLocal;
exports.getPathFromLocal = getPathFromLocal;
exports.getNodeByPath = getNodeByPath;
exports.setNodeChildren = setNodeChildren;
exports.simpleMatch = simpleMatch;
exports.getParamsFromURL = getParamsFromURL;
exports.standardizedPath = standardizedPath;
exports.parseJSON = parseJSON;

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _underscore = __webpack_require__(6);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function mapViewType(viewType) {
	switch (viewType) {
		case 'list':
			return _index2.default['list'];
		case 'grid':
			return _index2.default['grid'];
		default:
			return _index2.default['grid'];
	}
}

function isMedia(name) {
	return name.toLowerCase().match(/.(bmp|gif|ico|jpg|jpeg|png|svg)$/);
}

function setPathToLocal(path) {
	if (typeof Storage !== 'undefined') {
		localStorage.setItem('mediaselectorPath', path);
	}
}

function getPathFromLocal() {
	if (typeof Storage !== 'undefined') {
		return localStorage.getItem('mediaselectorPath') || '/images/';
	} else {
		return '/images/';
	}
}

function getNodeByPath(root, path) {
	var dirs = (0, _underscore.filter)(path.split('/'), function (dir) {
		return dir;
	});
	var node = root;
	(0, _underscore.each)(dirs, function (dir) {
		if (node.children === undefined) {
			node.children = [{
				name: dir
			}];
		}
		var matchChild = (0, _underscore.find)(node.children, function (child) {
			return child.name === dir;
		});
		if (matchChild) node = matchChild;
	});
	return node;
}

function setNodeChildren(node, files) {
	(0, _underscore.each)(files, function (file) {
		var child = (0, _underscore.find)(node.children, function (child) {
			return child.name === file.name;
		});
		if (child) {
			file.isExpanded = child.isExpanded;
			file.children = child.children;
		}
	});
	node.children = files;
}

function simpleMatch(str, term) {
	return str.toUpperCase().includes(term.toUpperCase());
}

function getParamsFromURL() {
	var paramsList = decodeURI(window.location.search.substr(1)).split('&');
	return (0, _underscore.reduce)(paramsList, function (result, item) {
		var key = void 0,
		    value = void 0;

		var _item$split = item.split('=');

		var _item$split2 = _slicedToArray(_item$split, 2);

		key = _item$split2[0];
		value = _item$split2[1];

		result[key] = value;
		return result;
	}, {});
}

function standardizedPath(path, type) {
	if (path === undefined || path === null) return;
	if (path[0] !== '/') path = '/' + path;
	if (type === 'dir' && path[path.length - 1] !== '/') path = path + '/';
	return path;
}

function parseJSON(response) {
	var result = void 0;
	try {
		result = JSON.parse(response);
	} catch (e) {
		var matched = response.match(/^[^\{\[]*(.+)$/);
		try {
			result = JSON.parse(matched[1]);
		} catch (e) {}
	}
	return result;
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var globalVariables = function globalVariables() {
  var _this = this;

  _classCallCheck(this, globalVariables);

  this.get = function (key) {
    return _this.vars[key];
  };

  this.set = function (key, value) {
    return _this.vars[key] = value;
  };

  this.getAll = function () {
    return _this.vars;
  };

  this.setFromObject = function (obj) {
    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object.keys(obj);

    keys.forEach(function (key) {
      return obj[key] !== undefined && (_this.vars[key] = obj[key]);
    });
  };

  this.vars = {};
};

exports.default = new globalVariables();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(26)();
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOAST_ERROR = exports.TOAST_ERROR = 'TOAST_ERROR';
var TOAST_SUCCESS = exports.TOAST_SUCCESS = 'TOAST_SUCCESS';
var TOAST_NOTI = exports.TOAST_NOTI = 'TOAST_NOTI';
var TYPE_FILE = exports.TYPE_FILE = 'TYPE_FILE';
var TYPE_IMAGE = exports.TYPE_IMAGE = 'TYPE_IMAGE';
var DEFAULT_NEW_FOLDER_NAME = exports.DEFAULT_NEW_FOLDER_NAME = 'New Folder';
var UNKNOWN_FILE_TYPE = exports.UNKNOWN_FILE_TYPE = 'Unknown';

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(43);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_ALL_FILES = exports.GET_ALL_FILES = 'GET_ALL_FILES';
var SET_CURRENT_PATH = exports.SET_CURRENT_PATH = 'SET_CURRENT_PATH';
var CHANGE_VIEW_TYPE = exports.CHANGE_VIEW_TYPE = 'CHANGE_VIEW_TYPE';
var TOGGLE_SIDEBAR = exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
var EXPAND_TREE_NODE = exports.EXPAND_TREE_NODE = 'EXPAND_TREE_NODE';
var COLLAPSE_TREE_NODE = exports.COLLAPSE_TREE_NODE = 'COLLAPSE_TREE_NODE';
var UPDATE_SEARCH_STRING = exports.UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
var SELECT_FILE = exports.SELECT_FILE = 'SELECT_FILE';
var DESELECT_FILE = exports.DESELECT_FILE = 'DESELECT_FILE';
var CHOOSE_FILE = exports.CHOOSE_FILE = 'CHOOSE_FILE';
var SELECT_MULTI_FILE_ADD = exports.SELECT_MULTI_FILE_ADD = 'SELECT_MULTI_FILE_ADD';
var SELECT_MULTI_FILE_REMOVE = exports.SELECT_MULTI_FILE_REMOVE = 'SELECT_MULTI_FILE_REMOVE';
var DELETE_FILES_SUCCESS = exports.DELETE_FILES_SUCCESS = 'DELETE_FILES_SUCCESS';
var HIDE_MESSAGE = exports.HIDE_MESSAGE = 'HIDE_MESSAGE';
var SHOW_MESSAGE = exports.SHOW_MESSAGE = 'SHOW_MESSAGE';
var CANCEL = exports.CANCEL = 'CANCEL';
var CHECK_ALL = exports.CHECK_ALL = 'CHECK_ALL';
var UNCHECK_ALL = exports.UNCHECK_ALL = 'UNCHECK_ALL';
var SET_PATH_TO_LOCAL = exports.SET_PATH_TO_LOCAL = 'SET_PATH_TO_LOCAL';
var GET_PATH_FROM_LOCAL = exports.GET_PATH_FROM_LOCAL = 'GET_PATH_FROM_LOCAL';
var ADD_UPLOADING_FILE = exports.ADD_UPLOADING_FILE = 'ADD_UPLOADING_FILE';
var UPLOAD_SUCCESS = exports.UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
var CREATE_FOLDER_SUCCESS = exports.CREATE_FOLDER_SUCCESS = 'CREATE_FOLDER_SUCCESS';
var RENAME_FOLDER_SUCCESS = exports.RENAME_FOLDER_SUCCESS = 'RENAME_FOLDER_SUCCESS';
var RENAME_FILE_SUCCESS = exports.RENAME_FILE_SUCCESS = 'RENAME_FILE_SUCCESS';
var DELETE_FILE_SUCCESS = exports.DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';
var DELETE_FOLDER_SUCCESS = exports.DELETE_FOLDER_SUCCESS = 'DELETE_FOLDER_SUCCESS';
var SET_ROOT = exports.SET_ROOT = 'SET_ROOT';
var SET_FILE_TYPE = exports.SET_FILE_TYPE = 'SET_FILE_TYPE';

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(37);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(22);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(11);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _generalReducer = __webpack_require__(55);

var _generalReducer2 = _interopRequireDefault(_generalReducer);

var _fileReducer = __webpack_require__(56);

var _fileReducer2 = _interopRequireDefault(_fileReducer);

var _App = __webpack_require__(63);

var _App2 = _interopRequireDefault(_App);

var _reduxLogger = __webpack_require__(80);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(81);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var store = (0, _redux.createStore)((0, _redux.combineReducers)({ generalReducer: _generalReducer2.default, fileReducer: _fileReducer2.default }), (0, _redux.applyMiddleware)(_reduxLogger2.default, _reduxThunk2.default));

var params = 'option=com_ajax&plugin=pagebuilder3&format=json';

var config = {
	baseURL: 'http://pb.box/dev/',
	getAllFiles: 'http://pb.box/dev/index.php?' + params + '&task=getListFiles',
	getFullDirectory: 'http://pb.box/dev/index.php?' + params + '&task=getFullDirectory',
	uploadFile: 'http://pb.box/dev/index.php?' + params + '&task=uploadFile',
	createFolder: 'http://pb.box/dev/index.php?' + params + '&task=createFolder',
	deleteFolder: 'http://pb.box/dev/index.php?' + params + '&task=deleteFolder',
	deleteFile: 'http://pb.box/dev/index.php?' + params + '&task=deleteFile',
	renameFolder: 'http://pb.box/dev/index.php?' + params + '&task=renameFolder',
	renameFile: 'http://pb.box/dev/index.php?' + params + '&task=renameFile'
};

(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_App2.default, {
	folder: '/images',
	config: config,
	fileType: 'TYPE_FILE',
	enableHeader: false,
	enableFooter: false
})), document.getElementById('root'));

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(27);
var invariant = __webpack_require__(28);
var ReactPropTypesSecret = __webpack_require__(29);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(53);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(21);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(40);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(38);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(18);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(42);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(47);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(46)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(19);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(21);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(54);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(11);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);
	var messages = state.messages.slice(0);
	switch (action.type) {
		case actConstants.CHANGE_VIEW_TYPE:
			newState.viewType = action.viewType;
			return newState;
		case actConstants.TOGGLE_SIDEBAR:
			newState.isSidebarHidden = !newState.isSidebarHidden;
			return newState;
		case actConstants.SHOW_MESSAGE:
			messages.push(action.message);
			newState.messages = messages;
			return newState;
		case actConstants.HIDE_MESSAGE:
			newState.messages = _.reject(messages, function (el) {
				return el.content === action.message.content;
			});
			return newState;
		default:
			return state;
	}
};

var _actions = __webpack_require__(14);

var actConstants = _interopRequireWildcard(_actions);

var _underscore = __webpack_require__(6);

var _ = _interopRequireWildcard(_underscore);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

var initialState = {
	isSidebarHidden: false,
	viewType: 'grid',
	messages: []
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	// it is very important to clone the object || array
	// otherwise the prevState will be equal with nextState => not update
	var newState = Object.assign({}, state);
	var cloneTreeNodes = (0, _jquery.extend)(true, {}, state.treeNodes);
	var cloneSelectedFiles = state.selectedFiles.slice(0);
	// ============== //
	var node = void 0;
	switch (action.type) {
		case actConstants.GET_ALL_FILES:
			node = libs.getNodeByPath(cloneTreeNodes, action.path);
			libs.setNodeChildren(node, action.files);
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.SET_CURRENT_PATH:
			newState.currentPath = action.path;
			newState.selectedFiles = [];
			newState.searchString = '';
			return newState;
		case actConstants.EXPAND_TREE_NODE:
			libs.getNodeByPath(cloneTreeNodes, action.path).isExpanded = true;
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.COLLAPSE_TREE_NODE:
			libs.getNodeByPath(cloneTreeNodes, action.path).isExpanded = false;
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.UPDATE_SEARCH_STRING:
			newState.searchString = action.keyWord;
			newState.selectedFiles = [];
			return newState;
		case actConstants.CHOOSE_FILE:
			newState.chosenFile = action.path;
			newState.selectedFiles = [];
			return newState;
		case actConstants.SELECT_FILE:
			newState.selectedFile = action.path;
			return newState;
		case actConstants.DESELECT_FILE:
			newState.selectedFile = null;
			return newState;
		case actConstants.SELECT_MULTI_FILE_ADD:
			cloneSelectedFiles.push(action.path);
			newState.selectedFiles = cloneSelectedFiles;
			return newState;
		case actConstants.SELECT_MULTI_FILE_REMOVE:
			newState.selectedFiles = _underscore2.default.filter(state.selectedFiles, function (file) {
				return file !== action.path;
			});
			return newState;
		case actConstants.DELETE_FILES_SUCCESS:
			newState.selectedFiles = [];
			return newState;
		case actConstants.CHECK_ALL:
			var files = libs.getNodeByPath(cloneTreeNodes, state.currentPath).children;
			newState.selectedFiles = _underscore2.default.map(files, function (file) {
				return state.currentPath + file.name;
			});
			return newState;
		case actConstants.UNCHECK_ALL:
			cloneSelectedFiles.length = 0;
			newState.selectedFiles = cloneSelectedFiles;
			return newState;
		case actConstants.ADD_UPLOADING_FILE:
			libs.getNodeByPath(cloneTreeNodes, state.currentPath).children.push({
				name: action.name,
				willSelect: action.willSelect,
				type: 'file',
				uploading: action.file
			});
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.UPLOAD_SUCCESS:
			node = libs.getNodeByPath(cloneTreeNodes, state.currentPath);
			node.children = _underscore2.default.map(node.children, function (file) {
				if (file.name === action.file.name) return action.file;
				return file;
			});
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.CREATE_FOLDER_SUCCESS:
			libs.getNodeByPath(cloneTreeNodes, state.currentPath).children.push(action.file);
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.RENAME_FOLDER_SUCCESS:
		case actConstants.RENAME_FILE_SUCCESS:
			_underscore2.default.each(libs.getNodeByPath(cloneTreeNodes, state.currentPath).children, function (file) {
				if (file.name === action.oldName) {
					file.name = action.newName;
				}
			});
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.DELETE_FOLDER_SUCCESS:
		case actConstants.DELETE_FILE_SUCCESS:
			node = libs.getNodeByPath(cloneTreeNodes, state.currentPath);
			node.children = _underscore2.default.filter(node.children, function (file) {
				return file.name !== action.name;
			});
			newState.treeNodes = cloneTreeNodes;
			return newState;
		case actConstants.SET_ROOT:
			newState.root = action.path;
			return newState;
		case actConstants.SET_FILE_TYPE:
			newState.fileType = action.fileType;
			return newState;
		default:
			return state;
	}
};

var _actions = __webpack_require__(14);

var actConstants = _interopRequireWildcard(_actions);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _general = __webpack_require__(9);

var generalConstants = _interopRequireWildcard(_general);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

var _jquery = __webpack_require__(10);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

var defaultState = {
	selectedFile: null,
	selectedFiles: [],
	chosenFile: null,
	treeNodes: {
		isExpanded: true,
		name: '/root',
		type: 'dir'
	},
	root: '/',
	currentPath: '',
	searchString: '',
	fileType: ''
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n\tmargin: auto;\n\tpadding: 0px;\n\twidth: 100%;\n\theight: 100%;\n}\n\niframe .wrapper_meH {\n\theight: 100vh;\n}\n\n.wrapper_meH {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.media-selector_3y0 {\n\twidth: 100%;\n    min-width: 860px;\n\tz-index: 100000;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n\tcolor: #000;\n\theight: 100%;\n\tbackground: white;\n    border-radius: 3px;\n    position: relative;\n}\n.media-selector_3y0:after {\n    content: '';\n    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.32);\n    position: absolute;\n    width: calc(100% - 8px);\n    height: calc(100% - 8px);\n    top: 4px;\n    left: 4px;\n    display: block;\n    z-index: 1;\n    pointer-events: none;\n}\n.media-selector_3y0 a {\n\ttext-decoration: none;\n\tcolor: black; }\n.media-selector_3y0 a:focus,\n.media-selector_3y0 input:focus {\n\toutline: none; }\n.media-selector_3y0 i {\n\tvertical-align: middle; }\n.media-selector_3y0 .icon_RWs {\n\tvertical-align: middle; }\n.media-selector_3y0 .icon_RWs:hover {\n\topacity: 0.6; }\n.media-selector_3y0 .box_1Od {\n\tborder-radius: 3px;\n\theight: 100%;\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n}\n.media-selector_3y0 .box__header_2j3 {\n\tborder-bottom: 1px solid #ccc;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);\n    background-color: #F5F5F5;\n\theight: 44px;\n    border-radius: 3px 3px 0 0;\n    padding: 0 16px;\n}\n.media-selector_3y0 .box__header__title_3Bz {\n\tfont-size: 16px;\n    color: #292B2C;\n    margin: 0;\n    font-weight: bold;\n}\n.media-selector_3y0 .box__header_2j3 i {\n    font-size: 12px;\n    color: #8F9090;\n}\n.media-selector_3y0 .box__content_TAJ {\n\toverflow-y: hidden;\n\toverflow-x: hidden;\n\tflex: 1;\n}\n.media-selector_3y0 .box__media_3HT {\n\theight: calc(100% - 46px);\n\tmax-height: calc(100% - 46px);\n}\n.media-selector_3y0 .box__footer_G9c {\n\theight: 46px;\n    border-radius: 0 0 3px 3px;\n    background-color: #F5F5F5;\n}\n.media-selector_3y0 .box-content-inner_1J_ {\n\theight: 100%;\n}\n.media-selector_3y0 .box-content-inner_1J_ .box__footer_G9c {\n    border-radius: 0;\n\tbackground: none;\n}\n.media-selector_3y0 .box__footer_G9c.border-top_jf5 {\n\tborder-top: 1px solid #ddd; padding: 0 16px;}\n.media-selector_3y0 .box__footer_G9c.border-bottom_12X {\n\tborder-bottom: 1px solid #ddd; }\n.media-selector_3y0 .div-parent-tree-view_2AL {\n\tborder-right: 1px solid #ebebeb;\n    width: 275px;\n    -webkit-transition: .3s all;\n    -o-transition: .3s all;\n    transition: .3s all;\n    opacity: 1;\n    overflow-y: auto;\n    overflow-x: hidden;\n\tmax-height: 100%;\n\tborder-right: 1px solid #ddd;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);\n    background-color: #EFEFEF;\n}\n.media-selector_3y0 .hide-tree-folder_1uX .btn-hide-tree-folder_3UL span {\n\tdisplay: none; }\n.media-selector_3y0 .hide-tree-folder_1uX .btn-hide-tree-folder_3UL a > span:first-child {\n    transform: rotate(180deg);\n}\n.media-selector_3y0 .tree-view_3of {\n\tpadding: 16px 8px;\n\tdisplay: block;\n    -webkit-animation: slide-left-to-right_3ho_3Cy 0.4s ease-out;\n    margin-bottom: 15px;\n}\n.media-selector_3y0 .tree-view__item_okg {\n\tcursor: pointer; }\n.media-selector_3y0 .tree-view__item_okg.active_wQ3 detail {\n\tbackground: #F3F3F3;\n\tfont-weight: bold; }\n.media-selector_3y0 .tree-view__item_okg .detail_1Cd {\n\tpadding: 8px 0px 8px 10px; }\n.media-selector_3y0 .tree-view__sub-item_9Yj {\n\tpadding-left: 16px; }\n.media-selector_3y0 .tree-view__sub-item_9Yj .tree-view__item_okg.active_wQ3 .detail_1Cd {\n\tposition: relative;\n\tfont-weight: bold;\n\tbackground: #F3F3F3; }\n.media-selector_3y0 .tree-view__sub-item_9Yj .tree-view__item_okg.active_wQ3 .detail_1Cd::before {\n\tposition: absolute;\n    top: 0;\n    left: -20px;\n    content: '';\n    color: #f3f3f3;\n    font-weight: bold;\n    background-color: #F3F3F3;\n    height: 100%;\n\twidth: 20px;\n}\n.media-selector_3y0 .tree-view_3of i {\n\tfont-size: 15px; margin-left: 4px; }\n.media-selector_3y0 .tree-view_3of span {\n\tfont-size: 14px;\n    color: #1F2021;\n\tvertical-align: middle;\n\tword-break: break-all;\n}\n.media-selector_3y0 .menu_3VH {\n\tpadding: 0px 16px;\n\twidth: 100%;\n    justify-content: space-between;\n}\n.media-selector_3y0 .menu_3VH > div .menu__item_2lN:first-child {\n    padding-right: 15px;\n    margin-right: 15px;\n    border-right: 1px solid #ddd;\n}\n.media-selector_3y0 .menu__item_2lN a.btn_1ft {\n    width: 30px;\n    text-align: center;\n    color: #292B2C;\n    padding-left: 0;\n    padding-right: 0;\n}\n.media-selector_3y0 .menu__item_2lN .btn_1ft i {\n    opacity: .5;\n}\n.media-selector_3y0 .menu__item_2lN .btn_1ft:hover i,\n.media-selector_3y0 .menu__item_2lN .btn_1ft.active_wQ3 i {\n\topacity: 1;\n}\n.media-selector_3y0 .menu__item_2lN .btn_1ft.active_wQ3 {\n    pointer-events: none;\n}\n.media-selector_3y0 .btn_1ft + .btn_1ft {\n\tmargin-left: 8px;\n}\n.media-selector_3y0 .list-media_3er {\n\theight: 100%;\n\tfont-size: 13px;\n\toverflow-y: auto;\n    box-sizing: border-box;\n\toverflow-x: hidden; }\n.media-selector_3y0 .list-media_3er .loading-img_1bI {\n\tborder: 1px solid #e4e4e4;\n\tposition: relative; }\n.media-selector_3y0 .list-media_3er .loading-img__percent-loading_1_e {\n\tbackground-color: #4D90FE;\n\theight: 14px; }\n.media-selector_3y0 .list-media_3er .loading-img__percent-pre-loading_1Ep {\n\tbackground-color: #A2C5FF;\n\theight: 14px; }\n.media-selector_3y0 .list-media_3er .loading-img__number-loading_prg {\n\tposition: absolute;\n\tfont-size: 11px;\n\tcolor: white; }\n.media-selector_3y0 .list-media_3er.grid_327 {\n\tpadding: 8px; }\n.media-selector_3y0 .list-media_3er.grid_327 .marg-left_2Wn {\n\tmargin-left: 20px; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc {\n\twidth: 122px;\n\tposition: relative;\n\tcursor: pointer;\n\ttext-align: center;\n    margin: 8px;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc span {\n\t-ms-word-wrap: break-word;\n\tword-wrap: break-word; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc .content_iWa.active_wQ3 .list-media__item__avatar_3eZ {\n\tborder: 2px solid #4C9AFF; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc .content_iWa.active_wQ3 .list-media__item__checkbox_1Oq .css-checkbox_3g4 {\n\tdisplay: block; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc .content_iWa.checked_w1f .list-media__item__checkbox_1Oq .css-checkbox_3g4 {\n\tdisplay: block; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc .loading-img_1bI {\n\tpadding: 3px;\n\twidth: 100%;\n\tmargin: 0px 5px; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc .loading-img__number-loading_prg {\n\ttop: 4px;\n\tleft: calc(50% - 11px); }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc.head_247 {\n\tdisplay: none; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__checkbox_1Oq {\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 10px; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__checkbox_1Oq .css-checkbox_3g4 {\n\tdisplay: none; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__avatar_3eZ {\n\tborder-radius: 3px;\n\tborder: 1px solid transparent;\n\theight: 122px;\n    background-color: #F5F5F5;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n    overflow: hidden;\n    background-image: linear-gradient(45deg, #dbdbdb 25%, transparent 25%, transparent 75%, #dbdbdb 75%, #dbdbdb), linear-gradient(45deg, #dbdbdb 25%, transparent 25%, transparent 75%, #dbdbdb 75%, #dbdbdb);\n    background-size: 16px 16px;\n    background-position: 0 0, 8px 8px;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__folder_2tT {\n    background: #F5F5F5 !important;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__back_1Do {\n    color: #1F2021;\n    border: 1px solid #ddd;\n    background: #fff;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__back_1Do i {\n    color: #1F2021 !important;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__avatar_3eZ,\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__avatar_3eZ i {\n\tcolor: #C1C1C1;\n    font-size: 50px; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__avatar_3eZ img {\n\tmax-width: 100%;\n\theight: auto;\n\tvertical-align: middle;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__avatar_3eZ:hover {\n\tborder: 1px solid #4C9AFF; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__avatar_3eZ .file-type_3bK {\n\tfont-size: 20px;\n\tfont-weight: bold; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__title_3Yk {\n\tmargin-top: 7px;\n    font-size: 12px;\n    color: #1F2021;\n}\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__dimensions_IEE {\n\tdisplay: none; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__file-size_3Y0 {\n\tdisplay: none; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__remove_3oS {\n\tdisplay: none; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item__remove_3oS img {\n\tcontent: url(" + __webpack_require__(59) + "); }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc:hover .list-media__item__checkbox_1Oq .css-checkbox_3g4 {\n\tdisplay: block; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc:hover .list-media__item__remove_3oS {\n\tposition: absolute;\n\ttop: 5px;\n    color: #292B2C;\n    opacity:.5;\n\tright: 10px;\n\tdisplay: block; }\n.media-selector_3y0 .list-media_3er.grid_327 .list-media__item_3lc:hover .list-media__item__remove_3oS:hover {\n    opacity:1; }\n.media-selector_3y0 .list-media_3er.list_2jg {\n\tbackground-color: white; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc {\n\ttext-align: center;\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-size: 13px;\n\tcursor: pointer; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc .content_iWa {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\twidth: 100%;\n\tz-index: 1;\n\tborder: 1px solid;\n\tborder-left-width: 0;\n\tborder-right-width: 0;\n\tborder-color: transparent;\n\tmargin-top: -1px;\n    font-size: 12px;\n    max-height: 40px;\n    height: 40px;\n}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc .content_iWa.active_wQ3 {\n\t/* -webkit-box-shadow: 0 0 0 1px #4C9AFF;\n\tbox-shadow: 0 -1 0 1px #4C9AFF;  */\n\tborder-color: #4C9AFF;\n}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc .loading-img_1bI {\n\tmargin: 0px 5px;\n\tpadding: 3px; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc .loading-img__number-loading_prg {\n\tposition: absolute;\n\ttop: 4px;\n\tleft: calc(50% - 11px);\n\tfont-size: 11px;\n\tcolor: white; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc.head_247 {\n\tfont-weight: bold;font-size: 12px; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__checkbox_1Oq {\n\twidth: 40px; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__checkbox_1Oq input[type=\"checkbox\"] {\n\tdisplay: inline-block; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__avatar_3eZ {\n\twidth: 40px; margin-right: 8px; height: 40px; line-height: 40px }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__avatar_3eZ i {\n\tfont-size:24px; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__avatar_3eZ.list-media__item__back_1Do i {\n    font-size:12px;\n    height: 30px;\n    width: 30px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    background-color: #FEFEFE;\n    text-align: center;\n    line-height:30px;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);\n}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__avatar_3eZ.list-media__item__back_1Do i:before {\n    content: \"\\F148\";\n}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__avatar_3eZ img {\n\tmax-width: 100%;\n    max-height: 36px;\n\theight: auto; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__avatar_3eZ .file-type_3bK {\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tline-height: 34px; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__title_3Yk {\n\tflex: 2;\n\ttext-align: left;\n    font-size: 12px;\n}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__dimensions_IEE {\n\tflex: 1;\n\tdisplay: block; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__file-size_3Y0 {\n\tflex: 1;\n\tdisplay: block; }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__remove_3oS {\n\tflex: 1;}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__remove_3oS i {\n    color: #202123; opacity: .5 }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__remove_3oS:hover i {\n    opacity: 1 }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item__remove_3oS img {\n\tcontent: url(" + __webpack_require__(60) + "); }\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc:nth-child(even) {\n\tbackground-color: #f9f9f9;\n\tdisplay: inherit;\n}\n.media-selector_3y0 .list-media_3er.list_2jg .list-media__item_3lc.back_27- .content_iWa.active_wQ3{\n\tz-index: 2;\n}\n.media-selector_3y0 .drag-screen_19n {\n\twidth: 100%;\n\theight: 100%; }\n.media-selector_3y0 .drag-screen_19n.border_11K {\n\tborder: 2px dashed #979797; }\n.media-selector_3y0 .drag-screen_19n.center_3kw {\n\talign-items: center;\n\tjustify-content: center; }\n.media-selector_3y0 .btn-hide-tree-folder_3UL {\n\tleft: 16px;\n    bottom: 16px;\n    position: absolute;\n\tz-index: 10; }\n.media-selector_3y0 .btn-hide-tree-folder_3UL:hover span {\n    opacity: 1;\n}\n.media-selector_3y0 .btn-hide-tree-folder_3UL a {\n    display: inline-block;\n    cursor: pointer;\n    color: #8c8d8e;\n    font-size: 12px;\n}\n.media-selector_3y0 .btn-hide-tree-folder_3UL span:first-child {\n    height: 26px;\n    width: 26px;\n    border: 1px solid #ccc;\n    border-radius: 15px;\n    background-color: #ddd;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    line-height: 24px;\n    margin-right: 7px;\n}\n.media-selector_3y0 .search-input_3IG {\n    max-width: 190px;\n}\n.media-selector_3y0 .search-input_3IG .inner-addon_1fE {\n\tposition: relative; }\n.media-selector_3y0 .search-input_3IG .inner-addon_1fE i {\n\tposition: absolute;\n\tpointer-events: none;\n\tcolor: #979797; }\n.media-selector_3y0 .search-input_3IG .right-addon_-Mb i {\n\tright: 0px; }\n.media-selector_3y0 .search-input_3IG input {\n\tpadding: 0 20px 0 30px;\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 4px !important;\n}\n.media-selector_3y0 .search-input_3IG .right-addon_-Mb input {\n\tpadding-right: 30px; }\n.media-selector_3y0 .relative_SqJ {\n\tposition: relative;\n    z-index: 9;\n    background-color: #fff;\n}\n.media-selector_3y0 .text-align--left_qND {\n\ttext-align: left; }\n.media-selector_3y0 .text-align--right_8iO {\n\ttext-align: right;\n}\n.media-selector_3y0 .css-checkbox_3g4 input[type=checkbox] {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbackground: #fff;\n\tcolor: #555;\n\tclear: none;\n\tcursor: pointer;\n\tline-height: 0;\n\theight: 12px;\n\toutline: 0;\n\tpadding: 0 !important;\n\ttext-align: center;\n\tvertical-align: middle;\n\twidth: 12px;\n\tmin-width: 12px;\n    border-radius: 3px;\n    transition: .2s all;\n    border: 1px solid rgba(0,0,0,0.15);\n\t-webkit-appearance: none;}\n.media-selector_3y0 .css-checkbox_3g4 input[type=checkbox]:checked:before {\n\tcontent: \"\\F00C\";\n    position: absolute;\n\ttop: 5px;\n\tleft: 1px;\n    font-size: 10px;\n\tcolor: #fff;\n    font-family: FontAwesome;\n}\n.media-selector_3y0 .css-checkbox_3g4 input[type=checkbox]:checked {\n    background-color: #4C9AFF;\n    border: 1px solid rgba(0,0,0,0.15);\n}\n.media-selector_3y0 .form-control_3n1 {\n\tpadding-left: 11px;\n\tfont-size: 13px;\n\tcolor: #979797;\n\tborder-radius: 3px;\n\tborder: 1px solid #ccc; }\n.media-selector_3y0 .form-control--medium_2d3 {\n\theight: 24px; }\n.media-selector_3y0 .clearfix_1Ns {\n\tclear: both; }\n.media-selector_3y0 .marg-0_3Rn {\n\tmargin: 0; }\n.media-selector_3y0 .show_1lP {\n\tdisplay: block; }\n.media-selector_3y0 .hide_1SH {\n\twidth: 0;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none; }\n.media-selector_3y0 .background-over_2u- {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tpadding: 25px; }\n.media-selector_3y0 .background-over_2u-.show_1lP {\n\tdisplay: block; }\n.media-selector_3y0 .background-over_2u-.hide_1SH {\n\tdisplay: none; }\n.media-selector_3y0 .background-over--grey_2SG {\n\tbackground-color: rgba(228, 228, 228, 0.5); }\n.media-selector_3y0 .background-over--grey_2SG.border_11K {\n\tborder: 2px solid #4D90FE; }\n.media-selector_3y0 .background-over--white_3D6 {\n\tbackground-color: white; }\n.media-selector_3y0 .tooltip_3z6 {\n\tposition: absolute;\n\tpadding: 5px 10px 5px 8px;\n\topacity: 0.6;\n\twidth: 301px;\n\ttext-align: center;\n\ttransform: translateX(-50%);\n\tleft: 50%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n.media-selector_3y0 .tooltip_3z6.noti_Wc1 {\n\tbottom: 30px;\n\tmax-width: 200px;\n\tpadding: 5px 10px;\n\ttext-align: left;\n\topacity: 0.9;\n\tz-index: 9999;\n\tborder-radius: 2px;\n}\n\n.media-selector_3y0 .tooltip_3z6.noti_Wc1 i {\n\tfont-size: 13px;\n\tmargin-right: 10px;\n\tmargin-top: -2px;\n}\n\n.media-selector_3y0 .tooltip_3z6.noti_Wc1 span {\n\tfont-size: 13px;\n}\n\n.media-selector_3y0 .tooltip_3z6 {\n\tbottom: 80px;\n}\n\n.media-selector_3y0 .tooltip_3z6.black_1fW {\n\tcolor: white;\n\tbackground-color: black;\n}\n\n.media-selector_3y0 .tooltip_3z6.success_sYE {\n\tcolor: white;\n\tbackground-color: #11b550;\n}\n\n.media-selector_3y0 .tooltip_3z6.error_35o {\n\tcolor: white;\n\tbackground-color: #e10c0c;\n}\n\n.media-selector_3y0 .tooltip_3z6.info_3VQ {\n\tcolor: white;\n\tbackground-color: #4d90fe;\n}\n\n.media-selector_3y0 .tooltip_3z6 span, .media-selector_3y0 .tooltip_3z6 i {\n\tfont-size: 13px;\n\tcolor: white; }\n.media-selector_3y0 .tooltip_3z6 span {\n\tflex: 1; }\n.media-selector_3y0 .flex_o7e {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\tflex-wrap: wrap; }\n.media-selector_3y0 .flex_o7e.center_3kw {\n\talign-items: center;\n\tjustify-content: center; }\n.media-selector_3y0 .inline-flex_3Qe {\n\tdisplay: inline-flex;\n\twidth: 100%; }\n.media-selector_3y0 .flex1_qbP {\n\tflex: 1;\n\t-webkit-flex: 1; }\n.media-selector_3y0 .flex2_2QT {\n\tflex: 2;\n\t-webkit-flex: 2; }\n.media-selector_3y0 .flex3_33W {\n\tflex: 3;\n\t-webkit-flex: 3; }\n.media-selector_3y0 .flex4__an {\n\tflex: 4;\n\t-webkit-flex: 4; }\n.media-selector_3y0 .flex5_34N {\n\tflex: 5;\n\t-webkit-flex: 5; }\n.media-selector_3y0 .marg-left-0_YI2 {\n\tmargin-left: 0px !important; }\n.media-selector_3y0 .border-right-1_1Sz {\n\tborder-right: 1px solid #ddd; }\n.media-selector_3y0 .marg-left-23_22g {\n\tmargin-left: 23px !important; }\n.media-selector_3y0 .padd-15_3u7 {\n\tpadding: 15px; }\n.media-selector_3y0 .menu-right-click_Y7G {\n\tbackground: white;\n\tbox-shadow: 0px 2px 4px 0px #979797;\n\tborder-radius: 3px;\n\tposition: absolute;\n\twidth: 150px;\n\tz-index: 1000;\n\tdisplay: block}\n.media-selector_3y0 .menu-right-click_Y7G ul {\n\tlist-style: none;\n\tmargin: 0px !important;\n\tpadding: 5px 0px !important; }\n.media-selector_3y0 .menu-right-click_Y7G ul li a{\n\tdisplay: block;}\n.media-selector_3y0 .menu-right-click_Y7G ul li a:hover{\n\tbackground-color: #e4e4e4}\n.media-selector_3y0 .menu-right-click_Y7G ul li p {\n\tmargin: 0px 10px;\n\tfont-weight:normal;\n\tfont-size: 12px;\n\tpadding: 5px 0px}\n.media-selector_3y0 .border-right-1_1Sz {\n\tborder-right: 1px solid white;\n}\n.media-selector_3y0 .overlay_2kQ {\n\tdisplay: flex;\n\tbackground-color: rgba(19, 102, 234, .5);\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tborder: 2px solid #1366F4;\n\talign-items: flex-end;\n\tjustify-content: center;\n\tz-index: 1;\n}\n.media-selector_3y0 .overlay--hidden_1YI {\n\tdisplay: none;\n}\n.media-selector_3y0 .overlay__message_3ez {\n\tbackground-color: #1366F4;\n\tcolor: #fff;\n\tpadding: 10px 20px 10px 20px;\n\tvertical-align: bottom;\n\tmargin-bottom: 50px;\n}\n", ""]);

// exports
exports.locals = {
	"wrapper": "wrapper_meH",
	"media-selector": "media-selector_3y0",
	"icon": "icon_RWs",
	"box": "box_1Od",
	"box__header": "box__header_2j3",
	"box__header__title": "box__header__title_3Bz",
	"box__content": "box__content_TAJ",
	"box__media": "box__media_3HT",
	"box__footer": "box__footer_G9c",
	"box-content-inner": "box-content-inner_1J_",
	"border-top": "border-top_jf5",
	"border-bottom": "border-bottom_12X",
	"div-parent-tree-view": "div-parent-tree-view_2AL",
	"hide-tree-folder": "hide-tree-folder_1uX",
	"btn-hide-tree-folder": "btn-hide-tree-folder_3UL",
	"tree-view": "tree-view_3of",
	"slide-left-to-right_3ho": "slide-left-to-right_3ho_3Cy",
	"tree-view__item": "tree-view__item_okg",
	"active": "active_wQ3",
	"detail": "detail_1Cd",
	"tree-view__sub-item": "tree-view__sub-item_9Yj",
	"menu": "menu_3VH",
	"menu__item": "menu__item_2lN",
	"btn": "btn_1ft",
	"list-media": "list-media_3er",
	"loading-img": "loading-img_1bI",
	"loading-img__percent-loading": "loading-img__percent-loading_1_e",
	"loading-img__percent-pre-loading": "loading-img__percent-pre-loading_1Ep",
	"loading-img__number-loading": "loading-img__number-loading_prg",
	"grid": "grid_327",
	"marg-left": "marg-left_2Wn",
	"list-media__item": "list-media__item_3lc",
	"content": "content_iWa",
	"list-media__item__avatar": "list-media__item__avatar_3eZ",
	"list-media__item__checkbox": "list-media__item__checkbox_1Oq",
	"css-checkbox": "css-checkbox_3g4",
	"checked": "checked_w1f",
	"head": "head_247",
	"list-media__item__folder": "list-media__item__folder_2tT",
	"list-media__item__back": "list-media__item__back_1Do",
	"file-type": "file-type_3bK",
	"list-media__item__title": "list-media__item__title_3Yk",
	"list-media__item__dimensions": "list-media__item__dimensions_IEE",
	"list-media__item__file-size": "list-media__item__file-size_3Y0",
	"list-media__item__remove": "list-media__item__remove_3oS",
	"list": "list_2jg",
	"back": "back_27-",
	"drag-screen": "drag-screen_19n",
	"border": "border_11K",
	"center": "center_3kw",
	"search-input": "search-input_3IG",
	"inner-addon": "inner-addon_1fE",
	"right-addon": "right-addon_-Mb",
	"relative": "relative_SqJ",
	"text-align--left": "text-align--left_qND",
	"text-align--right": "text-align--right_8iO",
	"form-control": "form-control_3n1",
	"form-control--medium": "form-control--medium_2d3",
	"clearfix": "clearfix_1Ns",
	"marg-0": "marg-0_3Rn",
	"show": "show_1lP",
	"hide": "hide_1SH",
	"background-over": "background-over_2u-",
	"background-over--grey": "background-over--grey_2SG",
	"background-over--white": "background-over--white_3D6",
	"tooltip": "tooltip_3z6",
	"noti": "noti_Wc1",
	"black": "black_1fW",
	"success": "success_sYE",
	"error": "error_35o",
	"info": "info_3VQ",
	"flex": "flex_o7e",
	"inline-flex": "inline-flex_3Qe",
	"flex1": "flex1_qbP",
	"flex2": "flex2_2QT",
	"flex3": "flex3_33W",
	"flex4": "flex4__an",
	"flex5": "flex5_34N",
	"marg-left-0": "marg-left-0_YI2",
	"border-right-1": "border-right-1_1Sz",
	"marg-left-23": "marg-left-23_22g",
	"padd-15": "padd-15_3u7",
	"menu-right-click": "menu-right-click_Y7G",
	"overlay": "overlay_2kQ",
	"overlay--hidden": "overlay--hidden_1YI",
	"overlay__message": "overlay__message_3ez"
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAAAXNSR0IArs4c6QAAAjpJREFUSA2tUz1PG0EQfWtbBMM5gSIVEkqVhgY6JEQ6JCiR8g9o+CgQNQIJ+U/Q8AdSUFPzCxCVC0SHBVKiA2xIBLm7zNvc7o3v7MNWstJ5Zt7Ovjc7szbIlsnc/+IlZHGkzg5iLtu3RAMOJu6gs7gOguWaMc0BB96Cv892Ol91Uk0CT05fyvmYJMkXnTSsL0TtlM/fqjLs4RHyWLAvWgvYjVhtsgx+nZkZxNVqjwZj4r7UbNeTE9ICjE2kBMTH+OIiPp+eYmpvD6ixo7LEMiZeW1j4i2W/PTdIT2S72qN6dHNjv8bmpgQRuicnCDY2wPj18hLx3Z0+on0KJaUCzPjdbiPc38dUs4nGzg7G5ufxbmkJLxcXuD84QHx7mzVc06d+vkU9KbaZUvVrq4WHoyN7g/ramrWMiZtYplaySgX8ORno+MoKKtPTiMPQWsbIDd7nK6dUgC/ETEzg/e4uGtvb+HV+jh9bW9YyJo56XdEV3VIBvqIxeSUNIeVA2XOK0DImXp2bK7IqpHTIVGefO8fH+Hl2Zn0kibXh4SHqq6uIrq4UXdHlHO0sU1tpBcG6XPobU92f6HFyEsHzM6pC7lZkDLps39OTJmjPdrufJIeTZ/Lbz1SS8EFI8oti/fB8XrFFxrxIUphPHCaWsh/yefkWMWbr3efalz+Xj207BGRrXHtoUbxB2rs0cVQBJ+SHpQU8OCI5C+UqkBN0FTo7CCM+zHJFOttXQBNpYY338z2p3tQE2tc5/+InfwBVhrdQPCDL6gAAAABJRU5ErkJggg=="

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAAAXNSR0IArs4c6QAAARBJREFUKBWdkjEKwjAUhtsIUgRx8AIqjt7CRfAEpYN7xSO4CaVTB0l3Jwfr6E0cBU/gIIKbrf8fkpJGuhh4zXv//740Set5GFmWjaSUC+Ztgz77jC+SJJkEQXASQpzzPF8aw56p02cfFpjC66AWYyQzRM/3/aMLs6ZOX/cp0EfhWWYf5auqqjCO40ubTkaBTJymJ+A93rSBNUDUi7GXowZZEMZ0ADBkzYEFHphW3IES9EPYhTalrSGXLkS/Aeo3rh1wrfWGXIPmjHqbPOMOnU/WiJ/bVqCB0GhuNcL2toAjaC/qLizSNJ1DLCxIfQrUHs8GOERq4EL/YV1RluUdxhXxZpN7ERb81n03zB/Ef//qF2Qrk7hdJx8TAAAAAElFTkSuQmCC"

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(62);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _Header = __webpack_require__(65);

var _Header2 = _interopRequireDefault(_Header);

var _Content = __webpack_require__(66);

var _Content2 = _interopRequireDefault(_Content);

var _Footer = __webpack_require__(78);

var _Footer2 = _interopRequireDefault(_Footer);

var _Toast = __webpack_require__(79);

var _Toast2 = _interopRequireDefault(_Toast);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

var _globalVariables = __webpack_require__(7);

var _globalVariables2 = _interopRequireDefault(_globalVariables);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener('dragover', function (e) {
				return e.preventDefault();
			});
			document.addEventListener('drop', function (e) {
				return e.preventDefault();
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_globalVariables2.default.setFromObject(this.props, ['config', 'fileType', 'enableFooter', 'enableHeader']);

			var _libs$getParamsFromUR = libs.getParamsFromURL(),
			    folder = _libs$getParamsFromUR.folder,
			    selected = _libs$getParamsFromUR.selected,
			    type = _libs$getParamsFromUR.type;

			folder = folder || this.props.folder;
			var path = selected ? selected.substring(0, selected.lastIndexOf('/') + 1) : libs.getPathFromLocal();
			if (folder !== undefined && !path.includes(folder)) path = folder;
			var initOptions = {
				type: type,
				root: libs.standardizedPath(folder, 'dir'),
				path: libs.standardizedPath(path, 'dir'),
				selected: libs.standardizedPath(selected, 'file')
			};

			this.props.init(initOptions);
		}
	}, {
		key: 'render',
		value: function render() {
			var isSidebarHidden = this.props.isSidebarHidden;

			return _react2.default.createElement('div', { className: '' + _index2.default['wrapper'] }, _react2.default.createElement('div', { className: '' + _index2.default['media-selector'] }, _react2.default.createElement('div', {
				className: _index2.default['box'] + ' ' + _index2.default['relative'] + ' ' + (isSidebarHidden ? _index2.default['hide-tree-folder'] : '')
			}, _react2.default.createElement(_Header2.default, null), _react2.default.createElement(_Content2.default, null), _react2.default.createElement(_Footer2.default, null), _react2.default.createElement(_Toast2.default, null))));
		}
	}]);

	return App;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isSidebarHidden: state.generalReducer.isSidebarHidden
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renameFile = exports.deleteFile = exports.renameFolder = exports.deleteFolder = exports.createFolder = exports.uploadFile = exports.handleUploadFile = exports.getAllFiles = undefined;

var _jquery = __webpack_require__(10);

var _jquery2 = _interopRequireDefault(_jquery);

var _globalVariables = __webpack_require__(7);

var _globalVariables2 = _interopRequireDefault(_globalVariables);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * get all files and directories in /...
 * @param path
 * @return {$.ajax}: Use .done(res => {}) to handle this ajax request
 */
var getAllFiles = exports.getAllFiles = function getAllFiles() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	var type = arguments[1];
	return _jquery2.default.ajax({
		url: '' + _globalVariables2.default.get('config').getAllFiles + (path === '/' ? '' : '&dir=' + path) + '&type=' + type
	});
};

/**
 * handleUploadFile
 * @param {event|*} e event when file is selected via: onChange={this.handleUpload.bind(this)}
 * @param {string} path directory you want to upload to, default: '/'
 * @param {array} allowType: array of allowed file type name, ex: image
 * @return {Promise}: use .then(res => {}) to handle this.
 */
var handleUploadFile = exports.handleUploadFile = function handleUploadFile() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	var file = arguments[1];
	var fileName = arguments[2];
	var onProcess = arguments[3];
	var allowType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

	var reader = new FileReader();
	reader.readAsDataURL(file);
	return new Promise(function (resolve, reject) {
		reader.onload = function (upload) {
			if (!file.type || !upload.target.result) {
				return reject('No file selected');
			}
			if (file.type && _jquery2.default.inArray(allowType, file.type.split('/')[0]) !== -1 || allowType === []) {
				return reject('File type not allowed!');
			}
			var data = {
				dir: path,
				data_uri: upload.target.result,
				filename: fileName,
				filetype: file.type
			};
			uploadFile(data, resolve, reject, onProcess);
		};
	}).catch(function (err) {
		console.log('there is an error', err);
	});
};

var uploadFile = exports.uploadFile = function uploadFile(data, resolve, reject, onProcess) {
	_jquery2.default.ajax({
		url: '' + _globalVariables2.default.get('config').uploadFile,
		type: 'POST',
		data: data,
		error: function error(res) {
			reject(res);
		},
		success: function success(res) {
			resolve(res);
		},
		xhr: function xhr() {
			var xhr = new window.XMLHttpRequest();
			xhr.upload.addEventListener("progress", function (evt) {
				if (evt.lengthComputable) {
					var percentComplete = evt.loaded / evt.total;
					onProcess(parseInt(percentComplete * 100) + '%');
				}
			}, false);
			return xhr;
		}
	});
};

/**
 * create a folder in /...
 * @param {string} path: where the new folder will be put
 * @param {string} name: name of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
var createFolder = exports.createFolder = function createFolder() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	var name = arguments[1];
	return _jquery2.default.ajax({
		url: '' + _globalVariables2.default.get('config').createFolder + (path === '/' ? '' : '&dir=' + path) + '&name=' + name
	});
};

/**
 * delete a folder in /...
 * @param {string} path: directory folder to be deleted
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
var deleteFolder = exports.deleteFolder = function deleteFolder(path) {
	return _jquery2.default.ajax({
		url: _globalVariables2.default.get('config').deleteFolder + '&dir=' + path
	});
};

/**
 * rename a folder in /...
 * @param {string} path: directory name of the folder
 * @param {string} newPath: new path of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
var renameFolder = exports.renameFolder = function renameFolder(path, newPath) {
	return _jquery2.default.ajax({
		url: _globalVariables2.default.get('config').renameFolder + '&dir=' + path + '&newPath=' + newPath
	});
};

/**
 * delete a file in /...
 * @param {string} filePath: path of file to be deleted
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
var deleteFile = exports.deleteFile = function deleteFile(filePath) {
	return _jquery2.default.ajax({
		url: _globalVariables2.default.get('config').deleteFile + '&dir=' + filePath
	});
};

/**
 * rename a file in /...
 * @param {string} path: directory name of the folder
 * @param {string} newPath: new path of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
var renameFile = exports.renameFile = function renameFile(path, newPath) {
	return _jquery2.default.ajax({
		url: _globalVariables2.default.get('config').renameFile + '&dir=' + path + '&newPath=' + newPath
	});
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _globalVariables = __webpack_require__(7);

var _globalVariables2 = _interopRequireDefault(_globalVariables);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			if (!_globalVariables2.default.get('enableHeader')) {
				return null;
			}
			return _react2.default.createElement('div', {
				className: _index2.default['box__header'] + ' ' + _index2.default['flex'] + ' ' + _index2.default['center']
			}, _react2.default.createElement('div', { className: _index2.default['text-align--left'] + ' ' + _index2.default['flex1'] }, _react2.default.createElement('p', { className: '' + _index2.default['box__header__title'] }, 'Select Image')), _react2.default.createElement('div', { className: _index2.default['text-align--right'] + ' ' + _index2.default['flex1'] }, _react2.default.createElement('a', { href: '#', onClick: this.props.onCancel }, _react2.default.createElement('i', { className: 'fa fa-close' }))));
		}
	}]);

	return Header;
}(_react.Component);

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Header);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _SideBar = __webpack_require__(67);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _NavBar = __webpack_require__(69);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _MainScreen = __webpack_require__(70);

var _MainScreen2 = _interopRequireDefault(_MainScreen);

var _HideSidebarButton = __webpack_require__(77);

var _HideSidebarButton2 = _interopRequireDefault(_HideSidebarButton);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Content = function (_Component) {
	_inherits(Content, _Component);

	function Content() {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	}

	_createClass(Content, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: _index2.default['box__content'] + ' ' + _index2.default['relative'] }, _react2.default.createElement('div', { style: { height: '100%', overflow: 'hidden', maxHeight: '100%' }, className: '' + _index2.default['flex'] }, _react2.default.createElement(_SideBar2.default, null), _react2.default.createElement('div', { className: _index2.default['flex5'] + ' ' + _index2.default['box-content-inner'] }, _react2.default.createElement(_NavBar2.default, null), _react2.default.createElement(_MainScreen2.default, null))), _react2.default.createElement(_HideSidebarButton2.default, null));
		}
	}]);

	return Content;
}(_react.Component);

exports.default = Content;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _TreeNode = __webpack_require__(68);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SideBar = function (_Component) {
	_inherits(SideBar, _Component);

	function SideBar() {
		_classCallCheck(this, SideBar);

		return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
	}

	_createClass(SideBar, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isSidebarHidden = _props.isSidebarHidden,
			    treeNodes = _props.treeNodes,
			    root = _props.root;

			return _react2.default.createElement('div', {
				className: _index2.default['div-parent-tree-view'] + ' ' + (isSidebarHidden ? _index2.default['hide'] : '')
			}, _react2.default.createElement('div', { className: '' + _index2.default['tree-view'] }, _react2.default.createElement(_TreeNode2.default, _extends({
				path: root
			}, libs.getNodeByPath(treeNodes, root)))));
		}
	}]);

	return SideBar;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isSidebarHidden: state.generalReducer.isSidebarHidden,
		treeNodes: state.fileReducer.treeNodes,
		root: state.fileReducer.root
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Partially use redux,
 * with files and api, we GET (modify store) them from store, use redux
 * with {isExpanded} and {children}, those 2 variables does not affect store, do not use redux
 */
var TreeNode = function (_Component) {
	_inherits(TreeNode, _Component);

	function TreeNode() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TreeNode);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call.apply(_ref, [this].concat(args))), _this), _this.browseFiles = function () {
			var path = _this.props.path ? _this.props.path : '/';
			_this.props.fetchFiles(path);
		}, _this.toggleTreeNode = function (e) {
			e.stopPropagation();
			if (!_this.props.isExpanded) {
				_this.props.checkAndExpand(_this.props.path);
			} else {
				_this.props.collapseTreeNode(_this.props.path);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TreeNode, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.props.isExpanded) {
				return _react2.default.createElement('div', null, _react2.default.createElement('div', {
					className: _index2.default['tree-view__item'] + ' ' + (this.props.path === this.props.currentPath ? _index2.default['active'] : '')
				}, _react2.default.createElement('div', { className: '' + _index2.default['detail'] }, _react2.default.createElement('i', {
					onClick: this.toggleTreeNode,
					className: 'fa fa-minus-square-o'
				}), _react2.default.createElement('span', {
					onClick: this.browseFiles,
					className: '' + _index2.default['marg-0']
				}, ' ', this.props.name))), _react2.default.createElement('div', { className: '' + _index2.default['tree-view__sub-item'] }, _underscore2.default.map(this.props.children, function (child) {
					return _react2.default.createElement(ConnectedTreeNode, _extends({
						path: '' + _this2.props.path + child.name + '/',
						key: child.name
					}, child));
				})));
			} else {
				return _react2.default.createElement('div', {
					className: _index2.default['tree-view__item'] + ' ' + (this.props.path === this.props.currentPath ? _index2.default['active'] : ''),
					key: this.props.name
				}, this.props.type === 'dir' ? _react2.default.createElement('div', { className: '' + _index2.default['detail'] }, _react2.default.createElement('i', {
					onClick: this.toggleTreeNode,
					className: 'fa fa-plus-square-o'
				}), _react2.default.createElement('span', {
					onClick: this.browseFiles,
					className: '' + _index2.default['marg-0']
				}, ' ', this.props.name)) : null);
			}
		}
	}]);

	return TreeNode;
}(_react.Component);

function mapStateToProps(state) {
	return {
		treeNodes: state.fileReducer.treeNodes,
		currentPath: state.fileReducer.currentPath
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

var ConnectedTreeNode = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TreeNode);

exports.default = ConnectedTreeNode;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _jquery = __webpack_require__(10);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NavBar = function (_Component) {
	_inherits(NavBar, _Component);

	function NavBar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, NavBar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
			(0, _jquery2.default)(document).ready(function () {
				(0, _jquery2.default)('#button-upload').click(function () {
					(0, _jquery2.default)('#upload-photo').click();
				});
			});
		}, _this.changeViewTypeGrid = function () {
			var changeViewType = _this.props.changeViewType;

			changeViewType('grid');
		}, _this.changeViewTypeList = function () {
			var changeViewType = _this.props.changeViewType;

			changeViewType('list');
		}, _this.onSearch = function (e) {
			_this.props.updateSearchString(e.target.value);
		}, _this.createFolder = function () {
			_this.props.createFolder(_this.props.currentPath, _this.props.files);
		}, _this.deleteMultiFiles = function (e) {
			_this.props.deleteMultiFiles(_this.props.selectedFiles, _this.props.currentPath);
		}, _this.uploadFile = function (e) {
			var uploadFiles = e.target.files;
			if (uploadFiles) {
				_this.props.handleUploadFiles(_this.props.files, uploadFiles);
			}
			_this.fileInput.value = '';
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(NavBar, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('div', {
				className: _index2.default['box__footer'] + ' ' + _index2.default['border-bottom'] + ' ' + _index2.default['flex'] + ' ' + _index2.default['center']
			}, _react2.default.createElement('div', { className: _index2.default['menu'] + ' ' + _index2.default['flex'] }, _react2.default.createElement('div', { className: '' + _index2.default['flex3'] }, _react2.default.createElement('div', { className: '' + _index2.default['flex'] }, _react2.default.createElement('div', { className: '' + _index2.default['menu__item'] }, _react2.default.createElement('button', {
				className: _index2.default['btn'] + ' ' + (this.props.viewType === 'grid' ? _index2.default['active'] : '') + ' jsn-btn jsn-btn-outline-secondary jsn-btn-sm',
				onClick: this.changeViewTypeGrid
			}, _react2.default.createElement('i', { className: 'fa fa-th-large' })), _react2.default.createElement('button', {
				className: _index2.default['btn'] + ' ' + (this.props.viewType === 'list' ? _index2.default['active'] : '') + ' jsn-btn jsn-btn-outline-secondary jsn-btn-sm',
				onClick: this.changeViewTypeList
			}, _react2.default.createElement('i', { className: 'fa fa-th-list' }))), _react2.default.createElement('div', { className: '' + _index2.default['menu__item'] }, _react2.default.createElement('input', {
				ref: function ref(n) {
					return _this2.fileInput = n;
				},
				id: 'upload-photo',
				style: {
					opacity: 0,
					position: 'absolute',
					zIndex: -1,
					visibility: 'hidden'
				},
				type: 'file',
				onChange: this.uploadFile,
				multiple: true
			}), _react2.default.createElement('button', {
				id: 'button-upload',
				className: _index2.default['btn'] + ' jsn-btn jsn-btn-outline-secondary jsn-btn-sm'
			}, 'Upload'), _react2.default.createElement('button', {
				onClick: this.createFolder,
				className: _index2.default['btn'] + ' jsn-btn jsn-btn-outline-secondary jsn-btn-sm'
			}, 'Create New Folder'), !_underscore2.default.isEmpty(this.props.selectedFiles) ? _react2.default.createElement('button', {
				onClick: this.deleteMultiFiles,
				className: _index2.default['btn'] + ' jsn-btn jsn-btn-danger jsn-btn-sm'
			}, 'Delete') : null))), _react2.default.createElement('div', { className: '' + _index2.default['search-input'] }, _react2.default.createElement('div', { className: 'jsn-input-group' }, _react2.default.createElement('span', { className: 'jsn-input-group-addon' }, _react2.default.createElement('i', { className: 'fa fa-search' })), _react2.default.createElement('input', {
				type: 'text',
				className: 'jsn-form-control',
				placeholder: 'Search',
				onChange: this.onSearch,
				value: this.props.searchString
			})))));
		}
	}]);

	return NavBar;
}(_react.Component);

function mapStateToProps(state) {
	return {
		viewType: state.generalReducer.viewType,
		currentPath: state.fileReducer.currentPath,
		selectedFiles: state.fileReducer.selectedFiles,
		searchString: state.fileReducer.searchString,
		files: libs.getNodeByPath(state.fileReducer.treeNodes, state.fileReducer.currentPath).children
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavBar);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _File = __webpack_require__(71);

var _File2 = _interopRequireDefault(_File);

var _UploadingFile = __webpack_require__(72);

var _UploadingFile2 = _interopRequireDefault(_UploadingFile);

var _Directory = __webpack_require__(73);

var _Directory2 = _interopRequireDefault(_Directory);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _ScreenHeader = __webpack_require__(74);

var _ScreenHeader2 = _interopRequireDefault(_ScreenHeader);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BackButton = __webpack_require__(75);

var _BackButton2 = _interopRequireDefault(_BackButton);

var _DropZone = __webpack_require__(76);

var _DropZone2 = _interopRequireDefault(_DropZone);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MainScreen = function (_Component) {
	_inherits(MainScreen, _Component);

	function MainScreen() {
		_classCallCheck(this, MainScreen);

		return _possibleConstructorReturn(this, (MainScreen.__proto__ || Object.getPrototypeOf(MainScreen)).apply(this, arguments));
	}

	_createClass(MainScreen, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    treeNodes = _props.treeNodes,
			    viewType = _props.viewType,
			    searchString = _props.searchString,
			    currentPath = _props.currentPath;

			var files = libs.getNodeByPath(treeNodes, currentPath).children;
			var displayItems = _underscore2.default.filter(files, function (file) {
				return libs.simpleMatch(file.name, searchString);
			});
			return _react2.default.createElement(_DropZone2.default, null, _react2.default.createElement('div', {
				className: _index2.default['list-media'] + ' ' + libs.mapViewType(viewType)
			}, _react2.default.createElement('div', { className: '' + _index2.default['flex'] }, _react2.default.createElement(_ScreenHeader2.default, null), _react2.default.createElement(_BackButton2.default, null), _underscore2.default.map(displayItems, function (item, ind) {
				if (item.type === 'dir') {
					return _react2.default.createElement(_Directory2.default, {
						key: item.name,
						data: item,
						isBack: ind % 2 === 0
					});
				} else if (item.uploading) {
					return _react2.default.createElement(_UploadingFile2.default, {
						key: item.name,
						data: item,
						isBack: ind % 2 === 0
					});
				} else {
					return _react2.default.createElement(_File2.default, {
						key: item.name,
						data: item,
						isBack: ind % 2 === 0
					});
				}
			}))));
		}
	}]);

	return MainScreen;
}(_react.Component);

function mapStateToProps(state) {
	return {
		treeNodes: state.fileReducer.treeNodes,
		viewType: state.generalReducer.viewType,
		searchString: state.fileReducer.searchString,
		currentPath: state.fileReducer.currentPath
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainScreen);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

var _general = __webpack_require__(9);

var generalConstants = _interopRequireWildcard(_general);

var _jquery = __webpack_require__(10);

var _jquery2 = _interopRequireDefault(_jquery);

var _globalVariables = __webpack_require__(7);

var _globalVariables2 = _interopRequireDefault(_globalVariables);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var File = function (_Component) {
	_inherits(File, _Component);

	function File() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, File);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = File.__proto__ || Object.getPrototypeOf(File)).call.apply(_ref, [this].concat(args))), _this), _this.enableEditting = function (e) {
			e.stopPropagation();
			_this.name.contentEditable = true;
			_this.setCaret(0, _this.name);
		}, _this.setCaret = function (pos, el) {
			var range = document.createRange();
			var sel = window.getSelection();
			range.setStart(el.childNodes[0], pos);
			range.setEnd(el.childNodes[0], el.innerText.indexOf('.'));
			sel.removeAllRanges();
			sel.addRange(range);
			el.focus();
		}, _this.deleteFile = function (e) {
			e.stopPropagation();
			var path = _this.props.currentPath + _this.props.data.name;
			_this.props.deleteFile(path, _this.props.currentPath);
		}, _this.selectMultiFile = function (e) {
			e.stopPropagation();
			var path = _this.props.currentPath + _this.props.data.name;
			if (e.target.checked) {
				_this.props.selectMultiFileAdd(path);
			} else {
				_this.props.selectMultiFileRemove(path);
			}
		}, _this.handleOnKeyDown = function (e) {
			if (e.keyCode === 13) {
				e.preventDefault();
				_this.name.contentEditable = false;
			}
		}, _this.chooseFile = function (e) {
			e.stopPropagation();
			var path = _this.props.currentPath + _this.props.data.name;
			_this.props.chooseFile(path);
		}, _this.selectFile = function (e) {
			e.stopPropagation();
			var path = _this.props.currentPath + _this.props.data.name;
			_this.props.selectFile(path);
		}, _this.handleBlur = function (e) {
			_this.name.contentEditable = false;
			_this.props.renameFile(_this.props.currentPath + _this.props.data.name, _this.props.currentPath + e.target.innerText, _this.props.currentPath, function () {
				return _this.name.innerText = _this.props.data.name;
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(File, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    selectedFile = _props.selectedFile,
			    selectedFiles = _props.selectedFiles;

			var path = this.props.currentPath + this.props.data.name;
			var isSelected = path === selectedFile;
			var isMultiSelected = selectedFiles && selectedFiles.indexOf(path) >= 0;
			return libs.isMedia(this.props.data.name) ? _react2.default.createElement('div', {
				className: _index2.default['list-media__item'] + '  ' + (this.props.isBack ? _index2.default['back'] : '')
			}, _react2.default.createElement('div', {
				className: '\n\t\t\t\t\t\t' + _index2.default['content'] + '\n\t\t\t\t\t\t' + (isSelected ? _index2.default['active'] : '') + '\n\t\t\t\t\t\t' + (isMultiSelected ? _index2.default['checked'] : '') + '\n\t\t\t\t\t'
			}, _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__checkbox'] }, _react2.default.createElement('div', { className: '' + _index2.default['css-checkbox'] }, _react2.default.createElement('input', {
				onClick: this.selectMultiFile,
				id: 'option',
				type: 'checkbox',
				name: 'field',
				value: 'option',
				checked: isMultiSelected ? true : false
			}), _react2.default.createElement('label', { htmlFor: 'option' }, _react2.default.createElement('span', null, _react2.default.createElement('span', null))))), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__avatar'],
				onDoubleClick: this.chooseFile,
				onClick: this.selectFile
			}, _react2.default.createElement('img', {
				src: '' + _globalVariables2.default.get('config').baseURL + this.props.currentPath + this.props.data.name
			})), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__title'] }, _react2.default.createElement('span', {
				ref: function ref(r) {
					return _this2.name = r;
				},
				onBlur: this.handleBlur,
				onDoubleClick: this.enableEditting,
				onKeyDown: this.handleOnKeyDown
			}, this.props.data.name)), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__dimensions'] }, libs.isMedia(this.props.data.name) ? _react2.default.createElement('span', null, this.props.data.image_width + 'x' + this.props.data.image_height) : null), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__file-size'] }, _react2.default.createElement('span', null, this.props.data.file_size)), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__remove'] }, _react2.default.createElement('a', { href: '#', onClick: this.deleteFile }, _react2.default.createElement('i', { className: 'fa fa-trash-o' }))))) : _globalVariables2.default.get('fileType') === generalConstants.TYPE_FILE ? _react2.default.createElement('div', {
				className: _index2.default['list-media__item'] + '  ' + (this.props.isBack ? _index2.default['back'] : '')
			}, _react2.default.createElement('div', {
				className: '\n\t\t\t\t\t\t' + _index2.default['content'] + '\n\t\t\t\t\t\t' + (isSelected ? _index2.default['active'] : '') + '\n\t\t\t\t\t\t' + (isMultiSelected ? _index2.default['checked'] : '') + '\n\t\t\t\t\t'
			}, _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__checkbox'] }, _react2.default.createElement('div', { className: '' + _index2.default['css-checkbox'] }, _react2.default.createElement('input', {
				onClick: this.selectMultiFile,
				id: 'option',
				type: 'checkbox',
				name: 'field',
				value: 'option',
				checked: isMultiSelected ? true : false
			}), _react2.default.createElement('label', { htmlFor: 'option' }, _react2.default.createElement('span', null, _react2.default.createElement('span', null))))), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__avatar'],
				onDoubleClick: this.chooseFile,
				onClick: this.selectFile
			}, _react2.default.createElement('span', { className: '' + _index2.default['file-type'] }, this.props.data.name.match(/\..*$/) ? this.props.data.name.match(/\..*$/)[0].toUpperCase() : generalConstants.UNKNOWN_FILE_TYPE)), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__title'] }, _react2.default.createElement('span', {
				ref: function ref(r) {
					return _this2.name = r;
				},
				onBlur: this.handleBlur,
				onDoubleClick: this.enableEditting,
				onKeyDown: this.handleOnKeyDown
			}, this.props.data.name)), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__dimensions'] }, libs.isMedia(this.props.data.name) ? _react2.default.createElement('span', null, this.props.data.image_width + 'x' + this.props.data.image_height) : null), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__file-size'] }, _react2.default.createElement('span', null, this.props.data.file_size)), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__remove'] }, _react2.default.createElement('a', { href: '#', onClick: this.deleteFile }, _react2.default.createElement('i', { className: 'fa fa-trash-o' }))))) : null;
		}
	}]);

	return File;
}(_react.Component);

function mapStateToProps(state) {
	return {
		currentPath: state.fileReducer.currentPath,
		selectedFile: state.fileReducer.selectedFile,
		selectedFiles: state.fileReducer.selectedFiles
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(File);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var UploadingFile = function (_Component) {
  _inherits(UploadingFile, _Component);

  function UploadingFile() {
    _classCallCheck(this, UploadingFile);

    var _this = _possibleConstructorReturn(this, (UploadingFile.__proto__ || Object.getPrototypeOf(UploadingFile)).call(this));

    _this.state = {
      uploadPercentage: '0%'
    };
    return _this;
  }

  _createClass(UploadingFile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          currentPath = _props.currentPath,
          data = _props.data;

      this.props.handleUploadFile(currentPath, data.uploading, data.name, function (percentage) {
        return _this2.setState({ uploadPercentage: percentage });
      });

      data.willSelect && this.props.selectFile(currentPath + data.name);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: _index2.default['list-media__item'] + ' ' + (this.props.isBack ? _index2.default['back'] : '')
      }, _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__checkbox'] }), _react2.default.createElement('div', { className: _index2.default['content'] }, _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__avatar'] }, _react2.default.createElement('div', { style: {
          margin: 'auto',
          height: '15px',
          width: '80%',
          backgroundColor: '#fff',
          borderRadius: '4px',
          border: '1px solid #1366F4'
        } }, _react2.default.createElement('div', { style: {
          height: '100%',
          width: this.state.uploadPercentage,
          backgroundColor: 'rgba(19, 102, 234, .8)',
          color: '#fff',
          fontSize: '13px',
          lineHeight: 'normal'
        } }, _react2.default.createElement('span', { style: {} }, this.state.uploadPercentage)))), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__title'] }, _react2.default.createElement('span', null, this.props.data.name))));
    }
  }]);

  return UploadingFile;
}(_react.Component);

function mapStateToProps(state) {
  return {
    currentPath: state.fileReducer.currentPath
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UploadingFile);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _jquery = __webpack_require__(10);

var _jquery2 = _interopRequireDefault(_jquery);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Directory = function (_Component) {
	_inherits(Directory, _Component);

	function Directory() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Directory);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Directory.__proto__ || Object.getPrototypeOf(Directory)).call.apply(_ref, [this].concat(args))), _this), _this.openFolder = function (e) {
			e.stopPropagation();
			var _this$props = _this.props,
			    data = _this$props.data,
			    currentPath = _this$props.currentPath;

			var path = currentPath + data.name + '/';
			_this.props.fetchFiles(path);
		}, _this.enableEditting = function (e) {
			e.stopPropagation();
			_this.name.contentEditable = true;
			_this.setCaret(0, _this.name);
		}, _this.setCaret = function (pos, el) {
			var range = document.createRange();
			var sel = window.getSelection();
			range.setStart(el.childNodes[0], pos);
			range.setEnd(el.childNodes[0], el.innerText.length);
			sel.removeAllRanges();
			sel.addRange(range);
			el.focus();
		}, _this.handleOnKeyDown = function (e) {
			if (e.keyCode === 13) {
				e.preventDefault();
				_this.name.contentEditable = false;
			}
		}, _this.deleteFolder = function (e) {
			e.stopPropagation();
			var path = _this.props.currentPath + _this.props.data.name;
			_this.props.deleteFolder(path, _this.props.currentPath);
		}, _this.selectMultiFile = function (e) {
			e.stopPropagation();
			var path = _this.props.currentPath + _this.props.data.name;
			if (e.target.checked) {
				_this.props.selectMultiFileAdd(path);
			} else {
				_this.props.selectMultiFileRemove(path);
			}
		}, _this.handleBlur = function (e) {
			_this.name.contentEditable = false;
			_this.props.renameFolder(_this.props.currentPath + _this.props.data.name, _this.props.currentPath + e.target.innerText, _this.props.currentPath, function () {
				return _this.name.innerText = _this.props.data.name;
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Directory, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    selectedFile = _props.selectedFile,
			    selectedFiles = _props.selectedFiles;

			var path = this.props.currentPath + this.props.data.name;
			var isSelected = path === selectedFile;
			var isMultiSelected = selectedFiles && selectedFiles.indexOf(path) >= 0;
			return _react2.default.createElement('div', {
				className: _index2.default['list-media__item'] + ' ' + (this.props.isBack ? _index2.default['back'] : '')
			}, _react2.default.createElement('div', {
				className: '\n\t\t\t\t\t\t' + _index2.default['content'] + '\n\t\t\t\t\t\t' + (isSelected ? _index2.default['active'] : '') + '\n\t\t\t\t\t\t' + (isMultiSelected ? _index2.default['checked'] : '') + '\n\t\t\t\t\t'
			}, _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__checkbox'] }, _react2.default.createElement('div', { className: '' + _index2.default['css-checkbox'] }, _react2.default.createElement('input', {
				onClick: this.selectMultiFile,
				id: 'option',
				type: 'checkbox',
				name: 'field',
				value: 'option',
				checked: isMultiSelected ? true : false
			}), _react2.default.createElement('label', { htmlFor: 'option' }, _react2.default.createElement('span', null, _react2.default.createElement('span', null))))), _react2.default.createElement('div', { className: _index2.default['list-media__item__avatar'] + ' ' + _index2.default['list-media__item__folder'],
				onClick: this.openFolder }, _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'fa fa-folder-o' }))), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__title'] }, _react2.default.createElement('span', {
				ref: function ref(r) {
					return _this2.name = r;
				},
				onDoubleClick: this.enableEditting,
				onKeyDown: this.handleOnKeyDown,
				onBlur: this.handleBlur
			}, this.props.data.name)), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__dimensions'] }), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__file-size'] }), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__remove'] }, _react2.default.createElement('a', { href: '#', onClick: this.deleteFolder }, _react2.default.createElement('i', { className: 'fa fa-trash-o' })))));
		}
	}]);

	return Directory;
}(_react.Component);

function mapStateToProps(state) {
	return {
		currentPath: state.fileReducer.currentPath,
		selectedFile: state.fileReducer.selectedFile,
		selectedFiles: state.fileReducer.selectedFiles
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Directory);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _general = __webpack_require__(9);

var generalConstants = _interopRequireWildcard(_general);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ScreenHeader = function (_Component) {
	_inherits(ScreenHeader, _Component);

	function ScreenHeader() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ScreenHeader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScreenHeader.__proto__ || Object.getPrototypeOf(ScreenHeader)).call.apply(_ref, [this].concat(args))), _this), _this.toggleCheckAll = function (e) {
			e.stopPropagation();
			var isAllChecked = e.target.checked;
			if (isAllChecked) {
				_this.props.checkAll();
			} else {
				_this.props.uncheckAll();
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ScreenHeader, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: _index2.default['list-media__item'] + ' ' + _index2.default['head'] }, _react2.default.createElement('div', { className: '' + _index2.default['content'] }, _react2.default.createElement('div', { className: _index2.default['list-media__item__checkbox'] + ' ' + _index2.default['css-checkbox'] }, _react2.default.createElement('label', null, _react2.default.createElement('input', {
				type: 'checkbox',
				onClick: this.toggleCheckAll,
				checked: this.props.selectedFiles.length !== 0 && this.props.selectedFiles.length === this.props.files.length
			}))), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__avatar'] }, _react2.default.createElement('span', null, 'Name')), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__title'] }), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__dimensions'] }, _react2.default.createElement('span', null, 'Dimensions (px)')), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__file-size'] }, _react2.default.createElement('span', null, 'File size (KB)')), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__remove'] }, _react2.default.createElement('span', null, 'Delete'))));
		}
	}]);

	return ScreenHeader;
}(_react.Component);

function mapStateToProps(state) {
	return {
		selectedFiles: state.fileReducer.selectedFiles,
		files: libs.getNodeByPath(state.fileReducer.treeNodes, state.fileReducer.currentPath).children
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ScreenHeader);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var BackButton = function (_Component) {
	_inherits(BackButton, _Component);

	function BackButton() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, BackButton);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackButton.__proto__ || Object.getPrototypeOf(BackButton)).call.apply(_ref, [this].concat(args))), _this), _this.goBack = function () {
			var currentPath = _this.props.currentPath;

			var paths = currentPath.split('/');
			var path = currentPath.replace(paths[paths.length - 2] + '/', '');
			_this.props.fetchFiles(path);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(BackButton, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    currentPath = _props.currentPath,
			    root = _props.root;

			return currentPath !== root ? _react2.default.createElement('div', {
				onClick: this.goBack,
				className: _index2.default['list-media__item'] + ' ' + _index2.default['back-button']
			}, _react2.default.createElement('div', { className: '' + _index2.default['content'] }, _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__checkbox'] }), _react2.default.createElement('div', { className: _index2.default['list-media__item__avatar'] + ' ' + _index2.default['list-media__item__back'] }, _react2.default.createElement('i', { className: 'fa fa-angle-left' })), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__title'] }, _react2.default.createElement('span', null, 'Back')), _react2.default.createElement('div', {
				className: '' + _index2.default['list-media__item__dimensions']
			}), _react2.default.createElement('div', {
				className: '' + _index2.default['list-media__item__file-size']
			}), _react2.default.createElement('div', { className: '' + _index2.default['list-media__item__remove'] }))) : null;
		}
	}]);

	return BackButton;
}(_react.Component);

function mapStateToProps(state) {
	return {
		currentPath: state.fileReducer.currentPath,
		root: state.fileReducer.root
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BackButton);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _libs = __webpack_require__(5);

var libs = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DropZone = (_temp = _class = function (_Component) {
  _inherits(DropZone, _Component);

  function DropZone() {
    _classCallCheck(this, DropZone);

    var _this = _possibleConstructorReturn(this, (DropZone.__proto__ || Object.getPrototypeOf(DropZone)).call(this));

    _this.handleDragEnter = function (e) {
      _this.setState({ dragging: true });
    };

    _this.handleDragLeave = function (e) {
      if (e.target === _this.overlay) _this.setState({ dragging: false });
    };

    _this.handleDragOver = function (e) {
      e.preventDefault();
    };

    _this.handleDrop = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          config = _this$props.config,
          currentPath = _this$props.currentPath;

      var uploadFiles = e.dataTransfer.files;

      _this.setState({ dragging: false });
      _this.props.handleUploadFiles(_this.props.files, uploadFiles);
    };

    _this.state = {
      dragging: false
    };
    return _this;
  }

  _createClass(DropZone, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: '\n          ' + _index2.default['box__content'] + '\n          ' + _index2.default['box__media'] + '\n          ' + _index2.default['relative'] + '\n        ',
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDragOver: this.handleDragOver,
        onDrop: this.handleDrop
      }, this.props.children, _react2.default.createElement('div', {
        className: '\n            ' + _index2.default['overlay'] + '\n            ' + (this.state.dragging ? '' : _index2.default['overlay--hidden']) + '\n          ',
        ref: function ref(_ref) {
          return _this2.overlay = _ref;
        }
      }, _react2.default.createElement('span', { className: '' + _index2.default['overlay__message'] }, 'Drop files to upload them to folder: ', _react2.default.createElement('b', null, this.props.currentPath.split('/').filter(function (folder) {
        return folder;
      }).pop() || '/root'))));
    }
  }]);

  return DropZone;
}(_react.Component), _class.propTypes = {}, _class.defaultProps = {}, _temp);

function mapStateToProps(state) {
  return {
    currentPath: state.fileReducer.currentPath,
    files: libs.getNodeByPath(state.fileReducer.treeNodes, state.fileReducer.currentPath).children
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DropZone);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var HideSidebarButton = function (_Component) {
	_inherits(HideSidebarButton, _Component);

	function HideSidebarButton() {
		_classCallCheck(this, HideSidebarButton);

		return _possibleConstructorReturn(this, (HideSidebarButton.__proto__ || Object.getPrototypeOf(HideSidebarButton)).apply(this, arguments));
	}

	_createClass(HideSidebarButton, [{
		key: 'render',
		value: function render() {
			var toggleSidebar = this.props.toggleSidebar;

			return _react2.default.createElement('div', { className: '' + _index2.default['btn-hide-tree-folder'] }, _react2.default.createElement('a', { onClick: toggleSidebar }, _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'fa fa-arrow-left' }))));
		}
	}]);

	return HideSidebarButton;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isSidebarHidden: state.generalReducer.isSidebarHidden
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HideSidebarButton);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _globalVariables = __webpack_require__(7);

var _globalVariables2 = _interopRequireDefault(_globalVariables);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Footer = function (_Component) {
	_inherits(Footer, _Component);

	function Footer() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Footer);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.onCancel = function () {
			_this.props.onCancel();
		}, _this.chooseFile = function () {
			_this.props.chooseFile(_this.props.selectedFile);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			var selectedFile = this.props.selectedFile;

			if (!_globalVariables2.default.get('enableFooter')) {
				return null;
			}

			return _react2.default.createElement('div', {
				className: _index2.default['box__footer'] + ' ' + _index2.default['border-top'] + ' ' + _index2.default['flex'] + ' ' + _index2.default['center']
			}, _react2.default.createElement('div', {
				className: '' + _index2.default['text-align--right'],
				style: { width: '100%' }
			}, _underscore2.default.isEmpty(selectedFile) ? _react2.default.createElement('button', {
				className: _index2.default['btn'] + ' jsn-btn jsn-btn-primary jsn-btn-sm',
				disabled: true
			}, 'Select') : _react2.default.createElement('button', {
				onClick: this.chooseFile,
				className: _index2.default['btn'] + ' jsn-btn jsn-btn-primary jsn-btn-sm ' + _index2.default['active']
			}, 'Select'), _react2.default.createElement('button', {
				onClick: this.onCancel,
				className: _index2.default['btn'] + ' jsn-btn jsn-btn-outline-secondary jsn-btn-sm'
			}, 'Cancel')));
		}
	}]);

	return Footer;
}(_react.Component);

function mapStateToProps(state) {
	return {
		selectedFile: state.fileReducer.selectedFile
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Footer);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _underscore = __webpack_require__(6);

var _underscore2 = _interopRequireDefault(_underscore);

var _general = __webpack_require__(9);

var constants = _interopRequireWildcard(_general);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * USAGE: dispatch(addMessage({type: 'TOAST_NOTI', content: 'your message goes here', duration: 5000}))
 * type: 'TOAST_SUCCESS' || 'TOAST_ERROR' || 'TOAST_NOTI'
 * content: string
 * duration: number (millis)
 */
var Toast = function (_React$Component) {
	_inherits(Toast, _React$Component);

	function Toast() {
		_classCallCheck(this, Toast);

		return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
	}

	_createClass(Toast, [{
		key: 'render',
		value: function render() {
			var messages = this.props.messages;

			return _react2.default.createElement('div', null, _underscore2.default.map(messages, function (message, ind) {
				switch (message.type) {
					case constants.TOAST_ERROR:
						return _react2.default.createElement('div', {
							key: ind,
							className: _index2.default['tooltip'] + ' ' + _index2.default['noti'] + ' ' + _index2.default['error']
						}, _react2.default.createElement('i', { className: 'fa fa-remove' }), _react2.default.createElement('span', null, ' ', message.content, ' '));
					case constants.TOAST_NOTI:
						return _react2.default.createElement('div', {
							key: ind,
							className: _index2.default['tooltip'] + ' ' + _index2.default['noti'] + ' ' + _index2.default['info']
						}, _react2.default.createElement('i', { className: 'fa fa-info-circle' }), _react2.default.createElement('span', null, ' ', message.content, ' '));
					case constants.TOAST_SUCCESS:
						return _react2.default.createElement('div', {
							key: ind,
							className: _index2.default['tooltip'] + ' ' + _index2.default['noti'] + ' ' + _index2.default['success']
						}, _react2.default.createElement('i', { className: 'fa fa-check' }), _react2.default.createElement('span', null, message.content));
				}
			}));
		}
	}]);

	return Toast;
}(_react2.default.Component);

function mapStateToProps(state) {
	return {
		messages: state.generalReducer.messages
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Toast);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ })
/******/ ]);
});
//# sourceMappingURL=bb-media-selector-dev.js.map