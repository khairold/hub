const initialState = [
  {
    id: '1',
    name: 'LocoMotion',
    descr: 'Descr1',
    maker: 'Maker 1',
    play: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: 'wifiaoptimizer',
    name: 'Wi-Fi Optimizer',
    descr: `How's your WiFi?`,
    maker: 'TM R&D',
    customer: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: 'ess',
    name: 'Employee Self Service',
    descr: 'Leave and stuff',
    maker: 'GIT',
    personal: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: '2',
    name: 'App2',
    descr: 'Descr2',
    maker: 'Maker 2',
    play: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: '3',
    name: 'App3',
    descr: 'Descr3',
    maker: 'Maker 3',
    work: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: '4',
    name: 'App4',
    descr: 'Descr4',
    maker: 'Maker 4',
    work: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: '5',
    name: 'App5',
    descr: 'Descr5',
    maker: 'Maker 5',
    play: true,
    lastUpdated: '2 Days Ago'
  },
  {
    id: '6',
    name: 'App6',
    descr: 'Descr6',
    maker: 'Maker 6',
    work: true,
    lastUpdated: '2 Days Ago'
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
