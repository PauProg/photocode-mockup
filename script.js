function abrirMenu(){
    var menu = document.getElementById('menu');

    if (menu.style.display == 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function change(){
    var icon = document.getElementById('icon');

    if (icon.className == 'bx bx-menu'){
        icon.className = 'bx bx-x';
        abrirMenu();
    } else {
        icon.className = 'bx bx-menu';
        abrirMenu();
    }
}

function submit(){
    window.location.href = 'homepage.html'
}

document.getElementById('inputFile').addEventListener('change', function() {
    var archivo = this.files[0];
    if (archivo) {
        var lector = new FileReader();
        lector.onload = function(e) {
            var urlImagen = e.target.result;
            var imagen1 = document.getElementById('imagen1');
            var imagen2 = document.getElementById('imagen2');
            imagen1.src = urlImagen;
            imagen2.src = urlImagen;
            imagen1.style.display = 'block';
            imagen2.style.display = 'block';
        };
        lector.readAsDataURL(archivo);
    }
});

function mostrarTexto() {
    var texto = document.getElementById('textoInput').value;
    var parrafo = document.getElementById('textoMostrado');
    parrafo.textContent = texto;
    parrafo.style.display = 'block';
}

document.getElementById('inputFile').addEventListener('change', function() {
    var archivo = this.files[0];
    if (archivo) {
        var lector = new FileReader();
        lector.onload = function(e) {
            var texto = e.target.result;
            var parrafo = document.getElementById('textoMostrado');
            parrafo.textContent = texto;
            parrafo.style.display = 'block';
        };
        lector.readAsText(archivo);
    }
});

function preview(){
    var creation = document.getElementById('post-creation');
    var preview = document.getElementById('post-preview');
    
    creation.style.display = 'none';
    preview.style.display = 'block';
}

function upload(){
    alert('Your post was updated succesfully!');
    window.location.href = 'homepage.html';
}

function login(){
    window.location.href = 'requisits.html';
}

function search(){
    var resultado = document.getElementById('resultado');
    var ayuda = document.getElementById('ayuda');

    ayuda.style.display = 'flex';
    resultado.style.display = 'flex';
}

function like(){
    var ayuda = document.getElementById('ayuda');

    alert('Okay, we will take that into account');
    ayuda.style.display = 'none';
}

function lockChange(){
    var lock = document.getElementById('lock');

    if (lock.className == 'bx bxs-lock-alt'){
        lock.className = 'bx bxs-lock-open-alt';
        alert('Your account is now public');
    } else {
        lock.className = 'bx bxs-lock-alt';
        alert('Your account is now private');
    }
}

function dark(){
    var dark = document.getElementById('dark');
    var light = document.getElementById('light');

    if (dark.className == 'bx bxs-circle'){
        dark.className = 'bx bxs-circle active';
        light.className = 'bx bxs-circle'
    } else {
        alert('Dark mode is already active');
    }
}

function light(){
    var dark = document.getElementById('dark');
    var light = document.getElementById('light');

    if (light.className == 'bx bxs-circle'){
        light.className = 'bx bxs-circle active';
        dark.className = 'bx bxs-circle';
    } else {
        alert('Light mode is already active');
    }
}