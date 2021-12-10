
        const DerivativeName = "Derivative";
        const DerativeAnswer = 0;
        const IntegralName = "Integral";
        const IntegralAnswer = 1;
        const RootsName = "Roots";
        const RootsAnswerOne = 1;
        const RootsAnswerTwo = 3;
        const ExpressionsName = "Expressions";
        const ExpressionsAnswerOne = 1;
        const ExpressionsAnswerTwo = 2;
        const OwnAnswerName = "OwnAnswer";
        const OwnAnswerAnswer = "16";

        const myForm = document.forms["quiz"];
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.addEventListener("click", validateForm);
          function validateForm() {
            let sum = 0;
            let b=true
            const taskAssesment = 5;
            let butns = myForm.elements[DerivativeName];
            for (let i = 0; i < butns.length; i++) {
                console.log(butns[i].checked)
                if (butns[i].checked) {
                    b=false
                    if (i == DerativeAnswer) 
                    sum += taskAssesment; 
                    else 
                    sum -= taskAssesment;
                }
            }
            if (b) sum-=taskAssesment;
                b=true
            butns = myForm.elements[IntegralName];
            for (let i = 0; i < butns.length; i++) {
                console.log(butns[i].checked)
                if (butns[i].checked) {
                    b=false
                    if (i == IntegralAnswer) 
                    sum += taskAssesment; 
                    else 
                    sum -= taskAssesment;
                }
            }
            if (b) sum-=taskAssesment;
                b=true
            
            let k=0
            butns = myForm.elements[RootsName];
            for (let i = 0; i < butns.length; i++) {
                if (butns[i].checked) {
                    b=false
                    if (i == RootsAnswerOne || i == RootsAnswerTwo) {
                        sum += taskAssesment / 2;
                        k+=1
                    }
                    
                    else {
                        sum -= taskAssesment+k*(taskAssesment / 2)
                        break
                    }
                }
            }
            if (b) sum-=taskAssesment;
                b=true
                k=0
            butns = myForm.elements[ExpressionsName];
            for (let i = 0; i < butns.length; i++) {
                if (butns[i].checked) {
                    b=false
                    if (i == ExpressionsAnswerOne || i == ExpressionsAnswerTwo) {
                    sum += taskAssesment / 2;
                    k+=1;
                    }
                    else {
                        sum -= taskAssesment+k*(taskAssesment / 2)
                        break
                    };
                }
            }
            if (b) sum-=taskAssesment;
                b=true
            let answer = myForm.elements[OwnAnswerName];
            if (answer.value.trim()===OwnAnswerAnswer) {
                sum += taskAssesment;
            } else {
                sum -= taskAssesment;
            }
            if (sum < 0)  {
                sum = 0;
            }
            alert('Ваш результат - ' + sum*4 + '%');
        }
