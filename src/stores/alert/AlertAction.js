export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export const showAlert = data => ({ type: SHOW_ALERT, data })
export const hideAlert = () => ({ type: HIDE_ALERT })