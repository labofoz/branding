/**
 * Duplicates the SVG so that the CSS can animate it
 */
const $tensormonkey = document.querySelector("#static .labofoz-tensormonkey");
const $aniamted = document.querySelector("#animated");

for (let i = 0; i < 11; i++) {
  const $clone = $tensormonkey.cloneNode(true);
  $clone.classList.add("labofoz-tensormonkey-animated");
  $aniamted.appendChild($clone);
}
