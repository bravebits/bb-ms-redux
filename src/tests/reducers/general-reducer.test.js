import reducer from '../../reducers/general-reducer'
import * as actConstants from '../../constants/actions'

const initialState = {
	isSidebarHidden: false,
	viewType: 'grid',
	messages: []
}

const defaultMessage = {
  content: 'Something when wrong!',
  duration: 1000,
  type: 'TOAST_ERROR'
}

const randomState = {
  isSidebarHidden: true,
  viewType: 'list',
  messages: [
    {
      content: 'Something went wrong!',
      duration: 1000,
      type: 'TOAST_ERROR'
    }
  ]
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
      message: 'test'
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
      viewType: 'grid'
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
      viewType: 'grid'
    })).toEqual({ ...randomState, messages: [...messages, sampleMessage] })
  })
})
