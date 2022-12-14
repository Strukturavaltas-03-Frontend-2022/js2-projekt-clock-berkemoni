'use strict'

/* 
- Mutassa az órát, percet, másodpercet
- Az óra a user által használt időzóna szerint jelenítse meg az időt
- Az óra 24 órás formátumot használjon minden esetben*/

/*A magyar formátum megfelel az előírtnak. 
A user eszközének rendszerideje szerint jelenik meg az idő. */

const exactTime = () => {
    const timeNow = new Date();
    const localeTime = timeNow.toLocaleTimeString('hu');
    const clock = document.querySelector('.box');
    clock.textContent = `${localeTime}`
}

setInterval(() => {
    exactTime();
}, 1000)

setInterval();