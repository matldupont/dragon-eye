export type Locale = 'en' | 'fr';

export interface Translations {
  nav: {
    files: string;
    merch: string;
    contact: string;
  };
  home: {
    topSecret: string;
    title: string;
    welcome: string;
    exploreFiles: string;
    cryptidOfTheMonth: string;
    featuredFile: string;
    caseFile: string;
    firstSeen: string;
    location: string;
    viewFullFile: string;
    latestFiles: string;
    viewAllFiles: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
  };
  merch: {
    evidenceLocker: string;
    title: string;
    description: string;
    allItems: string;
    dragonEyeAgency: string;
    cryptidCollection: string;
    comingSoon: string;
    comingSoonDescription: string;
  };
  files: {
    classifiedDatabase: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    filters: string;
    region: string;
    danger: string;
    allRegions: string;
    allLevels: string;
    filesFound: string;
    noFilesMatch: string;
    tryAdjusting: string;
  };
  cryptidCard: {
    file: string;
    region: string;
    type: string;
    openFile: string;
  };
  fileDetails: {
    caseNumber: string;
    alias: string;
    knownAssociates: string;
    codename: string;
    region: string;
    type: string;
    dangerLevel: string;
    firstSighting: string;
    description: string;
    backToFiles: string;
    photographicEvidence: string;
    dossierInformation: string;
    location: string;
    status: string;
    investigatorCaseNotes: string;
    relatedFiles: string;
  };
  dangerLevels: {
    low: string;
    medium: string;
    high: string;
    unknown: string;
    label: string;
  };
  statusLabels: {
    sighted: string;
    underInvestigation: string;
    confirmed: string;
    myth: string;
  };
  product: {
    addToCart: string;
    closeModal: string;
    tshirt: {
      title: string;
      description: string;
    };
    cap: {
      title: string;
      description: string;
    };
    detectiveKit: {
      title: string;
      description: string;
    };
    badge: {
      title: string;
      description: string;
    };
    stickerPack: {
      title: string;
      description: string;
    };
    sweatpants: {
      title: string;
      description: string;
    };
    plushies: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      files: 'Files',
      merch: 'Merch',
      contact: 'Contact',
    },
    home: {
      topSecret: 'TOP SECRET CLEARANCE REQUIRED',
      title: 'Dragon Eye: Cryptid Investigation Files',
      welcome: "Welcome to the Dragon Eye Agency! We're a team of kid-friendly cryptid investigators uncovering mysteries across the world. Browse our files, learn about legendary creatures, and join our mission to discover the unknown!",
      exploreFiles: 'EXPLORE THE FILES',
      cryptidOfTheMonth: 'CRYPTID OF THE MONTH',
      featuredFile: '★ FEATURED FILE: CRYPTID OF THE MONTH ★',
      caseFile: 'CASE FILE:',
      firstSeen: 'FIRST SEEN:',
      location: 'LOCATION:',
      viewFullFile: 'VIEW FULL FILE →',
      latestFiles: 'Latest Files',
      viewAllFiles: 'VIEW ALL FILES →',
    },
    about: {
      title: 'About',
      description1: "Dragon Eye is a kid friendly club, rated 8 to 13. We snoop around town and look for clues during school hours on Mondays and Wednesdays.",
      description2: "Strategy meetings are held every Monday and Wednesday morning, and are exclusive to Dragon Eye members.",
      description3: "We meet at the Dragon Eye HQ, which is located in the heart of the city.",
    },
    merch: {
      evidenceLocker: 'AGENCY EVIDENCE LOCKER',
      title: 'Agency Evidence Locker',
      description: 'Get official Dragon Eye gear and cryptid collectibles! All proceeds support our ongoing investigations. Items coming soon!',
      allItems: 'ALL ITEMS',
      dragonEyeAgency: 'DRAGON EYE AGENCY',
      cryptidCollection: 'CRYPTID COLLECTION',
      comingSoon: 'COMING SOON!',
      comingSoonDescription: 'Our merchandise shop is currently under construction. Check back soon to grab your favorite cryptid gear! Follow us on social media for launch updates.',
    },
    files: {
      classifiedDatabase: 'CLASSIFIED DATABASE',
      title: 'Cryptid Files',
      description: 'Browse our complete archive of cryptid investigations. Use the search and filters below to find specific cases.',
      searchPlaceholder: 'Search by name, codename, or region...',
      filters: 'FILTERS:',
      region: 'Region:',
      danger: 'Danger:',
      allRegions: 'All Regions',
      allLevels: 'All Levels',
      filesFound: 'FILES FOUND',
      noFilesMatch: 'NO FILES MATCH YOUR SEARCH',
      tryAdjusting: 'Try adjusting your filters or search terms',
    },
    cryptidCard: {
      file: 'FILE:',
      region: 'REGION:',
      type: 'TYPE:',
      openFile: 'OPEN FILE →',
    },
    fileDetails: {
      caseNumber: 'CASE NUMBER:',
      alias: 'ALIAS:',
      knownAssociates: 'KNOWN ASSOCIATES:',
      codename: 'CODENAME:',
      region: 'REGION:',
      type: 'TYPE:',
      dangerLevel: 'DANGER LEVEL:',
      firstSighting: 'FIRST SIGHTING:',
      description: 'DESCRIPTION:',
      backToFiles: '← BACK TO FILES',
      photographicEvidence: 'PHOTOGRAPHIC EVIDENCE',
      dossierInformation: 'DOSSIER INFORMATION',
      location: 'LOCATION',
      status: 'STATUS',
      investigatorCaseNotes: 'INVESTIGATOR CASE NOTES',
      relatedFiles: 'Related Files',
    },
    dangerLevels: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      unknown: 'Unknown',
      label: 'DANGER:',
    },
    statusLabels: {
      sighted: 'Sighted',
      underInvestigation: 'Under Investigation',
      confirmed: 'Confirmed',
      myth: 'Myth',
    },
    product: {
      addToCart: 'ADD TO CART',
      closeModal: 'Close modal',
      tshirt: {
        title: 'Dragon Eye T-Shirt',
        description: 'Show your Dragon Eye pride with our official club t-shirt. Two styles available.',
      },
      cap: {
        title: 'Dragon Eye Cap',
        description: 'Stay cool while on the hunt for clues with our stylish cap.',
      },
      detectiveKit: {
        title: 'Junior Detective Kit',
        description: 'Everything you need to start your detective journey, including a magnifying glass.',
      },
      badge: {
        title: 'Dragon Eye Badge',
        description: 'Official member badge - show that you\'re part of the Dragon Eye detective club.',
      },
      stickerPack: {
        title: 'Sticker Pack',
        description: 'Decorate your notebooks and gear with these cool Dragon Eye stickers.',
      },
      sweatpants: {
        title: 'Dragon Eye Sweatpants',
        description: 'Stay comfortable during stakeouts and detective work with our cozy sweatpants.',
      },
      plushies: {
        title: 'Dragon Eye Plushies',
        description: 'Collect all three cryptid plushies: Big Foot, Dragon, and Loch Ness Monster. Perfect companions for your detective adventures.',
      },
    },
  },
  fr: {
    nav: {
      files: 'Dossiers',
      merch: 'Marchandise',
      contact: 'Contact',
    },
    home: {
      topSecret: 'AUTORISATION TOP SECRET REQUISE',
      title: 'Dragon Eye: Dossiers d\'Enquête sur les Créatures Cryptides',
      welcome: 'Bienvenue à l\'Agence Dragon Eye! Nous sommes une équipe d\'enquêteurs de créatures cryptides adaptés aux enfants qui découvrent des mystères à travers le monde. Parcourez nos dossiers, apprenez-en sur les créatures légendaires et rejoignez notre mission pour découvrir l\'inconnu!',
      exploreFiles: 'EXPLORER LES DOSSIERS',
      cryptidOfTheMonth: 'CRÉATURE DU MOIS',
      featuredFile: '★ DOSSIER EN VEDETTE: CRÉATURE DU MOIS ★',
      caseFile: 'DOSSIER:',
      firstSeen: 'PREMIÈRE OBSERVATION:',
      location: 'LIEU:',
      viewFullFile: 'VOIR LE DOSSIER COMPLET →',
      latestFiles: 'Derniers Dossiers',
      viewAllFiles: 'VOIR TOUS LES DOSSIERS →',
    },
    about: {
      title: 'À propos',
      description1: 'Dragon Eye est un club adapté aux enfants, classé de 8 à 13 ans. Nous fouinons en ville et cherchons des indices pendant les heures d\'école les lundis et mercredis.',
      description2: 'Les réunions de stratégie ont lieu tous les lundis et mercredis matin, et sont exclusives aux membres de Dragon Eye.',
      description3: 'Nous nous rencontrons au QG de Dragon Eye, qui est situé au cœur de la ville.',
    },
    merch: {
      evidenceLocker: 'DÉPÔT DE PREUVES DE L\'AGENCE',
      title: 'Dépôt de Preuves de l\'Agence',
      description: 'Obtenez des articles officiels Dragon Eye et des objets de collection de créatures cryptides! Tous les profits soutiennent nos enquêtes en cours. Articles à venir bientôt!',
      allItems: 'TOUS LES ARTICLES',
      dragonEyeAgency: 'AGENCE DRAGON EYE',
      cryptidCollection: 'COLLECTION CRYPTIDE',
      comingSoon: 'BIENTÔT DISPONIBLE!',
      comingSoonDescription: 'Notre boutique de marchandises est actuellement en construction. Revenez bientôt pour obtenir votre équipement de créature cryptide préféré! Suivez-nous sur les réseaux sociaux pour les mises à jour de lancement.',
    },
    files: {
      classifiedDatabase: 'BASE DE DONNÉES CLASSIFIÉE',
      title: 'Dossiers de Créatures Cryptides',
      description: 'Parcourez nos archives complètes d\'enquêtes sur les créatures cryptides. Utilisez la recherche et les filtres ci-dessous pour trouver des cas spécifiques.',
      searchPlaceholder: 'Rechercher par nom, nom de code ou région...',
      filters: 'FILTRES:',
      region: 'Région:',
      danger: 'Danger:',
      allRegions: 'Toutes les Régions',
      allLevels: 'Tous les Niveaux',
      filesFound: 'DOSSIERS TROUVÉS',
      noFilesMatch: 'AUCUN DOSSIER NE CORRESPOND À VOTRE RECHERCHE',
      tryAdjusting: 'Essayez d\'ajuster vos filtres ou termes de recherche',
    },
    cryptidCard: {
      file: 'DOSSIER:',
      region: 'RÉGION:',
      type: 'TYPE:',
      openFile: 'OUVRIR LE DOSSIER →',
    },
    fileDetails: {
      caseNumber: 'NUMÉRO DE DOSSIER:',
      alias: 'ALIAS:',
      knownAssociates: 'ASSOCIÉS CONNUS:',
      codename: 'NOM DE CODE:',
      region: 'RÉGION:',
      type: 'TYPE:',
      dangerLevel: 'NIVEAU DE DANGER:',
      firstSighting: 'PREMIÈRE OBSERVATION:',
      description: 'DESCRIPTION:',
      backToFiles: '← RETOUR AUX DOSSIERS',
      photographicEvidence: 'PREUVE PHOTOGRAPHIQUE',
      dossierInformation: 'INFORMATIONS DU DOSSIER',
      location: 'LIEU',
      status: 'STATUT',
      investigatorCaseNotes: 'NOTES DE CAS DE L\'ENQUÊTEUR',
      relatedFiles: 'Dossiers Connexes',
    },
    dangerLevels: {
      low: 'Faible',
      medium: 'Moyen',
      high: 'Élevé',
      unknown: 'Inconnu',
      label: 'DANGER:',
    },
    statusLabels: {
      sighted: 'Observé',
      underInvestigation: 'Sous Enquête',
      confirmed: 'Confirmé',
      myth: 'Mythe',
    },
    product: {
      addToCart: 'AJOUTER AU PANIER',
      closeModal: 'Fermer la fenêtre',
      tshirt: {
        title: 'T-Shirt Dragon Eye',
        description: 'Montrez votre fierté Dragon Eye avec notre t-shirt officiel du club. Deux styles disponibles.',
      },
      cap: {
        title: 'Casquette Dragon Eye',
        description: 'Restez au frais pendant la chasse aux indices avec notre casquette élégante.',
      },
      detectiveKit: {
        title: 'Kit de Détective Junior',
        description: 'Tout ce dont vous avez besoin pour commencer votre parcours de détective, y compris une loupe.',
      },
      badge: {
        title: 'Badge Dragon Eye',
        description: 'Badge de membre officiel - montrez que vous faites partie du club de détectives Dragon Eye.',
      },
      stickerPack: {
        title: 'Pack d\'Autocollants',
        description: 'Décorez vos cahiers et votre équipement avec ces autocollants Dragon Eye cool.',
      },
      sweatpants: {
        title: 'Pantalon de Survêtement Dragon Eye',
        description: 'Restez à l\'aise pendant les filatures et le travail de détective avec notre pantalon de survêtement confortable.',
      },
      plushies: {
        title: 'Peluches Dragon Eye',
        description: 'Collectionnez les trois peluches de créatures cryptides : Big Foot, Dragon et Monstre du Loch Ness. Compagnons parfaits pour vos aventures de détective.',
      },
    },
  },
};

