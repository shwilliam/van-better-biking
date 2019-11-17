# Better Bikes

Better Bikes is a Google Map-Based navigational web application developed for the Decode Congestion Hackathon, hosted by the City of Vancouver in 2019. This was designed and developed in a 36hr sprint by a team of three designers and three developers.

While Google Maps provides users with convenient navigational way-finding, it does not help cyclists make informed decisions over concerns around cycling. One major concern, especially in Vancouver, B.C., is bike theft. Better Bikes provides a solution to this issue by overlaying heat maps on the Google Maps navigational interface. Areas that contain hotspots indicate higher rates of bike theft, collisions and more. Better Bikes also displays the locations of bike racks across Vancouver, which enables users to make informed decisions on where to safely lock their bikes. 

With more information, users can make better decisions, and feel reassured when parking their bikes in Vancouver. The features provided by Better Bikes encourages cyclists to take advantage of Vancouver’s cycling infrastructure, leading to a safer, and more efficient transportation system.

# Development

1. Set the `REACT_APP_MAPS_KEY` environment variable to a valid Google Maps token with maps, navigation and visualization priviledges
2. Paste this key as a query parameter to the Google Maps import in `public/index.html`
3. Install dependencies (`npm i`)
4. Start the dev server (`npm start`)
5. Go for a bike ride!
