/* ===========================  YOUR DATA  =========================== */

/* ---- HERO SHOWCASE (the three tiles that greet visitors at the top) ----
   Your story, left to right. The two videos autoplay (muted) as they scroll in.
   photo  →  { photo:'images/hockey.jpg', caption:'...' }
   video  →  { video:'videos/driver-2025.mp4', poster:'images/driver-2025.jpg', caption:'...' }
            (put .mp4 clips in a "videos" folder next to this file; poster is an
             optional still that shows before the clip starts)
   You can also use a YouTube link instead of a local video — { youtube:'<link>', caption:'...' } —
   but only local .mp4 videos can autoplay cleanly with no YouTube branding. */
const HERO = [
  { photo:'images/hockey.jpg',                              caption:'My Last Hockey Game' },
  { video:'videos/driver-2025.mov', poster:'images/driver-2025.jpg', caption:'1 Year Ago' },
  { video:'videos/driver-2026.mov', poster:'images/driver-2026.jpg', caption:'Now' },
];

/* ---- PHOTOS (woven into the swing feed by date) ----
   Each photo is its own item in the timeline — just a picture, a caption and a date.
   Drop your image files into an "images" folder next to this file, then add a line:
   { date:'YYYY-MM-DD', caption:'...', photo:'images/your-file.jpg' }
   It slots into the right year automatically, in date order among your swings. */
const PHOTOS = [
];

/* ---- THE WALKING RECORD (milestones, oldest first) ----
   mark / markType are optional. markType: 'hcp' | 'score' | 'diff'  */
const TIMELINE = [
  { date:'Jul 2024', mo:'07 / 24', title:'Signed up for Future Golf', detail:' After retiring from Ice Hockey, this was my quiet decision to find a new sport, one I hope to enjoy for the rest of my life.', course:'Melbourne · VIC', kind:'start' },
  { date:'Aug 2024', mo:'08 / 24', title:'First round submitted to GA', detail:'On the board, the first of 20 before an official handicap.', course:'Settlers Run GC', kind:'milestone' },
  { date:'Aug 2024', mo:'08 / 24', title:'My first coach - Gonzalo', detail:'Paying for knowledge instead of guessing on YouTube. He built me a really solid fundation I am grateful of. ', course:'Golftec · Melbourne', kind:'coach' },
  { date:'Sep 2024', mo:'09 / 24', title:'Handicap under 30', detail:'48 points off 35 at Yering Meadows —  a fresh 26.0.', course:'Yering Meadows GC · Nursery', mark:'26.0', markType:'hcp' },
  { date:'Nov 2024', mo:'11 / 24', title:'Handicap under 20', detail:'35 points off 23 at PK South — a new 19.1.', course:'Penninsula Kingswood · South', mark:'19.1', markType:'hcp' },
  { date:'Feb 2025', mo:'02 / 25', title:'Moved to the Gold Coast', detail:'After graduating university, chasing a motorsport career — the clubs came too.', course:'Gold Coast · QLD', kind:'life' },
  { date:'Mar 2025', mo:'03 / 25', title:'My second coach, on the Coast', detail:'Found a coach close to home on the Coast. Convenience is what keeps you consistent, my swing and game kept growing from there.', course:'KDV Sport · Gold Coast', kind:'coach' },
  { date:'Jun 2025', mo:'06 / 25', title:'Joined Heritage GC !', detail:'This was our favourite joint to play with my mates when I travelled back to Melbourne, it just felt right to join Heritage, to have a proper home course.', course:'Heritage GC', kind:'home' },
  { date:'Oct 2025', mo:'10 / 25', title:'The coach I’m with now - Wanasa', detail:'The voice I trust today, her knowledge in biomechanics and physiotherapy makes me trust that she can help me build what I want - a pain free consistent swing. Finding a time is the challenge. ', course:'Yarra Bend GC', kind:'coach' },
  { date:'Dec 2025', mo:'12 / 25', title:'First Comp Round under 90!', detail:'Shot 86 in competition at Eastern, the scores are dropping slowly but surely.', course:'Eastern GC · East', mark:'86', markType:'score' },
  { date:'Jun 2026', mo:'06 / 26', title:'Lowest round to date', detail:'A gross differential of 11.5 — an 87 at Heritage, Henley. Not my handicap yet but a glimpse of where it\'s going.', course:'Heritage GC · Henley', mark:'11.5', markType:'diff' },
];

/* ---- SWING THOUGHTS (newest first — paste a new block at the very top) ----
   date     YEAR-MONTH-DAY, e.g. "2026-06-01"  (the year decides which tab it lands in)
   youtube  paste a full YouTube link (watch / youtu.be / shorts) or leave ""
   club     optional, shows next to the date   ·   cue = your swing thought
   feel / result  1–5      ·   **double stars** = bold      ·   placeholder:true = “example” card */
const ENTRIES = [

  { date:'2026-05-13', title:'Stable finish, clearing the hips', club:'7 Iron',
    cue:'Sit back and turn on the left heel to open up the pocket to let the club come through', feel:4, result:4,
    youtube:'https://youtube.com/shorts/Qt80QlC6yWA',   
    body:`I had a tendency of stalling my hip rotation to help see and hit the ball, so my hands always had no room. After learning to rotate, my hips would thrust forward, the focus here was for me to sit back and make sure the rotation occurs in a way that opens up space for the arms to naturally flow through.` },

  { date:'2026-05-17', title:'LESSON - Proper Driver Rotation', club:'Driver',
    cue:'Use the core on the back swing, bump and turn, rotate through impact', feel:5, result:2, 
    youtube:'https://youtube.com/shorts/Fizky2CwEfk',
    body:`In search of a consistent repeatible driver swing, this lesson connected my iron swing to my driver, looking to gain more control and consistency by using more hips and engage less of my hands in the swing.` },

  { date:'2026-05-05', title:'Working on the Driver', club:'Driver',
    cue:'Keep the driver in front of the body, let the hands come through at impact', feel:4, result:4, 
    youtube:'https://youtube.com/shorts/Y6mx4v2dpi8',
    body:`Struggling with a over fade shot and often can't find the right consistency in the swing. Keep it in front to simplify everything and reduce shaft lean by thinking more acceleration of the clubs and stalling the hands.` },

  { date:'2026-04-06', title:'Controlled Hip Dominant Swing', club:'7 iron',
    cue:'Hinge, Rotate more and Lift left hip at impact ', feel:5, result:5, 
    youtube:'https://youtube.com/shorts/w9thfFZxWJQ',
    body:`This is the most complete my swing has felt after transitioning from a hand dominant to a hip dominant swing, I feel it is now leading the way and driving my swing together. I feel the wind up, the bump at the top, the rotation through and the final lift at impact as I send my hands out. It is showing on the course too.` },

  { date:'2026-03-01', title:'LESSON - Hinge and Rotate Fully', club:'7 iron',
    cue:'Hinge more at the hips, rotate more than you think ', feel:5, result:3, 
    youtube:'https://youtube.com/shorts/joiKJuLA6wg',
    body:`I need to hinge instead of rounding my back, when I think push against the wall I naturally get to the depth that I want I don't need to think depth and width anymore. Meanwhile coming down, I need to over exaggerate the hip rotation and be comfortable with the club being further behind my body. I learnt that I need to see my left bum at P6, this is much more rotation that what I had previously.` },

  { date:'2026-02-24', title:'Clearing Hips with Extended Clubs', club:'7 iron',
    cue:'Push agains the wall on back swing, clear hips at impact', feel:4, result:4, 
    youtube:'https://youtube.com/shorts/4zVE2D4ZT1w',
    body:`This is the most natural I have felt clearing my hips, with the longer clubs I don't need to hunch as much. Everything feels well connected, I feel stable and wide in the back swing, the clearing of the hips is now at the right tempo, not too early and not too late. Currently I feel my right shoulder has this weird action on the downswing. Other than that swing feels great, still working on that impact concept of lifting my left hip and follow through.` },

  { date:'2025-11-08', title:'LESSON - New Coach New concepts & Longer Irons', club:'7 iron',
    cue:'Push against the wall on back swing, turn hips through impact. Also: I need to be fitted for longer clubs.', feel:5, result:1, 
    youtube:'https://youtube.com/shorts/ELyv_-MQokg',
    body:`Working with a new coach recommended for her knowledge in biomechanics, I have been having some knee and hip pains swinging quite aggressively. This lesson was dense and mind blowing, the back swing thought of pushing out against the wall gave me great control and width. At impact I would always stall my hips, it turns out that there is a lift of the left hip, this completes the swing much more naturally!` },

  { date:'2025-10-28', title:'Everything in front', club:'8 iron',
    cue:'Lag to compress, everything in front', feel:5, result:5, 
    youtube:'https://youtube.com/shorts/s4i0ORMECZo',
    body:`After multiple rounds the shallowing just made my swing feel very unstable at the top, so now just focusing on a nice soft grip to lag naturally and compress the ball. The strikes are much more natural and I can fully swing through the ball. The sounds are so different.` },

  { date:'2025-09-04', title:'LESSON - Lag to Compress ', club:'',
    cue:'Soft hands at the top, hip and hands go whilst club stays back. No need to accelerate the hands', feel:4, result:1, 
    youtube:'https://youtube.com/shorts/Ose00knqL28',
    body:`I finally understand where true compression comes from, it is the hips and hands moving whilst the club still stays behind you. I don't need to force it there I just need to relax my hands at the top and like a pendulum it will lag! That is really mind blowing and I look forward to piecing all that into my swing.` },

  { date:'2025-08-08', title:'Shallow and Compress', club:'8 iron',
    cue:'Get hands in front of the chest at P5, Left knee disappear by P6', feel:2, result:2, 
    youtube:'https://youtube.com/shorts/DZpbTYRA4X8',
    body:`Finally able to get the hands to wait and shallow, but the swing doesn't feel very repeatable. The continous swing changes is also affecting how I am playing out on the course. I think too much and have a lot of swing thoughts in my head right now.` },

  { date:'2025-07-24', title:'LESSON - Tuning P5 P6 Position', club:'9 iron',
    cue:'Get hands in front of the chest at P5, Left knee disappear by P6', feel:4, result:1, 
    youtube:'https://youtube.com/shorts/-1QrjNqp7Yk',
    body:`Getting the hands out in front of my chest gives me more room as I work down my swing, and by P6 club parallel to the ground from behind I should not see my left knee. This visual helps me check that I am rotating my hips enough in the downswing. Feels more spacious, the impact is still a work in progress.` },

  { date:'2025-07-05', title:'Failing to add Compression', club:'7 iron',
    cue:'Hold the club off for more compression', feel:2, result:3, 
    youtube:'https://youtube.com/shorts/AIuA0H8o6ds',
    body:`Trying to combine the shallowing with the compression but the main challenge here is not attacking the ball. If I don't attack, the ball flies right, when I attack then I lose the shallow component. I need another lesson there's something missing here. ` },

  { date:'2025-05-24', title:'Shallowing with my Hands', club:'7 iron', 
    cue:'Feeling the club drop and then turn, instead of firing right at the ball', feel:2, result:4, 
    youtube:'https://youtube.com/shorts/YpFd8xVhG1c',
    body:`I see a lot of pros with this shallower shaft plane on the down swing but I feel that I am forcing it with my hands still, something feels off but the ball flight does seem to still work. Clearing my hips much better on the downswing, nice and early.` },

  { date:'2025-05-01', title:'LESSON - Shallowing', club:'9 iron', 
    cue:'Feeling the club drop and then turn, instead of firing right at the ball', feel:2, result:1, 
    youtube:'https://youtube.com/shorts/4Rtqp7khnpo',
    body:`Currently accelerating straight at the ball to hit it at the top of the swing, causing a very steep plane. Learning to drop and delay the release for a shallower plane. Feels very new and hence weird. Need to do a lot of block practice to drill in this new motion.` },

  { date:'2025-04-22', title:'Rare good drive', club:'Driver', 
    cue:'Wide arc and less wrist action', feel:4, result:5, 
    youtube:'https://youtube.com/shorts/nAr2ik7IhdA',
    body:`My Driver is flying everywhere, it is the achilles heel in my game right now. It feels like too many things can and do go wrong, I need a lesson to focus on it.` },
  
  { date:'2025-03-19', title:'Smooth Tempo', club:'8 iron', 
    cue:'Smooth Up and Down, One and Two', feel:5, result:4, 
    youtube:'https://youtube.com/shorts/b8SdypJ1-NM',
    body:`First session after moving to the Gold Coast. Working on a repeatable tempo to improve consistency, keeping the swing simple to help improve my low point contact and strike.`},

  { date:'2024-11-12', title:'Par 3 During FG Comp', club:'9 iron', 
    cue:'Relax and swing your swing', feel:4, result:5, 
    youtube:'https://youtube.com/shorts/x2etIVaofdM',
    body:`The practice is showing on the course, I am starting to have distances I can trust and swing it out on the course, very exciting!. Quite enjoying the Future Golf Competition environemnt, meeting new people and enjoying the game.` },

  { date:'2024-10-12', title:'First Nice Long Iron', club:'5 iron', 
    cue:'Low point after the ball', feel:4, result:3, 
    youtube:'https://youtube.com/shorts/z2Io5rEUAGI',
    body:`Longer club so it's harder for consistent contact, I am placing the ball further away and finding a nice pop in my irons finally. Thinking open hips on the back swing.` },

];

/* ---- THE ALMANAC (lessons) ---- */
const LESSONS = [
  { text:'Paying for knowledge saves you from looking for a needle in a haystack.', context:'YouTube leads me down 10 swing change options but your coach with their knowledge within the minute finds the change you need... it was the 11th.' },
  { text:'Practice makes permanent, not perfect.', context:'How you drill on the range is what shows up under pressure. How you live your life day to day is how you show "up" in the big moments.' },
  { text:'The shot you committed to and missed beats the one you flinched on and pulled off.', context:'100% Commitment should be in all of your shots, on and off the course.' },
  { text:'Distance is a vanity metric. Dispersion is the real one.', context:'280m into the trees costs more than 240m in the fairway. You must account for failure and accept that you are imperfect. Mistakes happen and it will always happen.' },
  { text:'You’ll never feel ready enough. There is always that next swing change that will "solve your game".', context:'Every challenge and task that you feel uneasy and stretched is a challenge worth taking head on, you will never feel truly ready.' },
  { text:'Focus on the process, the results are not the product of your actions. Products cannot be controlled.', context:'You can only control your process, your habits and the way you approach the game, your results are the reflection of your actions plus some uncontrollable variables like luck. You cannot control results nor should you try to fixate on them.' },
];

/* ---- HERO + CLOSING WORDS ---- */
const COPY = {
  /* Hero text is edited directly in the <header class="hero"> block, further down — not here. */
  // Swing videos for the Then / Now panels — paste a YouTube link or leave ""
  thenVideo: 'https://youtube.com/shorts/BoPqBk770QM',
  nowVideo:  'https://youtube.com/shorts/Qt80QlC6yWA',   // ← demo link — swap for your own swing
  // anchors for the swing section
  thenThoughts: [
    'I thought golf was about swinging my arms at the ball as quick as I could',
    'Little idea about the right set up or grip',
    'Treating it like a hockey slap shot.',
  ],
  nowThoughts: [
    'I think flow and control, not distance.',
    'Rotation to open space, not throw my arms at the ball',
  ],
  closingTitle: 'The Journey Continues...',
  closing: [
    'Two years ago I thought my competition days are over. Now, I feel like not only have I found that competitive feeling again, this sport is also a cheat code to life. Every game is like a simulation of life, your ups and downs… literally, how you recover, how you manage your emotions.',
    'I’m only two years in, and I can already have this certainty that this sport is the one I wish to play for the rest of my life, to share with those around me and my future kids. This sport is truly like no other.',
  ],
  closingSig: '— Keep growing, Keep teeing off.',
};
/* =========================  END OF YOUR DATA  ========================= */
