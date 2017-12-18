import reducer from '../../reducers/file-reducer'
import * as actConstants from '../../constants/actions'

const initialState = {
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
}


const randomState = {
  selectedFile: '/image.jpg',
  selectedFiles: [
    '/New folder/image.png',
    '/whatever.jpg'
  ],
  chosenFile: '/whatever.jpg',
  treeNodes: {
    isExpanded: false,
    name: 'images',
    type: 'dir',
    children: [
      {
        isExpanded: false,
        name: 'banners',
        type: 'dir',
        children: [
          { name: 'A folder', type: 'dir' },
          { name: 'file.txt', type: 'file' }
        ]
      },
      {
        isExpanded: true,
        name: 'New folder',
        type: 'dir'
      },
      {
        name: 'image.jpg',
        type: 'file'
      }
    ]
  },
  currentPath: '/banners/',
  searchString: 'abc'
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
    .toBe(randomState)
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
    searchString: ''
  }

  it('should update treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.GET_ALL_FILES,
      ...sampleProps
    })
    expect(newState.treeNodes.children[1]).toHaveProperty('children', sampleFiles)
  })

  it('should set default value for selectedFile and selectedFiles', () => {
    const newState = reducer(randomState, {
      type: actConstants.UPDATE_SEARCH_STRING,
      keyWord: 'abcd'
    })
    expect(newState.selectedFile).toEqual(null)
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.GET_ALL_FILES,
      ...sampleProps,
      extraProp: 'something',
      chosenFile: 'filename'
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.chosenFile).toEqual(randomState.chosenFile)
  })
})

describe('handle SET_CURRENT_PATH action', () => {
  it('should update currentPath', () => {
    const newState = reducer(randomState, {
      type: actConstants.SET_CURRENT_PATH,
      path: '/New folder/'
    })
    expect(newState.currentPath).toEqual('/New folder/')
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.SET_CURRENT_PATH,
      path: '/New folder/',
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle EXPAND_TREE_NODE action', () => {
  it('should update isExpanded true for given path', () => {
    const newState = reducer(randomState, {
      type: actConstants.EXPAND_TREE_NODE,
      path: '/banners/'
    })
    expect(newState.treeNodes.children[0].isExpanded).toEqual(true)
  })

  it('should not update anything when isExpanded already true', () => {
    const newState = reducer(randomState, {
      type: actConstants.EXPAND_TREE_NODE,
      path: '/New folder/'
    })
    expect(newState).toEqual(randomState)
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.EXPAND_TREE_NODE,
      path: '/banners/',
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle COLLAPSE_TREE_NODE action', () => {
  it('should update isExpanded false for given path', () => {
    const newState = reducer(randomState, {
      type: actConstants.COLLAPSE_TREE_NODE,
      path: '/New folder/'
    })
    expect(newState.treeNodes.children[1].isExpanded).toEqual(false)
  })

  it('should not update anything when isExpanded already false', () => {
    const newState = reducer(randomState, {
      type: actConstants.COLLAPSE_TREE_NODE,
      path: '/banners/'
    })
    expect(newState).toEqual(randomState)
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.COLLAPSE_TREE_NODE,
      path: '/New folder/',
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle UPDATE_SEARCH_STRING action', () => {
  it('should update searchString', () => {
    const newState = reducer(randomState, {
      type: actConstants.UPDATE_SEARCH_STRING,
      keyWord: 'image'
    })
    expect(newState.searchString).toEqual('image')
  })

  it('should set default value for selectedFile and selectedFiles', () => {
    const newState = reducer(randomState, {
      type: actConstants.UPDATE_SEARCH_STRING,
      keyWord: 'abcd'
    })
    expect(newState.selectedFile).toEqual(null)
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.UPDATE_SEARCH_STRING,
      keyWord: 'e',
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle CHOOSE_FILE action', () => {
  const samplePath = '/New folder/image.png'

  it('should update chosenFile property', () => {
    const newState = reducer(randomState, {
      type: actConstants.CHOOSE_FILE,
      path: samplePath
    })
    expect(newState.chosenFile).toEqual(samplePath)
  })

  it('should set default value for selectedFile and selectedFiles', () => {
    const newState = reducer(randomState, {
      type: actConstants.CHOOSE_FILE,
      keyWord: 'abcd'
    })
    expect(newState.selectedFile).toEqual(null)
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.CHOOSE_FILE,
      path: samplePath,
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle SELECT_FILE action', () => {
  const samplePath = '/New folder/image.png'

  it('should update selectedFile', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_FILE,
      path: samplePath
    })
    expect(newState.selectedFile).toEqual(samplePath)
  })

  it('should set selectedFiles to []', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_FILE,
      path: samplePath
    })
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_FILE,
      path: samplePath,
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle SELECT_MULTI_FILE_ADD action', () => {
  const samplePath = '/New folder/image.png'

  it('should add element to selecedFiles array', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_ADD,
      path: samplePath
    })
    expect(newState.selectedFiles)
    .toHaveLength(randomState.selectedFiles.length + 1)
    expect(newState.selectedFiles).toContain(samplePath)
  })

  it('should set selectedFile to null', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_ADD,
      path: samplePath
    })
    expect(newState.selectedFile).toEqual(null)
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_ADD,
      path: samplePath,
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle SELECT_MULTI_FILE_REMOVE action', () => {
  const samplePath = randomState.selectedFiles[0]

  it('should remove element from selectedFiles array', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: samplePath
    })
    expect(newState.selectedFiles)
    .toHaveLength(randomState.selectedFiles.length - 1)
    expect(newState.selectedFiles).not.toContain(samplePath)
  })

  it('should ignore if path not in selectedFiles array', () => {
    expect(reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: '/path/to/somewhere'
    })).toEqual(randomState)
  })

  it('should run normally if selectedFiles array empty', () => {
    const newState = reducer({ ...randomState, selectedFiles: [] }, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: samplePath
    })
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.SELECT_MULTI_FILE_REMOVE,
      path: samplePath,
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle DELETE_FILES_SUCCESS action', () => {
  it('should set selectedFiles to []', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FILES_SUCCESS,
    })
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FILES_SUCCESS,
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle CHECK_ALL action', () => {
  it('should add all files to selectedFiles array', () => {
    const newState = reducer(randomState, {
      type: actConstants.CHECK_ALL
    })
    const currentNode = randomState.treeNodes.children[0]
    expect(newState.selectedFiles).toHaveLength(currentNode.children.length)
    currentNode.children.forEach(child => {
      expect(newState.selectedFiles)
      .toContainEqual(randomState.currentPath + child.name)
    })
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.CHECK_ALL,
      extraProps: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle UNCHECK_ALL action', () => {
  it('should set selectedFiles to []', () => {
    const newState = reducer(randomState, {
      type: actConstants.UNCHECK_ALL
    })
    expect(newState.selectedFiles).toEqual([])
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.UNCHECK_ALL,
      extraProp: 'something',
      treeNodes: {}
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.treeNodes).toEqual(randomState.treeNodes)
  })
})

describe('handle CREATE_FOLDER_SUCCESS action', () => {
  const sampleFile = sampleFiles[0]

  it('should add folder to treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.CREATE_FOLDER_SUCCESS,
      file: sampleFile
    })
    expect(newState.treeNodes.children[0].children).toContain(sampleFile)
  })

  it('shoud ignore extra property', () => {
    const newState = reducer(randomState, {
      type: actConstants.CREATE_FOLDER_SUCCESS,
      file: sampleFile,
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle ADD_UPLOADING_FILE action', () => {
  const sampleFile = {
    name: 'randomName.txt',
    type: 'file',
  }
  const newName = 'randomName(1).txt'

  it('should add an uploading file to treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.ADD_UPLOADING_FILE,
      file: sampleFile,
      name: newName
    })
    expect(newState.treeNodes.children[0].children)
    .toHaveLength(randomState.treeNodes.children[0].children.length + 1)
    expect(newState.treeNodes.children[0].children)
    .toContainEqual(expect.objectContaining({
      name: newName,
      type: 'file'
    }))
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.ADD_UPLOADING_FILE,
      file: sampleFile,
      name: newName,
      extraProp: 'something',
      selectedFiles: []

    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle UPLOAD_SUCCESS action', () => {
  const sampleFile = {
    name: 'file.txt',
    type: 'file',
    size: '1.0',
    image_height: 1020,
    image_width: 1600
  }

  it('should change file with the same name in treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.UPLOAD_SUCCESS,
      file: sampleFile
    })
    expect(newState.treeNodes.children[0].children)
    .toHaveLength(randomState.treeNodes.children[0].children.length)
    expect(newState.treeNodes.children[0].children).toContain(sampleFile)
  })

  it('shoud ignore extra property', () => {
    const newState = reducer(randomState, {
      type: actConstants.UPLOAD_SUCCESS,
      file: sampleFile,
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle RENAME_FOLDER_SUCCESS action', () => {
  const oldName = 'A folder'
  const newName = 'new name'

  it('should update file name in treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.RENAME_FOLDER_SUCCESS,
      oldName, newName
    })
    expect(newState.treeNodes.children[0].children)
    .toHaveLength(randomState.treeNodes.children[0].children.length)
    expect(newState.treeNodes.children[0].children)
    .toContainEqual(expect.objectContaining({ name: 'new name' }))
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.RENAME_FOLDER_SUCCESS,
      oldName, newName,
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle RENAME_FILE_SUCCESS action', () => {
  const oldName = 'file.txt'
  const newName = 'new name'

  it('should update file name in treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.RENAME_FILE_SUCCESS,
      oldName, newName
    })
    expect(newState.treeNodes.children[0].children)
    .toHaveLength(randomState.treeNodes.children[0].children.length)
    expect(newState.treeNodes.children[0].children)
    .toContainEqual(expect.objectContaining({ name: newName }))
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.RENAME_FILE_SUCCESS,
      oldName, newName,
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('hanlde DELETE_FOLDER_SUCCESS action', () => {
  const name = 'A folder'

  it('should remove folder from treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FOLDER_SUCCESS,
      name
    })
    expect(newState.treeNodes.children[0].children)
    .toHaveLength(randomState.treeNodes.children[0].children.length - 1)
    expect(newState.treeNodes.children[0].children)
    .not.toContainEqual(expect.objectContaining({ name }))
  })

  it('should ignore if folder with name not in current folder', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FOLDER_SUCCESS,
      name: 'New folder'
    })
    expect(newState).toEqual(randomState)
  })

  it('should run normally if current folder empty', () => {
    const newState = reducer({ ...randomState, currentPath: '/New folder/' }, {
      type:actConstants.DELETE_FOLDER_SUCCESS,
      name
    })
    expect(newState.treeNodes.children[2]).not.toHaveProperty('children')
  })

  it('should ignore extra properties', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FOLDER_SUCCESS,
      name,
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})

describe('handle DELETE_FILE_SUCCESS action', () => {
  const name = 'file.txt'

  it('should remove file from treeNodes', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FILE_SUCCESS,
      name
    })
    expect(newState.treeNodes.children[0].children)
    .toHaveLength(randomState.treeNodes.children[0].children.length - 1)
    expect(newState.treeNodes.children[0].children)
    .not.toContainEqual(expect.objectContaining({ name }))
  })

  it('should ignore if file with name not in current folder', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FILE_SUCCESS,
      name: 'image.jpg'
    })
    expect(newState).toEqual(randomState)
  })

  it('should run normally if current folder empty', () => {
    const newState = reducer({ ...randomState, currentPath: '/New folder/' }, {
      type:actConstants.DELETE_FILE_SUCCESS,
      name
    })
    expect(newState.treeNodes.children[2]).not.toHaveProperty('children')
  })

  it('should ignore extra property', () => {
    const newState = reducer(randomState, {
      type: actConstants.DELETE_FILE_SUCCESS,
      name,
      extraProp: 'something',
      selectedFiles: []
    })
    expect(newState).not.toHaveProperty('extraProp')
    expect(newState.selectedFiles).toEqual(randomState.selectedFiles)
  })
})
