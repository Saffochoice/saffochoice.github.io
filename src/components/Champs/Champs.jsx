import React, { Component } from 'react'
import { champs } from '../../services/data'
import './champs.scss'
export default class Champs extends Component {
  calcWinClass = (champ, team) => {
    if(!champ.finished)
      return ''
    if(team.win)
      return ' win'
    else 
      return ' lost'
  }
  render() {

    return (
      <div className='champs-component'>
        {champs.map(champ =>
          <div className='champ-item'>
            <div className="heading">Championship {champ.rules} #{champ.number}</div>
            <div className="container">
              <div className={'leftside' + this.calcWinClass(champ, champ.teams[0])}>
                <div className="logo"></div>
                <div className="name">{champ.teams[0].name}</div>
                <div className="score">{champ.teams[0].score}</div>
              </div>
              <div className="middleside">vs</div>
              <div className={'rightside' + this.calcWinClass(champ, champ.teams[1])}>
                <div className="logo"></div>
                <div className="name">{champ.teams[1].name}</div>
                <div className="score">{champ.teams[1].score}</div>
              </div>

            </div>
            <i style={{textAlign: 'center', display: 'block'}}>{champ.finished ? '' : 'in progress ...'}</i>
          </div>

        )}
      </div>
    )
  }
}
