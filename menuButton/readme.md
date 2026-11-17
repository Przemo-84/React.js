Menu_Button / Komponent

Opis projektu : 

Animowany przycisk menu — trzy poziome paski, które po kliknięciu zamieniają się w krzyżyk. Zmienia kolor po najechaniu myszą i zgłasza zmianę stanu na zewnątrz.

Sposób użycia / wdrożenie : 

Pliki: menuButton.jsx + menuButton.css

import Menu_Button from "./menuButton/menuButton";


var menuButton_click = null // uchwyt do którego zostaje przypisana funckcja kliknięcia przycisku menu. Można ją wywoływać z zewnątrz.


// funkcja podana w propsach. Menu_Button wywołuje ją podczas tworzenia i zwraca uchwyt do funkcji mouse_click(). Należy zapisdać ten uchwyt aby można było wywoływać(symulować) kliknięcie z poziomu kodu z zewnątrz.

function getMenuButton_click_function(func) 
{
    menuButton_click = func;
}  

// wywołanie menuButton_click();


//callback wywoływany po zmianie stanu przycisku menu. W state podawanay jest aktualny stan przycisku. Jeśli przysisk został wciśnięty myszką   
    to caller jest true, jeśli za pomocą wywołania funkcji wewnętrznej mouse_click() to caller jest false.

function onMenuChange(state, caller)
{
    ...
}


<Menu_Button
    normal_spans_color="#112720"
    hover_spans_color="#7c3aed"
    spans_height={3}
    setmenuButton_onClick = {getMenuButton_click_function}
    onMenuButton_changeState = {onMenuChange}
/>
