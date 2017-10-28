import css from '../styles/index.css'

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

export function isImage(name) {
	return name.toLowerCase().match(/.(jpg|png|jpeg|gif)$/)
}

export function setPathToLocal(path) {
	if (typeof Storage !== 'undefined') {
		localStorage.setItem('mediaselectorpath', path)
	}
}

export function getPathFromLocal() {
	if (typeof Storage !== 'undefined') {
		return localStorage.getItem('mediaselectorpath') || '/'
	} else {
		return '/'
	}
}
