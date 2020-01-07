import $ from 'jquery'
import globalVars from '../libs/globalVariables'

/**
 * get all files and directories in /...
 * @param path
 * @return {$.ajax}: Use .done(res => {}) to handle this ajax request
 */
export const getAllFiles = (path = '/') =>
	$.ajax({
		url: `${globalVars.get('config').getAllFiles}${path === '/' ? '' : '&dir=' + path}`
	})

/**
 * handleUploadFile
 * @param {event|*} e event when file is selected via: onChange={this.handleUpload.bind(this)}
 * @param {string} path directory you want to upload to, default: '/'
 * @param {array} allowType: array of allowed file type name, ex: image
 * @return {Promise}: use .then(res => {}) to handle this.
 */
export const handleUploadFile = (
	path = '/',
	file,
	fileName,
	onProcess,
	allowType = []
) => {
	const reader = new FileReader()
	reader.readAsDataURL(file)
	return new Promise((resolve, reject) => {
		reader.onload = upload => {
			const hasExtension = file.name.substring(file.name.lastIndexOf('.'), file.name.length - 1).length >= 3
			if ((!file.type && !hasExtension) || !upload.target.result) {
				return reject('No file selected')
			}
			if (
				(file.type &&
					$.inArray(allowType, file.type.split('/')[0]) !== -1) ||
				allowType === []
			) {
				return reject('File type not allowed!')
			}
			const data = {
				dir: path,
				data_uri: upload.target.result,
				filename: fileName,
				filetype: file.type
			}
			uploadFile(data, resolve, reject, onProcess)
		}
	}).catch(err => {
		console.log('there is an error', err)
	})
}

export const uploadFile = (data, resolve, reject, onProcess) => {
	$.ajax({
		url: `${globalVars.get('config').uploadFile}`,
		type: 'POST',
		data: data,
		error: res => {
			reject(res)
		},
		success: res => {
			resolve(res)
		},
		xhr: () => {
			var xhr = new window.XMLHttpRequest()
			xhr.upload.addEventListener("progress", function (evt) {
					if (evt.lengthComputable) {
							var percentComplete = evt.loaded / evt.total
							onProcess(parseInt(percentComplete * 100) + '%')
					}
			}, false)
			return xhr
		}
	})
}

/**
 * create a folder in /...
 * @param {string} path: where the new folder will be put
 * @param {string} name: name of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const createFolder = (path = '/', name) =>
	$.ajax({
		url: `${globalVars.get('config').createFolder}${path === '/' ? '' : '&dir=' + path}&name=${name}`
	})

/**
 * delete a folder in /...
 * @param {string} path: directory folder to be deleted
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const deleteFolder = (path) =>
	$.ajax({
		url: `${globalVars.get('config').deleteFolder}&dir=${path}`
	})

/**
 * rename a folder in /...
 * @param {string} path: directory name of the folder
 * @param {string} newPath: new path of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const renameFolder = (path, newPath) =>
	$.ajax({
		url: `${globalVars.get('config').renameFolder}&dir=${path}&newPath=${newPath}`
	})

/**
 * delete a file in /...
 * @param {string} filePath: path of file to be deleted
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const deleteFile = (filePath) =>
	$.ajax({
		url: `${globalVars.get('config').deleteFile}&dir=${filePath}`
	})

/**
 * rename a file in /...
 * @param {string} path: directory name of the folder
 * @param {string} newPath: new path of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const renameFile = (path, newPath) =>
	$.ajax({
		url: `${globalVars.get('config').renameFile}&dir=${path}&newPath=${newPath}`
	})
