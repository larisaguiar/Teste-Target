// Questão 4 - faturamento mensal de uma distribuidora


const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

const totalFaturamento = faturamentoPorEstado.reduce((total, estado) => total + estado.valor, 0);

const percentuaisPorEstado = faturamentoPorEstado.map(estado => ({
    estado: estado.estado,
    percentual: (estado.valor / totalFaturamento) * 100
}));

percentuaisPorEstado.forEach(estado => {
    console.log(`${estado.estado}: ${estado.percentual.toFixed(2)}%`);
});
