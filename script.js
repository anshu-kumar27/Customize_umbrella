const fileUploadIcon = document.getElementById('uploaderIcon');
const fileUpload = document.getElementById('fileupload');
const BtnText = document.getElementById('btnText');
const blue = document.getElementById('blue');
const pink = document.getElementById('pink');
const yellow = document.getElementById('yellow');
const container = document.getElementById('container');
const loader = document.getElementById('loader');
const umbrella = document.getElementById('umbrella');
const displayLogo = document.getElementById('displayLogo');
const loaderPath = document.getElementById('loaderpath');

let isUploaded = false; // file uploaded or not check flag 
let current = "blue"; // current color flag to update active color
let isLoading = false; // loading flag to avoid triggering any other function before once this is active

// handling color clicks 
blue.addEventListener('click',()=>{
     // if loading is true or someone tries to click on the same color it'll return avoiding redundant reloads... 
    if(isLoading || current == "blue") return;
    current = "blue";
    blue.className = " color-boxes bg-blue-active"
    yellow.className = "color-boxes bg-yellow"
    pink.className = "color-boxes bg-pink"
    BtnText.className ="bg-blue";
    fileUploadIcon.className = "uploader bg-blue";
    container.className = "container bg-blue-100";
    loader.setAttribute("class", "loader svg-blue");
    loadingScreen('./assets/Blue_umbrella.png');
})
pink.addEventListener('click',()=>{
    if(isLoading || current == "pink") return;
    current = "pink";
    pink.className = "color-boxes bg-pink-active"
    yellow.className = "color-boxes bg-yellow"
    blue.className = "color-boxes bg-blue"
    BtnText.className ="bg-pink";
    fileUploadIcon.className = "uploader bg-pink";
    container.className = "container bg-pink-100";
    loader.setAttribute("class", "loader svg-pink");
    loadingScreen('./assets/Pink_umbrella.png');
})
yellow.addEventListener('click',()=>{
    if(isLoading || current == "yellow") return;  
    current = "yellow";
    yellow.className = "color-boxes bg-yellow-active"
    blue.className = "color-boxes bg-blue"
    pink.className = "color-boxes bg-pink"
    BtnText.className ="bg-yellow";
    fileUploadIcon.className = "uploader bg-yellow";
    container.className = "container bg-yellow-100"
    loader.setAttribute("class", "loader svg-yellow");
    loadingScreen('./assets/Yellow_umbrella.png');
})

// handling loading screens 
const loadingScreen = (newUmbrellaImage) => {
    // loading is marked as true to avoid any other listener getting triggered before this...
    isLoading= true;
    loader.style.display = 'block'
    umbrella.style.display = 'none'
    displayLogo.style.display = 'none'
    displayLogo.classList.remove('showUmbrella')
    umbrella.classList.remove('showUmbrella')
    setTimeout(()=>{
        loader.style.display = 'none'
        umbrella.style.display = 'block'
        umbrella.className = 'showUmbrella'
        if(isUploaded){ // this will only be set as block if file is uploaded
            displayLogo.style.display = 'block'
            displayLogo.className = 'showUmbrella'
        }
        if(newUmbrellaImage){ // if the color has been changed the url will be passed making it true
            umbrella.src = newUmbrellaImage;
        }
        isLoading=false;
    },2500)
}

// handling uploads 
fileUploadIcon.addEventListener('click',()=>{
    fileUpload.click();
})

fileUpload.addEventListener('change',()=>{
    try{
        const file = fileUpload.files[0];
        if(file){
            // meeting up the requirement of 5mb and png and jpg only 
            const allowedtypes = ['image/png','image/jpeg']
            const maxSize = 5 * 1024 * 1024 // 5mb
            if(!allowedtypes.includes(file.type)){
                alert("only .png and .jpg files are allowed!")
                return;
            }
            if(file.size > maxSize){
                alert("file must be less than 5mb")
                return
            }
            // selecting a substring of that file only avoiding overflow
            let fileName = file.name.substring(0,12);
            if(file.name.length > 12){
                fileName += "..."
            }
            BtnText.textContent = fileName;
            const imageUrl = URL.createObjectURL(file);
            // img src on for logo ON Umbrella
            displayLogo.src = imageUrl;
            // check of file is uploaded to avoid wrong class allocation
            isUploaded = true;
            loadingScreen();
        }
    }catch(error){
        console.log("error during file upload",error)
    }
})



//debugging 

/*
loaderPath.addEventListener('click',()=>{
    console.log('this seems to be the right thing to do ...')
    console.log(loader)
})
*/