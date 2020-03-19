function thething(){


    let list = document.getElementById('text1').value.split('\n');
    let out = document.getElementById('text2');
    let char = document.getElementById('split').value;
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    var newlist = [];
    // console.log(list.length);
    for(var i = 0; list.length > i;i++){
        var e = list[i];
        if(e != null){
            console.log('15');
            if(right.checked){
                console.log('rigjt');
            newlist.push(e.split(char)[1] + '');
            } else if (left.checked){
                console.log('left');
                newlist.push(e.split(char)[0] + '');
            }
            // console.log(e.split('-')+ '');
        }
    }
    // document.getElementById('text1').value = '';
    document.getElementById('text2').value = newlist.join("\n");
    // console.log(newlist);

    
}


 