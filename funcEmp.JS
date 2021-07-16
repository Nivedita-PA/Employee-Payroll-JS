{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOURS = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTHS = 160;

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    function calculateDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOURS;
    }

    let totalEmpHrs = 0;
    let totalWorkingdays = 0;
    let empDailyWage = new Array();

    while (totalEmpHrs <= MAX_HRS_IN_MONTHS && totalWorkingdays < NUM_OF_WORKING_DAYS) {
        totalWorkingdays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
        empDailyWage.push(calculateDailyWage(totalEmpHrs));
    }
    // for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    //     let empCheck = Math.floor(Math.random() * 10) % 3;
    //     totalEmpHrs += getWorkingHours(empCheck);
    // }
    let empWage = calculateDailyWage(totalEmpHrs);
    console.log("Emp working days: " + totalWorkingdays + " Emp Hours: " + totalEmpHrs + " Emp Wage: " + empWage);
}