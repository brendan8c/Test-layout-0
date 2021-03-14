//#1grn Анимация при прокрутке страницы на JavaScript и CSS

let isScrolling = false;

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

let wrapbox1 = document.querySelector(".wrap-box1");
let wrapbox2 = document.querySelector(".wrap-box2");
let wrapbox3 = document.querySelector(".wrap-box3");
let wrapbox4 = document.querySelector(".wrap-box4");
let bgVideo = document.querySelector(".background-video");
let bgImage = document.querySelector(".background-img");

function scrolling() {

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox1)) {
        wrapbox1.classList.add("active");
        bgVideo.classList.add("opacity_1");
        bgVideo.classList.remove("opacity_0");
        bgImage.classList.add("opacity_1");
        bgImage.classList.remove("opacity_0");
    } else {
        wrapbox1.classList.remove("active");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.add("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.add("opacity_0");
    }

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox2)) {
        wrapbox2.classList.add("active");
        bgVideo.classList.add("opacity_2");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgImage.classList.add("opacity_2");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
    } else {
        wrapbox2.classList.remove("active");
        bgVideo.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_2");
    }

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox3)) {
        wrapbox3.classList.add("active");
        bgVideo.classList.add("opacity_3");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.remove("opacity_2");
        bgImage.classList.add("opacity_3");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_2");
    } else {
        wrapbox3.classList.remove("active");
        bgVideo.classList.remove("opacity_3");
        bgImage.classList.remove("opacity_3");
    }

    // Полностью видимые элементы
    if (isFullyVisible(wrapbox4)) {
        wrapbox4.classList.add("active");
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
        wrapbox4.classList.remove("active");
        bgVideo.classList.remove("opacity_4");
        bgImage.classList.remove("opacity_4");
    }

    // Частично видимые элементы (—=the_test=—)
    // if (isPartiallyVisible(wrapbox5)) {
    //     wrapbox5.classList.add("half-active");
    //     bgVideo.classList.add("opacity_H1");
    // } else {
    //     wrapbox5.classList.remove("half-active");
    //     bgVideo.classList.remove("opacity_H1");
    // }
}

// Определение частично видимых элементов, возвращает true или false
function isPartiallyVisible(el) {
    // Определение видимых элементов
    // Возвращает прямоугольник, который ограничивает видимую область значениями: относительно верха, низа страницы, левого и правого направлений, а также относительно левого верхнего угла браузера и его основных свойств (ширины и высоты окна).
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    // Свойство window.innerWidth возвращают ширину окна браузера
    // Свойство window.innerHeight возвращают высоту окна браузера
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

// Определение полностью видимых элементов, возвращает true или false
function isFullyVisible(el) {
    // Определение видимых элементов
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    // Возвращают высоту окна браузера
    return ((top >= 0) && (bottom <= window.innerHeight));
}


//#1grn ScrollBar 
(function($) {
    $(window).on("load", function() {
        $("#write").mCustomScrollbar({
            theme: "my-theme"
        });
    });
})(jQuery);

(function($) {
    $(window).on("load", function() {
        $("#textarea").mCustomScrollbar({
            theme: "my-theme"
        });
    });
})(jQuery);

// С выпадающим меню у выпадающего меню баги у этого плагина если включить кастомный скролл 
// (function($) {
//     $(window).on("load", function() {
//         $("#menu_scroll").mCustomScrollbar({
//             theme: "my-theme"
//         });
//     });
// })(jQuery);

// #1grn Обрабатывает событие кнопки открытия и закрытия формы
let btnBlur = document.querySelector(".background-btn--click");
let backCenter = document.querySelector(".background_center");
let btnCloseBlur = document.querySelector(".forma_blur");
btnBlur.addEventListener('click', function() {
    backCenter.style.zIndex = 3;
});
btnCloseBlur.addEventListener('click', function() {
    backCenter.style.zIndex = 2;
});

//#1grn Валидация форм. Паттерн разрешает все упомянутые сиволы, другие удалит.
document.querySelector('#form-name').addEventListener('input', function() {
    this.value = this.value
        .replace(/\d/gm, '')
        .replace(/ {2,}/, ' ')
        .replace(/^ {1,}/, '')
        .replace(/[^A-Za-zА-Яа-яЁё\s]/, '')
        .replace(/^([A-Za-zА-Яа-яЁё]+) ([A-Za-zА-Яа-яЁё]+)( {1}|)/gm, '$1 $2');
});

document.querySelector('#form-phone').addEventListener('input', function() {
    this.value = this.value
        .replace(/[^0-9]/, '')
});

//#1grn Валидация формы
let formName = document.getElementById("form-name");
let formPhone = document.getElementById("form-phone");
let formEmail = document.getElementById("form-email");
let signal1 = document.querySelector(".signal1");
let signal2 = document.querySelector(".signal2");
let signal3 = document.querySelector(".signal3");
let checkbox = document.querySelector(".checkbox");
let sendBtnForm = document.getElementById("send-btn-form");
// Можно использовать любое из этих выражений, резулютат один и тот-же. 
// sendBtnForm.setAttribute("disabled", true); // Изменяет значение существующего атрибута у выбранного элемента.
sendBtnForm.disabled = true; // Disabled отображает то, что кнопка является "Boolean" и отключена.

// Список паттернов 
let validation = {
    isEmailAddress: function(str) {
        let regexp = new RegExp(/(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}/);
        return regexp.test(str); // Сравниваем паттерн RegExp с полученным значением value из input'a, возвращает логическое значение "boolean" true или false.
    },
    isPhoneNumber: function(str) {
        let regexp = new RegExp(/8[0-9]{10}/);
        return regexp.test(str);
    },
    isNameUser: function(str) {
        let regexp = new RegExp(/^[A-Za-zА-Яа-яЁё\s]+$/);
        return regexp.test(str);
    }
};

// Создаём событие "onblur", когда элемент "input" теряет фокус.
// Событие focus вызывается в момент фокусировки, а blur – когда элемент теряет фокус.
// Так-же можно использовать "oninput" за место "onblur".
formEmail.onblur = function emailo() {
    let answer_Email = validation.isEmailAddress(formEmail.value); // Передаём значение input.value в паттерн для проверки и присваиваем переменную, для значения "boolean".
    if (answer_Email) { // Передаём в условие переменную которая принимает значения "boolean".
        // Если значение "boolean" = true
        formEmail.classList.remove('invalid');
        signal3.classList.remove('span-on');
        formEmail.classList.add('valid');
    } else {
        // Если значение "boolean" = false
        formEmail.classList.remove('valid');
        formEmail.classList.add('invalid');
        signal3.classList.add('span-on');
    };
};

formPhone.onblur = function() {
    let answer_Phone = validation.isPhoneNumber(formPhone.value);
    if (answer_Phone) {
        formPhone.classList.remove('invalid');
        signal2.classList.remove('span-on');
        formPhone.classList.add('valid');
    } else {
        formPhone.classList.remove('valid');
        formPhone.classList.add('invalid');
        signal2.classList.add('span-on');
    };
};

formName.onblur = function() {
    let answer_Name = validation.isNameUser(formName.value);
    if (answer_Name) {
        formName.classList.remove('invalid');
        signal1.classList.remove('span-on');
        formName.classList.add('valid');
    } else {
        formName.classList.remove('valid');
        formName.classList.add('invalid');
        signal1.classList.add('span-on');
    };
};


// Условия для кнопки. Если все input.value прошли валидацию.
// Событие input срабатывает каждый раз при изменении значения в поле.
// Создаём обработчики событий с событием "input" с ссылкой на функцию-обработчик "validate".
formName.addEventListener('input', validate);
formEmail.addEventListener('input', validate);
formPhone.addEventListener('input', validate);
checkbox.addEventListener('input', validate);

function validate() {
    // Передаём значение input.value каждой формы в паттерн для проверки и присваиваем переменную, для получения значения "boolean".
    let answer_Name = validation.isNameUser(formName.value);
    let answer_Email = validation.isEmailAddress(formEmail.value);
    let answer_Phone = validation.isPhoneNumber(formPhone.value);
    let answer_Checkbox = checkbox.checked; // Проверяем в каком состоянии checkbox. Checked имеет логическое значение "Boolean" true/false.

    if (answer_Name && answer_Email && answer_Phone && answer_Checkbox) {
        // Если значение "boolean" = true
        sendBtnForm.classList.add('valid-btn');
        sendBtnForm.disabled = false;
    } else {
        // Если значение "boolean" = false
        sendBtnForm.classList.remove('valid-btn');
        sendBtnForm.disabled = true;
    };
};


//#1grn Hamburger menu
let Hamburger = document.querySelector(".header__menu-btn"); // Кнопка
let headerWrap = document.querySelector(".header__wrap"); // Меню которое выезжает
let backHat = document.querySelector(".background-hat"); // Шапка сайта

// Событие клика по кнопке гамбургера
Hamburger.addEventListener("click", toggleMenu);
// Проверяем есть-ли в меню класс или нет 
headerWrap.classList.contains("hamburger_true");
backHat.classList.contains("background_hat-true");

// Включать и выключать меню при нажатии на гамбургер
function toggleMenu() {
    if (headerWrap.classList.contains("hamburger_true")) {
        headerWrap.classList.remove("hamburger_true");
        backHat.classList.remove("background_hat-true");
    } else {
        headerWrap.classList.add("hamburger_true");
        backHat.classList.add("background_hat-true");
    }
};

let hambTrue = document.querySelectorAll(".hamburger_true");

hambTrue.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleMenu);
    }
);