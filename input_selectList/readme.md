Input_SelectList / Komponent

Opis projektu : 

Rozwijana lista wyboru z polem tylko do odczytu, ikoną zaznaczenia przy aktywnej pozycji oraz opcjonalnymi ikonami po lewej i prawej stronie. Wygląd i pozycje konfigurujesz przez obiekt propsów.

Sposób użycia / wdrożenie : 

Pliki: input_selectList.jsx + input_selectList.css + darkBlue_checked_icon.png

import Input_SelectList from "./input_selectList/input_selectList";

<Input_SelectList
settings={{
background_color: "#f8fafc",
border: "1px solid #c4c5c9",
border_hover: "2px solid #95969d",
color: "#111827",
fontFamily: "Arial",
max_height: "250px",
placeholder: "Wybierz opcję",
}}
label_settings={{ text: "Motyw", showLabel: true }}
list_items={{ items: ["Jasny", "Ciemny", "Systemowy"], selectedItem: 0 }}
changeItem_callback={(index) => console.log("wybrano:", index)}
/>

// icon i dropDown_icon — opcjonalne adresy ikon które podaje się w propsach. Gdy są podane to icon jest wyświetlana po lewej stronie a 
   dropdown_icon po prawej stronie pola input.
   