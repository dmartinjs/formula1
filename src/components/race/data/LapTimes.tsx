import React, { useEffect, useState } from 'react';
import {  } from '@ionic/react';
import { Lap } from '../../../models';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const LapTimes: React.FC<{season: string, round: string, driverId: string}> = ({season, round, driverId}) => {
  const [results, setResults] = useState<[Lap] | null>(null);

  useEffect(() => {
    fetch(`https://ergast.com/api/f1/${season}/${round}/drivers/${driverId}/laps.json?limit=100`)
      .then(res => res.json())
      .then(result => setResults(result.MRData.RaceTable.Races[0].Laps));
  }, [season, round, driverId]);

  const getData = (positions: [Lap]) => {
    const data = positions.map(item => {
      return {
        lap: item.number,
        time: Date.parse(`1970-01-01T00:0${item.Timings[0].time}Z`),
      }
    });
    return data;
  };

  if (results === null) {
    return (
      <div></div>
    );
  }
  return (
    <ResponsiveContainer height={400}>
      <AreaChart width={400} height={400} data={getData(results)}>
        <defs>
          <linearGradient id="time" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e10600" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#e10600" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="lap" interval={8} tickLine={false}/>
        <YAxis dataKey="time" hide={true} />
        <Area type="monotone" dataKey="time" stroke="#e10600" fillOpacity={1} fill="url(#time)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LapTimes;