// ════════════════════════════════
//  DATA
// ════════════════════════════════
const GADGETS = [
  {
    id:1, brand:'ASUS', name:'ROG Zephyrus G14 (2024)',
    category:'Laptops', price:135000, oldPrice:149000,
    cpu:'AMD Ryzen 9 8945HS', ram:32, storage:'1TB NVMe SSD',
    gpu:'RTX 4070 8GB', display:'14" OLED 120Hz',
    battery:'76Wh (~10hr)', weight:'1.65kg',
    use:['Gaming','Video Editing','Coding'],
    dna:{perf:92,battery:72,gaming:95,portable:80,value:85},
    futureYears:'5–7 years', futureScore:92,
    warns:[],goods:['Best-in-class OLED display','Excellent gaming+content creation balance'],
    summary:'Top pick for creators who game. Ryzen 9 + RTX 4070 combo handles 4K editing & 1080p gaming at ultra settings.',
    rating:4.7
  },
  {
    id:2, brand:'Apple', name:'MacBook Air M3 (15")',
    category:'Laptops', price:149000, oldPrice:160000,
    cpu:'Apple M3 (8-core)', ram:16, storage:'512GB SSD',
    gpu:'Apple GPU 10-core', display:'15.3" Liquid Retina',
    battery:'~18hr', weight:'1.51kg',
    use:['Coding','Video Editing','Business','Student'],
    dna:{perf:85,battery:99,gaming:40,portable:90,value:70},
    futureYears:'6–8 years', futureScore:95,
    warns:[],goods:['Incredible battery life','Silent fanless design','Best macOS optimization'],
    summary:'Perfect for developers & light creatives. Unbeatable battery, silent operation, and premium build.',
    rating:4.8
  },
  {
    id:3, brand:'Lenovo', name:'Legion 5 Pro Gen 9',
    category:'Laptops', price:115000, oldPrice:125000,
    cpu:'AMD Ryzen 7 8845H', ram:16, storage:'512GB SSD',
    gpu:'RTX 4060 8GB', display:'16" IPS 165Hz',
    battery:'80Wh (~6hr)', weight:'2.4kg',
    use:['Gaming','Student'],
    dna:{perf:85,battery:55,gaming:88,portable:55,value:92},
    futureYears:'4–5 years', futureScore:80,
    warns:['Heavy for travel','Fan noise under load'],
    goods:['Excellent price-to-performance','Great cooling system'],
    summary:'Best budget gaming laptop. Solid RTX 4060 performance at a competitive price.',
    rating:4.5
  },
  {
    id:4, brand:'Samsung', name:'Galaxy S25 Ultra',
    category:'Smartphones', price:130000, oldPrice:139999,
    cpu:'Snapdragon 8 Elite', ram:12, storage:'256GB',
    gpu:'Adreno 830', display:'6.9" QHD+ 120Hz AMOLED',
    battery:'5000mAh (~24hr)', weight:'218g',
    use:['Photography','Gaming','Business'],
    dna:{perf:95,battery:82,gaming:90,portable:65,value:72},
    futureYears:'5–6 years', futureScore:90,
    warns:['Premium price'],goods:['Best Android camera system','S-Pen productivity'],
    summary:'The ultimate Android phone. Best-in-class camera, S-Pen, and flagship performance.',
    rating:4.8
  },
  {
    id:5, brand:'Apple', name:'iPhone 16 Pro',
    category:'Smartphones', price:119900, oldPrice:134900,
    cpu:'Apple A18 Pro', ram:8, storage:'256GB',
    gpu:'Apple GPU 6-core', display:'6.3" Super Retina XDR 120Hz',
    battery:'3582mAh (~22hr)', weight:'199g',
    use:['Photography','Gaming','Business'],
    dna:{perf:97,battery:75,gaming:85,portable:78,value:68},
    futureYears:'6–8 years', futureScore:97,
    warns:[],goods:['Best CPU benchmark','Camera Control button','Apple Intelligence AI'],
    summary:'The most future-proof phone money can buy. A18 Pro chip will remain relevant for 6+ years.',
    rating:4.9
  },
  {
    id:6, brand:'Sony', name:'WH-1000XM5',
    category:'Headphones', price:24990, oldPrice:34990,
    cpu:'N/A', ram:0, storage:'N/A',
    gpu:'N/A', display:'N/A',
    battery:'30hr ANC on', weight:'250g',
    use:['Music','Business'],
    dna:{perf:88,battery:90,gaming:50,portable:80,value:85},
    futureYears:'4–6 years', futureScore:82,
    warns:['No 3.5mm on case'],goods:['Best ANC on market','30hr battery','Multipoint connect'],
    summary:'The gold standard of noise cancellation. Perfect for frequent flyers & open-office workers.',
    rating:4.7
  },
  {
    id:7, brand:'Apple', name:'iPad Pro M4 (11")',
    category:'Tablets', price:99900, oldPrice:109900,
    cpu:'Apple M4', ram:8, storage:'256GB',
    gpu:'Apple GPU 10-core', display:'11" OLED Ultra Retina XDR',
    battery:'~10hr', weight:'444g',
    use:['Student','Video Editing','Business'],
    dna:{perf:92,battery:78,gaming:70,portable:95,value:65},
    futureYears:'6–8 years', futureScore:94,
    warns:['No file manager','Accessories expensive'],
    goods:['Thinnest Apple device ever','Stunning OLED display','M4 chip overkill power'],
    summary:'Best tablet ever made. OLED display + M4 chip is transformative for creative work.',
    rating:4.8
  },
  {
    id:8, brand:'Dell', name:'XPS 15 (9530)',
    category:'Laptops', price:185000, oldPrice:199000,
    cpu:'Intel Core i9-13900H', ram:32, storage:'1TB SSD',
    gpu:'RTX 4070 8GB', display:'15.6" OLED Touch 3.5K',
    battery:'86Wh (~8hr)', weight:'1.86kg',
    use:['Video Editing','Coding','Business'],
    dna:{perf:90,battery:65,gaming:80,portable:72,value:68},
    futureYears:'5–6 years', futureScore:88,
    warns:['Runs hot under load','Mediocre speakers'],
    goods:['Stunning 3.5K OLED display','Premium build quality'],
    summary:'Premium Windows powerhouse for professionals. Best display in a Windows laptop.',
    rating:4.5
  },
];

const FILTERS = {use:[], prio:[], cpu:[]};
let chatHistory = [];
let isSending = false;

// ════════════════════════════════
//  NAV
// ════════════════════════════════
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('visible');
  document.querySelectorAll('.nav-link').forEach(b => {
    if(b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
  if(id === 'finder') renderFinderResults();
  if(id === 'quiz') initQuiz();
  if(id === 'compare' && !document.getElementById('compareResults').innerHTML) renderDefaultCompare();
}

// ════════════════════════════════
//  CHAT
// ════════════════════════════════
function autoResize(el){
  el.style.height='auto';
  el.style.height=Math.min(el.scrollHeight,120)+'px';
}
function handleKey(e){
  if(e.key==='Enter' && !e.shiftKey){e.preventDefault();sendMessage()}
}
function injectPrompt(text){
  const ta = document.getElementById('chatInput');
  ta.value = text;
  autoResize(ta);
  showSection('chat');
  sendMessage();
}
function toggleCat(el){
  el.classList.toggle('on');
}
function clearChat(){
  chatHistory = [];
  document.getElementById('chatMessages').innerHTML = `
  <div class="msg ai">
    <div class="msg-avatar">🤖</div>
    <div class="msg-bubble"><strong>Chat cleared!</strong> Ask me anything about gadgets. 👋</div>
  </div>`;
}

const API_BASE = 'https://techmatch-ai.vercel.app';

async function sendMessage(){
  if(isSending) return;
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;

  addMessage('user', text);
  input.value = '';
  input.style.height = 'auto';
  chatHistory.push({role:'user', content: text});

  isSending = true;
  document.getElementById('sendBtn').disabled = true;

  // Typing indicator
  const typingId = 'typing-'+Date.now();
  const msgDiv = document.createElement('div');
  msgDiv.className = 'msg ai';
  msgDiv.id = typingId;
  msgDiv.innerHTML = `<div class="msg-avatar">🤖</div><div class="msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
  document.getElementById('chatMessages').appendChild(msgDiv);
  scrollChat();

  try {
    const systemPrompt = `You are TechMatch AI, a world-class gadget advisor embedded in a sleek tech recommendation website. Your personality is knowledgeable, direct, and genuinely helpful — like a brilliant tech-savvy friend.

When users ask for gadget recommendations:
1. Understand their EXACT needs: budget, use case, preferences
2. Recommend 2-3 specific real products with model names
3. For each product give: price range, key specs relevant to their use, a "Device DNA" summary (Performance/Battery/Gaming/Portability/Value out of 100), future-proof estimate (years), and any warnings
4. Explain WHY each recommendation fits their specific needs
5. Flag any known issues honestly
6. End with a clear "Top Pick" recommendation

Format your response with clear sections. Use emojis sparingly for clarity. Be specific about specs. Mention real prices in INR or USD as appropriate.

For comparison requests: do a detailed head-to-head spec analysis with a clear winner for different user types.
For device warnings: honestly flag common issues from user reviews.
For future-proof questions: analyze CPU architecture, RAM, upgrade potential.
For PC builds: suggest specific component combinations.

Always be conversational and specific. Never be vague.`;

    const response = await fetch(`${API_BASE}/api/chat`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        system: systemPrompt,
        messages: chatHistory
      })
    });
    const data = await response.json();
    if(data.error) throw new Error(data.error.message || 'Gemini API error');
    const reply = data.reply || '';
    chatHistory.push({role:'assistant', content: reply});
    document.getElementById(typingId)?.remove();
    addMessage('ai', reply);
  } catch(err) {
    document.getElementById(typingId)?.remove();
    addMessage('ai', `⚠️ Something went wrong: ${err.message}. Please try again.`);
  }

  isSending = false;
  document.getElementById('sendBtn').disabled = false;
}

function addMessage(role, text){
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  const avatar = role === 'ai' ? '🤖' : '👤';
  const formatted = formatMessage(text);
  div.innerHTML = `<div class="msg-avatar">${avatar}</div><div class="msg-bubble">${formatted}</div>`;
  document.getElementById('chatMessages').appendChild(div);
  scrollChat();
}

function formatMessage(text){
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/### (.*)/g,'<strong style="color:var(--cyan);font-size:.9rem;display:block;margin:.8rem 0 .3rem">$1</strong>')
    .replace(/## (.*)/g,'<strong style="color:var(--cyan);font-size:1rem;display:block;margin:.8rem 0 .3rem">$1</strong>')
    .replace(/# (.*)/g,'<strong style="color:var(--text);font-size:1.05rem;display:block;margin:.8rem 0 .3rem">$1</strong>')
    .replace(/^[-•] (.+)$/gm,'<div style="padding:.15rem 0 .15rem 1rem;border-left:2px solid var(--border2)">• $1</div>')
    .replace(/`([^`]+)`/g,'<code style="background:var(--s3);padding:.1rem .4rem;border-radius:4px;font-size:.82rem;color:var(--cyan)">$1</code>')
    .replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>');
}

function scrollChat(){
  const c = document.getElementById('chatMessages');
  setTimeout(()=>c.scrollTop=c.scrollHeight, 50);
}

// ════════════════════════════════
//  FINDER
// ════════════════════════════════
function toggleFilter(el, type, val){
  el.classList.toggle('on');
  const arr = FILTERS[type];
  const i = arr.indexOf(val);
  if(i>-1) arr.splice(i,1); else arr.push(val);
  renderFinderResults();
}

function renderFinderResults(){
  const budget = parseInt(document.getElementById('f-budget').value);
  const cat = document.getElementById('f-category').value;
  const minRam = parseInt(document.getElementById('f-ram').value)||0;
  const sort = document.getElementById('sortSelect').value;

  let results = GADGETS.filter(g => {
    if(g.price > budget) return false;
    if(cat && g.category !== cat) return false;
    if(g.ram < minRam) return false;
    if(FILTERS.use.length && !FILTERS.use.some(u=>g.use.includes(u))) return false;
    if(FILTERS.cpu.length && !FILTERS.cpu.some(c=>g.cpu.includes(c))) return false;
    return true;
  });

  if(sort.includes('Low-High')) results.sort((a,b)=>a.price-b.price);
  else if(sort.includes('High-Low')) results.sort((a,b)=>b.price-a.price);
  else if(sort.includes('Rated')) results.sort((a,b)=>b.rating-a.rating);
  else results.sort((a,b)=>b.futureScore-a.futureScore);

  document.getElementById('resultsCount').textContent = `${results.length} device${results.length!==1?'s':''} found`;

  const container = document.getElementById('finderResults');
  if(!results.length){
    container.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted)">
      <div style="font-size:2rem;margin-bottom:.5rem">🔍</div>
      No devices match your filters. Try adjusting your budget or criteria.
      <br><br><button class="btn-ghost" style="margin-top:.5rem" onclick="askAIFinderHelp()">🤖 Ask AI for help</button>
    </div>`;
    return;
  }

  container.innerHTML = results.map(g => gadgetCardHTML(g)).join('');
}

function gadgetCardHTML(g){
  const colors = {
    perf:'#00d4ff', battery:'#00ff88', gaming:'#ff2d78', portable:'#ffd60a', value:'#a78bfa'
  };
  const labels = {perf:'Perf',battery:'Battery',gaming:'Gaming',portable:'Portable',value:'Value'};

  const dnaRings = Object.entries(g.dna).map(([k,v])=>{
    const color = colors[k];
    const deg = (v/100)*360;
    return `<div class="dna-item">
      <div class="dna-score-ring" style="background:conic-gradient(${color} ${deg}deg, var(--border2) 0deg)">
        <div style="width:30px;height:30px;background:var(--s1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;color:${color}">${v}</div>
      </div>
      <div class="dna-ring-label">${labels[k]}</div>
    </div>`;
  }).join('');

  const warns = g.warns.map(w=>`<span class="w-badge">⚠️ ${w}</span>`).join('');
  const goods = g.goods.slice(0,2).map(w=>`<span class="g-badge">✓ ${w}</span>`).join('');

  return `<div class="gadget-card">
    <div class="gadget-card-header">
      <div class="gadget-info">
        <div class="gadget-brand">${g.brand}</div>
        <div class="gadget-name">${g.name}</div>
      </div>
      <div class="gadget-price-block">
        <div class="gadget-price">₹${g.price.toLocaleString('en-IN')}</div>
        ${g.oldPrice?`<div class="gadget-old-price">₹${g.oldPrice.toLocaleString('en-IN')}</div>`:''}
      </div>
    </div>
    <div class="gadget-specs">
      <span class="g-spec">🔧 ${g.cpu}</span>
      ${g.ram?`<span class="g-spec">💾 ${g.ram}GB RAM</span>`:''}
      <span class="g-spec">💿 ${g.storage}</span>
      ${g.gpu && g.gpu!=='N/A'?`<span class="g-spec">🎮 ${g.gpu}</span>`:''}
      <span class="g-spec">🔋 ${g.battery}</span>
      ${g.weight?`<span class="g-spec">⚖️ ${g.weight}</span>`:''}
    </div>
    <div class="dna-scores">${dnaRings}</div>
    <div style="font-size:.78rem;color:var(--muted2);margin-bottom:.6rem;line-height:1.6">${g.summary}</div>
    <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.5rem">${goods}</div>
    ${warns?`<div style="display:flex;flex-wrap:wrap;gap:.3rem">${warns}</div>`:''}
    <div class="gadget-footer">
      <div class="future-badge">🔮 Future-proof: ${g.futureYears}</div>
      <div style="display:flex;gap:.5rem;align-items:center">
        <div style="font-size:.75rem;color:var(--yellow)">★ ${g.rating}</div>
        <button class="add-compare-card-btn" onclick="prefillCompare('${g.brand} ${g.name}')">+ Compare</button>
      </div>
    </div>
  </div>`;
}

function askAIFinderHelp(){
  showSection('chat');
  const budget = parseInt(document.getElementById('f-budget').value);
  injectPrompt(`I'm looking for gadgets under ₹${budget.toLocaleString('en-IN')}. Help me find the best options.`);
}

// ════════════════════════════════
//  COMPARE
// ════════════════════════════════
function prefillCompare(name){
  showSection('compare');
  const d1 = document.getElementById('dev1Input');
  const d2 = document.getElementById('dev2Input');
  if(!d1.value) d1.value = name;
  else if(!d2.value) { d2.value = name; startCompare(); }
  else { d1.value = name; d2.value = ''; }
}

function quickCompare(a,b){
  document.getElementById('dev1Input').value = a;
  document.getElementById('dev2Input').value = b;
  startCompare();
}

async function startCompare(){
  const d1 = document.getElementById('dev1Input').value.trim();
  const d2 = document.getElementById('dev2Input').value.trim();
  if(!d1 || !d2){ alert('Please enter both device names'); return; }

  const container = document.getElementById('compareResults');
  container.innerHTML = `<div class="thinking" style="background:var(--s2);border:1px solid var(--border);border-radius:14px;padding:1.5rem;display:flex;align-items:center;gap:1rem;color:var(--muted2)">
    <div class="typing-indicator"><span></span><span></span><span></span></div>
    Analyzing ${d1} vs ${d2}...
  </div>`;

  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        messages:[{
          role:'user',
          content:`Compare ${d1} vs ${d2} for a gadget buyer. Give me:

1. SPECS TABLE: CPU, RAM, Storage, Display, Battery, Weight, Price (INR estimate)
2. DNA SCORES (out of 100 each): Performance, Battery, Gaming, Portability, Value-for-Money — for BOTH devices
3. WINNER for each use case: Gaming, Video Editing, Programming, Students, Business, Travel
4. KEY ADVANTAGES of each
5. KNOWN ISSUES / WARNINGS for each
6. FUTURE-PROOF rating (years) for each
7. FINAL VERDICT: Who should buy which one?

Be specific with real numbers. Format clearly with bold headers.`
        }]
      })
    });
    const data = await response.json();
    if(data.error) throw new Error(data.error.message || 'Gemini API error');
    const text = data.reply || '';
    container.innerHTML = `<div style="background:var(--s2);border:1px solid var(--border2);border-radius:18px;padding:2rem;font-size:.88rem;line-height:1.8">${formatMessage(text)}</div>`;
  } catch(e) {
    container.innerHTML = `<div style="color:var(--pink);padding:1rem">Error: ${e.message}</div>`;
  }
}

function renderDefaultCompare(){
  document.getElementById('compareResults').innerHTML = `
    <div style="text-align:center;padding:3rem;color:var(--muted)">
      <div style="font-size:3rem;margin-bottom:1rem">⚡</div>
      <div style="font-size:1rem;font-weight:600;color:var(--text);margin-bottom:.5rem">Enter two devices above</div>
      <div style="font-size:.85rem">Or try one of the quick compare presets below</div>
    </div>`;
}

// ════════════════════════════════
//  QUIZ
// ════════════════════════════════
const QUESTIONS = [
  {
    q:"What's your primary goal for your next gadget?",
    sub:"Pick the one that fits best",
    opts:[
      {icon:'🎬',text:'Create & Edit Content',sub:'Video, photos, music production',val:'creator'},
      {icon:'🎮',text:'Gaming & Entertainment',sub:'Games, streaming, movies',val:'gamer'},
      {icon:'💻',text:'Work & Productivity',sub:'Coding, office tasks, business',val:'pro'},
      {icon:'🎓',text:'Learning & Studies',sub:'School, research, notes',val:'student'},
    ]
  },
  {
    q:"How do you feel about carrying your device?",
    sub:"Weight and portability",
    opts:[
      {icon:'🪶',text:'Ultra Lightweight',sub:'Under 1.5kg, fits anywhere',val:'ultra-portable'},
      {icon:'⚖️',text:'Balanced',sub:'Medium weight is fine',val:'balanced'},
      {icon:'🏋️',text:'Power over Portability',sub:'I use it at a desk mostly',val:'desktop-replacement'},
      {icon:'🏠',text:'Stays Home',sub:'Portability doesn\'t matter',val:'stationary'},
    ]
  },
  {
    q:"What's your budget range?",
    sub:"For your main gadget purchase",
    opts:[
      {icon:'💰',text:'Budget Smart',sub:'Under ₹40,000 / $500',val:'budget'},
      {icon:'💳',text:'Mid-Range',sub:'₹40k–₹90k / $500–$1000',val:'mid'},
      {icon:'💎',text:'Premium',sub:'₹90k–₹1.5L / $1000–$2000',val:'premium'},
      {icon:'🚀',text:'No Limits',sub:'Best money can buy',val:'ultra'},
    ]
  },
  {
    q:"Battery life or raw power — what matters more?",
    sub:"If you had to choose one",
    opts:[
      {icon:'🔋',text:'All-day Battery',sub:'I hate charging mid-day',val:'battery-first'},
      {icon:'⚡',text:'Maximum Performance',sub:'I have outlets available',val:'perf-first'},
      {icon:'🎯',text:'Equal balance',sub:'Both are important to me',val:'balanced-bp'},
      {icon:'🌐',text:'Connectivity & Features',sub:'5G, ports, extras matter most',val:'features'},
    ]
  },
  {
    q:"How tech-savvy are you?",
    sub:"This helps us tune our recommendations",
    opts:[
      {icon:'🌱',text:'Beginner',sub:'Keep it simple, plug and play',val:'beginner'},
      {icon:'📚',text:'Intermediate',sub:'Comfortable with tech',val:'intermediate'},
      {icon:'🔧',text:'Power User',sub:'I love customizing & tweaking',val:'power'},
      {icon:'🤖',text:'Developer / Engineer',sub:'I build things with my devices',val:'developer'},
    ]
  },
];

const PERSONALITIES = {
  default:{
    title:'The Balanced Tech Enthusiast',
    desc:'You want a great all-rounder that handles everything well without going to extremes. You value reliability, good performance, and smart value.',
    picks:['MacBook Air M3','Samsung Galaxy S25','iPad Air M2'],
    color:'var(--cyan)'
  },
  creator:{
    title:'The Creative Powerhouse',
    desc:'You push hardware to its limits. You need fast rendering, color-accurate displays, and enough RAM to keep multiple apps running. You won\'t compromise on performance.',
    picks:['ASUS ROG Zephyrus G14','MacBook Pro M4','iPad Pro M4'],
    color:'var(--pink)'
  },
  gamer:{
    title:'The Performance Gamer',
    desc:'You demand high frame rates, responsive displays, and powerful GPUs. You\'re willing to sacrifice some portability for pure gaming muscle.',
    picks:['Lenovo Legion 5 Pro','ASUS ROG Zephyrus G14','ASUS ROG Phone 8'],
    color:'var(--pink)'
  },
  pro:{
    title:'The Productivity Pro',
    desc:'You need a reliable workhorse that handles multitasking, long work sessions, and professional apps without breaking a sweat. Build quality and keyboard matter to you.',
    picks:['Dell XPS 15','MacBook Air M3','ThinkPad X1 Carbon'],
    color:'var(--cyan)'
  },
  student:{
    title:'The Smart Student',
    desc:'You need a lightweight, durable device that lasts all day and doesn\'t burn your wallet. You value good battery life and portability over raw power.',
    picks:['MacBook Air M3','Samsung Galaxy Tab S9 FE','Lenovo IdeaPad Slim 5'],
    color:'var(--green)'
  },
};

let quizAnswers = [];
let quizCurrent = 0;

function initQuiz(){
  quizAnswers = [];
  quizCurrent = 0;
  renderQuestion();
}

function renderQuestion(){
  const container = document.getElementById('quizContainer');
  if(quizCurrent >= QUESTIONS.length){
    renderQuizResult();
    return;
  }
  const q = QUESTIONS[quizCurrent];
  const pct = (quizCurrent/QUESTIONS.length)*100;
  container.innerHTML = `
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-sub">${q.sub}</div>
    <div class="quiz-options">
      ${q.opts.map((o,i)=>`
        <div class="quiz-opt" onclick="selectAnswer('${o.val}',this)">
          <div class="opt-icon">${o.icon}</div>
          <div><div class="opt-text">${o.text}</div><div class="opt-sub">${o.sub}</div></div>
        </div>`).join('')}
    </div>
    <div class="quiz-nav">
      <div class="quiz-step">Question ${quizCurrent+1} of ${QUESTIONS.length}</div>
      ${quizCurrent>0?`<button class="btn-ghost" style="padding:.5rem 1rem;font-size:.82rem" onclick="quizBack()">← Back</button>`:'<div></div>'}
    </div>`;
}

function selectAnswer(val, el){
  document.querySelectorAll('.quiz-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  quizAnswers[quizCurrent] = val;
  setTimeout(()=>{quizCurrent++;renderQuestion()},350);
}

function quizBack(){
  if(quizCurrent>0){quizCurrent--;renderQuestion();}
}

function renderQuizResult(){
  const freq = {};
  quizAnswers.forEach(a=>{freq[a]=(freq[a]||0)+1});
  const top = Object.entries(freq).sort((a,b)=>b[1]-a[1])[0]?.[0]||'default';
  const p = PERSONALITIES[top] || PERSONALITIES.default;

  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-progress"><div class="quiz-progress-fill" style="width:100%"></div></div>
      <div style="font-size:.8rem;color:var(--muted);margin-bottom:1rem;text-transform:uppercase;letter-spacing:1px">Your Tech Personality</div>
      <div class="result-badge" style="color:${p.color}">${p.title}</div>
      <p class="result-desc">${p.desc}</p>
      <div style="margin-bottom:2rem">
        <div style="font-size:.8rem;color:var(--muted);margin-bottom:.8rem;text-transform:uppercase;letter-spacing:1px">Top Picks For You</div>
        <div style="display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center">
          ${p.picks.map(pick=>`
            <div style="background:var(--s2);border:1px solid var(--border2);padding:.6rem 1.2rem;border-radius:12px;font-size:.85rem;font-weight:600;cursor:pointer"
              onclick="injectPrompt('Tell me about ${pick} — is it right for me?')">${pick}</div>
          `).join('')}
        </div>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
        <button class="btn-primary" onclick="injectPrompt('Based on my profile as ${p.title.replace(/'/g,"\\'")} — give me your top 3 gadget recommendations')">🤖 Get AI Recommendations</button>
        <button class="btn-ghost" onclick="initQuiz()">🔄 Retake Quiz</button>
      </div>
    </div>`;
}

// ════════════════════════════════
//  INIT
// ════════════════════════════════
document.addEventListener('DOMContentLoaded', ()=>{
  renderFinderResults();
});