(function () {
    const container = document.getElementById('graph2d');
    const items = sales
        .filter((sale) => sale.product === 'carrots')
        .map((sale) => ({
            x: sale.date,
            y: sale.sales,
            group: 'carrots',
        }));
    new vis.Graph2d(container, items);
})();
