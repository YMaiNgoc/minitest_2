
function addFunction() {
    var img = frm.img.value;
    var pname = frm.pname.value;
    var newPrice = frm.new_up.value;
    var oldPrice = frm.old_up.value;
    var type = frm.type.value;
    var code =frm.code.value;
    var card = '<div class="card" style="width: 18rem; margin:1px;">';
    card += '<img src ='+img+'>';
    card += '<h5 class="card-title">' + pname + '-'+ code+' (' + type + ')</h5>';
    card += '<p class="card-price">' + newPrice + ' VND</p>';
    card += '<p class="old-price" style="line->' + oldPrice + ' VND</p>';
    card += '</div>';
    document.getElementById('content').innerHTML += card;

}