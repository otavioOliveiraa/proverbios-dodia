const elementoResposta = document.querySelector("#resposta")
const respostas = [
  "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. | Provérbios 3:5",
  "Os teus olhos olhem para a frente, e as tuas pálpebras olhem direto diante de ti. | Provérbios 4:25",
  "O temor do homem armará laços, mas o que confia no Senhor será posto em alto retiro. | Provérbios 29:25",
  "Não ames o sono, para que não empobreças; abre os teus olhos, e te fartarás de pão. | Provérbios 20:13",
  "O que anda tagarelando revela o segredo; não te intrometas com o que lisonjeia com os seus lábios. |Provérbios 20:19",
  "Não digas: Vingar-me-ei do mal; espera pelo Senhor, e ele te livrará. | Provérbios 20:22",
  "Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos. | Provérbios 16:3",
  "O filho sábio atende à instrução do pai; mas o escarnecedor não ouve a repreensão. | Provérbios 13:1",
  "Aplica o teu coração à instrução e os teus ouvidos às palavras do conhecimento. | Provérbios 23:12",
  "Não estejas entre os beberrões de vinho, nem entre os comilões de carne. Porque o beberrão e o comilão acabarão na pobreza; e a sonolência os faz vestir-se de trapos. | Provérbios 23:20,21",
  "Alegrem-se teu pai e tua mãe, e regozije-se a que te gerou. | Provérbios 23:25",
  "Melhor é o pobre que anda na sua integridade do que o perverso de lábios e tolo. | Provérbios 19:1",
]
const buttonVersiculo = document.querySelector('#buttonVersiculo')
// clicar em ler versiculo

function lerVersiculo() {
  buttonVersiculo.setAttribute("disabled", true)

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
  // sumir o vesiculo depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonVersiculo.removeAttribute("disabled")
  }, 10000)
}