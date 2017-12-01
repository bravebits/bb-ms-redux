import reducer from '../../reducers/general-reducer'
import * as actConstants from '../../constants/actions'

const sampleConfig = {
  baseURL: 'http://pb.box/dev/',
  getAllFiles: 'http://pb.box/dev/index.php?pb3ajax=1&task=getListFiles',
  getFullDirectory:
    'http://pb.box/dev/index.php?pb3ajax=1&task=getFullDirectory',
  uploadFile: 'http://pb.box/dev/index.php?pb3ajax=1&task=uploadFile',
  createFolder: 'http://pb.box/dev/index.php?pb3ajax=1&task=createFolder',
  deleteFolder: 'http://pb.box/dev/index.php?pb3ajax=1&task=deleteFolder',
  deleteFile: 'http://pb.box/dev/index.php?pb3ajax=1&task=deleteFile',
  renameFolder: 'http://pb.box/dev/index.php?pb3ajax=1&task=renameFolder',
  renameFile: 'http://pb.box/dev/index.php?pb3ajax=1&task=renameFile'
}

const initialState = {
	config: {},
	isSidebarHidden: false,
	viewType: 'grid',
	messages: [],
	version: '1.0.0',
	localPath: '/'
}

const defaultMessage = {
  content: 'Something when wrong!',
  duration: 1000,
  type: 'TOAST_ERROR'
}

const randomState = {
  config: {
    baseURL: 'http://test.com',
    getAllFiles: 'http://test.com/all'
  },
  isSidebarHidden: true,
  viewType: 'list',
  messages: [
    {
      content: 'Something went wrong!',
      duration: 1000,
      type: 'TOAST_ERROR'
    }
  ],
  version: '1.1.1',
  localPath: '/User/name/Downloads/sample.txt',
  fileType: 'TYPE_FILE',
  enableHeader: true,
  enableFooter: true
}

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

describe('handle INIT action', () => {
  const sampleProps = {
    config: sampleConfig,
    fileType: 'TYPE_IMAGE',
    enableHeader: false,
    enableFooter: true
  }

  it('should add new properties if not existing yet', () => {
    expect(reducer(initialState, { type: actConstants.INIT, ...sampleProps }))
    .toEqual({ ...initialState, ...sampleProps })
  })

  it('should change properties if existing', () => {
    expect(reducer(randomState, { type: actConstants.INIT, ...sampleProps }))
    .toEqual({ ...randomState, ...sampleProps })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type:actConstants.INIT,
      ...sampleProps,
      extraProp: 'something',
      viewType: 'grid',
    })).toEqual({ ...randomState, ...sampleProps })
  })
})

describe('handle CHANGE_VIEW_TYPE action', () => {
  it('should change viewType property', () => {
    expect(reducer(randomState, {
      type: actConstants.CHANGE_VIEW_TYPE,
      viewType: 'grid',
    })).toEqual({ ...randomState, viewType: 'grid' })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.CHANGE_VIEW_TYPE,
      viewType: 'grid',
      extraProp: 'something',
      config: sampleConfig
    })).toEqual({ ...randomState, viewType: 'grid' })
  })
})

describe('handle TOGGLE_SIDEBAR action', () => {
  it('should change isSidebarHidden property', () => {
    expect(reducer(randomState, { type: actConstants.TOGGLE_SIDEBAR,}))
    .toEqual({ ...randomState, isSidebarHidden: false })
  })

  it('should ignore extra properties', () => {
    expect(reducer(randomState, {
      type: actConstants.TOGGLE_SIDEBAR,
      isSidebarHidden: true
    })).toEqual({ ...randomState, isSidebarHidden: false })
  })
})

describe('handle SHOW_MESSAGE action', () => {
  const sampleMessage = {
    type: 'TOAST_SUCCESS',
    content: 'Action done successfully.',
    duration: 1000
  }
  const messages = randomState.messages

  it('shoud add item to messages array', () => {
    expect(reducer(randomState, {
      type: actConstants.SHOW_MESSAGE,
      message: sampleMessage
    })).toEqual({
      ...randomState,
      messages: [...messages, sampleMessage]
    })
  })

  it('should ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.SHOW_MESSAGE,
      message: sampleMessage,
      extraProps: 'something',
      config: sampleConfig
    })).toEqual({ ...randomState, messages: [...messages, sampleMessage] })
  })
})

describe('handle HIDE_MESSAGE action', () => {
  const sampleMessage = {
    type: 'TOAST_SUCCESS',
    content: 'Action done successfully.',
    duration: 1000
  }
  const messages = randomState.messages

  it('should remove message from array', () => {
    expect(reducer({ ...randomState, messages: [...messages, sampleMessage] }, {
      type: actConstants.HIDE_MESSAGE,
      message: sampleMessage
    })).toEqual(randomState)
  })

  it('should ignore message not apear in array', () => {
    expect(reducer(randomState, {
      type: actConstants.HIDE_MESSAGE,
      message: sampleMessage
    })).toEqual(randomState)
  })

  it('should run normally if messages array empty', () => {
    expect(reducer({ randomState, messages: [] }, {
      type: actConstants.HIDE_MESSAGE,
      message: sampleMessage
    })).toEqual({ randomState, messages: [] })
  })

  it('should ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.SHOW_MESSAGE,
      message: sampleMessage,
      extraProps: 'something',
      config: sampleConfig
    })).toEqual({ ...randomState, messages: [...messages, sampleMessage] })
  })
})

describe('handle GET_PATH_FROM_LOCAL action', () => {
  it('should change localPath property', () => {
    expect(reducer(randomState, {
      type: actConstants.GET_PATH_FROM_LOCAL,
      localPath: '/'
    })).toEqual({ ...randomState, localPath: '/' })
  })

  it('should ignore extra property', () => {
    expect(reducer(randomState, {
      type: actConstants.GET_PATH_FROM_LOCAL,
      localPath: '/',
      extraProps: 'something',
      config: sampleConfig
    })).toEqual({ ...randomState, localPath: '/' })
  })
})
