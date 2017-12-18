import * as actions from '../actions'
import * as actConstants from '../constants/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('test addUploadingFile action creator', () => {
  it('should return ADD_LOADING_FILE action', () => {
    const files = []
    const file = {name: 'filename.txt'}
    expect(actions.addUploadingFile(files, file)).toEqual({
      type: actConstants.ADD_UPLOADING_FILE,
      name: 'filename.txt',
      file
    })
  })

  it('should add (1) when exist a file with the same name', () => {
    const files = [{name: 'filename.txt', type: 'file'}]
    const file = {name: 'filename.txt'}
    expect(actions.addUploadingFile(files, file)).toEqual({
      type: actConstants.ADD_UPLOADING_FILE,
      name: 'filename(1).txt',
      file
    })
  })

  it('should add (2) when exist a file with the same name and end with (1)', () => {
    const files = [{name: 'filename(1).txt', type: 'file'}]
    const file = {name: 'filename.txt'}
    expect(actions.addUploadingFile(files, file)).toEqual({
      type: actConstants.ADD_UPLOADING_FILE,
      name: 'filename(2).txt',
      file
    })
  })

  it('should add (max index + 1) when exist some files with the same name', () => {
    const files = [
      {name: 'filename.txt', type: 'file'},
      {name: 'filename(2).txt', type: 'file'},
      {name: 'filename(5).txt', type: 'file'},
    ]
    const file = {name: 'filename.txt'}
    expect(actions.addUploadingFile(files, file)).toEqual({
      type: actConstants.ADD_UPLOADING_FILE,
      name: 'filename(6).txt',
      file
    })
  })

  it('should only care the last dot', () => {
    const files = [{name: 'file.abc.xyz.txt', type: 'file'}]
    const file = {name: 'file.abc.xyz.txt'}
    expect(actions.addUploadingFile(files, file)).toEqual({
      type: actConstants.ADD_UPLOADING_FILE,
      name: 'file.abc.xyz(1).txt',
      file
    })
  })

  it('should run normally when file has no extension', () => {
    const files = [{name: 'filename', type: 'file'}]
    const file = {name: 'filename'}
    expect(actions.addUploadingFile(files, file)).toEqual({
      type: actConstants.ADD_UPLOADING_FILE,
      name: 'filename(1)',
      file
    })
  })
})

describe('test handleUploadFiles action creator', () => {
  it('should dispatch one action per uploadFile', () => {
    const currentFiles = []
    const uploadFiles = [
      {name: 'file.txt'},
      {name: 'file1.txt'},
      {name: 'file2.txt'}
    ]
    const store = mockStore({})

    store.dispatch(actions.handleUploadFiles(currentFiles, uploadFiles))
    const actionsDispatched = store.getActions()
    expect(actionsDispatched).toHaveLength(uploadFiles.length)
    uploadFiles.forEach((file) =>
      expect(actionsDispatched).toContainEqual(expect.objectContaining({
        type: actConstants.ADD_UPLOADING_FILE,
        file
      }))
    )
  })
})
