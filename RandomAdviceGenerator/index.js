const fetchAdvice = async () => {
    const respuesta = await fetch("	https://api.adviceslip.com/advice");
    const resultado = await respuesta.json();

    document.querySelector('.titulo').innerHTML = `Advice #${resultado.slip.id}`;
    document.querySelector(".advice").innerHTML = `"${resultado.slip.advice}"`;
}

fetchAdvice();