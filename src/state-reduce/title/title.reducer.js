export const title = (state, action) => {
  return action.type === 'CHANGE_TITLE'
    ? action.to
    : state.title
}