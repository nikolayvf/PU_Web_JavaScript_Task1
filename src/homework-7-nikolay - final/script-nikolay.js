        function checkImage(answer){
            let text = '';
            if(answer == 7){
                console.log('Намерихте Уоли (Waldo)!');
                text = 'Намерихте Уоли (Waldo)!';
                document.getElementById("answer-box").style.backgroundColor="#CADC54";

            }else{
                console.log("Това не е Уоли (Waldo)! Опитайте пак!");
                text = 'Това не е Уоли (Waldo)! Опитайте пак!';
                document.getElementById("answer-box").style.backgroundColor="#F31B19";

            }
            document.getElementById("answer-box").innerHTML=text;
        }

        function checkQuizAnswer(answer){

            switch(answer){
                case 1:{
                    document.getElementById("btn-a").style.backgroundColor='#F31B19';

                    document.getElementById("btn-c").innerHTML='';
                    document.getElementById("btn-d").innerHTML='';
                }break;
                case 2:{

                }break;
                case 3:{
                    document.getElementById("btn-c").style.backgroundColor='#F31B19';

                    document.getElementById("btn-a").innerHTML='';
                    document.getElementById("btn-d").innerHTML='';
                }break;
                case 4:{
                    document.getElementById("btn-d").style.backgroundColor='#F31B19';
                    
                    document.getElementById("btn-a").innerHTML='';
                    document.getElementById("btn-c").innerHTML='';

                }break;
            }
            document.getElementById("btn-b").style.backgroundColor='#F5AC00';
            document.getElementById("btn-b").style.color='#532E07';
        }


