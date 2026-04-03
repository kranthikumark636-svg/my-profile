function chat() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let output = "";

    if (input.includes("hello")) {
        output = "Hi Kranthi! 😊";
    } 
    else if (input.includes("notes")) {
        output = "Check your class group or library!";
    }
    else if (input.includes("exam")) {
        output = "Prepare well and revise daily!";
    }
    else if (input.includes("cgpa")) {
        output = "Use the CGPA calculator below!";
    }
    else {
        output = "Sorry, I don't understand 😅";
    }

    document.getElementById("chatOutput").innerText = output;
}

function calculate() {
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);

    if (isNaN(s1) || isNaN(s2)) {
        document.getElementById("result").innerText = "Please enter valid GPA values!";
        return;
    }

    let cgpa = (s1 + s2) / 2;

    document.getElementById("result").innerText = "Your CGPA: " + cgpa.toFixed(2);
}
