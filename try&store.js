/*          declare html elemnets              */
const div=document.createElement('div')
const i=document.createElement('i')
const p=document.createElement('p')
const img=document.createElement('img')
const button=document.createElement('button')
const Pt_Submit=document.querySelector('.pt_cfrm')
const breed=document.querySelector('#breed')
const animal=document.querySelector('#animal')
const price=document.querySelector('#price')
const description=document.querySelector('#description')
const phonenumber=document.querySelector('#phonenumber')
const btnsignin=document.querySelector('.signin')
const fdiv=document.querySelector('.firstdiv')
const sdiv=document.querySelector('.seconddiv')
const Pt_Submit_user=document.querySelector('#pt_cfrm_user_adopt')
const country=document.querySelector('#country_adopt')
const password=document.querySelector('#password_adopt')
const email=document.querySelector('#email_adopt')
const username=document.querySelector('#username_adopt')
const photo=document.querySelector('#photo')
const imgDiv=document.querySelector('.profile-pic-div')
const file=document.querySelector('#file')
const file_sign=document.querySelector('#file_sign_adopt')
const photo_sign=document.querySelector('#photo_sign_adopt')
  /*           declare variables               */
//input from sign in(counties)-
let animalinfo=[['animal number#','img','the pet','breed','price','description','owner','email','phonenumber','country'],
                [1,"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTSPwOhXIZXZwMGCotRU2Lqflp5PJ4l8rYSzi-Yx68nNM3aR5DlOrb6PYYUiE_NT6q7oiR1RQilW8X95Kw","cat",'Sphynx cat','2000$',"this is my cat it's 5year old i want the adopter to take good care of it",'ali',"ali@gmail.com",'','italy'],
                [2,"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS_UhVxiWYmdCr1oQrZaBUEPcY8D93Fjocky8DGeRVDsejFFUmGSxlrhfIOin7td0uKetcHdsUkzW-npbafRpoChpBxQRwuIi0sTvNg1wON","cat","British Shorthai","free","he's 2 years old,he dosn't eat cooked food,please take care of him","fayz","fayz@gmail.com","","america"]
               ]; 
let breed_w_anml_available=[[['cat']],[['Sphynx cat','British Shorthai']]]
let countryavlble=['america','italy']
let elimination=[[],[]]
let elimination_elinmination=[]
let elimination_search=[]
let f_r=[]
let pos_user;
//input from sign in and put to adoption
let userinfo=[['username','img','password','email','country','animal','bookmark','cart'],
              ['ali','tomcruise.jpg','ali123','ali@gmail.com','italy',[1],[2],[]],
              ['fayz',"dwaynejohnson.jpg",'fayz123','fayz@gmail.com','america',[2],[1],[]]
             ];
//input from put to addoption
 
/*             functions                      */  //enter f_r in html
function theAnimalCart(whereto,the_text_entered,the_src,the_names,theclass){
  const animal_adoption=div.cloneNode(true)
  animal_adoption.setAttribute('class',theclass)
  animal_adoption.setAttribute('name',the_names)
  const animal_adoption_img=div.cloneNode(true)
  animal_adoption_img.setAttribute('class','animal-adoption_img')
  const animal_adoption_img_img=img.cloneNode(true)
  animal_adoption_img_img.setAttribute('class','animal-adoption_img_img')
  animal_adoption_img_img.setAttribute('src',the_src)
  animal_adoption_img.appendChild(animal_adoption_img_img.cloneNode(true))
  animal_adoption.appendChild(animal_adoption_img.cloneNode(true))
  const bookmark_price=div.cloneNode(true)
  bookmark_price.setAttribute('class','bookmark_price')
  const fa_bookmark_o=i.cloneNode(true)
  fa_bookmark_o.setAttribute('class','bx bx-bookmark')
  fa_bookmark_o.setAttribute('style','font-size:30px')
  const free_price=p.cloneNode(true)
  free_price.setAttribute('class','free_price')
  bookmark_price.appendChild(fa_bookmark_o.cloneNode(true))
  const the_text=document.createTextNode(the_text_entered)
  free_price.appendChild(the_text.cloneNode(true))
  bookmark_price.appendChild(free_price.cloneNode(true))
  animal_adoption.appendChild(bookmark_price.cloneNode(true))
  whereto.appendChild(animal_adoption.cloneNode(true))
}
function countries(){
  //declare the country choose element
    const li_chose_cntry=document.createElement('li')
    li_chose_cntry.setAttribute('class',"countryc countryc_chose")
  //enter the defalt of the countries in html 
    for(let i=0;i < countryavlble.length;i++){
      li_chose_cntry.innerText=countryavlble[i]
      document.querySelector(".dropdown_chose").appendChild(li_chose_cntry.cloneNode(true))
    }
    document.querySelector(".cry_chose").innerText="all countries"
    elimination[1].push(document.querySelector(".cry_chose").innerText)
    const countryc_chose=document.querySelectorAll('.countryc_chose')
  //change choosing country
    for(let i=0;i < countryc_chose.length;i++){
      countryc_chose[i].addEventListener('click',function(){
        let x=document.querySelector(".cry_chose").innerText
        document.querySelector(".cry_chose").innerText=countryc_chose[i].innerText
        countryc_chose[i].innerText=x
        if(elimination[1].length == 0){
        elimination[1].push(document.querySelector(".cry_chose").innerText)
        }
        else{
          elimination[1]=[]
          elimination[1].push(document.querySelector(".cry_chose").innerText)
        }
        final_result_of_elimination()
      })
    }
    final_result_of_elimination()
}
function showAnimalsa(){
  if(this.value == undefined){
    this.value=''
  }
  if(`${this.value}` != ''){
    loop1:
    for(let i=0;i < 2;i++){
      for(let j=0;j < breed_w_anml_available[i].length;j++){
        for(let k=0;k < breed_w_anml_available[i][j].length;k++){
          if(document.querySelector('.search_text').value == breed_w_anml_available[i][j][k] && i == 0){
            for(let s=0;s < breed_w_anml_available[1][j].length;s++){
              elimination_search.push(`${breed_w_anml_available[1][j][s]}`)
            }
            elimination[0]=elimination_search
            break loop1
          }
          if(document.querySelector('.search_text').value == breed_w_anml_available[i][j][k] && i == 1){
            elimination_search.push(`${breed_w_anml_available[i][j][k]}`)
            elimination[0]= elimination_search
              break loop1
          }

          else{
            elimination_search=[]
            elimination[0]=elimination_elinmination
          }
        }
      }
    }
  }
  final_result_of_elimination()
}
function showAnimalsb(){
    const bxparent=document.querySelectorAll('.bxparent')
    const bxson=document.querySelectorAll('.bxson')
    for(let i=0;i < bxson.length;i++){
      bxson[i].addEventListener('click',function(){
        if(`${document.querySelector('.search_text').value}` == ''){
        bxson[i].classList.toggle('bxs-square-rounded')  
      if(bxson[i].classList[bxson[i].classList.length-1] == 'bxs-square-rounded'){
        elimination_elinmination.push(`${bxson[i].nextSibling.innerText}`)
      } 
      if(!(bxson[i].classList[bxson[i].classList.length-1] == 'bxs-square-rounded')){

        for(let j=0;j < elimination_elinmination.length;j++){
          elimination_elinmination=elimination_elinmination.filter(function(arg){return arg != `${bxson[i].nextSibling.innerText}`})
      }  
    } 
    elimination[0]=elimination_elinmination
  }
  final_result_of_elimination()
    })
      
    } 
    
    for(let i=0;i < bxparent.length;i++){
      bxparent[i].addEventListener('click',function(){
        if(`${document.querySelector('.search_text').value}` == ''){
        if(bxparent[i].classList[bxparent[i].classList.length-1] == 'bxs-square-rounded'){
          bxparent[i].classList.remove('bxs-square-rounded')
        }
        else{
          for(let j=1;j < document.querySelector('.vs').childNodes[i].childNodes.length;j++){
            if(document.querySelector('.vs').childNodes[i].childNodes[j].childNodes[0].classList[document.querySelector('.vs').childNodes[i].childNodes[j].childNodes[0].classList.length-1] == 'bxs-square-rounded'){
              for(let k=0;k < elimination_elinmination.length;k++){
                if(elimination_elinmination[k] == document.querySelector('.vs').childNodes[i].childNodes[j].childNodes[1].innerText){
                  elimination_elinmination=elimination_elinmination.filter(function(arg){return arg != `${elimination_elinmination[k]}`})
                  document.querySelector('.vs').childNodes[i].childNodes[j].childNodes[0].classList.remove('bxs-square-rounded')
                }
              }
            }
            elimination_elinmination.push(`${document.querySelector('.vs').childNodes[i].childNodes[j].childNodes[1].innerText}`)
            document.querySelector('.vs').childNodes[i].childNodes[j].childNodes[0].classList.add('bxs-square-rounded')
        }
        bxparent[i].classList.add('bxs-square-rounded')
      }
      elimination[0]=elimination_elinmination
    }
    final_result_of_elimination()
      })
    }
}
function elmntAnimal(){
  const vul=div.cloneNode(true)
  vul.setAttribute('class','vul')
  const Wanimal=div.cloneNode(true)
  Wanimal.setAttribute('class','Wanimal')
  const div_i_p=div.cloneNode(true)
  div_i_p.setAttribute('class','.div_i_p')
  const i_bx_rounded_parent=i.cloneNode(true)
  i_bx_rounded_parent.setAttribute('class',"bx bxparent bx-square-rounded")
  const i_bx_rounded_son=i.cloneNode(true)
  i_bx_rounded_son.setAttribute('class',"bx bxson bx-square-rounded")
  const p_nm_anml=p.cloneNode(true)
  p_nm_anml.setAttribute('class','nm_anml')
  const sd=div.cloneNode(true)
  sd.setAttribute('class','sd')
  const i_chevron_down=i.cloneNode(true)
  i_chevron_down.setAttribute('class','bx bx-chevron-down')
  const Ranimal=div.cloneNode(true)
  Ranimal.setAttribute('class','Ranimal')
  const p_nm_breed=p.cloneNode(true)
  p_nm_breed.setAttribute('class','nm_breed')

  for(let i=0;i < breed_w_anml_available[0].length;i++){
    document.querySelector('.vs').appendChild(vul.cloneNode(true))
    document.querySelector('.vs').childNodes[i].append(Wanimal.cloneNode(true))
    document.querySelector('.vs').childNodes[i].childNodes[0].appendChild(div_i_p.cloneNode(true))
    document.querySelector('.vs').childNodes[i].childNodes[0].childNodes[0].append(i_bx_rounded_parent.cloneNode(true),p_nm_anml.cloneNode(true))
    document.querySelector('.vs').childNodes[i].childNodes[0].appendChild(sd.cloneNode(true))
    document.querySelector('.vs').childNodes[i].childNodes[0].childNodes[1].appendChild(i_chevron_down.cloneNode(true))
    document.querySelector('.vs').childNodes[i].childNodes[0].childNodes[0].childNodes[1].innerText = breed_w_anml_available[0][i][0]
    for(let j=0;j < breed_w_anml_available[1][i].length;j++){
      document.querySelector('.vs').childNodes[i].appendChild(Ranimal.cloneNode(true))
      document.querySelector('.vs').childNodes[i].childNodes[j+1].append(i_bx_rounded_son.cloneNode(true),p_nm_breed.cloneNode(true))
      document.querySelector('.vs').childNodes[i].childNodes[j+1].childNodes[1].innerText = breed_w_anml_available[1][i][j]
    }
  }
}
function final_result_of_elimination(){
  function remove_the_nodes(){
    while(document.querySelector('.main-section-in-animal-adoption').hasChildNodes()){
      document.querySelector('.main-section-in-animal-adoption').removeChild(document.querySelector('.main-section-in-animal-adoption').firstChild)
    }
  }
  remove_the_nodes()
  f_r=[]
  //elimination
  if(elimination[0].length != 0 && elimination[1] == 'all countries'){
    for(let i=0;i < elimination[0].length;i++){
      for(let j=1;j < animalinfo.length;j++){
        if(elimination[0][i] == animalinfo[j][3]){
          f_r.push(animalinfo[j][0])
        }
      }
    }
  }
  if(elimination[0].length != 0 && elimination[1] != 'all countries'){
    for(let i=0;i < elimination[0].length;i++){
      for(let j=1;j < animalinfo.length;j++){
        if(elimination[0][i] == animalinfo[j][3] && elimination[1] == animalinfo[j][9]){
          f_r.push(animalinfo[j][0])
        }
      }
    }
  }
  if(elimination[0].length == 0 && elimination[1] == 'all countries'){
      for(let j=1;j < animalinfo.length;j++){
          f_r.push(animalinfo[j][0])
      }
  }
  if(elimination[0].length == 0 && elimination[1] != 'all countries'){
      for(let j=1;j < animalinfo.length;j++){
        if(elimination[1] == animalinfo[j][9]){
          f_r.push(animalinfo[j][0])
        }
      }
  }
  //execute
  for(let i=0;i < f_r.length;i++){
    theAnimalCart(document.querySelector('.main-section-in-animal-adoption'),`${animalinfo[f_r[i]][4]}`,`${animalinfo[f_r[i]][1]}`,`${f_r[i]}`,'animal-adoption')
  }
}
function popInfo(i_animalinfo){
  const parent_of_info_about_the_animal=div.cloneNode(true)
  parent_of_info_about_the_animal.setAttribute('class','parent_of_info_about_the_animal')
  parent_of_info_about_the_animal.setAttribute('name',i_animalinfo)
  const first_info_about_the_animal=div.cloneNode(true)
  first_info_about_the_animal.setAttribute('class','first_info_about_the_animal')
  const fa_close=i.cloneNode(true)
  fa_close.setAttribute('class','fa fa-close')
  fa_close.setAttribute('style',"font-size: 30px;") 
  const second_info_about_the_animal=div.cloneNode(true) 
  second_info_about_the_animal.setAttribute('class','second_info_about_the_animal')
  const info_about_the_animal=div.cloneNode(true)
  info_about_the_animal.setAttribute('class','info_about_the_animal')
  const info_animal=p.cloneNode(true)
  const text_info_animal=document.createTextNode('this animal is:' +`${animalinfo[i_animalinfo][2]}`)
  info_animal.appendChild(text_info_animal.cloneNode(true))
  info_animal.setAttribute('class','info_animal')
  const info_breed=p.cloneNode(true)
  const text_info_breed=document.createTextNode("it's a:" +`${animalinfo[i_animalinfo][3]}`)
  info_breed.setAttribute('class','info_breed')
  info_breed.appendChild(text_info_breed.cloneNode(true))
  const info_price=p.cloneNode(true)
  const text_info_price=document.createTextNode('this price is:'+`${animalinfo[i_animalinfo][4]}`)
  info_price.appendChild(text_info_price.cloneNode(true))
  info_price.setAttribute('class','info_price')
  const info_description=p.cloneNode(true)
  const text_info_description=document.createTextNode('few words from '+`${animalinfo[i_animalinfo][6]}`+' '+'about his pet:'+`${animalinfo[i_animalinfo][5]}`)
  info_description.appendChild(text_info_description.cloneNode(true))
  info_description.setAttribute('class','info_description')
  const profile_contact=div.cloneNode(true)
  profile_contact.setAttribute('class','profile_contact')
  const img_btn_show_profile=div.cloneNode(true) 
  img_btn_show_profile.setAttribute('class','img_btn_show_profile')
  const img_profile=img.cloneNode(true)
  img_profile.setAttribute('class','img_profile') 
  for(let i=1;i < userinfo.length;i++){
    if(userinfo[i][0] == animalinfo[i_animalinfo][6]){
      img_profile.setAttribute('src',userinfo[i][1])
    }
  }
  img_profile.setAttribute('style','width: 80px;height:100px;border-radius: 50%;overflow: hidden;')
  const show_profile=button.cloneNode(true)
  show_profile.setAttribute('class','show_profile')
  const text_button=document.createTextNode("view the owner's profile")
  show_profile.appendChild(text_button.cloneNode(true))
  img_btn_show_profile.append(img_profile.cloneNode(true),show_profile.cloneNode(true))
  const email_phone=div.cloneNode(true)
  email_phone.setAttribute('class','email_phone')
  const email_info=p.cloneNode(true)
  email_info.setAttribute('class','email_info')
  const text_email=document.createTextNode('you can contact him with this email: '+`${animalinfo[i_animalinfo][7]}`)
  email_info.appendChild(text_email.cloneNode(true))
  const phone_info=p.cloneNode(true)
  phone_info.setAttribute('class','phone_info')
  if(animalinfo[i_animalinfo][8].length == 0){
    const text_phone=document.createTextNode("this user didn't put his phone number")  
    phone_info.appendChild(text_phone.cloneNode(true))
  }
  else{
  const text_phone=document.createTextNode('you can contact him with this email'+`${animalinfo[i_animalinfo][8]}`)
  phone_info.appendChild(text_phone.cloneNode(true))
}  
  email_phone.append(email_info.cloneNode(true),phone_info.cloneNode(true))
  profile_contact.append(img_btn_show_profile.cloneNode(true),email_phone.cloneNode(true))
 
  const third_info_about_the_animal=div.cloneNode(true)
  third_info_about_the_animal.setAttribute('class', 'third_info_about_the_animal')
  for(let i=1;i < userinfo.length;i++){
    if(userinfo[i][0] == animalinfo[i_animalinfo][6]){
      for(let j=0;j < userinfo[i][5].length;j++){
        theAnimalCart(third_info_about_the_animal,`${animalinfo[i_animalinfo][4]}`,`${animalinfo[i_animalinfo][1]}`,`${userinfo[i][5]}`,'animal-adoption2')
        
      }
    }
  }
  const animal_adoption_img=div.cloneNode(true)
  animal_adoption_img.setAttribute('class','animal-adoption_img')
  const animal_adoption_img_img=img.cloneNode(true)
  const bookmark_price=div.cloneNode(true)
  bookmark_price.setAttribute('class','bookmark_price')
  const fa_bookmark_o=i.cloneNode(true)
  fa_bookmark_o.setAttribute('class','fa-bookmark-o')
  fa_bookmark_o.setAttribute('src','font-size:30px;')
  const free_price=p.cloneNode(true)
  free_price.setAttribute('class','free_price')
  
  info_about_the_animal.append(info_animal.cloneNode(true),info_breed.cloneNode(true),info_price.cloneNode(true),info_description.cloneNode(true),profile_contact)
  const img_info_animal=img.cloneNode(true)
  img_info_animal.setAttribute('class','img_info_animal')
  img_info_animal.setAttribute('src',animalinfo[i_animalinfo][1])
  second_info_about_the_animal.append(info_about_the_animal.cloneNode(true),img_info_animal.cloneNode(true))
  first_info_about_the_animal.append(fa_close.cloneNode(true),third_info_about_the_animal.cloneNode(true),second_info_about_the_animal.cloneNode(true))
  parent_of_info_about_the_animal.appendChild(first_info_about_the_animal.cloneNode(true))
  document.querySelector('.parent_of_parent_of_info_about_the_animal').appendChild(parent_of_info_about_the_animal.cloneNode(true))
}
file_sign.addEventListener('change', function(){
  const reader= new FileReader();
  reader.addEventListener('load',function(){
      photo_sign.setAttribute('src',reader.result)
  })
  reader.readAsDataURL(this.files[0])
})
elmntAnimal()
countries()
 /*                       action                                 */
document.querySelector('.search_text').addEventListener('input',showAnimalsa)
showAnimalsb()
const animal_adoption_all=document.querySelectorAll('.animal-adoption')
const animal_adoption_img_all=document.querySelectorAll('.animal-adoption_img')
const third_info_about_the_animal_all=document.querySelectorAll('.third_info_about_the_animal')
for(let i=0;i < animal_adoption_all.length;i++){
    popInfo(animal_adoption_all[i].getAttribute('name'))
    
}
const fa_close_all=document.querySelectorAll('.fa-close')
const parent_of_info_about_the_animal_all=document.querySelectorAll('.parent_of_info_about_the_animal')
const bx_bookmark=document.querySelectorAll('.bx-bookmark')
const show_profile_all=document.querySelectorAll('.show_profile')
const first_info_about_the_animal_all=document.querySelectorAll('.first_info_about_the_animal')
for(let j=0;j < animal_adoption_all.length;j++){
  animal_adoption_img_all[j]
}
for(let i=1;i < animalinfo.length;i++){
  for(let k=0;k < parent_of_info_about_the_animal_all.length;k++){
    if(animalinfo[i][0] == parent_of_info_about_the_animal_all[k].getAttribute('name')){
      parent_of_info_about_the_animal_all[k].style.display='block'
    }
  }
  animal_adoption_all[i].addEventListener('click',function(){
    console.log('blok')
    for(let j=0;j < parent_of_info_about_the_animal_all.length;j++){
      if(parent_of_info_about_the_animal_all[j].getAttribute('name') == animal_adoption_all[i].getAttribute('name')){
        parent_of_info_about_the_animal_all[j].style.display='block'
      }
    }
  })
  fa_close_all[i].addEventListener('click',function(){
    parent_of_info_about_the_animal_all[i].style.display='none'
    first_info_about_the_animal_all[i].childNodes[1].style.display='none'
  })
  bx_bookmark[i].addEventListener('click',function(){
    if(pos_user != undefined){
      bx_bookmark[i].classList.toggle('bxs-bookmark')
      if(bx_bookmark[i].classList[bx_bookmark[i].classList.length-1] == 'bxs-bookmark'){
        userinfo[pos_user][6].push(animal_adoption_all[i].getAttribute('name'))
      }
      else{
        userinfo[pos_user][6].filter(function(){return userinfo[pos_user][6] != bx_bookmark[i]})
      }
    }
    else{
      document.querySelector('.alertb').classList.remove('alertn')
      setTimeout(function(){document.querySelector('.alertb').classList.add('alertn')},2800)
    }
  })
show_profile_all[i].addEventListener('click',function(){
  first_info_about_the_animal_all[i].childNodes[1].style.display='block'
})

}
btnsignin.addEventListener("click", function(){
  fdiv.style.cssText="display:block"
  Pt_Submit_user.addEventListener("click", function(){
      if(photo_sign.getAttribute("src") == 'user.jpg'){
          alert('change the photo')
      }
      if(username.value != 0 && email.value != 0 && password.value != 0 && country.value != 0 && photo_sign.getAttribute("src") != 'user.jpg'){
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
  document.querySelector('#pt_cfrm_user_log_adopt').addEventListener("click", function(){
      compare_tabl=[document.querySelector('#username_l_adopt').value,document.querySelector('#password_l_adopt').value,document.querySelector('#email_l_adopt').value]
      if(document.querySelector('#username_l_adopt').value != 0 && document.querySelector('#password_l_adopt').value != 0 && document.querySelector('#email_l_adopt').value != 0){
          for(var i=0;i < userinfo.length;i++) {
              if(compare_tabl[0]==userinfo[i][0] && compare_tabl[1]==userinfo[i][2] && compare_tabl[2]==userinfo[i][3]){
                  pos_user= i; 
                  compare_tabl=[document.querySelector('#username_l_adopt').value,document.querySelector('#password_l_adopt').value,document.querySelector('#email_l_adopt').value] 
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