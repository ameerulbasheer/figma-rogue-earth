export const initialState = {
  name: '',
  description: '',
  resolve: {
    hope:    { unlocked: 2, filled: 1 },
    courage: { unlocked: 2, filled: 1 },
  },
  virtue:  { text: '', effect: 'HOPE',    active: false },
  torment: { text: '', effect: 'HOPE',    active: false },
  growth: 5,
  sync:   2,
  chits:  0,
  experiences: [
    { name: '', type: 'learned', diceValue: 1 },
    { name: '', type: 'learned', diceValue: 1 },
    { name: '', type: 'learned', diceValue: 1 },
    { name: '', type: 'learned', diceValue: 1 },
    { name: '', type: 'learned', diceValue: 1 },
    { name: '', type: 'learned', diceValue: 1 },
  ],
  necessities: [
    { name: 'Food',  upkeep: 1, collect: null, qty: 0 },
    { name: 'Water', upkeep: 1, collect: null, qty: 0 },
  ],
  inventory: '',
  notes: '',
}
