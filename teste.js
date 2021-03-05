export function listChampions(){
    select = document.getElementById('selectElementId');

    for (var i = 0; i<=151; i++){
        var opt = document.createElement('option');
        opt.value = champions[i].name;
        opt.innerHTML = champions[i].name;
        select.appendChild(opt);
    }
}