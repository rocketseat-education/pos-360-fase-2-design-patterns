
const tipoDeTransporte = "caminhão"

let transporte;

if (tipoDeTransporte === "caminhão") {
  transporte = new Caminhao()
} else if (tipoDeTransporte === "navio") {
  transporte = new Navio()
}

transporte.entregar()
