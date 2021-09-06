window.onload = function () {//функция будет вызываться при загрузке окна
    var canvas = document.querySelector("canvas");//инициализирцем канвас с помощью jquery селектора
    var context = canvas.getContext("2d");//рисуем в 2д  
}


function circle() {//функция для отрисовки круга,  будет вызываться когда нажимаем на кнопку круг
    var element = document.querySelector('input[type=checkbox]');  
    var maxx = 1400;//максим координата по оси х
    var maxy = 500;//макс координата  по оси у
    var min=50;//минимальная координата для всех осей
    var cx = document.querySelector("canvas").getContext("2d");//получаем канвас
    cx.beginPath();//
    cx.lineWidth = 5; // толщина линии
    
    cx.fillStyle = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();//создание рандомного цвета
    //cx.arc(Math.random() * (maxx - min) + min, Math.random() * (maxy - min) + min, 45, 0, 2 * Math.PI);//рисуем круг, центр в рандомной точке
    //в диапазоне от минимального до макисмального заданные выше, радиус 45 , угол начала дуги = 0
    // if (element.checked) {
    //     cx.fill();//если нужно закрасить фигуру то примеянем fill
    // }
    //cx.stroke();//рисуем окружность


    if (element.checked) {
        cx.arc(Math.random() * (maxx - min) + min, Math.random() * (maxy - min) + min, 45, 0, 2 * Math.PI);//рисуем круг, центр в рандомной точке
        cx.fill();//если нужно закрасить фигуру то примеянем fill
        
    }else{
        cx.arc(Math.random() * (maxx - min) + min, Math.random() * (maxy - min) + min, 45, 0, 2 * Math.PI);//рисуем круг, центр в рандомной точке 
           
    }
    cx.stroke();//рисуем окружность

    // function getRadians(degrees) {
	// return (Math.PI / 180) * degrees;
    // }   
}

circle0.onclick = circle;//при клике на кнопочку будет вызываться функция отрисовки круга

function line() {//функция для отрисовки линии,  будет вызываться когда нажимаем на кнопку линия
    var maxx = 1400;//максим координата по оси х
    var maxy = 500;//макс координата  по оси у
    var min=50;//минимальная координата для всех осей
    var ctx = document.querySelector("canvas").getContext("2d");//получаем канвас
    ctx.beginPath();
    ctx.lineWidth = 5; // толщина линии
    ctx.moveTo(Math.random() * (maxx - min) + min, Math.random() * (maxy - min) + min); //передвигаем перо 
    //на рандомную точку из диапазона макс мин
    ctx.lineTo(Math.random() * (maxx - min) + min, Math.random() * (maxy - min) + min); //рисуем линию
    //до рандомной точки
    ctx.stroke();
}

line0.onclick = line;

function rectangle() {//отрисовка прямоугольника
    var element = document.querySelector('input[type=checkbox]');  
    var maxx = 1000;
    var maxy = 300;
    var min=180;
    var cx = document.querySelector("canvas").getContext("2d");
    cx.beginPath();
    cx.fillStyle = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();//создание рандомного цвета
    
    if (element.checked) {
        var x = Math.random() * (maxx - min) + min;
        var y = Math.random() * (maxy - min) + min;
        cx.strokeRect(x, y, 200, 100);//коорд начальной точки по х и по у ширина и высота
        cx.fillRect(x, y, 200, 100);//заполнение цветом если чекнута галочка
    }else{
        cx.strokeRect(Math.random() * (maxx - min) + min, Math.random() * (maxy - min) + min, 200, 100);//иначе без заливки
    }
}

rectangle0.onclick = rectangle;

clear0.onclick = function(){//кнопка очистки полотна
    var cx = document.querySelector("canvas").getContext("2d");
    cx.clearRect(0, 0, 1500, 1000);//координаты начала и ширина с высотой
}


