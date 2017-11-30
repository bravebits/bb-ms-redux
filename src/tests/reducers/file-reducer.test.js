import reducer from '../../reducers/file-reducer'
import * as actConstants from '../../constants/actions'
import { RENAME_FILE_SUCCESS } from '../../constants/actions';

const initialState = {
	selectedFile: null,
	selectedFiles: [],
	chosenFile: '',
	treeNodes: [],
	files: [],
	currentPath: '/',
	searchResults: []
}

const randomState = {
  selectedFile: '/whatever.jpg',
  selectedFiles: [
    '/New folder/image.png',
    '/whatever.jpg'
  ],
  chosenFile: '/whatever.jpg',
  treeNodes: [{ name: 'New folder 1', type: 'dir', file_size: 0.05 }],
  files: [
    { name: 'New folder', type: 'dir', file_size: 0.05 },
    { name: 'image.png', type: 'file', file_size: 0.01 },
    { name: 'whatever.jpg', type: 'file', file_size: 0.02 }
  ],
  currentPath: '/',
  searchResults: [
    { name: 'image.png', type: 'file', file_size: 0.01 },
    { name: 'whatever.jpg', type: 'file', file_size: 0.02 }
  ]
}

const sampleFiles = [
  { name: 'New folder 1', type: 'dir', file_size: 0.05 },
  { name: 'New folder 2', type: 'dir', file_size: 0.1 },
  { name: 'image 1.png', type: 'file', file_size: 0.01 },
  { name: 'image 2.png', type: 'file', file_size: 0.01 },
  { name: 'whatever.jpg', type: 'file', file_size: 0.02 }
]

describe('init state', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})

describe('handle not existing action', () => {
  it('should return current state', () => {
    expect(reducer(randomState, { type: 'not existing' }))
    .toEqual(randomState)
  })
})

describe('handle GET_ALL_FILES action', () => {
  const sampleProps = {
		path: '/New folder/',
		files: sampleFiles
  }
  const initProps = {
    selectedFiles: [],
    selectedFile: null,
    searchResults: []
  }

  it('should update properties', () => {
    expect(reducer(randomState, {
      type: actConstants.GET_ALL_FILES,
      ...sampleProps
    })).toEqual({
      ...randomState,
      currentPath: sampleProps.path,
      files: sampleProps.files,
      ...initProps
    })
  })

  it('should set default value for undefined properties', () => {
    expect(reducer(randomState, {
      type: actConstants.GET_ALL_FILES,
      path: undefined,
      files: undefined
    })).toEqual({
      ...randomState,
      ...initProps,
      files: initialState.files,
      currentPath: initialState.currentPath
    })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.GET_ALL_FILES,
      ...sampleProps,
      extraProps: 'something',
      chosenFile: 'filename'
    })).toEqual({
      ...randomState,
      currentPath: sampleProps.path,
      files: sampleProps.files,
      ...initProps
    })
  })
})

describe('handle EXPAND_TREE_NODE_SUCCESS action', () => {
  it('should update treeNodes property', () => {
    expect(reducer(randomState, {
      type: actConstants.EXPAND_TREE_NODE_SUCCESS,
      treeNodes: sampleFiles
    })).toEqual({ ...randomState, treeNodes: sampleFiles })
  })

  it('should set default value for undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.EXPAND_TREE_NODE_SUCCESS,
      treeNodes: undefined
    })).toEqual({ ...randomState, treeNodes: initialState.treeNodes })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.EXPAND_TREE_NODE_SUCCESS,
      treeNodes: sampleFiles,
      extraProp: 'something',
      path: '/path/to/somewhere'
    })).toEqual({ ...randomState, treeNodes: sampleFiles })
  })
})

describe('handle SEARCH_IN_FOLDER action', () => {
  const initProps = {
    selectedFiles: [],
    selectedFile: null
  }

  it('should filter exactly', () => {
    expect(reducer(randomState, {
      type: actConstants.SEARCH_IN_FOLDER,
      keyWord: 'image'
    })).toEqual({
      ...randomState,
      ...initProps,
      searchResults: [{ name: 'image.png', type: 'file', file_size: 0.01 }]
    })
  })

  it('should filter right if keyWord equal to empty string', () => {
    expect(reducer(randomState, {
      type: actConstants.SEARCH_IN_FOLDER,
      keyWord: ''
    })).toEqual({
      ...randomState,
      ...initProps,
      searchResults: randomState.files
    })
  })

  it('should update searchResults to [] if no results match', () => {
    expect(reducer(randomState, {
      type: actConstants.SEARCH_IN_FOLDER,
      keyWord: 'anything'
    })).toEqual({
      ...randomState,
      ...initProps,
      searchResults: []
    })
  })

  it('should set default value for undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.SEARCH_IN_FOLDER,
      keyWord: undefined
    })).toEqual({ ...randomState, ...initProps })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.SEARCH_IN_FOLDER,
      keyWord: 'e',
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      ...initProps,
      searchResults: randomState.files
    })
  })
})

describe('handle CLEAR_SEARCH_RESULTS action', () => {
  const initProps = {
    selectedFiles: [],
    selectedFile: null,
    searchResults: []
  }

  it('should update state', () => {
    expect(reducer(randomState, {
      type: actConstants.CLEAR_SEARCH_RESULTS,
    })).toEqual({ ...randomState, ...initProps })
  })
  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.CLEAR_SEARCH_RESULTS,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({ ...randomState, ...initProps })
  })
})

describe('handle CHOOSE_FILE action', () => {
  const samplePath = '/New folder/image.png'
  const initProps = {
    selectedFiles: [],
    selectedFile: null
  }

  it('should update chosenFile property', () => {
    expect(reducer(randomState, {
      type: actConstants.CHOOSE_FILE,
      path: samplePath
    })).toEqual({
      ...randomState,
      ...initProps,
      chosenFile: samplePath,
    })
  })

  it('should set default value for undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.CHOOSE_FILE,
      path: undefined
    })).toEqual({
      ...randomState,
      ...initProps,
      chosenFile: initialState.chosenFile
    })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.CHOOSE_FILE,
      path: samplePath,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      ...initProps,
      chosenFile: samplePath
    })
  })
})

describe('handle SELECT_FILE action', () => {
  const samplePath = '/New folder/image.png'

  it('should update selectedFile property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_FILE,
      path: samplePath
    })).toEqual({
      ...randomState,
      selectedFile: samplePath,
      selectedFiles: []
    })
  })

  it('should set default value for undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_FILE,
      path: undefined
    })).toEqual({
      ...randomState,
      selectedFile: initialState.selectedFile,
      selectedFiles: []
    })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_FILE,
      path: samplePath,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      selectedFile: samplePath,
      selectedFiles: []
    })
  })
})

describe('handle SELECT_MULTI_FILE_ADD action', () => {
  const samplePath = '/New folder/image.png'

  it('should update selecedFiles property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_ADD,
      path: samplePath
    })).toEqual({
      ...randomState,
      selectedFiles: [ ...randomState.selectedFiles, samplePath ],
      selectedFile: null
    })
  })

  it('should ignore undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_ADD,
      path: undefined
    })).toEqual({
      ...randomState,
      selectedFile: null
    })
  })

  it('should ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_ADD,
      path: samplePath,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      selectedFiles: [ ...randomState.selectedFiles, samplePath ],
      selectedFile: null
    })
  })
})

describe('handle SELECT_MULTI_FILE_REMOVE action', () => {
  const samplePath = randomState.selectedFiles[0]
  const selectedFiles = randomState.selectedFiles.slice(1)

  it('should update selectedFiles property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: samplePath
    })).toEqual({
      ...randomState,
      selectedFiles
    })
  })

  it('should ignore if path not in selectedFiles array', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: '/path/to/somewhere'
    })).toEqual(randomState)
  })

  it('should run normally if selectedFiles array empty', () => {
    expect(reducer({ ...randomState, selectedFiles: [] }, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: samplePath
    })).toEqual({
      ...randomState,
      selectedFiles: []
    })
  })

  it('should ignore undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: undefined
    })).toEqual(randomState)
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: samplePath,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      selectedFiles
    })
  })
})

describe('handle DELETE_FILES_SUCCESS action', () => {
  it('should set selectedFiles to []', () => {
    expect(reducer(randomState, {
      type: actConstants.DELETE_FILES_SUCCESS,
    })).toEqual({ ...randomState, selectedFiles: [] })
  })
  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.DELETE_FILES_SUCCESS,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({ ...randomState, selectedFiles: [] })
  })
})

describe('handle CHECK_ALL action', () => {
  const currentPath = '/New folder/'
  const selectedFiles = sampleFiles.map(file => currentPath + file.name)

  it('should add all files to selectedFiles array', () => {
    expect(reducer(randomState, {
      type: actConstants.CHECK_ALL,
      files: sampleFiles,
      currentPath
    })).toEqual({
      ...randomState,
      selectedFiles,
      selectedFile: null
    })
  })

  it('should ignore undefine properties', () => {
    expect(reducer(randomState, {
      type: actConstants.CHECK_ALL,
      files: undefined,
      currentPath: undefined
    })).toEqual(randomState)
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.CHECK_ALL,
      files: sampleFiles,
      currentPath,
      extraProps: 'something',
      path: '/path/to/somewhere'
    })).toEqual({
      ...randomState,
      selectedFiles,
      selectedFile: null
    })
  })
})

describe('handle UNCHECK_ALL action', () => {
  it('should set selectedFiles to []', () => {
    expect(reducer(randomState, {
      type: actConstants.UNCHECK_ALL
    })).toEqual({
      ...randomState,
      selectedFiles: []
    })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.UNCHECK_ALL,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      selectedFiles: []
    })
  })
})

describe('handle CREATE_FOLDER_SUCCESS action', () => {
  const sampleFile = sampleFiles[0]

  it('should add file to files array', () => {
    expect(reducer(randomState, {
      type: actConstants.CREATE_FOLDER_SUCCESS,
      file: sampleFile
    })).toEqual({
      ...randomState,
      files: [ ...randomState.files, sampleFile ]
    })
  })

  it('should ignore undefined property',  () => {
    expect(reducer(randomState, {
      type: actConstants.CREATE_FOLDER_SUCCESS,
      file: undefined
    })).toEqual(randomState)
  })

  it('shoud ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.CREATE_FOLDER_SUCCESS,
      file: sampleFile,
      extraProp: 'something',
      ffiles: sampleFiles
    })).toEqual({
      ...randomState,
      files: [ ...randomState.files, sampleFile ]
    })
  })
})

describe('handle UPLOAD_SUCCESS action', () => {
  const sampleFile = sampleFiles[4]

  it('should add file to files array', () => {
    expect(reducer(randomState, {
      type: actConstants.UPLOAD_SUCCESS,
      file: sampleFile
    })).toEqual({
      ...randomState,
      files: [ ...randomState.files, sampleFile ]
    })
  })

  it('should ignore undefined property',  () => {
    expect(reducer(randomState, {
      type: actConstants.UPLOAD_SUCCESS,
      file: undefined
    })).toEqual(randomState)
  })

  it('shoud ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.UPLOAD_SUCCESS,
      file: sampleFile,
      extraProp: 'something',
      ffiles: sampleFiles
    })).toEqual({
      ...randomState,
      files: [ ...randomState.files, sampleFile ]
    })
  })
})

describe('handle RENAME_FOLDER_SUCCESS action', () => {
  const oldName = randomState.files[0]
  const newName = 'new name'
  const files = [{
    ...randomState.files[0],
    name: 'new name'
  }].concat(randomState.files.slice(1))

  it('should update file name in files array', () => {
    expect(reducer(randomState, {
      type: actConstants.RENAME_FOLDER_SUCCESS,
      oldName, newName
    })).toEqual({ ...randomState, files })
  })

  it('should ignore undefined properties', () => {
    expect(reducer(randomState, {
      type: actConstants.RENAME_FOLDER_SUCCESS,
      oldName: undefined,
      newName: undefined
    })).toEqual(randomState)
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.RENAME_FOLDER_SUCCESS,
      oldName, newName,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({ ...randomState, files })
  })
})

describe('handle RENAME_FILE_SUCCESS action', () => {
  const oldName = randomState.files[0]
  const newName = 'new name'
  const files = [{
    ...randomState.files[0],
    name: 'new name'
  }].concat(randomState.files.slice(1))

  it('should update file name in files array', () => {
    expect(reducer(randomState, {
      type: actConstants.RENAME_FILE_SUCCESS,
      oldName, newName
    })).toEqual({ ...randomState, files })
  })

  it('should ignore undefined properties', () => {
    expect(reducer(randomState, {
      type: actConstants.RENAME_FILE_SUCCESS,
      oldName: undefined,
      newName: undefined
    })).toEqual(randomState)
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.RENAME_FILE_SUCCESS,
      oldName, newName,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({ ...randomState, files })
  })
})

describe('handle DELETE_FILE_SUCCESS action', () => {
  it('should remove file from files array', () => {
    expect(reducer(randomState, {
      type: actConstants.DELETE_FILE_SUCCESS,
      fileName: randomState.files[0].name
    })).toEqual({
      ...randomState,
      files: randomState.files.slice(1)
    })
  })

  it('should ignore undefined property', () => {
    expect(reducer(randomState, {
      type: actConstants.DELETE_FILE_SUCCESS,
      fileName: undefined
    })).toEqual(randomState)
  })

  it('should ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.DELETE_FILE_SUCCESS,
      fileName: randomState.files[0].name,
      extraProp: 'something',
      files: sampleFiles
    })).toEqual({
      ...randomState,
      files:randomState.files.slice(1)
    })
  })
})
