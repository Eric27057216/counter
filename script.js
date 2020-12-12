const max = 10
const min = 0

function isLimit(){
  var num = $('#input1').val()
  if((num >= max) || (num <= min)){
    $("#input1").addClass('disabled')
  }else{
    $("#input1").removeClass('disabled')
  }
}

// 減號按鈕
$(".btn-mi").on("click", function(){
  var input1 = $("#input1")
  var num = parseInt(input1.val())
  if(num > min){
    num--
    $('#input1').val(num)
  }
  isLimit()
})

// 加號按鈕
$(".btn-pl").on("click", function(){
  var input1 = $("#input1")
  var num = parseInt(input1.val())
  if(num < max){
    num++
    $('#input1').val(num)
  }
  isLimit()
})

isLimit()