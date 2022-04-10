$(function(){
    $(".card").css('left','-100%');  

//スタートボタンのクリックイベント
    $(".btn").on("click",function(){
         $(".btn").prop("disabled",true);
    //シャッフルアルゴリズムで重複しない1〜16までの乱数をを発生
        let order =[];
        let arr =[1,2,3,4];
        let a = arr.length;

        while (a) {
            let j = Math.floor( Math.random() * a );
            let t = arr[--a];
            arr[a] = arr[j];
            arr[j] = t;
        }

        arr.forEach(function(value){
        order.push(value);
        })
        console.log(order);

    // できた乱数を使ってランダムにトランプを配置
    let fn= function(){
        $('#card'+order[i]).css({
            'top':50,
            'left':i*200    
        });
        i++;
        h++;
    };
    let tm =100;
    let i =0;
    let h =1;
     setInterval(fn,tm);
    })
 

 // トランプを2枚選択し、カードの数値があっているかを判定
    let cardNum =new Array();
    
    $('.card').on('click', function(){
        if ($(this).hasClass('first-click') == false) {
            // 初回判定
            $(this).addClass('first-click');
            $(this).toggleClass('flipped');
        } else {
                $(this).on('click',function(){
                return false;
                 })
             }
          
        let num = $(this).find('.back').attr('class').split(" ")[2];
        console.log(num);
        cardNum.push(num);
        console.log(cardNum);

        when

        if(cardNum[0]==cardNum[1]){
            alert("good");
        }else {
            alert("bad");
        }
        
    })
        

    // }
        

})


 