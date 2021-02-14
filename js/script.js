const searchwrapper = document.querySelector(".searchbar");
const inputbox = searchwrapper.querySelector("input");
const suggestionbox = document.querySelector(".autocom-searchbox");

inputbox.onkeyup =(e)=>{
      let userdata = e.target.value;
      let emptyarray = [];
      if(userdata){
            emptyarray = suggestions.filter((data)=>{
                return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
            });
            emptyarray = emptyarray.map((data)=>{
                return data = '<li>'+ data + '</li>';
            });
            console.log(emptyarray);
            searchwrapper.classList.add("active");
            showSuggestions(emptyarray);
            let alllist = suggestionbox.querySelectorAll("li");
            for(let i=0; i < alllist.length; i++) {
                  alllist[i].setAttribute("onclick" , "select(this)");
            }
      }else{
            searchwrapper.classList.remove("active");
      }
      
}

function select(element){
      let selectuserdata = element.textContent;
      inputbox.value = selectuserdata;
}

function showSuggestions(list){
      let listdata;
      if(!list.length){
           uservalue = inputbox.value;
           listdata = '<li>' + uservalue + '</li>';
      }else{
            listdata = list.join('');
      }
      suggestionbox.innerHTML = listdata;
}

