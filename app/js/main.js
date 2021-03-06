//#1grn Анимация при прокрутке страницы на JavaScript и CSS

var isScrolling = false;

// События прокрутки
window.addEventListener("scroll", throttleScroll, false);

// Обработчик событий вызываемый при сроле. Как только страница начинает прокручиваться, вызывается этот обработчик событий.
function throttleScroll(e) {
    if (isScrolling == false) {
        // Определяем задержку реакции браузера на обработку того или иного события привяжем данные параметры к частоте обновления кадров страницы. 
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var wrapbox3 = document.querySelector(".wrap-box3");
var wrapbox4 = document.querySelector(".wrap-box4");
var wrapbox5 = document.querySelector(".wrap-box5");
var wrapbox6 = document.querySelector(".wrap-box6");
var bgVideo = document.querySelector(".background-video");
var bgImage = document.querySelector(".background-img");

function scrolling() {

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox3)) {
        wrapbox3.classList.add("active");
        bgVideo.classList.add("opacity_1");
        bgVideo.classList.remove("opacity_0");
        bgImage.classList.add("opacity_1");
        bgImage.classList.remove("opacity_0");
    } else {
        wrapbox3.classList.remove("active");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.add("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.add("opacity_0");
    }

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox4)) {
        wrapbox4.classList.add("active");
        bgVideo.classList.add("opacity_2");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgImage.classList.add("opacity_2");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
    } else {
        wrapbox4.classList.remove("active");
        bgVideo.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_2");
    }

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox5)) {
        wrapbox5.classList.add("active");
        bgVideo.classList.add("opacity_3");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.remove("opacity_2");
        bgImage.classList.add("opacity_3");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_2");
    } else {
        wrapbox5.classList.remove("active");
        bgVideo.classList.remove("opacity_3");
        bgImage.classList.remove("opacity_3");
    }

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox6)) {
        wrapbox6.classList.add("active");
        bgVideo.classList.add("opacity_4");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.remove("opacity_2");
        bgVideo.classList.remove("opacity_3");
        bgImage.classList.add("opacity_4");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_3");
    } else {
        wrapbox6.classList.remove("active");
        bgVideo.classList.remove("opacity_4");
        bgImage.classList.remove("opacity_4");
    }

    // Частично видимые элементы
    // if (isPartiallyVisible(wrapbox4)) {
    //     wrapbox4.classList.add("half-active");
    //     bgVideo.classList.add("opacity_H1");
    // } else {
    //     wrapbox4.classList.remove("half-active");
    //     bgVideo.classList.remove("opacity_H1");
    // }
}

// Определение частично видимых элементов, возвращает true или false
function isPartiallyVisible(el) {
    // Определение видимых элементов
    // Возвращает прямоугольник, который ограничивает видимую область значениями: относительно верха, низа страницы, левого и правого направлений, а также относительно левого верхнего угла браузера и его основных свойств (ширины и высоты окна).
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    // Свойство window.innerWidth возвращают ширину окна браузера
    // Свойство window.innerHeight возвращают высоту окна браузера
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

// Определение полностью видимых элементов, возвращает true или false
function isFullyVisible(el) {
    // Определение видимых элементов
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    // Возвращают высоту окна браузера
    return ((top >= 0) && (bottom <= window.innerHeight));
}


// //#1grn Раскрытие меню
// function collapseSection(element) {
//     // Получаем высоту внутреннего содержимого элемента, независимо от его фактического размера
//     var sectionHeight = element.scrollHeight;

//     // Временно отключаем все переходы css
//     var elementTransition = element.style.transition;
//     element.style.transition = '';

//     // В следующем кадре (как только предыдущее изменение стиля вступило в силу),
//     // явно устанавливаем высоту элемента равной его текущей высоте в пикселях, поэтому мы
//     // не переходим из "авто"
//     requestAnimationFrame(function() {
//         element.style.height = sectionHeight + 'px';
//         element.style.transition = elementTransition;

//         // В следующем кадре (как только предыдущее изменение стиля вступило в силу),
//         // есть переход элемента на высоту: 0
//         requestAnimationFrame(function() {
//             element.style.height = 0 + 'px';
//         });
//     });

//     // Помечаем раздел как «свернутый в настоящий момент»
//     element.setAttribute('data-collapsed', 'true');
// }

// function expandSection(element) {
//     // Получаем высоту внутреннего содержимого элемента, независимо от его фактического размера
//     var sectionHeight = element.scrollHeight;

//     // Получаем переход элемента на высоту его внутреннего содержимого
//     element.style.height = sectionHeight + 'px';

//     // Когда завершится следующий переход css (который должен быть тот, который мы только что запустили)
//     element.addEventListener('transitionend', function(e) {
//         // Удаляем этот прослушиватель событий, чтобы он запускался только один раз
//         element.removeEventListener('transitionend', arguments.callee);

//         // Удаляем "высоту" из встроенных стилей элемента, чтобы он мог вернуться к своему начальному значению
//         element.style.height = null;
//     });

//     // Помечаем раздел как «в настоящее время не свернутый»
//     element.setAttribute('data-collapsed', 'false');
// }

// // Производить действие при наведении мышки 
// document.querySelector('.menu-box').addEventListener('mouseover', function(e) {
//     var section = document.querySelector('.menu_categor');
//     var isCollapsed = section.getAttribute('data-collapsed') === 'true';

//     if (isCollapsed) {
//         expandSection(section)
//         section.setAttribute('data-collapsed', 'false')
//     } else {
//         collapseSection(section)
//     }
// });