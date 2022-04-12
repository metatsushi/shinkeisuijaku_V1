// 変数定義
let firstClick = true;
let firstCard;
let firstCardNum;
let secondCard; 
let SecondCardNum;
let countUnit = 0;

//画面が表示されたらカードの表示を消しクリック無効に。
// ボタンもShuffleのみ有効にしStartは押せない仕様に
window.onload = $(function(){
    $(".card").css('opacity','0%');  
    $(".card").css('pointer-events','none');  
    $('.btn.start').prop('disabled',true);

//スタートボタンのクリックイベント
    $(".btn.shuffle").on("click",function(){
         // 順番にトランプを出現させる 
         let i =0;
         setInterval(function(){
                 $('#card'+[i]).css('opacity','100%');
                 i++;
             },50);
        
        // シャッフルのための関数でPanel内のDivの配置順をランダムに並べ替え 
          $(function () {
            shuffleContent($("#panel"));
          });
          $('.btn.start').prop('disabled',false);
          $('.btn.shuffle').prop('disabled',true);
    })
 
 // スタートボタンを押してゲーム開始
     $('.btn.start').on('click',function(){
        // スタートしたらカードがクリックできるように、スタートボタンは押せないように
        $('.card').css('pointer-events','auto');
        $('.btn.start').prop('disabled',true);
    
        // スタートしたらタイマー関数を作動
        startTimer ($('.clock'));

        // トランプを2枚選択し、カードの数値があっているかを判定
        $('.card').on('click', function(){
            
            // 1枚目の処理
            if (firstClick){  
                firstCard = $(this)[0];
                $(this).addClass('flipped');
                firstCardNum = $(this).find('.back').attr('class').split(" ")[2];
                firstClick = false;
                console.log(firstCardNum);
                }
            // 2枚目の処理
            else {
                    secondCard = $(this)[0];
                    $(this).addClass('flipped');
                    secondCardNum = $(this).find('.back').attr('class').split(" ")[2];
                    // 1枚目と2枚目が一致した場合
                    if(firstCardNum == secondCardNum){
                        countUnit++;
                        setTimeout(function(){
                        $(firstCard).css('opacity','0');
                        $(secondCard).css('opacity','0');
                        },500) 
                        console.log(secondCardNum);  
                        
                        // カードが全てなくなった場合
                        if(countUnit == 8){
                            stopTimer();
                            setTimeout(function(){
                                if(sec <40) {
                                    $('.output').append('Great!');
                                }
                                else {
                                    $('.output').append('Try Again');
                                }
                            },1000) 
                        }

                    // 1枚目と2枚目が一致しない場合
                    } else {
                        // カードを裏返す
                        setTimeout(function(){
                            $(firstCard).removeClass('flipped');
                            $(secondCard).removeClass('flipped');
                        }, 500);    
                    }
                    firstClick = true;
                }
        })
    })   

    // シャッフルのための関数
    function shuffleContent(container) {
        let content = container.find(".card");
        let total = content.length;
        content.each(function () {
          content.eq(Math.floor(Math.random() * total)).prependTo(container);
        });
      }

     // タイマーの関数(スタート)
     function startTimer(container){
        sec = 0;
        min = 0;

        testTimer=setInterval(function(){
            sec += 1;     
            if (sec > 59) {
              sec = 0;
              min += 1;
            }
            if (min > 59) {
              min = 0;
              sec = 0;
            }
        
            // 1桁の時も2桁目を0表示する
            sec_number = ('0' + sec).slice(-2);
            min_number = ('0' + min).slice(-2);
            $(container).html('Time:' + min_number + ':' + sec_number);
  
        },1000);
     }

     // タイマーの関数(ストップ)
     function stopTimer(){
        clearInterval(testTimer);
     }     
 
})
 











   // //重複しない1〜16までの乱数を発生
        //     let order =[];
        //     let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        //     let a = arr.length;

        //     while (a) {
        //         let j = Math.floor( Math.random() * a );
        //         let t = arr[--a];
        //         arr[a] = arr[j];
        //         arr[j] = t;
        //     }

        //     arr.forEach(function(value){
        //     order.push(value);
        //     })
        //     console.log(order);