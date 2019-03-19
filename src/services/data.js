export const teams = [
  {
    name: 'NAG'
  },
  {
    name: 'IDG'
  },
  {
    name: 'DAG'
  },
  {
    name: 'ING'
  },
  {
    name: 'IAG'
  },
  {
    name: 'DNG'
  },
]
export const champs = [
  {
    number: 1,
    finished: true,
    rules: '2x2 Bo9 ARAM',
    teams: [
      {
        name: teams[0].name,
        score: 1,
        win: false,
      },
      {
        name: teams[1].name,
        score: 5,
        win: true,
      },
    ]
  },
  {
    number: 2,
    finished: false,
    rules: '2x2 Bo9 ARAM',
    teams: [
      {
        name: teams[2].name,
        score: 3,
        win: false,
      },
      {
        name: teams[3].name,
        score: 1,
        win: false,
      },
    ]
  },
 
]