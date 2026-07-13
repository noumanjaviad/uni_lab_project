// Iqra University Vaccination Project Dashboard Script
document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // 1. RAW DATASET (50 Students Extracted from Excel)
    // ----------------------------------------------------
    let surveyData = [
        { "id": "1", "name": "Hoorain Fatima", "location": "Iqra University", "dept": "CS", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "2", "name": "Fatima Nawaz", "location": "Iqra University", "dept": "AI", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "3", "name": "Iqra Bashir", "location": "Iqra University", "dept": "BBA", "vax": "No", "covid": "No", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "4", "name": "Sidra Zahoor", "location": "Iqra University", "dept": "BBA", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "5", "name": "Dr. Kishwar Sultana", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "6", "name": "Dr. Maria Mir", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "7", "name": "Najia Shabbir", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "8", "name": "Manahil Mukhtar", "location": "Iqra University", "dept": "BFD", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "9", "name": "Manahil Azhar", "location": "Iqra University", "dept": "BFD", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "10", "name": "Areeba Naveed", "location": "Iqra University", "dept": "AI", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "11", "name": "Shehwana Khursheed", "location": "Iqra University", "dept": "CS", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "12", "name": "Hafeez Azhar", "location": "Iqra University", "dept": "CS", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "13", "name": "Raheel Hussain", "location": "Iqra University", "dept": "BBA", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "14", "name": "Shahanullah", "location": "Iqra University", "dept": "Pharm-D", "vax": "No", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "15", "name": "Muhammad Ali", "location": "Iqra University", "dept": "Pharm-D", "vax": "No", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "16", "name": "Muhammad Abdullah", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "17", "name": "Muhammad Umair", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "18", "name": "Muhammad Hamza", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "19", "name": "Rashid Hussain", "location": "Iqra University", "dept": "MBA", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "20", "name": "Waqas Ali", "location": "Iqra University", "dept": "CS", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "21", "name": "Fatima Noor", "location": "Iqra University", "dept": "BBA", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "22", "name": "Uzma Shah", "location": "Iqra University", "dept": "BFD", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "23", "name": "Lariab Wali", "location": "Iqra University", "dept": "AI", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "24", "name": "Sajid Hussain", "location": "Iqra University", "dept": "IR", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "25", "name": "Akbar Shah", "location": "Iqra University", "dept": "IR", "vax": "Not Sure", "covid": "Not Sure", "safety": "Agree", "source": "Doctors", "recommend": "Maybe", "reason": "Side Effects" },
        { "id": "26", "name": "Aina Khan", "location": "Iqra University", "dept": "BFD", "vax": "Yes", "covid": "Partially", "safety": "Agree", "source": "Doctors", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "27", "name": "Alina Wajahad", "location": "Iqra University", "dept": "BBA", "vax": "Yes", "covid": "Partially", "safety": "Agree", "source": "Doctors", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "28", "name": "Samia Sadaf", "location": "Iqra University", "dept": "Social Sciences", "vax": "Yes", "covid": "Partially", "safety": "Agree", "source": "Doctors", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "29", "name": "Fiza Shahzad", "location": "Iqra University", "dept": "Pharm-D", "vax": "Not Sure", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Maybe", "reason": "Side Effects" },
        { "id": "30", "name": "Maryam Kamran", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "News", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "31", "name": "Amna Komal", "location": "Iqra University", "dept": "Pharm-D", "vax": "Not Sure", "covid": "No", "safety": "Agree", "source": "Social Media", "recommend": "Maybe", "reason": "Side Effects" },
        { "id": "32", "name": "Sharoon Rohail", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Not Needed" },
        { "id": "33", "name": "Usman Khan", "location": "Iqra University", "dept": "Pharm-D", "vax": "Not Sure", "covid": "Yes", "safety": "Strongly Agree", "source": "Doctors", "recommend": "Yes", "reason": "Not Needed" },
        { "id": "34", "name": "Asia Parveen", "location": "Iqra University", "dept": "CS", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "35", "name": "Ali Ghani", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Partially", "safety": "Strongly Agree", "source": "Family", "recommend": "Yes", "reason": "Not Needed" },
        { "id": "36", "name": "Shahnaz Ghous", "location": "Iqra University", "dept": "MLT", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Family", "recommend": "Maybe", "reason": "Side Effects" },
        { "id": "37", "name": "Nayab Tariq", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Doctors", "recommend": "Yes", "reason": "Not Needed" },
        { "id": "38", "name": "Nimra Hadi", "location": "Iqra University", "dept": "Pharm-D", "vax": "Not Sure", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "39", "name": "Zia Butt", "location": "Iqra University", "dept": "Pharm-D", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "40", "name": "Abdul Razzaq", "location": "Iqra University", "dept": "HND", "vax": "Yes", "covid": "No", "safety": "Agree", "source": "Family", "recommend": "Maybe", "reason": "Side Effects" },
        { "id": "41", "name": "Asif Ali", "location": "Iqra University", "dept": "BBA", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "42", "name": "Insha Saleem", "location": "Iqra University", "dept": "BS English", "vax": "No", "covid": "No", "safety": "Disagree", "source": "Social Media", "recommend": "No", "reason": "Side Effects" },
        { "id": "43", "name": "Samia Manzoor", "location": "Iqra University", "dept": "BBA", "vax": "Yes", "covid": "Partially", "safety": "Agree", "source": "News", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "44", "name": "I.A Mian", "location": "Iqra University", "dept": "CS", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Doctors", "recommend": "Yes", "reason": "Not Needed" },
        { "id": "45", "name": "Bilal Ansir", "location": "Iqra University", "dept": "SE", "vax": "Yes", "covid": "Partially", "safety": "Agree", "source": "Doctors", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "46", "name": "Umme Qandeel", "location": "Iqra University", "dept": "SE", "vax": "Yes", "covid": "Yes", "safety": "Strongly Agree", "source": "Family", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "47", "name": "Zunaira Iqbaal", "location": "Iqra University", "dept": "SE", "vax": "No", "covid": "No", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "48", "name": "Anam Riaz", "location": "Iqra University", "dept": "SE", "vax": "No", "covid": "Yes", "safety": "Strongly Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" },
        { "id": "49", "name": "Hammad Asif", "location": "Iqra University", "dept": "SE", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "News", "recommend": "Maybe", "reason": "Side Effects" },
        { "id": "50", "name": "Shahzaib Ali", "location": "Iqra University", "dept": "SE", "vax": "Yes", "covid": "Yes", "safety": "Agree", "source": "Social Media", "recommend": "Yes", "reason": "Side Effects" }
    ];

    // Chart.js references for destruction/creation
    let charts = {};

    // ----------------------------------------------------
    // 2. SIDEBAR TAB ROUTING
    // ----------------------------------------------------
    const navLinks = document.querySelectorAll(".nav-link");
    const tabContents = document.querySelectorAll(".tab-content");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute("data-tab");

            // Update active menu link
            document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
            link.parentElement.classList.add("active");

            // Update tab page display
            tabContents.forEach(tab => {
                tab.classList.remove("active");
                if (tab.id === targetTab) {
                    tab.classList.add("active");
                }
            });

            // Special tab initialization
            if (targetTab === "dashboard") {
                // Resize or recreate charts to fit newly visible container
                setTimeout(initializeCharts, 100);
            }
            if (targetTab === "rawdata") {
                renderTable();
            }
        });
    });

    // ----------------------------------------------------
    // 3. OUTLINE SCROLLSPY / TOC HANDLER (Proposal & Report)
    // ----------------------------------------------------
    const handleOutlineClicks = (outlineClass, containerId) => {
        const links = document.querySelectorAll(`.${outlineClass}`);
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("data-target");
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                    
                    // Update active outline state
                    document.querySelectorAll(`.${outlineClass}`).forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        });
    };

    handleOutlineClicks("proposal-outline-link", "proposal");
    handleOutlineClicks("report-outline-link", "report");

    // ----------------------------------------------------
    // 4. STATISTICAL CALCULATOR & KPIs
    // ----------------------------------------------------
    function calculateStatistics() {
        const total = surveyData.length;
        
        let routineVaxCount = 0;
        let covidVaxFullCount = 0;
        let safetyAgreeCount = 0;
        let recommendCount = 0;

        surveyData.forEach(d => {
            if (d.vax === "Yes") routineVaxCount++;
            if (d.covid === "Yes") covidVaxFullCount++;
            if (d.safety === "Strongly Agree" || d.safety === "Agree") safetyAgreeCount++;
            if (d.recommend === "Yes") recommendCount++;
        });

        const routinePct = total > 0 ? Math.round((routineVaxCount / total) * 100) : 0;
        const covidPct = total > 0 ? Math.round((covidVaxFullCount / total) * 100) : 0;
        const trustPct = total > 0 ? Math.round((safetyAgreeCount / total) * 100) : 0;
        const recommendPct = total > 0 ? Math.round((recommendCount / total) * 100) : 0;

        return {
            total,
            routinePct,
            covidPct,
            trustPct,
            recommendPct
        };
    }

    function updateKPICards() {
        const stats = calculateStatistics();
        document.getElementById("kpi-total").innerText = stats.total;
        document.getElementById("kpi-vax-rate").innerText = stats.routinePct + "%";
        document.getElementById("kpi-covid-rate").innerText = stats.covidPct + "%";
        document.getElementById("kpi-trust-rate").innerText = stats.trustPct + "%";
    }

    // Initialize KPIs on start
    updateKPICards();

    // ----------------------------------------------------
    // 5. CHART.JS VISUALIZATION CODE
    // ----------------------------------------------------
    function getChartDataSummary() {
        // Init counts
        let summaries = {
            vax: { "Yes": 0, "No": 0, "Not Sure": 0 },
            covid: { "Yes": 0, "No": 0, "Partially": 0, "Not Sure": 0 },
            safety: { "Strongly Agree": 0, "Agree": 0, "Disagree": 0, "Strongly Disagree": 0 },
            source: { "Social Media": 0, "Doctors": 0, "Family": 0, "News": 0 },
            recommend: { "Yes": 0, "No": 0, "Maybe": 0 },
            hesitancy: { "Side Effects": 0, "Not Needed": 0, "Religious": 0 }
        };

        surveyData.forEach(d => {
            // Clean values slightly for matching keys
            const v = d.vax ? d.vax.trim() : "Not Sure";
            let c = d.covid ? d.covid.trim() : "Not Sure";
            if (c === "Partially Vaccinated") c = "Partially";
            const s = d.safety ? d.safety.trim() : "Agree";
            let src = d.source ? d.source.trim() : "Social Media";
            if (src === "Doctor") src = "Doctors";
            const r = d.recommend ? d.recommend.trim() : "Yes";
            const h = d.reason ? d.reason.trim() : "Side Effects";

            if (summaries.vax.hasOwnProperty(v)) summaries.vax[v]++;
            if (summaries.covid.hasOwnProperty(c)) summaries.covid[c]++;
            if (summaries.safety.hasOwnProperty(s)) summaries.safety[s]++;
            if (summaries.source.hasOwnProperty(src)) summaries.source[src]++;
            if (summaries.recommend.hasOwnProperty(r)) summaries.recommend[r]++;
            if (summaries.hesitancy.hasOwnProperty(h)) summaries.hesitancy[h]++;
        });

        return summaries;
    }

    function initializeCharts() {
        const dataSummary = getChartDataSummary();

        // Standard Options for clean typography
        const baseOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 15,
                        font: { family: 'Inter', size: 11 }
                    }
                }
            }
        };

        // Palette
        const palette = {
            cyan: ['#0ea5e9', '#38bdf8', '#7dd3fc', '#0284c7'],
            teal: ['#0d9488', '#14b8a6', '#5eead4', '#0f766e'],
            emerald: ['#10b981', '#34d399', '#a7f3d0', '#059669'],
            danger: ['#ef4444', '#f87171', '#fca5a5', '#b91c1c'],
            amber: ['#f59e0b', '#fbbf24', '#fde047', '#d97706'],
            mixed: ['#0ea5e9', '#0d9488', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
        };

        // 1. Routine Vaccination Chart (Doughnut)
        if (charts.vax) charts.vax.destroy();
        charts.vax = new Chart(document.getElementById("chart-vax"), {
            type: 'doughnut',
            data: {
                labels: ['Vaccinated', 'Unvaccinated', 'Not Sure'],
                datasets: [{
                    data: [dataSummary.vax["Yes"], dataSummary.vax["No"], dataSummary.vax["Not Sure"]],
                    backgroundColor: [palette.cyan[0], palette.danger[0], palette.amber[0]],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                ...baseOptions,
                cutout: '70%',
                plugins: {
                    ...baseOptions.plugins,
                    title: { display: false }
                }
            }
        });

        // 2. COVID-19 Vaccination Status (Bar Chart)
        if (charts.covid) charts.covid.destroy();
        charts.covid = new Chart(document.getElementById("chart-covid"), {
            type: 'bar',
            data: {
                labels: ['Fully Vaccinated', 'Unvaccinated', 'Partially', 'Not Sure'],
                datasets: [{
                    label: 'Respondents',
                    data: [dataSummary.covid["Yes"], dataSummary.covid["No"], dataSummary.covid["Partially"], dataSummary.covid["Not Sure"]],
                    backgroundColor: [palette.teal[0], palette.danger[0], palette.cyan[0], palette.amber[0]],
                    borderRadius: 6
                }]
            },
            options: {
                ...baseOptions,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    x: { grid: { display: false } }
                }
            }
        });

        // 3. Safety Belief Chart (Pie Chart)
        if (charts.safety) charts.safety.destroy();
        charts.safety = new Chart(document.getElementById("chart-safety"), {
            type: 'pie',
            data: {
                labels: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
                datasets: [{
                    data: [dataSummary.safety["Strongly Agree"], dataSummary.safety["Agree"], dataSummary.safety["Disagree"], dataSummary.safety["Strongly Disagree"]],
                    backgroundColor: [palette.emerald[0], palette.cyan[1], palette.warning-color, palette.danger[0]],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: baseOptions
        });

        // 4. Source of Information (Horizontal Bar Chart)
        if (charts.source) charts.source.destroy();
        charts.source = new Chart(document.getElementById("chart-source"), {
            type: 'bar',
            data: {
                labels: ['Social Media', 'Doctors', 'Family', 'News'],
                datasets: [{
                    label: 'Primary Source',
                    data: [dataSummary.source["Social Media"], dataSummary.source["Doctors"], dataSummary.source["Family"], dataSummary.source["News"]],
                    backgroundColor: palette.cyan[0],
                    borderRadius: 6,
                    barThickness: 25
                }]
            },
            options: {
                ...baseOptions,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    y: { grid: { display: false } }
                }
            }
        });

        // 5. Recommend Vaccination (Doughnut)
        if (charts.recommend) charts.recommend.destroy();
        charts.recommend = new Chart(document.getElementById("chart-recommend"), {
            type: 'doughnut',
            data: {
                labels: ['Would Recommend', 'Maybe', 'No'],
                datasets: [{
                    data: [dataSummary.recommend["Yes"], dataSummary.recommend["Maybe"], dataSummary.recommend["No"]],
                    backgroundColor: [palette.emerald[0], palette.amber[0], palette.danger[0]],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                ...baseOptions,
                cutout: '70%'
            }
        });

        // 6. Reasons for Hesitancy (Horizontal Bar)
        if (charts.hesitancy) charts.hesitancy.destroy();
        charts.hesitancy = new Chart(document.getElementById("chart-hesitancy"), {
            type: 'bar',
            data: {
                labels: ['Fear of Side Effects', 'Not Needed / Effective', 'Religious/Cultural'],
                datasets: [{
                    label: 'Respondents',
                    data: [dataSummary.hesitancy["Side Effects"], dataSummary.hesitancy["Not Needed"], dataSummary.hesitancy["Religious"]],
                    backgroundColor: [palette.danger[0], palette.amber[0], palette.cyan[0]],
                    borderRadius: 6,
                    barThickness: 25
                }]
            },
            options: {
                ...baseOptions,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    y: { grid: { display: false } }
                }
            }
        });
    }

    // ----------------------------------------------------
    // 6. SEARCHABLE DATA TABLE LOGIC (Pagination & Search)
    // ----------------------------------------------------
    let currentPage = 1;
    const recordsPerPage = 10;
    let filteredData = [...surveyData];

    const dataSearch = document.getElementById("data-search");
    const filterDept = document.getElementById("filter-dept");
    const tableBody = document.querySelector(".raw-table-body");
    const pageInfo = document.getElementById("page-info");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");

    // Populate Department Filter dynamically
    function populateDeptFilter() {
        const depts = new Set();
        surveyData.forEach(d => {
            if (d.dept) depts.add(d.dept.trim());
        });
        filterDept.innerHTML = `<option value="all">All Departments</option>`;
        Array.from(depts).sort().forEach(dept => {
            filterDept.innerHTML += `<option value="${dept}">${dept}</option>`;
        });
    }

    populateDeptFilter();

    // Table rendering function
    function renderTable() {
        if (!tableBody) return;
        tableBody.innerHTML = "";

        const query = dataSearch.value.toLowerCase().trim();
        const deptFilter = filterDept.value;

        // Apply filters
        filteredData = surveyData.filter(row => {
            const matchesSearch = row.name.toLowerCase().includes(query) ||
                                  row.id.includes(query) ||
                                  row.dept.toLowerCase().includes(query);
            const matchesDept = (deptFilter === "all" || row.dept.trim() === deptFilter);
            return matchesSearch && matchesDept;
        });

        // Pagination math
        const totalRecords = filteredData.length;
        const totalPages = Math.max(Math.ceil(totalRecords / recordsPerPage), 1);

        if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = Math.min(startIndex + recordsPerPage, totalRecords);

        // Display current page subset
        const pageData = filteredData.slice(startIndex, endIndex);

        if (pageData.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching survey records found.</td></tr>`;
        } else {
            pageData.forEach(row => {
                // Get clean status classes
                const routineClass = row.vax === "Yes" ? "success" : (row.vax === "No" ? "danger" : "warning");
                const covidClass = row.covid === "Yes" ? "success" : (row.covid === "No" ? "danger" : "blue");
                
                tableBody.innerHTML += `
                    <tr>
                        <td><strong>#${row.id}</strong></td>
                        <td>
                            <div class="member-avatar">${row.name.charAt(0)}</div>
                            <span style="font-weight: 600; vertical-align: middle;">${row.name}</span>
                        </td>
                        <td>${row.dept}</td>
                        <td>${row.location}</td>
                        <td><span class="status-indicator ${row.vax === 'Yes' ? 'success' : (row.vax === 'No' ? 'danger' : 'warning')}">${row.vax}</span></td>
                        <td><span class="status-indicator ${row.covid === 'Yes' ? 'success' : (row.covid === 'No' ? 'danger' : 'blue')}">${row.covid}</span></td>
                        <td>${row.safety}</td>
                        <td>${row.source}</td>
                        <td><span class="status-indicator ${row.recommend === 'Yes' ? 'success' : (row.recommend === 'No' ? 'danger' : 'warning')}">${row.recommend}</span></td>
                        <td style="color: var(--text-muted); font-size: 0.85rem;">${row.reason || '-'}</td>
                    </tr>
                `;
            });
        }

        // Update pagination buttons and text
        pageInfo.innerText = `Showing ${totalRecords === 0 ? 0 : startIndex + 1} to ${endIndex} of ${totalRecords} entries`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Bind event listeners to search/filter inputs
    if (dataSearch) {
        dataSearch.addEventListener("input", () => {
            currentPage = 1;
            renderTable();
        });
    }

    if (filterDept) {
        filterDept.addEventListener("change", () => {
            currentPage = 1;
            renderTable();
        });
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
            }
        });
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener("click", () => {
            const totalPages = Math.ceil(filteredData.length / recordsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderTable();
            }
        });
    }

    // ----------------------------------------------------
    // 7. SIMULATED SURVEY FORM HANDLER (Interactive submission)
    // ----------------------------------------------------
    const simForm = document.getElementById("vaccination-survey-form");
    if (simForm) {
        simForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Collect inputs
            const inputName = document.getElementById("sim-name").value.trim();
            const inputDept = document.getElementById("sim-dept").value;
            const inputVax = document.getElementById("sim-vax").value;
            const inputCovid = document.getElementById("sim-covid").value;
            const inputSafety = document.getElementById("sim-safety").value;
            const inputSource = document.getElementById("sim-source").value;
            const inputRecommend = document.getElementById("sim-recommend").value;
            const inputReason = document.getElementById("sim-reason").value;

            if (!inputName) {
                alert("Please enter your name to participate in the simulation!");
                return;
            }

            // Create new record
            const newId = String(surveyData.length + 1);
            const newRecord = {
                id: newId,
                name: inputName,
                location: "Iqra University",
                dept: inputDept,
                vax: inputVax,
                covid: inputCovid,
                safety: inputSafety,
                source: inputSource,
                recommend: inputRecommend,
                reason: inputReason
            };

            // Push to dataset
            surveyData.unshift(newRecord); // Add to beginning so it displays first

            // Reset form
            simForm.reset();

            // Notify user with elegant alert
            alert(`Thank you ${inputName}! Your survey response has been successfully simulated and added to the project dataset database (#${newId}). Charts and KPIs are automatically updated.`);

            // Recalculate everything
            updateKPICards();
            populateDeptFilter();
            
            // Re-render table if in table tab
            renderTable();
            
            // Re-initialize charts
            if (document.getElementById("dashboard").classList.contains("active")) {
                initializeCharts();
            }
        });
    }

    // ----------------------------------------------------
    // 8. LIGHTBOX MODAL FOR IMAGES GALLERY
    // ----------------------------------------------------
    const zoomBtns = document.querySelectorAll(".zoom-btn");
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption-text");
    const lightboxClose = document.getElementById("lightbox-close");

    zoomBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".gallery-card");
            const img = card.querySelector("img");
            const title = card.querySelector("h3").innerText;
            
            if (img && lightbox) {
                lightboxImg.src = img.src;
                lightboxCaption.innerText = title;
                lightbox.style.display = "flex";
                document.body.style.overflow = "hidden"; // Prevent body scroll
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        });
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
});
