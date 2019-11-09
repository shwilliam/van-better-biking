export default async addr =>
  await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${process.env.REACT_APP_MAPS_KEY}`,
  )
    .then(res => res.json())
    // HACK: use first result
    .then(({results}) =>
      results[0] ? results[0].geometry.location : '',
    )
