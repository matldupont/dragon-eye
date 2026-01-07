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

