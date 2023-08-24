window.onload = () => {
    const boton = document.querySelector('#no-clickear');
    const input = document.querySelector('#texto');

    input.addEventListener('mouseover', () => {
        input.focus();
    });

    input.addEventListener('mouseout', () => {
        input.blur();
    });

    /* boton.addEventListener('click', () => {
        alert('Te dije que no me clickees!');
    }); */

    boton.onclick = (e) => {
        console.log(e.target);
        alert('fasdiofjoiasdj´fioasd')
    };

    input.onchange = () => {
        console.log(input.value);
    }

    input.oninput = (e) => {
        console.log(e.data);
        console.log(e.target.value);
    }

    const paises = Array.from(document.querySelectorAll('.pais'));

    paises.forEach(pais => {
        pais.onclick = (e) => {
            e.target.parentElement.style.border = '1px solid black';

            setTimeout(() => {
                e.target.parentElement.style.border = '';
            }, 1500)
            //alert(e.target.innerText);
        }
    });

    document.querySelector('#enviar').onclick = e => {
        e.preventDefault();
        console.log(e);
    }

    document.querySelector('#google').onclick = (e) => {
        e.preventDefault();
    }

    window.oncontextmenu = (e) => {
        e.preventDefault();

        const caja = document.querySelector('#caja');

        caja.style.display = 'inline';

        caja.style.left = e.x + 'px';
        caja.style.top = e.y + 'px';
    }

    window.onclick = (e) => {
        const caja = document.querySelector('#caja');

        if (!e.target.parentElement) {
            caja.style.display = 'none';
        } else if (e.target.id !== 'caja' && e.target.parentElement.id !== 'caja') {
            caja.style.display = 'none';
        }
    }
}