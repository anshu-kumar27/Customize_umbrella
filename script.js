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

let isUploaded = false;
let current = "blue";

// handling color clicks 
blue.addEventListener('click',()=>{
    if(current == "blue") return;
    current = "blue";
    blue.className = " color-boxes bg-blue-active"
    yellow.className = "color-boxes bg-yellow"
    pink.className = "color-boxes bg-pink"
    BtnText.className ="bg-blue";
    fileUploadIcon.className = "uploader bg-blue";
    container.className = "container bg-blue-100";
    loader.className = "loader svg-blue";
    loadingScreen('./assets/Blue_umbrella.png');
})
pink.addEventListener('click',()=>{
    if(current == "pink") return;
    current = "pink";
    pink.className = "color-boxes bg-pink-active"
    yellow.className = "color-boxes bg-yellow"
    blue.className = "color-boxes bg-blue"
    BtnText.className ="bg-pink";
    fileUploadIcon.className = "uploader bg-pink";
    container.className = "container bg-pink-100";
    loader.className = "loader svg-pink";
    loadingScreen('./assets/Pink_umbrella.png');
})
yellow.addEventListener('click',()=>{
    if(current == "yellow") return;
    current = "yellow";
    yellow.className = "color-boxes bg-yellow-active"
    blue.className = "color-boxes bg-blue"
    pink.className = "color-boxes bg-pink"
    BtnText.className ="bg-yellow";
    fileUploadIcon.className = "uploader bg-yellow";
    container.className = "container bg-yellow-100"
    loader.className = "loader svg-yellow";
    loadingScreen('./assets/Yellow_umbrella.png');
})

// handling loading screens 
const loadingScreen = (newUmbrellaImage) => {
    loader.style.display = 'block'
    umbrella.style.display = 'none'
    displayLogo.style.display = 'none'
    displayLogo.classList.remove('showUmbrella')
    umbrella.classList.remove('showUmbrella')
    setTimeout(()=>{
        loader.style.display = 'none'
        umbrella.style.display = 'block'
        umbrella.className = 'showUmbrella'
        if(isUploaded){
            displayLogo.style.display = 'block'
            displayLogo.className = 'showUmbrella'
        }
        if(newUmbrellaImage){
            umbrella.src = newUmbrellaImage;
        }
    },2000)
}

// handling hover changes to make both of the component behave the same way

// handling uploads 
fileUploadIcon.addEventListener('click',()=>{
    fileUpload.click();
})

fileUpload.addEventListener('change',()=>{
    try{
        const file = fileUpload.files[0];
        if(file){
            // selecting a substring of that file only avoiding overflow
            console.log(file.name)
            const fileName = file.name.substring(0,12);
            BtnText.textContent = fileName;
            const imageUrl = URL.createObjectURL(file);
            displayLogo.src = imageUrl;
            isUploaded = true;
            loadingScreen();
        }
    }catch(error){
        console.log("error during file upload")
    }
})



//debugging 

/*
loaderPath.addEventListener('click',()=>{
    console.log('this seems to be the right thing to do ...')
    console.log(loader)
})
*/