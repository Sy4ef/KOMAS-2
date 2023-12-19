function homePage() {
    document.querySelector('.container').style.display="flex";
    document.querySelector('.subject-container').style.display="none";
    document.querySelector('.p1container').style.display="none";
    document.querySelector('.p2container').style.display="none";
    document.querySelector('.p3container').style.display="none";
    document.querySelector('.p4container').style.display="none";
}

function komas() {
    document.querySelector('.container').style.display="none";
    document.querySelector('.subject-container').style.display="flex";
    document.querySelector('.p1container').style.display="none";
    document.querySelector('.p2container').style.display="none";
    document.querySelector('.p3container').style.display="none";
    document.querySelector('.p4container').style.display="none";
}

function pertemuan1() {
    document.querySelector('.subject-container').style.display="none";
    document.querySelector('.p1container').style.display="flex";
    document.querySelector('.p2container').style.display="none";
    document.querySelector('.p3container').style.display="none";
    document.querySelector('.p4container').style.display="none";
}

function pertemuan2() {
    document.querySelector('.subject-container').style.display="none";
    document.querySelector('.p1container').style.display="none";
    document.querySelector('.p2container').style.display="flex";
    document.querySelector('.p3container').style.display="none";
    document.querySelector('.p4container').style.display="none";
}

function pertemuan3() {
    document.querySelector('.subject-container').style.display="none";
    document.querySelector('.p1container').style.display="none";
    document.querySelector('.p2container').style.display="none";
    document.querySelector('.p3container').style.display="flex";
    document.querySelector('.p4container').style.display="none";
}

function pertemuan4() {
    document.querySelector('.subject-container').style.display="none";
    document.querySelector('.p1container').style.display="none";
    document.querySelector('.p2container').style.display="none";
    document.querySelector('.p3container').style.display="none";
    document.querySelector('.p4container').style.display="flex";
}