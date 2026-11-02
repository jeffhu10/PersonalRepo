/* ---------- helpers ---------- */
function md(t){ return (t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>'); }
function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function dots(n){ n=Math.max(0,Math.min(5,n||0)); return '●'.repeat(n)+'○'.repeat(5-n); }
const MARK_K = { hcp:'HCP', score:'GROSS', diff:'GROSS DIFF' };
function ytId(input){ if(!input) return ''; var m=String(input).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{6,})/); if(m) return m[1]; var t=String(input).trim(); return /^[A-Za-z0-9_-]{6,}$/.test(t)?t:''; }
function fmtDate(iso){ var p=String(iso).split('-'); if(p.length<3) return iso; var mo=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return (+p[2])+' '+mo[(+p[1])-1]+' '+p[0]; }

/* ---------- video lightbox ---------- */
function captionFor(id){ try{ if(typeof ENTRIES!=='undefined'){ for(var i=0;i<ENTRIES.length;i++){ if(ytId(ENTRIES[i].youtube)===id) return ENTRIES[i].title||''; } } if(typeof COPY!=='undefined'){ if(COPY.nowVideo&&ytId(COPY.nowVideo)===id) return COPY.nowLabel||''; if(COPY.thenVideo&&ytId(COPY.thenVideo)===id) return COPY.thenLabel||''; } }catch(err){} return ''; }
function openVideo(id, caption){ if(!id) return; var hq='https://img.youtube.com/vi/'+id+'/maxresdefault.jpg'; var lo='https://img.youtube.com/vi/'+id+'/hqdefault.jpg'; var f=document.getElementById('vboxFrame'); f.innerHTML='<div class="vbox-poster" onclick="playVideo(\''+id+'\')"><img src="'+hq+'" onerror="this.onerror=null;this.src=\''+lo+'\'" alt="Swing video thumbnail" /><button class="vbox-play" type="button" aria-label="Play swing video"></button><span class="vbox-cap"></span></div>'; var cap = caption || captionFor(id); if(cap){ f.querySelector('.vbox-cap').textContent = cap; } document.getElementById('vbox').hidden=false; document.body.style.overflow='hidden'; }
function playVideo(id){ document.getElementById('vboxFrame').innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&color=white" title="Swing video" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>'; }
function openLocalVideo(src, poster){ if(!src) return; var f=document.getElementById('vboxFrame'); f.innerHTML='<video src="'+src+'"'+(poster?' poster="'+poster+'"':'')+' controls autoplay playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;border:0;"></video>'; document.getElementById('vbox').hidden=false; document.body.style.overflow='hidden'; }
function closeVideo(){ document.getElementById('vboxFrame').innerHTML=''; document.getElementById('vbox').hidden=true; document.body.style.overflow=''; }
window.addEventListener('keydown', function(e){ if(e.key==='Escape') closeVideo(); });

/* ---------- copy (hero text lives in the HTML hero block, edited directly) ---------- */
document.getElementById('then-list').innerHTML = COPY.thenThoughts.map(t=>'<li>'+esc(t)+'</li>').join('');
document.getElementById('now-list').innerHTML = COPY.nowThoughts.map(t=>'<li>'+esc(t)+'</li>').join('');
document.getElementById('close-title').textContent = COPY.closingTitle;
document.getElementById('close-body').innerHTML = COPY.closing.map(p=>'<p>'+esc(p)+'</p>').join('');
document.getElementById('close-sig').textContent = COPY.closingSig;

/* ---------- ledger ---------- */
(function(){
  const root = document.getElementById('ledger');
  TIMELINE.forEach((e,i)=>{
    const left = i%2===0;
    const dotcls = e.markType==='diff' ? 'best' : e.markType==='hcp' ? 'hcp' : '';
    const chip = e.mark ? '<span class="chip'+(e.markType==='diff'?' best':'')+'"><span class="k">'+MARK_K[e.markType]+'</span><span class="v">'+esc(e.mark)+'</span></span>' : '';
    const course = e.course ? '<span class="course">'+esc(e.course)+'</span>' : '';
    const card = '<div class="lcard">'+
        '<div class="meta">'+esc(e.mo)+' &nbsp;·&nbsp; '+esc((e.kind||MARK_K[e.markType]||e.markType||'').toUpperCase())+'</div>'+
        '<h3>'+esc(e.title)+'</h3>'+
        '<p>'+esc(e.detail)+'</p>'+
        ((chip||course)?'<div class="foot">'+chip+course+'</div>':'')+
      '</div>';
    const row = document.createElement('div');
    row.className = 'lrow reveal';
    row.innerHTML =
      '<div class="lside-l">'+(left?card:'')+'</div>'+
      '<div class="lnode"><span class="dot '+dotcls+'"></span></div>'+
      '<div class="lside-r">'+(!left?card:'')+'</div>';
    root.appendChild(row);
  });
})();

/* ---------- swing expander ---------- */
(function(){
  const _photos = (typeof PHOTOS!=='undefined'?PHOTOS:[]).map(p=>({ __photo:true, date:p.date, caption:p.caption, photo:p.photo }));
  const sorted = ENTRIES.concat(_photos).sort((a,b)=> a.date<b.date?1:-1);
  const byYear = {};
  sorted.forEach(e=>{ const y=String(e.date).slice(0,4); (byYear[y]=byYear[y]||[]).push(e); });
  const years = Object.keys(byYear).sort();
  document.getElementById('expCount').textContent = '· '+ENTRIES.length+' entries';

  const tabs = document.getElementById('yeartabs');
  const grid = document.getElementById('ygrid');
  let active = years[years.length-1]; // newest year

  function entryCard(e){
    const id = ytId(e.youtube);
    const thumb = e.video
      ? '<button class="ethumb has-vid" type="button" onclick="openLocalVideo(\''+e.video+'\',\''+(e.poster||'')+'\')"'+(e.poster?' style="background-image:url('+e.poster+')"':'')+'><span class="play"></span></button>'
      : id
      ? '<button class="ethumb has-vid" type="button" onclick="openVideo(\''+id+'\')" style="background-image:url(https://img.youtube.com/vi/'+id+'/hqdefault.jpg)"><span class="play"></span></button>'
      : '<div class="ethumb"><span class="play"></span><span class="cap">'+esc(e.placeholder?'Drop a swing clip or photo':'No clip yet — add a YouTube link')+'</span></div>';
    const rate = (e.feel||e.result)?'<div class="erate"><span>Feel '+dots(e.feel)+'</span><span>Result '+dots(e.result)+'</span></div>':'';
    const datel = fmtDate(e.date)+(e.club?'  ·  '+e.club:'');
    return '<article class="ecard'+(e.placeholder?' ph':'')+'">'+
        thumb +
        '<div class="edate">'+esc(datel)+'</div>'+
        '<h4>'+esc(e.title)+'</h4>'+
        (e.cue?'<div class="cue">“'+esc(e.cue)+'”</div>':'')+
        '<div class="ebody">'+md(e.body)+'</div>'+ rate +
      '</article>';
  }
  function photoCard(p){
    const datel = fmtDate(p.date);
    return '<article class="ecard photo-card">'+
        '<div class="ethumb photo" style="background-image:url('+(p.photo||'')+')"><span class="pbadge">Photo</span></div>'+
        '<div class="edate">'+esc(datel)+'</div>'+
        (p.caption?'<h4>'+esc(p.caption)+'</h4>':'')+
      '</article>';
  }
  function render(){
    tabs.innerHTML = years.map(y=>'<button data-y="'+y+'" class="'+(y===active?'on':'')+'">'+y+' <span class="n">'+byYear[y].length+'</span></button>').join('');
    grid.innerHTML = byYear[active].map(it=> it.__photo ? photoCard(it) : entryCard(it)).join('');
    tabs.querySelectorAll('button').forEach(b=>b.onclick=()=>{ active=b.dataset.y; render(); });
  }
  render();

  const body = document.getElementById('expBody');
  const btn = document.getElementById('expBtn');
  let open=false;
  btn.addEventListener('click', ()=>{
    open=!open; btn.setAttribute('aria-expanded', open);
    body.classList.toggle('open', open);
    btn.querySelector('span:nth-child(2)').textContent = open ? 'Hide the swings in between' : 'Open the swings in between';
  });
})();

/* ---------- then / now anchor videos ---------- */
[['then-frame', COPY.thenVideo], ['now-frame', COPY.nowVideo]].forEach(function(pair){
  const id = ytId(pair[1]); const el = document.getElementById(pair[0]); if(!el) return;
  if(id){ el.classList.add('has-vid'); el.style.backgroundImage='url(https://img.youtube.com/vi/'+id+'/hqdefault.jpg)'; el.style.cursor='pointer'; el.setAttribute('role','button'); el.onclick=function(){ openVideo(id); }; }
});

/* ---------- hero triptych (photo + sequenced videos) ---------- */
(function(){
  var stage = document.getElementById('heroStage');
  if(!stage || typeof HERO==='undefined' || !HERO.length) return;
  var ICON_MUTE = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3l2.7-2.7-1.06-1.06L15.44 11 12.7 8.24 11.6 9.3 14.34 12l-2.74 2.7 1.06 1.06L15.44 13l2.7 2.76 1.06-1.06L16.5 12z"/></svg>';
  var ICON_ON   = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm11 .17v5.66c1.2-.66 2-1.94 2-3.33s-.8-2.67-2-3.33zM15 4.5v1.7c2.3.9 4 3.14 4 5.8s-1.7 4.9-4 5.8v1.7c3.2-.99 5.5-3.97 5.5-7.5S18.2 5.49 15 4.5z"/></svg>';
  stage.innerHTML = HERO.map(function(item,i){
    var cap = item.caption ? '<span class="hcap">'+esc(item.caption)+'</span>' : '';
    if(item.video){
      return '<div class="hero-tile" data-i="'+i+'">'+
          '<video muted playsinline preload="auto"'+(item.poster?' poster="'+item.poster+'"':'')+'><source src="'+item.video+'" type="video/mp4" /></video>'+
          '<button class="hmute" type="button" aria-label="Unmute">'+ICON_MUTE+'</button>'+ cap +
        '</div>';
    }
    var src = item.photo || (item.youtube ? 'https://img.youtube.com/vi/'+ytId(item.youtube)+'/maxresdefault.jpg' : '');
    var click = item.youtube ? ' style="cursor:pointer" onclick="openVideo(\''+ytId(item.youtube)+'\')"' : '';
    return '<div class="hero-tile is-photo" data-i="'+i+'"'+click+'>'+
        (src?'<img src="'+src+'" alt="'+esc(item.caption||'')+'" onerror="this.style.display=\'none\'" />':'')+ cap +
      '</div>';
  }).join('');

  /* Play the driver clips one after another (year-ago, then now), then repeat. */
  var vids = Array.prototype.slice.call(stage.querySelectorAll('video'));
  var seq = 0, inView = false, started = false;
  function playAt(i){
    if(i<0 || i>=vids.length) return;
    seq = i;
    for(var j=0;j<vids.length;j++){ if(j!==i){ try{ vids[j].pause(); vids[j].currentTime=0; }catch(e){} } }
    var v = vids[i];
    try{ v.currentTime = 0; }catch(e){}
    var p = v.play(); if(p && p.catch) p.catch(function(){});
  }
  vids.forEach(function(v, i){
    v.addEventListener('ended', function(){ if(inView) playAt((i+1) % vids.length); });
  });
  function startSeq(){
    if(!vids.length) return;
    inView = true;
    if(!started){ started = true; playAt(0); }
    else { var v=vids[seq]; if(v){ var p=v.play(); if(p&&p.catch) p.catch(function(){}); } }
  }
  function stopSeq(){ inView = false; var v=vids[seq]; if(v){ try{ v.pause(); }catch(e){} } }
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(ents){ ents.forEach(function(en){ if(en.isIntersecting) startSeq(); else stopSeq(); }); }, { threshold:0.4 });
    io.observe(stage);
  } else { startSeq(); }

  stage.querySelectorAll('.hmute').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var v = btn.parentNode.querySelector('video'); if(!v) return;
      v.muted = !v.muted;
      btn.innerHTML = v.muted ? ICON_MUTE : ICON_ON;
      btn.setAttribute('aria-label', v.muted ? 'Unmute' : 'Mute');
      if(!v.muted){ var p=v.play(); if(p&&p.catch) p.catch(function(){}); }
    });
  });
})();

/* ---------- almanac ---------- */
document.getElementById('almanac').innerHTML = LESSONS.map((l,i)=>
  '<li><span class="num">'+String(i+1).padStart(2,'0')+'</span><div>'+
  '<p class="text">'+esc(l.text)+'</p>'+
  (l.context?'<p class="ctx">— '+esc(l.context)+'</p>':'')+
  '</div></li>').join('');

/* ---------- sticky bar ---------- */
const bar = document.getElementById('bar');
window.addEventListener('scroll', ()=>{ bar.classList.toggle('solid', window.scrollY>40); }, {passive:true});
bar.classList.toggle('solid', window.scrollY>40);
