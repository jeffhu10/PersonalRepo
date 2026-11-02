// ============================================================
// SUPABASE CONFIG — REPLACE WITH YOUR OWN
// ============================================================
const SUPABASE_URL = 'https://kglcdyvwwevhwsamhmwp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbGNkeXZ3d2V2aHdzYW1obXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNDA5NDEsImV4cCI6MjA5NDcxNjk0MX0.9LQGzs-rqABHejd0C8lbj4y02EeR-8iJgdKK026unG4';


// ============================================================
// DEFAULT DATA
// ============================================================
const DEFAULT_MOVEMENTS = [
  { name: 'Run',             default_min: '200m',   default_med: '400m',   default_max: '800m' },
  { name: 'Row (cal)',       default_min: '10 cal', default_med: '15 cal', default_max: '21 cal' },
  { name: 'Bike Erg (cal)',  default_min: '10 cal', default_med: '15 cal', default_max: '21 cal' },
  { name: 'Ski Erg (cal)',   default_min: '10 cal', default_med: '12 cal', default_max: '18 cal' },
  { name: 'Burpees',         default_min: '8',      default_med: '15',     default_max: '25' },
  { name: 'Snatch',          default_min: '3',      default_med: '5',      default_max: '7' },
  { name: 'Power Snatch',    default_min: '3',      default_med: '5',      default_max: '7' },
  { name: 'Clean',           default_min: '3',      default_med: '5',      default_max: '7' },
  { name: 'Power Clean',     default_min: '3',      default_med: '5',      default_max: '10' },
  { name: 'Clean & Jerk',    default_min: '2',      default_med: '3',      default_max: '5' },
  { name: 'Deadlift',        default_min: '5',      default_med: '8',      default_max: '12' },
  { name: 'Front Squat',     default_min: '5',      default_med: '8',      default_max: '10' },
  { name: 'Back Squat',      default_min: '5',      default_med: '8',      default_max: '10' },
  { name: 'Bench Press',     default_min: '5',      default_med: '8',      default_max: '12' },
  { name: 'Strict Press',    default_min: '5',      default_med: '8',      default_max: '10' },
  { name: 'Thruster',        default_min: '6',      default_med: '10',     default_max: '15' },
  { name: 'Wall Balls',      default_min: '12',     default_med: '20',     default_max: '30' },
  { name: 'Box Jumps',       default_min: '8',      default_med: '12',     default_max: '20' },
  { name: 'DB Snatch',       default_min: '8',      default_med: '14',     default_max: '20' },
  { name: 'KB Swings',       default_min: '12',     default_med: '20',     default_max: '30' },
  { name: 'DB Lunges',       default_min: '10',     default_med: '16',     default_max: '24' },
  { name: 'Walking Lunges',  default_min: '20m',    default_med: '30m',    default_max: '40m' },
  { name: 'Pull-ups',        default_min: '5',      default_med: '10',     default_max: '15' },
  { name: 'Strict Pull-ups', default_min: '3',      default_med: '6',      default_max: '10' },
  { name: 'Toes-to-Bar',     default_min: '5',      default_med: '10',     default_max: '15' },
  { name: 'HSPU',            default_min: '3',      default_med: '6',      default_max: '10' },
  { name: 'Muscle-ups',      default_min: '2',      default_med: '4',      default_max: '6' },
  { name: 'Pistols',         default_min: '6',      default_med: '10',     default_max: '14' }
];

// Movement-specific strength prescriptions for STRENGTH format.
// Maps movement name to its rep scheme + coaching notes. Used by the STRENGTH format
// to render a tailored instructions block based on which movement spun.
const STRENGTH_SCHEMES = {
  'Bench Press':   { target: 'Build to 80% of your 1RM for 5×5', warmup: 'Bar warm-up, then 5 reps @ 50%, 5 @ 60%, 3 @ 70%, then start working sets at 75% and add weight each set to 80%.', rest: 'Rest 2–3 min between working sets.', cues: 'Feet planted, shoulder blades pinched, full chest contact, no bounce off the chest.' },
  'Back Squat':    { target: 'Build to 80% of your 1RM for 5×5', warmup: '5 reps @ 50%, 5 @ 60%, 3 @ 70%, then working sets at 75% → 80%.', rest: 'Rest 3 min between working sets.', cues: 'Big breath in at the top, brace your core, hips below parallel, drive knees out on the way up.' },
  'Front Squat':   { target: 'Build to 80% of your 1RM for 5×3', warmup: '5 reps @ 50%, 3 @ 60%, 3 @ 70%, 3 @ 75%, then working sets at 80%.', rest: 'Rest 2–3 min between working sets.', cues: 'Elbows high, chest tall, vertical torso. If your elbows drop, the bar rolls.' },
  'Deadlift':      { target: 'Build to 80% of your 1RM for 5×3', warmup: '5 @ 50%, 3 @ 60%, 3 @ 70%, 1 @ 75%, then working sets at 80%.', rest: 'Rest 3 min between working sets.', cues: 'Bar over mid-foot, lats tight (think “protect your armpits”), drive the floor away. Reset every rep — no touch-and-go.' },
  'Strict Press':  { target: 'Build to 75% of your 1RM for 5×5', warmup: 'Empty bar, 5 @ 50%, 5 @ 60%, 3 @ 70%, then working sets at 75%.', rest: 'Rest 2 min between working sets.', cues: 'Squeeze glutes, ribs down, bar finishes overhead with your biceps next to your ears.' },
  'Snatch':        { target: 'EMOM 10 minutes: 2 reps every minute @ 70% of your 1RM', warmup: 'Bar work + hip openers, then build: 2 @ 50%, 2 @ 60%, then start the EMOM at 70%.', rest: 'Rest is whatever\'s left of each minute.', cues: 'Stay over the bar, fast elbows, punch yourself into the bottom of the overhead squat. Bar speed over heavy weight.' },
  'Power Snatch':  { target: 'EMOM 10 minutes: 2 reps every minute @ 70% of your 1RM', warmup: '2 @ 50%, 2 @ 60%, then start the EMOM at 70%.', rest: 'Rest is whatever\'s left of each minute.', cues: 'Catch above parallel, feet land where they started, finish tall and locked out.' },
  'Clean':         { target: 'EMOM 10 minutes: 2 reps every minute @ 70% of your 1RM', warmup: '2 @ 50%, 2 @ 60%, then start the EMOM at 70%.', rest: 'Rest is whatever\'s left of each minute.', cues: 'Patient off the floor, explosive at the hip, fast elbows around to the rack.' },
  'Power Clean':   { target: 'EMOM 10 minutes: 2 reps every minute @ 70% of your 1RM', warmup: '2 @ 50%, 2 @ 60%, then start the EMOM at 70%.', rest: 'Rest is whatever\'s left of each minute.', cues: 'Catch above parallel, elbows whip through to the rack. Drop the bar and reset every rep.' },
  'Clean & Jerk':  { target: 'Build to a heavy single (not necessarily a 1RM PR)', warmup: '2 @ 50%, 2 @ 60%, 1 @ 70%, 1 @ 80%, then singles at 85%+. Stop when form breaks.', rest: 'Rest 90s–2 min between heavy singles.', cues: 'Hit your positions. If you miss the same way twice, drop 5–10kg and rebuild — don\'t grind ugly reps.' }
};

// Strength/skill movement pools for Part A
const STRENGTH_POOL = ['Back Squat','Front Squat','Deadlift','Bench Press','Strict Press','Snatch','Power Snatch','Clean','Power Clean','Clean & Jerk'];

// Metcon movement pool for Part B
const METCON_POOL = ['Wall Balls','Box Jumps','DB Snatch','KB Swings','Thruster','Pull-ups','Toes-to-Bar','Row (cal)','Bike Erg (cal)','Burpees','Power Clean','DB Lunges','Walking Lunges','Run','HSPU','Ski Erg (cal)'];

// Continuous pool — low-skill movements suited to steady-state work
const CONTINUOUS_POOL = ['Run','Row (cal)','Bike Erg (cal)','Ski Erg (cal)','KB Swings','Wall Balls','DB Snatch','Walking Lunges','Burpees','DB Lunges'];

const DEFAULT_FORMATS = [
  // ===== PART A =====
  {
    half: 'A',
    code: 'STR',
    name: 'STRENGTH',
    blurb: '20 min — one main lift, scheme adapts to the movement',
    instructions: [
      'You\'ll have 20 minutes for one main lift — the prescription below tells you exactly how to load it.',
      'Warm up to your first working set with the progressive jumps shown. Don\'t skip the lighter sets — they prime the pattern.',
      'If you don\'t know your 1RM: pick a weight where the last rep of your working set feels like a 7/10 effort. Add weight next session if all reps moved well.',
      'Quality over quantity. Stop a set if your form breaks down — log what you hit and move on.'
    ],
    sections: [
      { label: 'Main Lift', slots: 1, pool: STRENGTH_POOL }
    ]
  },
  {
    half: 'A',
    code: 'YGIG',
    name: 'YOU GO I GO',
    blurb: '20 min partner workout — 4 movements, you and your partner alternate full rounds',
    instructions: [
      'Pair up with someone of similar fitness.',
      'You complete all 4 movements in order (one round), then it\'s your partner\'s turn while you rest. Keep alternating for 20 minutes.',
      'Your score is total rounds completed between the two of you.',
      'Pick reps and loads so each round takes you 90–120 seconds. If a round takes you more than 2 min, scale it down for the next one.',
      'Push hard — your rest is whatever your partner needs to finish their round.'
    ],
    sections: [
      { label: 'Movement Couplet (4 moves)', slots: 4, pool: METCON_POOL }
    ]
  },

  // ===== PART B =====
  {
    half: 'B',
    code: 'CONT',
    name: 'CONTINUOUS',
    blurb: '25–30 min steady aerobic — keep moving the whole time',
    instructions: [
      'This is steady — NOT a race. You should be able to hold a short conversation throughout.',
      'Move through the 3 movements continuously for 25–30 minutes. No prescribed rounds — just keep going.',
      'Aim for nose-breathing pace. If you\'re mouth-breathing hard, slow down.',
      'Your score is total rounds + reps (or total distance/calories if it\'s a single machine).',
      'If you need to rest more than 10 seconds between movements, the load is too heavy — drop it.'
    ],
    sections: [
      { label: 'Continuous Triplet', slots: 3, pool: CONTINUOUS_POOL }
    ]
  },
  {
    half: 'B',
    code: 'AMRAP',
    name: 'AMRAP 20',
    blurb: 'As Many Rounds As Possible in 20 minutes — 4 movements',
    instructions: [
      'Complete the 4 movements in order, then repeat. Score is total rounds + reps in your final partial round.',
      'Start slow. The first 3 minutes should feel almost too easy — if you\'re gassed by minute 5, you went out too hard.',
      'Break your reps before you have to. 15 wall balls feels better as 8+7 than as a failed unbroken set.',
      'Aim for 6–10 rounds total. Try to make the second half faster than the first.',
      'If you can\'t do the prescribed reps unbroken on your first round, scale the load or rep count down before you start.'
    ],
    sections: [
      { label: 'AMRAP Circuit', slots: 4, pool: METCON_POOL }
    ]
  },
  {
    half: 'B',
    code: 'CHIP',
    name: 'CHIPPER',
    blurb: 'For time — descending reps, cap 25 min',
    instructions: [
      'Chip through each movement in order before moving to the next. Reps descend as you go (e.g. 50-40-30-20-10).',
      'For time: your score is how long it takes you to finish, or total reps if you hit the 25-minute cap.',
      'Break the big sets early. The first movement has the most reps — don\'t go unbroken or you\'ll wreck yourself for everything after.',
      'Pace at about 75–80% effort. Chippers reward consistency. Sprint the last movement, not the first.',
      'Pick loads light enough that you could do 10–15 reps unbroken when fresh.'
    ],
    sections: [
      { label: 'Chipper Sequence (descending reps)', slots: 5, pool: METCON_POOL }
    ]
  }
];

const DEFAULT_COACHES = ['Katelin', 'Jose'];
const DELETE_PASSCODE = '0000';

// ============================================================
// SUPABASE / LOCALSTORAGE LAYER
// ============================================================
let USE_SUPABASE = SUPABASE_URL.startsWith('http') && SUPABASE_KEY.length > 20;
let coaches = [], movements = [], formats = [];
let myDoses = {}, myExcludedA = [], myExcludedB = [], myHistory = [];
let currentCoach = null;

async function sbRequest(method, path, body) {
  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  const headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': method === 'POST' ? 'return=representation' : 'return=minimal'
  };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const r = await fetch(url, opts);
  if (!r.ok) { const text = await r.text(); throw new Error(`Supabase ${method} ${path}: ${r.status} ${text}`); }
  if (method === 'DELETE' || method === 'PATCH') return null;
  return await r.json();
}

async function loadAllData() {
  if (USE_SUPABASE) {
    try {
      const status = document.getElementById('connectionStatus');
      status.textContent = 'Connecting to cloud...';
      coaches = await sbRequest('GET', 'coaches?select=*&order=name');
      movements = await sbRequest('GET', 'movements?select=*&order=name');
      formats = await sbRequest('GET', 'formats?select=*&order=half,code');
      if (coaches.length === 0) {
        for (const name of DEFAULT_COACHES) await sbRequest('POST', 'coaches', { name });
        coaches = await sbRequest('GET', 'coaches?select=*&order=name');
      }
      if (movements.length === 0) {
        await sbRequest('POST', 'movements', DEFAULT_MOVEMENTS);
        movements = await sbRequest('GET', 'movements?select=*&order=name');
      }
      if (formats.length === 0) {
        await sbRequest('POST', 'formats', DEFAULT_FORMATS.map(f => ({ ...f })));
        formats = await sbRequest('GET', 'formats?select=*&order=half,code');
      }
      // Backfill: if any format is missing the half field, default to B
      formats.forEach(f => { if (!f.half) f.half = 'B'; });

      status.textContent = 'CLOUD CONNECTED';
      status.className = 'connection-status online';
    } catch (e) {
      console.error('Supabase error:', e);
      const status = document.getElementById('connectionStatus');
      status.textContent = 'OFFLINE — using local storage';
      status.className = 'connection-status offline';
      USE_SUPABASE = false;
      loadFromLocalStorage();
    }
  } else {
    const status = document.getElementById('connectionStatus');
    status.textContent = 'LOCAL MODE — set up Supabase to sync';
    status.className = 'connection-status offline';
    loadFromLocalStorage();
  }
}

function loadFromLocalStorage() {
  try {
    const c = localStorage.getItem('ss_coaches');
    coaches = c ? JSON.parse(c) : DEFAULT_COACHES.map((name, i) => ({ id: i+1, name }));
    const m = localStorage.getItem('ss_movements');
    movements = m ? JSON.parse(m) : DEFAULT_MOVEMENTS.map((v, i) => ({ id: i+1, ...v }));
    const f = localStorage.getItem('ss_formats');
    formats = f ? JSON.parse(f) : DEFAULT_FORMATS.map((v, i) => ({ id: i+1, ...v }));
    formats.forEach(fmt => { if (!fmt.half) fmt.half = 'B'; });
    persistLocal();
  } catch(e) {
    coaches = DEFAULT_COACHES.map((name, i) => ({ id: i+1, name }));
    movements = DEFAULT_MOVEMENTS.map((v, i) => ({ id: i+1, ...v }));
    formats = DEFAULT_FORMATS.map((v, i) => ({ id: i+1, ...v }));
  }
}
function persistLocal() {
  try {
    localStorage.setItem('ss_coaches', JSON.stringify(coaches));
    localStorage.setItem('ss_movements', JSON.stringify(movements));
    localStorage.setItem('ss_formats', JSON.stringify(formats));
  } catch(e) {}
}

async function loadCoachData(coachId) {
  if (USE_SUPABASE) {
    try {
      const doses = await sbRequest('GET', `coach_doses?coach_id=eq.${coachId}&select=*`);
      myDoses = {};
      doses.forEach(d => { myDoses[d.movement_name] = { min: d.min, med: d.med, max: d.max }; });
      const prefs = await sbRequest('GET', `coach_prefs?coach_id=eq.${coachId}&select=*`);
      if (prefs.length > 0) {
        myExcludedA = prefs[0].excluded_a_ids || [];
        myExcludedB = prefs[0].excluded_b_ids || [];
      } else { myExcludedA = []; myExcludedB = []; }
      const hist = await sbRequest('GET', `coach_history?coach_id=eq.${coachId}&select=*&order=created_at.desc&limit=50`);
      myHistory = hist.map(h => ({ id: h.id, date: h.created_at, formatA: h.format_a, formatB: h.format_b, slots: h.slots_snapshot }));
    } catch(e) { console.error(e); myDoses = {}; myExcludedA = []; myExcludedB = []; myHistory = []; }
  } else {
    try {
      const d = localStorage.getItem(`ss_doses_${coachId}`);
      myDoses = d ? JSON.parse(d) : {};
      const ea = localStorage.getItem(`ss_excluded_a_${coachId}`);
      myExcludedA = ea ? JSON.parse(ea) : [];
      const eb = localStorage.getItem(`ss_excluded_b_${coachId}`);
      myExcludedB = eb ? JSON.parse(eb) : [];
      const h = localStorage.getItem(`ss_history_${coachId}`);
      myHistory = h ? JSON.parse(h) : [];
    } catch(e) { myDoses = {}; myExcludedA = []; myExcludedB = []; myHistory = []; }
  }
}

async function saveCoachDoses() {
  if (USE_SUPABASE) {
    try {
      await sbRequest('DELETE', `coach_doses?coach_id=eq.${currentCoach.id}`);
      const rows = Object.entries(myDoses).map(([name, d]) => ({
        coach_id: currentCoach.id, movement_name: name, min: d.min, med: d.med, max: d.max
      }));
      if (rows.length > 0) await sbRequest('POST', 'coach_doses', rows);
    } catch(e) { console.error(e); showToast('SAVE FAILED', true); }
  } else {
    try { localStorage.setItem(`ss_doses_${currentCoach.id}`, JSON.stringify(myDoses)); } catch(e) {}
  }
}

async function saveCoachPrefs() {
  if (USE_SUPABASE) {
    try {
      await sbRequest('DELETE', `coach_prefs?coach_id=eq.${currentCoach.id}`);
      await sbRequest('POST', 'coach_prefs', [{
        coach_id: currentCoach.id,
        excluded_a_ids: myExcludedA,
        excluded_b_ids: myExcludedB
      }]);
    } catch(e) { console.error(e); }
  } else {
    try {
      localStorage.setItem(`ss_excluded_a_${currentCoach.id}`, JSON.stringify(myExcludedA));
      localStorage.setItem(`ss_excluded_b_${currentCoach.id}`, JSON.stringify(myExcludedB));
    } catch(e) {}
  }
}

async function saveCoachHistoryEntry(entry) {
  if (USE_SUPABASE) {
    try {
      await sbRequest('POST', 'coach_history', [{
        coach_id: currentCoach.id,
        format_a: entry.formatA,
        format_b: entry.formatB,
        slots_snapshot: entry.slots
      }]);
    } catch(e) { console.error(e); }
  } else {
    try { localStorage.setItem(`ss_history_${currentCoach.id}`, JSON.stringify(myHistory)); } catch(e) {}
  }
}

async function clearCoachHistory() {
  if (USE_SUPABASE) { try { await sbRequest('DELETE', `coach_history?coach_id=eq.${currentCoach.id}`); } catch(e) {} }
  else { try { localStorage.removeItem(`ss_history_${currentCoach.id}`); } catch(e) {} }
  myHistory = [];
}

// ============================================================
// PROFILE PICKER
// ============================================================
function renderCoachGrid() {
  const grid = document.getElementById('coachGrid');
  grid.innerHTML = '';
  coaches.forEach(c => {
    const initials = c.name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    const tile = document.createElement('div');
    tile.className = 'coach-tile';
    tile.innerHTML = `
      <button class="delete-x" onclick="event.stopPropagation();deleteCoach(${c.id},'${escapeAttr(c.name)}')">×</button>
      <div class="avatar-lg">${initials}</div>
      <div class="name-lg">${escapeHtml(c.name)}</div>
    `;
    tile.onclick = () => selectCoach(c);
    grid.appendChild(tile);
  });
  const addTile = document.createElement('div');
  addTile.className = 'coach-tile add';
  addTile.innerHTML = `<div class="avatar-lg">+</div><div class="name-lg">New Coach</div>`;
  addTile.onclick = addCoachPrompt;
  grid.appendChild(addTile);
}

async function selectCoach(coach) {
  currentCoach = coach;
  await loadCoachData(coach.id);
  movements.forEach(m => {
    if (!myDoses[m.name]) myDoses[m.name] = { min: m.default_min, med: m.default_med, max: m.default_max };
  });
  document.getElementById('profileScreen').classList.add('hidden');
  document.getElementById('mainApp').style.display = 'block';
  const initials = coach.name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  document.getElementById('coachAvatar').textContent = initials;
  document.getElementById('coachName').textContent = coach.name;
  initApp();
}

function switchCoach() {
  resetSpinState();
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('profileScreen').classList.remove('hidden');
  renderCoachGrid();
}

let smallModalCallback = null;
let smallModalIsConfirm = false;
function openSmallModal(title, body, defaultValue, inputType, callback) {
  document.getElementById('smModalTitle').textContent = title;
  document.getElementById('smModalBody').textContent = body;
  const inp = document.getElementById('smModalInput');
  inp.style.display = '';
  inp.type = inputType || 'text';
  inp.value = defaultValue || '';
  smallModalCallback = callback;
  smallModalIsConfirm = false;
  document.getElementById('smallModalBg').classList.add('show');
  setTimeout(() => inp.focus(), 50);
  inp.onkeypress = (e) => { if (e.key === 'Enter') confirmSmallModal(); };
}
function openConfirmModal(title, body, callback) {
  document.getElementById('smModalTitle').textContent = title;
  document.getElementById('smModalBody').textContent = body;
  const inp = document.getElementById('smModalInput');
  inp.style.display = 'none';
  smallModalCallback = callback;
  smallModalIsConfirm = true;
  document.getElementById('smallModalBg').classList.add('show');
}
function closeSmallModal() {
  document.getElementById('smallModalBg').classList.remove('show');
  document.getElementById('smModalInput').style.display = '';
  smallModalCallback = null;
  smallModalIsConfirm = false;
}
function confirmSmallModal() {
  if (smallModalIsConfirm) {
    const cb = smallModalCallback;
    closeSmallModal();
    if (cb) cb();
    return;
  }
  const val = document.getElementById('smModalInput').value.trim();
  const cb = smallModalCallback;
  closeSmallModal();
  if (cb) cb(val);
}

// Confirm a destructive gym-wide action with the shared passcode.
// Used wherever an edit affects every coach in the gym (deleting a shared format,
// deleting a shared movement, etc.) so it can't happen by accident.
function openPasscodeConfirm(title, body, callback) {
  openSmallModal(
    title,
    body + ` Enter the gym passcode (${DELETE_PASSCODE}) to confirm.`,
    '',
    'password',
    (code) => {
      if (code !== DELETE_PASSCODE) { showToast('WRONG PASSCODE — NO CHANGES MADE', true); return; }
      callback();
    }
  );
}

function addCoachPrompt() {
  openSmallModal('Add new coach', 'Enter the coach\'s name.', '', 'text', async (name) => {
    if (!name) return;
    if (coaches.some(c => c.name.toLowerCase() === name.toLowerCase())) { showToast('NAME ALREADY EXISTS', true); return; }
    let newCoach;
    if (USE_SUPABASE) {
      try { const r = await sbRequest('POST', 'coaches', [{ name }]); newCoach = r[0]; }
      catch(e) { showToast('FAILED TO ADD', true); return; }
    } else { newCoach = { id: Date.now(), name }; }
    coaches.push(newCoach);
    coaches.sort((a,b) => a.name.localeCompare(b.name));
    persistLocal();
    renderCoachGrid();
    showToast('COACH ADDED');
  });
}

function deleteCoach(id, name) {
  openSmallModal(`Delete ${name}?`, 'Enter passcode to confirm.', '', 'password', async (code) => {
    if (code !== DELETE_PASSCODE) { showToast('WRONG PASSCODE', true); return; }
    if (USE_SUPABASE) {
      try {
        await sbRequest('DELETE', `coach_doses?coach_id=eq.${id}`);
        await sbRequest('DELETE', `coach_prefs?coach_id=eq.${id}`);
        await sbRequest('DELETE', `coach_history?coach_id=eq.${id}`);
        await sbRequest('DELETE', `coaches?id=eq.${id}`);
      } catch(e) { showToast('DELETE FAILED', true); return; }
    } else {
      try {
        localStorage.removeItem(`ss_doses_${id}`);
        localStorage.removeItem(`ss_excluded_a_${id}`);
        localStorage.removeItem(`ss_excluded_b_${id}`);
        localStorage.removeItem(`ss_history_${id}`);
      } catch(e) {}
    }
    coaches = coaches.filter(c => c.id !== id);
    persistLocal();
    renderCoachGrid();
    showToast('COACH DELETED');
  });
}

function escapeHtml(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escapeAttr(s) { return String(s||'').replace(/"/g,'&quot;').replace(/'/g,"\\'"); }

// ============================================================
// SPIN STATE
// ============================================================
let state = {
  formatA: null,
  formatB: null,
  slots: [],   // includes both A and B slots; each has .half = 'A' or 'B'
  currentMovementIdx: -1,
  phase: 'idle',  // idle | format-a-done | format-b-done | spinning-doses | complete
  spinning: false
};

function resetSpinState() {
  state = { formatA: null, formatB: null, slots: [], currentMovementIdx: -1, phase: 'idle', spinning: false };
}

// ============================================================
// BALANCED TIER DISTRIBUTION (equal-weight multisets)
// ============================================================
function generateBalancedTiers(N) {
  if (N <= 0) return [];
  if (N === 1) return ['med'];
  const multisets = [];
  const maxK = Math.floor(N / 2);
  for (let k = 0; k <= maxK; k++) {
    const k_med = N - 2 * k;
    if (k_med < 0) continue;
    multisets.push({ k_min: k, k_med, k_max: k });
  }
  const chosen = multisets[Math.floor(Math.random() * multisets.length)];
  const tiers = [];
  for (let i = 0; i < chosen.k_min; i++) tiers.push('min');
  for (let i = 0; i < chosen.k_med; i++) tiers.push('med');
  for (let i = 0; i < chosen.k_max; i++) tiers.push('max');
  for (let i = tiers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiers[i], tiers[j]] = [tiers[j], tiers[i]];
  }
  return tiers;
}

// ============================================================
// HORIZONTAL SCROLLER
// ============================================================
const PALETTE = ['#d5b75f', '#4cc9f0', '#e63946', '#06d6a0', '#a663cc', '#f77f00', '#f72585', '#3a86ff', '#80ed99', '#fcbf49', '#ff006e', '#e8c97a'];

function getItemWidth() {
  // Fallback only — the new spinScroller measures tile widths directly via
  // getBoundingClientRect() rather than relying on this constant. Kept for
  // legacy callers like prepareMovementScroller / initFormatScrollerPreview
  // which only need an approximate width to seed initial layout.
  const w = window.innerWidth;
  if (w <= 380) return 101;   // very narrow phones (matches CSS flex+margin)
  if (w <= 700) return 116;   // standard mobile
  if (w <= 600) return 136;   // (kept for legacy, never reached after above)
  return 168;                  // desktop
}

/**
 * Animate the scrolling strip and land on items[winnerIdx].
 *
 * Design goal: the tile under the central indicator at the end of the
 * animation MUST be the same tile that was passed in as the winner. Past
 * versions of this function predicted final positions using hardcoded tile
 * widths and accumulated float-math errors over hundreds of tiles. The fix:
 * stop predicting, start measuring.
 *
 * Flow:
 *   1. Render a long strip of tiles into the track.
 *   2. Force layout, then measure each tile's actual rendered position.
 *   3. Pick a "target tile" — one specific tile in the strip whose label
 *      matches items[winnerIdx] and that sits comfortably near the end
 *      (leaving buffer tiles after it).
 *   4. Animate the track by translating it so the target tile's measured
 *      center aligns with the measured indicator center.
 *   5. After animation completes, re-measure to confirm which tile is
 *      under the indicator and mark THAT one as the winner. If somehow
 *      the wrong tile ended up under the indicator (shouldn't happen but
 *      this is the safety net), the badge follows the truth not the math.
 */
function spinScroller(track, items, subs, winnerIdx) {
  return new Promise(resolve => {
    const wrap = track.parentElement;

    // ---- Step 1: Build a strip of tiles ----
    // We want the strip to be wide enough that:
    //   - Plenty of tiles enter from the right during the spin
    //   - Plenty of tiles remain to the right of the winner when it lands
    //     (so no blank space appears past the last tile)
    // Build 80 tiles repeated from items, place winner near 75% through.
    // 80 is plenty for any viewport up to 2000px wide with any tile width.
    const STRIP_SIZE = 80;
    const winnerStripPosition = Math.floor(STRIP_SIZE * 0.7);  // tile index in strip
    // Adjust so the tile AT that position has the right label
    // (winnerStripPosition mod items.length === winnerIdx)
    const winnerPositionInStrip = winnerStripPosition - (winnerStripPosition % items.length) + winnerIdx;

    track.innerHTML = '';
    track.style.transition = 'none';
    track.style.transform = 'translateX(0px)';

    const tileEls = [];
    for (let i = 0; i < STRIP_SIZE; i++) {
      const itemIdx = i % items.length;
      const el = document.createElement('div');
      el.className = 'scroller-item';
      el.dataset.stripIdx = i;
      el.dataset.itemIdx = itemIdx;
      el.innerHTML = `
        <div class="item-color" style="background:${PALETTE[itemIdx % PALETTE.length]}"></div>
        <div class="item-label">${escapeHtml(items[itemIdx])}</div>
        ${subs && subs[itemIdx] ? `<div class="item-sub">${escapeHtml(subs[itemIdx])}</div>` : ''}
      `;
      track.appendChild(el);
      tileEls.push(el);
    }

    // ---- Step 2: Force layout, then measure everything ----
    // Reading offsetWidth forces a synchronous layout. Now all bounding rects
    // are accurate. We measure positions relative to the track's own
    // coordinate system (track.scrollLeft/getBoundingClientRect.left), not
    // viewport coords — that way the measurements are independent of where
    // the wrap is on the page.
    void track.offsetWidth;
    const trackRect = track.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();

    // The indicator's visual center, relative to the track's origin at x=0.
    // Wrap center − track origin = where indicator sits within the track.
    const indicatorCenterInTrack = (wrapRect.left + wrapRect.width / 2) - trackRect.left;

    // Measured position of the chosen target tile's center, in the track's
    // coordinate system (since track is at transform: translateX(0) right now,
    // tile rects directly give us their positions within the track).
    const targetTile = tileEls[winnerPositionInStrip];
    const targetRect = targetTile.getBoundingClientRect();
    const targetCenterInTrack = (targetRect.left + targetRect.width / 2) - trackRect.left;

    // ---- Step 3: Compute exactly how far to translate ----
    // We want: after translation, targetCenter (in viewport coords) == indicatorCenter (in viewport coords)
    // Translation moves the track left by translateX pixels.
    // After translate: target's new viewport x = (targetCenterInTrack + trackRect.left) + translateX
    // We want that to equal:               wrapRect.left + wrapRect.width / 2
    // → translateX = (wrapRect.left + wrapRect.width / 2) - (targetCenterInTrack + trackRect.left)
    //              = indicatorCenterInTrack - targetCenterInTrack
    const translateX = indicatorCenterInTrack - targetCenterInTrack;

    // ---- Step 4: Animate ----
    // Force the browser to commit the "transition: none + transform: 0" state
    // before applying the new transition, so the animation starts fresh.
    void track.offsetWidth;
    track.style.transition = 'transform 5.2s cubic-bezier(0.08, 0.62, 0.16, 1)';
    track.style.transform = `translateX(${translateX}px)`;

    // ---- Step 5: After landing, verify and mark the winner ----
    setTimeout(() => {
      // Re-measure: which tile is closest to the indicator NOW?
      // This is the safety net — the visible winner is whatever's under
      // the indicator, regardless of what we predicted. If math was off
      // for any reason, the badge still goes on the correct tile, AND
      // we resolve with the actually-landed item index so the calling
      // code records what the user actually sees.
      const indicatorViewportX = wrapRect.left + wrapRect.width / 2;
      let closest = null;
      let closestDist = Infinity;
      tileEls.forEach(el => {
        const r = el.getBoundingClientRect();
        const center = r.left + r.width / 2;
        const dist = Math.abs(center - indicatorViewportX);
        if (dist < closestDist) {
          closestDist = dist;
          closest = el;
        }
      });
      tileEls.forEach(el => el.classList.remove('winner'));
      if (closest) closest.classList.add('winner');

      const landedItemIdx = closest ? Number(closest.dataset.itemIdx) : winnerIdx;

      // Defensive: if the closest tile is NOT the one we intended, log it
      // so we can debug. In a healthy run this never fires.
      if (landedItemIdx !== winnerIdx) {
        console.warn('[spinScroller] Visual landing tile differs from intended winner', {
          intendedItemIdx: winnerIdx,
          intendedLabel: items[winnerIdx],
          landedItemIdx,
          landedLabel: items[landedItemIdx],
          distancePx: closestDist
        });
      }
      resolve(landedItemIdx);
    }, 5200);
  });
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function myFormatsA() {
  return formats.filter(f => f.half === 'A' && !myExcludedA.includes(f.id));
}
function myFormatsB() {
  return formats.filter(f => f.half === 'B' && !myExcludedB.includes(f.id));
}

// ============================================================
// STAGE 1: SPIN PART A FORMAT
// ============================================================
async function spinFormatA(isRespin = false) {
  if (state.spinning) return;
  const available = myFormatsA();
  if (available.length === 0) { showToast('NO PART A FORMATS IN YOUR WHEEL — EDIT CONFIG', true); return; }

  state.spinning = true;
  // Reset everything below
  state.formatA = null;
  state.formatB = null;
  state.slots = [];
  state.currentMovementIdx = -1;
  state.phase = 'idle';
  document.getElementById('movementPanelA').style.display = 'none';
  document.getElementById('formatPanelB').style.display = 'none';
  document.getElementById('movementPanelB').style.display = 'none';
  document.getElementById('doseRevealPanel').style.display = 'none';
  document.getElementById('progressPanel').style.display = 'none';

  const items = available.map(f => f.name);
  const subs = available.map(f => 'Part A · ' + f.code);
  const intendedIdx = Math.floor(Math.random() * available.length);
  // Use the landed index (what's visually under the indicator) rather than
  // the intended one — guarantees the recorded format matches what the user sees.
  const landedIdx = await spinScroller(document.getElementById('formatScrollerA'), items, subs, intendedIdx);

  state.formatA = JSON.parse(JSON.stringify(available[landedIdx]));
  state.formatA.sections.forEach((sec, sIdx) => {
    for (let i = 0; i < sec.slots; i++) {
      state.slots.push({
        half: 'A',
        formatCode: state.formatA.code,
        sectionIdx: sIdx, sectionLabel: sec.label,
        position: i + 1, sectionTotal: sec.slots,
        move: null, dose: null, tier: null, pool: sec.pool
      });
    }
  });

  document.getElementById('formatResultA').textContent = state.formatA.code + ' — ' + state.formatA.name;
  document.getElementById('formatResultA').classList.remove('empty');

  state.currentMovementIdx = state.slots.findIndex(s => !s.move);
  state.phase = 'spinning-movements-a';
  document.getElementById('movementPanelA').style.display = 'block';
  document.getElementById('movementPanelA').classList.remove('dim');
  document.getElementById('formatPanelA').classList.add('dim');
  document.getElementById('movementSpinBtnA').disabled = false;
  prepareMovementScroller('A');

  document.getElementById('progressPanel').style.display = 'block';
  renderProgress();
  renderWorkoutCard();
  state.spinning = false;
}

// ============================================================
// STAGE 2: SPIN PART A MOVEMENTS
// ============================================================
function prepareMovementScroller(half) {
  if (state.currentMovementIdx < 0 || state.currentMovementIdx >= state.slots.length) return;
  const slot = state.slots[state.currentMovementIdx];
  if (slot.half !== half) return;
  const usedInSection = state.slots
    .filter((s,i) => s.half === slot.half && s.sectionIdx === slot.sectionIdx && i !== state.currentMovementIdx && s.move)
    .map(s => s.move);
  let pool = slot.pool.filter(m => !usedInSection.includes(m));
  if (pool.length === 0) pool = slot.pool;

  const track = document.getElementById('movementScroller' + half);
  track.style.transition = 'none';
  track.innerHTML = '';

  // Repeat the pool enough times to overfill the wrap, then center the
  // track horizontally so the visible tiles look like the middle of an
  // infinite carousel rather than a short, ragged list.
  const iw = getItemWidth();
  const wrap = track.parentElement;
  const wrapWidth = wrap.offsetWidth || 700;
  const needed = Math.ceil(wrapWidth / iw) + 4;
  const repeats = Math.max(1, Math.ceil(needed / pool.length));
  const totalTiles = repeats * pool.length;
  for (let i = 0; i < totalTiles; i++) {
    const idx = i % pool.length;
    const label = pool[idx];
    const el = document.createElement('div');
    el.className = 'scroller-item';
    el.innerHTML = `
      <div class="item-color" style="background:${PALETTE[idx % PALETTE.length]}"></div>
      <div class="item-label">${escapeHtml(label)}</div>
    `;
    track.appendChild(el);
  }
  // Center one of the middle cycles in the wrap
  const middleTileIdx = Math.floor(totalTiles / 2);
  const centerOffset = -(middleTileIdx * iw + iw/2) + wrapWidth/2;
  track.style.transform = `translateX(${centerOffset}px)`;

  document.getElementById('movementContext' + half).innerHTML =
    `Section: <span class="hot">${escapeHtml(slot.sectionLabel)}</span> · slot <span class="hot">${slot.position}/${slot.sectionTotal}</span> · difficulty rolls in the final dose reveal`;
}

async function spinMovementA(isRespin = false) {
  await spinMovement('A', isRespin);
}
async function spinMovementB(isRespin = false) {
  await spinMovement('B', isRespin);
}

async function spinMovement(half, isRespin = false) {
  if (state.spinning) return;
  if (state.currentMovementIdx < 0 || state.currentMovementIdx >= state.slots.length) return;
  const slot = state.slots[state.currentMovementIdx];
  if (slot.half !== half) return;

  state.spinning = true;
  const usedInSection = state.slots
    .filter((s,i) => s.half === slot.half && s.sectionIdx === slot.sectionIdx && i !== state.currentMovementIdx && s.move)
    .map(s => s.move);
  let pool = slot.pool.filter(m => !usedInSection.includes(m));
  if (pool.length === 0) pool = slot.pool;

  let candidatePool = pool;
  if (isRespin && slot.move && pool.length > 1) candidatePool = pool.filter(m => m !== slot.move);

  const intendedWinner = pick(candidatePool);
  const intendedIdx = pool.indexOf(intendedWinner);

  const landedIdx = await spinScroller(document.getElementById('movementScroller' + half), pool, null, intendedIdx);

  const winner = pool[landedIdx];
  slot.move = winner;
  document.getElementById('movementResult' + half).innerHTML = escapeHtml(winner);
  document.getElementById('movementResult' + half).classList.remove('empty');

  renderProgress();
  renderWorkoutCard();

  if (!isRespin) {
    // Check if all slots in THIS half are filled
    const halfSlots = state.slots.filter(s => s.half === half);
    const halfDone = halfSlots.every(s => s.move);

    if (halfDone) {
      if (half === 'A') {
        // Part A done — open Part B
        state.phase = 'format-a-done';
        document.getElementById('movementPanelA').classList.add('dim');
        document.getElementById('movementSpinBtnA').disabled = true;
        document.getElementById('formatPanelB').style.display = 'block';
        document.getElementById('formatPanelB').classList.remove('dim');
        document.getElementById('formatSpinBtnB').disabled = false;
        showToast('✅ PART A LOCKED IN — SPIN PART B');
        // Scroll smoothly to Part B
        setTimeout(() => document.getElementById('formatPanelB').scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
      } else {
        // Part B done — open dose reveal
        // Check overall: all slots (both halves) must have movements
        const allDone = state.slots.every(s => s.move);
        if (allDone) {
          state.phase = 'movements-done';
          document.getElementById('movementPanelB').classList.add('dim');
          document.getElementById('movementSpinBtnB').disabled = true;
          document.getElementById('doseRevealPanel').style.display = 'block';
          document.getElementById('doseRevealCount').textContent = state.slots.length;
          showToast('🎯 ALL MOVEMENTS LOCKED IN');
          setTimeout(() => document.getElementById('doseRevealPanel').scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
        }
      }
    } else {
      // Advance to next unfilled slot in this half
      let next = state.slots.findIndex((s, i) => i > state.currentMovementIdx && s.half === half && !s.move);
      if (next === -1) next = state.slots.findIndex(s => s.half === half && !s.move);
      state.currentMovementIdx = next;
      prepareMovementScroller(half);
      document.getElementById('movementResult' + half).textContent = '—';
      document.getElementById('movementResult' + half).classList.add('empty');
    }
  }
  state.spinning = false;
  renderProgress();
}

// ============================================================
// STAGE 3: SPIN PART B FORMAT
// ============================================================
async function spinFormatB(isRespin = false) {
  if (state.spinning) return;
  if (!state.formatA) { showToast('SPIN PART A FIRST', true); return; }
  const available = myFormatsB();
  if (available.length === 0) { showToast('NO PART B FORMATS IN YOUR WHEEL — EDIT CONFIG', true); return; }

  state.spinning = true;
  // Clear any existing Part B state (if respinning)
  state.formatB = null;
  state.slots = state.slots.filter(s => s.half === 'A');
  document.getElementById('movementPanelB').style.display = 'none';
  document.getElementById('doseRevealPanel').style.display = 'none';

  const items = available.map(f => f.name);
  const subs = available.map(f => 'Part B · ' + f.code);
  const intendedIdx = Math.floor(Math.random() * available.length);
  const landedIdx = await spinScroller(document.getElementById('formatScrollerB'), items, subs, intendedIdx);

  state.formatB = JSON.parse(JSON.stringify(available[landedIdx]));
  state.formatB.sections.forEach((sec, sIdx) => {
    for (let i = 0; i < sec.slots; i++) {
      state.slots.push({
        half: 'B',
        formatCode: state.formatB.code,
        sectionIdx: sIdx, sectionLabel: sec.label,
        position: i + 1, sectionTotal: sec.slots,
        move: null, dose: null, tier: null, pool: sec.pool
      });
    }
  });

  document.getElementById('formatResultB').textContent = state.formatB.code + ' — ' + state.formatB.name;
  document.getElementById('formatResultB').classList.remove('empty');

  state.currentMovementIdx = state.slots.findIndex(s => s.half === 'B' && !s.move);
  state.phase = 'spinning-movements-b';
  document.getElementById('movementPanelB').style.display = 'block';
  document.getElementById('movementPanelB').classList.remove('dim');
  document.getElementById('formatPanelB').classList.add('dim');
  document.getElementById('movementSpinBtnB').disabled = false;
  prepareMovementScroller('B');

  renderProgress();
  renderWorkoutCard();
  state.spinning = false;
}

// ============================================================
// FINAL DOSE REVEAL
// ============================================================
async function spinAllDoses() {
  if (state.spinning) return;
  if (state.phase !== 'movements-done' && state.phase !== 'complete') return;

  state.spinning = true;
  state.phase = 'spinning-doses';
  document.getElementById('doseRevealBtn').disabled = true;

  // Roll fresh tiers per (half, section) — each section's tier permutation is independent
  // Iterate over each half's sections separately
  ['A','B'].forEach(half => {
    const halfSlots = state.slots.filter(s => s.half === half);
    // group by sectionIdx
    const sectionGroups = {};
    halfSlots.forEach(s => {
      if (!sectionGroups[s.sectionIdx]) sectionGroups[s.sectionIdx] = [];
      sectionGroups[s.sectionIdx].push(s);
    });
    Object.values(sectionGroups).forEach(slotsInSection => {
      const tiers = generateBalancedTiers(slotsInSection.length);
      slotsInSection.forEach((s, k) => {
        s.tier = tiers[k];
        s.dose = null;
      });
    });
  });

  // Precompute winners for each slot
  const slotData = state.slots.map(slot => {
    const d = myDoses[slot.move] || { min: '?', med: '?', max: '?' };
    const winner = slot.tier === 'min' ? d.min : slot.tier === 'med' ? d.med : d.max;
    return { d, winner, tier: slot.tier };
  });

  renderProgress();

  const slotGrid = document.getElementById('slotGrid');
  const doseEls = slotGrid.querySelectorAll('.slot-dose');
  const tierEls = slotGrid.querySelectorAll('.slot-tier');
  const slotBlocks = slotGrid.querySelectorAll('.slot-block');
  slotBlocks.forEach(b => b.classList.add('dose-spinning'));
  doseEls.forEach(el => el.classList.add('cycling'));
  tierEls.forEach(el => {
    el.classList.remove('min','med','max');
    el.classList.add('cycling-tier');
    el.textContent = '···';
  });

  const TIERS = ['min','med','max'];
  const CYCLE_INTERVAL = 70;
  const BASE_DURATION = 2400;
  const STAGGER = 240;

  const stopTimes = slotData.map((_, i) => BASE_DURATION + i * STAGGER);
  const startTime = performance.now();
  const stopped = new Array(slotData.length).fill(false);

  return new Promise(resolve => {
    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      let allStopped = true;

      doseEls.forEach((el, i) => {
        if (stopped[i]) return;
        if (elapsed >= stopTimes[i]) {
          const winner = slotData[i].winner;
          const winnerTier = slotData[i].tier;
          el.textContent = winner;
          el.classList.remove('cycling');
          tierEls[i].classList.remove('cycling-tier');
          tierEls[i].classList.add(winnerTier);
          tierEls[i].textContent = winnerTier.toUpperCase();
          slotBlocks[i].classList.remove('dose-spinning');
          slotBlocks[i].classList.add('done');
          state.slots[i].dose = winner;
          stopped[i] = true;
        } else {
          const d = slotData[i].d;
          el.textContent = pick([d.min, d.med, d.max]);
          const flickerTier = pick(TIERS);
          tierEls[i].classList.remove('min','med','max');
          tierEls[i].classList.add(flickerTier);
          tierEls[i].textContent = flickerTier.toUpperCase();
          allStopped = false;
        }
      });

      renderWorkoutCard();

      if (allStopped) {
        clearInterval(interval);
        state.phase = 'complete';
        state.spinning = false;
        document.getElementById('doseRevealBtn').disabled = false;
        document.getElementById('doseRevealBtn').textContent = '🎲 RE-SPIN ALL DOSES';
        showToast('🎉 WORKOUT COMPLETE');
        renderProgress();
        renderWorkoutCard();
        // On mobile, auto-expand the workout card so the coach immediately sees the finished WOD
        if (window.innerWidth <= 700) {
          document.getElementById('workoutCard').classList.add('expanded');
        }
        resolve();
      }
    }, CYCLE_INTERVAL);
  });
}

// ============================================================
// PROGRESS PANEL
// ============================================================
function renderProgress() {
  const filled = state.slots.filter(s => s.dose).length;
  const total = state.slots.length;
  document.getElementById('progressFilled').textContent = filled;
  document.getElementById('progressTotal').textContent = total;
  document.getElementById('progressBarFill').style.width = (total ? (filled / total * 100) : 0) + '%';

  const grid = document.getElementById('slotGrid');
  grid.innerHTML = '';

  // Render Half A then Half B
  ['A','B'].forEach(half => {
    const halfSlots = state.slots.map((s,i) => ({s,i})).filter(x => x.s.half === half);
    if (halfSlots.length === 0) return;

    // Half divider
    const fmt = half === 'A' ? state.formatA : state.formatB;
    const div = document.createElement('div');
    div.className = 'half-divider ' + half.toLowerCase();
    div.textContent = `PART ${half}${fmt ? ' · ' + fmt.code : ''}`;
    grid.appendChild(div);

    // Group by section within half
    let currentSection = -1;
    halfSlots.forEach(({s: slot, i}) => {
      if (slot.sectionIdx !== currentSection) {
        currentSection = slot.sectionIdx;
        const header = document.createElement('div');
        header.className = 'section-header-progress';
        header.textContent = '↳ ' + slot.sectionLabel.toUpperCase();
        grid.appendChild(header);
      }
      const block = document.createElement('div');
      block.className = 'slot-block';
      const isCurrent = (state.phase === 'spinning-movements-a' || state.phase === 'spinning-movements-b')
                       && i === state.currentMovementIdx;
      if (isCurrent) block.classList.add('current', slot.half.toLowerCase());
      else if (slot.dose) block.classList.add('done');
      else if (slot.move) block.classList.add('done');
      else block.classList.add('empty');

      const tierClass = slot.tier || '';
      const tierLabel = slot.tier ? slot.tier.toUpperCase() : '···';
      block.innerHTML = `
        <div class="slot-position">${String(slot.position).padStart(2,'0')}</div>
        <div class="slot-move">${escapeHtml(slot.move) || '— awaiting spin —'}</div>
        <div class="slot-dose">${escapeHtml(slot.dose) || ''}</div>
        <div class="slot-tier ${tierClass}">${tierLabel}</div>
      `;
      if (slot.move && state.phase !== 'spinning-doses') {
        block.style.cursor = 'pointer';
        block.title = 'Click to re-spin this movement';
        block.addEventListener('click', () => jumpToSlot(i));
      }
      grid.appendChild(block);
    });
  });
}

function jumpToSlot(i) {
  if (state.spinning) return;
  const slot = state.slots[i];
  // Reset this slot's movement; clear ALL tiers and doses since dose reveal re-rolls all of them
  state.slots[i].move = null;
  state.slots.forEach(s => { s.tier = null; s.dose = null; });
  state.currentMovementIdx = i;
  state.phase = 'spinning-movements-' + slot.half.toLowerCase();

  // Make sure the right panel is visible and active
  const otherHalf = slot.half === 'A' ? 'B' : 'A';
  document.getElementById('movementPanel' + slot.half).classList.remove('dim');
  document.getElementById('movementSpinBtn' + slot.half).disabled = false;
  document.getElementById('doseRevealPanel').style.display = 'none';
  document.getElementById('doseRevealBtn').textContent = '🎲 SPIN ALL DOSES';

  prepareMovementScroller(slot.half);
  document.getElementById('movementResult' + slot.half).textContent = '—';
  document.getElementById('movementResult' + slot.half).classList.add('empty');
  renderProgress();
  renderWorkoutCard();
  showToast('RE-SPIN PART ' + slot.half + ' SLOT ' + String(slot.position).padStart(2,'0'));
  setTimeout(() => document.getElementById('movementPanel' + slot.half).scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
}

// ============================================================
// WORKOUT CARD
// ============================================================
// Render one half of the workout (Part A or Part B) — includes format, blurb,
// movement list, and an instructions block. For STRENGTH format with a known
// movement, also renders the movement-specific rep scheme from STRENGTH_SCHEMES.
function renderHalfHtml(half) {
  const fmt = half === 'A' ? state.formatA : state.formatB;
  if (!fmt) return '';
  const halfClass = half.toLowerCase();
  let html = `<div class="wc-half-block ${halfClass}">`;
  html += `<div class="wc-half-header ${halfClass}">PART ${half} · ${escapeHtml(fmt.code)}</div>`;
  html += `<div class="wc-half-format">${escapeHtml(fmt.name)}</div>`;
  html += `<div class="wc-half-blurb">${escapeHtml(fmt.blurb)}</div>`;

  // Movement / dose lines
  fmt.sections.forEach((sec, sIdx) => {
    const sectionSlots = state.slots.filter(s => s.half === half && s.sectionIdx === sIdx);
    if (sec.slots > 1 || fmt.sections.length > 1) {
      html += `<div class="wc-section-header">↳ ${escapeHtml(sec.label)}</div>`;
    }
    sectionSlots.forEach(slot => {
      if (slot.dose) html += `<div class="wc-line"><span class="num">${escapeHtml(slot.dose)}</span>${escapeHtml(slot.move)}</div>`;
      else if (slot.move) html += `<div class="wc-line"><span class="num pending">?</span>${escapeHtml(slot.move)}</div>`;
      else html += `<div class="wc-line pending"><span class="num">·</span>— awaiting spin —</div>`;
    });
  });

  // Movement-specific scheme for STRENGTH format
  if (fmt.code === 'STR') {
    const slot = state.slots.find(s => s.half === half && s.move);
    if (slot) {
      const scheme = STRENGTH_SCHEMES[slot.move];
      if (scheme) {
        html += `<div class="wc-scheme ${halfClass}">`;
        html += `<div class="wc-scheme-label">${escapeHtml(slot.move)} · how to load it</div>`;
        html += `<div class="wc-scheme-line"><strong>Target:</strong> ${escapeHtml(scheme.target)}</div>`;
        html += `<div class="wc-scheme-line"><strong>Warm-up:</strong> ${escapeHtml(scheme.warmup)}</div>`;
        html += `<div class="wc-scheme-line"><strong>Rest:</strong> ${escapeHtml(scheme.rest)}</div>`;
        html += `<div class="wc-scheme-line"><strong>Cues:</strong> ${escapeHtml(scheme.cues)}</div>`;
        html += `</div>`;
      }
    }
  }

  // General instructions
  if (fmt.instructions && fmt.instructions.length) {
    html += `<div class="wc-notes ${halfClass}">`;
    html += `<div class="wc-notes-label">How to do it</div>`;
    fmt.instructions.forEach(line => {
      html += `<div class="wc-notes-line">${escapeHtml(line)}</div>`;
    });
    html += `</div>`;
  }
  html += `</div>`; // close .wc-half-block
  return html;
}

function renderWorkoutCard() {
  const card = document.getElementById('workoutCard');
  const title = document.getElementById('wcTitle');
  const body = document.getElementById('wcBody');
  const actions = document.getElementById('wcActions');

  if (!state.formatA && !state.formatB) {
    card.classList.add('empty');
    title.textContent = 'AWAITING SPIN';
    body.innerHTML = '<div class="wc-empty-msg">Spin Part A to begin building today\'s session.</div>';
    actions.style.display = 'none';
    return;
  }

  card.classList.remove('empty');
  // Title shows the chosen format codes once the workout takes shape
  let titleParts = [];
  if (state.formatA) titleParts.push(state.formatA.code);
  if (state.formatB) titleParts.push(state.formatB.code);
  title.textContent = titleParts.length ? titleParts.join(' + ') : 'SUNDAY SESSION';

  let html = '';
  if (state.formatA) html += renderHalfHtml('A');
  if (state.formatB) html += renderHalfHtml('B');
  else if (state.formatA) {
    html += `<div class="wc-half-block b">`;
    html += `<div class="wc-half-header b" style="opacity:0.5;">PART B · PENDING</div>`;
    html += `<div class="wc-half-blurb" style="opacity:0.6;">Spin Part B format to fill in the metcon.</div>`;
    html += `</div>`;
  }

  body.innerHTML = html;
  const allDone = state.slots.length > 0 && state.slots.every(s => s.dose);
  actions.style.display = allDone ? 'flex' : 'none';
}

// ============================================================
// HISTORY
// ============================================================
async function saveWorkout() {
  if (!state.formatA || !state.formatB || state.slots.some(s => !s.dose)) return;
  const entry = {
    id: Date.now(),
    date: new Date().toISOString(),
    formatA: state.formatA,
    formatB: state.formatB,
    slots: state.slots
  };
  myHistory.unshift(entry);
  if (myHistory.length > 50) myHistory = myHistory.slice(0, 50);
  await saveCoachHistoryEntry(entry);
  renderHistory();
  showToast('SAVED TO HISTORY');
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (myHistory.length === 0) {
    list.innerHTML = '<div class="hist-empty">No saved spins yet. Complete a workout and hit SAVE.</div>';
    return;
  }
  list.innerHTML = myHistory.map(h => {
    const d = new Date(h.date);
    const dateStr = d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
    const timeStr = d.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });
    const slotsA = h.slots.filter(s => s.half === 'A');
    const slotsB = h.slots.filter(s => s.half === 'B');
    const aSummary = slotsA.map(s => `${s.dose} ${s.move}`).join(' · ');
    const bSummary = slotsB.map(s => `${s.dose} ${s.move}`).join(' · ');
    const fa = h.formatA || h.format; // backward compat
    const fb = h.formatB;
    return `<div class="hist-card" onclick="loadFromHistory('${h.id}')">
      <div class="hist-date">${dateStr} · ${timeStr}</div>
      ${fa ? `<div class="hist-format-line"><span class="a-mark">A·${escapeHtml(fa.code)}</span>${escapeHtml(fa.name)}</div>` : ''}
      <div style="font-size:11px;color:var(--ink-dim);margin-bottom:6px;">${escapeHtml(aSummary)}</div>
      ${fb ? `<div class="hist-format-line"><span class="b-mark">B·${escapeHtml(fb.code)}</span>${escapeHtml(fb.name)}</div>` : ''}
      <div style="font-size:11px;color:var(--ink-dim);">${escapeHtml(bSummary)}</div>
    </div>`;
  }).join('');
}

function loadFromHistory(id) {
  const entry = myHistory.find(h => String(h.id) === String(id));
  if (!entry) return;
  state.formatA = entry.formatA;
  state.formatB = entry.formatB;
  state.slots = entry.slots;
  state.currentMovementIdx = state.slots.length;
  state.phase = 'complete';

  if (state.formatA) {
    document.getElementById('formatResultA').textContent = state.formatA.code + ' — ' + state.formatA.name;
    document.getElementById('formatResultA').classList.remove('empty');
    document.getElementById('formatPanelA').classList.add('dim');
  }
  if (state.formatB) {
    document.getElementById('formatPanelB').style.display = 'block';
    document.getElementById('formatPanelB').classList.add('dim');
    document.getElementById('formatResultB').textContent = state.formatB.code + ' — ' + state.formatB.name;
    document.getElementById('formatResultB').classList.remove('empty');
  }
  document.getElementById('movementPanelA').style.display = 'none';
  document.getElementById('movementPanelB').style.display = 'none';
  document.getElementById('doseRevealPanel').style.display = 'none';
  document.getElementById('progressPanel').style.display = 'block';
  renderProgress();
  renderWorkoutCard();
  showToast('LOADED FROM HISTORY');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function clearHistory() {
  if (!confirm('Clear all your saved spins?')) return;
  await clearCoachHistory();
  renderHistory();
}

// ============================================================
// ACTIONS
// ============================================================
function getHalfText(half) {
  const fmt = half === 'A' ? state.formatA : state.formatB;
  if (!fmt) return '';
  let txt = `PART ${half} — ${fmt.name}\n${fmt.blurb}\n\n`;
  fmt.sections.forEach((sec, sIdx) => {
    const sectionSlots = state.slots.filter(s => s.half === half && s.sectionIdx === sIdx);
    if (sec.slots > 1 || fmt.sections.length > 1) txt += `${sec.label}:\n`;
    sectionSlots.forEach(s => { txt += `  • ${s.dose || '?'} ${s.move || '—'}\n`; });
  });
  // Strength scheme
  if (fmt.code === 'STR') {
    const slot = state.slots.find(s => s.half === half && s.move);
    if (slot && STRENGTH_SCHEMES[slot.move]) {
      const sch = STRENGTH_SCHEMES[slot.move];
      txt += `\n${slot.move} — how to load it:\n`;
      txt += `  Target:  ${sch.target}\n`;
      txt += `  Warm-up: ${sch.warmup}\n`;
      txt += `  Rest:    ${sch.rest}\n`;
      txt += `  Cues:    ${sch.cues}\n`;
    }
  }
  // Instructions
  if (fmt.instructions && fmt.instructions.length) {
    txt += `\nHow to do it:\n`;
    fmt.instructions.forEach(line => { txt += `  › ${line}\n`; });
  }
  return txt;
}

function getWorkoutText() {
  if (!state.formatA && !state.formatB) return '';
  let txt = `🏋️ SUNDAY SESSION\n\n`;
  if (state.formatA) txt += getHalfText('A') + '\n';
  if (state.formatB) txt += getHalfText('B');
  txt += `\nGenerated by Sunday Spinner · ${currentCoach.name}`;
  return txt;
}
function copyWorkout() { navigator.clipboard.writeText(getWorkoutText()).then(() => showToast('COPIED')); }
function shareWorkout() {
  if (navigator.share) navigator.share({ title: 'Sunday WOD', text: getWorkoutText() }).catch(()=>{});
  else copyWorkout();
}
function showToast(msg, error) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (error ? ' error' : '');
  setTimeout(() => t.className = 'toast', 2400);
}
function toggleTV() { document.body.classList.toggle('tv-mode'); }

// On mobile (≤700px), tapping the collapsed workout card expands it to show
// the full WOD. Tapping the chevron header again (or anywhere outside the body)
// collapses it back. Only active on mobile — desktop layout has the card always visible.
function toggleWorkoutCard(e) {
  if (window.innerWidth > 700) return;  // desktop: card is always visible, no toggling
  const card = document.getElementById('workoutCard');
  if (card.classList.contains('empty')) return;  // nothing to expand
  // If tapping inside the expanded body content, don't collapse — let user read/scroll
  if (card.classList.contains('expanded')) {
    // Only collapse if tap was in the header area (above body content)
    const body = document.getElementById('wcBody');
    if (e && body && body.contains(e.target)) return;
    // Also let action buttons handle their own clicks
    const actions = document.getElementById('wcActions');
    if (e && actions && actions.contains(e.target)) return;
  }
  card.classList.toggle('expanded');
}

// Escape key exits TV mode or collapses the expanded workout card on mobile
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (document.body.classList.contains('tv-mode')) {
    document.body.classList.remove('tv-mode');
    return;
  }
  const card = document.getElementById('workoutCard');
  if (card && card.classList.contains('expanded')) {
    card.classList.remove('expanded');
  }
});

// ============================================================
// SETTINGS MODAL
// ============================================================
let editingMovements = null, editingFormats = null, editingDoses = null;
let editingExcludedA = null, editingExcludedB = null;

function openSettings() {
  editingMovements = JSON.parse(JSON.stringify(movements));
  editingFormats = JSON.parse(JSON.stringify(formats));
  editingDoses = JSON.parse(JSON.stringify(myDoses));
  editingExcludedA = [...myExcludedA];
  editingExcludedB = [...myExcludedB];
  renderMovementsEditor();
  renderDosesEditor();
  renderFormatsEditor();
  document.getElementById('modalBg').classList.add('show');
}
function closeSettings() {
  document.getElementById('modalBg').classList.remove('show');
  editingMovements = editingFormats = editingDoses = editingExcludedA = editingExcludedB = null;
}
function switchTab(ev, name) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  ev.target.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

function renderMovementsEditor() {
  const c = document.getElementById('movementsEditor');
  c.innerHTML = '';
  editingMovements.forEach((m, i) => {
    const row = document.createElement('div');
    row.className = 'editor-row';
    row.innerHTML = `
      <input type="text" value="${escapeAttr(m.name)}" data-idx="${i}" data-field="name" placeholder="Movement name" />
      <input type="text" value="${escapeAttr(m.default_min)}" data-idx="${i}" data-field="default_min" placeholder="default min" />
      <input type="text" value="${escapeAttr(m.default_med)}" data-idx="${i}" data-field="default_med" placeholder="default med" />
      <input type="text" value="${escapeAttr(m.default_max)}" data-idx="${i}" data-field="default_max" placeholder="default max" />
      <button class="del-btn" onclick="deleteMovementEdit(${i})">✕</button>
    `;
    c.appendChild(row);
  });
  c.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', e => {
      const idx = +e.target.dataset.idx;
      editingMovements[idx][e.target.dataset.field] = e.target.value;
    });
  });
}
function addMovement() {
  editingMovements.push({ id: 'new_'+Date.now(), name: 'New Movement', default_min: '5', default_med: '10', default_max: '15' });
  renderMovementsEditor();
  renderDosesEditor();
}
function deleteMovementEdit(i) {
  const name = editingMovements[i].name;
  openPasscodeConfirm(
    `Delete "${name}" for everyone?`,
    'This removes the movement from the shared library and from every format pool that uses it. Affects all coaches.',
    () => {
      editingMovements.splice(i, 1);
      editingFormats.forEach(f => f.sections.forEach(s => { s.pool = s.pool.filter(m => m !== name); }));
      if (editingDoses) delete editingDoses[name];
      renderMovementsEditor();
      renderDosesEditor();
      renderFormatsEditor();
      showToast('MOVEMENT DELETED — SAVE TO COMMIT');
    }
  );
}

function renderDosesEditor() {
  const c = document.getElementById('dosesEditor');
  c.innerHTML = '';
  editingMovements.forEach(m => {
    const d = editingDoses[m.name] || { min: m.default_min, med: m.default_med, max: m.default_max };
    editingDoses[m.name] = d;
    const row = document.createElement('div');
    row.className = 'editor-row';
    row.innerHTML = `
      <input type="text" value="${escapeAttr(m.name)}" readonly style="background:var(--bg-3);color:var(--ink-dim);" />
      <input type="text" value="${escapeAttr(d.min)}" data-name="${escapeAttr(m.name)}" data-field="min" placeholder="min" />
      <input type="text" value="${escapeAttr(d.med)}" data-name="${escapeAttr(m.name)}" data-field="med" placeholder="med" />
      <input type="text" value="${escapeAttr(d.max)}" data-name="${escapeAttr(m.name)}" data-field="max" placeholder="max" />
      <span></span>
    `;
    c.appendChild(row);
  });
  c.querySelectorAll('input[data-name]').forEach(inp => {
    inp.addEventListener('input', e => {
      const name = e.target.dataset.name;
      if (!editingDoses[name]) editingDoses[name] = { min:'', med:'', max:'' };
      editingDoses[name][e.target.dataset.field] = e.target.value;
    });
  });
}

function renderFormatsEditor() {
  const c = document.getElementById('formatsEditor');
  c.innerHTML = '';

  ['A','B'].forEach(half => {
    const halfFormats = editingFormats.map((f, idx) => ({f, idx})).filter(x => x.f.half === half);

    const header = document.createElement('div');
    header.className = 'formats-section-header ' + half.toLowerCase();
    header.textContent = half === 'A' ? 'PART A · FIRST HALF (STRENGTH / SKILL)' : 'PART B · SECOND HALF (METCON)';
    c.appendChild(header);

    if (halfFormats.length === 0) {
      const empty = document.createElement('div');
      empty.style.cssText = 'color:var(--ink-dim);font-style:italic;font-size:12px;padding:8px 4px;';
      empty.textContent = `No Part ${half} formats yet. Click "+ ADD PART ${half} FORMAT" below to add one.`;
      c.appendChild(empty);
      return;
    }

    halfFormats.forEach(({f: fmt, idx: fIdx}) => {
      const excludedList = half === 'A' ? editingExcludedA : editingExcludedB;
      const inMyWheel = !excludedList.includes(fmt.id);
      const card = document.createElement('div');
      card.className = 'format-card ' + half.toLowerCase();
      card.innerHTML = `
        <div class="format-card-header">
          <label class="include-check"><input type="checkbox" ${inMyWheel?'checked':''} data-fidx="${fIdx}" data-field="include" data-half="${half}" /> IN MY WHEEL</label>
          <select class="half-select" data-fidx="${fIdx}" data-field="half">
            <option value="A" ${fmt.half==='A'?'selected':''}>Part A</option>
            <option value="B" ${fmt.half==='B'?'selected':''}>Part B</option>
          </select>
          <input type="text" value="${escapeAttr(fmt.code)}" style="width:80px;" data-fidx="${fIdx}" data-field="code" placeholder="Code" />
          <input type="text" value="${escapeAttr(fmt.name)}" style="flex:1;min-width:140px;" data-fidx="${fIdx}" data-field="name" placeholder="Format name" />
          <button class="del-btn" onclick="deleteFormatEdit(${fIdx})">✕</button>
        </div>
        <input type="text" value="${escapeAttr(fmt.blurb)}" placeholder="Short description (one line)" style="width:100%;background:var(--bg-2);border:1px solid var(--steel);color:var(--ink);padding:6px 10px;font-family:'Inter',sans-serif;font-size:11px;margin-bottom:8px;" data-fidx="${fIdx}" data-field="blurb" />
        <label style="font-size:10px;color:var(--ink-dim);letter-spacing:0.15em;text-transform:uppercase;font-weight:700;display:block;margin-bottom:4px;">How to do it (one instruction per line)</label>
        <textarea data-fidx="${fIdx}" data-field="instructions" placeholder="e.g. Pacing: start at Gear 2, sustainable effort..." style="width:100%;background:var(--bg-2);border:1px solid var(--steel);color:var(--ink);padding:8px 10px;font-family:'Inter',sans-serif;font-size:11px;line-height:1.5;margin-bottom:10px;min-height:80px;resize:vertical;">${escapeHtml((fmt.instructions || []).join('\n'))}</textarea>
        <div id="sections-${fIdx}"></div>
        <button class="add-btn" onclick="addSection(${fIdx})">+ ADD SECTION</button>
      `;
      c.appendChild(card);

      card.querySelectorAll('input[data-field], select[data-field], textarea[data-field]').forEach(inp => {
        const handler = e => {
          const idx = +e.target.dataset.fidx;
          const field = e.target.dataset.field;
          if (field === 'include') {
            const h = e.target.dataset.half;
            const fmt = editingFormats[idx];
            if (e.target.checked) {
              if (h === 'A') editingExcludedA = editingExcludedA.filter(x => x !== fmt.id);
              else editingExcludedB = editingExcludedB.filter(x => x !== fmt.id);
            } else {
              if (h === 'A' && !editingExcludedA.includes(fmt.id)) editingExcludedA.push(fmt.id);
              else if (h === 'B' && !editingExcludedB.includes(fmt.id)) editingExcludedB.push(fmt.id);
            }
          } else if (field === 'half') {
            editingFormats[idx].half = e.target.value;
            renderFormatsEditor();
          } else if (field === 'instructions') {
            // Split on newlines, drop empty lines
            editingFormats[idx].instructions = e.target.value.split(/\n/).map(s => s.trim()).filter(Boolean);
          } else {
            editingFormats[idx][field] = e.target.value;
          }
        };
        inp.addEventListener('input', handler);
        if (inp.type === 'checkbox' || inp.tagName === 'SELECT') inp.addEventListener('change', handler);
      });
      renderFormatSections(fIdx);
    });
  });
}

function renderFormatSections(fIdx) {
  const c = document.getElementById('sections-' + fIdx);
  if (!c) return;
  c.innerHTML = '';
  editingFormats[fIdx].sections.forEach((sec, sIdx) => {
    const sDiv = document.createElement('div');
    sDiv.className = 'format-section-editor';
    const moveOpts = editingMovements.map(m => {
      const checked = sec.pool.includes(m.name) ? 'checked' : '';
      return `<label><input type="checkbox" ${checked} data-move="${escapeAttr(m.name)}" /> ${escapeHtml(m.name)}</label>`;
    }).join('');
    sDiv.innerHTML = `
      <div class="format-section-editor-header">
        <input type="text" value="${escapeAttr(sec.label)}" placeholder="Section label" data-field="label" />
        <span style="font-size:10px;color:var(--ink-dim);">slots:</span>
        <input type="number" value="${sec.slots}" min="1" max="20" data-field="slots" />
        <button class="del-btn" onclick="deleteSection(${fIdx}, ${sIdx})">✕</button>
      </div>
      <div style="font-size:10px;color:var(--ink-dim);margin-bottom:4px;letter-spacing:0.1em;">MOVEMENT POOL (<span class="pool-count">${sec.pool.length}</span> selected):</div>
      <div class="checkbox-grid">${moveOpts}</div>
    `;
    c.appendChild(sDiv);
    sDiv.querySelectorAll('input[data-field]').forEach(inp => {
      inp.addEventListener('input', e => {
        if (e.target.dataset.field === 'slots') editingFormats[fIdx].sections[sIdx].slots = Math.max(1, +e.target.value || 1);
        else editingFormats[fIdx].sections[sIdx][e.target.dataset.field] = e.target.value;
      });
    });
    sDiv.querySelectorAll('input[type=checkbox][data-move]').forEach(cb => {
      cb.addEventListener('change', e => {
        const moveName = e.target.dataset.move;
        const sec = editingFormats[fIdx].sections[sIdx];
        if (e.target.checked) { if (!sec.pool.includes(moveName)) sec.pool.push(moveName); }
        else sec.pool = sec.pool.filter(m => m !== moveName);
        const counter = sDiv.querySelector('.pool-count');
        if (counter) counter.textContent = sec.pool.length;
      });
    });
  });
}
function addSection(fIdx) {
  editingFormats[fIdx].sections.push({ label: 'New section', slots: 3, pool: editingMovements.slice(0,5).map(m=>m.name) });
  renderFormatSections(fIdx);
}
function deleteSection(fIdx, sIdx) {
  if (editingFormats[fIdx].sections.length <= 1) {
    showToast('FORMAT NEEDS AT LEAST 1 SECTION', true);
    return;
  }
  openConfirmModal('Delete this section?', 'The section and its movement pool will be removed.', () => {
    editingFormats[fIdx].sections.splice(sIdx, 1);
    renderFormatSections(fIdx);
    showToast('SECTION DELETED');
  });
}
function addFormat(half) {
  editingFormats.push({
    id: 'new_'+Date.now(),
    half: half,
    code: 'NEW', name: 'New Format', blurb: 'Describe the format',
    instructions: [],
    sections: [{ label:'Section 1', slots:3, pool: editingMovements.slice(0,5).map(m=>m.name) }]
  });
  renderFormatsEditor();
}

function resetFormatsToDefaults() {
  openConfirmModal(
    'Reset MY settings to defaults?',
    'This only affects YOUR settings — it resets your personal doses back to the format defaults and includes all formats in your wheel. Other coaches\' setups and the shared formats library are NOT changed. Click SAVE CHANGES afterward to commit.',
    () => {
      editingDoses = {};
      editingMovements.forEach(m => {
        editingDoses[m.name] = { min: m.default_min, med: m.default_med, max: m.default_max };
      });
      editingExcludedA = [];
      editingExcludedB = [];
      renderMovementsEditor();
      renderDosesEditor();
      renderFormatsEditor();
      showToast('YOUR SETTINGS RESET — SAVE TO CONFIRM');
    }
  );
}

// Gym-wide reset: wipes the shared formats list and reseeds the 5 built-in defaults.
// Affects EVERY coach, so passcode-gated.
function resetGymFormatsToDefaults() {
  openPasscodeConfirm(
    'Reset SHARED formats for the whole gym?',
    'This wipes the gym\'s formats list and reseeds the 5 built-in defaults (STR, YGIG, CONT, AMRAP, CHIP). Every coach\'s custom formats will be lost gym-wide. Movements and personal doses are NOT affected.',
    () => {
      editingFormats = DEFAULT_FORMATS.map((f, i) => ({
        id: 'reset_' + Date.now() + '_' + i,
        half: f.half,
        code: f.code,
        name: f.name,
        blurb: f.blurb,
        instructions: [...(f.instructions || [])],
        sections: f.sections.map(s => ({ ...s, pool: [...s.pool] }))
      }));
      editingExcludedA = [];
      editingExcludedB = [];
      renderFormatsEditor();
      showToast('SHARED FORMATS RESET — SAVE TO COMMIT');
    }
  );
}
function deleteFormatEdit(fIdx) {
  const fmt = editingFormats[fIdx];
  openPasscodeConfirm(
    `Delete "${fmt.name}" for everyone?`,
    'This removes the format for every coach across the gym. They will lose any "In My Wheel" settings tied to it.',
    () => {
      editingFormats.splice(fIdx, 1);
      renderFormatsEditor();
      showToast('FORMAT DELETED — SAVE TO COMMIT');
    }
  );
}

async function saveSettings() {
  if (editingFormats.length === 0) { showToast('NEED AT LEAST 1 FORMAT', true); return; }
  const aCount = editingFormats.filter(f => f.half === 'A').length;
  const bCount = editingFormats.filter(f => f.half === 'B').length;
  if (aCount === 0) { showToast('NEED AT LEAST 1 PART A FORMAT', true); return; }
  if (bCount === 0) { showToast('NEED AT LEAST 1 PART B FORMAT', true); return; }
  for (const f of editingFormats) {
    if (!f.sections || f.sections.length === 0) { showToast(`FORMAT ${f.code} NEEDS A SECTION`, true); return; }
    for (const sec of f.sections) {
      if (!sec.pool || sec.pool.length === 0) { showToast(`SECTION "${sec.label}" HAS NO MOVEMENTS`, true); return; }
    }
  }

  showToast('SAVING...');

  if (USE_SUPABASE) {
    try {
      const oldFmts = JSON.parse(JSON.stringify(editingFormats));
      await sbRequest('DELETE', 'movements?id=gte.0');
      const movRows = editingMovements.map(m => ({
        name: m.name, default_min: m.default_min, default_med: m.default_med, default_max: m.default_max
      }));
      if (movRows.length) await sbRequest('POST', 'movements', movRows);
      movements = await sbRequest('GET', 'movements?select=*&order=name');

      await sbRequest('DELETE', 'formats?id=gte.0');
      const fmtRows = editingFormats.map(f => ({ half: f.half, code: f.code, name: f.name, blurb: f.blurb, instructions: f.instructions || [], sections: f.sections }));
      if (fmtRows.length) await sbRequest('POST', 'formats', fmtRows);
      formats = await sbRequest('GET', 'formats?select=*&order=half,code');

      // Re-map excluded IDs: match by half + code + name since IDs changed
      const newExcludedA = [], newExcludedB = [];
      formats.forEach(nf => {
        const oldMatch = oldFmts.find(of => of.code === nf.code && of.name === nf.name && of.half === nf.half);
        if (oldMatch) {
          if (nf.half === 'A' && editingExcludedA.includes(oldMatch.id)) newExcludedA.push(nf.id);
          if (nf.half === 'B' && editingExcludedB.includes(oldMatch.id)) newExcludedB.push(nf.id);
        }
      });
      myExcludedA = newExcludedA;
      myExcludedB = newExcludedB;
      await saveCoachPrefs();

      myDoses = editingDoses;
      await saveCoachDoses();
    } catch(e) {
      console.error(e);
      showToast('SAVE FAILED — CHECK CONSOLE', true);
      return;
    }
  } else {
    movements = editingMovements;
    formats = editingFormats;
    myDoses = editingDoses;
    myExcludedA = editingExcludedA;
    myExcludedB = editingExcludedB;
    persistLocal();
    await saveCoachDoses();
    await saveCoachPrefs();
  }

  closeSettings();
  resetSpinState();
  document.getElementById('formatResultA').textContent = '— spin to begin —';
  document.getElementById('formatResultA').classList.add('empty');
  document.getElementById('formatPanelA').classList.remove('dim');
  document.getElementById('movementPanelA').style.display = 'none';
  document.getElementById('formatPanelB').style.display = 'none';
  document.getElementById('movementPanelB').style.display = 'none';
  document.getElementById('doseRevealPanel').style.display = 'none';
  document.getElementById('progressPanel').style.display = 'none';
  renderWorkoutCard();
  initApp();
  showToast('CONFIG SAVED');
}

// ============================================================
// INIT
// ============================================================
function initFormatScrollerPreview(half) {
  const available = half === 'A' ? myFormatsA() : myFormatsB();
  if (available.length === 0) return;
  const track = document.getElementById('formatScroller' + half);
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';
  track.innerHTML = '';
  const iw = getItemWidth();
  const wrap = track.parentElement;
  const wrapWidth = wrap.offsetWidth || 700;
  const needed = Math.ceil(wrapWidth / iw) + 4;
  for (let i = 0; i < needed; i++) {
    const f = available[i % available.length];
    const el = document.createElement('div');
    el.className = 'scroller-item';
    el.innerHTML = `
      <div class="item-color" style="background:${PALETTE[(i % available.length) % PALETTE.length]}"></div>
      <div class="item-label">${escapeHtml(f.name)}</div>
      <div class="item-sub">Part ${half} · ${escapeHtml(f.code)}</div>
    `;
    track.appendChild(el);
  }
  const centerOffset = -(iw * Math.floor(needed/2)) + wrapWidth/2 - iw/2;
  track.style.transform = `translateX(${centerOffset}px)`;
}

function initApp() {
  initFormatScrollerPreview('A');
  // Part B preview is loaded after Part A spin
  renderHistory();
}

async function bootstrap() {
  await loadAllData();
  renderCoachGrid();
}
bootstrap();
