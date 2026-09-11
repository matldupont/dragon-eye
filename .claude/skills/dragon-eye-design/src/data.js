/* global React */

// ============================================================
// DRAGON EYE — cryptid data (from repo)
// ============================================================

window.CRYPTIDS = [
  {
    slug: "mothman", name: "Mothman", image: "images/mothman.jpg",
    description: "First spotted in Point Pleasant, West Virginia in 1966, Mothman is described as a large, winged humanoid with glowing red eyes. Standing 7 feet tall with a wingspan of 10-15 feet, this mysterious creature has been linked to disasters and strange phenomena.",
    caseNumber: "112233", alias: "Winged Cryptid, Harbinger of Doom",
    knownAssociates: "Silver Bridge Collapse, Eyewitnesses",
    codename: "MOTHMAN-112233", region: "West Virginia, USA",
    type: "Winged Humanoid", dangerLevel: "High", firstSighting: "November 15, 1966",
    status: "Under Investigation"
  },
  {
    slug: "bigfoot-file", name: "Bigfoot", image: "images/Bigfoot.jpg",
    description: "Known for his big feet, excellent strength and incredible hiding skills. He is a master of the woods. He spends the day eating and hiding from humans. He is just very shy.",
    caseNumber: "483165", alias: "Sasquatch", knownAssociates: "Yeti, Jacko, Skunk Ape",
    codename: "BIGFOOT-483165", region: "Pacific Northwest, USA",
    type: "Humanoid", dangerLevel: "Low", firstSighting: "1920s", status: "Sighted"
  },
  {
    slug: "banshee-file", name: "Banshee", image: "images/banshee.jpg",
    description: "The banshee, or 'bean sídhe' in Irish, is a female spirit in Irish folklore whose mournful wail is an omen of death. Often appearing as a pale woman with long, flowing white or silver hair and red eyes from endless weeping.",
    caseNumber: "413286", alias: "Bean Sídhe, The Washer at the Ford",
    knownAssociates: "The Dullahan, Fairy Folk",
    codename: "BANSHEE-413286", region: "Ireland",
    type: "Spirit", dangerLevel: "Medium", firstSighting: "8th century", status: "Confirmed"
  },
  {
    slug: "nessy-file", name: "Nessy", image: "images/LochNess.jpg",
    description: "The cryptid of the Scottish lake. Known for their sharp teeth and snake-like appearance. It does not like to be disturbed.",
    caseNumber: "753221", alias: "Loch Ness Monster, Nessie", knownAssociates: "Ogopogo",
    codename: "NESSY-753221", region: "Scotland",
    type: "Aquatic", dangerLevel: "Medium", firstSighting: "565 AD", status: "Under Investigation"
  },
  {
    slug: "ghost-file", name: "Ghost", image: "images/Ghost.jpg",
    description: "Most of these ghosts are harmless. They just died with unfinished business. You are safe as long as that business isn't revenge. They're only visible under black light.",
    caseNumber: "932574", alias: "Spirit, Specter, Phantom, Poltergeist",
    knownAssociates: "Grim Reaper, other dearly departed",
    codename: "GHOST-932574", region: "Worldwide",
    type: "Spirit", dangerLevel: "Low", firstSighting: "Ancient times", status: "Myth"
  },
  {
    slug: "chupacabra-file", name: "Chupacabra", image: "images/chupacabra.jpg",
    description: "First reported in Puerto Rico in 1995, the Chupacabra ('goat-sucker') is known for attacking and drinking the blood of livestock. Described as a reptilian creature with leathery skin, spikes down its back, and glowing red eyes.",
    caseNumber: "951995", alias: "Goat Sucker, Blood Drainer",
    knownAssociates: "Livestock Attacks, Rural Communities",
    codename: "CHUPACABRA-951995", region: "Latin America, Southern USA",
    type: "Reptilian", dangerLevel: "High", firstSighting: "March 1995", status: "Under Investigation"
  },
  {
    slug: "skinwalker-file", name: "Skinwalker", image: "images/skinwalker-file.png",
    description: "Malevolent shapeshifters from Navajo legend, yee naaldlooshii, who gain power by corrupting sacred medicine practices. They transform into animals like coyotes, wolves, or bears, and are nearly impossible to kill.",
    caseNumber: "714843", alias: "Yee naaldlooshii",
    knownAssociates: "Ute tribe, Pueblo, Apache, Hopi legends",
    codename: "SKINWALK-714843", region: "Four Corners, USA",
    type: "Shapeshifter", dangerLevel: "High", firstSighting: "Pre-colonial", status: "Confirmed"
  },
  {
    slug: "kraken-file", name: "Kraken", image: "images/kraken-file.png",
    description: "A colossal cephalopod-like sea monster with tentacles capable of ensnaring and sinking entire ships, often described as island-sized with eyes as large as dinner plates.",
    caseNumber: "513700", alias: "Hafgufa", knownAssociates: "Solitary",
    codename: "KRAKEN-513700", region: "North Atlantic",
    type: "Sea Monster", dangerLevel: "High", firstSighting: "1180", status: "Confirmed"
  },
  {
    slug: "babayaga-file", name: "Baba Yaga", image: "images/babayaga-file.png",
    description: "A fearsome witch from Slavic folklore, residing in a hut that stands on chicken legs deep in the forest, surrounded by a fence of human bones. A harbinger of transformation.",
    caseNumber: "795474", alias: "Baba Yaga, Iagaia Baba",
    knownAssociates: "Slavic forest spirits",
    codename: "BABAYAGA-795474", region: "Eastern Europe",
    type: "Witch", dangerLevel: "High", firstSighting: "Mid-18th century", status: "Myth"
  },
  {
    slug: "pukwudgie-file", name: "Pukwudgie", image: "images/pukwudgie-file.png",
    description: "A diminutive humanoid, 2-3 feet tall, with gray skin, large ears and noses, and porcupine-like quills. A trickster spirit that can shapeshift, turn invisible, and wield magic.",
    caseNumber: "899093", alias: "Puk-Wudjie, Bagwajinini",
    knownAssociates: "Enemies of Maushop the giant",
    codename: "PUKWUDGI-899093", region: "Northeastern USA, Great Lakes",
    type: "Trickster", dangerLevel: "Medium", firstSighting: "~9,000 years ago", status: "Sighted"
  },
  {
    slug: "unicorn-file", name: "Unicorn", image: "images/unicorn-file.png",
    description: "A legendary equine creature characterized by a single spiraling horn. Sightings span multiple continents and centuries.",
    caseNumber: "417084", alias: "African Unicorn, Tahish",
    knownAssociates: "Okapi, Komodo Dragon (formerly cryptid)",
    codename: "UNICORN-417084", region: "Global",
    type: "Equine", dangerLevel: "Unknown", firstSighting: "1804", status: "Myth"
  },
  {
    slug: "melon-heads-file", name: "Melon Heads", image: "images/melon-heads-file.png",
    description: "Small, humanoid creatures with grotesquely enlarged heads resembling melons. Said to roam dense woods after escaping a mad doctor's experiments.",
    caseNumber: "742200", alias: "Melonheads", knownAssociates: "Forest recluse",
    codename: "MELONHEA-742200", region: "Kirtland, Ohio, USA",
    type: "Mutated Humanoid", dangerLevel: "Medium", firstSighting: "1960s", status: "Sighted"
  },
  {
    slug: "lavalisk-file", name: "Lavalisk", image: "images/lavalisk-file.png",
    description: "A serpentine reptile with molten orange scales, capable of exhaling superheated steam. Slithers through geothermal vents, leaving trails of scorched earth and sulfurous fumes.",
    caseNumber: "863474", alias: "Steam Serpent, Geyser Wyrm",
    knownAssociates: "Volcanic fauna",
    codename: "LAVALISK-863474", region: "Yellowstone, USA",
    type: "Thermic Reptilian", dangerLevel: "Medium", firstSighting: "July 14, 1934", status: "Under Investigation"
  }
];

window.FEATURED_SLUG = "mothman";
