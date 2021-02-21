import React, { useEffect, useState } from 'react';
import { IonList, IonItem, IonLabel, IonBadge, IonSkeletonText } from '@ionic/react';
import { useHistory } from 'react-router';
import { Race } from '../models';

const RaceList: React.FC<{results?: boolean, season?: number}> = ({results, season}) => {
  let history = useHistory();
  const [races, setRaces] = useState<[Race] | null>(null);

  useEffect(() => {
    if(season) {
      fetch(`https://ergast.com/api/f1/${season}.json`)
        .then(res => res.json())
        .then(result => setRaces(result.MRData.RaceTable.Races));
    } else {
      fetch('https://ergast.com/api/f1/current.json')
        .then(res => res.json())
        .then(result => setRaces(result.MRData.RaceTable.Races));
    }
  }, [season]);

  const racesFiltered = results ? races && races.filter(race => new Date(race.date) < new Date()).reverse() : races;

  const _handleClick = (season: string, round: string, country: string) => {
    if(results) {
      history.push(`/results/${season}/${round}/race`);
    } else {
      history.push(`/race/${season}/${round}/${country}`);
    }
  }

  if (races === null) {
    return (
      <IonList>
        {[...Array(8)].map((item, index) =>
          <IonItem key={index}>
            <div slot="start">
              &nbsp;
            </div>
            <IonLabel>
              <h2><IonSkeletonText animated style={{ height: '11px', width: '70px' }}/></h2>
              <h3><IonSkeletonText animated style={{ height: '11px', width: '55px' }}/></h3>
              <p><IonSkeletonText animated style={{ height: '11px', width: '120px' }}/></p>
            </IonLabel>
          </IonItem>
        )}
      </IonList>
    );
  }
  return (
    <IonList lines="full">
      {racesFiltered && racesFiltered.map(race =>
        <IonItem button detail onClick={() => _handleClick(race.season, race.round, race.Circuit.Location.country)} key={race.round}>
          <div slot="start" className="ion-text-center">
            <strong>{new Date(race.date).getDate()}</strong><br/>
            <IonBadge color="medium">{new Date(race.date).toLocaleString('default', { month: 'short' })}</IonBadge>
          </div>
          <IonLabel>
            <p className="ion-text-uppercase text-primary">ROUND {race.round}</p>
            <h2 className="font-weight-bold">{race.Circuit.Location.country}</h2>
            <p>{race.raceName}</p>
          </IonLabel>
        </IonItem>
      )}
    </IonList>
  );
};

export default RaceList;