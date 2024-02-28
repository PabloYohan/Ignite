import { actionTypes } from './actions'

import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interuptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case actionTypes.AddNewCycle:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case actionTypes.InterruptCurrentCycle: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interuptedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case actionTypes.MarkCurrentCycleAsFinished: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }

    default:
      return state
  }
}
