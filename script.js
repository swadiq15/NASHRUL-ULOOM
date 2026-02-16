// --- STUDENT DATA (Class 9) ---
const studentsData = [
    // --- BOYS (Prefix: B) ---
    { "reg_no": "B1", "name": "MUHAMMED SHAMIL M", "class": "Class 9 (Boys)", "marks": 57, "result": "PASSED" },
    { "reg_no": "B2", "name": "MUHAMMED HANAN P", "class": "Class 9 (Boys)", "marks": 110, "result": "PASSED" },
    { "reg_no": "B3", "name": "SAHAD FARIS C", "class": "Class 9 (Boys)", "marks": 113, "result": "PASSED" },
    { "reg_no": "B4", "name": "AHMED AJSAL PP", "class": "Class 9 (Boys)", "marks": 80, "result": "PASSED" },
    { "reg_no": "B5", "name": "HISHAM CK", "class": "Class 9 (Boys)", "marks": 57, "result": "PASSED" },
    { "reg_no": "B6", "name": "ADNAN K", "class": "Class 9 (Boys)", "marks": 47, "result": "PASSED" },
    { "reg_no": "B7", "name": "MUHAMMED JISAN P", "class": "Class 9 (Boys)", "marks": 81, "result": "PASSED" },
    { "reg_no": "B8", "name": "MUHAMMED SHIBIN M", "class": "Class 9 (Boys)", "marks": 30, "result": "FAILED" },
    { "reg_no": "B9", "name": "MIDLAJ T", "class": "Class 9 (Boys)", "marks": 68, "result": "PASSED" },

    // --- GIRLS (Prefix: G) ---
    { "reg_no": "G1", "name": "HUDA AK", "class": "Class 9 (Girls)", "marks": 81, "result": "PASSED" },
    { "reg_no": "G2", "name": "RIYA FATHIMA PP", "class": "Class 9 (Girls)", "marks": 101, "result": "PASSED" },
    { "reg_no": "G3", "name": "FATHIMA SANHA PP", "class": "Class 9 (Girls)", "marks": 99, "result": "PASSED" },
    { "reg_no": "G4", "name": "FATHIMA RAFHA PP", "class": "Class 9 (Girls)", "marks": 107, "result": "PASSED" },
    { "reg_no": "G5", "name": "FATHIMA RIYA PP", "class": "Class 9 (Girls)", "marks": 50, "result": "PASSED" },
    { "reg_no": "G6", "name": "FATHIMA NIYA EK", "class": "Class 9 (Girls)", "marks": 104, "result": "PASSED" },
    { "reg_no": "G7", "name": "FATHIMA SAJA C", "class": "Class 9 (Girls)", "marks": 78, "result": "PASSED" },
    { "reg_no": "G8", "name": "FATHIMA NASHVA T", "class": "Class 9 (Girls)", "marks": 79, "result": "PASSED" },
    { "reg_no": "G9", "name": "FATHIMA SAMEEHA MV", "class": "Class 9 (Girls)", "marks": 105, "result": "PASSED" },
    { "reg_no": "G10", "name": "RAFA FATHIMA T", "class": "Class 9 (Girls)", "marks": 84, "result": "PASSED" },
    { "reg_no": "G11", "name": "MURSHIDA C", "class": "Class 9 (Girls)", "marks": 40, "result": "PASSED" },
    { "reg_no": "G12", "name": "NAJA FATHIMA C", "class": "Class 9 (Girls)", "marks": 117, "result": "PASSED" },
    { "reg_no": "G13", "name": "NISHBA FATHIMA K", "class": "Class 9 (Girls)", "marks": 110, "result": "PASSED" },
    { "reg_no": "G14", "name": "MINHA C", "class": "Class 9 (Girls)", "marks": 87, "result": "PASSED" },
    { "reg_no": "G15", "name": "FATHIMA HIBA", "class": "Class 9 (Girls)", "marks": 86, "result": "PASSED" },
    { "reg_no": "G16", "name": "FATHIMA NAHLA PP", "class": "Class 9 (Girls)", "marks": 90, "result": "PASSED" },
    { "reg_no": "G17", "name": "FATHIMA RIYA MV", "class": "Class 9 (Girls)", "marks": 96, "result": "PASSED" },
    { "reg_no": "G18", "name": "AYISHA ZIYA K", "class": "Class 9 (Girls)", "marks": 84, "result": "PASSED" },
    { "reg_no": "G19", "name": "AMNA VP", "class": "Class 9 (Girls)", "marks": 62, "result": "PASSED" },
    { "reg_no": "G20", "name": "AYISHA HANNA", "class": "Class 9 (Girls)", "marks": 88, "result": "PASSED" },
    { "reg_no": "G21", "name": "MINHA FATHIMA PP", "class": "Class 9 (Girls)", "marks": 80, "result": "PASSED" },
    { "reg_no": "G22", "name": "THANHA SHERIN KP", "class": "Class 9 (Girls)", "marks": 69, "result": "PASSED" },
    { "reg_no": "G23", "name": "FATHIMA SHUHADA P", "class": "Class 9 (Girls)", "marks": 73, "result": "PASSED" }
];

// --- HELPER: Calculate Rank based on Class ---
function getRankInClass(student) {
    const classMates = studentsData.filter(s => s.class === student.class);
    classMates.sort((a, b) => b.marks - a.marks);
    const rank = classMates.findIndex(s => s.reg_no === student.reg_no) + 1;
    return rank;
}

// --- HELPER: Generate Remarks ---
function getRemarks(student) {
    if (student.result === "FAILED") return "Better luck next time. Work hard!";
    
    if (student.marks >= 110) return "Outstanding Performance!";
    if (student.marks >= 95) return "Excellent! Keep it up.";
    if (student.marks >= 80) return "Very Good.";
    if (student.marks >= 60) return "Good.";
    return "Needs Improvement.";
}

// --- MAIN SEARCH FUNCTION (NEW LOGIC) ---
function findResult() {
    // 1. Get the Number Typed
    const inputNumber = document.getElementById('studentId').value.trim();
    
    // 2. Get Selected Gender (B or G)
    const genderPrefix = document.querySelector('input[name="gender"]:checked').value;
    
    const resultDiv = document.getElementById('resultDisplay');
    const loadingDiv = document.getElementById('loadingSpinner');
    const errorMsg = document.getElementById('errorMsg');

    // UI Elements
    const nameDisplay = document.getElementById('studentName');
    const regNoDisplay = document.getElementById('regNo');
    const classDisplay = document.getElementById('studentClass');
    const rankDisplay = document.getElementById('classRank');
    const statusDisplay = document.getElementById('status');
    const statusBox = document.getElementById('statusBox');
    const remarksDisplay = document.getElementById('remarks');

    resultDiv.classList.add('hidden');
    loadingDiv.classList.add('hidden');
    errorMsg.innerText = '';

    if (!inputNumber) {
        errorMsg.innerText = "Please enter Register Number";
        return;
    }

    // 3. Combine Gender + Number (e.g., "B" + "1" = "B1")
    const searchId = genderPrefix + inputNumber;

    loadingDiv.classList.remove('hidden');

    setTimeout(() => {
        loadingDiv.classList.add('hidden');

        // Find Student
        const student = studentsData.find(s => s.reg_no === searchId);

        if (student) {
            // Fill Basic Info
            nameDisplay.innerText = student.name;
            regNoDisplay.innerText = inputNumber; // Show just the number (cleaner)
            classDisplay.innerText = student.class;
            statusDisplay.innerText = student.result;

            // 1. Rank
            if (student.result === "PASSED") {
                const rank = getRankInClass(student);
                rankDisplay.innerText = rank;
            } else {
                rankDisplay.innerText = "-";
            }

            // 2. Remarks
            remarksDisplay.innerText = getRemarks(student);

            // 3. Status Styling
            statusBox.className = "result-box status-box"; 
            if (student.result === "PASSED") {
                statusBox.classList.add("status-pass");
            } else {
                statusBox.classList.add("status-fail");
            }

            resultDiv.classList.remove('hidden');
        } else {
            // Customized Error Message
            const groupName = genderPrefix === "B" ? "Boys" : "Girls";
            errorMsg.innerText = `Result not found for Roll No: ${inputNumber} in ${groupName}`;
        }
    }, 1000);
}