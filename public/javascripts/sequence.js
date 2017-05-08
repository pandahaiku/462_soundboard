window.AudioContext = window.AudioContext || window.webkitAudioContext;
var sequence = [];
var count = 0;

function seq(value)
{
    console.log(value);
    sequence.push(value);
    console.log(sequence);
    count++;
}

function playseq()
{
    var i = 0;
    function seqLoop(){           
        setTimeout(function () { 
            if(sequence[i]==1){pA1();}
            else if(sequence[i]==2){pA2();}
            else if(sequence[i]==3){pA3();}
            else if(sequence[i]==4){pA4();}
            else if(sequence[i]==5){pA5();}
            else if(sequence[i]==6){pA6();}
            else if(sequence[i]==7){pA7();}
            else if(sequence[i]==8){pA8();}
            else if(sequence[i]==9){pA9();}
            else if(sequence[i]==10){pA10();}
            else if(sequence[i]==11){pA11();}
            else if(sequence[i]==12){pA12();}
            else if(sequence[i]==13){pA13();}
            else if(sequence[i]==14){pA14();}
            else if(sequence[i]==15){pA15();}
            else if(sequence[i]==16){pA16();}   
            i++;                     
            if (i < count) {            
                seqLoop();            
            }
            else if(i == count)
            {
                sequence = [];
                count = 0;
            }                     
         }, 750)
    }
    
    if(sequence[i]==1){pA1();}
    else if(sequence[i]==2){pA2();}
    else if(sequence[i]==3){pA3();}
    else if(sequence[i]==4){pA4();}
    else if(sequence[i]==5){pA5();}
    else if(sequence[i]==6){pA6();}
    else if(sequence[i]==7){pA7();}
    else if(sequence[i]==8){pA8();}
    else if(sequence[i]==9){pA9();}
    else if(sequence[i]==10){pA10();}
    else if(sequence[i]==11){pA11();}
    else if(sequence[i]==12){pA12();}
    else if(sequence[i]==13){pA13();}
    else if(sequence[i]==14){pA14();}
    else if(sequence[i]==15){pA15();}
    else if(sequence[i]==16){pA16();}
    if(count == 1)
    {
        sequence = [];
        count = 0;
    }
    else
    {
        i++ 
        seqLoop();
    }

}