# SwitchButt

## Opis projektu

Przełącznik włącz/wyłącz z animowanym suwakiem. Tło zmienia kolor zależnie od stanu, a po najechaniu myszą pojawia się obramowanie fokusu.

## Sposób użycia / wdrożenie

**Pliki**

- `switchButton.jsx`
- `switchButton.css`

### Import

```jsx
import SwitchButt from "./switchButton/switchButton";
```

### Funkcja zwrotna

```js
function switch_callBack(position, is_Caller) {
  // …
}
```

### Przykład użycia

```jsx
<SwitchButt
  switchEnable={true}
  background_color="#7c3aed"
  switch_color="#ffffff"
  focus_border_color="2px solid #a78bfa"
  switchClickCallback={switch_callBack}
/>
```

## Licencja

Komponent jest udostępniany na [licencji MIT](./LICENSE).
