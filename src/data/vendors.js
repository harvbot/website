export const vendorList = [
  'Edwin County Farms',
  'Fiddlehead',
  'Lambs Quarters',
  'Nomad Mushroom',
  'Paper Kite Farm',
  'Portico Gardens',
  'Return to Earth',
  'Rorafresh',
  'Scott Farms',
  'Sunset Farms',
  'The Elmbrook Farm',
  'Van Stone Farms',
  "Vicki's Veggies",
]

export const vendorLogos = {
  'Edwin County Farms': 'https://localline-public-images.s3.amazonaws.com/account/232560/bdfwP.jpg',
  'Paper Kite Farm': 'https://localline-public-images.s3.amazonaws.com/account/327760/NXiHA.png',
  'Portico Gardens': 'https://localline-public-images.s3.amazonaws.com/account/327759/0ad1o.png',
  'Return to Earth': 'https://localline-public-images.s3.amazonaws.com/account/327759/9KmKJ.png',
  Rorafresh: 'https://localline-public-images.s3.amazonaws.com/account/301001/Udi7O.png',
  'Sunset Farms': 'https://localline-public-images.s3.amazonaws.com/account/327759/fPQSD.png',
  'The Elmbrook Farm': 'https://localline-public-images.s3.amazonaws.com/account/321241/7VwfF.jpg',
}

export function getVendorLogo(name) {
  return vendorLogos[name] || null
}

export const featuredVendors = [
  { name: 'Fiddlehead', location: 'Wellington', specialty: 'Seasonal vegetables', note: 'Field-grown produce, harvested weekly.' },
  { name: 'Nomad Mushroom', location: 'Picton', specialty: 'Specialty mushrooms', note: 'Fresh cultivated mushrooms with peak flavor.' },
  { name: 'Paper Kite Farm', location: 'Prince Edward County', specialty: 'Mixed farm staples', note: 'Reliable staples and small-batch seasonal harvests.' },
]
