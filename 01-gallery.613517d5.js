!function(){var o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];console.log(o);var t=document.querySelector(".js-gallery");t.innerHTML="",t.insertAdjacentHTML("beforeend",o.map((function(o){var t=o.preview,a=o.original,e=o.description;return'\n      <div class="gallery__item">\n        <a href="'.concat(a,'" class="gallery__link">\n        <img\n          class="gallery__image"\n          src=').concat(t,"        \n          data-source= ").concat(a,"        \n          alt=").concat(e,"\n        />\n        </a> \n      </div>")})).join("")),t.addEventListener("click",(function(o){if(o.preventDefault(),"IMG"!==o.target.nodeName)return;var t=basicLightbox.create('\n        <img src="'.concat(o.target.dataset.source,'" width="1280" height="auto" alt=').concat(o.target.alt," >\n    "),{onClose:function(){document.removeEventListener("keydown",a)}});function a(o){"Escape"===o.code&&(t.close(),document.removeEventListener("keydown",a))}t.show(),document.addEventListener("keydown",a)}))}();
//# sourceMappingURL=01-gallery.613517d5.js.map
