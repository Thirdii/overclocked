
var currentProcessorTab = 'intel'; // Initialize with the default tab for Processor
var currentGraphicsCardTab = 'nvidia'; // Initialize with the default tab for Graphics Card

function opentab(tabName) {
    if ((tabName === currentProcessorTab) || (tabName === currentGraphicsCardTab)) {
        return; // If clicking on the same tab, do nothing
    }

    // Processor tabs
    var intelTab = document.getElementById("intel");
    var amdTab = document.getElementById("amd");
    var image1 = document.getElementById("myImage1");
    var image2 = document.getElementById("myImage2");

    // Graphics Card tabs
    var nvidiaTab = document.getElementById("nvidia");
    var radeonTab = document.getElementById("radeon");
    var image3 = document.getElementById("myImage3");
    var image4 = document.getElementById("myImage4");

    if (tabName === "intel" || tabName === "amd") {
        intelTab.classList.toggle("active-tab", tabName === "intel");
        amdTab.classList.toggle("active-tab", tabName === "amd");
        image1.style.display = tabName === "intel" ? "block" : "none";
        image2.style.display = tabName === "amd" ? "block" : "none";
        currentProcessorTab = tabName; // Update the current tab for Processor
    } else if (tabName === "nvidia" || tabName === "radeon") {
        nvidiaTab.classList.toggle("active-tab", tabName === "nvidia");
        radeonTab.classList.toggle("active-tab", tabName === "radeon");
        image3.style.display = tabName === "nvidia" ? "block" : "none";
        image4.style.display = tabName === "radeon" ? "block" : "none";
        currentGraphicsCardTab = tabName; // Update the current tab for Graphics Card
    }
}

const menuToggle = document.getElementById('menu-toggle');
const sidemenu = document.getElementById('sidemenu');

menuToggle.addEventListener('click', () => {
    sidemenu.classList.toggle('active');  // Toggle the 'active' class to show/hide the menu
    console.log(sidemenu.classList); // Log the class list to the console
});
 
//Contacts

const scriptURL = 'https://script.google.com/macros/s/AKfycbw3yAINb1i5SsPYm25YeNBrHwaBu9VEkljoP-xEaGVVxTy8WoJjVRWoBE9Cq1BIfpky/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  

//graphics card

function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }


