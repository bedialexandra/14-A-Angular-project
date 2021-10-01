
//document.getElementsByTagName('body')[0].innerHTML="LOL";

function Osszseadas(a : number, b : number) : number{
    return a+b;
}

function Szamol(){
    let a = Number((document.getElementById('a') as HTMLInputElement)?.value);
    let b = Number((document.getElementById('b') as HTMLInputElement)?.value);
    let c = Osszseadas(a,b);
    (document.getElementById('c')as HTMLInputElement).value=c.toString();
}

document.getElementById("szamol")?.addEventListener("click", Szamol);
