import { Cycle } from './reducer'

export enum actionTypes {
  AddNewCycle = 'AddNewCycle',
  InterruptCurrentCycle = 'InterruptCurrentCycle',
  MarkCurrentCycleAsFinished = 'MarkCurrentCycleAsFinished',
}

export function AddNewCycleAction(newCycle: Cycle) {
  return {
    type: actionTypes.AddNewCycle,
    payload: {
      newCycle,
    },
  }
}

export function InterruptCurrentCycleAction() {
  return {
    type: actionTypes.InterruptCurrentCycle,
  }
}

export function MarkCurrentCycleAsFinishedAction() {
  return {
    type: actionTypes.MarkCurrentCycleAsFinished,
  }
}
