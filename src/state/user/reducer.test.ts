import { createStore, Store } from 'redux'

import { DEFAULT_DEADLINE_FROM_NOW } from '../../constants/misc'
import { updateVersion } from '../global/actions'
import { updateUserProfile } from './actions'
import reducer, { initialState, UserState } from './reducer'

describe('discover reducer', () => {
  let store: Store<UserState>

  beforeEach(() => {
    store = createStore(reducer, initialState)
  })

  describe('updateVersion', () => {
    it('has no timestamp originally', () => {
      expect(store.getState().lastUpdateVersionTimestamp).toBeUndefined()
    })
    it('sets the lastUpdateVersionTimestamp', () => {
      const time = new Date().getTime()
      store.dispatch(updateVersion())
      expect(store.getState().lastUpdateVersionTimestamp).toBeGreaterThanOrEqual(time)
    })
    it('sets allowed slippage and deadline', () => {
      store = createStore(reducer, {
        ...initialState,
        userDeadline: undefined,
        userSlippageTolerance: undefined,
      } as any)
      store.dispatch(updateVersion())
      expect(store.getState().userDeadline).toEqual(DEFAULT_DEADLINE_FROM_NOW)
      expect(store.getState().userSlippageTolerance).toEqual('auto')
    })
  })

  describe('updateUserProfile', () => {
    it('has empty profile originally', () => {
      expect(store.getState().profile).toEqual({})
    })

    it('updates user profile', () => {
      store = createStore(reducer, {
        ...initialState,
      } as any)
      store.dispatch(updateUserProfile({ profile: { name: 'user name' } }))
      expect(store.getState().profile).toEqual({ name: 'user name' })
    })
  })
})
