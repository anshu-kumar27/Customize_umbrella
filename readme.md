## **Structure of this project**

---

## **html : document structure**
    
consists of 2 sections left and right - initially divided into 2 sections of screen for larger screen's(flex-row), but for the smaller sections it'll be from top to bottom (flex-column)

---

## **css : has 3 sections** 
    
1. classnames (applying styles on the classes listed in html)

2. animations : animation section where i have applied animation on loader icon - svg and umbrella to show with a fade in effect

3. generic classes to use anywhere anytime

---

## **script : has all the dynamic logic** 
    
1. starting from finding all the elements via "id"

2. setting up flags to avoid wrong displays; active color; and triggering something else while something is in pipline working (loading)
    
3. color active and file umbrella color changing section according to the selection
    
4. loading function this helps all the things dynamically change via showing a loading screen
    
5. file upload logic: there are checks for png/jpg image uploads and to avoid any file greater than 5mb being loaded for both of these checks if failed a warning trigger will occur , and if successfully uploaded file will be marked as isUploaded ~true in our flag aswell and loading will be initiated to display the logo.