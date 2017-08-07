const initialState = [
  {
    id: '1',
    name: 'LocoMotion',
    descr: 'Descr1',
    maker: 'Maker 1',
    play: true
  },
  {
    id: '2',
    name: 'App2',
    descr: 'Descr2',
    maker: 'Maker 2',
    play: true
  },
  {
    id: '3',
    name: 'App3',
    descr: 'Descr3',
    maker: 'Maker 3',
    work: true
  },
  {
    id: '4',
    name: 'App4',
    descr: 'Descr4',
    maker: 'Maker 4',
    work: true
  },
  {
    id: '5',
    name: 'App5',
    descr: 'Descr5',
    maker: 'Maker 5',
    play: true
  },
  {
    id: '6',
    name: 'App6',
    descr: 'Descr6',
    maker: 'Maker 6',
    work: true
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state }
    default:
      return state
  }
}
