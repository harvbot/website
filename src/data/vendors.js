// Static vendor registry — run `node scripts/sync-vendors.js` to refresh.
export const vendorMap = [
  { id: 5257, name: 'Edwin County farms', slug: 'edwin-county-farms', logo: 'https://localline-public-images.s3.amazonaws.com/account/232560/bdfwP.jpg', location: '2590 County Rd 15, Prince Edward, ON K0K 2T0, Canada', lat: null, lng: null },
  { id: 5205, name: 'Fiddlehead', slug: 'fiddlehead', logo: null, location: 'Fiddlehead Farm PEC, Fish Lake Road, Prince Edward, ON K0K 1W0, Canada', lat: null, lng: null },
  { id: 5212, name: 'Lambs Quarters', slug: 'lambs-quarters', logo: null, location: 'Lamb\'s Quarters Farm, 240 County Road 4, Prince Edward, ON K0K 2T0, Canada', lat: null, lng: null },
  { id: 5169, name: 'Nomad Mushroom', slug: 'nomad-mushroom', logo: null, location: '212 Prince Edward County Road 16, Black River, ON K0K 2P0, Canada', lat: null, lng: null },
  { id: 4986, name: 'Paper Kite Farm', slug: 'paper-kite-farm', logo: 'https://localline-public-images.s3.amazonaws.com/account/327760/NXiHA.png', location: '212 Prince Edward County Road 16, Black River, ON K0K 2P0, Canada', lat: null, lng: null },
  { id: 6078, name: 'Portico Gardens', slug: 'portico-gardens', logo: 'https://localline-public-images.s3.amazonaws.com/account/327759/0ad1o.png', location: '1465 County Rd 2, Prince Edward, ON', lat: null, lng: null },
  { id: 5420, name: 'Return to Earth', slug: 'return-to-earth', logo: 'https://localline-public-images.s3.amazonaws.com/account/327759/9KmKJ.png', location: '1418 County Road 8', lat: null, lng: null },
  { id: 4985, name: 'Rorafresh', slug: 'rorafresh', logo: 'https://localline-public-images.s3.amazonaws.com/account/301001/Udi7O.png', location: '1951 County Rd 7, Prince Edward, ON K0K 2T0, Canada', lat: null, lng: null },
  { id: 5736, name: 'Scott Farms', slug: 'scott-farms', logo: null, location: null, lat: null, lng: null },
  { id: 5842, name: 'Sunset Farms', slug: 'sunset-farms', logo: 'https://localline-public-images.s3.amazonaws.com/account/327759/fPQSD.png', location: null, lat: null, lng: null },
  { id: 6240, name: 'The Elmbrook Farm', slug: 'the-elmbrook-farm', logo: 'https://localline-public-images.s3.amazonaws.com/account/321241/7VwfF.jpg', location: '339 Elmbrook Road, Picton, ON K0K 2T0, Canada', lat: null, lng: null },
  { id: 5463, name: 'van Stone Farms', slug: 'van-stone-farms', logo: null, location: null, lat: null, lng: null },
  { id: 5204, name: 'Vicki\'s Veggies', slug: 'vicki-s-veggies', logo: 'https://localline-public-images.s3.amazonaws.com/account/327759/KhzYc.png', location: 'Vicki\'s Veggies, 81 Morrison Point Road, Prince Edward, ON K0K 2P0, Canada', lat: null, lng: null },
]

export const vendorList = vendorMap.map(v => v.name)

export const featuredVendors = [
  { name: 'Fiddlehead',     location: 'Wellington',          specialty: 'Seasonal vegetables',  note: 'Field-grown produce, harvested weekly.' },
  { name: 'Nomad Mushroom', location: 'Picton',              specialty: 'Specialty mushrooms',   note: 'Fresh cultivated mushrooms with peak flavor.' },
  { name: 'Paper Kite Farm', location: 'Prince Edward County', specialty: 'Mixed farm staples', note: 'Reliable staples and small-batch seasonal harvests.' },
]
