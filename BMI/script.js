// form par event ote hai bahut sare concept hote hai , abhi hum discuss nahi karenge isse. Event Bubbling OR capturing

// INPUT se value kaise niklegi ? ye event ke through hi niklegi 
// 2nd input weight bhi same hai Label se value nikalni hai


// result abhi nahi dikh ra BYDEFEFAULT 
// but hum DOM mai ise add karenge jab result ayyega


// sabse phele ? iss form ko hi select karna padega? kyu? 
// kyuki iss form k ander hi submit button hai  ==> calculate jo button hai and yahan 'EVENT' hoga vo submit type hoga


const form = document.querySelector('form');
// console.log(form);

//this usecase will goive you EMPTY values
// const form = document.querySelector('#height');

let height;
let weight;
let results;
let recommendation;


// FORM jab bhi submit hota hai hai to vo , POST or GET type se submit hota hai, and uski value URL mai ya fir server mai chli jati hai usko humme rookna hota hai, kyuki server par to bhej nahi rahe , TO DEFAULT action of form rook lo yahan par hi,

// iske liye EVENTS ke upper ek METHOD milta hai humme : 

form.addEventListener('submit', function(e){
    console.log("clicked");
    e.preventDefault();

    // ab humme height or weight chahiye , to please dhyaan rakhe ki form k ander aakr ye select kare.

    // document.querySelector('#height').value;  // ye value humme STRING MAI MILEGI, to we know how to convert string into INT. by pareseInt()

    // const height = parseInt(document.querySelector('#height').value) ; // but abhi yahan par checking ni ki hai ki string mai koi character na kih de ye sab baad mai karenege.

     height = parseInt(document.querySelector('#height').value) ;

    // const weight = parseInt(document.querySelector('#weight').value);
     weight = parseInt(document.querySelector('#weight').value);

    // Let's discuss, agar aapne ye height,weight aapne form ke ander select kiya ya fir bahar select kiya ? 
    // Actual mai hum jab submit karre (yani ki uss SUBMIT event par value lena chah rahe hai), Agar aap form ke bahar lenge or jaise hi PAGE LOAD HOGA SCRIPT TO RUN HOGYI HAI , TO FORM EMPTY VALUE KO LELEGA .

    // ye bhi USECASE ho skta hai but yahan nahi hai 

    // const results = document.querySelector('#results');
     results = document.querySelector('#results');

    recommendation = document.querySelector('#recommendation');



    // ye sirf ek element hai to no parrseInt 

    /// Let's see some checks
    // height EMPTY na ho, nahi negative value, NAN bhu ni honi chahiye, yahan par DO technique hai 
    // OLD : HEIGHT != NaN
    // RECOMENDED : isNaN(height), agar height NaN hogi it will return true , nahi to false.



    if(isNaN(height) && isNaN(weight)){
        results.innerHTML = '';
        recommendation.innerHTML = `<span>Give value in Input fields</span>`;
        console.log("Empty values")
    }
    else {


        if(height === '' || height < 0 || isNaN(height) || height < 60){
            console.log("height not given")
        results.innerHTML = `Please give a valid height :${height}`;
        // results.innerHTML = '';
        recommendation.innerHTML = '';
        
    }
    else if(weight === '' || weight < 0 || isNaN(weight) ){
        console.log("weight not given")
        results.innerHTML = `Please give a valid weight :${weight}`;
        console.log(results.innerHTML)
        // results.innerHTML = '';
        recommendation.innerHTML = '';
    }
    else{
        // to bmi calculate kardo
        console.log("bmi calculate hogya bhai")

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // ese baki sab FORMULA VALE KAAM HOJAYENGE

        // show the results
        results.innerHTML = `<span> BMI: ${bmi}</span>`;
        console.log("answer to ana chahiye");


        

        if(bmi < 18.6 && bmi > 10){
            console.log("bmi kam hai")
            recommendation.innerHTML = `<span> :- You are under Weight</span>`;
        }
        else if( bmi <= 24.9 && bmi >= 18.6){
            console.log("bmi normal")
            recommendation.innerHTML = `<span> :- Your ${bmi} is in Normal range </span>`;
        }
        else if(bmi > 24.9 && bmi <= 40){
            console.log("Motapa")
            recommendation.innerHTML = `<span> :- You are Overweight</span>`;
        }
        else{
            console.log("7")
            recommendation.innerHTML = `<span> :- Please, check your values.</span>`;
        }
    }}

    

    // let reset = document.querySelector('#reset');
    

    // reset.addEventListener('click', ()=> {

    //         height.value = '';
    //         weight.value = '';
    //         results.innerHTML = '';
    //         recommendation.innerHTML = '';

    //     })

    
    // results.innerHTML = `${height}`; // ye overwrite krra hai tabhi direct NaN dikh ra hai.
})


    


