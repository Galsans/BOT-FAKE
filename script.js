const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName('container')

let init = 0;

const botSay = (data) => {
    return["Hallo, Perkenalkan saya galsBot. Siapa nama kamu?",
    `Hallo ${data?.Nama}, Umurmu berapa ?`,
    `Ouhh ${data?.usia}, Udah Punya Pacar ?`,
    `Ohhh ${data?.pacar}, Hobbimu apa ?`,
    `Ouh sama dong kta sama sama suka hobi ${data?.hobi} Yowes Udahan Yak Ngantuk Gw`
]
}

pertanyaan.innerHTML = botSay()[0]
let usersData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("Silahkan Isi Jawaban dahulu") 
    init++
    if (init === 1) {   
        botDelay({ Nama: jawaban.value})  
    } else if  (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({ pacar: jawaban.value})
    } else if (init === 4) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay (jawabanUser) {
    loaders.style.display = 'block';
    container[0].style.filter = "blur(8px)"
    setTimeout( () => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = 'none'
        container[0].style.filter = "none"
    }, [800])
    usersData.push(jawaban.value)
    jawaban.value = ""
}
function finishing() {
    pertanyaan.innerHTML = `Thanks ${usersData[0]} For Playing With Me GalsBot 🥳😊😊😊 
    kapan kapan kita ${usersData[3]} bareng yak !!! 😅`
    jawaban.value = "Siap Thanks Juga ya euy !!!😏😝"

}
function botEnd() {
    alert(`Terima Kasih ${usersData[0]} sudah berkunjung anda akan diarahkan ke halaman awal`)
    window.location.reload()
}