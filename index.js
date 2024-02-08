"use strict";

const main = () => {
    let canvas = document.getElementById('mCanvas');
    let context = canvas.getContext("2d");
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let fontSize = 38.5;
    let columns = Math.floor(w / fontSize)+4;
    let drops = [];
    let str = 'ABCEDGJKLMPOQ<XYZ1654710309!"#$"$%#&$%&/?8';

    let matrix = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.1)';
        context.fillRect(0, 0, w, h);
        context.font = `${fontSize}px monospace`;
        context.fillStyle = '#05ad52';
        for (let i = 0; i < columns; i++) {
            let j = Math.floor(Math.random() * str.length);
            let x = i * fontSize;
            let y = drops[i] * fontSize;
            context.fillText(str[j], x, y);
            if (y >= canvas.height && Math.random() > 0.99) {
                drops[i] = 0;
            } else {
                drops[i]++;
            }
        }
    };

    canvas.width = w;
    canvas.height = h;
    for (let i = 0; i < columns; i++) {
        drops.push(0);
    }
    matrix();
    setInterval(matrix, 30);
    
    let img = document.getElementById('img');
    document.addEventListener('mousemove', function (e) {
        let mouseX = e.clientX-140;
        let mouseY = e.clientY-360;

        img.style.left = mouseX + 'px';
        img.style.top = mouseY + 'px';
    });
};

document.addEventListener('DOMContentLoaded', main);

let nav = document.getElementById('elemento-ecima1')
let redes = document.getElementById('elemento-ecima2')
let idoma = document.getElementById('idoma')

    nav.addEventListener('mouseover', function() {
        document.getElementById('img').style.display = 'none';
        document.getElementById('img').style.zIndex = -1;
    });
    nav.addEventListener('mouseout', function(){
        document.getElementById('img').style.display = 'block';
        document.getElementById('img').style.zIndex = -1;
    })
    redes.addEventListener('mouseover', function() {
        document.getElementById('img').style.display = 'none';
        document.getElementById('img').style.zIndex = -1;
    });
    redes.addEventListener('mouseout', function() {
        document.getElementById('img').style.display = 'block';
        document.getElementById('img').style.zIndex = -1;
    });
    idoma.addEventListener('mouseover', function() {
        document.getElementById('img').style.display = 'none';
        document.getElementById('img').style.zIndex = -1;
    });
    idoma.addEventListener('mouseout', function() {
        document.getElementById('img').style.display = 'block';
        document.getElementById('img').style.zIndex = -1;
    });
    document.addEventListener('DOMContentLoaded', function() {
        let img = document.getElementById('img');
        let body = document.getElementById('elemento-ecima2');
    
        // Ocultar la bola al cargar el DOM
        img.style.display = 'none';
    
        redes.addEventListener('mouseover', function() {
            img.style.display = 'none';
        });
    
        redes.addEventListener('mouseout', function() {
            img.style.display = 'block';
        });
    
        // Asegurar que la bola esté siempre por encima de los elementos
        img.style.zIndex = 1;
    });