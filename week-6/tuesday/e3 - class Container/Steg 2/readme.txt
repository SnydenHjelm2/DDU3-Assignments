Vi bygger nu två underklasser till E

class E_img
class E_select

Som skapar <img> och <select> resp.

let i1 = new E_img({
  parent, classes // Samma som för E
  src: string
})

let s1 = new E_select({
  parent, classes // Samma som för E
  options: array of strings
})