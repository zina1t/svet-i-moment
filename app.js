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
];
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
   const img=document.createElement('img');img.src='photos/'+photo.id+'.webp';img.alt=photo.alt;img.width=photo.width;img.height=photo.height;img.loading='lazy';img.decoding='async';
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
 image.hidden=false;image.alt=photo.alt;image.src='photos/'+photo.id+'.webp';
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
image.addEventListener('error',()=>{image.hidden=true;document.querySelector('#image-error').hidden=false;});
const stage=document.querySelector('#lightbox-stage');
stage.addEventListener('pointerdown',event=>{startX=event.clientX;});
stage.addEventListener('pointerup',event=>{if(startX!==null&&Math.abs(event.clientX-startX)>65)step(event.clientX<startX?1:-1);startX=null;});
stage.addEventListener('pointercancel',()=>{startX=null;});
renderGallery();

