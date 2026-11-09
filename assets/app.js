'use strict';
const root=document.getElementById('app');
const nav=[['index.html','トップページ'],['about.html','MIGsについて'],['short-term.html','短期留学'],['working-holiday.html','ワーキングホリデー'],['pronunciation.html','発音講座'],['contact.html','お問い合わせ']];
const page=document.body.dataset.page;
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeUrl(v){const s=String(v??'').trim();if(!s)return '';if(/^https:\/\//i.test(s))return s;if(/^http:\/\//i.test(s))return s;if(/^(?:\/\/|javascript:|data:)/i.test(s))return '';return s.replace(/^\/+/, '');}
function asset(v){const x=safeUrl(v);return x||'media/hero.svg';}
function img(v,alt='',cl=''){return `<img class="${cl}" src="${esc(asset(v))}" alt="${esc(alt)}" loading="lazy">`;}
function text(v){return esc(v).replace(/\n/g,'<br>');}
const embeddedData={"data/working-holiday/australia.json":{"name":"オーストラリア","slug":"australia","subtitle":"海外で生活しながら働く経験","description":"制度やプログラムの詳細を準備中です。","eligibility":"各国の最新の公式要件をご確認ください。","price":"未定（お問い合わせください）","photo":"media/australia.svg","photo_alt":"オーストラリアの紹介用イメージ画像（仮）","notes":"ビザの年齢・国籍・申請条件等は変更される場合があります。","published":true,"order":1},"data/working-holiday/new-zealand.json":{"name":"ニュージーランド","slug":"new-zealand","subtitle":"海外で生活しながら働く経験","description":"制度やプログラムの詳細を準備中です。","eligibility":"各国の最新の公式要件をご確認ください。","price":"未定（お問い合わせください）","photo":"media/new-zealand.svg","photo_alt":"ニュージーランドの紹介用イメージ画像（仮）","notes":"ビザの年齢・国籍・申請条件等は変更される場合があります。","published":true,"order":3},"data/working-holiday/canada.json":{"name":"カナダ","slug":"canada","subtitle":"海外で生活しながら働く経験","description":"制度やプログラムの詳細を準備中です。","eligibility":"各国の最新の公式要件をご確認ください。","price":"未定（お問い合わせください）","photo":"media/canada.svg","photo_alt":"カナダの紹介用イメージ画像（仮）","notes":"ビザの年齢・国籍・申請条件等は変更される場合があります。","published":true,"order":2},"data/working-holiday/index.json":["australia","canada","new-zealand"],"data/pages/short-term.json":{"title":"短期留学","intro":"国ごとの短期留学プログラムをご覧いただけます。各国のページから期間・料金・写真を確認できます。","image":"media/study.svg","notice":"掲載内容は準備中です。正式な期間・料金・受入条件についてはお問い合わせください。"},"data/pages/about.json":{"title":"MIGsについて","intro":"MIGs（Matsue International Gateways）は、松江を拠点とした留学・海外体験の相談窓口を目指しています。","business":"海外での学びや生活に関心がある方へ、プログラム情報の提供や渡航準備に関するご相談をご案内します。具体的な支援内容はお問い合わせください。","features":[{"title":"一人ひとりに合わせたご相談","description":"目的・渡航期間・希望する国を整理し、選択肢を一緒に考えます。"},{"title":"短期留学からワーキングホリデーまで","description":"学生から社会人まで、それぞれの海外体験を検討できます。"},{"title":"地域から世界への入り口","description":"松江・島根から海外に挑戦するきっかけづくりを大切にします。"}],"photo":"media/about.svg","photo_alt":"海外での学びをイメージした仮画像"},"data/pages/pronunciation.json":{"title":"2つの発音コース","intro":"コースを選択すると、期間・授業内容・料金などの詳細をご覧いただけます。","section_title":"発音講座一覧","section_intro":"ご希望に合わせたコースをご案内します。","notice":"授業回数・料金などは決定後にご案内します。"},"data/pages/home.json":{"title":"世界へつながる、松江から。","intro":"Matsue International Gateways（MIGs）は、海外で学ぶ・働く一歩を考える方へ、留学とワーキングホリデーの情報をご案内します。","hero_image":"media/hero.svg","hero_alt":"旅立ちをイメージした仮画像","eyebrow":"MATSUE INTERNATIONAL GATEWAYS","button_label":"留学プログラムを見る","section_title":"あなたに合った海外への一歩","section_intro":"短期留学とワーキングホリデー。目的に合わせてプログラムを探せます。"},"data/pages/contact.json":{"title":"お問い合わせ","intro":"留学やワーキングホリデーに関するご相談は、フォームまたはLINEからお問い合わせください。","guidance":"ご希望の国、渡航時期、期間、相談したい内容をお知らせいただくとご案内がスムーズです。","email":"example@example.com","phone":"","line_url":"","line_label":"LINEで問い合わせる","availability":"フォームの送信先とLINE公式アカウントのURLを設定すると受付を開始できます。","photo":"media/contact.svg","form_endpoint":"","privacy_url":""},"data/pages/pronunciation-basic.json":{"name":"基礎習得コース（2か月）","subtitle":"英語の発音の基本を体系的に学ぶ2か月のコース","description":"英語の母音・子音、アクセント、リズム、音のつながりなどを基礎から段階的に学ぶコースです。具体的な学習計画は受講者の目標に応じてご案内します。","duration":"2か月","audience":"英語の発音を基礎から学びたい方","curriculum":"母音と子音、単語のアクセント、英文のリズム、音のつながりなど（詳細は調整中）","format":"オンライン（授業時間・回数は調整中）","price":"未定（お問い合わせください）","photo":"media/pronunciation-basic.svg","photo_alt":"基礎習得コースの仮画像","notes":"授業回数や受講料金は確定後に掲載します。"},"data/pages/working-holiday.json":{"title":"ワーキングホリデー","intro":"国ごとのワーキングホリデー情報をご覧いただけます。各国のページから参加条件・料金を確認できます。","image":"media/work.svg","notice":"参加条件・ビザ制度は国籍や申請時期などによって異なります。必ず各国の公式情報もご確認ください。"},"data/short-term/australia.json":{"name":"オーストラリア","slug":"australia","subtitle":"多文化に触れながら英語を学ぶ","description":"プログラム詳細を準備中です。具体的な内容はお問い合わせください。","duration":"未定（お問い合わせください）","price":"未定（お問い合わせください）","photo":"media/australia.svg","photo_alt":"オーストラリアの紹介用イメージ画像（仮）","notes":"掲載情報はサンプルです。正式な募集情報が確定次第更新します。","published":true,"order":1},"data/short-term/united-kingdom.json":{"name":"イギリス","slug":"united-kingdom","subtitle":"歴史と文化に出会う英語研修","description":"プログラム詳細を準備中です。具体的な内容はお問い合わせください。","duration":"未定（お問い合わせください）","price":"未定（お問い合わせください）","photo":"media/united-kingdom.svg","photo_alt":"イギリスの紹介用イメージ画像（仮）","notes":"掲載情報はサンプルです。正式な募集情報が確定次第更新します。","published":true,"order":3},"data/short-term/new-zealand.json":{"name":"ニュージーランド","slug":"new-zealand","subtitle":"自然豊かな環境での海外体験","description":"プログラム詳細を準備中です。具体的な内容はお問い合わせください。","duration":"未定（お問い合わせください）","price":"未定（お問い合わせください）","photo":"media/new-zealand.svg","photo_alt":"ニュージーランドの紹介用イメージ画像（仮）","notes":"掲載情報はサンプルです。正式な募集情報が確定次第更新します。","published":true,"order":2},"data/short-term/index.json":["australia","new-zealand","united-kingdom"]};
async function loadJson(path){
  // GitHub Pages: always request the latest Pages CMS JSON; do NOT silently show old bundled content.
  // Local file:// preview: use embedded data, because browsers block fetch(file://).
  if(location.protocol === 'file:'){
    if(Object.prototype.hasOwnProperty.call(embeddedData,path)) return embeddedData[path];
    throw new Error(`ローカル用データがありません: ${path}`);
  }
  const url = `${path}${path.includes('?')?'&':'?'}migs_update=${Date.now()}`;
  let resp;
  try {
    resp = await fetch(url,{cache:'no-store'});
  } catch(error) {
    throw new Error(`最新データを取得できません: ${path} (${error.message})`);
  }
  if(!resp.ok) throw new Error(`最新データが見つかりません: ${path} (HTTP ${resp.status})`);
  try { return await resp.json(); }
  catch(error){ throw new Error(`JSONの形式が正しくありません: ${path} (${error.message})`); }
}
async function loadCollection(category){const index=await loadJson(`data/${category}/index.json`);const items=await Promise.all(index.map(file=>loadJson(`data/${category}/${encodeURIComponent(file)}.json`)));return items.filter(x=>x&&x.published!==false).sort((a,b)=>(Number(a.order)||999)-(Number(b.order)||999)||String(a.name).localeCompare(String(b.name),'ja'));}
function head(title,intro){document.title=`${title} | MIGs`;return `<header class="page-header"><div class="wrap"><p class="eyebrow">MATSUE INTERNATIONAL GATEWAYS</p><h1>${esc(title)}</h1><p class="intro">${text(intro)}</p></div></header>`;}
function header(){const current=page==='program'?(new URLSearchParams(location.search).get('category')==='working-holiday'?'working-holiday.html':'short-term.html'):(page==='index'?'index.html':page+'.html');document.getElementById('site-header').innerHTML=`<header class="header"><div class="wrap header-row"><a class="brand" href="index.html" aria-label="MIGs トップへ"><strong>MIGs</strong><span>MATSUE INTERNATIONAL GATEWAYS</span></a><button class="mobile-menu" id="menu" aria-expanded="false" aria-controls="main-nav">メニュー ☰</button><nav id="main-nav" class="nav" aria-label="メインナビ">${nav.map(([href,label])=>`<a href="${href}" ${href===current?'aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>`;document.getElementById('menu').addEventListener('click',()=>{const menu=document.getElementById('main-nav');const on=menu.classList.toggle('open');document.getElementById('menu').setAttribute('aria-expanded',on?'true':'false');});document.getElementById('site-footer').innerHTML=`<footer class="footer"><div class="wrap"><div class="footer-row"><div><strong>MIGs</strong><p><small>Matsue International Gateways</small></p></div><div>${nav.map(([url,label])=>`<a href="${url}">${label}</a>`).join('')}</div></div><small>© ${new Date().getFullYear()} MIGs. All rights reserved.</small></div></footer>`;}
function programCard(v,category){const link=`program.html?category=${encodeURIComponent(category)}&slug=${encodeURIComponent(v.slug)}`;return `<a class="tile" href="${link}">${img(v.photo,v.photo_alt||v.name)}<div class="tile-content"><h3>${esc(v.name)}</h3><p>${esc(v.subtitle)}</p><span class="more">詳しく見る →</span></div></a>`;}
async function home(){const d=await loadJson('data/pages/home.json');document.title='MIGs | Matsue International Gateways';return `<section class="hero"><div class="wrap hero-grid"><div><p class="eyebrow">${esc(d.eyebrow)}</p><h1>${esc(d.title)}</h1><p class="intro">${text(d.intro)}</p><a class="button" href="short-term.html">${esc(d.button_label)} →</a></div>${img(d.hero_image,d.hero_alt)}</div></section><section class="section"><div class="wrap"><div class="section-head"><h2>${esc(d.section_title)}</h2><p class="muted">${text(d.section_intro)}</p></div><div class="cards two"><a class="tile" href="short-term.html">${img('media/study.svg','短期留学')}<div class="tile-content"><h3>短期留学</h3><p>国別のプログラムを探す</p><span class="more">プログラム一覧を見る →</span></div></a><a class="tile" href="working-holiday.html">${img('media/work.svg','ワーキングホリデー')}<div class="tile-content"><h3>ワーキングホリデー</h3><p>国別の情報を探す</p><span class="more">プログラム一覧を見る →</span></div></a></div></div></section><section class="section tinted"><div class="wrap"><h2>発音講座</h2><p class="intro">基礎習得コースと月額コースの2つからお選びいただけます。</p><a class="button" href="pronunciation.html">2つの発音コースを見る →</a></div></section><section class="section"><div class="wrap"><h2>相談から始めませんか</h2><p class="intro">ご希望の国や時期が決まっていなくても、お気軽にご相談ください。</p><a class="button" href="contact.html">お問い合わせ →</a></div></section>`;}
async function about(){const d=await loadJson('data/pages/about.json');return head(d.title,d.intro)+`<section class="section"><div class="wrap split"><div><p class="eyebrow">ABOUT MIGs</p><h2>代表者について</h2><p>${text(d.business)}</p></div>${img(d.photo,d.photo_alt,'featured-photo')}</div></section><section class="section tinted"><div class="wrap"><div class="section-head"><h2>MIGsの特徴</h2></div><div class="cards">${(d.features||[]).map(x=>`<article class="feature"><h3>${esc(x.title)}</h3><p>${text(x.description)}</p></article>`).join('')}</div></div></section>`;}
async function category(cat){const key=cat==='short-term'?'short-term':'working-holiday';const d=await loadJson(`data/pages/${key}.json`);const programs=await loadCollection(key);return head(d.title,d.intro)+`<section class="section"><div class="wrap"><div class="section-head category-list-head"><p class="eyebrow">COUNTRY PROGRAMS</p><h2>国別プログラム</h2><p class="muted">国を選んで詳細をご確認ください。</p></div>${programs.length?`<div class="cards">${programs.map(p=>programCard(p,key)).join('')}</div>`:'<p class="empty">現在、公開中のプログラムはありません。</p>'}<p class="note">${text(d.notice)}</p></div></section>`;}
async function detail(){const query=new URLSearchParams(location.search);const cat=query.get('category');const slug=query.get('slug');if(!['short-term','working-holiday'].includes(cat)||!slug||!/^[a-z0-9-]+$/.test(slug))throw new Error('プログラムが指定されていません。');const programs=await loadCollection(cat);const d=programs.find(x=>x.slug===slug);if(!d)throw new Error('指定されたプログラムが見つかりません。');const catName=cat==='short-term'?'短期留学':'ワーキングホリデー';const field=cat==='short-term'?'duration':'eligibility';return head(d.name,d.subtitle)+`<section class="section"><div class="wrap"><p><a class="backlink" href="${cat}.html">← ${catName}一覧へ戻る</a></p><div class="detail-grid"><div>${img(d.photo,d.photo_alt||d.name,'detail-img')}</div><div><p class="eyebrow">${esc(catName)}</p><h2>${esc(d.name)}</h2><p>${text(d.description)}</p><dl class="facts"><div class="fact"><dt>${cat==='short-term'?'期間':'参加条件'}</dt><dd>${text(d[field])}</dd></div><div class="fact"><dt>料金</dt><dd>${text(d.price)}</dd></div></dl><a href="contact.html" class="button">このプログラムについて問い合わせる →</a></div></div>${d.notes?`<p class="note">${text(d.notes)}</p>`:''}</div></section>`;}
async function pronunciation(){
 const [d,basic,monthly]=await Promise.all([
   loadJson('data/pages/pronunciation.json'),
   loadJson('data/pages/pronunciation-basic.json'),
   loadJson('data/pages/pronunciation-monthly.json')
 ]);
 document.title=`${d.title||'発音講座'} | MIGs`;
 const courses=[{d:basic,id:'basic',label:'BASIC COURSE'},{d:monthly,id:'monthly',label:'MONTHLY COURSE'}];
 const cards=courses.map(({d:c,id,label})=>`<article class="pronunciation-card"><p class="eyebrow">${label}</p><h2>${esc(c.name)}</h2><p class="course-subtitle">${text(c.subtitle)}</p><p class="course-summary">${text(c.description)}</p><p class="course-duration"><strong>受講期間：</strong>${text(c.duration)}</p><a class="button" href="#course-${id}">コース詳細を見る →</a></article>`).join('');
 const details=courses.map(({d:c,id})=>`<section class="course-details" id="course-${id}" aria-labelledby="course-title-${id}"><p class="eyebrow">COURSE DETAILS</p><h2 id="course-title-${id}">${esc(c.name)}</h2><p>${text(c.description)}</p><dl class="facts"><div class="fact"><dt>受講期間</dt><dd>${text(c.duration)}</dd></div><div class="fact"><dt>対象者</dt><dd>${text(c.audience)}</dd></div><div class="fact"><dt>授業内容</dt><dd>${text(c.curriculum)}</dd></div><div class="fact"><dt>授業形式</dt><dd>${text(c.format)}</dd></div><div class="fact"><dt>料金</dt><dd>${text(c.price)}</dd></div></dl>${c.notes?`<p class="note">${text(c.notes)}</p>`:''}<a class="button" href="contact.html">このコースについて問い合わせる →</a><p><a href="#course-list" class="backlink">↑ コース一覧へ戻る</a></p></section>`).join('');
 return `<section class="pronunciation-top" id="course-list"><div class="wrap"><p class="eyebrow">PRONUNCIATION COURSES</p><h1>${esc(d.title||'2つの発音コース')}</h1><p class="pronunciation-intro">${text(d.intro)}</p><div class="pronunciation-grid">${cards}</div></div></section><section class="section pronunciation-detail-area"><div class="wrap">${details}${d.notice?`<p class="smallprint">${text(d.notice)}</p>`:''}</div></section>`;
}
async function contact(){
  const d=await loadJson('data/pages/contact.json');
  const email=String(d.email||'').trim();
  const emailReady=email&&!/example\.com$/i.test(email)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const line=safeUrl(d.line_url);
  const validLine=/^https:\/\//i.test(line);
  const endpoint=String(d.form_endpoint||'').trim();
  const validForm=/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+\/?$/.test(endpoint);
  const privacy=safeUrl(d.privacy_url);
  const validPrivacy=!!privacy && (!/^https?:/i.test(privacy)||/^https:\/\//i.test(privacy));
  const fields=validForm?`<form class="inquiry-form" method="POST" action="${esc(endpoint)}">
    <div class="form-field"><label for="inquiry-name">お名前 <span class="required">必須</span></label><input id="inquiry-name" type="text" name="name" autocomplete="name" maxlength="100" required></div>
    <div class="form-field"><label for="inquiry-email">メールアドレス <span class="required">必須</span></label><input id="inquiry-email" type="email" name="email" autocomplete="email" maxlength="254" required></div>
    <div class="form-field"><label for="inquiry-type">相談内容</label><select id="inquiry-type" name="category"><option value="短期留学">短期留学</option><option value="ワーキングホリデー">ワーキングホリデー</option><option value="発音講座">発音講座</option><option value="その他">その他</option></select></div>
    <div class="form-field"><label for="inquiry-message">ご質問・ご相談 <span class="required">必須</span></label><textarea id="inquiry-message" name="message" rows="6" maxlength="5000" required placeholder="希望の国、渡航時期、期間、ご質問など"></textarea></div>
    <div class="form-hidden" aria-hidden="true"><label>空欄にしてください <input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
    ${validPrivacy?`<p class="smallprint"><a href="${esc(privacy)}" target="_blank" rel="noopener noreferrer" class="text-link">プライバシーポリシー</a>をご確認ください。</p><label class="privacy-confirm"><input type="checkbox" required> プライバシーポリシーに同意する</label>`:'<p class="smallprint">個人情報の利用目的：お問い合わせへの回答・連絡のため。機微な個人情報やパスポート番号は入力しないでください。</p>'}
    <p id="inquiry-status" class="inquiry-status" role="status" aria-live="polite" hidden></p>
    <button type="submit" class="button send-button">メールで問い合わせを送信 →</button>
  </form>`:`<div class="setup-note"><strong>お問い合わせフォームは準備中です。</strong><p>管理者がPages CMSでFormspreeの送信先URLを設定すると、この場所にフォームが表示されます。</p></div>`;
  return head(d.title,d.intro)+`<section class="section"><div class="wrap contact-grid"><div><h2>無料相談・お問い合わせ</h2><p>${text(d.guidance)}</p>${img(d.photo,'お問い合わせのイメージ','featured-photo')}<p class="smallprint">送信時にフォームサービス（Formspree）へ入力内容が送られます。送信前に入力内容をご確認ください。</p></div><div class="contact-panel"><h2 class="contact-panel-title">お問い合わせフォーム</h2>${fields}<div class="contact-separator">または</div><h3>LINEで相談する</h3><p>LINE公式アカウントからもご相談いただけます。</p>${validLine?`<a class="button line-button" href="${esc(line)}" target="_blank" rel="noopener noreferrer">${esc(d.line_label||'LINEで問い合わせる')} →</a>`:'<p class="setup-note">LINE相談は準備中です。公式アカウントのURL設定後にボタンが表示されます。</p>'}${emailReady?`<div class="contact-email"><p class="label">メールアドレス</p><a class="text-link" href="mailto:${esc(email)}">${esc(email)}</a></div>`:''}${d.phone?`<p class="label">電話番号</p><p>${esc(d.phone)}</p>`:''}<p class="smallprint contact-availability">${text(d.availability)}</p></div></div></section>`;
}
async function thanks(){
  const d=await loadJson('data/pages/thanks.json');
  document.title=`${d.title||'お問い合わせありがとうございます'} | MIGs`;
  return `<section class="section thanks-section"><div class="wrap"><div class="thanks-panel"><div class="thanks-check" aria-hidden="true">✓</div><p class="eyebrow">THANK YOU FOR CONTACTING US</p><h1>${esc(d.title||'お問い合わせありがとうございます')}</h1><p class="thanks-lead">${text(d.message||'お問い合わせを受け付けました。\n内容を確認のうえ、担当者よりご連絡いたします。')}</p><div class="thanks-note">${text(d.notice||'※ ご返信までにお時間をいただく場合がございます。')}</div><a class="button" href="index.html">${esc(d.button_label||'トップページに戻る')} →</a></div></div></section>`;
}
function setupInquiryForm(){
  const form=document.querySelector('form.inquiry-form');
  if(!form)return;
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const button=form.querySelector('button[type="submit"]');
    const status=form.querySelector('#inquiry-status');
    const initialLabel=button.textContent;
    button.disabled=true;
    button.textContent='送信中…';
    status.hidden=true;
    try{
      const response=await fetch(form.action,{
        method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}
      });
      if(!response.ok){
        let message='送信できませんでした。入力内容をご確認のうえ、もう一度お試しください。';
        try{const result=await response.json();if(Array.isArray(result.errors)&&result.errors.length)message=result.errors.map(x=>x.message).filter(Boolean).join(' ');}catch(_){}
        throw new Error(message);
      }
      // Relative URL keeps working after changing the GitHub Pages domain or repository path.
      window.location.assign('thanks.html');
    }catch(error){
      status.textContent=error.message||'通信エラーが発生しました。時間をおいて再度お試しください。';
      status.hidden=false;
      status.classList.add('inquiry-error');
      button.disabled=false;
      button.textContent=initialLabel;
    }
  });
}
header();
(async()=>{try{root.innerHTML=await({index:home,about:about,'short-term':()=>category('short-term'),'working-holiday':()=>category('working-holiday'),contact:contact,thanks:thanks,pronunciation:pronunciation,program:detail}[page]||home)();setupInquiryForm();}catch(err){console.error(err);root.innerHTML=`<div class="wrap error"><h1>ページを表示できませんでした</h1><p>データの読み込みに失敗しました。GitHub Pagesで公開していること、必要なファイルがアップロードされていることをご確認ください。</p><p class="smallprint">${esc(err.message)}</p><p><a class="button" href="index.html">トップへ戻る</a></p></div>`;}})();
