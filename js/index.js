var link;
 function updateLink(x, y) {
     link = "https://api.whatsapp.com/send?phone=" + $('input#number').val() + "&text=" + $('textarea#message').val();
     //  var a = document.getElementById('send'); //or grab it by tagname etc
     //  a.href = link;         
 }
 $("#number, #message").on("change paste keyup", function () {
     updateLink();
 });
 
 function go() {
     // window.location = link;
     if (/^([+])?\d{11,13}$/.test($("#number").val())) {
         window.open(link, '_blank');
     }else
     $('#hint').show(); 
 }
 function generate() {
    // window.location = link;
    if (/^([+])?\d{11,13}$/.test($("#number").val())) {
        // $('#link_details').show(); 
        // $("#link").html(link);
        wsapme_page_link = "https://wsap.me/_pages/home.html?mobile=" + $('input#number').val() + "&text=" + $('textarea#message').val();
        window.open(wsapme_page_link, '_blank');
    }else
    $('#hint').show(); 
}
function copy() {
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Link copied:\n" + copyText.value);
  }
 $('#hint').hide();
 $('#link_details').hide();
 $('#number').on('input', function () {
     if (/^([+])?\d{11,13}$/.test($("#number").val())) {

         $('#number').removeClass('red_text');
         $('#number').addClass('green_text');

         $('#send').removeClass('disable_click');
         $('#send').attr('disabled', false);
         $('#hint').hide();
     } else {

         $('#number').removeClass('green_text');
         $('#number').addClass('red_text');

         $('#send').addClass('disable_click');
         $('#send').attr('disabled', true);

         $('#hint').show();
     }

 });
 