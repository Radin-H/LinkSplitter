function thething(){


    let list = document.getElementById('text1').value.split('\n');
    let out = document.getElementById('text2');
    let char = document.getElementById('split').value;
    let z = document.getElementById('0').value;
    let o = document.getElementById('1').value;

    var newlist = [];
    // console.log(list.length);
    for(var i = 0; list.length > i;i++){
        var e = list[i];
        if(e != null){
            if(o == 0){
            newlist.push(e.split(char)[1] + '');
            } else{
                newlist.push(e.split(char)[0] + '');
            }
            // console.log(e.split('-')+ '');
        }
    }
    // document.getElementById('text1').value = '';
    document.getElementById('text2').value = newlist.join("\n");
    // console.log(newlist);

    
}


 