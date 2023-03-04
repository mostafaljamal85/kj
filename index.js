// fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(countries => console.log(countries))
        
fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countries => 
        countries.forEach(element => {
            // var _selected=document.getElementById('selected');
            // var _option=document.createElement('option');
            // _option.innerHTML=element.name.common;
            // _selected.appendChild(_option)
            var content=`
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-title"><span style="font-weight: bold">Name : </span>ttle</p>
                <p class="card-title"><span style="font-weight: bold">Official Name : </span>ofi</p>
                <p class="card-title"><span style="font-weight: bold">Capital : </span>cap</p>
                <p class="card-title"><span style="font-weight: bold">Region : </span>reg</p>
                <p class="card-text"><span style="font-weight: bold">Population : </span>pop</p>
                <p class="card-text"><span style="font-weight: bold">Area : </span>areea</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`

            var _div=document.createElement('div');
            var z=content.replace("...",element.flags.png);
            
            z=z.replace("ttle",element.name.common);
            z=z.replace("ofi",element.name.official);
            z=z.replace("pop",element.population);
            z=z.replace("cap",element.capital);
            z=z.replace("reg",element.region);
            z=z.replace("areea",element.area);
            _div.innerHTML=z;
            var _country=document.getElementById('country');
            _country.appendChild(_div)
        })
        )
