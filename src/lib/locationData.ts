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
  },
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
  },
];

const tasmanianCities: Location[] = [
  "Abbotsham", "Abels Bay", "Aberdeen", "Acacia Hills", "Acton", "Acton Park", "Adventure Bay", "Akaroa", 
  "Alberton", "Alcomie", "Allens Rivulet", "Alonnah", "Ambleside", "Andover", "Ansons Bay", "Antill Ponds", 
  "Apollo Bay", "Apslawn", "Apsley", "Arthur River", "Arthurs Lake", "Austins Ferry", "Avoca", "Baden", 
  "Badger Head", "Bagdad", "Bakers Beach", "Banca", "Bangor", "Barnes Bay", "Barretta", "Barrington", 
  "Battery Point", "Beaconsfield", "Beaumaris", "Beauty Point", "Beechford", "Bell Bay", "Bellerive", 
  "Bellingham", "Ben Lomond", "Berriedale", "Beulah", "Bicheno", "Binalong Bay", "Birchs Bay", "Birralee", 
  "Bishopsbourne", "Black Hills", "Black River", "Blackmans Bay", "Blackstone Heights", "Blackwall", 
  "Blackwood Creek", "Blessington", "Blue Rocks", "Blumont", "Boat Harbour", "Boat Harbour Beach", 
  "Bonnet Hill", "Boobyalla", "Boomer Bay", "Bothwell", "Boyer", "Bracknell", "Bradys Lake", "Brandum", 
  "Branxholm", "Breadalbane", "Bream Creek", "Breona", "Bridgenorth", "Bridgewater", "Bridport", "Brighton", 
  "Brittons Swamp", "Broadmarsh", "Broadmeadows", "Bronte Park", "Brooklyn", "Brooks Bay", "Buckland", 
  "Bungaree", "Burnie", "Burns Creek", "Bushy Park", "Butlers Gorge", "Cairns Bay", "Calder", "Cambridge", 
  "Camdale", "Camena", "Campania", "Campbell Town", "Cape Barren Island", "Cape Pillar", "Cape Portland", 
  "Cape Raoul", "Carlton", "Carlton River", "Carrick", "Casey", "Castle Forbes Bay", "Castra", "Caveside", 
  "Central Plateau", "Cethana", "Chain Of Lagoons", "Charlotte Cove", "Chasm Creek", "Chigwell", 
  "Christmas Hills", "Chudleigh", "Claremont", "Clarence Point", "Clarendon Vale", "Claude Road", "Cleveland", 
  "Clifton Beach", "Cluan", "Colebrook", "Coles Bay", "Collinsvale", "Conara", "Coningham", "Connellys Marsh", 
  "Cooee", "Copping", "Corinna", "Cornwall", "Couta Rocks", "Cowrie Point", "Crabtree", "Cradle Mountain", 
  "Cradoc", "Cramps Bay", "Cranbrook", "Crayfish Creek", "Cremorne", "Cressy", "Cuckoo", "Cuprona", "Currie", 
  "Cygnet", "Dairy Plains", "Davis", "Deddington", "Dee", "Deep Bay", "Deloraine", "Dennes Point", "Derby", 
  "Derwent Bridge", "Derwent Park", "Detention", "Deviot", "Devon Hills", "Devonport", "Dilston", 
  "Doctors Point", "Doctors Rocks", "Dodges Ferry", "Dolphin Sands", "Don", "Douglas River", "Douglas Apsley", 
  "Dover", "Downlands", "Dowsing Point", "Dromedary", "Dulcot", "Dunalley", "Dunorlan", "Dynnyrne", "Dysart", 
  "Eaglehawk Neck", "East Cam", "East Devonport", "East Launceston", "East Ridgley", "Eddystone", 
  "Edgcumbe Beach", "Edith Creek", "Egg Lagoon", "Eggs And Bacon Bay", "Elderslie", "Electrona", 
  "Elizabeth Town", "Ellendale", "Elliott", "Emita", "Emu Heights", "Epping Forest", "Erriba", "Eugenana", 
  "Evandale", "Exeter", "Exton", "Falmouth", "Fentonbury", "Fern Tree", "Fingal", "Fitzgerald", "Flintstone", 
  "Florentine", "Flowerdale", "Flowerpot", "Flowery Gully", "Forcett", "Forest", "Forester", "Fortescue", 
  "Forth", "Forthside", "Four Mile Creek", "Frankford", "Franklin", "Freycinet", "Friendly Beaches", "Gagebrook", "Garden Island Creek", "Gardners Bay", "Gawler", "Geeveston", 
  "Geilston Bay", "George Town", "Gladstone", "Glaziers Bay", "Glebe", "Glen Huon", "Glendevie", "Glenfern", 
  "Glengarry", "Glenlusk", "Glenora", "Glenorchy", "Golconda", "Golden Valley", "Goodwood", "Gordon", 
  "Gormanston", "Goshen", "Goulds Country", "Gowrie Park", "Granton", "Granville Harbour", "Grasstree Hill", 
  "Grassy", "Gravelly Beach", "Gray", "Great Bay", "Greens Beach", "Gretna", "Grindelwald", "Grove", 
  "Guildford", "Gunns Plains", "Hadspen", "Hagley", "Hamilton", "Hampshire", "Harford", "Hastings", 
  "Havenview", "Hawley Beach", "Hayes", "Heard Island", "Hellyer", "Henrietta", "Herdsmans Cove", "Hermitage", 
  "Herrick", "Heybridge", "Highclere", "Highcroft", "Hillcrest", "Hillwood", "Hobart", "Hollow Tree", 
  "Holwell", "Honeywood", "Howden", "Howrah", "Howth", "Huntingfield", "Huonville", "Ida Bay", "Interlaken", 
  "Invermay", "Irishtown", "Jackeys Marsh", "Jericho", "Jetsonville", "Judbury", "Kamona", "Kaoota", "Karanja", 
  "Karoola", "Kayena", "Kellevie", "Kelso", "Kempton", "Kettering", "Killiecrankie", "Killora", "Kimberley", 
  "Kindred", "Kings Meadows", "Kingston", "Kingston Beach", "Koonya", "Lachlan", "Lackrana", "Lady Barron", 
  "Lake Leake", "Lake Margaret", "Lake Sorell", "Lake St Clair", "Lalla", "Lanena", "Lapoinya", "Latrobe", 
  "Lauderdale", "Launceston", "Lawitta", "Lebrina", "Leeka", "Lefroy", "Legana", "Legerwood", "Leith", 
  "Lemington", "Lenah Valley", "Leslie Vale", "Levendale", "Lewisham", "Liawenee", "Liena", "Lietinna", "Liffey", 
  "Lileah", "Lillico", "Lilydale", "Lindisfarne", "Lisle", "Little Pine Lagoon", "Little Swanport", "Loccota", 
  "Loira", "London Lakes", "Long Reach", "Longford", "Longley", "Lonnavale", "Loongana", "Loorana", "Lorinna", 
  "Lottah", "Low Head", "Lower Barrington", "Lower Beulah", "Lower Longley", "Lower Marshes", "Lower Sandy Bay", 
  "Lower Snug", "Lower Turners Marsh", "Lower Wattle Grove", "Lower Wilmot", "Loyetea", "Lucaston", "Lughrata", 
  "Luina", "Lulworth", "Lune River", "Lutana", "Lymington", "Lymwood", "Macquarie Heads", "Macquarie Island", 
  "Macquarie Plains", "Magra", "Malbina", "Mangalore", "Mangana", "Margate", "Marion Bay", "Marrawah", "Mathinna", 
  "Mawbanna", "Mawson", "Mayberry", "Maydena", "Mayfield", "Mcdonald Islands", "Meadowbank", "Meander", 
  "Mella", "Melrose", "Melton Mowbray", "Memana", "Mengha", "Mersey Forest", "Merseylea", "Meunna", "Miandetta", 
  "Middlesex", "Middleton", "Midway Point", "Miena", "Milabena", "Millers Bluff", "Moina", "Mole Creek", 
  "Molesworth", "Moltema", "Montagu", "Montagu Bay", "Montana", "Montello", "Montrose", "Montumana", "Moogara", 
  "Moonah", "Mooreville", "Moorina", "Moorleah", "Morass Bay", "Moriarty", "Mornington", "Mount Direction", 
  "Mount Field", "Mount Hicks", "Mount Lloyd", "Mount Nelson", "Mount Roland", "Mount Rumney", "Mount Seymour", 
  "Mount Stuart", "Mount William", "Mountain River", "Mowbray", "Murdunna", "Musselroe Bay", "Myalla", 
  "Myrtle Bank", "Nabageena", "Nabowla", "Naracoopa", "National Park", "Natone", "Needles", "Neika", 
  "Nelson Bay", "New Norfolk", "New Town", "Newnham", "Newstead", "Nicholls Rivulet", "Nietta", "Nile", 
  "Nook", "North Bruny", "North Hobart", "North Lilydale", "North Motton", "North Scottsdale", "Northdown", 
  "Norwood", "Notley Hills", "Nowhere Else", "Nubeena", "Nugara", "Nugent", "Nunamara", "Oakdowns", "Oaks", 
  "Oatlands", "Ocean Vista", "Old Beach", "Oldina", "Oonah", "Opossum Bay", "Orford", "Orielton", "Osmaston", 
  "Osterley", "Otago", "Ouse", "Oyster Cove", "Palana", "Paloona", "Paradise", "Parattah", "Park Grove", 
  "Parkham", "Parklands", "Parrawe", "Patersonia", "Pawleena", "Pawtella", "Pearshape", "Pegarah", "Pelham", 
  "Pelverata", "Penguin", "Penna", "Perth", "Petcheys Bay", "Pioneer", "Pipers Brook", "Pipers River", 
  "Plenty", "Poatina", "Police Point", "Pontville", "Pontypool", "Port Arthur", "Port Huon", "Port Latta", 
  "Port Sorell", "Powranna", "Premaydena", "Preolenna", "Preservation Bay", "Preston", "Primrose Sands", 
  "Promised Land", "Prospect", "Prospect Vale", "Punchbowl", "Pyengana", "Quamby Bend", "Quamby Brook", 
  "Queens Domain", "Queenstown", "Quoiba", "Railton", "Raminea", "Randalls Bay", "Ranelagh", "Ranga", 
  "Ravenswood", "Recherche", "Red Hills", "Redpa", "Reedy Marsh", "Reekara", "Relbia", "Renison Bell", 
  "Retreat", "Reynolds Neck", "Rheban", "Rhyndaston", "Riana", "Richmond", "Ridgeway", "Ridgley", 
  "Ringarooma", "Risdon", "Risdon Vale", "Riverside", "Robigana", "Rocherlea", "Roches Beach", "Rocky Cape", 
  "Rocky Hills", "Roger River", "Rokeby", "Roland", "Romaine", "Rose Bay", "Rosebery", "Rosegarland", 
  "Rosetta", "Rosevale", "Rosevears", "Rosny", "Rosny Park", "Ross", "Rossarden", "Round Hill", "Rowella", 
  "Royal George", "Runnymede", "Rushy Lagoon", "Saltwater River", "Sandfly", "Sandford", "Sandy Bay", 
  "Sassafras", "Savage River", "Scamander", "Scopus", "Scotchtown", "Scottsdale", "Sea Elephant", 
  "Selbourne", "Seven Mile Beach", "Seymour", "Shearwater", "Sheffield", "Shorewell Park", 
  "Sidmouth", "Simpsons Bay", "Sisters Beach", "Sisters Creek", "Sloping Main", "Smithton", "Snug", 
  "Somerset", "Sorell", "Sorell Creek", "South Arm", "South Bruny", "South Burnie", "South Forest", 
  "South Hobart", "South Launceston", "South Mount Cameron", "South Nietta", "South Preston", "South Riana", 
  "South Spreyton", "South Springfield", "Southport", "Southport Lagoon", "Spalford", "Sprent", "Spreyton", 
  "Spring Beach", "Springfield", "Squeaking Point", "St Helens", "St Leonards", "St Marys", "Stanley", 
  "Staverton", "Steppes", "Stieglitz", "Stonehenge", "Stonor", "Stony Head", "Stony Rise", "Stoodley", "Stormlea", "Storys Creek", "Stowport", "Strahan", "Strathblane", "Strathgordon", 
  "Strickland", "Strzelecki", "Styx", "Sulphur Creek", "Summerhill", "Sunnyside", "Surges Bay", 
  "Surprise Bay", "Surveyors Bay", "Swan Bay", "Swan Point", "Swansea", "Swanston", "Table Cape", 
  "Takone", "Talawa", "Taranna",
