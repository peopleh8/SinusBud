import * as flsFunctions from './modules/functions.js';
import AllahModal from './modules/modal.js'
// import setMask from './modules/mask.js';
// import formValidate from './modules/validation.js';
// import * as Map from './modules/map/initMap.js';
import { introSlider, projectsSlider } from './modules/sliders.js';

flsFunctions.isWebp();

window.addEventListener('resize', () => {
  flsFunctions.calculateMobileHeight();
});

const tabPanelItems = document.querySelectorAll('.services-tab-panel__item-inner'),
      tabPanel = document.querySelector('.services-tab-panel'),
      tabBody = document.querySelector('.services-tab-body')

tabPanelItems.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    let target = e.currentTarget,
        targetPanelId = target.dataset.tabPanelItem,
        bodyItem = document.querySelector('.services-tab-body__item[data-tab-body-item='+ targetPanelId + ']');

    tabPanel.querySelector('.services-tab-panel__item-inner.active').classList.remove('active');
    target.classList.add('active');

    flsFunctions.fadeOut(tabBody.querySelector('.services-tab-body__item.active'), 0);
    flsFunctions.fadeIn(bodyItem, 300);
    tabBody.querySelector('.services-tab-body__item.active').classList.remove('active');
    bodyItem.classList.add('active');
  });
});