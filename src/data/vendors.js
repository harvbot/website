// Static vendor registry — run `node scripts/sync-vendors.js` to refresh IDs/slugs.
export const vendorMap = [
  { id: 5257, name: 'Edwin County farms', slug: 'edwin-county-farms' },
  { id: 5205, name: 'Fiddlehead',         slug: 'fiddlehead' },
  { id: 5212, name: 'Lambs Quarters',     slug: 'lambs-quarters' },
  { id: 5169, name: 'Nomad Mushroom',     slug: 'nomad-mushroom' },
  { id: 4986, name: 'Paper Kite Farm',    slug: 'paper-kite-farm' },
  { id: 6078, name: 'Portico Gardens',    slug: 'portico-gardens' },
  { id: 5420, name: 'Return to Earth',    slug: 'return-to-earth' },
  { id: 4985, name: 'Rorafresh',          slug: 'rorafresh' },
  { id: 5736, name: 'Scott Farms',        slug: 'scott-farms' },
  { id: 5842, name: 'Sunset Farms',       slug: 'sunset-farms' },
  { id: 6240, name: 'The Elmbrook Farm',  slug: 'the-elmbrook-farm' },
  { id: 5463, name: 'van Stone Farms',    slug: 'van-stone-farms' },
  { id: 5204, name: "Vicki's Veggies",    slug: 'vicki-s-veggies' },
]

export const vendorList = vendorMap.map(v => v.name)

export const vendorLogos = {
  'Edwin County farms': 'https://localline-public-images.s3.amazonaws.com/account/232560/bdfwP.jpg',
  'Paper Kite Farm':    'https://localline-public-images.s3.amazonaws.com/account/327760/NXiHA.png',
  'Portico Gardens':    'https://localline-public-images.s3.amazonaws.com/account/327759/0ad1o.png',
  'Return to Earth':    'https://localline-public-images.s3.amazonaws.com/account/327759/9KmKJ.png',
  'Rorafresh':          'https://localline-public-images.s3.amazonaws.com/account/301001/Udi7O.png',
  'Sunset Farms':       'https://localline-public-images.s3.amazonaws.com/account/327759/fPQSD.png',
  'The Elmbrook Farm':  'https://localline-public-images.s3.amazonaws.com/account/321241/7VwfF.jpg',
}

export function getVendorLogo(name) {
  return vendorLogos[name] || null
}

export const featuredVendors = [
  { name: 'Fiddlehead',     location: 'Wellington',          specialty: 'Seasonal vegetables',  note: 'Field-grown produce, harvested weekly.' },
  { name: 'Nomad Mushroom', location: 'Picton',              specialty: 'Specialty mushrooms',   note: 'Fresh cultivated mushrooms with peak flavor.' },
  { name: 'Paper Kite Farm', location: 'Prince Edward County', specialty: 'Mixed farm staples', note: 'Reliable staples and small-batch seasonal harvests.' },
]
