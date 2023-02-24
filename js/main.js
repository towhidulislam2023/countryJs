const loadCountrisData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(rep => rep.json())
        .then(data => displayData(data));
}

function displayData(data) {
    const targetContainer = document.getElementById('loadedDataContainer');
    for (const countery of data) {
        console.log(countery );
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Name:   ${countery.name.common}</h3>
            <p class="card-title fw-bold">Offical Name:  ${countery.name.official?countery.name.official:'DATA NOT FOUND'}</p>
            <p class="card-text"> Capital:  ${countery.capital}</p>
            <p class="card-text">Continents: ${countery.continents}</p>
            <button type="button" onclick="loadCountryDetails('${countery.cca2}')"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            see Flags
</button>
          </div>
        </div>
      </div> `
        targetContainer.appendChild(div);
        
    }
    
}
const loadCountryDetails = code => {
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(rep => rep.json())
    .then(data=>displayCountryDetails(data))
}
const displayCountryDetails = data => {
    const bodyContant = document.getElementById('modalBodyContant');
    bodyContant.innerText = '';
    for (const cDaitails of data) {
        console.log(cDaitails.name.common);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdrop">${cDaitails.name.common}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <section class="mb-5">
                    <div class="d-flex" style="background-color: white;">
                        <div class="card">
                            <div class="card-body">
                              <h1 id="cName" class="card-title">${cDaitails.name.official}</h1>
                            </div>
                            <img   id="imageSet" src="${cDaitails.flags.png}" class="card-img-bottom img-fluid  ms-auto me-auto" alt="...">
                          </div>
                    </div>
                </section>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>

        `
        bodyContant.appendChild(div)
    }
    // const targetFeild=document.getElementById('')
    
    
}

loadCountrisData()