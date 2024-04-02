//Declaring Prompt as a variable
const prompt  = require("prompt-sync")({sigint: true});

//Prompting inputs for Monthly Basic Salary
let monthlyBasicSalary = parseInt(prompt("Enter your Monthly Basic Salary"));
//Prompting inputs for Monthly Contribution Benefit
let monthlyContributionBenefit = parseInt(prompt("Enter your Monthly Contribution Benefit"));

//Validating Inputs
while (isNaN(monthlyBasicSalary) || isNaN(monthlyContributionBenefit) || monthlyBasicSalary < 0 || monthlyContributionBenefit < 0){
    //Prompting inputs for Monthly Basic Salary if the input is invalid
    monthlyBasicSalary = parseInt(prompt("Enter your Monthly Basic Salary"));
    //Prompting inputs for Monthly Contribution Benefit if the input is invalid
    monthlyContributionBenefit = parseInt(prompt("Enter your Monthly Contribution Benefit"));
}

//Calculating Monthly Gross Salary
let monthlyGrossSalary = monthlyBasicSalary + monthlyContributionBenefit;

//Calculating Housing Levy
const housingLevy = (0.015 * monthlyGrossSalary);

//Declaring for Personal Relief
let personalRelief = 2400;

//Validating Personal Relief input
while (isNaN(personalRelief) || personalRelief < 0){
    //Prompting inputs for Personal Relief if the input is invalid
    personalRelief = parseInt(prompt("Enter your Personal Relief"));
}
//Calculating Monthly Taxable Income
let monthlyTaxableIncome = monthlyGrossSalary - personalRelief;

//Calculating PAYE
function taxCalculator(monthlyTaxableIncome){
    let taxRate;
    //Calculating Tax Rate for Monthly Taxable Income upto 24000
    if (monthlyTaxableIncome < 24000){
        taxRate = 0.1;
    }
    //Calculating Tax Rate for Monthly Taxable Income upto 32333
   else if  (monthlyTaxableIncome >= 24000 && monthlyTaxableIncome <= 32333){
        taxRate = 0.25;
    }
    //Calculating Tax Rate for Monthly Taxable Income upto 500000
    else if (monthlyTaxableIncome > 32333 && monthlyTaxableIncome <= 500000){
        taxRate = 0.3;
    }
    //Calculating Tax Rate for Monthly Taxable Income upto 800000
    else if (monthlyTaxableIncome > 500000 && monthlyTaxableIncome <= 800000){
        taxRate = 0.325;
    }
    //Calculating Tax Rate for Monthly Taxable Income above 800000
    else if (monthlyTaxableIncome > 800000){
        taxRate = 0.35;
    }
    //Returning Tax Rate
    let taxPayable = monthlyTaxableIncome * taxRate;
    return taxPayable;
}
let taxPayable = Math.round(taxCalculator(monthlyTaxableIncome));

//Calculating NHIF Deductions
let nhifCalculator = function(monthlyGrossSalary){
    let nhifDeduction;

    //Calculating NHIF Deduction for Salary upto 5999
    if (monthlyGrossSalary <= 5999){
        nhifDeduction = 150;
    }
    //Calculating NHIF Deduction for Salary upto 7999
    else if (monthlyGrossSalary >= 6000 && monthlyGrossSalary <= 7999){
        nhifDeduction = 300;
    }
    //Calculating NHIF Deduction for Salary upto 11999
    else if (monthlyGrossSalary >= 8000 && monthlyGrossSalary <= 11999){
        nhifDeduction = 400;
    }
    //Calculating NHIF Deduction for Salary upto 14999
    else if (monthlyGrossSalary >= 12000 && monthlyGrossSalary <= 14999){
        nhifDeduction = 500;
    }
    //Calculating NHIF Deduction for Salary upto 19999
    else if (monthlyGrossSalary >= 15000 && monthlyGrossSalary <= 19999){
        nhifDeduction = 600;
    }
    //Calculating NHIF Deduction for Salary upto 24999
    else if (monthlyGrossSalary >= 20000 && monthlyGrossSalary <= 24999){
        nhifDeduction = 750;
    }
    //Calculating NHIF Deduction for Salary upto 29999
    else if (monthlyGrossSalary >= 25000 && monthlyGrossSalary <= 29999){
        nhifDeduction = 850;
    }
    //Calculating NHIF Deduction for Salary upto 34999
    else if (monthlyGrossSalary >= 30000 && monthlyGrossSalary <= 34999){
        nhifDeduction = 900;
    }
    //Calculating NHIF Deduction for Salary upto 39999
    else if (monthlyGrossSalary >= 35000 && monthlyGrossSalary <= 39999){
        nhifDeduction = 950;
    }
    //Calculating NHIF Deduction for Salary upto 44999
    else if (monthlyGrossSalary >= 40000 && monthlyGrossSalary <= 44999){
        nhifDeduction = 1000;
    }
    //Calculating NHIF Deduction for Salary upto 49999
    else if (monthlyGrossSalary >= 45000 && monthlyGrossSalary <= 49999){
        nhifDeduction = 1100;
    }
    //Calculating NHIF Deduction for Salary upto 59999
    else if (monthlyGrossSalary >= 50000 && monthlyGrossSalary <= 59999){
        nhifDeduction = 1200;
    }
    //Calculating NHIF Deduction for Salary upto 69999
    else if (monthlyGrossSalary >= 60000 && monthlyGrossSalary <= 69999){
        nhifDeduction = 1300;
    }
    //Calculating NHIF Deduction for Salary upto 79999
    else if (monthlyGrossSalary >= 70000 && monthlyGrossSalary <= 79999){
        nhifDeduction = 1400;
    }
    //Calculating NHIF Deduction for Salary upto 89999
    else if (monthlyGrossSalary >= 80000 && monthlyGrossSalary <= 89999){
        nhifDeduction = 1500;
    }
    //Calculating NHIF Deduction for Salary upto 99999
    else if (monthlyGrossSalary >= 90000 && monthlyGrossSalary <= 99999){
        nhifDeduction = 1600;
    }
    //Calculating NHIF Deduction for Salary upto 100000
    else if (monthlyGrossSalary >= 100000){
        nhifDeduction = 1700;
    }

    //Returning NHIF Deduction
    return nhifDeduction;
}
let nhifDeduction = nhifCalculator(monthlyGrossSalary);

//Declaring NSSF Tiers
let pensionTier = prompt("Enter your pension tier (either Tier 1 or Tier 2)");

// Validating pension  Tier
while (pensionTier !== "Tier 1" && pensionTier !== "Tier 2"){
    //Prompting inputs for pension Tier if the input is invalid
    pensionTier = prompt("Enter your pension tier (either Tier 1 or Tier 2)");
    }


//Calculating NSSF Contribution
function nssfCalculator(monthlyGrossSalary, pensionTier){
    let employeeContribution;
    //Calculating NSSF Contribution for Tier 1 and salary of upto 3000
    if (pensionTier == "Tier 1" && monthlyGrossSalary <= 3000){
        employeeContribution = 180
    //Calculating NSSF Contribution for Tier 2 and salary of upto 3000
    } else if (pensionTier == "Tier 2" && monthlyGrossSalary <= 3000){
        employeeContribution = 0
    //Calculating NSSF Contribution for Tier 1 and salary of upto 4500
    } else if (pensionTier == "Tier 1" && monthlyGrossSalary >= 3000 && monthlyGrossSalary < 4500){
        employeeContribution = 270
    //Calculating NSSF Contribution for Tier 2 and salary of upto 4500
    } else if ([pensionTier] == "Tier 2" & monthlyGrossSalary >= 3000 && monthlyGrossSalary < 4500){
        employeeContribution = 0
    //Calculating NSSF Contribution for Tier 1 and salary of upto 6000
    } else if (pensionTier == "Tier 1" && monthlyGrossSalary >= 4500 && monthlyGrossSalary < 6000){tierCategorySeparator
        employeeContribution = 360
    //Calculating NSSF Contribution for Tier 2 and salary of upto 6000
    } else if (pensionTier == "Tier 2" && monthlyGrossSalary >= 4500 && monthlyGrossSalary < 6000){
        employeeContribution = 0
    //Calculating NSSF Contribution for Tier 1 and salary of upto 10000
    } else if (pensionTier == "Tier 1" && monthlyGrossSalary >= 6000 && monthlyGrossSalary < 10000){
        employeeContribution = 360
    //Calculating NSSF Contribution for Tier 2 and salary of upto 10000
    } else if (pensionTier == "Tier 2" && monthlyGrossSalary >= 6000 && monthlyGrossSalary < 10000){
        employeeContribution = 240
    //Calculating NSSF Contribution for Tier 1 and salary of upto 14000
    } else if (pensionTier == "Tier 1" && monthlyGrossSalary >= 10000 && monthlyGrossSalary < 14000){
        employeeContribution = 360
    //Calculating NSSF Contribution for Tier 2 and salary of upto 14000
    } else if (pensionTier == "Tier 2" && monthlyGrossSalary >=10000 && monthlyGrossSalary < 14000){
        employeeContribution = 480
    //Calculating NSSF Contribution for Tier 1 and salary of upto 18000
    } else if (pensionTier == "Tier 1" && monthlyGrossSalary >= 14000 && monthlyGrossSalary < 18000){
        employeeContribution = 360
    //Calculating NSSF Contribution for Tier 2 and salary of upto 18000
    } else if (pensionTier == "Tier 2" && monthlyGrossSalary >= 14000 && monthlyGrossSalary < 18000){
        employeeContribution = 720
    //Calculating NSSF Contribution for Tier 1 and salary of above 18000
    } else if (pensionTier == "Tier 1" && monthlyGrossSalary >= 18000){
        employeeContribution = 360
    //Calculating NSSF Contribution for Tier 2 and salary of above 18000
    } else if (pensionTier == "Tier 2" && monthlyGrossSalary >= 18000){
        employeeContribution = 720
    }
    //Returning employeeContribution
    return employeeContribution
}
let employeeContribution = parseInt(nssfCalculator(monthlyGrossSalary, pensionTier));

//Calculating Net Salary
let netSalary = monthlyGrossSalary - taxPayable - nhifDeduction - housingLevy - employeeContribution;

//Output of the Results
function outputResults(){
//Gross salary output
console.log("Your Gross Salary is " + monthlyGrossSalary)
//Tax payable output
console.log("Your Tax Payable is " + taxPayable)
//NHIF Deduction output
console.log("Your NHIF Deduction is " + nhifDeduction)
//NSSF Contribution output
console.log("Your NSSF Contibution is " + employeeContribution)
//Net Salary output
console.log("Your Net Salary is " + netSalary)
}
outputResults()