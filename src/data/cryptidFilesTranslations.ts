import type { Locale } from "../i18n/translations";
import type { CryptidFile } from "./cryptidFiles";

export interface CryptidTranslations {
  [key: string]: {
    title: string;
    name: string;
    imageAlt: string;
    description: string;
    alias?: string;
    address?: string;
    knownAssociates?: string;
    region: string;
    type: string;
    firstSighting: string;
  };
}

export const cryptidTranslations: Record<Locale, CryptidTranslations> = {
  en: {},
  fr: {
    "bigfoot-file": {
      title: "Le Dossier Bigfoot",
      name: "Bigfoot",
      imageAlt: "Photo signalétique de Bigfoot",
      description: "Connu pour ses grands pieds, sa force exceptionnelle et ses incroyables compétences de camouflage. C'est un maître des bois. Il passe ses journées à manger et à se cacher des humains. Il est tout simplement très timide.",
      alias: "Sasquatch",
      address: "Nord-Ouest du Pacifique, États-Unis",
      knownAssociates: "Yéti, Jacko, Skunk Ape",
      region: "Nord-Ouest du Pacifique, États-Unis",
      type: "Humanoïde",
      firstSighting: "Années 1920",
    },
    "ghost-file": {
      title: "Le Dossier Fantôme",
      name: "Fantôme",
      imageAlt: "Photo signalétique de Fantôme",
      description: "La plupart de ces fantômes sont inoffensifs. Ils sont simplement morts avec des affaires inachevées. Vous êtes en sécurité tant que cette affaire n'est pas la vengeance. Ils ne sont visibles qu'à la lumière noire.",
      alias: "Esprit, Spectre, Fantôme, Âme, Goules, Poltergeist",
      address: "Partout",
      knownAssociates: "La Faucheuse, autres défunts",
      region: "Mondial",
      type: "Esprit",
      firstSighting: "Temps anciens",
    },
    "banshee-file": {
      title: "Le Dossier Banshee",
      name: "Banshee",
      imageAlt: "Photo signalétique de Banshee",
      description: "La banshee, ou 'bean sídhe' en irlandais, est un esprit féminin du folklore irlandais dont le gémissement funèbre est un présage de mort. Souvent apparaissant comme une femme pâle aux longs cheveux blancs ou argentés flottants et aux yeux rouges de pleurs incessants, elle est généralement vêtue d'une cape grise sur une robe blanche. Les banshees sont connues pour suivre des familles irlandaises spécifiques, en particulier celles avec 'O' ou 'Mc' dans leurs noms. Leur cri, décrit comme une combinaison d'un gémissement et d'une chanson de deuil, serait entendu la nuit lorsqu'un membre de la famille est sur le point de mourir. Certains récits les décrivent lavant les vêtements tachés de sang de ceux qui sont sur le point de mourir dans les ruisseaux. Bien que terrifiante, la banshee n'est pas malveillante - elle avertit simplement d'un destin inévitable. Les observations modernes continuent d'être signalées à travers l'Irlande et dans les régions à fort patrimoine irlandais.",
      alias: "Bean Sídhe, Bean Chaointe, Badhbh, La Laveuse au Gué",
      address: "Irlande",
      knownAssociates: "Le Dullahan, le Peuple des Fées, les Anciennes Familles Irlandaises",
      region: "Irlande",
      type: "Esprit",
      firstSighting: "8ème siècle",
    },
    "nessy-file": {
      title: "Le Dossier Nessy",
      name: "Nessy",
      imageAlt: "Photo signalétique du Monstre du Loch Ness",
      description: "La créature cryptide du lac écossais. Connue pour ses dents acérées et son apparence de serpent. Elle n'aime pas être dérangée.",
      alias: "Monstre du Loch Ness, Nessie",
      address: "Loch Ness, Écosse",
      knownAssociates: "Ogopogo",
      region: "Écosse",
      type: "Aquatique",
      firstSighting: "565 après J.-C.",
    },
    "mothman": {
      title: "Le Dossier Mothman",
      name: "Mothman",
      imageAlt: "Photo signalétique de Mothman",
      description: "Repéré pour la première fois à Point Pleasant, Virginie-Occidentale en 1966, Mothman est décrit comme un humanoïde ailé de grande taille aux yeux rouges lumineux. Mesurant 7 pieds de haut avec une envergure de 10 à 15 pieds, cette créature mystérieuse a été liée à des catastrophes et des phénomènes étranges.",
      alias: "Créature Cryptide Ailée, Présage de Malheur",
      address: "Point Pleasant, Virginie-Occidentale",
      knownAssociates: "Effondrement du Pont d'Argent, Témoins",
      region: "Virginie-Occidentale, États-Unis",
      type: "Humanoïde Ailé",
      firstSighting: "15 novembre 1966",
    },
    "ottawa-school-file": {
      title: "Le Dossier de l'École d'Ottawa",
      name: "Inconnu",
      imageAlt: "Alerte",
      description: "À Ottawa, il y a une petite école qui serait hantée. Beaucoup de gens y ont vu des choses étranges. Près des toilettes des filles, situées sous les escaliers, vous pourriez trouver quelque chose d'étrange : une petite porte. Parfois, des cris, des grincements et des pas peuvent être entendus de l'intérieur. Après inspection approfondie, seuls des seaux de peinture et des tuyaux peuvent être trouvés. Quand les enfants sont en récréation et que les enseignants font une pause, quelque chose arrive aux téléphones de la classe. Les écrans commencent à clignoter des signes d'avertissement jaunes. Si vous vérifiez la boîte à plantes, vous verrez un visage. Cette vue peut provoquer des maux de tête chez certaines personnes, mais pas toutes.",
      alias: "Aucun",
      address: "Ottawa, Ontario",
      knownAssociates: "Aucun",
      region: "Ottawa, Ontario",
      type: "Inconnu",
      firstSighting: "Inconnu",
    },
    "chupacabra-file": {
      title: "Le Dossier Chupacabra",
      name: "Chupacabra",
      imageAlt: "Photo signalétique de Chupacabra",
      description: "Signalé pour la première fois à Porto Rico en 1995, le Chupacabra (espagnol pour 'suceur de chèvres') est connu pour attaquer et boire le sang du bétail. Décrit comme une créature reptilienne à la peau coriace, avec des épines le long du dos et des yeux rouges lumineux, les observations se sont répandues dans toute l'Amérique latine et le sud des États-Unis.",
      alias: "Suceur de Chèvres, Draineur de Sang",
      address: "Porto Rico, Mexique, Sud des États-Unis",
      knownAssociates: "Attaques de Bétail, Agriculteurs, Communautés Rurales",
      region: "Amérique Latine, Sud des États-Unis",
      type: "Reptilien",
      firstSighting: "Mars 1995",
    },  
    "melon-heads-file": {
      title: "Le Dossier Melon Heads",
      name: "Melon Heads",
      imageAlt: "Photo signalétique de Melon Heads",
      description: "The Melon Heads are small, humanoid creatures with grotesquely enlarged, bulbous heads resembling melons, said to roam dense woods seeking human contact. Legend claims a mad doctor in the forest experimented on children from a mental hospital, causing their heads to swell unnaturally through horrific procedures. One night, the children revolted, burned down the doctor's house, and now wander as feral beings with sharp teeth and pale skin. [TRANSLATION NEEDED]",
      alias: "Melonheads [TRANSLATION NEEDED]",
      address: "Kirtland, Ohio, USA [TRANSLATION NEEDED]",
      
      region: "Kirtland, Ohio, USA [TRANSLATION NEEDED]",
      type: "Mutated Humanoid [TRANSLATION NEEDED]",
      firstSighting: "1960s [TRANSLATION NEEDED]",
    },
    "unicorn-file": {
      title: "Le Dossier Unicorn",
      name: "Unicorn",
      imageAlt: "Photo signalétique de Unicorn",
      description: "A legendary equine creature characterized by a single spiraling horn projecting from its forehead, though historical accounts and skeletal evidence suggest the animal may have possessed two backward-pointing horns similar to a giraffe. Unicorn sightings span multiple continents and centuries, with descriptions varying from purely mythical to potentially based on real but misidentified animals. [TRANSLATION NEEDED]",
      alias: "African Unicorn, Arabian Unicorn, Tahish, Elasmotherium (prehistoric relative) [TRANSLATION NEEDED]",
      address: "Indus Valley (ancient seals), Mecca region (16th century sighting), Bambos Berg region Africa (early 1800s) [TRANSLATION NEEDED]",
      knownAssociates: "Okapi (confirmed real species, formerly classified as cryptid), Komodo Dragon (formerly cryptid, now confirmed species) [TRANSLATION NEEDED]",
      region: "Global (Primary regions: India, Arabia, Africa, Medieval Europe) [TRANSLATION NEEDED]",
      type: "Large Equine/Ungulate [TRANSLATION NEEDED]",
      firstSighting: "1804 (European documentation by John Barrow); Ancient Greek and Medieval texts reference earlier sightings [TRANSLATION NEEDED]",
    },
    "kraken-file": {
      title: "Le Dossier Kraken",
      name: "Kraken",
      imageAlt: "Photo signalétique de Kraken",
      description: "The Kraken is a colossal cephalopod-like sea monster with tentacles capable of ensnaring and sinking entire ships, often described as island-sized with eyes as large as dinner plates.[1][3][5] It lurks in the deep ocean, creating massive whirlpools by diving and luring prey with fish-attracting scents or excrement.[2][6] Sailors report it dragging vessels and crews to watery depths, embodying the terror of the unknown seas.[4] [TRANSLATION NEEDED]",
      alias: "Hafgufa [TRANSLATION NEEDED]",
      address: "Deep waters of the North Atlantic Ocean [TRANSLATION NEEDED]",
      knownAssociates: "None; solitary creature [TRANSLATION NEEDED]",
      region: "Norwegian Sea, coasts of Norway, Greenland, and Iceland [TRANSLATION NEEDED]",
      type: "Sea Monster [TRANSLATION NEEDED]",
      firstSighting: "1180, mentioned by King Sverre of Norway [TRANSLATION NEEDED]",
    },
    "skinwalker-file": {
      title: "Le Dossier Skinwalker",
      name: "Skinwalker",
      imageAlt: "Photo signalétique de Skinwalker",
      description: "Skinwalkers are malevolent shapeshifters from Navajo legend, known as yee naaldlooshii, who gain their powers by corrupting sacred medicine practices or committing grave taboos, allowing them to transform into animals like coyotes, wolves, or bears.[1][2] They possess humans by eye contact, control nocturnal creatures, and summon spirits of the dead, embodying pure evil that Navajo people avoid naming to prevent summoning them.[1][3] Nearly impossible to kill except with weapons dipped in white ash, they lurk in the American Southwest, blending animalistic traits even in human form.[1][2] [TRANSLATION NEEDED]",
      alias: "Yee naaldlooshii [TRANSLATION NEEDED]",
      address: "Skinwalker Ranch, northeast Utah[2][3] [TRANSLATION NEEDED]",
      knownAssociates: "Ute tribe (cursed by Navajo skinwalkers); associated with Pueblo, Apache, Hopi legends[1][2] [TRANSLATION NEEDED]",
      region: "Four Corners region: Navajo Reservation areas in northeast Arizona, northwest New Mexico, southeast Utah, southwest Colorado; notably Skinwalker Ranch, Utah.[2][3] [TRANSLATION NEEDED]",
      type: "Shapeshifting witch [TRANSLATION NEEDED]",
      firstSighting: "Pre-colonial Navajo oral traditions; modern publicity from 1996 Utah family encounters at Skinwalker Ranch.[1][2] [TRANSLATION NEEDED]",
    },
    "lavalisk-file": {
      title: "Le Dossier Lavalisk",
      name: "Lavalisk",
      imageAlt: "Photo signalétique de Lavalisk",
      description: "The Lavalisk is a serpentine reptile with molten orange scales that glow faintly in darkness, capable of exhaling superheated steam from gill-like vents along its neck. Sightings describe it slithering through geothermal vents and abandoned mines, leaving trails of scorched earth and sulfurous fumes. Locals believe it feeds on mineral deposits, growing larger with each volcanic eruption. [TRANSLATION NEEDED]",
      alias: "Steam Serpent, Geyser Wyrm [TRANSLATION NEEDED]",
      address: "Yellowstone National Park, Wyoming, USA [TRANSLATION NEEDED]",
      
      region: "Yellowstone National Park, Wyoming, USA [TRANSLATION NEEDED]",
      type: "Thermic Reptilian [TRANSLATION NEEDED]",
      firstSighting: "July 14, 1934 [TRANSLATION NEEDED]",
    },
    "pukwudgie-file": {
      title: "Le Dossier Pukwudgie",
      name: "Pukwudgie",
      imageAlt: "Photo signalétique de Pukwudgie",
      description: "The Pukwudgie is a diminutive humanoid cryptid, standing 2-3 feet tall, with gray skin, large ears and noses, and porcupine-like quills running down its back.[1][3][4] Originating from Native American folklore, particularly the Wampanoag and Algonquian tribes, it is known as a trickster spirit of the forest that can shapeshift, turn invisible, and wield magic to disorient or harm those who disrespect it.[1][2][4] Once harmonious with humans, it turned hostile due to betrayal or jealousy, now luring victims into danger or attacking with arrows and spears.[1][3][4] [TRANSLATION NEEDED]",
      alias: "Puk-Wudjie, Bokwjimen, Puck-wudj-ininee, Bagwajinini, Bogwejimenak [TRANSLATION NEEDED]",
      address: "Northeastern United States, Great Lakes region, Massachusetts, Indiana, Delaware, southeastern Canada[1][2][4] [TRANSLATION NEEDED]",
      knownAssociates: "Enemies of Maushop the giant and Granny Squannit[3][4] [TRANSLATION NEEDED]",
      region: "Northeastern United States, Great Lakes region, Massachusetts, Indiana, Delaware, southeastern Canada[1][2][4] [TRANSLATION NEEDED]",
      type: "Humanoid trickster spirit [TRANSLATION NEEDED]",
      firstSighting: "Approximately 9,000 years ago in Wampanoag oral traditions[1] [TRANSLATION NEEDED]",
    },
    "babayaga-file": {
      title: "Le Dossier Babayaga",
      name: "Babayaga",
      imageAlt: "Photo signalétique de Babayaga",
      description: "Babayaga is a fearsome witch from Slavic folklore, known for residing in a hut that stands on chicken legs deep in the forest, surrounded by a fence of human bones.[1][2][3] She travels by flying in a giant mortar propelled by a pestle, sometimes sweeping her tracks with a broom, and is both a cannibalistic devourer of children and an enigmatic helper to worthy heroes.[1][3][4] Her dual nature makes her a harbinger of transformation, rewarding the clever while punishing trespassers who fail her impossible tasks.[1][5] [TRANSLATION NEEDED]",
      alias: "Baba Yaga, Iagaia Baba [TRANSLATION NEEDED]",
      address: "Eastern European forests, particularly Russia and Slavic regions [TRANSLATION NEEDED]",
      
      region: "Eastern European forests, particularly Russia and Slavic regions [TRANSLATION NEEDED]",
      type: "Witch [TRANSLATION NEEDED]",
      firstSighting: "Mid-18th century (legends dating back to medieval period) [TRANSLATION NEEDED]",
    },
    "yeti-file": {
      title: "Le Dossier Yeti",
      name: "Yeti",
      imageAlt: "Photo signalétique de Yeti",
      description: "The Yeti is a large, bipedal ape-like creature covered in shaggy fur, typically described as standing 6 to 10 feet tall with immense strength and adaptability to extreme Himalayan cold.[1][5] Known locally as Meh-Teh by the Sherpa people, it is elusive, stealthy, and capable of navigating treacherous snowy terrain while evading detection.[1][4] Folklore portrays it as potentially aggressive, with reports of attacks on humans and livestock, though concrete evidence remains elusive.[2] [TRANSLATION NEEDED]",
      alias: "Abominable Snowman, Meh-Teh, Nyalmo, Chuti, Rang Shim Bombo [TRANSLATION NEEDED]",
      address: "Himalaya region of Nepal and Tibet [TRANSLATION NEEDED]",
      
      region: "Himalaya region of Nepal and Tibet [TRANSLATION NEEDED]",
      type: "Hominid [TRANSLATION NEEDED]",
      firstSighting: "1921 (Lt. Col. Charles Howard-Bury expedition) [TRANSLATION NEEDED]",
    },
    "flatwoods-monster-file": {
      title: "Le Dossier Flatwoods Monster",
      name: "Flatwoods Monster",
      imageAlt: "Photo signalétique de Flatwoods Monster",
      description: "An alleged extraterrestrial or cryptid sighted in Flatwoods, West Virginia. Described as a tall humanoid figure with a spade-shaped head, glowing eyes, and a dark body. Associated with a UFO sighting and strange odors. [TRANSLATION NEEDED]",
      alias: "Braxton County Monster, Phantom of Flatwoods [TRANSLATION NEEDED]",
      address: "West Virginia, USA [TRANSLATION NEEDED]",
      knownAssociates: "UFO Witnesses, Local Residents [TRANSLATION NEEDED]",
      region: "West Virginia, USA [TRANSLATION NEEDED]",
      type: "Alien Humanoid [TRANSLATION NEEDED]",
      firstSighting: "September 12, 1952 [TRANSLATION NEEDED]",
    },
    "jersey-devil-file": {
      title: "Le Dossier Jersey Devil",
      name: "Jersey Devil",
      imageAlt: "Photo signalétique de Jersey Devil",
      description: "A legendary creature said to inhabit the Pine Barrens of New Jersey. Described as having the head of a horse, wings of a bat, hooves, and a forked tail. Known for its blood-curdling scream and association with the Leeds family. [TRANSLATION NEEDED]",
      alias: "Leeds Devil, Pine Barrens Devil [TRANSLATION NEEDED]",
      address: "New Jersey, USA [TRANSLATION NEEDED]",
      knownAssociates: "The Leeds Family, Pine Barrens Locals [TRANSLATION NEEDED]",
      region: "New Jersey, USA [TRANSLATION NEEDED]",
      type: "Winged Creature [TRANSLATION NEEDED]",
      firstSighting: "1735 [TRANSLATION NEEDED]",
    },

  },
};

/**
 * Get a translated version of a cryptid file
 */
export function getTranslatedCryptidFile(cryptid: CryptidFile, locale: Locale): CryptidFile {
  const translations = cryptidTranslations[locale][cryptid.slug];
  
  if (!translations) {
    // Return original if no translation exists
    return cryptid;
  }
  
  return {
    ...cryptid,
    title: translations.title,
    name: translations.name,
    imageAlt: translations.imageAlt,
    description: translations.description,
    alias: translations.alias,
    address: translations.address,
    knownAssociates: translations.knownAssociates,
    region: translations.region,
    type: translations.type,
    firstSighting: translations.firstSighting,
  };
}

