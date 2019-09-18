const h = require('hyperscript')

export const Title = ({ state }) =>
  h('h1', state.title, { 'data-id': 'title' })