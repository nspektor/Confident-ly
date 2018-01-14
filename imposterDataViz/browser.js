// visualizing data from the csv file
const svg = d3.select('svg')

const dataSet2 = d3.csv('/Question1.csv',function(data){
    console.log(data)
    var groups = svg
    .selectAll('g')
    .data(data);

    var texts = groups
    .enter()
    .append('g')
    .append('text');

    texts
    .attr('transform', function(d, idx){
        return 'translate(0,'+idx*20 + ')'
    })
    .text(function(d, idx){
        return Object.keys(d)[0]
    })
})
