"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TABS
var Tabs =
/*#__PURE__*/
function () {
  _createClass(Tabs, [{
    key: "initEvents",
    value: function initEvents(tabs) {
      var _this = this;

      this.tabs.forEach(function (el) {
        el.addEventListener("click", function (e) {
          _this._changeTab(e);
        });
      });
    }
  }, {
    key: "_changeTab",
    value: function _changeTab(e) {
      e.currentTarget.parentElement.querySelector(".active").classList.remove("active");
      e.currentTarget.classList.add("active");
      this.activeTab = e.currentTarget;
      var number = e.currentTarget.getAttribute('data-tab');

      this._changeTabContent(number);
    }
  }, {
    key: "_changeTabContent",
    value: function _changeTabContent(number) {
      Array.from(this.tabContentBlock.children).forEach(function (el, index) {
        if (index == number) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
  }, {
    key: "changeToTab",
    value: function changeToTab(number) {
      this.activeTab.classList.remove("active");
      this.tabs[number].classList.add("active");
      this.activeTab = this.tabs[number];

      this._changeTabContent(number);
    }
  }]);

  function Tabs() {
    _classCallCheck(this, Tabs);

    this.tabs = document.querySelectorAll(".block-with-square-tabs__tabs-container > *");
    this.activeTab = this.tabs[0];
    this.initEvents();
    this.tabContentBlock = document.querySelector('.block-with-square-tabs__content-block');
  }

  return Tabs;
}();

var tabs = new Tabs(); // HERO SLIDER

$(document).ready(function () {
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
}); // ANCHOR TAGS 

(function () {
  var tabsAnchor = document.getElementById('tabs');
  document.querySelectorAll('.header-top__navigation li a').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var tabActive = e.currentTarget.parentElement.getAttribute('data-tab');
      tabs.changeToTab(tabActive);
      tabsAnchor.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJUYWJzIiwidGFicyIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiX2NoYW5nZVRhYiIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFjdGl2ZVRhYiIsIm51bWJlciIsImdldEF0dHJpYnV0ZSIsIl9jaGFuZ2VUYWJDb250ZW50IiwiQXJyYXkiLCJmcm9tIiwidGFiQ29udGVudEJsb2NrIiwiY2hpbGRyZW4iLCJpbmRleCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluaXRFdmVudHMiLCIkIiwicmVhZHkiLCJieFNsaWRlciIsIm1vZGUiLCJwYWdlciIsImNvbnRyb2xzIiwidG91Y2hFbmFibGVkIiwiYXV0byIsInBhdXNlIiwicHJldmVudERlZmF1bHRYIiwid3JhcHBlckNsYXNzIiwidGFic0FuY2hvciIsImdldEVsZW1lbnRCeUlkIiwicHJldmVudERlZmF1bHQiLCJ0YWJBY3RpdmUiLCJjaGFuZ2VUb1RhYiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFDTUEsSTs7Ozs7K0JBQ09DLEksRUFBTTtBQUFBOztBQUNmLFdBQUtBLElBQUwsQ0FBVUMsT0FBVixDQUFrQixVQUFBQyxFQUFFLEVBQUk7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDLFVBQUEsS0FBSSxDQUFDQyxVQUFMLENBQWdCRCxDQUFoQjtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0Q7OzsrQkFDVUEsQyxFQUFHO0FBQ1pBLE1BQUFBLENBQUMsQ0FBQ0UsYUFBRixDQUFnQkMsYUFBaEIsQ0FDR0MsYUFESCxDQUNpQixTQURqQixFQUVHQyxTQUZILENBRWFDLE1BRmIsQ0FFb0IsUUFGcEI7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InNvdXJjZXNDb250ZW50IjpbIi8vIFRBQlNcbmNsYXNzIFRhYnMge1xuICBpbml0RXZlbnRzKHRhYnMpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgdGhpcy5fY2hhbmdlVGFiKGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX2NoYW5nZVRhYihlKSB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKVxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5hY3RpdmVUYWIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgbnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKTtcbiAgICB0aGlzLl9jaGFuZ2VUYWJDb250ZW50KG51bWJlcik7XG4gIH1cbiAgX2NoYW5nZVRhYkNvbnRlbnQobnVtYmVyKSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLnRhYkNvbnRlbnRCbG9jay5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT0gbnVtYmVyKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlVG9UYWIobnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLnRhYnNbbnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuYWN0aXZlVGFiID0gdGhpcy50YWJzW251bWJlcl07XG4gICAgdGhpcy5fY2hhbmdlVGFiQ29udGVudChudW1iZXIpO1xuXG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmJsb2NrLXdpdGgtc3F1YXJlLXRhYnNfX3RhYnMtY29udGFpbmVyID4gKlwiXG4gICAgKTtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMudGFic1swXTtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB0aGlzLnRhYkNvbnRlbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay13aXRoLXNxdWFyZS10YWJzX19jb250ZW50LWJsb2NrJyk7XG4gIH1cbn1cblxubGV0IHRhYnMgPSBuZXcgVGFicygpO1xuXG4vLyBIRVJPIFNMSURFUlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgJCgnLmhlcm8tc2VjdGlvbicpLmJ4U2xpZGVyKHtcbiAgICBtb2RlOiAnZmFkZScsXG4gICAgcGFnZXI6IGZhbHNlLFxuICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICB0b3VjaEVuYWJsZWQ6IGZhbHNlLFxuICAgIGF1dG86IHRydWUsXG4gICAgcGF1c2U6IDQwMDAsXG4gICAgcHJldmVudERlZmF1bHRYOiB0cnVlLFxuICAgIHdyYXBwZXJDbGFzczogJ2hlcm8tc2VjdGlvbidcbiAgfSk7XG59KTtcblxuXG4vLyBBTkNIT1IgVEFHUyBcbihmdW5jdGlvbigpIHtcbiAgY29uc3QgdGFic0FuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItdG9wX19uYXZpZ2F0aW9uIGxpIGEnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCB0YWJBY3RpdmUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyk7XG4gICAgICB0YWJzLmNoYW5nZVRvVGFiKHRhYkFjdGl2ZSk7XG4gICAgICB0YWJzQW5jaG9yLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9KVxuICB9KTtcbn0oKSlcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
