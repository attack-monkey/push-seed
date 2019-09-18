import { title } from './title/title.reducer'

export const stateReduce = (state, action) => ({
  title: title(state, action)
})