Number_Input / Komponent

Opis projektu : 

Licznik z przyciskami − i + oraz przytrzymaniem — po dłuższym przytrzymaniu wartość zmienia się coraz szybciej. Pilnuje zakresu min/max i pozwala dopisać własny sufiks, np. jednostkę.

Sposób użycia / wdrożenie : 

Pliki: number_input.jsx + number_input.css

import Number_Input from "./number_input/number_input";

<Number_Input
defaultValue={5}
minValue={0}
maxValue={100}
suffix="szt."
colorsStyles={{
backgroundColor: "#ffffff",
border: "1px solid #c4c5c9",
backgroundButtonColor: "#eef1f6",
buttonBorder: "1px solid #c4c5c9",
buttonTextColor: "#111827",
textColor: "#111827",
}}
/>

// Wartość trzymana jest wewnątrz komponentu — brak propsa onChange. Dostęp do wartości : document.querySelector('.numberInput_span').innerText;