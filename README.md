# Better Bikes

Better Bikes is a Google Map based navigation web app, developed for the Decode Congestion Hackathon, City of Vancouver, 2019. This was designed and developed in a 36hr sprint by a team of three designers and three developers.

While Google Maps provides generally accurate wayfinding for navigation, it lacks any further information for cyclists to make more informed decisions other concerns around cycling. One of these major concerns, especially in Vancouver, BC, is bike theft. Better Bikes helps provide better context for this issue by overlaying heat maps unto to Google Maps navigation interface. These heat maps are correlated to bike theft, bike collisions, and potentially more variables. By also having all bike racks available in Vancouver displayed over the Google Map interface, users can make inferences and decisions by looking at which bike racks are in less crime dense areas. By this, users are given more agency and assisted in making safer decisions of where they can lock up their bikes in Vancouver, BC.

By virtue of greater agency, more information for better decisions, and better peace of mind for users, this lowers barriers to entry for citizens and tourists to make use of Vancouver’s cycling infrastructure, leading to a safer, more efficient transportation system.

# Development

1. Set the `REACT_APP_MAPS_KEY` environment variable to a valid Google Maps token with maps, navigation and visualization priviledges
2. Paste this key as a query parameter to the Google Maps import in `public/index.html`
3. Install dependencies (`npm i`)
4. Start the dev server (`npm start`)
5. Go for a bike ride!
