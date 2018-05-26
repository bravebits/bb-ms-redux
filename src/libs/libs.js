import css from '../styles/index.css'
import { each, find, filter, reduce } from 'underscore'

export function mapViewType(viewType) {
	switch (viewType) {
		case 'list':
			return css['list']
		case 'grid':
			return css['grid']
		default:
			return css['grid']
	}
}

export function isMedia(name) {
	return name
		.toLowerCase()
		.match(
			/.(bmp|gif|ico|jpg|jpeg|png|svg)$/
		)
}

export function setPathToLocal(path) {
	if (typeof Storage !== 'undefined') {
		localStorage.setItem('mediaselectorPath', path)
	}
}

export function getPathFromLocal() {
	if (typeof Storage !== 'undefined') {
		return localStorage.getItem('mediaselectorPath') || '/images/'
	} else {
		return '/images/'
	}
}

export function getNodeByPath(root, path) {
	const dirs = filter(path.split('/'), dir => dir)
	let node = root
	each(dirs, dir => {
		if (node.children === undefined) {
			node.children = [{
				name: dir
			}]
		}
		const matchChild = find(node.children, child => child.name === dir)
		if (matchChild) node = matchChild
	})
	return node
}

export function setNodeChildren(node, files) {
	each(files, file => {
		const child = find(node.children, child => child.name === file.name)
		if (child) {
			file.isExpanded = child.isExpanded
			file.children = child.children
		}
	})
	node.children = files
}

export function simpleMatch(str, term) {
	return str.toUpperCase().includes(term.toUpperCase())
}

export function getParamsFromURL() {
	const paramsList = decodeURI(window.location.search.substr(1)).split('&')
	return reduce(paramsList, (result, item) => {
		let key, value
		[key, value] = item.split('=')
		result[key] = value
		return result
	}, {})
}

export function standardizedPath(path, type) {
	if (path === undefined || path === null) return
	if (path[0] !== '/') path = '/' + path
	if (type === 'dir' && path[path.length - 1] !== '/') path = path + '/'
	return path
}

export function parseJSON(response) {
	let result
	try {
		result = JSON.parse(response);
	}
	catch (e) {
		const matched = response.match(/^[^\{\[]*(.+)$/)
		try {
			result = JSON.parse(matched[1])
		}
		catch (e) {

		}
	}
	return result
}