function lastMessageDigit(){
   const senderBranch = document.getElementsByClassName("Branch"); //jednostka rozliczeniowa nadawcy
   const benefBranch = document.getElementsByClassName("Branch2"); //jednostka rozliczeniowa beneficjenta
   const senderInterBranch = document.getElementsByClassName("Sender_no_2"); //jednotka posrednia nadawcy
   const benefInterBranch = document.getElementsByClassName("Benef_no_2"); //jednostka posrednia beneficjenta
   const messageDigits = $(".Message  option:selected"); // wartosc przechowywana z pola tabeli o nazwie klasy {"Message"}
   
      
   for(let i=0; i<messageDigits.length;i++){
      const tempMessage = messageDigits; 
      
      let tempX = senderBranch[i];
      let tempY = benefBranch[i];
      let tempZ = senderInterBranch[i];
      let tempW = benefInterBranch[i];
      let digits = messageDigits[i].value.substr(0,2);
      
      //digits = tempMessage.value;
            
      let commNa = '';
      let commDo = '';
      
      if(tempX == tempZ){
         commNa += 1;
      }
      else if (tempX == '' || tempX == null){
         commNa = 0;
      }
      else{
         commNa = 2;
      }
      
      if(tempY == tempW){
         commDo = 1;
      }
      else if(tempY == '' || tempY == null){
         commDo = 0;
      }
      else{
         commDo = 2;
      }
     
      if(commNa == 0 && commDo == 0){
         digits += "0";
         messageDigits[i].setAttribute("value", digits);
      }
      else if(commNa == 1 && commDo == 1){
         digits += "1";
         messageDigits[i].setAttribute("value", digits);
         //console.log($(digits).prop("value", function() { return digits }));
      } 
      else if(commNa == 1 && commDo == 2 ){
         digits += "2";
         messageDigits[i].setAttribute("value", digits);;
      }
      else if(commNa == 2 && commDo == 1){
         digits += "3";
         messageDigits[i].setAttribute("value", digits);
      }
      else if(commNa == 2 && commDo == 2){
         digits += "4";
         messageDigits[i].setAttribute("value", digits);
        // $(digits).prop('value', function() { return digits });
       //  console.log($(digits).prop("value", function() { return digits }));
      }
   }
}