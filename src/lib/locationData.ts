interface Location {
  id: string;
  name: string;
  slug: string;
  state: string;
  county?: string;
  country: string;
  image: string;
  description?: string;
  metaDescription?: string;
  metaTitle?: string;
}

const australianCities: Location[] = [
  {
    id: "melbourne",
    name: "Melbourne",
    slug: "melbourne",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Melbourne is Victoria's capital and Australia's second-largest city, known for its cultural diversity and vibrant arts scene.",
    metaTitle: "SEO Services in Melbourne | Boost Your Local Business",
    metaDescription: "Improve your business visibility in Melbourne with our specialized SEO services. Get higher rankings, more customers, and grow your business online."
  },
  {
    id: "sydney",
    name: "Sydney",
    slug: "sydney",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Sydney is the capital of New South Wales and Australia's largest city, famous for its iconic Opera House and Harbour Bridge.",
    metaTitle: "Sydney SEO Services | Local Search Optimization",
    metaDescription: "Our Sydney SEO services help businesses improve their online visibility and attract more local customers through optimized search performance."
  },
  {
    id: "brisbane",
    name: "Brisbane",
    slug: "brisbane",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Brisbane is Queensland's capital and Australia's third-largest city, known for its subtropical climate and outdoor lifestyle.",
    metaTitle: "Brisbane SEO Services | Local Search Optimization",
    metaDescription: "Boost your Brisbane business with our tailored SEO strategies. Attract more local customers and outperform your competition online."
  },
  {
    id: "perth",
    name: "Perth",
    slug: "perth",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Perth is Western Australia's capital, known for its stunning beaches, parks and sunny climate.",
    metaTitle: "Perth SEO Services | Local Search Optimization",
    metaDescription: "Our Perth SEO services help local businesses improve their online visibility and attract more qualified customers through search engines."
  },
  {
    id: "adelaide",
    name: "Adelaide",
    slug: "adelaide",
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Adelaide is South Australia's capital, known for its festivals, food and wine culture, and planned city design.",
    metaTitle: "Adelaide SEO Services | Local Search Optimization",
    metaDescription: "Improve your Adelaide business visibility online with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "gold-coast",
    name: "Gold Coast",
    slug: "gold-coast",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Gold Coast is a coastal city in Queensland known for its surf beaches, theme parks, and vibrant nightlife.",
    metaTitle: "Gold Coast SEO Services | Local Search Optimization",
    metaDescription: "Boost your Gold Coast business visibility with our specialized SEO services. Attract more tourists and local customers."
  },
  {
    id: "canberra",
    name: "Canberra",
    slug: "canberra",
    state: "Australian Capital Territory",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Canberra is Australia's capital city, known for its planned layout, national monuments and cultural institutions.",
    metaTitle: "Canberra SEO Services | Local Search Optimization",
    metaDescription: "Our Canberra SEO services help businesses improve their visibility in search engines and attract more qualified leads."
  },
  {
    id: "hobart",
    name: "Hobart",
    slug: "hobart",
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Hobart is Tasmania's capital, known for its historic buildings, beautiful harbor, and proximity to nature.",
    metaTitle: "Hobart SEO Services | Local Search Optimization",
    metaDescription: "Improve your Hobart business visibility online with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "darwin",
    name: "Darwin",
    slug: "darwin",
    state: "Northern Territory",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Darwin is the Northern Territory's capital, known for its tropical climate, multicultural community and relaxed lifestyle.",
    metaTitle: "Darwin SEO Services | Local Search Optimization",
    metaDescription: "Our Darwin SEO services help local businesses improve their online visibility and attract more qualified customers."
  },
  {
    id: "wollongong",
    name: "Wollongong",
    slug: "wollongong",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Wollongong is a coastal city in New South Wales, known for its beautiful beaches, vibrant university scene, and industrial heritage.",
    metaTitle: "Wollongong SEO Services | Local Search Optimization",
    metaDescription: "Get specialized SEO services for your Wollongong business. Improve your search rankings and attract more local customers."
  },
  {
    id: "newcastle",
    name: "Newcastle",
    slug: "newcastle",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Newcastle is a vibrant harbor city in New South Wales with beautiful beaches, a rich industrial history, and a thriving arts scene.",
    metaTitle: "Newcastle SEO Services | Local Search Optimization",
    metaDescription: "Boost your online presence in Newcastle with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "cairns",
    name: "Cairns",
    slug: "cairns",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Cairns is a tropical city in Queensland, famous as the gateway to the Great Barrier Reef and Daintree Rainforest.",
    metaTitle: "Cairns SEO Services | Local Search Optimization",
    metaDescription: "Our Cairns SEO services help local businesses increase their online visibility and attract more tourists and local customers."
  },
  {
    id: "geelong",
    name: "Geelong",
    slug: "geelong",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Geelong is Victoria's second-largest city, known for its beautiful waterfront, strong industrial heritage, and proximity to surf beaches.",
    metaTitle: "Geelong SEO Services | Local Search Optimization",
    metaDescription: "Improve your Geelong business visibility with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "townsville",
    name: "Townsville",
    slug: "townsville",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Townsville is a major city in Queensland with a sunny climate, beautiful beaches, and access to the Great Barrier Reef.",
    metaTitle: "Townsville SEO Services | Local Search Optimization",
    metaDescription: "Get tailored SEO solutions for your Townsville business. Improve your online visibility and attract more qualified leads."
  },
  {
    id: "sunshine-coast",
    name: "Sunshine Coast",
    slug: "sunshine-coast",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "The Sunshine Coast is a popular tourist destination in Queensland known for its beautiful beaches, hinterland, and relaxed lifestyle.",
    metaTitle: "Sunshine Coast SEO Services | Local Search Optimization",
    metaDescription: "Our Sunshine Coast SEO services help local businesses stand out online and attract more tourists and residents."
  }
];

const additionalCities: Location[] = [
  {
    id: "central-coast",
    name: "Central Coast",
    slug: "central-coast",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "ipswich",
    name: "Ipswich",
    slug: "ipswich",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "ballarat",
    name: "Ballarat",
    slug: "ballarat",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "toowoomba",
    name: "Toowoomba",
    slug: "toowoomba",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bendigo",
    name: "Bendigo",
    slug: "bendigo",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mandurah",
    name: "Mandurah",
    slug: "mandurah",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "launceston",
    name: "Launceston",
    slug: "launceston",
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mackay",
    name: "Mackay",
    slug: "mackay",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "hervey-bay",
    name: "Hervey Bay",
    slug: "hervey-bay",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bundaberg",
    name: "Bundaberg",
    slug: "bundaberg",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "wagga-wagga",
    name: "Wagga Wagga",
    slug: "wagga-wagga",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "coffs-harbour",
    name: "Coffs Harbour",
    slug: "coffs-harbour",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "gladstone",
    name: "Gladstone",
    slug: "gladstone",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "maitland",
    name: "Maitland",
    slug: "maitland",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bathurst",
    name: "Bathurst",
    slug: "bathurst",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "palmerston",
    name: "Palmerston",
    slug: "palmerston",
    state: "Northern Territory",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "southport",
    name: "Southport",
    slug: "southport",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "dandenong",
    name: "Dandenong",
    slug: "dandenong",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "warrnambool",
    name: "Warrnambool",
    slug: "warrnambool",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "quakers-hill",
    name: "Quakers Hill",
    slug: "quakers-hill",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mount-gambier",
    name: "Mount Gambier",
    slug: "mount-gambier",
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "traralgon",
    name: "Traralgon",
    slug: "traralgon",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "whyalla",
    name: "Whyalla",
    slug: "whyalla",
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "armidale",
    name: "Armidale",
    slug: "armidale",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "burnie",
    name: "Burnie",
    slug: "burnie",
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "griffith",
    name: "Griffith",
    slug: "griffith",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "maroochydore",
    name: "Maroochydore",
    slug: "maroochydore",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bunbury",
    name: "Bunbury",
    slug: "bunbury",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "rockhampton",
    name: "Rockhampton",
    slug: "rockhampton",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "melton",
    name: "Melton",
    slug: "melton",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "port-macquarie",
    name: "Port Macquarie",
    slug: "port-macquarie",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "orange",
    name: "Orange",
    slug: "orange",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "sunbury",
    name: "Sunbury",
    slug: "sunbury",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "dubbo",
    name: "Dubbo",
    slug: "dubbo",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "tamworth",
    name: "Tamworth",
    slug: "tamworth",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mildura",
    name: "Mildura",
    slug: "mildura",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "geraldton",
    name: "Geraldton",
    slug: "geraldton",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "nowra",
    name: "Nowra",
    slug: "nowra",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  }
];

const newSouthWalesCities: Location[] = [
  "Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland", "Tweed Heads", "Port Macquarie", "Wagga Wagga", 
  "Coffs Harbour", "Tamworth", "Orange", "Dubbo", "Queanbeyan", "Bathurst", "Goulburn", "Nowra", "Cessnock", 
  "Lismore", "Albury", "Grafton", "Armidale", "Griffith", "Bowral", "Muswellbrook", "Broken Hill", "Batemans Bay",
  "Raymond Terrace", "Lithgow", "Taree", "Forster", "Ulladulla", "Singleton", "Nelson Bay", "Kiama", "Morisset",
  "Parkes", "Forbes", "Mudgee", "Young", "Scone", "Cowra", "Casino", "Deniliquin", "Moss Vale", "Leeton", 
  "Mittagong", "Cobar", "Yass", "Cootamundra", "Narrabri", "Moree", "Ballina", "Inverell", "Bega", "Wauchope",
  "Wingham", "Berry", "Aberdeen", "Camden", "Picton", "Richmond", "Windsor", "Katoomba", "Penrith", "Liverpool",
  "Parramatta", "Campbelltown", "Blacktown", "Hornsby", "Gosford", "Wyong", "Ryde", "Bankstown", "Hurstville",
  "Rockdale", "Kogarah", "Sutherland", "Manly", "Dee Why", "Mona Vale", "Bondi", "Randwick", "Maroubra"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const victoriaCities: Location[] = [
  "Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Mildura", "Warrnambool", "Wodonga", "Traralgon",
  "Horsham", "Sale", "Ocean Grove", "Colac", "Echuca", "Swan Hill", "Wangaratta", "Bairnsdale", "Drouin", "Torquay",
  "Healesville", "Macedon", "Daylesford", "Lorne", "Apollo Bay", "Bright", "Marysville", "Mallacoota", "Ararat",
  "Bacchus Marsh", "Beaufort", "Beechworth", "Benalla", "Castlemaine", "Creswick", "Camperdown", "Coburg", "Dandenong",
  "Footscray", "Frankston", "Kyneton", "Mansfield", "Melton", "Mooroopna", "Morwell", "Moe", "Newborough", "Phillip Island",
  "Portland", "Port Fairy", "Queenscliff", "Rochester", "Romsey", "Seymour", "St Arnaud", "Stawell", "Sunbury", "Wallan",
  "Werribee", "Williamstown", "Yarra Glen", "Yarrawonga"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const queenslandCities: Location[] = [
  "Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns", "Toowoomba", "Mackay", "Rockhampton", "Bundaberg",
  "Hervey Bay", "Gladstone", "Mount Isa", "Maryborough", "Gympie", "Emerald", "Warwick", "Innisfail", "Kingaroy",
  "Ayr", "Roma", "Charters Towers", "Bowen", "Dalby", "Yeppoon", "Port Douglas", "Airlie Beach", "Proserpine",
  "Atherton", "Mareeba", "Ingham", "Home Hill", "Mission Beach", "Palm Cove", "Cooktown", "Barcaldine", "Longreach",
  "Cloncurry", "Winton", "Richmond", "Goondiwindi", "Stanthorpe", "Charleville", "Biloela", "Blackwater", "Moranbah",
  "Caloundra", "Noosa", "Redcliffe", "Burleigh Heads", "Surfers Paradise", "Southport", "Coolangatta", "Ipswich",
  "Logan", "Caboolture", "Beaudesert", "Cleveland", "Redland Bay", "North Lakes", "Bribie Island", "Beenleigh"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const westernAustraliaCities: Location[] = [
  "Perth", "Mandurah", "Bunbury", "Geraldton", "Kalgoorlie", "Albany", "Broome", "Port Hedland", "Karratha",
  "Busselton", "Esperance", "Margaret River", "Carnarvon", "Exmouth", "Derby", "Kununurra", "Newman", "Tom Price",
  "Dampier", "Paraburdoo", "Roebourne", "Wickham", "Onslow", "Pannawonica", "Northam", "Merredin", "Moora",
  "Narrogin", "Katanning", "Manjimup", "Collie", "Harvey", "Pinjarra", "Australind", "Dunsborough", "Yanchep",
  "Joondalup", "Fremantle", "Rockingham", "Armadale", "Midland", "Canning Vale", "Ellenbrook", "Butler", "Clarkson",
  "Two Rocks", "Augusta", "Denmark", "Coral Bay", "Cervantes", "Jurien Bay", "New Norcia", "York", "Dongara",
  "Kalbarri", "Fitzroy Crossing", "Halls Creek", "Wyndham", "Eucla", "Norseman", "Ravensthorpe", "Leonora"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const northernTerritoryCities: Location[] = [
  "Darwin", "Alice Springs", "Katherine", "Tennant Creek", "Nhulunbuy", "Jabiru", "Yulara", "Alyangula", "Pine Creek",
  "Borroloola", "Timber Creek", "Elliott", "Ti Tree", "Yuendumu", "Papunya", "Hermannsburg", "Kaltukatjara", "Kintore",
  "Palmerston", "Humpty Doo", "Howard Springs", "Batchelor", "Adelaide River", "Mataranka", "Larrimah", "Daly Waters",
  "Wadeye", "Maningrida", "Gunbalanya", "Ramingining", "Galiwinku", "Milingimbi", "Ngukurr", "Yirrkala", "Numbulwar"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Northern Territory",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const actCities: Location[] = [
  "Canberra", "Belconnen", "Gungahlin", "Tuggeranong", "Woden Valley", "Weston Creek", "Molonglo Valley", "Queanbeyan",
  "Jerrabomberra", "Murrumbateman", "Hall", "Tharwa", "Royalla", "Williamsdale", "Gundaroo", "Bungendore"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Australian Capital Territory",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const tasmanianCities: Location[] = [
  "Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone", "Kingston", "Sorell", "New Norfolk", "Wynyard",
  "George Town", "Bridgewater", "Smithton", "Huonville", "Deloraine", "Longford", "Perth", "Beaconsfield", "Scottsdale",
  "Penguin", "Sheffield", "Oatlands", "Bothwell", "Campbell Town", "Bicheno", "St Helens", "Swansea", "Triabunna",
  "Cygnet", "Dover", "Geeveston", "Rosebery", "Queenstown", "Strahan", "Zeehan", "Savage River", "Waratah"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const southAustralianCities: Location[] = [
  "Adelaide", "Mount Gambier", "Whyalla", "Port Lincoln", "Victor Harbor", "Port Augusta", "Murray Bridge",
  "Port Pirie", "Gawler", "Mount Barker", "Stirling", "Nuriootpa", "Kadina", "Goolwa", "Renmark", "Port Elliot",
  "Clare", "Tanunda", "Kapunda", "Berri", "Naracoorte", "Barmera", "Millicent", "Loxton", "Strathalbyn",
  "Bordertown", "Kingscote", "Hahndorf", "McLaren Vale", "Mannum", "Port Broughton", "Coober Pedy", "Meningie",
  "Roxby Downs", "Wallaroo", "Waikerie", "Tumby Bay", "Tailem Bend", "Cleve", "Streaky Bay", "Ceduna",
  "Penola", "Moonta", "Keith", "Auburn", "Ardrossan", "Kingston SE", "Maitland", "Jamestown", "Coonalpyn",
  "Crystal Brook", "Burra", "Robe", "Eudunda", "Pinnaroo", "Lameroo", "Port Victoria", "Yorketown", "Booleroo Centre",
  "Kimba", "Wilmington", "Orroroo", "Peterborough", "Quorn"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const allAustralianCities = [
  ...australianCities, 
  ...additionalCities, 
  ...newSouthWalesCities,
  ...victoriaCities,
  ...queenslandCities,
  ...westernAustraliaCities,
  ...northernTerritoryCities,
  ...actCities,
  ...tasmanianCities, 
  ...southAustralianCities
];

export { 
  allAustralianCities, 
  australianCities, 
  additionalCities, 
  newSouthWalesCities,
  victoriaCities,
  queenslandCities,
  westernAustraliaCities,
  northernTerritoryCities,
  actCities,
  tasmanianCities, 
  southAustralianCities 
};
