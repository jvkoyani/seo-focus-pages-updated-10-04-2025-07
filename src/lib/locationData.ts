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

// Main Australian cities with detailed metadata
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
  // Adding more major cities
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
  // ... Adding more cities with metadata
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
  },
];

// Generating additional cities
const additionalCities: Location[] = [
  // Cities already in remainingCities but with more accurate state information
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
  // More additional cities
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
  },
];

// Add all remaining cities from the previous list and the new NSW locations
const remainingCities: Location[] = [
  "Cranbourne", "Frankston", "Caloundra", "Mount Eliza", "Taree", "Banora Point", "Lara", 
  "Cessnock", "Horsham", "Murray Bridge", "Wallan", "Australind", "Ormeau", 
  "Barwon Heads", "Mount Barker", "Morwell", "Forster", "Penrith", "Goonellabah", 
  "Leopold", "Campbelltown", "Rutherford", "Nambour", "Corinda", "Muswellbrook", 
  "Kingston", "Grafton", "Bowral", "Kingaroy", "Casino", "Swan Hill", "Parkes", 
  "Mudgee", "Mount Evelyn", "Inverell", "Andergrove", "Flemington", "Colac", 
  "Bargara", "Ballina", "Mareeba", "Moss Vale", "Springwood", "Rye", "Cowra", 
  "Beenleigh", "Tweed Heads", "Emu Plains", "Charters Towers", "Katoomba", 
  "Mooroopna", "Maryborough", "Young", "Narre Warren North", "Clifton Springs", 
  "Castlemaine", "Kingscliff", "Fremantle", "Leeton", "Blaxland", "Kyabram", 
  "Sanctuary Point", "Moama", "Merrimac", "Moree", "Murwillumbah", "Urraween", 
  "Bongaree", "Bomaderry", "Ulverstone", "Dromana", "Helensburgh", "Seymour",
  // Adding the additional 100 NSW locations
  "Alexandria", "Alleena", "Ashford (NSW)", "Badja", "Bago", "Bakers Swamp", "Ballyroe", 
  "Banyabba", "Barry (Blayney - NSW)", "Belmore River", "Bemboka", "Bendoura", "Bengalla", 
  "Berowra Heights", "Berrigan", "Bilgola Beach", "Boambee", "Bocoble", "Bonny Hills", 
  "Bow Bowing", "Brandy Hill", "Brayton", "Bridgman", "Brooklet", "Buckenbowra", 
  "Bulahdelah", "Bungabbee", "Burcher", "Burrandana", "Burraneer", "Caffreys Flat", 
  "Callaghans Creek", "Camellia", "Carrington (Newcastle - NSW)", "Carss Park", "Carwell", 
  "Castle Cove", "Centennial Park (NSW)", "Clarence Town", "Cobaki Lakes", "Cobramunga", 
  "Coleambally", "Coolah", "Cooleman", "Coonabarabran", "Copmanhurst", "Corbie Hill", 
  "Cornwallis", "Countegany", "Crooked Corner", "Croudace Bay", "Cudmirrah", "Dalmeny", 
  "Dandaloo", "Deep Creek (Kyogle - NSW)", "East Wardell", "Ellerston", "Empire Vale", 
  "Estella", "Eucumbene", "Freemans", "Gala Vale", "Galambine", "Ganmain", "Gearys Flat", 
  "Glen Innes", "Goodooga", "Greenwich", "Grose Wold", "Gulf Creek", "Gundamulda", 
  "Hammondville", "Hawks Nest", "Holroyd", "Howick (NSW)", "Hunters Hill", "Ivanhoe (NSW)", 
  "Jimenbuen", "Kanahooka", "Kanwal", "Kempsey", "Killcare Heights", "Kirrawee", 
  "Kiwarrak", "Kooringal (NSW)", "Kulnura", "Lake Cargelligo", "Leeville", 
  "Limeburners Creek (Port Macquarie-Hastings - NSW)", "Marengo (NSW)", "Mascot", 
  "McDougalls Hill", "Medowie", "Medway", "Merungle Hill", "Milparinka", "Mount Annan", 
  "Mount Keira", "Mount Murray", "Mount Royal"
].map((cityName, index) => {
  const slug = cityName.toLowerCase().replace(/[\s(),-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "New South Wales", // Since these are all NSW locations
    country: "Australia",
    image: "/placeholder.svg"
  };
});

// Combine all cities
export const allAustralianCities: Location[] = [
  ...australianCities,
  ...additionalCities,
  ...remainingCities
];

// Export only the locations we've properly populated with metadata for now
export const locations: Location[] = australianCities;

export default locations;
