const storage = {
  setLocalStorage (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  getLocalStorage (key) {
    if (key) return JSON.parse(window.localStorage.getItem(key))
    return null;
  },

  removeLocalStorage (key) {
    if (window.localStorage.getItem(key)) {
      window.localStorage.removeItem(key)
    }
  },

  clearLocalStorage () {
    window.localStorage.clear()
  }
}

export default storage