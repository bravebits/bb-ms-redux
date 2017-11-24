import * as actions from '../actions'
import * as actConstants from '../constants/actions'

describe('test getAllfiles action creator', () => {
  it('should create GET_ALL_FILES action', () => {
    const path = '/path/to/files'
    const files = 'files'

    const expectedAction = {
      type: actConstants.GET_ALL_FILES,
      path, files
    }

    expect(actions.getAllFiles(path, files)).toEqual(expectedAction)
  })
})

describe('test init action creator', () => {
  it('should create INIT action', () => {
    const config = {}
    const fileType = 'type'
		const enableHeader = true
    const enableFooter = false

    const expectedAction = {
      type: actConstants.INIT,
      config, fileType, enableHeader, enableFooter
    }

    expect(actions.init(config, fileType, enableHeader, enableFooter)).toEqual(expectedAction)
  })
})
