import type { ImageMetadata } from "astro";
import bigfoot from "../assets/Bigfoot.jpg";
import ghost from "../assets/Ghost.jpg";
import banshee from "../assets/banshee.jpg";
import lochness from "../assets/LochNess.jpg";
import mothman from "../assets/mothman.jpg";
import alert from "../assets/Alert.png";
import chupacabra from "../assets/chupacabra.jpg";
import krakenfile from "../assets/kraken-file.png";
import melonheadsfile from "../assets/melon-heads-file.png";
import unicornfile from "../assets/unicorn-file.png";
import skinwalkerfile from "../assets/skinwalker-file.png";
import lavaliskfile from "../assets/lavalisk-file.png";
import pukwudgiefile from "../assets/pukwudgie-file.png";
import babayagafile from "../assets/babayaga-file.png";

export interface CryptidFile {
  slug: string;
  title: string;
  name: string;
  image: ImageMetadata;
  imageAlt: string;
  description: string;
  caseNumber: string;
  alias?: string;
  address?: string;
  knownAssociates?: string;
  codename: string;
  region: string;
  type: string;
  dangerLevel: 'Low' | 'Medium' | 'High' | 'Unknown';
  firstSighting: string;
}

export const cryptidFiles: CryptidFile[] = [
  {
    slug: "bigfoot-file",
    title: "The Bigfoot File",
    name: "Bigfoot",
    image: bigfoot,
    imageAlt: "Bigfoot mugshot",
    description: "Know for his big feet, excellent strength and incredible hiding skills. He is a master of the woods. He spends the day eating and hiding from humans. He is just very shy.",
    caseNumber: "483165",
    alias: "Sasquatch",
    address: "Pacific Northwest, USA",
    knownAssociates: "Yeti, Jacko, Skunk Ape",
    codename: "BIGFOOT-483165",
    region: "Pacific Northwest, USA",
    type: "Humanoid",
    dangerLevel: "Low",
    firstSighting: "1920s",
  },
  {
    slug: "ghost-file",
    title: "The Ghost File",
    name: "Ghost",
    image: ghost,
    imageAlt: "Ghost mugshot",
    description: "Most of these ghosts are harmless. They just died with unfinished business. You are safe as long as that business isn't revenge. They're only visible under black light.",
    caseNumber: "932574",
    alias: "Spirit, Specter, Phantom, Soul, Ghoul, Poltergeist",
    address: "Everywhere",
    knownAssociates: "Grim Reaper, other dearly departed",
    codename: "GHOST-932574",
    region: "Worldwide",
    type: "Spirit",
    dangerLevel: "Low",
    firstSighting: "Ancient times",
  },
  {
    slug: "banshee-file",
    title: "The Banshee File",
    name: "Banshee",
    image: banshee,
    imageAlt: "Banshee mugshot",
    description: "The banshee, or 'bean sídhe' in Irish, is a female spirit in Irish folklore whose mournful wail is an omen of death. Often appearing as a pale woman with long, flowing white or silver hair and red eyes from endless weeping, she's typically dressed in a grey cloak over a white dress. Banshees are known to follow specific Irish families, particularly those with 'O' or 'Mc' in their names. Their cry, described as a combination of a wail and a keening song, is said to be heard at night when a family member is about to die. Some accounts describe them washing the blood-stained clothes of those who are about to die in streams. While terrifying, the banshee is not malevolent - she merely warns of inevitable fate. Modern sightings continue to be reported across Ireland and in areas with strong Irish heritage.",
    caseNumber: "413286",
    alias: "Bean Sídhe, Bean Chaointe, Badhbh, The Washer at the Ford",
    address: "Ireland",
    knownAssociates: "The Dullahan, Fairy Folk, Ancient Irish Families",
    codename: "BANSHEE-413286",
    region: "Ireland",
    type: "Spirit",
    dangerLevel: "Medium",
    firstSighting: "8th century",
  },
  {
    slug: "nessy-file",
    title: "The Nessy File",
    name: "Nessy",
    image: lochness,
    imageAlt: "Loch Ness Monster mugshot",
    description: "The cryptid of the Scottish lake. Known for their sharp teeth and snake-like appearance. It does not like to be disturbed.",
    caseNumber: "753221",
    alias: "Loch Ness Monster, Nessie",
    address: "Loch Ness, Scotland",
    knownAssociates: "Ogopogo",
    codename: "NESSY-753221",
    region: "Scotland",
    type: "Aquatic",
    dangerLevel: "Medium",
    firstSighting: "565 AD",
  },
  {
    slug: "mothman",
    title: "The Mothman File",
    name: "Mothman",
    image: mothman,
    imageAlt: "Mothman mugshot",
    description: "First spotted in Point Pleasant, West Virginia in 1966, Mothman is described as a large, winged humanoid with glowing red eyes. Standing 7 feet tall with a wingspan of 10-15 feet, this mysterious creature has been linked to disasters and strange phenomena.",
    caseNumber: "112233",
    alias: "Winged Cryptid, Harbinger of Doom",
    address: "Point Pleasant, West Virginia",
    knownAssociates: "Silver Bridge Collapse, Eyewitnesses",
    codename: "MOTHMAN-112233",
    region: "West Virginia, USA",
    type: "Winged Humanoid",
    dangerLevel: "High",
    firstSighting: "November 15, 1966",
  },
  {
    slug: "ottawa-school-file",
    title: "The Ottawa School File",
    name: "Uknown",
    image: alert,
    imageAlt: "Alert",
    description: "In Ottawa, there's a little school that's rumored to be haunted. Many people have seen strange things there. Near the girls' washroom, situated under the stairs, you might find something weird: a small door. At times, shreaking, creaking and footsteps can be heard from within. Upon further inspection, only paint buckets and pipes can be found. When the kids are at recess and the teachers are taking a break, something happens to the class phones. The screens begin to flash yellow warning signs. If you check the plant box, you will see a face. This sight can induce headaches in some people, but not all.",
    caseNumber: "532976",
    alias: "None",
    address: "Ottawa, Ontario",
    knownAssociates: "None",
    codename: "OTTAWA-532976",
    region: "Ottawa, Ontario",
    type: "Unknown",
    dangerLevel: "Unknown",
    firstSighting: "Unknown",
  },
  {
    slug: "chupacabra-file",
    title: "The Chupacabra File",
    name: "Chupacabra",
    image: chupacabra,
    imageAlt: "Chupacabra mugshot",
    description: "First reported in Puerto Rico in 1995, the Chupacabra (Spanish for 'goat-sucker') is known for attacking and drinking the blood of livestock. Described as a reptilian creature with leathery skin, spikes down its back, and glowing red eyes, sightings have spread throughout Latin America and the southern United States.",
    caseNumber: "951995",
    alias: "Goat Sucker, Blood Drainer",
    address: "Puerto Rico, Mexico, Southern United States",
    knownAssociates: "Livestock Attacks, Farmers, Rural Communities",
    codename: "CHUPACABRA-951995",
    region: "Latin America, Southern USA",
    type: "Reptilian",
    dangerLevel: "High",
    firstSighting: "March 1995",
  },
  {
    slug: "melon-heads-file",
    title: "The Melon Heads File",
    name: "Melon Heads",
    image: melonheadsfile,
    imageAlt: "Melon Heads mugshot",
    description: "The Melon Heads are small, humanoid creatures with grotesquely enlarged, bulbous heads resembling melons, said to roam dense woods seeking human contact. Legend claims a mad doctor in the forest experimented on children from a mental hospital, causing their heads to swell unnaturally through horrific procedures. One night, the children revolted, burned down the doctor's house, and now wander as feral beings with sharp teeth and pale skin.",
    caseNumber: "742200",
    alias: "Melonheads",
    address: "Kirtland, Ohio, USA",
    
    codename: "MELONHEA-742200",
    region: "Kirtland, Ohio, USA",
    type: "Mutated Humanoid",
    dangerLevel: "Medium",
    firstSighting: "1960s",
  },

  {
    slug: "unicorn-file",
    title: "The Unicorn File",
    name: "Unicorn",
    image: unicornfile,
    imageAlt: "Unicorn mugshot",
    description: "A legendary equine creature characterized by a single spiraling horn projecting from its forehead, though historical accounts and skeletal evidence suggest the animal may have possessed two backward-pointing horns similar to a giraffe. Unicorn sightings span multiple continents and centuries, with descriptions varying from purely mythical to potentially based on real but misidentified animals.",
    caseNumber: "417084",
    alias: "African Unicorn, Arabian Unicorn, Tahish, Elasmotherium (prehistoric relative)",
    address: "Indus Valley (ancient seals), Mecca region (16th century sighting), Bambos Berg region Africa (early 1800s)",
    knownAssociates: "Okapi (confirmed real species, formerly classified as cryptid), Komodo Dragon (formerly cryptid, now confirmed species)",
    codename: "UNICORN-417084",
    region: "Global (Primary regions: India, Arabia, Africa, Medieval Europe)",
    type: "Large Equine/Ungulate",
    dangerLevel: "Unknown",
    firstSighting: "1804 (European documentation by John Barrow); Ancient Greek and Medieval texts reference earlier sightings",
  },

  {
    slug: "kraken-file",
    title: "The Kraken File",
    name: "Kraken",
    image: krakenfile,
    imageAlt: "Kraken mugshot",
    description: "The Kraken is a colossal cephalopod-like sea monster with tentacles capable of ensnaring and sinking entire ships, often described as island-sized with eyes as large as dinner plates.[1][3][5] It lurks in the deep ocean, creating massive whirlpools by diving and luring prey with fish-attracting scents or excrement.[2][6] Sailors report it dragging vessels and crews to watery depths, embodying the terror of the unknown seas.[4]",
    caseNumber: "513700",
    alias: "Hafgufa",
    address: "Deep waters of the North Atlantic Ocean",
    knownAssociates: "None; solitary creature",
    codename: "KRAKEN-513700",
    region: "Norwegian Sea, coasts of Norway, Greenland, and Iceland",
    type: "Sea Monster",
    dangerLevel: "High",
    firstSighting: "1180, mentioned by King Sverre of Norway",
  },

  {
    slug: "skinwalker-file",
    title: "The Skinwalker File",
    name: "Skinwalker",
    image: skinwalkerfile,
    imageAlt: "Skinwalker mugshot",
    description: "Skinwalkers are malevolent shapeshifters from Navajo legend, known as yee naaldlooshii, who gain their powers by corrupting sacred medicine practices or committing grave taboos, allowing them to transform into animals like coyotes, wolves, or bears.[1][2] They possess humans by eye contact, control nocturnal creatures, and summon spirits of the dead, embodying pure evil that Navajo people avoid naming to prevent summoning them.[1][3] Nearly impossible to kill except with weapons dipped in white ash, they lurk in the American Southwest, blending animalistic traits even in human form.[1][2]",
    caseNumber: "714843",
    alias: "Yee naaldlooshii",
    address: "Skinwalker Ranch, northeast Utah[2][3]",
    knownAssociates: "Ute tribe (cursed by Navajo skinwalkers); associated with Pueblo, Apache, Hopi legends[1][2]",
    codename: "SKINWALK-714843",
    region: "Four Corners region: Navajo Reservation areas in northeast Arizona, northwest New Mexico, southeast Utah, southwest Colorado; notably Skinwalker Ranch, Utah.[2][3]",
    type: "Shapeshifting witch",
    dangerLevel: "High",
    firstSighting: "Pre-colonial Navajo oral traditions; modern publicity from 1996 Utah family encounters at Skinwalker Ranch.[1][2]",
  },

  {
    slug: "lavalisk-file",
    title: "The Lavalisk File",
    name: "Lavalisk",
    image: lavaliskfile,
    imageAlt: "Lavalisk mugshot",
    description: "The Lavalisk is a serpentine reptile with molten orange scales that glow faintly in darkness, capable of exhaling superheated steam from gill-like vents along its neck. Sightings describe it slithering through geothermal vents and abandoned mines, leaving trails of scorched earth and sulfurous fumes. Locals believe it feeds on mineral deposits, growing larger with each volcanic eruption.",
    caseNumber: "863474",
    alias: "Steam Serpent, Geyser Wyrm",
    address: "Yellowstone National Park, Wyoming, USA",
    
    codename: "LAVALISK-863474",
    region: "Yellowstone National Park, Wyoming, USA",
    type: "Thermic Reptilian",
    dangerLevel: "Medium",
    firstSighting: "July 14, 1934",
  },

  {
    slug: "pukwudgie-file",
    title: "The Pukwudgie File",
    name: "Pukwudgie",
    image: pukwudgiefile,
    imageAlt: "Pukwudgie mugshot",
    description: "The Pukwudgie is a diminutive humanoid cryptid, standing 2-3 feet tall, with gray skin, large ears and noses, and porcupine-like quills running down its back.[1][3][4] Originating from Native American folklore, particularly the Wampanoag and Algonquian tribes, it is known as a trickster spirit of the forest that can shapeshift, turn invisible, and wield magic to disorient or harm those who disrespect it.[1][2][4] Once harmonious with humans, it turned hostile due to betrayal or jealousy, now luring victims into danger or attacking with arrows and spears.[1][3][4]",
    caseNumber: "899093",
    alias: "Puk-Wudjie, Bokwjimen, Puck-wudj-ininee, Bagwajinini, Bogwejimenak",
    address: "Northeastern United States, Great Lakes region, Massachusetts, Indiana, Delaware, southeastern Canada[1][2][4]",
    knownAssociates: "Enemies of Maushop the giant and Granny Squannit[3][4]",
    codename: "PUKWUDGI-899093",
    region: "Northeastern United States, Great Lakes region, Massachusetts, Indiana, Delaware, southeastern Canada[1][2][4]",
    type: "Humanoid trickster spirit",
    dangerLevel: "Medium",
    firstSighting: "Approximately 9,000 years ago in Wampanoag oral traditions[1]",
  },

  {
    slug: "babayaga-file",
    title: "The Babayaga File",
    name: "Babayaga",
    image: babayagafile,
    imageAlt: "Babayaga mugshot",
    description: "Babayaga is a fearsome witch from Slavic folklore, known for residing in a hut that stands on chicken legs deep in the forest, surrounded by a fence of human bones.[1][2][3] She travels by flying in a giant mortar propelled by a pestle, sometimes sweeping her tracks with a broom, and is both a cannibalistic devourer of children and an enigmatic helper to worthy heroes.[1][3][4] Her dual nature makes her a harbinger of transformation, rewarding the clever while punishing trespassers who fail her impossible tasks.[1][5]",
    caseNumber: "795474",
    alias: "Baba Yaga, Iagaia Baba",
    address: "Eastern European forests, particularly Russia and Slavic regions",
    
    codename: "BABAYAGA-795474",
    region: "Eastern European forests, particularly Russia and Slavic regions",
    type: "Witch",
    dangerLevel: "High",
    firstSighting: "Mid-18th century (legends dating back to medieval period)",
  },
];

