class globalVariables {
  constructor() {
    this.vars = {}
  }

  get = key => this.vars[key]

  set = (key, value) => this.vars[key] = value

  getAll = () => this.vars

  setFromObject = (obj, keys = Object.keys(obj)) => {
    keys.forEach(key =>
      obj[key] !== undefined && (this.vars[key] = obj[key])
    )
  }
}

export default new globalVariables()
