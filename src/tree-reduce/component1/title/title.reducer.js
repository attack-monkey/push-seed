import { qs, replace } from 'push_fw'
import { Title } from '../../../components/component1/title/title.component'

export const title = (state, action) =>
  action.type === 'CHANGE_TITLE'
    ? replace(qs('[data-id="title"]'), Title({ state }))
    : undefined