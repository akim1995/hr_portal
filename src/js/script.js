// TABS
class Tabs {
  initEvents(tabs) {
    this.tabs.forEach(el => {
      el.addEventListener("click", (e) => {
        this._changeTab(e);
      });
    });
  }
  _changeTab(e) {
    e.currentTarget.parentElement
      .querySelector(".active")
      .classList.remove("active");
    e.currentTarget.classList.add("active");
    this.activeTab = e.currentTarget;
    const number = e.currentTarget.getAttribute('data-tab');
    this._changeTabContent(number);
  }
  _changeTabContent(number) {
    Array.from(this.tabContentBlock.children).forEach((el, index) => {
      if (index == number) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  changeToTab(number) {
    this.activeTab.classList.remove("active");
    this.tabs[number].classList.add("active");
    this.activeTab = this.tabs[number];
    this._changeTabContent(number);

  }
  constructor() {
    this.tabs = document.querySelectorAll(
      ".block-with-square-tabs__tabs-container > *"
    );
    this.activeTab = this.tabs[0];
    this.initEvents();
    this.tabContentBlock = document.querySelector('.block-with-square-tabs__content-block');
  }
}

let tabs = new Tabs();

// HERO SLIDER
$(document).ready(function(){
  $('.hero-section').bxSlider({
    mode: 'fade',
    pager: false,
    controls: false,
    touchEnabled: false,
    auto: true,
    pause: 4000,
    preventDefaultX: true,
    wrapperClass: 'hero-section'
  });
});


// ANCHOR TAGS 
(function() {
  const tabsAnchor = document.getElementById('tabs');
  document.querySelectorAll('.header-top__navigation li a').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      let tabActive = e.currentTarget.parentElement.getAttribute('data-tab');
      tabs.changeToTab(tabActive);
      tabsAnchor.scrollIntoView({
        behavior: 'smooth'
      });
    })
  });
}())
