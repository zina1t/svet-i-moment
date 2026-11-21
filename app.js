'use strict';
const photos = [
{id:'studio-1',category:'portrait',title:'Тихий диалог',series:'Студийный портрет',alt:'Портрет девушки в светлом свитшоте на тёмном фоне',width:1365,height:2048},
{id:'outdoor-2',category:'portrait',title:'Тёплый свет',series:'На прогулке',alt:'Портрет девушки в золотистом вечернем свете среди деревьев',width:2048,height:1365},
{id:'travel-4',category:'travel',title:'Открытый горизонт',series:'Путешествия',alt:'Горы и водоём под облачным небом',width:2048,height:1638},
{id:'studio-3',category:'portrait',title:'Между светом и тенью',series:'Студийный портрет',alt:'Силуэт девушки с тонкой линией контрового света',width:1365,height:2048},
{id:'details-4',category:'details',title:'Свет на стене',series:'Наблюдения',alt:'Деревянный стул и его тень у светлой стены',width:1365,height:2048},
{id:'outdoor-4',category:'portrait',title:'Вечерний город',series:'На прогулке',alt:'Портрет девушки на фоне города в сумерках',width:1365,height:2048},
{id:'reportage-2',category:'reportage',title:'По ту сторону кадра',series:'Репортаж',alt:'Участник мероприятия фотографирует на камеру',width:2048,height:1365},
{id:'travel-2',category:'travel',title:'Дорога к горам',series:'Путешествия',alt:'Автомобиль на каменистом берегу на фоне гор',width:2048,height:1638},
{id:'studio-2',category:'portrait',title:'Без лишних слов',series:'Студийный портрет',alt:'Студийный портрет девушки с рукой у лица',width:2048,height:1365},
{id:'details-1',category:'details',title:'Внимательный сосед',series:'Наблюдения',alt:'Пушистый кот среди осенних ветвей и листьев',width:1757,height:2048},
{id:'outdoor-1',category:'portrait',title:'Навстречу солнцу',series:'На прогулке',alt:'Девушка со спины в парке, освещённом закатным солнцем',width:2048,height:1365},
{id:'travel-5',category:'travel',title:'Париж, взгляд вверх',series:'Путешествия',alt:'Эйфелева башня в обрамлении зелёных ветвей',width:1536,height:2048},
{id:'studio-4',category:'portrait',title:'Линия света',series:'Студийный портрет',alt:'Крупный портрет девушки рядом со студийным источником света',width:1365,height:2048},
{id:'details-3',category:'details',title:'Конец сезона',series:'Наблюдения',alt:'Сухие растения на поле под пасмурным небом',width:2048,height:1365},
{id:'travel-3',category:'travel',title:'У кромки воды',series:'Путешествия',alt:'Каменистый берег озера и горы вдали',width:2048,height:1365},
{id:'outdoor-3',category:'portrait',title:'После заката',series:'На прогулке',alt:'Портрет девушки у дороги на фоне вечернего неба',width:2048,height:1365},
{id:'reportage-1',category:'reportage',title:'История в истории',series:'Репортаж',alt:'Съёмка выступления на экран смартфона',width:1365,height:2048},
{id:'studio-5',category:'portrait',title:'Характер света',series:'Студийный портрет',alt:'Студийный портрет с выразительным боковым освещением',width:1365,height:2048},
{id:'details-2',category:'details',title:'Время берёт своё',series:'Наблюдения',alt:'Старый голубой микроавтобус, оплетённый растениями',width:1365,height:2048},
{id:'travel-1',category:'travel',title:'Масштаб тишины',series:'Путешествия',alt:'Люди на берегу у подножия гор в лёгкой дымке',width:2048,height:1638}
,{"id":"travel-6","category":"travel","title":"Небо в движении","series":"Путешествия","alt":"Объёмные белые облака на голубом небе","width":3904,"height":4880},
{"id":"travel-7","category":"travel","title":"Облачный день","series":"Путешествия","alt":"Облака в мягком дневном свете","width":3190,"height":4785},
{"id":"details-5","category":"details","title":"Красный акцент","series":"Наблюдения","alt":"Красная банка среди травы рядом с тёмной опорой","width":4000,"height":6000},
{"id":"details-6","category":"details","title":"Графика ветвей","series":"Наблюдения","alt":"Силуэт дерева и ветвей на фоне пасмурного неба","width":2947,"height":4421}
,{"id":"travel-8","category":"travel","title":"Взгляд в пути","series":"Путешествия","alt":"Фотография из путешествия","width":3,"height":4}
];

const photoFiles={"travel-8":"IMG_9697.HEIC","studio-1":"15ba773c-e332-46ca-af46-e56ff09ade60.jpg","studio-2":"7e934f2b-0542-4541-a3f8-678bbcd870cf.jpg","studio-3":"aeeecc51-5ab7-4cda-b746-bb72b631d849.jpg","studio-4":"2aa291cc-c0bf-4c44-8e57-316ed279244c.jpg","studio-5":"fcfc142b-eed1-4431-a0bc-fb5826d39c80.jpg","reportage-1":"7cb51737-c4c0-47f9-a857-e4172e43145a.jpg","reportage-2":"a3e88845-12a7-48ec-b6c2-f6e4e76e3b6f.jpg","outdoor-1":"13cd282d-d906-4888-82ea-427b73062479.jpg","outdoor-2":"a0e81ea7-4e9d-42a1-83e0-8c6da7f98172.jpg","outdoor-3":"312d707e-b5a2-4e06-a89a-be90abfe6042.jpg","outdoor-4":"34bbc743-fe3b-450a-8aaa-cabc3e47108e.jpg","travel-5":"948ddd98-8576-4af0-ac92-747473ae0caa.jpg","details-1":"58a0bad6-82b9-40b5-a624-b92c355a76fb.jpg","details-2":"66d742bd-3caf-4fc4-b89d-e1819acb5e93.jpg","details-3":"4246f7ec-7d18-4103-bc31-57d62cb981d5.jpg","details-4":"0d0d3755-aa12-43e9-bef8-5d1cf590ac90.jpg","travel-1":"e52d1ce3-23fb-4f92-bb98-9dc4faceff36.jpg","travel-2":"70506930-a6ff-460e-b957-9536d94bacd6.jpg","travel-3":"ff46e2ef-a7fe-4ddc-a8e3-a97d48a3c2ae.jpg","travel-4":"4bd809b6-501e-478e-b1e6-d587b76a83e3.jpg","travel-6":"IMG_3649.jpg","travel-7":"IMG_3946.jpg","details-5":"IMG_4325.jpg","details-6":"IMG_4424.jpg"};

let heicLibrary;
const convertedPhotos=new Map();
function convertHeic(url){
 if(!heicLibrary)heicLibrary=new Promise((resolve,reject)=>{
   const script=document.createElement('script');
   script.src='https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js';
   script.onload=resolve;script.onerror=()=>reject(new Error('HEIC decoder unavailable'));
   document.head.append(script);
 });
 if(!convertedPhotos.has(url))convertedPhotos.set(url,heicLibrary.then(async()=>{
   const response=await fetch(url);if(!response.ok)throw new Error('Photo unavailable');
   const converted=await heic2any({blob:await response.blob(),toType:'image/jpeg',quality:0.92});
   return URL.createObjectURL(Array.isArray(converted)?converted[0]:converted);
 }));
 return convertedPhotos.get(url);
}
function setPhotoSource(element,id){
 const filename=photoFiles[id];
 element.dataset.photoId=id;
 const failed=()=>{if(element===image){element.hidden=true;document.querySelector('#image-error').hidden=false;}};
 element.onerror=failed;
 element.onload=()=>{element.width=element.naturalWidth;element.height=element.naturalHeight;};
 const url='photos/'+encodeURIComponent(filename);
 if(/\.heic$/i.test(filename)){
   element.removeAttribute('src');
   convertHeic(url).then(src=>{if(element.dataset.photoId===id)element.src=src;}).catch(()=>{if(element.dataset.photoId===id)failed();});
 }else element.src=url;
}

const labels={all:'Все работы',portrait:'Портреты',reportage:'Репортаж',travel:'Путешествия',details:'Наблюдения'};
const gallery=document.querySelector('#gallery');
const dialog=document.querySelector('#lightbox');
const image=document.querySelector('#lightbox-image');
let currentFilter='all';
let activePhotos=photos;
let currentIndex=0;
let startX=null;
let lastTrigger=null;
function renderGallery(){
 activePhotos=currentFilter==='all'?photos:photos.filter(p=>p.category===currentFilter);
 const fragment=document.createDocumentFragment();
 activePhotos.forEach(photo=>{
   const figure=document.createElement('figure');figure.className='photo-card';
   const button=document.createElement('button');button.type='button';button.className='photo-button';
   button.setAttribute('aria-label','Открыть фотографию «'+photo.title+'»');
   button.dataset.open=photo.id;
   const img=document.createElement('img');setPhotoSource(img,photo.id);img.alt=photo.alt;img.width=photo.width;img.height=photo.height;img.loading='lazy';img.decoding='async';
   button.append(img);
   const caption=document.createElement('figcaption');
   const title=document.createElement('span');title.textContent=photo.title;title.className='photo-title';
   const series=document.createElement('span');series.textContent=photo.series;
   caption.append(title,series);figure.append(button,caption);fragment.append(figure);
 });
 gallery.replaceChildren(fragment);
 document.querySelector('#gallery-status').textContent=labels[currentFilter]+'. Фотографий: '+activePhotos.length+'.';
}
function showPhoto(){
 const photo=activePhotos[currentIndex];
 document.querySelector('#image-error').hidden=true;
 image.hidden=false;image.alt=photo.alt;setPhotoSource(image,photo.id);
 document.querySelector('#lightbox-title').textContent=photo.title;
 document.querySelector('#lightbox-category').textContent=photo.series;
 document.querySelector('#lightbox-counter').textContent=(currentIndex+1)+' / '+activePhotos.length;
}
function openPhoto(id,trigger){
 const selected=photos.find(p=>p.id===id);if(!selected)return;
 if(!activePhotos.includes(selected)){activePhotos=photos;}
 currentIndex=activePhotos.indexOf(selected);lastTrigger=trigger;showPhoto();dialog.showModal();
 document.querySelector('#close-lightbox').focus();
}
function closePhoto(){dialog.close();lastTrigger?.focus({preventScroll:true});activePhotos=currentFilter==='all'?photos:photos.filter(p=>p.category===currentFilter);}
function step(direction){currentIndex=(currentIndex+direction+activePhotos.length)%activePhotos.length;showPhoto();}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 currentFilter=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 renderGallery();
}));
document.addEventListener('click',event=>{const button=event.target.closest('[data-open]');if(button)openPhoto(button.dataset.open,button);});
document.querySelector('#close-lightbox').addEventListener('click',closePhoto);
document.querySelector('#previous-photo').addEventListener('click',()=>step(-1));
document.querySelector('#next-photo').addEventListener('click',()=>step(1));
dialog.addEventListener('cancel',event=>{event.preventDefault();closePhoto();});
dialog.addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'){event.preventDefault();step(-1);}
 if(event.key==='ArrowRight'){event.preventDefault();step(1);}
});

const stage=document.querySelector('#lightbox-stage');
stage.addEventListener('pointerdown',event=>{startX=event.clientX;});
stage.addEventListener('pointerup',event=>{if(startX!==null&&Math.abs(event.clientX-startX)>65)step(event.clientX<startX?1:-1);startX=null;});
stage.addEventListener('pointercancel',()=>{startX=null;});
document.querySelectorAll('img[data-photo]').forEach(img=>setPhotoSource(img,img.dataset.photo));
renderGallery();

