console.log('2.js')

const element = document.body.querySelector('#h1Pierwsze');

// setTimeout(() => element.style.color = 'cornflowerblue', 5000)

// setTimeout(() => element.textContent = 'abc', 10000)

var fn = (val) => String(val).padStart(2, '0')

setInterval(
    () => {let date = new Date();var dd = date.getDay();
        var MM = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        element.textContent = `${fn(dd)}.${fn(MM)}.${yyyy} ${fn(hh)}:${fn(mm)}:${fn(ss)}`
    },
    1000
)