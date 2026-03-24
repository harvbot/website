'use client'

import { useState } from 'react'
import Link from 'next/link'
import { vendorMap } from '../../data/vendors'

// SVG viewport
const W = 800
const H = 520

// Geographic bounds — tight around Prince Edward County
const LON_MIN = -77.75
const LON_MAX = -76.82
const LAT_MAX = 44.22
const LAT_MIN = 43.73

function toXY(lon, lat) {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

// Approximate county outline — clockwise from NW connection to mainland
// (near Trenton/Belleville bridge over Bay of Quinte)
const COUNTY_PATH =
  'M 138,96 L 181,74 L 267,85 L 318,106 L 344,127 ' +
  'L 404,106 L 473,106 L 508,127 ' +
  // Picton Bay indentation
  'L 525,180 L 533,223 L 551,191 ' +
  'L 576,127 L 628,106 L 680,96 ' +
  // NE tip (Marysburgh / Adolphus Reach)
  'L 731,127 L 748,170 L 757,234 ' +
  // East shore heading south
  'L 748,287 L 740,340 L 723,371 ' +
  // SE tip (Prince Edward Point)
  'L 705,403 L 645,403 L 602,403 ' +
  // South Bay indentation
  'L 559,414 L 533,456 L 516,478 L 490,456 L 473,425 ' +
  // South shore heading west
  'L 413,425 L 344,403 L 267,371 L 207,340 L 172,309 ' +
  // West shore heading north back to start
  'L 146,256 L 146,182 L 138,127 Z'

// Approximate [lon, lat] for each vendor from their address
// Vendors with no address data are omitted from the map
const VENDOR_COORDS = {
  'edwin-county-farms': [-77.50, 44.06],   // 2590 County Rd 15, Hillier/Consecon area
  'fiddlehead':          [-77.47, 43.93],   // Fish Lake Road, western PEC
  'lambs-quarters':      [-77.32, 44.01],   // 240 County Road 4, near Bloomfield
  'nomad-mushroom':      [-77.07, 44.035],  // 212 County Road 16, Black River
  'paper-kite-farm':     [-77.065, 44.025], // same road, slight offset
  'portico-gardens':     [-77.26, 44.04],   // 1465 County Rd 2, north shore
  'return-to-earth':     [-77.22, 43.97],   // 1418 County Road 8, central
  'rorafresh':           [-77.06, 43.96],   // 1951 County Rd 7, Cressy
  'scott-farms':         [-77.43, 44.04],   // Hillier (per description)
  'the-elmbrook-farm':   [-77.15, 44.00],   // 339 Elmbrook Road, Picton
  'van-stone-farms':     [-77.01, 43.95],   // near Rock Cross Road, Cressy area
  'vickis-veggies':      [-77.15, 43.92],   // 81 Morrison Point Road, Milford
}

// Town reference labels
const TOWNS = [
  { name: 'Picton',     lon: -77.14, lat: 44.015 },
  { name: 'Wellington', lon: -77.35, lat: 44.085 },
  { name: 'Bloomfield', lon: -77.245, lat: 44.075 },
  { name: 'Hillier',    lon: -77.435, lat: 44.075 },
  { name: 'Milford',    lon: -77.17,  lat: 43.945 },
  { name: 'Consecon',   lon: -77.525, lat: 44.085 },
]

// Water area labels
const WATER_LABELS = [
  { label: 'Bay of Quinte', lon: -77.35, lat: 44.17 },
  { label: 'Lake Ontario',  lon: -77.25, lat: 43.77 },
  { label: 'South Bay',     lon: -77.15, lat: 43.82 },
]

export default function MapPage() {
  const [activeSlug, setActiveSlug] = useState(null)

  const mappedVendors = vendorMap.filter(v => VENDOR_COORDS[v.slug])
  const unmappedVendors = vendorMap.filter(v => !VENDOR_COORDS[v.slug])

  return (
    <div className="min-h-screen bg-[#f7f4ed] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-[#6d5f50] hover:underline">
          ← Back to Home
        </Link>
        <div className="mt-3 mb-5">
          <h1 className="text-3xl font-bold text-[#3F3228]">Vendor Map</h1>
          <p className="mt-1 text-sm text-[#8a7b69]">
            Approximate farm locations across Prince Edward County. Hover a marker to identify, click to visit.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-[#c8bca9] shadow-md"
          style={{ background: '#d4e8f2' }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
            {/* County land fill */}
            <path d={COUNTY_PATH} fill="#ddebd4" stroke="#7aad7a" strokeWidth="1.5" />

            {/* Subtle county interior texture via a lighter inner stroke */}
            <path d={COUNTY_PATH} fill="none" stroke="#b8d8b8" strokeWidth="4" strokeDasharray="1,8" strokeLinecap="round" />

            {/* Water labels */}
            {WATER_LABELS.map(({ label, lon, lat }) => {
              const [x, y] = toXY(lon, lat)
              return (
                <text
                  key={label}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#4a7a9b"
                  fontFamily="Georgia, serif"
                  fontStyle="italic"
                  opacity="0.8"
                >
                  {label}
                </text>
              )
            })}

            {/* Town reference dots + labels */}
            {TOWNS.map(({ name, lon, lat }) => {
              const [x, y] = toXY(lon, lat)
              return (
                <g key={name}>
                  <circle cx={x} cy={y} r={2.5} fill="#8a7a6a" />
                  <text
                    x={x}
                    y={y - 6}
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#6a5a4a"
                    fontFamily="sans-serif"
                  >
                    {name}
                  </text>
                </g>
              )
            })}

            {/* Vendor markers */}
            {mappedVendors.map(vendor => {
              const [lon, lat] = VENDOR_COORDS[vendor.slug]
              const [x, y] = toXY(lon, lat)
              const isActive = activeSlug === vendor.slug

              // Keep tooltip inside SVG bounds
              const tipW = 148
              const tipH = 26
              let tipX = x - tipW / 2
              if (tipX < 6) tipX = 6
              if (tipX + tipW > W - 6) tipX = W - tipW - 6
              const tipY = y - tipH - 10

              return (
                <g
                  key={vendor.slug}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setActiveSlug(vendor.slug)}
                  onMouseLeave={() => setActiveSlug(null)}
                  onClick={() => window.location.assign(`/vendors/${vendor.slug}`)}
                >
                  {/* Outer glow ring when active */}
                  {isActive && (
                    <circle cx={x} cy={y} r={13} fill="#2F5D50" opacity={0.2} />
                  )}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 8 : 6}
                    fill={isActive ? '#2F5D50' : '#4a8a6a'}
                    stroke="white"
                    strokeWidth="2"
                  />

                  {/* Tooltip */}
                  {isActive && (
                    <g>
                      <rect
                        x={tipX}
                        y={tipY}
                        width={tipW}
                        height={tipH}
                        rx={5}
                        fill="#2F5D50"
                      />
                      {/* little arrow */}
                      <polygon
                        points={`${x - 5},${tipY + tipH} ${x + 5},${tipY + tipH} ${x},${tipY + tipH + 6}`}
                        fill="#2F5D50"
                      />
                      <text
                        x={tipX + tipW / 2}
                        y={tipY + 17}
                        textAnchor="middle"
                        fontSize="11"
                        fill="white"
                        fontFamily="sans-serif"
                        fontWeight="600"
                      >
                        {vendor.name}
                      </text>
                    </g>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Legend / vendor list */}
        <div className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8a7b69]">
            Mapped vendors
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {mappedVendors.map(vendor => (
              <Link
                key={vendor.slug}
                href={`/vendors/${vendor.slug}`}
                className="flex items-center gap-2 rounded-lg border border-[#d9cebf] bg-[#fffdf8] px-3 py-2 text-sm text-[#3F3228] hover:bg-[#f3ece1]"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#4a8a6a]" />
                {vendor.name}
              </Link>
            ))}
          </div>
        </div>

        {unmappedVendors.length > 0 && (
          <div className="mt-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8a7b69]">
              Location not available
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {unmappedVendors.map(vendor => (
                <Link
                  key={vendor.slug}
                  href={`/vendors/${vendor.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-[#e2d8ca] bg-[#faf8f4] px-3 py-2 text-sm text-[#8a7b69] hover:bg-[#f3ece1]"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8bca9]" />
                  {vendor.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <p className="mt-8 text-xs text-[#b0a090]">
          Locations are approximate and hand-placed — not GPS-verified.
        </p>
      </div>
    </div>
  )
}
