import $ from 'jquery'
/**
 * get all files and directories in images/...
 * @param path
 * @return {$.ajax}: Use .done(res => {}) to handle this ajax request
 */
export const getAllFiles = (path = '/', endPoint) => 
	$.ajax({
		url: `${endPoint}&dir=${path === '' ? '/' : path}`
	})

export const getFullDirectory = (endPoint, path = '/') =>
	$.ajax({
		url: `${endPoint}&dir=${path}`
	})

/**
 * handleUploadFile
 * @param {event|*} e event when file is selected via: onChange={this.handleUpload.bind(this)}
 * @param {string} path directory you want to upload to, default: '(images)/'
 * @param {array} allowType: array of allowed file type name, ex: image
 * @return {Promise}: use .then(res => {}) to handle this.
 */
export const handleUploadFile = (
	path = '/',
	endPoint,
	file,
	allowType = []
) => {
	const reader = new FileReader()
	reader.readAsDataURL(file)
	return new Promise((resolve, reject) => {
		reader.onload = upload => {
			if (!file.type || !upload.target.result) {
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
				filename: file.name,
				filetype: file.type
			}
			uploadFile(endPoint, data, resolve, reject, 0)
		}
	}).catch(err => {
		console.log('there is an error', err)
	})
}

export const uploadFile = (endPoint, data, resolve, reject, times) => {
	$.ajax({
		url: `${endPoint}`,
		type: 'POST',
		data: data,
		dataType: 'json',
		error: res => {
			reject(res)
		},
		success: res => {
			if (res.message == 'Filename already exists!') {
				times++
				if (times > 1) {
					data.filename = data.filename.replace(`(${times - 1})`, '')
				}
				const fileExt = data.filename.substring(
					data.filename.lastIndexOf('.'),
					data.filename.length
				)
				data.filename = `${data.filename.replace(
					fileExt,
					''
				)}(${times})${fileExt}`
				uploadFile(endPoint, data, resolve, reject, times)
			} else {
				resolve(res)
			}
		}
	})
}

/**
 * create a folder in (images)/...
 * @param {string} inPath: where the new folder will be put
 * @param {string} name: name of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const createFolder = (endPoint, inPath, name) =>
	$.ajax({
		url: `${endPoint}&dir=${inPath}&name=${name}`
	})

/**
 * delete a folder in (images)/...
 * @param {string} path: directory folder to be deleted
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const deleteFolder = (endPoint, path) =>
	$.ajax({
		url: `${endPoint}&dir=${path}`
	})

/**
 * rename a folder in (images)/...
 * @param {string} path: directory name of the folder
 * @param {string} newPath: new path of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const renameFolder = (endPoint, path, newPath) =>
	$.ajax({
		url: `${endPoint}&dir=${path}&newPath=${newPath}`
	})

/**
 * delete a file in (images)/...
 * @param {string} filePath: path of file to be deleted
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const deleteFile = (endPoint, filePath) =>
	$.ajax({
		url: `${endPoint}&dir=${filePath}`
	})

/**
 * rename a file in (images)/...
 * @param {string} path: directory name of the folder
 * @param {string} newPath: new path of the new folder
 * @return {$.ajax} : Use .done(res => {}) to handle this ajax request
 */
export const renameFile = (endPoint, path, newPath) =>
	$.ajax({
		url: `${endPoint}&dir=${path}&newPath=${newPath}`
	})
