$.getJSON("https://api.imgflip.com/get_memes", (response) => 
    {
        for(var m of response.data.memes){
            document.getElementById("memes").innerHTML += `
            
            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded"  style="width: 32rem;">
                <div class="card-body text-center">
                    <h5 class="card-title">${m.name}</h5>
                </div>
                <img src=${m.url} alt="meme" class="shadow p-3 mb-5">
            </div>
            `
        }
        
    }

);

