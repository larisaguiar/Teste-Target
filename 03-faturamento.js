const { isUtf8 } = require('buffer');
const fs = require('fs');

// ler dados do arquivo adicional json
async function leituraDados(nomeArquivo) {
    try {
        const dados = await fs.promises.readFile(nomeArquivo, { encoding: 'utf8' }); 
        return JSON.parse(dados);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        throw err;
    }
}

const calculaFaturamento = faturamentoMensal => {
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0).map(dia => dia.valor);

    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);

    const mediaMensal = diasComFaturamento.reduce((total, valor) => total + valor, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return [menorValor, maiorValor, diasAcimaDaMedia];
}

const arquivoFaturamento = 'dados.json';

(async () => {
    try {
        const faturamentoMensal = await leituraDados(arquivoFaturamento);

        // Calcula as métricas de faturamento
        const [menor, maior, acimaMedia] = calculaFaturamento(faturamentoMensal);

        console.log(`Menor valor de faturamento: ${menor}`);
        console.log(`Maior valor de faturamento: ${maior}`);
        console.log(`Dias com faturamento acima da média mensal: ${acimaMedia}`);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
})();
