// function soltou(tecla){
//     console.log(tecla.key);
//     console.log('Teclou Shift?' + tecla.shiftKey);
//     console.log('Teclou Contrl?' + tecla.ctrlKey);
//     console.log('Teclou Alt?' + tecla.altKey);
//     console.log("------")
// }


function adicionar() {
   let item = document.getElementById("item").value;
   
   if (item !="") {
      let list = document.getElementById("lista").innerHTML;
      list += "<li>" + item + "</li>";
      document.getElementById("lista").innerHTML = list;
      document.getElementById("item").value = null;
   } else {
      alert("Digite uma tarefa!");
   }
}








