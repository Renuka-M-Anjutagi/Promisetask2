var res = fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
res.then((data) => data.json())
.then((data1) => console.log(data1));
var res = fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
res.then((data) => data.json())
.then((data1) => foo(data1));


var container = document.createElement("div")
container.className ="container"

var row = document.createElement("div")
row.className ="row"


function foo(data1)
{
    for(var i =0 ; i< data1.length;i++)
    {
        var col = document.createElement("div")
        col.className = "col-md-6"
        col.innerHTML = `<div class="card">
        <div class="card-header">
          Quote
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer class="blockquote-footer">${data1[i].nome} <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>`
    
     
      
      
      
    
     

        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}