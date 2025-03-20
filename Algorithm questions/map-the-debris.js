function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  return arr.map(obj => {
    const a = earthRadius + obj.avgAlt;
    const orbitalPeriodSeconds = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
    
    const periodInSeconds = Math.round(orbitalPeriodSeconds);
    
    return {
      name: obj.name,
      orbitalPeriod: periodInSeconds
    };
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

console.log(orbitalPeriod([
  {name: "iss", avgAlt: 413.6}, 
  {name: "hubble", avgAlt: 556.7}, 
  {name: "moon", avgAlt: 378632.553}
]));
