
export interface Location {
  id: string;
  name: string;
  slug: string;
  state: string;
  country: string;
  county?: string;
  image: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
}

// NSW cities
const nswCities = [
  "Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland", "Tweed Heads", "Wagga Wagga", "Albury", "Tamworth", "Orange",
  "Dubbo", "Bathurst", "Nowra", "Goulburn", "Lismore", "Coffs Harbour", "Armidale", "Queanbeyan", "Grafton", "Broken Hill",
  "Port Macquarie", "Katoomba", "Moree", "Taree", "Griffith", "Bowral", "Casino", "Singleton", "Inverell", "Parkes",
  "Narrabri", "Cessnock", "Muswellbrook", "Raymond Terrace", "Kiama", "Leeton", "Scone", "Kempsey", "Gunnedah", "Forster",
  "Mudgee", "Yass", "Lithgow", "Cowra", "Deniliquin", "Young", "Condobolin", "Cobar", "Nyngan", "Warren",
  "Walgett", "Bourke", "Brewarrina", "Lightning Ridge", "Collarenebri", "Goodooga", "Enngonia", "Baradine", "Coonamble", "Gilgandra"
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

// Victorian cities
const victorianCities = [
  "Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Mildura", "Warrnambool", "Wodonga", "Traralgon", "Horsham",
  "Echuca", "Bacchus Marsh", "Wangaratta", "Portland", "Sale", "Melton", "Sunbury", "Morwell", "Drouin", "Castlemaine",
  "Ararat", "Maryborough", "Benalla", "Stawell", "Seymour", "Swan Hill", "Colac", "Hamilton", "Warragul", "Kyabram",
  "Cobram", "Yarrawonga", "Moe", "Bairnsdale", "Leongatha", "Wonthaggi", "Ocean Grove", "Torquay", "Apollo Bay", "Anglesea",
  "Queenscliff", "Port Fairy", "Bright", "Beechworth", "Rutherglen", "Mansfield", "Alexandra", "Healesville", "Lilydale", "Belgrave"
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

// Queensland cities
const queenslandCities = [
  "Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns", "Toowoomba", "Mackay", "Rockhampton", "Bundaberg", "Hervey Bay",
  "Gladstone", "Mount Isa", "Maryborough", "Gympie", "Nambour", "Warwick", "Yeppoon", "Emerald", "Roma", "Charters Towers",
  "Ayr", "Bowen", "Ingham", "Innisfail", "Mareeba", "Weipa", "Thursday Island", "Longreach", "Barcaldine", "Blackall",
  "Cloncurry", "Hughenden", "Richmond", "Julia Creek", "Normanton", "Croydon", "Georgetown", "Forsayth", "Atherton", "Tully",
  "Cardwell", "Proserpine", "Sarina", "Moranbah", "Dysart", "Clermont", "Springsure", "Rolleston", "Injune", "Mitchell"
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

// South Australian cities
const southAustralianCities = [
  "Adelaide", "Mount Gambier", "Whyalla", "Murray Bridge", "Port Pirie", "Port Augusta", "Victor Harbor", "Port Lincoln", "Gawler",
  "Mount Barker", "Berri", "Renmark", "Naracoorte", "Roxby Downs", "Kadina", "Millicent", "Clare", "Tanunda", "Loxton",
  "Kingscote", "Maitland", "Meningie", "Penola", "Yorketown", "Jamestown", "Kapunda", "Balaklava", "Two Wells", "Strathalbyn",
  "Goolwa", "Ardrossan", "Burra", "Cleve", "Cowell", "Hawker", "Kimba", "Leigh Creek", "Mannum", "Orroroo",
  "Parachilna", "Pinnaroo", "Quorn", "Streaky Bay", "Tarcoola", "Woomera", "Yunta", "American River", "Blanchetown",
  "Bordertown", "Ceduna", "Coober Pedy", "Edithburgh", "Eudunda", "Farina", "Iron Knob", "Keith", "Lyndoch", "Marree",
  "Moomba", "Nairne", "Peterborough", "Port Broughton", "Port Wakefield", "Riverton", "Saddleworth", "Snowtown", "Tintinara",
  "Truro", "Wirrulla", "Alberton", "Ascot Park", "Ashford", "Athelstone", "Brighton", "Brompton", "Campbelltown", "Christie Downs",
  "Clovelly Park", "Croydon Park", "Elizabeth", "Enfield", "Findon", "Glenelg", "Greenacres", "Hallett Cove", "Henley Beach",
  "Holden Hill", "Kensington Park", "Kilburn", "Morphett Vale", "Newton", "Norwood", "Oaklands Park", "Para Hills", "Prospect",
  "Salisbury", "Seacliff Park", "Semaphore", "St Clair", "Tea Tree Gully", "Torrensville", "Unley", "Walkerville", "West Lakes",
  "Woodville", "Aldgate", "Belair", "Blackwood", "Bridgewater", "Crafers", "Hahndorf", "Kangarilla", "Lobethal", "Meadows",
  "Mount Compass", "Oakbank", "Stirling", "Uraidla", "Willunga", "Yankalilla", "Athelstone", "Elizabeth Downs", "Golden Grove",
  "Grange", "Ingle Farm", "Parafield Gardens", "Para Vista", "Pooraka", "Reynella", "Seaton", "Taperoo", "Valley View",
  "Warradale", "Andrews Farm", "Blakeview", "Craigmore", "Davoren Park", "Elizabeth North", "Gawler East", "Munno Para", "Smithfield",
  "Angle Vale", "Bibaringa", "Buckland Park", "Evanston", "Macdonald Park", "Roseworthy", "Virginia", "Alford", "Arthurton",
  "Bute", "Cunliffe", "Kadina", "Moonta", "Paskeville", "Port Broughton", "Port Hughes", "Wallaroo", "Warooka",
  "Yorketown", "Balgowan", "Black Point", "Brentwood", "Cape Jervis", "Corny Point", "Curramulka", "Hardwicke Bay", "Innes National Park",
  "Marion Bay", "Minlaton", "Parsons Beach", "Point Turton", "Port Clinton", "Port Victoria", "Price", "Stansbury", "Stenhouse Bay",
  "Ardrossan", "Balgowan", "Black Point", "Brentwood", "Cape Jervis", "Corny Point", "Curramulka", "Hardwicke Bay", "Innes National Park",
  "Marion Bay", "Minlaton", "Parsons Beach", "Point Turton", "Port Clinton", "Port Victoria", "Price", "Stansbury", "Stenhouse Bay",
  "Kootaberra", "Koppamurra", "Koppio", "Korunye", "Kringin", "Krondorf", "Krongart", "Kudla", "Kuitpo",
  "Kuitpo Colony", "Kulpara", "Kurralta Park", "Kyancutta", "Kybunga", "Kybybolite", "Kyeema", "Laffer",
  "Lake Albert", "Lake Alexandrina", "Lake Carlet", "Lake Everard", "Lake Eyre", "Lake Frome", "Lake Gairdner",
  "Lake Gilles", "Lake Harris", "Lake Macfarlane", "Lake Plains", "Lake Torrens", "Lake Torrens Station",
  "Lake View", "Lameroo", "Langhorne Creek", "Langs Landing", "Largs Bay", "Largs North", "Laura", "Laura Bay",
  "Laurie Park", "Leabrook", "Leasingham", "Leawood Gardens", "Leigh Creek", "Leigh Creek Station", "Leighton",
  "Lenswood", "Lewiston", "Light Pass", "Lightsview", "Lincoln Gap", "Lincoln National Park", "Linden Park",
  "Lindley", "Lindon", "Linwood", "Lipson", "Little Douglas", "Littlehampton", "Lobethal", "Lochaber", "Lochiel",
  "Lock", "Lockes Claypan", "Lockleys", "Long Flat", "Long Plains", "Longwood", "Lonsdale", "Lonsdale Dc",
  "Louth Bay", "Loveday", "Lowan Vale", "Lowbank", "Lower Broughton", "Lower Hermitage", "Lower Inman Valley",
  "Lower Light", "Lower Mitcham", "Loxton", "Loxton North", "Lucindale", "Lucky Bay", "Lyndhurst", "Lyndoch",
  "Lynton", "Lyrup", "Maaoupe", "Mabel Creek", "Macclesfield", "Macdonald Park", "Macgillivray", "Macumba",
  "Magarey", "Magdala", "Maggea", "Magill", "Magill North", "Magill South", "Mahanewo", "Maitland", "Makin",
  "Malinong", "Mallala", "Malpas", "Maltee", "Malvern", "Mambray Creek", "Mangalo", "Manna Hill", "Mannanarie",
  "Manners Well", "Manningham", "Mannum", "Manoora", "Mansfield Park", "Mantung", "Manunda Station", "Marama",
  "Marananga", "Marble Hill", "Marcollat", "Marden", "Marino", "Marion", "Marion Bay", "Markaranka",
  "Marks Landing", "Marla", "Marleston", "Marleston Dc", "Marola", "Marrabel", "Marree", "Marree Station",
  "Marryatville", "Martins Well", "Maryvale", "Maslin Beach", "Matta Flat", "Maude", "Mawson Lakes", "Mayfield",
  "Maylands", "Mcbean Pound", "Mccallum", "Mccracken", "Mcdouall Peak", "Mcharg Creek", "Mclaren Flat",
  "Mclaren Vale", "Meadows", "Medindie", "Medindie Gardens", "Melrose", "Melrose Park", "Melrose Park Dc",
  "Melton", "Melton Station", "Meningie", "Meningie East", "Meningie West", "Menzies", "Mercunda", "Merghiny",
  "Meribah", "Merriton", "Merty Merty", "Middle Beach", "Middle River", "Middleback Range", "Middleton",
  "Midgee", "Mil Lel", "Milang", "Mile End", "Mile End South", "Milendella", "Millbrook", "Millers Creek",
  "Millicent", "Millswood", "Miltalie", "Minbrie", "Minburra", "Minburra Plain", "Minburra Station",
  "Mindarie", "Mingary", "Mingbool", "Minlaton", "Minnipa", "Mintabie", "Mintaro", "Minvalara", "Miranda",
  "Mitcham", "Mitcham Shopping Centre", "Mitchell", "Mitchell Park", "Mitchellville"
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

// Western Australian cities
const westernAustralianCities = [
  "Perth", "Mandurah", "Bunbury", "Geraldton", "Albany", "Kalgoorlie", "Busselton", "Karratha", "Port Hedland", "Broome",
  "Esperance", "Carnarvon", "Derby", "Newman", "Kununurra", "Collie", "Narrogin", "Northam", "Margaret River", "Denmark",
  "Augusta", "Bridgetown", "Busselton", "Capel", "Cowaramup", "Dunsborough", "Gracetown", "Vasse", "Yallingup", "Australind",
  "Binningup", "Boyanup", "Bunbury", "Dalyellup", "Eaton", "Gelorup", "Harvey", "Leschenault", "Parkfield", "Roelands",
  "Wokalup", "Allanson", "Cardiff", "Collie", "Darkan", "Duranillin", "Harris River", "Mumballup", "Noggerup", "Shotts",
  "Wellington Forest", "Worsley", "Boddington", "Dwellingup", "Marradong", "Mount Saddleback", "Pinjarra", "Ravenswood", "Waroona",
  "Wagerup", "Yarloop", "Beverley", "Brookton", "Corrigin", "Cunderdin", "Dowerin", "Goomalling", "Kellerberrin", "Koorda",
  "Kulin", "Merredin", "Mukinbudin", "Narembeen", "Nungarin", "Quairading", "Tammin", "Toodyay", "Trayning", "Wickepin",
  "Wyalkatchem", "Yilgarn", "York", "Albany", "Bremer Bay", "Cranbrook", "Denmark", "Fitzgerald River National Park", "Frankland River",
  "Gnowangerup", "Katanning", "Kojonup", "Kendenup", "Lake Grace", "Mount Barker", "Ongerup", "Pingrup", "Plantagenet",
  "Rocky Gully", "Tambellup", "Woodanilling", "Broomehill", "Gnowellen", "Kukerin", "Nyabing", "Pingaring", "Wagin",
  "Wandering", "Wickepin", "Williams", "Arthur River", "Darkan", "Dumbleyung", "Kondinin", "Lake King", "Narrogin",
  "Wickepin", "Williams", "Wagin", "Boddington", "Dwellingup", "Mandurah", "Pinjarra", "Waroona", "Yarloop",
  "Augusta", "Busselton", "Capel", "Cowaramup", "Dunsborough", "Gracetown", "Margaret River", "Vasse", "Yallingup", "Albany",
  "Bremer Bay", "Cranbrook", "Denmark", "Fitzgerald River National Park", "Frankland River", "Gnowangerup", "Katanning", "Kojonup", "Kendenup",
  "Lake Grace", "Mount Barker", "Ongerup", "Pingrup", "Plantagenet", "Rocky Gully", "Tambellup", "Woodanilling", "Broomehill", "Gnowellen",
  "Kukerin", "Nyabing", "Pingaring", "Wagin", "Wandering", "Wickepin", "Williams", "Arthur River", "Darkan", "Dumbleyung",
  "Kondinin", "Lake King", "Narrogin", "Wickepin", "Williams", "Wagin", "Boddington", "Dwellingup", "Mandurah",
  "Pinjarra", "Waroona", "Yarloop"
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

// Tasmanian cities
const tasmanianCities = [
  "Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone", "Somerset", "Kingston", "New Norfolk", "George Town", "Queenstown",
  "Huonville", "Scottsdale", "Bridport", "Sheffield", "Deloraine", "Longford", "Oatlands", "Richmond", "Swansea", "Triabunna",
  "Zeehan", "Bicheno", "St Helens", "Stanley", "Smithton", "Wynyard", "Penguin", "Latrobe", "Exeter", "Beaconsfield",
  "Campbell Town", "Ross", "Bothwell", "Hamilton", "Bushy Park", "Maydena", "Dover", "Geeveston", "Franklin", "Cygnet",
  "Snug", "Margate", "Blackmans Bay", "Claremont", "Gagebrook", "Bridgewater", "Brighton", "Pontville", "Bagdad", "Kempton"
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

// Australian Capital Territory cities
const actCities = [
  "Canberra", "Queanbeyan", "Yass", "Murrumbateman", "Bungendore", "Sutton", "Hall", "Gundaroo", "Michelago", "Royalla",
  "Tharwa", "Uriarra", "Oaks Estate", "Googong", "Jerrabomberra", "Harman", "Duntroon", "Russell", "Parkwood", "Fyshwick",
  "Kingston", "Barton", "Forrest", "Deakin", "Yarralumla", "Acton", "Reid", "Campbell", "Braddon", "Turner",
  "O'Connor", "Lyneham", "Dickson", "Downer", "Watson", "Hackett", "Ainslie", "City", "Civic", "ANU",
  "Belconnen", "Bruce", "Macquarie", "Cook", "Aranda", "Weetangera", "Hawker", "Page", "Scullin", "Higgins",
  "Holt", "Kambah", "Woden", "Weston Creek", "Chapman", "Duffy", "Fisher", "Holder", "Rivett", "Stirling",
  "Waramanga", "Fadden", "Gowrie", "Isabella Plains", "Monash", "Oxley", "Richardson", "Theodore", "Calwell", "Chisholm"
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

// Northern Territory cities
const northernTerritoryCities = [
  "Darwin", "Alice Springs", "Katherine", "Nhulunbuy", "Tennant Creek", "Palmerston", "Yulara", "Jabiru", "Alyangula", "Wadeye",
  "Nguiu", "Milikapiti", "Pirlangimpi", "Maningrida", "Gunbalanya", "Yuendumu", "Elliott", "Borroloola", "Mataranka", "Adelaide River",
  "Batchelor", "Pine Creek", "Lajamanu", "Hermannsburg", "Santa Teresa", "Beswick", "Umbakumba", "Numbulwar", "Galiwinku", "Milingimbi",
  "Ramingining", "Gapuwiyak", "Yirrkala", "Moulden", "Zuccoli", "Bellamack", "Rosebery", "Gray", "Driver",
  "Johnston", "Archer", "Durack", "Bakewell", "Farrar", "Coomalie Creek", "Acacia Hills", "Berry Springs", "Livingstone",
  "Rum Jungle", "Hayes Creek", "Daly River", "Nauiyu", "Peppimenarti", "Palumpa", "Wurrumiyanga", "Angurugu", "Nunggubuyu", "Bickerton Island"
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

const allAustralianCities = [
  ...nswCities,
  ...victorianCities,
  ...queenslandCities,
  ...southAustralianCities,
  ...westernAustralianCities,
  ...tasmanianCities,
  ...actCities,
  ...northernTerritoryCities,
];

export { allAustralianCities };
