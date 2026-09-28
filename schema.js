// Shared schema for the rice leaf disease app farmer survey.
// Used by index.html (renders the form) and admin.html (labels CSV/XLSX columns).
const SURVEY_SCHEMA = [
  { letter: "", title: "জরিপ তথ্য", questions: [
    { id: "surveyor_name", label: "সার্ভেয়ারের নাম", type: "text", default: "Utsho Kumar Mondal", hidden: true },
    { id: "survey_date", label: "তারিখ", type: "date", required: true },
  ]},
  { letter: "ক", title: "সাধারণ তথ্য", questions: [
    { id: "q1_name", label: "১. আপনার নাম", type: "text", required: true },
    { id: "q2_age", label: "২. আপনার বয়স", type: "radio", options: ["১৮-৩০","৩১-৪৫","৪৬-৬০","৬০+"], required: true },
    { id: "father_name", label: "২ক. পিতার নাম", type: "text" },
    { id: "father_age", label: "২খ. পিতার বয়স", type: "radio", options: ["১৮-৩০","৩১-৪৫","৪৬-৬০","৬০+"] },
    { id: "mother_name", label: "২গ. মাতার নাম", type: "text" },
    { id: "mother_age", label: "২ঘ. মাতার বয়স", type: "radio", options: ["১৮-৩০","৩১-৪৫","৪৬-৬০","৬০+"] },
    { id: "q3_gender", label: "৩. লিঙ্গ", type: "radio", options: ["পুরুষ","মহিলা","অন্যান্য"], required: true },
    { id: "q4_education", label: "৪. শিক্ষাগত যোগ্যতা", type: "radio", options: ["নেই","প্রাথমিক","মাধ্যমিক","উচ্চ মাধ্যমিক+"], required: true },
    { id: "q5_division", label: "৫ক. বিভাগ", type: "geo", required: true },
    { id: "q5_district", label: "৫খ. জেলা", type: "geo", required: true },
    { id: "q5_upazila", label: "৫গ. উপজেলা", type: "geo", required: true },
    { id: "q6_experience", label: "৬. কৃষিকাজের অভিজ্ঞতা", type: "radio", options: ["৫ বছরের কম","৫-১০","১১-২০","২০+"], required: true },
    { id: "q7_land", label: "৭. চাষযোগ্য জমির পরিমাণ", type: "radio", options: ["১ বিঘার কম","১-৩","৪-১০","১০+"], required: true },
    { id: "q8_rice_main", label: "৮. আপনি কি মূলত ধান চাষ করেন?", type: "radio", options: ["হ্যাঁ","না","ধান+অন্যান্য"], required: true },
    { id: "q9_income", label: "৯. আয়ের উৎস", type: "radio", options: ["শুধু কৃষি","কৃষি+অন্য কাজ","শুধু অন্য কাজ"], required: true },
  ]},
  { letter: "খ", title: "রোগ সম্পর্কে সচেতনতা", questions: [
    { id: "q10_leaf_problem", label: "১০. ধান ক্ষেতে পাতার রোগের সমস্যায় পড়েছেন কি?", type: "radio", options: ["নিয়মিত","মাঝে মাঝে","কখনো না","নিশ্চিত না"], required: true },
    { id: "q11_known_diseases", label: "১১. নিচের কোন কোন রোগের নাম আপনি চেনেন/শুনেছেন?", type: "checkbox", options: ["ব্যাকটেরিয়াল লিফ ব্লাইট","ব্লাস্ট","বাদামিদাগ","লিফ স্মাট","রাইস হিস্পা","টুংরো","শীথ ব্লাইট","কোনোটিই না"], required: true },
    { id: "q12_other_disease", label: "১২. উপরে উল্লেখ নেই এমন অন্য কোনো রোগ/সমস্যার নাম জানলে লিখুন", type: "text" },
    { id: "q13_advice_source", label: "১৩. রোগ শনাক্তে সাধারণত কার পরামর্শ নেন?", type: "radio", options: ["কৃষি অফিসার","দোকানদার","প্রতিবেশী","ইন্টারনেট","নিজের অভিজ্ঞতা","কারো না"], required: true },
    { id: "q14_current_control", label: "১৪. রোগদমনে বর্তমানে কী ব্যবহার করেন?", type: "radio", options: ["রাসায়নিক ওষুধ","জৈব পদ্ধতি","উভয়","কিছুই না"], required: true },
    { id: "q15_loss", label: "১৫. দেরিতে শনাক্তের কারণে ফসলের ক্ষতি", type: "radio", options: ["নেই","১০% এর কম","১০-৩০%","৩০%+"], required: true },
    { id: "q16_extension_contact", label: "১৬. কৃষি সম্প্রসারণ অফিসারের সাথে নিয়মিত যোগাযোগ আছে কি?", type: "radio", options: ["হ্যাঁ","না","মাঝে মাঝে"], required: true },
  ]},
  { letter: "গ", title: "স্মার্টফোন ও অ্যান্ড্রয়েড ব্যবহার", questions: [
    { id: "q17_has_phone", label: "১৭. ব্যক্তিগত মোবাইল ফোন আছে কি?", type: "radio", options: ["হ্যাঁ","না"], required: true },
    { id: "q18_phone_type", label: "১৮. ফোনের ধরন", type: "radio", options: ["অ্যান্ড্রয়েড স্মার্টফোন","আইফোন/অন্যান্য","বাটন ফোন","নেই"], required: true, skipWhen: { id: "q17_has_phone", equals: "না" } },
    { id: "q19_family_android", label: "১৯. পরিবারের কারো কাছে অ্যান্ড্রয়েড ফোন আছে যা ব্যবহার করা যায়?", type: "radio", options: ["হ্যাঁ","না","প্রযোজ্য নয়"], required: true },
    { id: "q20_data_connection", label: "২০. মোবাইলে ইন্টারনেট/ডেটা সংযোগ আছে কি?", type: "radio", options: ["নিয়মিত","মাঝে মাঝে","নেই"], required: true },
    { id: "q21_daily_use", label: "২১. প্রতিদিন গড়ে স্মার্টফোন ব্যবহারের সময়", type: "radio", options: ["১ ঘণ্টার কম","১-২ ঘণ্টা","৩-৫ ঘণ্টা","৫+ ঘণ্টা"], required: true, skipWhen: { id: "q17_has_phone", equals: "না" } },
    { id: "q22_app_familiarity", label: "২২. ফেসবুক/ইউটিউব/হোয়াটসঅ্যাপ ব্যবহার করতে জানেন?", type: "radio", options: ["ভালোভাবে জানি","কিছুটা জানি","জানি না"], required: true, skipWhen: { id: "q17_has_phone", equals: "না" } },
    { id: "q23_young_gen", label: "২৩. নতুন প্রজন্ম (ছেলে-মেয়ে) কি আপনার চেয়ে বেশি দক্ষ?", type: "radio", options: ["হ্যাঁ, অনেক বেশি","কিছুটা বেশি","প্রায় সমান","প্রযোজ্য নয়"], required: true },
    { id: "q24_used_agri_app", label: "২৪. আগে কোনো কৃষি বিষয়ক অ্যাপ ব্যবহার করেছেন?", type: "radio", options: ["হ্যাঁ","না","শুনেছি, ব্যবহার করিনি"], required: true },
    { id: "q25_voice_pref", label: "২৫. লেখা পড়তে সমস্যা হলে ভয়েস/অডিও নির্দেশনা পছন্দ করবেন?", type: "radio", options: ["হ্যাঁ","না","নিশ্চিত না"], required: true },
    { id: "q26_bangla_reading", label: "২৬. আপনি বাংলা লেখা সাবলীলভাবে পড়তে পারেন কি?", type: "radio", options: ["হ্যাঁ","কিছুটা","পারি না"], required: true },
    { id: "q27_wifi", label: "২৭. বাড়িতে ওয়াইফাই সংযোগ আছে কি?", type: "radio", options: ["হ্যাঁ","না"], required: true },
    { id: "q28_learn_with_help", label: "২৮. সাহায্য নিয়ে নতুন অ্যাপ শিখতে/ব্যবহার করতে আগ্রহী?", type: "radio", options: ["হ্যাঁ","না","হয়তো"], required: true },
  ]},
  { letter: "ঘ", title: "কৃষি বিষয়ক প্রশিক্ষণ ও দক্ষতা", questions: [
    { id: "q29_had_training", label: "২৯. আপনি কি কখনো কোনো কৃষি বিষয়ক প্রশিক্ষণ গ্রহণ করেছেন?", type: "radio", options: ["হ্যাঁ","না"], required: true },
    { id: "q30_training_source", label: "৩০. প্রশিক্ষণটি কোন সংস্থা/দপ্তর থেকে গ্রহণ করেছেন?", type: "radio", options: ["কৃষি অফিস","কৃষি সম্প্রসারণ অফিস","অন্যান্য"], skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q31_training_topics", label: "৩১. আপনি কোন বিষয়ে কৃষি প্রশিক্ষণ গ্রহণ করেছেন?", type: "checkbox", options: ["ধান চাষ","রোগ ও পোকামাকড় দমন","কৃষিতত্ত্ব/কৃষি প্রযুক্তি","সার ব্যবহার","কীটনাশক ব্যবহার","জৈব পদ্ধতি","পানি ব্যবস্থাপনা"], other: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q32_use_training", label: "৩২. প্রশিক্ষণ থেকে পাওয়া জ্ঞান আপনি বর্তমানে কৃষিকাজে ব্যবহার করেন কি?", type: "radio", options: ["হ্যাঁ","না","মাঝে মাঝে"], required: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q33_disease_training", label: "৩৩. আপনি কি ধানের পাতার রোগ ও অন্যান্য রোগ শনাক্তকরণ বিষয়ে প্রশিক্ষণ পেয়েছেন?", type: "radio", options: ["হ্যাঁ","না"], required: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q34_pesticide_training", label: "৩৪. আপনি কি কীটনাশক ব্যবহারের সঠিক নিয়ম সম্পর্কে প্রশিক্ষণ পেয়েছেন?", type: "radio", options: ["হ্যাঁ","না"], required: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q35_future_interest", label: "৩৫. ভবিষ্যতে আরও কৃষি বিষয়ক প্রশিক্ষণ নিতে আগ্রহী কি?", type: "radio", options: ["অবশ্যই আগ্রহী","মাঝে মাঝে","আগ্রহী না"], required: true },
    { id: "q36_most_needed", label: "৩৬. কোন ধরনের কৃষি প্রশিক্ষণ আপনার জন্য সবচেয়ে বেশি প্রয়োজন?", type: "text" },
    { id: "q37_barrier", label: "৩৭. কৃষি প্রশিক্ষণ গ্রহণ করার প্রধান বাধা কি?", type: "radio", options: ["সময়ের অভাব","দূরত্ব","অজ্ঞানতা","তথ্যর অভাব","অন্যান্য"], required: true },
    { id: "q38_wants_regular_advice", label: "৩৮. আপনি কি নিয়মিত কৃষি অফিসার/কৃষি সম্প্রসারণ কর্মকর্তার কাছ থেকে কৃষি বিষয়ক পরামর্শ বা প্রশিক্ষণ নিতে চান?", type: "radio", options: ["হ্যাঁ","না"], required: true },
  ]},
  { letter: "ঙ", title: "প্রশিক্ষণ ও কৃষি জ্ঞান সম্পর্কিত অতিরিক্ত প্রশ্ন", questions: [
    { id: "q39_skill_growth", label: "৩৯. প্রশিক্ষণ গ্রহণের পর আপনার কৃষি কাজের দক্ষতা কতটা বৃদ্ধি পেয়েছে?", type: "radio", options: ["অনেক","কিছুটা","কোন পরিবর্তন হয়নি","নিশ্চিত না"], required: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q40_necessity", label: "৪০. আপনি কি কৃষি বিষয়ক প্রশিক্ষণকে কৃষিকাজের জন্য প্রয়োজনীয় মনে করেন?", type: "radio", options: ["খুবই প্রয়োজনীয়","প্রয়োজনীয়","কম প্রয়োজনীয়","প্রয়োজনীয় নয়"], required: true },
    { id: "q41_hands_on", label: "৪১. আপনি কি প্রশিক্ষণের সময় ব্যবহারিকভাবে (হ্যান্ডস-অন) শিখতে পেরেছেন?", type: "radio", options: ["হ্যাঁ","না","কিছুটা"], required: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q42_shares_knowledge", label: "৪২. আপনি কি প্রশিক্ষণ থেকে পাওয়া জ্ঞান অন্য কৃষকদের সাথে শেয়ার করেন?", type: "radio", options: ["নিয়মিত","মাঝে মাঝে","কখনো না"], required: true, skipWhen: { id: "q29_had_training", equals: "না" } },
    { id: "q43_seeks_info_online", label: "৪৩. আপনি কি কৃষি বিষয়ক কোন প্রশিক্ষণ/তথ্য সম্পর্কে মোবাইলে বা ইন্টারনেটে জানতে চেষ্টা করেন?", type: "radio", options: ["নিয়মিত","মাঝে মাঝে","কখনো না"], required: true },
    { id: "q44_preferred_medium", label: "৪৪. কৃষি প্রশিক্ষণ পাওয়ার জন্য আপনি কোন মাধ্যমকে সবচেয়ে সুবিধাজনক মনে করেন?", type: "radio", options: ["সরাসরি প্রশিক্ষণ","মোবাইল অ্যাপ","ভিও/ইউটিউব","কৃষি অফিসারের পরামর্শ","অন্যান্য"], required: true },
    { id: "q45_would_use_app", label: "৪৫. যদি একটি মোবাইল অ্যাপ দিয়ে ধানের রোগ শনাক্তকরণ ও কৃষি পরামর্শ পাওয়া যায়, আপনি তা ব্যবহার করতে চান কি?", type: "radio", options: ["অবশ্যই চান","চান","মাঝে মাঝে","চান না"], required: true },
    { id: "q46_training_benefit", label: "৪৬. অ্যাপের মাধ্যমে প্রশিক্ষণ/ট্রেনিং পেলে আপনি কতটা সুবিধা পেতে পারেন মনে করেন?", type: "radio", options: ["খুবই সুবিধা","সুবিধা","কিছুটা সুবিধা","সুবিধা হবে না"], required: true },
    { id: "q47_photo_convenience", label: "৪৭. আপনি কি ধানের পাতার রোগ শনাক্তকরণের জন্য ছবি তুলে মোবাইল অ্যাপ ব্যবহার করতে সুবিধাজনক মনে করেন?", type: "radio", options: ["হ্যাঁ","না","নিশ্চিত না"], required: true },
    { id: "q48_follow_advice", label: "৪৮. রোগ শনাক্তকরণের সময় অ্যাপে প্রতিকার/দমন ব্যবস্থা সম্পর্কে পরামর্শ পেলে আপনি তা অনুসরণ করবেন কি?", type: "radio", options: ["হ্যাঁ","না","পরিস্থিতি অনুযায়ী"], required: true },
    { id: "q49_biggest_hope", label: "৪৯. কৃষি অ্যাপ ব্যবহারের ক্ষেত্রে আপনার সবচেয়ে বড় আশা কি?", type: "radio", options: ["রোগ শনাক্তকরণ","প্রতিকার প্রদানের পরামর্শ","কৃষি জ্ঞান","বাজার/দর সম্পর্কে তথ্য","আবহাওয়া তথ্য","অন্যান্য"], required: true },
    { id: "q50_biggest_concern", label: "৫০. কৃষি অ্যাপ ব্যবহারের ক্ষেত্রে আপনার প্রধান উদ্বেগ কি?", type: "radio", options: ["নেট ও ইন্টারনেট","মোবাইল ব্যবহার জানেন না","তথ্যর সঠিকতা","ভাষা","ফোন না থাকা","অন্যান্য"], required: true },
    { id: "q51_yearly_interest", label: "৫১. আপনি কি প্রতিবছর কৃষি বিষয়ক নতুন প্রযুক্তি/প্রশিক্ষণ সম্পর্কে জানতে আগ্রহী?", type: "radio", options: ["হ্যাঁ","না","মাঝে মাঝে"], required: true },
    { id: "q52_convenient_time", label: "৫২. কৃষি বিষয়ক পরামর্শ পাওয়ার জন্য আপনি কোন সময়ের মধ্যে অ্যাপ ব্যবহার করতে বেশি সুবিধাজনক মনে করেন?", type: "radio", options: ["সকাল","দুপুর","বিকাল","রাত","সময় নেই"], required: true },
    { id: "q53_knows_ph", label: "৫৩. আপনি কি pH সম্পর্কে জানেন?", type: "radio", options: ["হ্যাঁ","না"], required: true },
    { id: "q54_knows_tds", label: "৫৪. আপনি কি TDS সম্পর্কে জানেন?", type: "radio", options: ["হ্যাঁ","না"], required: true },
    { id: "q55_wants_ph_tds_info", label: "৫৫. ধান চাষে pH এবং TDS কীভাবে প্রভাব ফেলতে পারে সে সম্পর্কে আপনি কি জানতে চান?", type: "radio", options: ["হ্যাঁ","না"], required: true },
  ]},
  { letter: "", title: "সম্মতি", questions: [
    { id: "consent", label: "স্বজ্ঞানে ও স্বেচ্ছায় আমার তথ্য প্রদান করছি। এই তথ্য আমার কোনো ক্ষতির কারণ হবে না, এই বিশ্বাসে গবেষণার কাজে আমার পূর্ণাঙ্গ তথ্য ব্যবহারের অনুমতি প্রদান করছি এবং এতে আমার কোনো আপত্তি নেই।", type: "radio", options: ["হ্যাঁ","না"], required: true },
  ]},
];

// Flat list of {id,label} for every field, in order — used to build CSV/XLSX columns.
function flatFields() {
  const out = [];
  SURVEY_SCHEMA.forEach(sec => sec.questions.forEach(q => {
    out.push({ id: q.id, label: q.label });
    if (q.other) out.push({ id: q.id + "_other", label: q.label + " — অন্যান্য" });
  }));
  out.push({ id: "relation", label: "সম্পর্ক (নিজে/পিতা/মাতা)" });
  out.push({ id: "submission_group_id", label: "জমার গ্রুপ আইডি" });
  out.push({ id: "submitted_at", label: "জমার সময়" });
  return out;
}
