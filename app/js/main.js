//#1grn Анимация при прокрутке страницы на JavaScript и CSS

let isScrolling = false;

// События прокрутки
// Плагин Quokka.js видит тут ошибку. Решние (https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97)
window.addEventListener("scroll", throttleScroll, false);
// Обработчик событий вызываемый при скроле. Как только страница начинает прокручиваться, вызывается этот обработчик событий.
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
let wrapbox5 = document.querySelector(".wrap-box5");
let bgVideo = document.querySelector(".background-video");
let bgImage = document.querySelector(".background-img");

function scrolling() {

    // Если .wrap-box1 полностью видим тогда ****, если нет тогда ****.
    if (isFullyVisible(wrapbox1)) {
        wrapbox1.classList.add("active");
        bgVideo.classList.add("opacity_1");
        bgImage.classList.add("opacity_1");
        bgVideo.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_0");
    } else {
        wrapbox1.classList.remove("active");
        bgVideo.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_1");
        bgVideo.classList.add("opacity_0");
        bgImage.classList.add("opacity_0");
    };

    if (isFullyVisible(wrapbox2)) {
        wrapbox2.classList.add("active");
        bgVideo.classList.add("opacity_2");
        bgImage.classList.add("opacity_2");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
    } else {
        wrapbox2.classList.remove("active");
        bgVideo.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_2");
    };

    if (isFullyVisible(wrapbox3)) {
        wrapbox3.classList.add("active");
        bgVideo.classList.add("opacity_3");
        bgImage.classList.add("opacity_3");
        backHat.classList.add("background_hat-true-slide1");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_2");
    } else {
        wrapbox3.classList.remove("active");
        bgVideo.classList.remove("opacity_3");
        bgImage.classList.remove("opacity_3");
        backHat.classList.remove("background_hat-true-slide1");
    };

    if (isFullyVisible(wrapbox4)) {
        wrapbox4.classList.add("active");
        bgVideo.classList.add("opacity_4");
        bgImage.classList.add("opacity_4");
        backHat.classList.add("background_hat-true-slide2");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.remove("opacity_2");
        bgVideo.classList.remove("opacity_3");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_3");
        // Когда этот бокс виден удаляем классы которые задвали в wrapbox5
        // когда wrapbox5 остаётся один в поле видемости он применяет свои стили, а когда 
        // откатываем назад в поле видемости появляется этот wrapbox4 и отменяет стили wrapbox5
        bgVideo.classList.remove("opacity_5");
        bgImage.classList.remove("opacity_5");
        backHat.classList.remove("background_hat-true-slide3");
    } else {
        wrapbox4.classList.remove("active");
        bgVideo.classList.remove("opacity_4");
        bgImage.classList.remove("opacity_4");
        backHat.classList.remove("background_hat-true-slide2");
    };

    if (isFullyVisible(wrapbox5)) {
        wrapbox5.classList.add("active");
        bgVideo.classList.add("opacity_5");
        bgImage.classList.add("opacity_5");
        backHat.classList.add("background_hat-true-slide3");
        bgVideo.classList.remove("opacity_0");
        bgVideo.classList.remove("opacity_1");
        bgVideo.classList.remove("opacity_2");
        bgVideo.classList.remove("opacity_3");
        bgVideo.classList.remove("opacity_4");
        bgImage.classList.remove("opacity_0");
        bgImage.classList.remove("opacity_1");
        bgImage.classList.remove("opacity_2");
        bgImage.classList.remove("opacity_3");
        bgImage.classList.remove("opacity_4");
    } else {
        wrapbox5.classList.remove("active");
        // bgVideo.classList.remove("opacity_5");
        // bgImage.classList.remove("opacity_5");
        // backHat.classList.remove("background_hat-true-slide3");
    };

    // Частично видимые элементы (—=the_test=—)
    // if (isPartiallyVisible(wrapbox5)) {
    //     wrapbox5.classList.add("half-active");
    //     bgVideo.classList.add("opacity_H1");
    // } else {
    //     wrapbox5.classList.remove("half-active");
    //     bgVideo.classList.remove("opacity_H1");
    // };
};

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


// //#1grn ScrollBar 
document.addEventListener("DOMContentLoaded", function() {
    // Первый аргумент - это элементы, которыми должен быть инициализирован плагин
    // Второй аргумент должен быть как минимум пустым объектом или объектом с желаемыми параметрами.
    OverlayScrollbars(document.querySelectorAll('#write'), {});
});
document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll('#textarea'), {
        className: "custom-theme"
    });
});


// #1grn Обрабатывает событие кнопки открытия и закрытия формы
let btnBlur = document.querySelector(".background-btn--click"); // Кнопка открытия формы
let backCenter = document.querySelector(".background_center"); // Общий блок
let btnCloseBlur = document.querySelector(".forma_blur"); // Кнопка закрытия формы
let BlurClose = document.getElementById("modal"); // Форма серая область
let writeForm = document.getElementById("write"); // Форма 
let classModal = document.querySelector(".modal"); // Форма
let backgroundHat = document.querySelector(".background-hat");
let userScreen = document.body.clientWidth; // Ширина окна браузера.

btnBlur.addEventListener('click', open_form); // Открытие формы
btnCloseBlur.addEventListener('click', closed_form); // Закрытие формы
BlurClose.addEventListener('click', closed_form_blur); // Закрытие формы по серой области 

function open_form() {
    backCenter.style.zIndex = 3;
    btnBlur.style.zIndex = 0;
    document.body.style.overflowY = "hidden";
    classModal.classList.add("modal_open");
    // Если размер окна браузера меньше или равен 599px 
    if (userScreen <= 599) {
        backgroundHat.style.zIndex = 5;
        backgroundHat.style.backgroundColor = "rgba(255,255,255,0.9)";
        backHat.classList.add("background_hat-true-forma");
    }
};

function closed_form() {
    backCenter.style.zIndex = 2;
    btnBlur.style.zIndex = 1;
    document.body.style.overflowY = "auto";
    classModal.classList.remove("modal_open");
    if (userScreen <= 599) {
        backgroundHat.style.backgroundColor = "#00000000";
        backgroundHat.style.zIndex = 3;
        backHat.classList.remove("background_hat-true-forma");
    }
};

function closed_form_blur(e) {
    if (backCenter.style.zIndex = 3 && e.target != writeForm && !writeForm.contains(e.target)) {
        backCenter.style.zIndex = 2;
        btnBlur.style.zIndex = 1;
        document.body.style.overflowY = "auto";
        classModal.classList.remove("modal_open");
        if (userScreen <= 599) {
            backgroundHat.style.backgroundColor = "#00000000";
            backgroundHat.style.zIndex = 3;
            backHat.classList.remove("background_hat-true-forma");
        }
    }
};



// function closed_form_blur(e) {
//     if (backCenter.style.zIndex = 3 && e.target != writeForm && !writeForm.contains(e.target)) {
//         window.location.replace("#");
//         backCenter.style.zIndex = 2;
//         btnBlur.style.zIndex = 1;
//         document.body.style.overflowY = "auto";
//         classModal.classList.remove("modal_open");
//     }
// };
// Использую (e) в качестве имени параметра функции.
// Проверяем открыта наша форма или нет. Если форма открыта у класса ".background_center" z-index = 3. 
// Если событие клика произошло не на форме "writeForm" и не на вложенности формы тогда true
// Метод replace () заменяет текущий документ новым. https://www.w3schools.com/jsref/met_loc_replace.asp
// "element.target" это исходный элемент, на котором произошло событие.


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
let validName = document.getElementById("valid_name");
let validPhone = document.getElementById("valid_phone");
let validEmail = document.getElementById("valid_email");
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
        validEmail.classList.remove('invalid');
        signal3.classList.remove('span-on');
        validEmail.classList.add('valid');
    } else {
        // Если значение "boolean" = false
        validEmail.classList.remove('valid');
        validEmail.classList.add('invalid');
        signal3.classList.add('span-on');
    };
};

formPhone.onblur = function() {
    let answer_Phone = validation.isPhoneNumber(formPhone.value);
    if (answer_Phone) {
        validPhone.classList.remove('invalid');
        signal2.classList.remove('span-on');
        validPhone.classList.add('valid');
    } else {
        validPhone.classList.remove('valid');
        validPhone.classList.add('invalid');
        signal2.classList.add('span-on');
    };
};

formName.onblur = function() {
    let answer_Name = validation.isNameUser(formName.value);
    if (answer_Name) {
        validName.classList.remove('invalid');
        signal1.classList.remove('span-on');
        validName.classList.add('valid');
    } else {
        validName.classList.remove('valid');
        validName.classList.add('invalid');
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
    // contains вернёт true если .header__wrap содержит в себе hamburger_true
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


// document.documentElement.addEventListener('touchmove', function(event) {
//     if (event.scale !== 1) { event.preventDefault(); }
// }, false);

// Ссылаемся на DOM-объект для тега <html>, создаём событие движения точки касания и отменяем действия браузера по умолчанию.
// document.documentElement.addEventListener('touchmove', function(event) {
//     event.preventDefault();
// }, false);


// Обнаружение двойного нажатия на экран.
// document.getElementById("bgimtx").addEventListener("touchstart", tapHandler);

// var tapedTwice = false;

// function tapHandler(event) {
//     if (!tapedTwice) {
//         tapedTwice = true;
//         setTimeout(function() { tapedTwice = false; }, 300);
//         return false;
//     }
//     event.preventDefault();
//     // действие при двойном нажатии
//     // alert('Ты нажал мне дважды!!!');
// }

// Отменяем действия браузера по умолчанию 
document.documentElement.ontouchstart = function(e) {
    e.preventDefault();
}

// //#1grn Меню открывать и закрывать в мобильной версии
// let openMenu_1 = document.querySelector(".arrow-1");
// let openMenu_2 = document.querySelector(".arrow-2");
// let openMenu_3 = document.querySelector(".arrow-3");

// openMenu_1.addEventListener("click", openFormMobile);
// openMenu_2.addEventListener("click", openFormMobile);
// openMenu_3.addEventListener("click", openFormMobile);

// function openFormMobile() {
//     if (headerWrap.classList.contains("hamburger_true")) {
//         headerWrap.classList.remove("hamburger_true");
//         backHat.classList.remove("background_hat-true");
//     } else {
//         headerWrap.classList.add("hamburger_true");
//         backHat.classList.add("background_hat-true");
//     }
// };


// // Событие наступит когда загрузилась вся страница, включая стили, картинки и другие ресурсы.
// window.onload = function width(e) {
//     let screenWidth = window.screen.width;
//     console.log("Ширина экрана", screenWidth);
//     return screenWidth.width(e);
// };