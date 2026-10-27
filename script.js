const steps = [
 {title:"Жұмыс орнын дайындау", kicker:"1-КЕЗЕҢ · ДАЙЫНДЫҚ", desc:"Монтаж алдында жобалық сызбаны, датчиктің техникалық паспортын және өлшеу диапазонын тексер. Қажетті құралдарды дайында. Нақты өндірісте жабдық қауіпсіз ажыратылып, жұмысқа рұқсат берілуі керек.", tip:"Оқу симуляциясында қажетті құралдарды таңда. Нақты монтажды тек білікті маман орындайды.", choices:["Датчик","Қорғаныш гильзасы","Кабель","Мультиметр","Реттелетін кілт"], correct:["Датчик","Қорғаныш гильзасы","Кабель","Мультиметр","Реттелетін кілт"], mode:"multi", caption:"Құралдар мен материалдарды дайындау"},
 {title:"Датчик орнын таңдау", kicker:"2-КЕЗЕҢ · ОРНАЛАСУ", desc:"Датчик технологиялық ортаның температурасын дұрыс көрсететін, ағын жақсы араласатын және жергілікті қызу/салқындау әсері аз нүктеге орнатылады. Құбырдағы орынды жобалық сызбаға сәйкес таңда.", tip:"Датчикті құбырдың сыртқы бетіне ғана жапсыра салмайды: осы оқу үлгісінде ол арнайы штуцер арқылы орнатылады.", choices:["Жобада көрсетілген, ағынды дұрыс сипаттайтын нүкте","Құбырдың бояуы қалың, сыртқы беті","Кездейсоқ, қолжетімді кез келген жер"], correct:"Жобада көрсетілген, ағынды дұрыс сипаттайтын нүкте", mode:"single", caption:"Құбырдағы монтаж нүктесін таңдау"},
 {title:"Штуцер мен гильзаны орнату", kicker:"3-КЕЗЕҢ · МЕХАНИКАЛЫҚ МОНТАЖ", desc:"Қорғаныш гильзасы датчикті қысымдағы ортадан және ағынның механикалық әсерінен қорғайды. Гильза құбырға жобада қарастырылған штуцер арқылы орнатылады; қосылыстың беріктігі мен герметикалығы тексеріледі.", tip:"Гильза материалы, ұзындығы, қысым және температура шегі технологиялық ортаға сай таңдалуы керек.", choices:["Қорғаныш гильзасын таңдау","Гильзаны штуцерге орнату","Қосылыстың тығыздығын тексеру"], correct:["Қорғаныш гильзасын таңдау","Гильзаны штуцерге орнату","Қосылыстың тығыздығын тексеру"], mode:"multi", caption:"Штуцерге қорғаныш гильзасын орнату"},
 {title:"Температура датчигін бекіту", kicker:"4-КЕЗЕҢ · ДАТЧИКТІ ОРНАТУ", desc:"Таңдалған датчикті гильза ішіне орналастырып, бекіткішін өндіруші нұсқаулығына сай қатайтады. Өлшеу ұшы қажетті тереңдікке жетуі керек. Датчикті күштеп майыстыруға немесе кабелінен тартып енгізуге болмайды.", tip:"Терможұп пен PT100-дің сезгіш элементтері әртүрлі, бірақ екеуі де гильза арқылы қорғалып орнатыла алады.", choices:["Датчикті гильзаға енгізу","Өлшеу ұшын қажетті тереңдікке орналастыру","Бекіткішті тексеру"], correct:["Датчикті гильзаға енгізу","Өлшеу ұшын қажетті тереңдікке орналастыру","Бекіткішті тексеру"], mode:"multi", caption:"Датчикті қорғаныш гильзасына орналастыру"},
 {title:"Электр сымдарын жалғау", kicker:"5-КЕЗЕҢ · ЭЛЕКТРЛІК ҚОСЫЛУ", desc:"Датчик кабелін өлшеу құрылғысына немесе температура кірісі бар контроллерге жалғайды. PT100 үшін бұл үлгіде 3 сымды схема, ал терможұп үшін полярлықты сақтайтын арнайы терможұп кабелі қолданылады.", tip:"Сымдарды қосу нақты аспаптың схемасы мен өндіруші нұсқаулығына сәйкес орындалады. Бұл жерде тек виртуалды қосылу көрсетілген.", choices:["PT100: 3 сымды қосылу","Терможұп: полярлықты сақтау","Кез келген сымды кез келген клеммаға қосу"], correct:"type", mode:"type", caption:"Датчиктен басқару шкафына сигнал кабелі"},
 {title:"Мультиметрмен тексеру", kicker:"6-КЕЗЕҢ · БАҚЫЛАУ", desc:"Қосылыстарды визуалды тексеріп, датчик тізбегінің бүтіндігін өлшеу әдісімен бағалайды. PT100 үшін кедергі өлшенеді; терможұп үшін оның тізбегі және температураға байланысты милливольттік сигналы тексеріледі.", tip:"PT100 платина датчигінің номиналы 0 °C-та 100 Ω. Нақты мән температураға тәуелді. Терможұп сигналы түріне қарай өзгереді.", choices:["PT100 кедергісін өлшеу","Терможұп тізбегін/сигналын тексеру","Кедергіні өлшеу режимінде кернеулі тізбекті тексеру"], correct:"type", mode:"type", caption:"Өлшеу құралымен датчикті тексеру"},
 {title:"Жүйені іске қосу", kicker:"7-КЕЗЕҢ · СЫНАҚ", desc:"Барлық механикалық және электрлік тексерулер аяқталған соң жүйе бекітілген іске қосу тәртібімен сынақтан өтеді. Температура өзгергенде дисплейдегі көрсеткіш те өзгеруі керек.", tip:"Төмендегі температураны өзгертіп көр. Бұл тек бағдарламалық модель, нақты құрылғыны басқармайды.", choices:[], correct:"", mode:"run", caption:"Датчик → контроллер → температура дисплейі"}
];
let current=0, sensorType="pt100", completed=new Set(), score=100, runTemp=25;
const $=id=>document.getElementById(id);
function render(){
 const s=steps[current]; $("stepCount").textContent=`${current+1} / 7`; $("stepTitle").textContent=s.title; $("stepKicker").textContent=s.kicker; $("stepPill").textContent=String(current+1).padStart(2,"0"); $("stepDescription").textContent=s.desc; $("stepTip").textContent=s.tip; $("diagramCaption").textContent=s.caption;
 $("progressBar").style.width=`${(completed.size+(completed.has(current)?0:0))/7*100 || (current/7*100)}%`;
 $("backBtn").disabled=current===0; $("backBtn").style.opacity=current===0?".4":"1";
 $("nextBtn").textContent=current===6?"Нәтижені көру →":"Келесі кезең →"; $("nextBtn").disabled=!completed.has(current);
 $("feedback").textContent=""; $("feedback").className="feedback";
 $("diagram").className=`diagram stage-${current+1}`;
 renderNav(); renderActions();
}
function renderNav(){
 $("stepNav").innerHTML="";
 steps.forEach((s,i)=>{const b=document.createElement("button");b.className="step-link"+(i===current?" active":"")+(completed.has(i)?" done":"");b.innerHTML=`<span class="num">${completed.has(i)?"✓":String(i+1).padStart(2,"0")}</span><span>${s.title}</span>`;b.onclick=()=>{if(i<=current||completed.has(i-1)||i===0){current=i;render()}};$("stepNav").appendChild(b)});
}
function renderActions(){
 const s=steps[current], area=$("actionArea");area.innerHTML="";
 if(s.mode==="multi"){
   const selected=new Set();
   s.choices.forEach(c=>{const b=document.createElement("button");b.className="choice";b.textContent=c;b.onclick=()=>{b.classList.toggle("selected");selected.has(c)?selected.delete(c):selected.add(c)};area.appendChild(b)});
   const check=document.createElement("button");check.className="choice";check.textContent="Таңдауды тексеру";check.onclick=()=>{const ok=s.correct.every(x=>selected.has(x))&&selected.size===s.correct.length;if(ok)success();else fail("Барлық қажетті тармақты таңда. Бұл кезеңде көрсетілген құралдар/әрекеттердің бәрі қажет.");};area.appendChild(check);
 } else if(s.mode==="single"){
   s.choices.forEach(c=>{const b=document.createElement("button");b.className="choice";b.textContent=c;b.onclick=()=>{if(c===s.correct){b.classList.add("correct");success()}else{b.classList.add("wrong");fail("Бұл орын температураны дұрыс сипаттамауы мүмкін. Жобада көрсетілген және ағынды сипаттайтын нүктені таңда.")}};area.appendChild(b)});
 } else if(s.mode==="type"){
   const options=current===4?(sensorType==="pt100"?["PT100: 3 сымды қосылу","Терможұп: полярлықты сақтау"]:["Терможұп: полярлықты сақтау","PT100: 3 сымды қосылу"]):(sensorType==="pt100"?["PT100 кедергісін өлшеу","Терможұп тізбегін/сигналын тексеру"]:["Терможұп тізбегін/сигналын тексеру","PT100 кедергісін өлшеу"]);
   options.forEach(c=>{const b=document.createElement("button");b.className="choice";b.textContent=c;b.onclick=()=>{if((current===4&&c.startsWith(sensorType==="pt100"?"PT100":"Терможұп"))||(current===5&&c.startsWith(sensorType==="pt100"?"PT100":"Терможұп"))){b.classList.add("correct");success()}else{b.classList.add("wrong");fail("Таңдалған датчик түріне сәйкес қосылу немесе тексеру тәсілін таңда.")}};area.appendChild(b)});
 } else if(s.mode==="run"){
   const label=document.createElement("label");label.className="temp-control";label.innerHTML=`<span>Құбыр температурасы: <b id="tempValue">${runTemp} °C</b></span><input id="tempSlider" type="range" min="0" max="150" value="${runTemp}">`;
   area.appendChild(label);$("tempSlider").oninput=e=>{runTemp=+e.target.value;$("tempValue").textContent=runTemp+" °C";$("temperatureDisplay").textContent=runTemp+" °C";};
   const display=document.createElement("div");display.className="temperature-display";display.innerHTML=`<span>ӨЛШЕНГЕН ТЕМПЕРАТУРА</span><strong id="temperatureDisplay">${runTemp} °C</strong><small>${sensorType==="pt100"?"PT100 · кедергілік датчик":"Терможұп · термоэлектрлік датчик"}</small>`;area.appendChild(display);
   const b=document.createElement("button");b.className="choice correct";b.textContent="Сынақты аяқтау";b.onclick=()=>success();area.appendChild(b);
 }
}
function success(){completed.add(current);$("feedback").className="feedback";$("feedback").textContent="✓ Дұрыс! Кезең сәтті орындалды.";renderNav();$("progressBar").style.width=`${completed.size/7*100}%`;$("nextBtn").disabled=false;}
function fail(msg){score=Math.max(50,score-5);$("feedback").className="feedback error";$("feedback").textContent="✕ "+msg;}
$("nextBtn").onclick=()=>{if(!completed.has(current))return;if(current<6){current++;render()}else{ $("resultPanel").classList.remove("hidden");$("resultText").textContent=`Сен ${sensorType==="pt100"?"PT100 кедергілік термометрін":"термоэлектрлік терможұпты"} монтаждау симуляциясының 7 кезеңін аяқтадың. Бұл нәтиже оқу тапсырмасының орындалуын көрсетеді.`;$("score").textContent=score;$("resultPanel").scrollIntoView({behavior:"smooth"})}};
$("backBtn").onclick=()=>{if(current>0){current--;render()}};
$("restartBtn").onclick=()=>{current=0;completed.clear();score=100;runTemp=25;$("resultPanel").classList.add("hidden");render();window.scrollTo({top:0,behavior:"smooth"})};
document.querySelectorAll(".type-btn").forEach(b=>b.onclick=()=>{sensorType=b.dataset.type;document.querySelectorAll(".type-btn").forEach(x=>x.classList.toggle("active",x===b));current=0;completed.clear();score=100;$("resultPanel").classList.add("hidden");render()});
render();
