import * as actions from '../actions'
import * as actConstants from '../constants/actions'

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
