import { dispatch } from 'push_fw';
import { Title } from './title/title.component';

const h = require('hyperscript')

export const Component1 = ({ state }) =>
  h('div',
    Title({ state }),
    h('br'),
    h('input', {
      type: 'text',
      placeholder: 'Enter text here',
      value: state.title,
      oninput: (ev) => dispatch({
        type: 'CHANGE_TITLE',
        to: ev.target.value
      })
    })
  )