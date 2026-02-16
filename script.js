// --- STUDENT DATA (Class 9 - Unique IDs) ---
const studentsData = [
    // --- BOYS (Reg No: 1-9) ---
    { "reg_no": "1", "name": "MUHAMMED SHAMIL M", "class": "Class 9 (Boys)", "marks": 57, "result": "FAILED" },
    { "reg_no": "2", "name": "MUHAMMED HANAN P", "class": "Class 9 (Boys)", "marks": 110, "result": "PASSED" },
    { "reg_no": "3", "name": "SAHAD FARIS C", "class": "Class 9 (Boys)", "marks": 113, "result": "PASSED" },
    { "reg_no": "4", "name": "AHMED AJSAL PP", "class": "Class 9 (Boys)", "marks": 80, "result": "PASSED" },
    { "reg_no": "5", "name": "HISHAM CK", "class": "Class 9 (Boys)", "marks": 57, "result": "FAILED" },
    { "reg_no": "6", "name": "ADNAN K", "class": "Class 9 (Boys)", "marks": 47, "result": "FAILED" },
    { "reg_no": "7", "name": "MUHAMMED JISAN P", "class": "Class 9 (Boys)", "marks": 81, "result": "FAILED" },
    { "reg_no": "8", "name": "MUHAMMED SHIBIN M", "class": "Class 9 (Boys)", "marks": 30, "result": "FAILED" },
    { "reg_no": "9", "name": "MIDLAJ T", "class": "Class 9 (Boys)", "marks": 68, "result": "PASSED" },

    // --- GIRLS (Reg No: 10-32) ---
    { "reg_no": "10", "name": "HUDA AK", "class": "Class 9 (Girls)", "marks": 81, "result": "PASSED" },
    { "reg_no": "11", "name": "RIYA FATHIMA PP", "class": "Class 9 (Girls)", "marks": 101, "result": "PASSED" },
    { "reg_no": "12", "name": "FATHIMA SANHA PP", "class": "Class 9 (Girls)", "marks": 99, "result": "PASSED" },
    { "reg_no": "13", "name": "FATHIMA RAFHA PP", "class": "Class 9 (Girls)", "marks": 107, "result": "PASSED" },
    { "reg_no": "14", "name": "FATHIMA RIYA PP", "class": "Class 9 (Girls)", "marks": 50, "result": "FAILED" },
    { "reg_no": "15", "name": "FATHIMA NIYA EK", "class": "Class 9 (Girls)", "marks": 104, "result": "PASSED" },
    { "reg_no": "16", "name": "FATHIMA SAJA C", "class": "Class 9 (Girls)", "marks": 78, "result": "PASSED" },
    { "reg_no": "17", "name": "FATHIMA NASHVA T", "class": "Class 9 (Girls)", "marks": 79, "result": "PASSED" },
    { "reg_no": "18", "name": "FATHIMA SAMEEHA MV", "class": "Class 9 (Girls)", "marks": 105, "result": "PASSED" },
    { "reg_no": "19", "name": "RAFA FATHIMA T", "class": "Class 9 (Girls)", "marks": 84, "result": "PASSED" },
    { "reg_no": "20", "name": "MURSHIDA C", "class": "Class 9 (Girls)", "marks": 40, "result": "FAILED" },
    { "reg_no": "21", "name": "NAJA FATHIMA C", "class": "Class 9 (Girls)", "marks": 117, "result": "PASSED" },
    { "reg_no": "22", "name": "NISHBA FATHIMA K", "class": "Class 9 (Girls)", "marks": 110, "result": "PASSED" },
    { "reg_no": "23", "name": "MINHA C", "class": "Class 9 (Girls)", "marks": 87, "result": "PASSED" },
    { "reg_no": "24", "name": "FATHIMA HIBA", "class": "Class 9 (Girls)", "marks": 86, "result": "PASSED" },
    { "reg_no": "25", "name": "FATHIMA NAHLA PP", "class": "Class 9 (Girls)", "marks": 90, "result": "PASSED" },
    { "reg_no": "26", "name": "FATHIMA RIYA MV", "class": "Class 9 (Girls)", "marks": 96, "result": "PASSED" },
    { "reg_no": "27", "name": "AYISHA ZIYA K", "class": "Class 9 (Girls)", "marks": 84, "result": "PASSED" },
    { "reg_no": "28", "name": "AMNA VP", "class": "Class 9 (Girls)", "marks": 62, "result": "FAILED" },
    { "reg_no": "29", "name": "AYISHA HANNA", "class": "Class 9 (Girls)", "marks": 88, "result": "PASSED" },
    { "reg_no": "30", "name": "MINHA FATHIMA PP", "class": "Class 9 (Girls)", "marks": 80, "result": "PASSED" },
    { "reg_no": "31", "name": "THANHA SHERIN KP", "class": "Class 9 (Girls)", "marks": 69, "result": "FAILED" },
    { "reg_no": "32", "name": "FATHIMA SHUHADA P", "class": "Class 9 (Girls)", "marks": 73, "result": "PASSED" }
];

// --- HELPER: Calculate Rank based on Class ---
function getRankInClass(student) {
    // 1. Filter students strictly in the same class (Boys vs Girls separated)
    const classMates = studentsData.filter(s => s.class === student.class);
    
    // 2. Sort them by marks (Highest to Lowest)
    classMates.sort((a, b) => b.marks - a.marks);
    
    // 3. Find index of current student (Index + 1 is the Rank)
    const rank = classMates.findIndex(s => s.reg_no === student.reg_no) + 1;
    
    return rank;
}

// --- HELPER: Generate Remarks based on Marks ---
function getRemarks(student) {
    if (student.result === "FAILED") return "Better luck next time. Work hard!";
    
    if (student.marks >= 110) return "Outstanding Performance!";
    if (student.marks >= 95) return "Excellent! Keep it up.";
    if (student.marks >= 80) return "Very Good.";
    if (student.marks >= 60) return "Good.";
    return "Needs Improvement.";
}

// --- MAIN SEARCH FUNCTION ---
function findResult() {
    // 1. Get the Number Typed
    const searchId = document.getElementById('studentId').value.trim();
    
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

    if (!searchId) {
        errorMsg.innerText = "Please enter a Register Number";
        return;
    }

    loadingDiv.classList.remove('hidden');

    setTimeout(() => {
        loadingDiv.classList.add('hidden');

        // Find Student
        const student = studentsData.find(s => s.reg_no === searchId);

        if (student) {
            // Fill Basic Info
            nameDisplay.innerText = student.name;
            regNoDisplay.innerText = student.reg_no;
            classDisplay.innerText = student.class;
            statusDisplay.innerText = student.result;

            // 1. Calculate and Show Rank
            if (student.result === "PASSED") {
                const rank = getRankInClass(student);
                rankDisplay.innerText = rank;
            } else {
                rankDisplay.innerText = "-"; // No rank for failed students
            }

            // 2. Set Remarks
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
            errorMsg.innerText = "Register Number not found!";
        }
    }, 1000);
}