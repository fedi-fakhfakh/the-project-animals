/*                      declare html elements                   */
const Pt_Submit=document.querySelector('.pt_cfrm')
const breed=document.querySelector('#breed')
const animal=document.querySelector('#animal')
const price=document.querySelector('#price')
const description=document.querySelector('#description')
const phonenumber=document.querySelector('#phonenumber')
const btnsignin=document.querySelector('.signin')
const fdiv=document.querySelector('.firstdiv')
const sdiv=document.querySelector('.seconddiv')
const Pt_Submit_user=document.querySelector('#pt_cfrm_user')
const country=document.querySelector('#country')
const password=document.querySelector('#password')
const email=document.querySelector('#email')
const username=document.querySelector('#username')
const photo=document.querySelector('#photo')
const imgDiv=document.querySelector('.profile-pic-div')
const file=document.querySelector('#file')
const file_sign=document.querySelector('#file_sign')
const photo_sign=document.querySelector('#photo_sign')
/*           declare variables               */
//the index of the login table
let pos_user;
//table to compare the values of the login table
let compare_tabl=[]
//input from sign in(counties)
let countryavlble=['america','italy']
//input from the main section 
let breed_w_anml_available=[[['cat']],[['Sphynx cat','British Shorthai']]]
//input from sign in and put to adoption
let userinfo=[['username','img','password','email','country','animal','bookmark','cart'],
              ['ali','tomcruise.jpg','ali123','ali@gmail.com','italy',[1],[2],[]],
              ['fayz',"dwaynejohnson",'fayz123','fayz@gmail.com','america',[2],[1],[]]
             ];
//input from put to addoption
let animalinfo=[['animal number#','img','the pet','breed','price','description','owner','email','phonenumber','country'],
                [1,"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTSPwOhXIZXZwMGCotRU2Lqflp5PJ4l8rYSzi-Yx68nNM3aR5DlOrb6PYYUiE_NT6q7oiR1RQilW8X95Kw","cat",'Sphynx cat','2000$',"this is my cat it's 5year old i want the adopter to take good care of it",'ali',"ali@gmail.com",'','italy'],
                [2,"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS_UhVxiWYmdCr1oQrZaBUEPcY8D93Fjocky8DGeRVDsejFFUmGSxlrhfIOin7td0uKetcHdsUkzW-npbafRpoChpBxQRwuIi0sTvNg1wON","cat","British Shorthai","free","he's 2 years old,he dosn't eat cooked food,please take care of him","fayz","fayz@gmail.com","","america"]
               ];  
/*                        function                                */
function addBreedNAnimal(){
    for(let i=0;i < breed_w_anml_available[0].length;i++){
        for(let j=0; j < breed_w_anml_available[1][i].length; j++){
            if(animalinfo[animalinfo.length-1][3] == breed_w_anml_available[1][i][j]){
                break
            }
            if(animalinfo[animalinfo.length-1][3] != breed_w_anml_available[1][i][j]  && j == breed_w_anml_available[1][i].length-1){
                breed_w_anml_available[1].push(animalinfo[animalinfo.length-1][3])
            }
        }
        for(let k;k < breed_w_anml_available[0][i].length;k++){
            if(animalinfo[animalinfo.length-1][2] == breed_w_anml_available[0][i][k]){
                break
            }
            if(animalinfo[animalinfo.length-1][2] != breed_w_anml_available[0][i][k] && i == breed_w_anml_available[0].length-1){
                breed_w_anml_available[0].push([animalinfo[animalinfo.length-1][2]])
                breed_w_anml_available[1].push([animalinfo[animalinfo.length-1][3]])
                console.log(breed_w_anml_available)
            }
        }
    }
} 
function AddCountryAvailable(){
    for(let i=0;i < countryavlble.length;i++){
        if(userinfo[pos_user][4] == countryavlble[i]){
            break
        }
        if(userinfo[pos_user][4] != countryavlble[i] && i == countryavlble.length-1){
            countryavlble.push(userinfo[pos_user][4])
        }
    }
}
/*                       action                                 */
 file.addEventListener('change', function(){
    const reader= new FileReader();
    reader.addEventListener('load',function(){
        photo.setAttribute('src',reader.result)
    })
    reader.readAsDataURL(this.files[0])
 })
 file_sign.addEventListener('change', function(){
    const reader= new FileReader();
    reader.addEventListener('load',function(){
        photo_sign.setAttribute('src',reader.result)
    })
    reader.readAsDataURL(this.files[0])
 })
 btnsignin.addEventListener("click", function(){
    fdiv.style.cssText="display:block"
    Pt_Submit_user.addEventListener("click", function(){
        if(photo_sign.getAttribute("src") == 'user.jpg'){
            alert('change the photo')
        }
        if(username.value != 0 && email.value != 0 && password.value != 0 && country.value != 0 && photo.getAttribute("src") != 'user.jpg'){
            userinfo.push([username.value,photo_sign.getAttribute("src"),password.value,email.value,country.value,[],[],[]])
            console.log(userinfo)
            document.querySelector('.firstdiv').style.cssText="display:none"
            document.querySelector('.signin').style.cssText="display:none"
            document.querySelector('.login').style.cssText="display:none"
            document.querySelector('.user').style.cssText="display:flex"
            document.querySelector('.img_user').setAttribute('src',photo_sign.getAttribute("src"))
            document.querySelector('.username').innerText=username.value
            pos_user=userinfo.length-1
        }
        else{
           alert('enter all the informations')
        }
    })
})
 document.querySelector('.login').addEventListener("click", function(){
    sdiv.style.cssText="display:block"
    document.querySelector('#pt_cfrm_user_log').addEventListener("click", function(){
        compare_tabl=[document.querySelector('#username_l').value,document.querySelector('#password_l').value,document.querySelector('#email_l').value]
        if(document.querySelector('#username_l').value != 0 && document.querySelector('#password_l').value != 0 && document.querySelector('#email_l').value != 0){
            for(var i=0;i < userinfo.length;i++) {
                if(compare_tabl[0]==userinfo[i][0] && compare_tabl[1]==userinfo[i][2] && compare_tabl[2]==userinfo[i][3]){
                    pos_user= i; 
                    compare_tabl=[document.querySelector('#username_l').value,document.querySelector('#password_l').value,document.querySelector('#email_l').value] 
                    document.querySelector('.img_user').setAttribute('src',userinfo[pos_user][1])
                    document.querySelector('.username').innerText=userinfo[pos_user][0]
                    document.querySelector('.seconddiv').style.cssText="display:none"
                    document.querySelector('.signin').style.cssText="display:none"
                    document.querySelector('.login').style.cssText="display:none"
                    document.querySelector('.user').style.cssText="display:flex"
                    break
                }
                if((i==userinfo.length-1) && (compare_tabl[0]!=userinfo[i][0] || compare_tabl[1]!=userinfo[i][2] || compare_tabl[2]!=userinfo[i][3])){
                    alert('your username or email or password is wrong')
                }
            }
        } 
        else{
            alert('enter all the informations')
        }
    })
})
document.querySelector('#pt_cfrm_animal').addEventListener("click", function(){
        if(pos_user == undefined){
           document.querySelector('#pt_cfrm_animal').classList.add('error')
           document.querySelector('.alertb').classList.remove('alertn')
           if(document.querySelector('#pt_cfrm_animal').classList[document.querySelector('#pt_cfrm_animal').classList.length-1] == 'error'){
            setTimeout(function(){document.querySelector('#pt_cfrm_animal').classList.remove('error')}, 100)
            setTimeout(function(){document.querySelector('.alertb').classList.add('alertn')},2800)
           }
        }
        else{
            if(breed.value !=0 && animal.value !=0 && description.value !=0 && photo_sign.getAttribute('src') != 'AnimalUser.png'){
                if(price.value == 0){
                    animalinfo.push([animalinfo.length-1,photo.getAttribute('src'),animal.value,breed.value,'free',description.value,userinfo[pos_user][0],userinfo[pos_user][3],phonenumber.value,userinfo[pos_user][4]])
                    userinfo[pos_user][5].push(animalinfo.length-1)
                    addBreedNAnimal()
                    AddCountryAvailable()
                    setInterval(function(){location.replace('index.html')},1000)
                }
                else{
                    animalinfo.push([animalinfo.length-1,photo.getAttribute('src'),animal.value,breed.value,`${price.value}$`,description.value,userinfo[pos_user][0],userinfo[pos_user][3],phonenumber.value,userinfo[pos_user][4]])
                    userinfo[pos_user][5].push(animalinfo.length-1)
                    addBreedNAnimal()
                    AddCountryAvailable()
                    setInterval(function(){location.replace('index.html')},1000)
                }
            }
            else{
                alert("put all the informations accept the phone number it's optional but we prefer you enter it")
            }
        }
        
    
   /* animalinfo.push([animal.value,.value,.value,.value,.value,])*/
})
