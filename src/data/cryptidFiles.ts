import type { ImageMetadata } from "astro";
import bigfoot from "../assets/Bigfoot.jpg";
import ghost from "../assets/Ghost.jpg";
import banshee from "../assets/banshee.jpg";
import lochness from "../assets/LochNess.jpg";
import mothman from "../assets/mothman.jpg";
import alert from "../assets/Alert.png";
import chupacabra from "../assets/chupacabra.jpg";

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
];

