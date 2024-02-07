const fs = require('fs');

// Função para ler os dados do faturamento mensal a partir de um arquivo JSON
function lerFaturamentoMensal(nomeArquivo) {
    const dados = fs.readFileSync(nomeArquivo);
    return JSON.parse(dados);
}

// Função para calcular as métricas de faturamento
function calcularMetricasFaturamento(faturamentoMensal) {
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0).map(dia => dia.valor);

    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);

    const mediaMensal = diasComFaturamento.reduce((total, valor) => total + valor, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return [menorValor, maiorValor, diasAcimaDaMedia];
}

// Nome do arquivo contendo os dados do faturamento mensal
const arquivoFaturamento = 'dados.json';

// Lê os dados do faturamento mensal
const faturamentoMensal = lerFaturamentoMensal(arquivoFaturamento);

// Calcula as métricas de faturamento
const [menor, maior, acimaMedia] = calcularMetricasFaturamento(faturamentoMensal);

// Exibe os resultados
console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Dias com faturamento acima da média mensal: ${acimaMedia}`);
