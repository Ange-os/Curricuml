"use strict";

const intiacionCanvas = (canvasID) => {
    let canvas = document.getElementById(canvasID);
    let context = canvas.getContext("2d");
    let w, h, fontSize, columns, drops, str;
    let animationInterval;

    const resetCanvas = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    fontSize = 40;
    columns = Math.floor(w / fontSize) + 4;
    drops = [];
    str = 'ABCEDGJKLMPOQ<XYZ1654710309!"#$"$%#&$%&/?8';
    for (let i = 0; i < columns; i++) {
        drops.push(0);
    }
};

const matrix = () => {
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

const startAnimation = () => {
    resetCanvas();
    clearInterval(animationInterval);
    matrix();
    animationInterval = setInterval(matrix, 30);
};


window.addEventListener('resize', resetCanvas);
startAnimation();
}

document.addEventListener('DOMContentLoaded', () => {
    intiacionCanvas('mCanvas')
    intiacionCanvas('mCanvasFooter')
});

window.addEventListener('scroll', function(){
    const altura = window.innerHeight / 1.2;

    const fadeSkills = () =>{
        let skil = document.getElementById('skills');
        let icons = document.querySelectorAll('.incons');
        let distancia = skil.getBoundingClientRect().top;
        if (distancia <= altura) {
            for (let i = 0; i < icons.length; i++) {
                icons[i].classList.add('aparecer');
            }
        }
    }
    const fadeWorkTitlee = () =>{
        let altura = window.innerHeight / 1.2;
        let secFor = document.querySelectorAll('.precentacion2')
        secFor.forEach(sec =>{
            let distancia = sec.getBoundingClientRect().top;
                if(distancia <= altura){
                    let works = sec.querySelectorAll('#works')
                    works.forEach(work =>{
                        work.style.opacity = 1;
                    })
        }
        })

        }

    const fadeElements = () =>{
        let altura = window.innerHeight / 1.4;
        let elementos = document.querySelectorAll('.elementos')
        let galeria = document.querySelector('.galeria')
        let distancia = galeria.getBoundingClientRect().top;
        if(distancia <= altura){
            elementos.forEach(element =>{
                element.style.opacity = '1';
                element.style.animation = 'bounceIn 3s';
            })
        }
    }    
    fadeSkills()
    fadeWorkTitlee()
    fadeElements()
});

let danger = document.getElementById('btn-danger');
let inicio = document.getElementById('inicio');
let divFto = document.getElementById('div-foto');
let elemntBorrar = document.querySelectorAll('.borrar');

danger.addEventListener('click', function () {
    for (let i = 0; i < elemntBorrar.length; i++) {
        elemntBorrar[i].style.display = 'none';
    }
    divFto.style.width = '96%';
    divFto.style.height = '97vh';
    inicio.style.height = '97vh';
    canvas.style.width = '100%';
    canvas.style.border = 'none';
    canvas.style.height = '100%';

    setTimeout(startAnimation, 5000); // 5000 milliseconds = 5 seconds
});

const images = [
    '/certificado/Captura de pantalla_29-5-2024_123015_.jpeg',
    '/certificado/Captura de pantalla_29-5-2024_123127_.jpeg',
    '/certificado/Captura de pantalla_29-5-2024_123313_.jpeg'
];

let currentIndex = 0;
const imgCambiante = document.getElementById('img-cambiante');

function cambiarImg() {
    imgCambiante.classList.remove('active');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgCambiante.src = images[currentIndex];
        imgCambiante.classList.add('active');
    }, 1000); // Tiempo para la transición de salida (1s)
}

// Activa la primera imagen al cargar la página
window.onload = () => {
    imgCambiante.src = images[currentIndex];
    imgCambiante.classList.add('active');
    setInterval(cambiarImg, 5000); // Cambia cada 3 segundos
};
const fomulari = document.getElementById('form-contact')
        fomulari.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            try {
                const response = await fetch('http://127.0.0.1:8000/api/send-email/', {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.json();
                alert(result.status);
                fomulari.reset();
            } catch (error) {
                console.error('Error:', error);
                alert(error)
            }
        });