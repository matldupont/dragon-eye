export type Locale = "en" | "fr";

type DangerKey = "low" | "medium" | "high" | "unknown";
type StatusKey = "underInvestigation" | "sighted" | "confirmed" | "myth";

interface ProductCopy {
  title: string;
  description: string;
}

export interface Translations {
  meta: { siteTitle: string; description: string };
  nav: { label: string; home: string; files: string; about: string; merch: string; skipToContent: string };
  classifiedBar: string[];
  hero: {
    dossierNo: string;
    filed: string;
    clearance: string;
    title: [string, string, string];
    lede: string;
    aliasSuffix: string;
    openDossier: string;
    browseFiles: string;
    caseTab: string;
    stampTopSecret: string;
    stampEyesOnly: string;
    subject: string;
    location: string;
    firstSeen: string;
  };
  home: { latestEyebrow: string; latestTitle: string; browseAll: string };
  files: {
    pageTitle: string;
    eyebrow: string;
    title: string;
    lede: string;
    searchLabel: string;
    searchPlaceholder: string;
    regionLabel: string;
    dangerLabel: string;
    allRegions: string;
    allLevels: string;
    resultsCount: string;
    noResults: string;
    noResultsHint: string;
  };
  card: { caseFile: string; location: string };
  file: {
    back: string;
    dossierNo: string;
    clearance: string;
    clearanceLevel: string;
    exhibit: string;
    photoAlt: string;
    codename: string;
    type: string;
    region: string;
    location: string;
    firstSighting: string;
    alias: string;
    associates: string;
    caseNotes: string;
    relatedTitle: string;
  };
  dangerLevels: Record<DangerKey, string> & { label: string };
  statusLabels: Record<StatusKey, string>;
  about: { eyebrow: string; title: string; paragraphs: string[] };
  footer: { copyright: string; activeCases: string };
  notFound: { title: string; message: string; back: string };
  merch: {
    pageTitle: string;
    eyebrow: string;
    title: string;
    description: string;
    filterLabel: string;
    allItems: string;
    dragonEyeAgency: string;
    cryptidCollection: string;
    comingSoon: string;
    comingSoonDescription: string;
    evidenceTag: string;
  };
  product: {
    closePhoto: string;
    viewLarger: string;
    photoOptions: string;
    photoOption: string;
    tshirt: ProductCopy;
    cap: ProductCopy;
    detectiveKit: ProductCopy;
    badge: ProductCopy;
    stickerPack: ProductCopy;
    sweatpants: ProductCopy;
    plushies: ProductCopy;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      siteTitle: "Dragon Eye",
      description: "Classified case files on legendary creatures, kept by the kid investigators of the Dragon Eye Agency.",
    },
    nav: {
      label: "Main",
      home: "Dragon Eye home",
      files: "Files",
      about: "About",
      merch: "Evidence Locker",
      skipToContent: "Skip to content",
    },
    classifiedBar: [
      "★ Classified intel ★ Unidentified creatures reported worldwide",
      "★ Top secret ★ Dragon Eye Agency investigation in progress",
      "★ Alert ★ Unusual activity detected — remain vigilant",
      "★ Restricted ★ Level 5 clearance required",
      "★ Breaking ★ New cryptid sightings logged in the database",
    ],
    hero: {
      dossierNo: "Dossier №",
      filed: "Filed",
      clearance: "Clearance // LVL 5",
      title: ["Cryptid", "of the", "month."],
      lede: "{count} active investigations. One creature selected for deep file review. This month the Dragon Eye Agency turns its glass on",
      aliasSuffix: " — also known as {alias}.",
      openDossier: "Open dossier",
      browseFiles: "Browse all files",
      caseTab: "Case",
      stampTopSecret: "Top secret",
      stampEyesOnly: "Eyes only",
      subject: "Subject",
      location: "Location",
      firstSeen: "First seen",
    },
    home: {
      latestEyebrow: "Case archive",
      latestTitle: "Latest files",
      browseAll: "Browse all {count} files",
    },
    files: {
      pageTitle: "Case files",
      eyebrow: "Case archive",
      title: "Classified database",
      lede: "{count} subjects. Browse by region or threat level. Clearance checks apply.",
      searchLabel: "Search the files",
      searchPlaceholder: "Subject, codename, region…",
      regionLabel: "Region",
      dangerLabel: "Threat level",
      allRegions: "All regions",
      allLevels: "All threat levels",
      resultsCount: "{shown} / {total} files found",
      noResults: "No records match your query.",
      noResultsHint: "Try another name or clear the filters.",
    },
    card: {
      caseFile: "Case file",
      location: "Loc",
    },
    file: {
      back: "← Back to the archive",
      dossierNo: "Dossier №",
      clearance: "Clearance",
      clearanceLevel: "LVL 5",
      exhibit: "Photographic evidence · Exhibit A",
      photoAlt: "Evidence photo of {name}",
      codename: "Codename",
      type: "Type",
      region: "Region",
      location: "Location",
      firstSighting: "First sighting",
      alias: "Alias",
      associates: "Known associates",
      caseNotes: "Investigator case notes",
      relatedTitle: "Related files",
    },
    dangerLevels: {
      low: "Low",
      medium: "Medium",
      high: "High",
      unknown: "Unknown",
      label: "Danger level",
    },
    statusLabels: {
      underInvestigation: "Under investigation",
      sighted: "Sighted",
      confirmed: "Confirmed",
      myth: "Myth",
    },
    about: {
      eyebrow: "Who we are",
      title: "About Dragon Eye",
      paragraphs: [
        "Dragon Eye is a kid-friendly agency for ages 8 to 13. We snoop around town and look for clues during school hours on Mondays and Wednesdays.",
        "Strategy meetings happen every Monday and Wednesday morning, and they are for Dragon Eye members only.",
        "We meet at Dragon Eye HQ, in the heart of the city. The exact address is classified.",
      ],
    },
    footer: {
      copyright: "© {year} Dragon Eye Agency · All files classified",
      activeCases: "{count} active cases · Last updated {date}",
    },
    notFound: {
      title: "File not found",
      message: "This file has been redacted, misplaced, or never existed.",
      back: "Back to the archive",
    },
    merch: {
      pageTitle: "Evidence Locker",
      eyebrow: "Agency evidence locker",
      title: "Evidence locker",
      description: "Get official Dragon Eye gear and cryptid collectibles! All proceeds support our ongoing investigations.",
      filterLabel: "Filter items",
      allItems: "All items",
      dragonEyeAgency: "Dragon Eye Agency",
      cryptidCollection: "Cryptid collection",
      comingSoon: "Coming soon",
      comingSoonDescription: "Our merchandise shop is currently under construction. Check back soon to grab your favorite cryptid gear!",
      evidenceTag: "Evidence №",
    },
    product: {
      closePhoto: "Close photo",
      viewLarger: "View a larger photo of {name}",
      photoOptions: "Photo options",
      photoOption: "Photo {n}",
      tshirt: {
        title: "Dragon Eye T-Shirt",
        description: "Show your Dragon Eye pride with our official club t-shirt. Two styles available.",
      },
      cap: {
        title: "Dragon Eye Cap",
        description: "Stay cool while on the hunt for clues with our stylish cap.",
      },
      detectiveKit: {
        title: "Junior Detective Kit",
        description: "Everything you need to start your detective journey, including a magnifying glass.",
      },
      badge: {
        title: "Dragon Eye Badge",
        description: "Official member badge - show that you're part of the Dragon Eye detective club.",
      },
      stickerPack: {
        title: "Sticker Pack",
        description: "Decorate your notebooks and gear with these cool Dragon Eye stickers.",
      },
      sweatpants: {
        title: "Dragon Eye Sweatpants",
        description: "Stay comfortable during stakeouts and detective work with our cozy sweatpants.",
      },
      plushies: {
        title: "Dragon Eye Plushies",
        description: "Collect all three cryptid plushies: Big Foot, Dragon, and Loch Ness Monster. Perfect companions for your detective adventures.",
      },
    },
  },
  fr: {
    meta: {
      siteTitle: "Dragon Eye",
      description: "Les dossiers classifiés des créatures légendaires, tenus par les jeunes enquêteurs de l'Agence Dragon Eye.",
    },
    nav: {
      label: "Principal",
      home: "Accueil Dragon Eye",
      files: "Dossiers",
      about: "À propos",
      merch: "Dépôt de preuves",
      skipToContent: "Aller au contenu",
    },
    classifiedBar: [
      "★ Intel classifié ★ Créatures non identifiées signalées dans le monde entier",
      "★ Très secret ★ Enquête de l'Agence Dragon Eye en cours",
      "★ Alerte ★ Activité inhabituelle détectée — restez vigilants",
      "★ Accès restreint ★ Autorisation de niveau 5 requise",
      "★ Urgent ★ Nouvelles observations de cryptides enregistrées",
    ],
    hero: {
      dossierNo: "Dossier №",
      filed: "Classé le",
      clearance: "Autorisation // niv. 5",
      title: ["Créature", "du", "mois."],
      lede: "{count} enquêtes actives. Une créature sélectionnée pour un examen approfondi. Ce mois-ci, l'Agence Dragon Eye braque sa loupe sur",
      aliasSuffix: " — alias {alias}.",
      openDossier: "Ouvrir le dossier",
      browseFiles: "Voir tous les dossiers",
      caseTab: "Dossier",
      stampTopSecret: "Très secret",
      stampEyesOnly: "Confidentiel",
      subject: "Sujet",
      location: "Lieu",
      firstSeen: "Première observation",
    },
    home: {
      latestEyebrow: "Archives",
      latestTitle: "Derniers dossiers",
      browseAll: "Voir les {count} dossiers",
    },
    files: {
      pageTitle: "Dossiers",
      eyebrow: "Archives",
      title: "Base de données classifiée",
      lede: "{count} sujets. Filtrez par région ou par niveau de menace. Vérification d'autorisation en vigueur.",
      searchLabel: "Rechercher dans les dossiers",
      searchPlaceholder: "Sujet, nom de code, région…",
      regionLabel: "Région",
      dangerLabel: "Niveau de menace",
      allRegions: "Toutes les régions",
      allLevels: "Tous les niveaux de menace",
      resultsCount: "{shown} / {total} dossiers trouvés",
      noResults: "Aucun dossier ne correspond à votre recherche.",
      noResultsHint: "Essayez un autre nom ou retirez les filtres.",
    },
    card: {
      caseFile: "Dossier",
      location: "Lieu",
    },
    file: {
      back: "← Retour aux archives",
      dossierNo: "Dossier №",
      clearance: "Autorisation",
      clearanceLevel: "Niv. 5",
      exhibit: "Preuve photographique · Pièce A",
      photoAlt: "Photo de preuve : {name}",
      codename: "Nom de code",
      type: "Type",
      region: "Région",
      location: "Lieu",
      firstSighting: "Première observation",
      alias: "Alias",
      associates: "Associés connus",
      caseNotes: "Notes de l'enquêteur",
      relatedTitle: "Dossiers liés",
    },
    dangerLevels: {
      low: "Faible",
      medium: "Moyen",
      high: "Élevé",
      unknown: "Inconnu",
      label: "Niveau de danger",
    },
    statusLabels: {
      underInvestigation: "Sous enquête",
      sighted: "Observé",
      confirmed: "Confirmé",
      myth: "Mythe",
    },
    about: {
      eyebrow: "Qui sommes-nous",
      title: "À propos de Dragon Eye",
      paragraphs: [
        "Dragon Eye est une agence pour les jeunes de 8 à 13 ans. Nous fouinons en ville à la recherche d'indices pendant les heures d'école, les lundis et les mercredis.",
        "Les réunions de stratégie ont lieu tous les lundis et mercredis matin, et sont réservées aux membres de Dragon Eye.",
        "Nous nous retrouvons au QG de Dragon Eye, au cœur de la ville. L'adresse exacte est classifiée.",
      ],
    },
    footer: {
      copyright: "© {year} Agence Dragon Eye · Tous les dossiers sont classifiés",
      activeCases: "{count} dossiers actifs · Mis à jour le {date}",
    },
    notFound: {
      title: "Dossier introuvable",
      message: "Ce dossier a été caviardé, égaré, ou n'a jamais existé.",
      back: "Retour aux archives",
    },
    merch: {
      pageTitle: "Dépôt de preuves",
      eyebrow: "Dépôt de preuves de l'agence",
      title: "Dépôt de preuves",
      description: "Obtenez des articles officiels Dragon Eye et des objets de collection cryptides! Tous les profits soutiennent nos enquêtes en cours.",
      filterLabel: "Filtrer les articles",
      allItems: "Tous les articles",
      dragonEyeAgency: "Agence Dragon Eye",
      cryptidCollection: "Collection cryptide",
      comingSoon: "Bientôt disponible",
      comingSoonDescription: "Notre boutique est en construction. Revenez bientôt pour obtenir votre équipement cryptide préféré!",
      evidenceTag: "Preuve №",
    },
    product: {
      closePhoto: "Fermer la photo",
      viewLarger: "Agrandir la photo : {name}",
      photoOptions: "Choix de photo",
      photoOption: "Photo {n}",
      tshirt: {
        title: "T-Shirt Dragon Eye",
        description: "Montrez votre fierté Dragon Eye avec notre t-shirt officiel du club. Deux styles disponibles.",
      },
      cap: {
        title: "Casquette Dragon Eye",
        description: "Restez au frais pendant la chasse aux indices avec notre casquette élégante.",
      },
      detectiveKit: {
        title: "Kit de détective junior",
        description: "Tout ce dont vous avez besoin pour commencer votre parcours de détective, y compris une loupe.",
      },
      badge: {
        title: "Badge Dragon Eye",
        description: "Badge de membre officiel : montrez que vous faites partie du club de détectives Dragon Eye.",
      },
      stickerPack: {
        title: "Pack d'autocollants",
        description: "Décorez vos cahiers et votre équipement avec ces autocollants Dragon Eye.",
      },
      sweatpants: {
        title: "Pantalon de survêtement Dragon Eye",
        description: "Restez à l'aise pendant les filatures et le travail de détective avec notre pantalon de survêtement confortable.",
      },
      plushies: {
        title: "Peluches Dragon Eye",
        description: "Collectionnez les trois peluches cryptides : Big Foot, Dragon et Monstre du Loch Ness. Des compagnons parfaits pour vos aventures de détective.",
      },
    },
  },
};
