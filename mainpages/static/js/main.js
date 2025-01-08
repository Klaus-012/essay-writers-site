// number of pages
const numberDropdown = document.getElementById('numberDropdown');
for (let i = 1; i <= 40; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    numberDropdown.appendChild(option);
}

// level of paper
const levels = [
    { value: "highschool", text: "High School" },
    { value: "college", text: "College" },
    { value: "undergraduate", text: "Undergraduate" },
    { value: "masters", text: "Masters" },
    { value: "phd", text: "PhD" }
];

const levelDropdown = document.getElementById('levelDropdown');
levels.forEach(level => {
    const option = document.createElement('option');
    option.value = level.value;
    option.textContent = level.text;
    levelDropdown.appendChild(option);
});

// type of paper
const options = [
    { value: "essay", text: "Essay (Any Type)" },
    { value: "article", text: "Article (Any Type)" },
    { value: "assignment", text: "Assignment (Any Type)" },
    { value: "content", text: "Content (Any Type)" },
    { value: "admission", text: "Admission Essay (Any Type)" },
    { value: "bibliography", text: "Annotated Bibliography" },
    { value: "argumentative", text: "Argumentative Essay" },
    { value: "review", text: "Article Review" },
    { value: "book", text: "Book/Movie Review" },
    { value: "plan", text: "Business Plan" },
    { value: "case", text: "Case Study" },
    { value: "coursework", text: "Coursework" },
    { value: "creative", text: "Creative Writing" },
    { value: "critical", text: "Critical Thinking" },
    { value: "dissertation", text: "Dissertation" },
    { value: "chapter", text: "Dissertation Chapter" },
    { value: "report", text: "Lab Report" },
    { value: "math", text: "Math Problem" },
    { value: "rpaper", text: "Research Paper" },
    { value: "rproposal", text: "Research Proposal" },
    { value: "summary", text: "Research Summary" },
    { value: "scholarship", text: "Scholarship Essay" },
    { value: "speech", text: "Speech" },
    { value: "coursework", text: "Coursework" },
    { value: "statistics", text: "Statistics Project" },
    { value: "thesis", text: "Thesis/Thesis Chapter" },
    { value: "other", text: "Other" },
    { value: "presentation", text: "Presentation" },
    { value: "qa", text: "Q&A" },
    { value: "application", text: "Application Paper" },
    { value: "analysis", text: "Analysis" },
    { value: "memo", text: "Memo/Letter" },
    { value: "outline", text: "Outline" },
    { value: "exam", text: "Online Exam" },
    { value: "proofreading", text: "Proofreading/Editing" },
    { value: "brochure", text: "Brochure" }
];

const typeDropdown = document.getElementById('typeDropdown');
options.forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.text;
    typeDropdown.appendChild(option);
});

// deadline
const deadline = [
    { value: "6_hours", text: "6 hours" },
    { value: "12_hours", text: "12 hours" },
    { value: "24_hours", text: "24 hours" },
    { value: "48_hours", text: "48 hours" },
    { value: "3_days", text: "3 days" },
    { value: "5_days", text: "5 days" },
    { value: "7_days", text: "7 days" },
    { value: "1_month", text: "1 month" },
    { value: "2_months", text: "2 months" },
    { value: "3_months", text: "3 months" }
];

const deadlineDropdown = document.getElementById('deadlineDropdown');
deadline.forEach(deadline => {
    const option = document.createElement('option');
    option.value = deadline.value;
    option.textContent = deadline.text;
    deadlineDropdown.appendChild(option);
});