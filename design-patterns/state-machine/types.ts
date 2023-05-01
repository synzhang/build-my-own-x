type State = string

export type StateMachineDefinition = {
  readonly initialState: State
} & {
  readonly [state: string]: StateDefinition
}

export type StateDefinition = {
  actions: {
    onEnter(data?: any): any
    onExit(data?: any): any
  }
  transitions: {
    [event: string]: {
      target: State
      action(data?: any): any
    }
  }
}
