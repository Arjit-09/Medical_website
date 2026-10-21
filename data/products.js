/**
 * Care & Cure Pharmaceuticals - Product Database
 * Authentic product catalogue fetched directly from https://careandcurepharma.com
 * Total products: 62
 */

export const CATALOG_CATEGORIES = [
  "Pain Relief",
  "Antibiotics",
  "Body Building & Wellness",
  "ED Medication",
  "Smart Pills",
  "Sleep Aids",
  "General Pharmaceutical"
];

export const CATEGORY_ICONS = {
  "Antibiotics": "💊",
  "ED Medication": "⚡",
  "Body Building & Wellness": "💪",
  "Pain Relief": "🛡️",
  "Sleep Aids": "🌙",
  "Smart Pills": "🧠",
  "General Pharmaceutical": "🧪"
};

export const CATEGORY_COLORS = {
  "Antibiotics": { bg: "#e0f2fe", color: "#0369a1", border: "rgba(3,105,161,0.2)" },
  "ED Medication": { bg: "#fef3c7", color: "#b45309", border: "rgba(180,83,9,0.2)" },
  "Body Building & Wellness": { bg: "#ecfdf5", color: "#047857", border: "rgba(4,120,87,0.2)" },
  "Pain Relief": { bg: "#fee2e2", color: "#b91c1c", border: "rgba(185,28,28,0.2)" },
  "Sleep Aids": { bg: "#ede9fe", color: "#6d28d9", border: "rgba(109,40,217,0.2)" },
  "Smart Pills": { bg: "#fce7f3", color: "#be185d", border: "rgba(190,24,93,0.2)" },
  "General Pharmaceutical": { bg: "#f1f5f9", color: "#475569", border: "rgba(71,85,105,0.2)" }
};

export const PRODUCTS = [
  {
    "id": "tramadol",
    "slug": "tramadol",
    "name": "Tramadol",
    "category": "Pain Relief",
    "priceUSD": 280,
    "priceINR": 23240,
    "price": 23240,
    "formattedPrice": "$280.00",
    "unit": "100 / 90",
    "dosage": "Standard",
    "description": "Tramadol is an opioid pain medication prescribed to manage moderate to moderately severe pain. It changes how your brain and nervous system respond to pain",
    "images": [
      "/products/tramadol-1.webp",
      "/products/tramadol-2.webp"
    ],
    "image": "/products/tramadol-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/tramadol.jpg?v=1782645106",
    "variants": [
      {
        "title": "100 / 90",
        "priceUSD": 280,
        "priceINR": 23240
      },
      {
        "title": "100 / 180",
        "priceUSD": 530,
        "priceINR": 43990
      },
      {
        "title": "100 / 360",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "100 / 540",
        "priceUSD": 881,
        "priceINR": 73123
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "clonazepam-2-mg",
    "slug": "clonazepam-2-mg",
    "name": "Clonazepam - 2 MG",
    "category": "Pain Relief",
    "priceUSD": 440,
    "priceINR": 36520,
    "price": 36520,
    "formattedPrice": "$440.00",
    "unit": "90",
    "dosage": "2 MG",
    "description": "Clonazepam (commonly sold under the brand name Klonopin) is a prescription benzodiazepine used to prevent and control seizures, treat panic disorders, and manage severe anxiety. It works by enhancing the calming effects of the neurotransmitter GABA in the brain",
    "images": [
      "/products/clonazepam-2-mg-1.webp"
    ],
    "image": "/products/clonazepam-2-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/CL2.webp?v=1782599210",
    "variants": [
      {
        "title": "90",
        "priceUSD": 440,
        "priceINR": 36520
      },
      {
        "title": "180",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "360",
        "priceUSD": 963,
        "priceINR": 79929
      },
      {
        "title": "540",
        "priceUSD": 1520,
        "priceINR": 126160
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "ativan-2-mg",
    "slug": "ativan-2-mg",
    "name": "ATIVAN - 2 MG",
    "category": "Pain Relief",
    "priceUSD": 350,
    "priceINR": 29050,
    "price": 29050,
    "formattedPrice": "$350.00",
    "unit": "90",
    "dosage": "2 MG",
    "description": "Ativan is the brand name for lorazepam, a prescription medication belonging to the benzodiazepine class. It works by enhancing the effects of a calming neurotransmitter in the brain (GABA), producing sedative, anti-anxiety, and anticonvulsant effects",
    "images": [
      "/products/ativan-2-mg-1.webp"
    ],
    "image": "/products/ativan-2-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/ATIVAN_2.jpg?v=1782646181",
    "variants": [
      {
        "title": "90",
        "priceUSD": 350,
        "priceINR": 29050
      },
      {
        "title": "180",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "360",
        "priceUSD": 881,
        "priceINR": 73123
      },
      {
        "title": "540",
        "priceUSD": 1340,
        "priceINR": 111220
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "xanax-1-mg",
    "slug": "xanax-1-mg",
    "name": "XANAX",
    "category": "Pain Relief",
    "priceUSD": 530,
    "priceINR": 43990,
    "price": 43990,
    "formattedPrice": "$530.00",
    "unit": "1 MG / 90",
    "dosage": "Standard",
    "description": "Xanax (alprazolam) 1 mg is a prescription-only benzodiazepine used to treat anxiety and panic disorders. It is highly potent, works quickly by calming the central nervous system, and carries significant risks of addiction, misuse, and withdrawal if not taken exactly as directed",
    "images": [
      "/products/xanax-1-mg-1.webp",
      "/products/xanax-1-mg-2.webp"
    ],
    "image": "/products/xanax-1-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/XANAX1.png?v=1782599133",
    "variants": [
      {
        "title": "1 MG / 90",
        "priceUSD": 530,
        "priceINR": 43990
      },
      {
        "title": "1 MG / 180",
        "priceUSD": 1020,
        "priceINR": 84660
      },
      {
        "title": "1 MG / 360",
        "priceUSD": 1610,
        "priceINR": 133630
      },
      {
        "title": "1 MG / 540",
        "priceUSD": 2400,
        "priceINR": 199200
      },
      {
        "title": "2 MG / 90",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "2 MG / 180",
        "priceUSD": 880,
        "priceINR": 73040
      },
      {
        "title": "2 MG / 360",
        "priceUSD": 1300,
        "priceINR": 107900
      },
      {
        "title": "2 MG / 540",
        "priceUSD": 2800,
        "priceINR": 232400
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "valium-10-mg",
    "slug": "valium-10-mg",
    "name": "VALIUM -  10 MG",
    "category": "Pain Relief",
    "priceUSD": 620,
    "priceINR": 51460,
    "price": 51460,
    "formattedPrice": "$620.00",
    "unit": "90",
    "dosage": "10 MG",
    "description": "Valium 10 From Martin Dow Brand of Diazepam is a prescription benzodiazepine used to treat short-term anxiety, acute alcohol withdrawal, muscle spasms, and seizure disorders. It works by calming overactive brain activity, but it has a high potential for addiction, tolerance, and dependence",
    "images": [
      "/products/valium-10-mg-1.webp"
    ],
    "image": "/products/valium-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/valium10.jpg?v=1782599157",
    "variants": [
      {
        "title": "90",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "180",
        "priceUSD": 910,
        "priceINR": 75530
      },
      {
        "title": "360",
        "priceUSD": 1700,
        "priceINR": 141100
      },
      {
        "title": "540",
        "priceUSD": 2800,
        "priceINR": 232400
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "ambien-10-mg",
    "slug": "ambien-10-mg",
    "name": "AMBIEN -  10 MG",
    "category": "Pain Relief",
    "priceUSD": 530,
    "priceINR": 43990,
    "price": 43990,
    "formattedPrice": "$530.00",
    "unit": "90",
    "dosage": "10 MG",
    "description": "Ambien (zolpidem tartrate) is a prescription sedative-hypnotic used for the short-term treatment of insomnia. It helps individuals fall asleep faster but should only be taken immediately before bed when a full night of sleep (7 to 8 hours) is possible.",
    "images": [
      "/products/ambien-10-mg-1.webp"
    ],
    "image": "/products/ambien-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/AMBIEN10_5f10c4c6-419e-48b0-984e-cdc2a3b19a5e.webp?v=1782599273",
    "variants": [
      {
        "title": "90",
        "priceUSD": 530,
        "priceINR": 43990
      },
      {
        "title": "180",
        "priceUSD": 880,
        "priceINR": 73040
      },
      {
        "title": "360",
        "priceUSD": 1520,
        "priceINR": 126160
      },
      {
        "title": "540",
        "priceUSD": 2600,
        "priceINR": 215800
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "admenta-5-mg",
    "slug": "admenta-5-mg",
    "name": "ADMENTA - 5 MG",
    "category": "Antibiotics",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250 Pills",
    "dosage": "5 MG",
    "description": "Admenta is an prescription medication used primarily to slow the progression of moderate to severe Alzheimer’s disease. It is an NMDA receptor antagonist that regulates glutamate in the brain to help improve memory, cognitive function, and daily living skills",
    "images": [
      "/products/admenta-5-mg-1.webp"
    ],
    "image": "/products/admenta-5-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/adm0003.webp?v=1782599455",
    "variants": [
      {
        "title": "250 Pills",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500 Pills",
        "priceUSD": 242,
        "priceINR": 20086
      },
      {
        "title": "1000 Pills",
        "priceUSD": 620,
        "priceINR": 51460
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "lexaheal-5-mg",
    "slug": "lexaheal-5-mg",
    "name": "LEXAHEAL - 5 MG",
    "category": "Antibiotics",
    "priceUSD": 125,
    "priceINR": 10375,
    "price": 10375,
    "formattedPrice": "$125.00",
    "unit": "250",
    "dosage": "5 MG",
    "description": "Lexaheal is a prescription medication used to treat depression and anxiety disorders. Its active ingredient is Escitalopram Oxalate, which belongs to a class of drugs known as Selective Serotonin Reuptake Inhibitors (SSRIs)",
    "images": [
      "/products/lexaheal-5-mg-1.webp"
    ],
    "image": "/products/lexaheal-5-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Lexaheal-5-scaled_023fe3b6-b929-4941-82d6-56d502739232.jpg?v=1782599706",
    "variants": [
      {
        "title": "250",
        "priceUSD": 125,
        "priceINR": 10375
      },
      {
        "title": "500",
        "priceUSD": 242,
        "priceINR": 20086
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "donemax-10-mg",
    "slug": "donemax-10-mg",
    "name": "DONEMAX - 10 MG",
    "category": "Antibiotics",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "10 MG",
    "description": "Donemax 10 mg (containing Donepezil) is a prescription medication used to manage mild to moderately severe dementia associated with Alzheimer's disease. It is not a cure, but it works by increasing acetylcholine in the brain to help improve memory, awareness, and cognitive function",
    "images": [
      "/products/donemax-10-mg-1.webp"
    ],
    "image": "/products/donemax-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/donemax-10.webp?v=1782598786",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 340,
        "priceINR": 28220
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "melorise-15-mg",
    "slug": "melorise-15-mg",
    "name": "MELORISE - 15 MG",
    "category": "Antibiotics",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250",
    "dosage": "15 MG",
    "description": "Melorise 15 mg is a brand-name medication containing the active ingredient Meloxicam, a prescription-only non-steroidal anti-inflammatory drug (NSAID). It is used to relieve joint pain, swelling, and stiffness associated with inflammatory bone and joint conditions like osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis",
    "images": [
      "/products/melorise-15-mg-1.webp"
    ],
    "image": "/products/melorise-15-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/melorise-15.jpg?v=1782598371",
    "variants": [
      {
        "title": "250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500",
        "priceUSD": 268,
        "priceINR": 22244
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "propranolol-10mg",
    "slug": "propranolol-10mg",
    "name": "PROPRANOLOL - 10MG",
    "category": "Antibiotics",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250",
    "dosage": "10MG",
    "description": "Propranolol is a widely prescribed, non-selective beta-blocker. It works by blocking the effects of stress hormones like adrenaline on the body. It is primarily used to manage high blood pressure, prevent migraine headaches, reduce chest pain (angina), and alleviate physical symptoms of performance or social anxiety",
    "images": [
      "/products/propranolol-10mg-1.webp"
    ],
    "image": "/products/propranolol-10mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/1753942968_133612_0.png?v=1782599798",
    "variants": [
      {
        "title": "250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500",
        "priceUSD": 268,
        "priceINR": 22244
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "trazodone-50-mg",
    "slug": "trazodone-50-mg",
    "name": "TRAZODONE - 50 MG",
    "category": "Antibiotics",
    "priceUSD": 161,
    "priceINR": 13363,
    "price": 13363,
    "formattedPrice": "$161.00",
    "unit": "250",
    "dosage": "50 MG",
    "description": "Trazodone is a prescription antidepressant belonging to the SARI (Serotonin Antagonist and Reuptake Inhibitor) class. It is primarily prescribed to treat major depressive disorder and anxiety, though lower doses are often used off-label as a sedative to improve sleep and insomnia",
    "images": [
      "/products/trazodone-50-mg-1.webp"
    ],
    "image": "/products/trazodone-50-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/trazodone-50-mg.jpg?v=1782598643",
    "variants": [
      {
        "title": "250",
        "priceUSD": 161,
        "priceINR": 13363
      },
      {
        "title": "500",
        "priceUSD": 362,
        "priceINR": 30046
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "itraconazole-100-mg",
    "slug": "itraconazole-100-mg",
    "name": "itraconazole - 100 MG",
    "category": "Antibiotics",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Itraconazole is a broad-spectrum triazole antifungal medication used to treat fungal and yeast infections throughout the body. It works by inhibiting the synthesis of ergosterol, a critical component of fungal cell membranes",
    "images": [
      "/products/itraconazole-100-mg-1.webp"
    ],
    "image": "/products/itraconazole-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/product-photo-12821042024170423.jpg?v=1782599590",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 340,
        "priceINR": 28220
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "fluconazole-200mg",
    "slug": "fluconazole-200mg",
    "name": "fluconazole -  200mg",
    "category": "Antibiotics",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "200mg",
    "description": "Fluconazole is a prescription antifungal medication used to treat a wide range of yeast and fungal infections, including vaginal candidiasis, oral thrush, and severe systemic infections. It works by destroying the fungal cell membrane, stopping fungal growth",
    "images": [
      "/products/fluconazole-200mg-1.webp"
    ],
    "image": "/products/fluconazole-200mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Flucoxcel-200-_1.jpg?v=1782598929",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 340,
        "priceINR": 28220
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "tinidazole-500mg",
    "slug": "tinidazole-500mg",
    "name": "Tinidazole - 500mg",
    "category": "Antibiotics",
    "priceUSD": 260,
    "priceINR": 21580,
    "price": 21580,
    "formattedPrice": "$260.00",
    "unit": "250",
    "dosage": "500mg",
    "description": "Tinidazole is a prescription nitroimidazole antibiotic and antiprotozoal medication used to treat infections caused by parasites and anaerobic bacteria. It is highly effective for conditions like giardiasis, amebiasis, trichomoniasis, and bacterial vaginosis",
    "images": [
      "/products/tinidazole-500mg-1.webp"
    ],
    "image": "/products/tinidazole-500mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/tinidazole-500-mg-tablet.jpg?v=1782600047",
    "variants": [
      {
        "title": "250",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "500",
        "priceUSD": 540,
        "priceINR": 44820
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "praziquantel-600-mg",
    "slug": "praziquantel-600-mg",
    "name": "Praziquantel - 600 MG",
    "category": "Antibiotics",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "600 MG",
    "description": "Praziquantel is an anthelmintic medication primarily used to treat parasitic flatworm infections, including schistosomiasis, liver flukes, and various tapeworm infections. It is highly effective and listed on the World Health Organization List of Essential Medicines. [1, 2]",
    "images": [
      "/products/praziquantel-600-mg-1.webp"
    ],
    "image": "/products/praziquantel-600-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Prazoquntel.jpg?v=1782598484",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 340,
        "priceINR": 28220
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "menbendazole-200-mg",
    "slug": "menbendazole-200-mg",
    "name": "Menbendazole - 200 MG",
    "category": "Antibiotics",
    "priceUSD": 161,
    "priceINR": 13363,
    "price": 13363,
    "formattedPrice": "$161.00",
    "unit": "250",
    "dosage": "200 MG",
    "description": "Mebendazole is an anthelmintic (anti-worm) medication that works by preventing parasites from absorbing the glucose they need to survive, causing them to die. A 200 mg dosage is primarily used for the treatment of specific intestinal parasitic worm infections",
    "images": [
      "/products/menbendazole-200-mg-1.webp"
    ],
    "image": "/products/menbendazole-200-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/mebendazole-200.jpg?v=1782598466",
    "variants": [
      {
        "title": "250",
        "priceUSD": 161,
        "priceINR": 13363
      },
      {
        "title": "500",
        "priceUSD": 362,
        "priceINR": 30046
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "doxycycline-100-mg",
    "slug": "doxycycline-100-mg",
    "name": "Doxycycline - 100 MG",
    "category": "Antibiotics",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Doxycycline is a broad-spectrum tetracycline-class antibiotic used to treat bacterial infections, severe acne, and rosacea, as well as to prevent malaria. It works by stopping bacterial growth and reducing inflammation",
    "images": [
      "/products/doxycycline-100-mg-1.webp"
    ],
    "image": "/products/doxycycline-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/doxycycline100.png?v=1782598823",
    "variants": [
      {
        "title": "250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500",
        "priceUSD": 251,
        "priceINR": 20833
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "androgel-5g",
    "slug": "androgel-5g",
    "name": "Androgel 1% - 5G",
    "category": "Antibiotics",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "60",
    "dosage": "5G",
    "description": "AndroGel is a prescription medication used for testosterone replacement therapy in adult males diagnosed with hypogonadism (a condition where the body does not produce enough natural testosterone). It helps restore normal hormone levels to improve symptoms like low sex drive, fatigue, and muscle loss",
    "images": [
      "/products/androgel-5g-1.webp"
    ],
    "image": "/products/androgel-5g-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/androgel-testosterone-gel.jpg?v=1782598697",
    "variants": [
      {
        "title": "60",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "90",
        "priceUSD": 340,
        "priceINR": 28220
      },
      {
        "title": "180",
        "priceUSD": 560,
        "priceINR": 46480
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "gabapentine-800mg",
    "slug": "gabapentine-800mg",
    "name": "Gabapentine 600mg",
    "category": "Body Building & Wellness",
    "priceUSD": 260,
    "priceINR": 21580,
    "price": 21580,
    "formattedPrice": "$260.00",
    "unit": "250",
    "dosage": "600mg",
    "description": "Gabapentin 600 mg is a high-strength dose of a prescription anticonvulsant medication primarily used to manage neuropathic (nerve) pain and treat certain types of seizures. It works by calming overactive nerves in the brain and body",
    "images": [
      "/products/gabapentine-800mg-1.webp"
    ],
    "image": "/products/gabapentine-800mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/gabapentine-800.webp?v=1782598963",
    "variants": [
      {
        "title": "250",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "500",
        "priceUSD": 520,
        "priceINR": 43160
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "cenforce-soft-chewable-100-mg",
    "slug": "cenforce-soft-chewable-100-mg",
    "name": "Cenforce soft chewable - 100 MG",
    "category": "ED Medication",
    "priceUSD": 125,
    "priceINR": 10375,
    "price": 10375,
    "formattedPrice": "$125.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Cenforce Soft 100 mg is a fast-acting, chewable tablet formulated to treat erectile dysfunction (ED) in men. Manufactured by Centurion Laboratories, it contains the active ingredient Sildenafil Citrate. The chewable format allows for quicker oral absorption and a faster onset of action compared to traditional swallowable tablets",
    "images": [
      "/products/cenforce-soft-chewable-100-mg-1.webp",
      "/products/cenforce-soft-chewable-100-mg-2.webp"
    ],
    "image": "/products/cenforce-soft-chewable-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/soft--chewable-tablets100.jpg?v=1782598537",
    "variants": [
      {
        "title": "250",
        "priceUSD": 125,
        "priceINR": 10375
      },
      {
        "title": "500",
        "priceUSD": 251,
        "priceINR": 20833
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "semaglutide",
    "slug": "semaglutide",
    "name": "Semaglutide - 3 MG",
    "category": "Body Building & Wellness",
    "priceUSD": 880,
    "priceINR": 73040,
    "price": 73040,
    "formattedPrice": "$880.00",
    "unit": "170",
    "dosage": "3 MG",
    "description": "Rybelsus (semaglutide) is a daily oral prescription medication used alongside diet and exercise to lower blood sugar in adults with type 2 diabetes. It belongs to the GLP-1 receptor agonist class and is the first pill of its kind, helping the body release insulin when needed and slowing food digestion",
    "images": [
      "/products/semaglutide-1.webp"
    ],
    "image": "/products/semaglutide-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/sem0125_1.webp?v=1782599845",
    "variants": [
      {
        "title": "170",
        "priceUSD": 880,
        "priceINR": 73040
      },
      {
        "title": "350",
        "priceUSD": 1700,
        "priceINR": 141100
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "modafinil",
    "slug": "modafinil",
    "name": "Modafinil",
    "category": "Smart Pills",
    "priceUSD": 233,
    "priceINR": 19339,
    "price": 19339,
    "formattedPrice": "$233.00",
    "unit": "100 MG / 250",
    "dosage": "Standard",
    "description": "Modafinil is a prescription central nervous system stimulant that promotes wakefulness. It is commonly used to treat excessive daytime sleepiness caused by conditions like narcolepsy, obstructive sleep apnea, and shift work sleep disorder. It works by increasing dopamine levels in the brain.",
    "images": [
      "/products/modafinil-1.webp",
      "/products/modafinil-2.webp"
    ],
    "image": "/products/modafinil-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/modafinil100.jpg?v=1782598421",
    "variants": [
      {
        "title": "100 MG / 250",
        "priceUSD": 233,
        "priceINR": 19339
      },
      {
        "title": "100 MG / 500",
        "priceUSD": 440,
        "priceINR": 36520
      },
      {
        "title": "200 MG / 250",
        "priceUSD": 280,
        "priceINR": 23240
      },
      {
        "title": "200 MG / 500",
        "priceUSD": 530,
        "priceINR": 43990
      }
    ],
    "tags": [
      "Smart Pills"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "fildena-red-150mg",
    "slug": "fildena-red-150mg",
    "name": "Fildena red - 150mg",
    "category": "ED Medication",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "150mg",
    "description": "Fildena 150 mg (often called Fildena Extra Power) is a high-dose prescription medication containing 150 mg of Sildenafil Citrate. Used to treat erectile dysfunction, it works by increasing blood flow to the penis during sexual stimulation",
    "images": [
      "/products/fildena-red-150mg-1.webp"
    ],
    "image": "/products/fildena-red-150mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Fildenared.png?v=1782598854",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 341,
        "priceINR": 28303
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "super-kamagra-160-mg",
    "slug": "super-kamagra-160-mg",
    "name": "Super kamagra - 160 MG",
    "category": "ED Medication",
    "priceUSD": 260,
    "priceINR": 21580,
    "price": 21580,
    "formattedPrice": "$260.00",
    "unit": "250",
    "dosage": "160 MG",
    "description": "Super Kamagra 160 is a dual-action oral medication designed to treat both erectile dysfunction (ED) and premature ejaculation (PE) in adult men. Each dose combines 100 mg of Sildenafil Citrate (to improve erections) with 60 mg of Dapoxetine (to delay ejaculation)",
    "images": [
      "/products/super-kamagra-160-mg-1.webp"
    ],
    "image": "/products/super-kamagra-160-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/super-kamagra-160.png?v=1782598627",
    "variants": [
      {
        "title": "250",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "500",
        "priceUSD": 520,
        "priceINR": 43160
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "aurogra-100-mg",
    "slug": "aurogra-100-mg",
    "name": "Aurogra - 100 MG",
    "category": "ED Medication",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Aurogra 100 mg is an oral medication and it is designed to treat erectile dysfunction in men. The chemical compound sildenafil citrate can be found in the medication, and this compound is powerful. The medication is taken orally, and it is in tablet form, which means there is no need for injections",
    "images": [
      "/products/aurogra-100-mg-1.webp"
    ],
    "image": "/products/aurogra-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/aurogra-100.jpg?v=1782598714",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 340,
        "priceINR": 28220
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "zaleplon-10-mg",
    "slug": "zaleplon-10-mg",
    "name": "ZALEPLON - 10 MG",
    "category": "Sleep Aids",
    "priceUSD": 350,
    "priceINR": 29050,
    "price": 29050,
    "formattedPrice": "$350.00",
    "unit": "250",
    "dosage": "10 MG",
    "description": "Zaleplon (commonly sold under the brand name Sonata) is a short-acting nonbenzodiazepine \"Z-drug\" used to treat sleep-onset insomnia. Its ultrashort half-life allows patients to fall asleep quickly without causing significant next-day grogginess, making it ideal for middle-of-the-night use if you wake up and cannot return to sleep",
    "images": [
      "/products/zaleplon-10-mg-1.webp"
    ],
    "image": "/products/zaleplon-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Zylplon-10_e1bcca78-926f-469b-a8c0-4a4bc15da115.jpg?v=1782600153",
    "variants": [
      {
        "title": "250",
        "priceUSD": 350,
        "priceINR": 29050
      },
      {
        "title": "500",
        "priceUSD": 620,
        "priceINR": 51460
      }
    ],
    "tags": [
      "Sleep"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "clenbuterol-40-mcg",
    "slug": "clenbuterol-40-mcg",
    "name": "CLENBUTEROL - 40 MCG",
    "category": "Body Building & Wellness",
    "priceUSD": 350,
    "priceINR": 29050,
    "price": 29050,
    "formattedPrice": "$350.00",
    "unit": "250",
    "dosage": "40 MCG",
    "description": "Clenbuterol 40 mcg refers to a tablet containing 40 micrograms of Clenbuterol hydrochloride. Primarily prescribed outside the U.S. as a veterinary and human bronchodilator for asthma, it is also widely misused off-label in bodybuilding and weight-loss programs for its metabolism-boosting and thermogenic fat-burning properties",
    "images": [
      "/products/clenbuterol-40-mcg-1.webp"
    ],
    "image": "/products/clenbuterol-40-mcg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Clenbuterol-40.jpg?v=1782598756",
    "variants": [
      {
        "title": "250",
        "priceUSD": 350,
        "priceINR": 29050
      },
      {
        "title": "500",
        "priceUSD": 700,
        "priceINR": 58100
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "stanozolol-10-mg",
    "slug": "stanozolol-10-mg",
    "name": "STANOZOLOL - 10 MG",
    "category": "Body Building & Wellness",
    "priceUSD": 620,
    "priceINR": 51460,
    "price": 51460,
    "formattedPrice": "$620.00",
    "unit": "250",
    "dosage": "10 MG",
    "description": "Stanozolol (often known by the brand name Winstrol) is a synthetic anabolic steroid derived from dihydrotestosterone. Medically, it is used to treat hereditary angioedema, osteoporosis, and certain types of anemia. It is heavily abused in sports and bodybuilding for its performance-enhancing properties",
    "images": [
      "/products/stanozolol-10-mg-1.webp"
    ],
    "image": "/products/stanozolol-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/StanozololTablet10.jpg?v=1782598564",
    "variants": [
      {
        "title": "250",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "500",
        "priceUSD": 1240,
        "priceINR": 102920
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "methandienone-10-mg",
    "slug": "methandienone-10-mg",
    "name": "METHANDIENONE - 10 MG",
    "category": "Body Building & Wellness",
    "priceUSD": 530,
    "priceINR": 43990,
    "price": 43990,
    "formattedPrice": "$530.00",
    "unit": "150",
    "dosage": "10 MG",
    "description": "Methandienone (also known as metandienone or methandrostenolone, and widely sold as Dianabol) is a synthetic, orally active anabolic-androgenic steroid. Originally developed in the 1960s, it is primarily misused as a performance-enhancing drug to build muscle and increase strength.",
    "images": [
      "/products/methandienone-10-mg-1.webp"
    ],
    "image": "/products/methandienone-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Methandienone-Tablet.jpg?v=1782599755",
    "variants": [
      {
        "title": "150",
        "priceUSD": 530,
        "priceINR": 43990
      },
      {
        "title": "250",
        "priceUSD": 880,
        "priceINR": 73040
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "oxandrolone-10-mg",
    "slug": "oxandrolone-10-mg",
    "name": "OXANDROLONE - 10 MG",
    "category": "Body Building & Wellness",
    "priceUSD": 620,
    "priceINR": 51460,
    "price": 51460,
    "formattedPrice": "$620.00",
    "unit": "250",
    "dosage": "10 MG",
    "description": "Oxandrolone (often referred to by the brand name Oxandrin or Anavar) is a prescription oral anabolic steroid. It is used therapeutically to promote weight gain after surgery or severe trauma, offset muscle loss from corticosteroid use, and treat bone pain from osteoporosis",
    "images": [
      "/products/oxandrolone-10-mg-1.webp"
    ],
    "image": "/products/oxandrolone-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/oxandrolone.jpg?v=1782598445",
    "variants": [
      {
        "title": "250",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "500",
        "priceUSD": 1200,
        "priceINR": 99600
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "tastylia-strip-20-mg",
    "slug": "tastylia-strip-20-mg",
    "name": "Tastylia Strip - 20 MG",
    "category": "ED Medication",
    "priceUSD": 280,
    "priceINR": 23240,
    "price": 23240,
    "formattedPrice": "$280.00",
    "unit": "180",
    "dosage": "20 MG",
    "description": "Tastylia Strip is an orally disintegrating film containing the active ingredient tadalafil. Prescribed primarily to treat erectile dysfunction (ED) in men, it is designed to dissolve directly on the tongue without the need for water, allowing for faster systemic absorption and discreet use",
    "images": [
      "/products/tastylia-strip-20-mg-1.webp"
    ],
    "image": "/products/tastylia-strip-20-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/nufil-injection.jpg?v=1782599936",
    "variants": [
      {
        "title": "180",
        "priceUSD": 280,
        "priceINR": 23240
      },
      {
        "title": "360",
        "priceUSD": 560,
        "priceINR": 46480
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "testosterone-cypionate-250mg-ml",
    "slug": "testosterone-cypionate-250mg-ml",
    "name": "TESTOSTERONE CYPIONATE - 250mg/mL",
    "category": "Body Building & Wellness",
    "priceUSD": 125,
    "priceINR": 10375,
    "price": 10375,
    "formattedPrice": "$125.00",
    "unit": "1",
    "dosage": "250mg",
    "description": "Testosterone cypionate is a long-acting, injectable synthetic androgen and anabolic steroid primarily used for testosterone replacement therapy (TRT) in males with diagnosed hypogonadism. It is also widely prescribed off-label for gender-affirming hormone therapy in transgender men",
    "images": [
      "/products/testosterone-cypionate-250mg-ml-1.webp"
    ],
    "image": "/products/testosterone-cypionate-250mg-ml-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/testosterone-cypionate-250.jpg?v=1782598603",
    "variants": [
      {
        "title": "1",
        "priceUSD": 125,
        "priceINR": 10375
      },
      {
        "title": "2",
        "priceUSD": 250,
        "priceINR": 20750
      },
      {
        "title": "3",
        "priceUSD": 375,
        "priceINR": 31125
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "testosterone-enanthate-inj-usp-250-mg-ml",
    "slug": "testosterone-enanthate-inj-usp-250-mg-ml",
    "name": "TESTOSTERONE ENANTHATE INJ USP - 250 mg/mL",
    "category": "Body Building & Wellness",
    "priceUSD": 120,
    "priceINR": 9960,
    "price": 9960,
    "formattedPrice": "$120.00",
    "unit": "4",
    "dosage": "250 mg",
    "description": "Testosterone Enanthate Injection USP is an oil-based, long-acting injectable androgen (male sex hormone) prescribed primarily for testosterone replacement therapy (TRT). It is used to treat conditions caused by testosterone deficiency, such as hypogonadism, and is administered via intramuscular injection",
    "images": [
      "/products/testosterone-enanthate-inj-usp-250-mg-ml-1.webp"
    ],
    "image": "/products/testosterone-enanthate-inj-usp-250-mg-ml-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/9e0623b4f9324087a9f1269ed315a80f.avif?v=1782599979",
    "variants": [
      {
        "title": "4",
        "priceUSD": 120,
        "priceINR": 9960
      },
      {
        "title": "8",
        "priceUSD": 240,
        "priceINR": 19920
      },
      {
        "title": "12",
        "priceUSD": 360,
        "priceINR": 29880
      },
      {
        "title": "16",
        "priceUSD": 480,
        "priceINR": 39840
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "testosterone-gel-capsule-40-mg",
    "slug": "testosterone-gel-capsule-40-mg",
    "name": "Testosterone gel capsule - 40 MG",
    "category": "Body Building & Wellness",
    "priceUSD": 230,
    "priceINR": 19090,
    "price": 19090,
    "formattedPrice": "$230.00",
    "unit": "250",
    "dosage": "40 MG",
    "description": "Testosterone 40mg Gel",
    "images": [
      "/products/testosterone-gel-capsule-40-mg-1.webp"
    ],
    "image": "/products/testosterone-gel-capsule-40-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/testonet-40-capsule-10_testonet-40-capsule-10--TM-CACR1-012696_1.webp?v=1782600014",
    "variants": [
      {
        "title": "250",
        "priceUSD": 230,
        "priceINR": 19090
      },
      {
        "title": "500",
        "priceUSD": 460,
        "priceINR": 38180
      }
    ],
    "tags": [
      "Body Building"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "amoxicillin",
    "slug": "amoxicillin",
    "name": "Amoxicillin",
    "category": "Antibiotics",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "500 MG / 250",
    "dosage": "Standard",
    "description": "Amoxicillin 500 mg DT (Dispersible Tablet) is a penicillin-type antibiotic used to treat bacterial infections of the lungs, airways, tonsils, skin, and urinary tract. The \"DT\" formulation is designed to be dispersed in a small amount of water before swallowing",
    "images": [
      "/products/amoxicillin-1.webp"
    ],
    "image": "/products/amoxicillin-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/amoxicillin-tablets_1732540129.jpg?v=1782597087",
    "variants": [
      {
        "title": "500 MG / 250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500 MG / 500",
        "priceUSD": 340,
        "priceINR": 28220
      },
      {
        "title": "625 MG / 250",
        "priceUSD": 181,
        "priceINR": 15023
      },
      {
        "title": "625 MG / 500",
        "priceUSD": 362,
        "priceINR": 30046
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "azithromycin",
    "slug": "azithromycin",
    "name": "Azithromycin",
    "category": "Antibiotics",
    "priceUSD": 220,
    "priceINR": 18260,
    "price": 18260,
    "formattedPrice": "$220.00",
    "unit": "250 MG / 250",
    "dosage": "Standard",
    "description": "Azithromycin is a macrolide antibiotic used to treat bacterial infections like pneumonia, bronchitis, and certain sexually transmitted diseases. It works by stopping bacteria from producing essential proteins. It requires a doctor's prescription and will not treat viral illnesses like the common cold or flu",
    "images": [
      "/products/azithromycin-1.webp",
      "/products/azithromycin-2.webp"
    ],
    "image": "/products/azithromycin-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/azithromycin-250.jpg?v=1782597159",
    "variants": [
      {
        "title": "250 MG / 250",
        "priceUSD": 220,
        "priceINR": 18260
      },
      {
        "title": "250 MG / 500",
        "priceUSD": 440,
        "priceINR": 36520
      },
      {
        "title": "500 MG / 250",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "500 MG / 500",
        "priceUSD": 540,
        "priceINR": 44820
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "kamagra-chewable-100-mg",
    "slug": "kamagra-chewable-100-mg",
    "name": "Kamagra Chewable - 100 MG",
    "category": "ED Medication",
    "priceUSD": 260,
    "priceINR": 21580,
    "price": 21580,
    "formattedPrice": "$260.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Kamagra Soft Chewable 100 is an erectile dysfunction treatment by Ajanta Pharma containing 100 mg of Sildenafil Citrate. Designed for men who struggle to swallow hard pills, the chewable format requires no water and dissolves in the mouth for faster absorption and symptom relief",
    "images": [
      "/products/kamagra-chewable-100-mg-1.webp"
    ],
    "image": "/products/kamagra-chewable-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/kamagra-chewable-100.jpg?v=1782597722",
    "variants": [
      {
        "title": "250",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "500",
        "priceUSD": 520,
        "priceINR": 43160
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "kamagra-sildenafil-citrate-100-mg",
    "slug": "kamagra-sildenafil-citrate-100-mg",
    "name": "Kamagra Sildenafil Citrate - 100 MG",
    "category": "ED Medication",
    "priceUSD": 280,
    "priceINR": 23240,
    "price": 23240,
    "formattedPrice": "$280.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Kamagra 100mg is an oral prescription medication manufactured by Ajanta Pharma, primarily used to treat erectile dysfunction (impotence) in adult men. It works by increasing blood flow to the penis during sexual stimulation, helping men achieve and maintain an erection",
    "images": [
      "/products/kamagra-sildenafil-citrate-100-mg-1.webp"
    ],
    "image": "/products/kamagra-sildenafil-citrate-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Kamagrasildenafil100.jpg?v=1782597695",
    "variants": [
      {
        "title": "250",
        "priceUSD": 280,
        "priceINR": 23240
      },
      {
        "title": "500",
        "priceUSD": 560,
        "priceINR": 46480
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "propecia-5mg",
    "slug": "propecia-5mg",
    "name": "Propecia - 5MG",
    "category": "ED Medication",
    "priceUSD": 260,
    "priceINR": 21580,
    "price": 21580,
    "formattedPrice": "$260.00",
    "unit": "250",
    "dosage": "5MG",
    "description": "Propecia (finasteride) is typically prescribed at 1 mg daily for male pattern hair loss. The 5 mg dose is typically prescribed for benign prostatic hyperplasia (BPH) or enlarged prostate",
    "images": [
      "/products/propecia-5mg-1.webp"
    ],
    "image": "/products/propecia-5mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Propecia5mg_2dbc2bb8-c05a-4b3c-a23b-dd4d38011577.jpg?v=1782597787",
    "variants": [
      {
        "title": "250",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "500",
        "priceUSD": 520,
        "priceINR": 43160
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "sildenafil-proffesional-100-mg",
    "slug": "sildenafil-proffesional-100-mg",
    "name": "Sildenafil Proffesional - 100 MG",
    "category": "ED Medication",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Viagra Professional is an alternative formulation of the erectile dysfunction drug sildenafil citrate. Unlike standard Viagra pills, it is typically produced in a sublingual format that dissolves under the tongue for quicker absorption, bypassing the digestive tract. It is used to achieve and sustain erections during sexual arousal",
    "images": [
      "/products/sildenafil-proffesional-100-mg-1.webp"
    ],
    "image": "/products/sildenafil-proffesional-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/cenforce-professional-100MG.webp?v=1782597517",
    "variants": [
      {
        "title": "250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500",
        "priceUSD": 280,
        "priceINR": 23240
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "cipro-500-mg",
    "slug": "cipro-500-mg",
    "name": "Cipro - 500 MG",
    "category": "Antibiotics",
    "priceUSD": 190,
    "priceINR": 15770,
    "price": 15770,
    "formattedPrice": "$190.00",
    "unit": "250",
    "dosage": "500 MG",
    "description": "a powerful broad-spectrum fluoroquinolone antibiotic used to treat a variety of bacterial infections, including those of the urinary tract, lungs, skin, bones, and joints. It works by stopping bacterial DNA from dividing and repairing, ultimately killing the bacteria",
    "images": [
      "/products/cipro-500-mg-1.webp"
    ],
    "image": "/products/cipro-500-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/cipro-500-mg-ciprodac-500-mg.jpg?v=1782599537",
    "variants": [
      {
        "title": "250",
        "priceUSD": 190,
        "priceINR": 15770
      },
      {
        "title": "500",
        "priceUSD": 380,
        "priceINR": 31540
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "super-fildena-160-mg",
    "slug": "super-fildena-160-mg",
    "name": "Super Fildena - 160 MG",
    "category": "ED Medication",
    "priceUSD": 330,
    "priceINR": 27390,
    "price": 27390,
    "formattedPrice": "$330.00",
    "unit": "250",
    "dosage": "160 MG",
    "description": "Super Fildena 160 is a dual-action oral medication designed to treat both erectile dysfunction (ED) and premature ejaculation (PE) in adult men. Each tablet contains a combination of two active ingredients: Sildenafil Citrate (100 mg) and Dapoxetine (60 mg)",
    "images": [
      "/products/super-fildena-160-mg-1.webp"
    ],
    "image": "/products/super-fildena-160-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/SuperFildena160.png?v=1782598047",
    "variants": [
      {
        "title": "250",
        "priceUSD": 330,
        "priceINR": 27390
      },
      {
        "title": "500",
        "priceUSD": 660,
        "priceINR": 54780
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "super-p-force-160-mg",
    "slug": "super-p-force-160-mg",
    "name": "Super P Force - 160 MG",
    "category": "ED Medication",
    "priceUSD": 330,
    "priceINR": 27390,
    "price": 27390,
    "formattedPrice": "$330.00",
    "unit": "250",
    "dosage": "160 MG",
    "description": "Super P Force 160 is a combination medication used to treat Erectile Dysfunction (ED) and Premature Ejaculation (PE) in adult men. It contains two active ingredients: Sildenafil Citrate (100 mg) to improve erections, and Dapoxetine (60 mg) to delay ejaculation",
    "images": [
      "/products/super-p-force-160-mg-1.webp"
    ],
    "image": "/products/super-p-force-160-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/SuperpForce160.jpg?v=1782598003",
    "variants": [
      {
        "title": "250",
        "priceUSD": 330,
        "priceINR": 27390
      },
      {
        "title": "500",
        "priceUSD": 620,
        "priceINR": 51460
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "dapoxetine",
    "slug": "dapoxetine",
    "name": "Dapoxetine",
    "category": "ED Medication",
    "priceUSD": 240,
    "priceINR": 19920,
    "price": 19920,
    "formattedPrice": "$240.00",
    "unit": "30 MG / 250",
    "dosage": "Standard",
    "description": "Dapoxetine 60 mg is a prescription medication designed to treat premature ejaculation (PE) in adult men. It belongs to a class of drugs called Selective Serotonin Reuptake Inhibitors (SSRIs) that work by increasing serotonin levels in the nervous system to delay ejaculation and provide better control",
    "images": [
      "/products/dapoxetine-1.webp",
      "/products/dapoxetine-2.webp"
    ],
    "image": "/products/dapoxetine-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Daxpoxtine30.webp?v=1782597565",
    "variants": [
      {
        "title": "30 MG / 250",
        "priceUSD": 240,
        "priceINR": 19920
      },
      {
        "title": "30 MG / 500",
        "priceUSD": 480,
        "priceINR": 39840
      },
      {
        "title": "60 MG / 250",
        "priceUSD": 280,
        "priceINR": 23240
      },
      {
        "title": "60 MG / 500",
        "priceUSD": 540,
        "priceINR": 44820
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "verdanafil",
    "slug": "verdanafil",
    "name": "Verdanafil",
    "category": "ED Medication",
    "priceUSD": 143,
    "priceINR": 11869,
    "price": 11869,
    "formattedPrice": "$143.00",
    "unit": "20 MG / 250",
    "dosage": "Standard",
    "description": "Vardenafil 20mg is a high-strength oral medication used to treat erectile dysfunction (ED) by increasing blood flow to the penis during sexual stimulation",
    "images": [
      "/products/verdanafil-1.webp",
      "/products/verdanafil-2.webp",
      "/products/verdanafil-3.webp"
    ],
    "image": "/products/verdanafil-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Vilitra20.jpg?v=1782598223",
    "variants": [
      {
        "title": "20 MG / 250",
        "priceUSD": 143,
        "priceINR": 11869
      },
      {
        "title": "20 MG / 500",
        "priceUSD": 341,
        "priceINR": 28303
      },
      {
        "title": "40 MG / 250",
        "priceUSD": 143,
        "priceINR": 11869
      },
      {
        "title": "40 MG / 500",
        "priceUSD": 404,
        "priceINR": 33532
      },
      {
        "title": "60 MG / 250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "60 MG / 500",
        "priceUSD": 440,
        "priceINR": 36520
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "super-active-softgel-tadalafil-20-mg",
    "slug": "super-active-softgel-tadalafil-20-mg",
    "name": "Super Active Softgel  Tadalafil - 20 MG",
    "category": "ED Medication",
    "priceUSD": 152,
    "priceINR": 12616,
    "price": 12616,
    "formattedPrice": "$152.00",
    "unit": "250",
    "dosage": "20 MG",
    "description": "Super Active Tadalafil 20mg is an advanced, fast-acting oral formulation of the erectile dysfunction medication tadalafil. Packaged as a liquid-filled softgel capsule, it is designed to dissolve rapidly. It treats erectile dysfunction and benign prostatic hyperplasia (BPH) by boosting blood flow to the penis",
    "images": [
      "/products/super-active-softgel-tadalafil-20-mg-1.webp"
    ],
    "image": "/products/super-active-softgel-tadalafil-20-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/SUPERACTIVEtadafilSOFTGEL20.png?v=1782597948",
    "variants": [
      {
        "title": "250",
        "priceUSD": 152,
        "priceINR": 12616
      },
      {
        "title": "500",
        "priceUSD": 351,
        "priceINR": 29133
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "super-active-softgel-fildena-100-mg",
    "slug": "super-active-softgel-fildena-100-mg",
    "name": "Super Active Softgel Fildena  - 100 MG",
    "category": "ED Medication",
    "priceUSD": 220,
    "priceINR": 18260,
    "price": 18260,
    "formattedPrice": "$220.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Fildena Super Active 100mg is a fast-acting softgel capsule used to treat erectile dysfunction in men. Manufactured by Fortune Healthcare, it contains Sildenafil Citrate as its active ingredient. The liquid-filled capsule format allows for quicker absorption and onset than traditional hard tablets",
    "images": [
      "/products/super-active-softgel-fildena-100-mg-1.webp"
    ],
    "image": "/products/super-active-softgel-fildena-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/SUPERACTIVEFILDENASOFTGEL100.jpg?v=1782597890",
    "variants": [
      {
        "title": "250",
        "priceUSD": 220,
        "priceINR": 18260
      },
      {
        "title": "500",
        "priceUSD": 440,
        "priceINR": 36520
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "lunesta-6mg",
    "slug": "lunesta-6mg",
    "name": "Lunesta - 3MG",
    "category": "Sleep Aids",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "250",
    "dosage": "3MG",
    "description": "Lunesta (eszopiclone) is a sedative-hypnotic medication approved for the treatment of insomnia. It is essential to use this medication only as prescribed by a healthcare provider, as the U.S. Food and Drug Administration (FDA)",
    "images": [
      "/products/lunesta-6mg-1.webp"
    ],
    "image": "/products/lunesta-6mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/lunesta.jpg?v=1782652784",
    "variants": [
      {
        "title": "250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "500",
        "priceUSD": 340,
        "priceINR": 28220
      }
    ],
    "tags": [
      "Sleep"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "zopiclone",
    "slug": "zopiclone",
    "name": "Zopiclone",
    "category": "Sleep Aids",
    "priceUSD": 170,
    "priceINR": 14110,
    "price": 14110,
    "formattedPrice": "$170.00",
    "unit": "7.5 MG / 250",
    "dosage": "Standard",
    "description": "Zopiclone is a prescription sedative-hypnotic medication indicated for the short-term treatment of severe insomnia, often used to help individuals fall asleep faster and reduce nighttime awakenings. Due to the risk of dependency, it is generally recommended for short-term use, typically for a period of 2–4 weeks.",
    "images": [
      "/products/zopiclone-1.webp"
    ],
    "image": "/products/zopiclone-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Zopiclone10.jpg?v=1782596942",
    "variants": [
      {
        "title": "7.5 MG / 250",
        "priceUSD": 170,
        "priceINR": 14110
      },
      {
        "title": "7.5 MG / 500",
        "priceUSD": 340,
        "priceINR": 28220
      },
      {
        "title": "10 MG / 250",
        "priceUSD": 220,
        "priceINR": 18260
      },
      {
        "title": "10 MG / 500",
        "priceUSD": 440,
        "priceINR": 36520
      }
    ],
    "tags": [
      "Sleep"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "kamagra-jelly-100-mg",
    "slug": "kamagra-jelly-100-mg",
    "name": "Kamagra Jelly - 100 MG",
    "category": "ED Medication",
    "priceUSD": 152,
    "priceINR": 12616,
    "price": 12616,
    "formattedPrice": "$152.00",
    "unit": "57",
    "dosage": "100 MG",
    "description": "Kamagra is a medication containing sildenafil citrate, primarily used to treat erectile dysfunction (ED) in men. It belongs to the PDE5 inhibitor class of drugs, which work by relaxing the blood vessels in the penis and increasing blood flow during sexual stimulation",
    "images": [
      "/products/kamagra-jelly-100-mg-1.webp"
    ],
    "image": "/products/kamagra-jelly-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/kamagra-100-mg-oral-jelly_6e3a34b5-524f-431c-9f16-46b7470161bb.jpg?v=1782599635",
    "variants": [
      {
        "title": "57",
        "priceUSD": 152,
        "priceINR": 12616
      },
      {
        "title": "104",
        "priceUSD": 305,
        "priceINR": 25315
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "hydroxychloroquine",
    "slug": "hydroxychloroquine",
    "name": "Hydroxychloroquine",
    "category": "Antibiotics",
    "priceUSD": 190,
    "priceINR": 15770,
    "price": 15770,
    "formattedPrice": "$190.00",
    "unit": "200 MG / 250",
    "dosage": "Standard",
    "description": "Hydroxychloroquine 200 mg is an oral prescription medication classified as a Disease-Modifying Anti-Rheumatic Drug (DMARD) and an anti-malarial agent",
    "images": [
      "/products/hydroxychloroquine-1.webp",
      "/products/hydroxychloroquine-2.webp"
    ],
    "image": "/products/hydroxychloroquine-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Hydroxychloroquine200.jpg?v=1782597629",
    "variants": [
      {
        "title": "200 MG / 250",
        "priceUSD": 190,
        "priceINR": 15770
      },
      {
        "title": "200 MG / 500",
        "priceUSD": 380,
        "priceINR": 31540
      },
      {
        "title": "400 MG / 250",
        "priceUSD": 230,
        "priceINR": 19090
      },
      {
        "title": "400 MG / 500",
        "priceUSD": 560,
        "priceINR": 46480
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "ivermectin-12-mg",
    "slug": "ivermectin-12-mg",
    "name": "IVERMECTIN - 12 MG",
    "category": "Antibiotics",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250",
    "dosage": "12 MG",
    "description": "Ivermectin 12mg tablets are primarily an anti-parasitic medication used to treat infections in the intestines, skin, and eyes. In humans, it is FDA-approved to treat strongyloidiasis (a specific type of intestinal roundworm) and onchocerciasis, also known as river blindness",
    "images": [
      "/products/ivermectin-12-mg-1.webp"
    ],
    "image": "/products/ivermectin-12-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/IVERMECTIN12.jpg?v=1782597661",
    "variants": [
      {
        "title": "250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500",
        "priceUSD": 251,
        "priceINR": 20833
      }
    ],
    "tags": [
      "Antibiotic"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "soma",
    "slug": "soma",
    "name": "Soma",
    "category": "Pain Relief",
    "priceUSD": 530,
    "priceINR": 43990,
    "price": 43990,
    "formattedPrice": "$530.00",
    "unit": "350 MG / 90",
    "dosage": "Standard",
    "description": "Pain O Soma 350 mg (containing active ingredient Carisoprodol) is a centrally acting muscle relaxant Such as Muscle Spasms: Relieving acute, painful muscle spasms and stiffness.Musculoskeletal Pain: Treating discomfort associated with acute musculoskeletal injuries, such as sprains and strains.Short-Term Relief: Used for 2 to 3 weeks alongside rest and physical therapy to improve mobility and aid recovery",
    "images": [
      "/products/soma-1.webp",
      "/products/soma-2.webp"
    ],
    "image": "/products/soma-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/soma350mg.jpg?v=1782597852",
    "variants": [
      {
        "title": "350 MG / 90",
        "priceUSD": 530,
        "priceINR": 43990
      },
      {
        "title": "350 MG / 180",
        "priceUSD": 880,
        "priceINR": 73040
      },
      {
        "title": "350 MG / 360",
        "priceUSD": 1300,
        "priceINR": 107900
      },
      {
        "title": "350 MG / 540",
        "priceUSD": 2200,
        "priceINR": 182600
      },
      {
        "title": "500 MG / 90",
        "priceUSD": 620,
        "priceINR": 51460
      },
      {
        "title": "500 MG / 180",
        "priceUSD": 1000,
        "priceINR": 83000
      },
      {
        "title": "500 MG / 360",
        "priceUSD": 1700,
        "priceINR": 141100
      },
      {
        "title": "500 MG / 540",
        "priceUSD": 2800,
        "priceINR": 232400
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "tadox-dp-10-mg",
    "slug": "tadox-dp-10-mg",
    "name": "Tadox DP - 10 MG",
    "category": "ED Medication",
    "priceUSD": 210,
    "priceINR": 17430,
    "price": 17430,
    "formattedPrice": "$210.00",
    "unit": "250",
    "dosage": "10 MG",
    "description": "Tadalafil and dapoxetine is a combined medication used to treat two common male sexual health issues simultaneously: erectile dysfunction (ED) and premature ejaculation (PE)",
    "images": [
      "/products/tadox-dp-10-mg-1.webp"
    ],
    "image": "/products/tadox-dp-10-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/8bc45329c0754a2c9e90ae7b2b524e01.avif?v=1782599896",
    "variants": [
      {
        "title": "250",
        "priceUSD": 210,
        "priceINR": 17430
      },
      {
        "title": "500",
        "priceUSD": 420,
        "priceINR": 34860
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "super-active-vidalista-80-mg",
    "slug": "super-active-vidalista-80-mg",
    "name": "Super Active Vidalista  - 80 MG",
    "category": "General Pharmaceutical",
    "priceUSD": 100,
    "priceINR": 8300,
    "price": 8300,
    "formattedPrice": "$100.00",
    "unit": "Default Title",
    "dosage": "80 MG",
    "description": "Super Vidalista 80 mg is a prescription combination medication that contains two primary active ingredients: 20 mg of Tadalafil and 60 mg of Dapoxetine. It is manufactured by Centurion Laboratories and is formulated to address both erectile dysfunction (ED) and premature ejaculation (PE) simultaneously",
    "images": [
      "/products/super-active-vidalista-80-mg-1.webp"
    ],
    "image": "/products/super-active-vidalista-80-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/SuperActiveTadafil80_36d69d18-d1db-4593-a901-7d07fb2acbdb.jpg?v=1782597972",
    "variants": [
      {
        "title": "Default Title",
        "priceUSD": 100,
        "priceINR": 8300
      }
    ],
    "tags": [],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "tadalafil",
    "slug": "tadalafil",
    "name": "Tadalafil",
    "category": "ED Medication",
    "priceUSD": 125,
    "priceINR": 10375,
    "price": 10375,
    "formattedPrice": "$125.00",
    "unit": "10 MG / 250",
    "dosage": "Standard",
    "description": "Tadalafil is primarily prescribed to treat erectile dysfunction (ED) in adult men. Taken as needed before sexual activity, it works by relaxing blood vessels and increasing blood flow to the penis during sexual stimulation",
    "images": [
      "/products/tadalafil-1.webp",
      "/products/tadalafil-2.webp",
      "/products/tadalafil-3.webp",
      "/products/tadalafil-4.webp",
      "/products/tadalafil-5.webp"
    ],
    "image": "/products/tadalafil-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/Tadafil10.jpg?v=1782598089",
    "variants": [
      {
        "title": "10 MG / 250",
        "priceUSD": 125,
        "priceINR": 10375
      },
      {
        "title": "10 MG / 500",
        "priceUSD": 251,
        "priceINR": 20833
      },
      {
        "title": "20 MG / 250",
        "priceUSD": 125,
        "priceINR": 10375
      },
      {
        "title": "20 MG / 500",
        "priceUSD": 251,
        "priceINR": 20833
      },
      {
        "title": "40 MG / 250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "40 MG / 500",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "60 MG / 250",
        "priceUSD": 152,
        "priceINR": 12616
      },
      {
        "title": "60 MG / 500",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "80 MG / 250",
        "priceUSD": 152,
        "priceINR": 12616
      },
      {
        "title": "80 MG / 500",
        "priceUSD": 280,
        "priceINR": 23240
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "womegra-100-mg",
    "slug": "womegra-100-mg",
    "name": "WOMEGRA - 100 MG",
    "category": "ED Medication",
    "priceUSD": 125,
    "priceINR": 10375,
    "price": 10375,
    "formattedPrice": "$125.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Sildenafil FM is a formulation of sildenafil citrate typically marketed for women (often associated with brands like Cenforce-FM). It combines sildenafil (to increase genital blood flow) with other compounds to treat Female Sexual Arousal Disorder (FSAD), low libido, or antidepressant-induced sexual dysfunction",
    "images": [
      "/products/womegra-100-mg-1.webp"
    ],
    "image": "/products/womegra-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/WOMEGRA100.jpg?v=1782598246",
    "variants": [
      {
        "title": "250",
        "priceUSD": 125,
        "priceINR": 10375
      },
      {
        "title": "500",
        "priceUSD": 250,
        "priceINR": 20750
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "sildenafil-dapoxetine-160-mg",
    "slug": "sildenafil-dapoxetine-160-mg",
    "name": "Sildenafil & Dapoxetine - 160 MG",
    "category": "ED Medication",
    "priceUSD": 152,
    "priceINR": 12616,
    "price": 12616,
    "formattedPrice": "$152.00",
    "unit": "250",
    "dosage": "160 MG",
    "description": "Sildenafil &amp; Dapoxetine 160 refers to a combination medication typically containing 100mg of Sildenafil and 60mg of Dapoxetine. It is prescribed to treat both Erectile Dysfunction (ED) and Premature Ejaculation (PE) simultaneously. Sildenafil aids in getting and maintaining an erection, while Dapoxetine helps delay ejaculation",
    "images": [
      "/products/sildenafil-dapoxetine-160-mg-1.webp"
    ],
    "image": "/products/sildenafil-dapoxetine-160-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/cenforce-d-160mg-tablet-sildenafil-dapoxetine_e4780741-9d73-49a2-a302-b1f723ef0b2b.jpg?v=1782597412",
    "variants": [
      {
        "title": "250",
        "priceUSD": 152,
        "priceINR": 12616
      },
      {
        "title": "500",
        "priceUSD": 280,
        "priceINR": 23240
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "sildenafil",
    "slug": "sildenafil",
    "name": "Sildenafil",
    "category": "ED Medication",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "100 MG / 250",
    "dosage": "Standard",
    "description": "Sildenafil 100mg medication primarily used to treat erectile dysfunction (ED) and pulmonary arterial hypertension (PAH). It belongs to the PDE5 inhibitor class of drugs, which work by relaxing blood vessels and increasing blood flow to specific areas of the body",
    "images": [
      "/products/sildenafil-1.webp",
      "/products/sildenafil-2.webp",
      "/products/sildenafil-3.webp"
    ],
    "image": "/products/sildenafil-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/image_0.jpg?v=1782600409",
    "variants": [
      {
        "title": "100 MG / 250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "100 MG / 500",
        "priceUSD": 260,
        "priceINR": 21580
      },
      {
        "title": "150 MG / 250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "150 MG / 500",
        "priceUSD": 280,
        "priceINR": 23240
      },
      {
        "title": "200 MG / 250",
        "priceUSD": 143,
        "priceINR": 11869
      },
      {
        "title": "200 MG / 500",
        "priceUSD": 280,
        "priceINR": 23240
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "viagra-professional-100-mg",
    "slug": "viagra-professional-100-mg",
    "name": "Viagra Professional - 100 MG",
    "category": "ED Medication",
    "priceUSD": 134,
    "priceINR": 11122,
    "price": 11122,
    "formattedPrice": "$134.00",
    "unit": "250",
    "dosage": "100 MG",
    "description": "Viagra Professional 100mg is a prescription-grade, high-potency variant of sildenafil used to treat erectile dysfunction. Designed to act faster and offer firmer erections than standard Viagra, it enhances blood flow to the penis during sexual stimulation. The effects typically last for 4 to 5 hours",
    "images": [
      "/products/viagra-professional-100-mg-1.webp"
    ],
    "image": "/products/viagra-professional-100-mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/cenforce-professional-100-cheap-cenforce-sildenafil.png?v=1782600093",
    "variants": [
      {
        "title": "250",
        "priceUSD": 134,
        "priceINR": 11122
      },
      {
        "title": "500",
        "priceUSD": 260,
        "priceINR": 21580
      }
    ],
    "tags": [
      "ED"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  },
  {
    "id": "tapentadol-100mg",
    "slug": "tapentadol-100mg",
    "name": "Tapentadol 100mg",
    "category": "Pain Relief",
    "priceUSD": 330,
    "priceINR": 27390,
    "price": 27390,
    "formattedPrice": "$330.00",
    "unit": "90",
    "dosage": "100mg",
    "description": "Aspadol 100 mg is a potent, prescription-only painkiller containing the active ingredient Tapentadol. It is a centrally acting opioid analgesic primarily used to manage moderate to severe acute pain, such as post-surgical discomfort, trauma, or chronic conditions when other treatments fail",
    "images": [
      "/products/tapentadol-100mg-1.webp"
    ],
    "image": "/products/tapentadol-100mg-1.webp",
    "remoteImage": "https://cdn.shopify.com/s/files/1/0962/9640/3259/files/aspadol-100mg-pain-relief-tablets-918.jpg?v=1782574069",
    "variants": [
      {
        "title": "90",
        "priceUSD": 330,
        "priceINR": 27390
      },
      {
        "title": "180",
        "priceUSD": 660,
        "priceINR": 54780
      },
      {
        "title": "360",
        "priceUSD": 1400,
        "priceINR": 116200
      },
      {
        "title": "540",
        "priceUSD": 2200,
        "priceINR": 182600
      }
    ],
    "tags": [
      "Pain Killers"
    ],
    "vendor": "Care&Cure Pharma",
    "inStock": true
  }
];

export function categorySlug(name) {
  if (!name) return '';
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function getProductBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return PRODUCTS.find(p => p.slug === clean || p.id === clean || p.name.toLowerCase() === clean);
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
