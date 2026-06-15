// ============================================================
//  RETAIL STORE AUDIT DASHBOARD — config.js
//  HOW TO CUSTOMISE:
//  1. Open your Google Sheet → File → Share → Publish to web
//     → Sheet1 → CSV → Publish. Paste that URL into SHEET_URL.
//  2. In COLUMN_MAP, replace every "PASTE_EXACT_HEADER_HERE"
//     string with the exact column header from your sheet
//     (copy-paste — capitalisation matters).
//  3. In SECTIONS, move question keys to the right section
//     and adjust weights so they sum to 1.0.
// ============================================================

window.CONFIG = {

  // ----------------------------------------------------------
  // 1. GOOGLE SHEET CSV URL
  //    Paste the "Published as CSV" URL from your sheet here.
  // ----------------------------------------------------------
  SHEET_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTF9FhyzFMgfAjCxGUv_a6cVxpS0DQGs-r0sWEP9rmEAGvw_mu6s54KLzl6HGpr2O2qgh9ZFOo7gooP/pub?output=csv",

  // ----------------------------------------------------------
  // 2. COLUMN MAP
  //    Left side  = logical key used throughout the dashboard.
  //    Right side = EXACT column header string from your sheet.
  //    Replace every "PASTE_EXACT_HEADER_HERE" with the real text.
  // ----------------------------------------------------------
  COLUMN_MAP: {

    // --- Metadata fields ---
    store_name:        "Store Name",           // e.g. "Store Name" or "Branch"
    city:              "City",                 // e.g. "City" or "Location"
    region:            "Region",               // e.g. "Region" or "Zone"
    regional_manager:  "Regional Manager",     // e.g. "Regional Manager" or "RM Name"
    audit_date:        "Timestamp",            // Google Forms default = "Timestamp"
    auditor_name:      "Auditor Name",         // e.g. "Your Name" or "Auditor"

    // --- Section 1: Store Appearance ---
    q1:  "PASTE_EXACT_HEADER_HERE",   // e.g. "Is the storefront clean and well-lit?"
    q2:  "PASTE_EXACT_HEADER_HERE",
    q3:  "PASTE_EXACT_HEADER_HERE",
    q4:  "PASTE_EXACT_HEADER_HERE",
    q5:  "PASTE_EXACT_HEADER_HERE",
    q6:  "PASTE_EXACT_HEADER_HERE",

    // --- Section 2: Inventory Management ---
    q7:  "PASTE_EXACT_HEADER_HERE",
    q8:  "PASTE_EXACT_HEADER_HERE",
    q9:  "PASTE_EXACT_HEADER_HERE",
    q10: "PASTE_EXACT_HEADER_HERE",
    q11: "PASTE_EXACT_HEADER_HERE",
    q12: "PASTE_EXACT_HEADER_HERE",

    // --- Section 3: Staff Compliance ---
    q13: "PASTE_EXACT_HEADER_HERE",
    q14: "PASTE_EXACT_HEADER_HERE",
    q15: "PASTE_EXACT_HEADER_HERE",
    q16: "PASTE_EXACT_HEADER_HERE",
    q17: "PASTE_EXACT_HEADER_HERE",
    q18: "PASTE_EXACT_HEADER_HERE",

    // --- Section 4: Customer Experience ---
    q19: "PASTE_EXACT_HEADER_HERE",
    q20: "PASTE_EXACT_HEADER_HERE",
    q21: "PASTE_EXACT_HEADER_HERE",
    q22: "PASTE_EXACT_HEADER_HERE",
    q23: "PASTE_EXACT_HEADER_HERE",
    q24: "PASTE_EXACT_HEADER_HERE",

    // --- Section 5: Safety & Security ---
    q25: "PASTE_EXACT_HEADER_HERE",
    q26: "PASTE_EXACT_HEADER_HERE",
    q27: "PASTE_EXACT_HEADER_HERE",
    q28: "PASTE_EXACT_HEADER_HERE",
    q29: "PASTE_EXACT_HEADER_HERE",
    q30: "PASTE_EXACT_HEADER_HERE",
  },

  // ----------------------------------------------------------
  // 3. SECTIONS
  //    Each section has: id, label, question keys, and weight.
  //    All weights must sum to 1.0.
  //    Move question keys (q1, q2 …) to the right section
  //    once you know which questions belong where.
  // ----------------------------------------------------------
  SECTIONS: [
    {
      id:        "appearance",
      label:     "Store Appearance",
      questions: ["q1", "q2", "q3", "q4", "q5", "q6"],
      weight:    0.20
    },
    {
      id:        "inventory",
      label:     "Inventory Management",
      questions: ["q7", "q8", "q9", "q10", "q11", "q12"],
      weight:    0.25
    },
    {
      id:        "staff",
      label:     "Staff Compliance",
      questions: ["q13", "q14", "q15", "q16", "q17", "q18"],
      weight:    0.20
    },
    {
      id:        "customer",
      label:     "Customer Experience",
      questions: ["q19", "q20", "q21", "q22", "q23", "q24"],
      weight:    0.20
    },
    {
      id:        "safety",
      label:     "Safety & Security",
      questions: ["q25", "q26", "q27", "q28", "q29", "q30"],
      weight:    0.15
    }
  ],

  // ----------------------------------------------------------
  // 4. SEVERITY THRESHOLDS  (0–100 scale)
  //    A store's overall score is checked against these.
  // ----------------------------------------------------------
  SEVERITY_THRESHOLDS: {
    critical: 40,   // score < 40  → Critical  (red)
    at_risk:  65,   // score < 65  → At Risk   (amber)
    good:     85,   // score < 85  → Good      (teal)
    excellent: 85   // score ≥ 85  → Excellent (green)
  },

  // ----------------------------------------------------------
  // 5. ANSWER SCORES
  //    Maps each possible answer string → numeric score (0–100).
  //    null means the question is skipped in scoring (N/A).
  //    Add any custom answer options your form uses.
  // ----------------------------------------------------------
  ANSWER_SCORES: {
    "Yes":          100,
    "No":             0,
    "Partial":       50,
    "Mostly Yes":    75,
    "Mostly No":     25,
    "N/A":         null,   // excluded from average
    "na":          null,
    "n/a":         null,
    "":            null    // blank answer also excluded
  },

  // ----------------------------------------------------------
  // 6. AUTO-REFRESH INTERVAL
  //    Dashboard re-fetches the sheet every N milliseconds.
  //    300000 = 5 minutes. Set to 0 to disable.
  // ----------------------------------------------------------
  REFRESH_INTERVAL_MS: 300000,

  // ----------------------------------------------------------
  // 7. FILTERS
  //    These appear as dropdowns in the dashboard filter bar.
  //    key must match a key in COLUMN_MAP above.
  // ----------------------------------------------------------
  FILTERS: [
    { key: "store_name",       label: "Store"            },
    { key: "city",             label: "City"             },
    { key: "region",           label: "Region"           },
    { key: "regional_manager", label: "Regional Manager" }
  ]

};
