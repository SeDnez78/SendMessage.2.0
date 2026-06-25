const get_button = document.querySelector('.button');
const nav = document.querySelector('.nav');
let check = false;


const btn_open = document.querySelector('.open');
const btn_close = document.querySelector('.close');

function get_dimension(){
    let aux = getComputedStyle(nav);
    let element_dim = parseFloat(aux.width);

    return element_dim;
}
get_button.addEventListener('click',()=>{ 
    let dim = get_dimension() - 25;

    if(check == false){
        check = true;
        get_button.style.left = dim + 'px';
        nav.style.left = '0px';
        btn_open.style.display = 'none';
        btn_close.style.display = 'inline';
        get_button.style.boxShadow = '0 0 0 0';
        nav.style.filter = `drop-shadow(0 0 10px #000)`
    }
    else{
        check = false;
        get_button.style.left = '10px';
        nav.style.left = '-100%';
        btn_open.style.display = 'inline';
        btn_close.style.display = 'none';
        get_button.style.boxShadow = '0 0 7px #000'
        get_button.style.left = '20px'
        nav.style.filter = 'none';
    }
});

window.addEventListener('resize',()=>{

    if(check == true){
        console.log('Me redimensiono');
        get_button.style.left = (get_dimension() - 25) + 'px';
    }
    else{
        get_button.style.left = '20px';
    }
});

const button_send = document.querySelector('.send');

button_send.addEventListener('click',() => {
    
    const input_name = document.querySelector('.input_name').value;
    const text = document.querySelector('.message').value;
    let texto_completo = encodeURIComponent(`Hola soy ${input_name}. Quiero decirte que : ${text}`);

    if( input_name.trim() === '' && text.trim() === '' ){
        alert('Please fill out all the fields');

    }else if(input_name.trim() !== '' && text.trim() !== ''){
        let web_URl = `http://wa.me/5356545159?text=${texto_completo}`;

        window.open(web_URl);
    }
    
});
