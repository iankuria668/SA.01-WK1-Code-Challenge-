//Getting inputs for Monthly Basic Salary and Monthly Contibution Benefits of the user
let monthlyBasicSalary = parseInt(prompt("Enter your Monthly Basic Salary"));
let monthlyContributionBenefit = parseInt(prompt("Enter your Monthly Contribution Benefit"));

//Validating Inputs
while (isNaN(monthlyBasicSalary) || isNaN(monthlyContributionBenefit) || monthlyBasicSalary < 0 || monthlyContributionBenefit < 0){
    monthlyBasicSalary = parseInt(prompt("Enter your Monthly Basic Salary"));
    monthlyContributionBenefit = parseInt(prompt("Enter your Monthly Contribution Benefit"));
}

//Calculating Monthly Gross Salary
let monthlyGrossSalary = monthlyBasicSalary + monthlyContributionBenefit;

//Input for Personal Relief
let personalRelief = parseInt(prompt("Enter your Personal Relief"));

//Validating Personal Relief input
while (isNaN(personalRelief) || personalRelief < 0){
    personalRelief = parseInt(prompt("Enter your Personal Relief"));
}
//Calculating Monthly Taxable Income
let monthlyTaxableIncome = monthlyGrossSalary - personalRelief;

//Calculating PAYE
function taxCalculator(monthlyTaxableIncome){
    let taxRate;
    if (monthlyTaxableIncome < 24000){
        taxRate = 0.1;
    }
   else if  (monthlyTaxableIncome >= 24000 && monthlyTaxableIncome <= 32333){
        taxRate = 0.25;
    }
    else if (monthlyTaxableIncome > 32333 && monthlyTaxableIncome <= 500000){
        taxRate = 0.3;
    }
    else if (monthlyTaxableIncome > 500000 && monthlyTaxableIncome <= 800000){
        taxRate = 0.325;
    }
    else if (monthlyTaxableIncome > 800000){
        taxRate = 0.35;
    }
    let taxPayable = monthlyTaxableIncome * taxRate;
    return taxPayable;
}
let taxPayable = taxCalculator(monthlyTaxableIncome);

//Calculating NHIF Deductions
let nhifCalculator = function(monthlyGrossSalary){
    let nhifDeduction;
    if (monthlyGrossSalary <= 5999){
        nhifDeduction = 150;
    }
    else if (monthlyGrossSalary >= 6000 && monthlyGrossSalary <= 7999){
        nhifDeduction = 300;
    }
    else if (monthlyGrossSalary >= 8000 && monthlyGrossSalary <= 11999){
        nhifDeduction = 400;
    }
    else if (monthlyGrossSalary >= 12000 && monthlyGrossSalary <= 14999){
        nhifDeduction = 500;
    }
    else if (monthlyGrossSalary >= 15000 && monthlyGrossSalary <= 19999){
        nhifDeduction = 600;
    }
    else if (monthlyGrossSalary >= 20000 && monthlyGrossSalary <= 24999){
        nhifDeduction = 750;
    }
    else if (monthlyGrossSalary >= 25000 && monthlyGrossSalary <= 29999){
        nhifDeduction = 850;
    }
    else if (monthlyGrossSalary >= 30000 && monthlyGrossSalary <= 34999){
        nhifDeduction = 900;
    }
    else if (monthlyGrossSalary >= 35000 && monthlyGrossSalary <= 39999){
        nhifDeduction = 950;
    }
    else if (monthlyGrossSalary >= 40000 && monthlyGrossSalary <= 44999){
        nhifDeduction = 1000;
    }
    else if (monthlyGrossSalary >= 45000 && monthlyGrossSalary <= 49999){
        nhifDeduction = 1100;
    }
    else if (monthlyGrossSalary >= 50000 && monthlyGrossSalary <= 59999){
        nhifDeduction = 1200;
    }
    else if (monthlyGrossSalary >= 60000 && monthlyGrossSalary <= 69999){
        nhifDeduction = 1300;
    }
    else if (monthlyGrossSalary >= 70000 && monthlyGrossSalary <= 79999){
        nhifDeduction = 1400;
    }
    else if (monthlyGrossSalary >= 80000 && monthlyGrossSalary <= 89999){
        nhifDeduction = 1500;
    }
    else if (monthlyGrossSalary >= 90000 && monthlyGrossSalary <= 99999){
        nhifDeduction = 1600;
    }
    else if (monthlyGrossSalary >= 100000){
        nhifDeduction = 1700;
    }
    return nhifDeduction;
}
let nhifDeduction = nhifCalculator(monthlyGrossSalary);

//Calculating NSSF Deductions
let Tier1 = "Tier1";
let Tier2 = "Tier2";
let pensionTier = prompt("Enter your pension tier");
function nssfCalculator(monthlyGrossSalary, pensionTier){
    let employerContribution;
    if (pensionTier !== Tier1 & pensionTier !== Tier2){
        alert("Please Enter a Valid Tier; Either Tier1 or Tier2")
    } else if (pensionTier == Tier1 && monthlyGrossSalary <= 3000){
        employerContribution = 180
    } else if (pensionTier == Tier2 && monthlyGrossSalary <= 3000){
        employerContribution = 0
    } else if (pensionTier == Tier1 && monthlyGrossSalary >= 3000 && monthlyGrossSalary < 4500){
        employerContribution = 270
    } else if (pensionTier == Tier2 & monthlyGrossSalary >= 3000 && monthlyGrossSalary < 4500){
        employerContribution = 0
    } else if (pensionTier == Tier1 && monthlyGrossSalary >= 4500 && monthlyGrossSalary < 6000){
        employerContribution = 360
    } else if (pensionTier == Tier2 && monthlyGrossSalary >= 4500 && monthlyGrossSalary < 6000){
        employerContribution = 0
    } else if (pensionTier == Tier1 && monthlyGrossSalary >= 6000 && monthlyGrossSalary < 10000){
        employerContribution = 360
    } else if (pensionTier == Tier2 && monthlyGrossSalary >= 6000 && monthlyGrossSalary < 10000){
        employerContribution = 240
    } else if (pensionTier == Tier1 && monthlyGrossSalary >= 10000 && monthlyGrossSalary < 14000){
        employerContribution = 360
    } else if (pensionTier == Tier2 && monthlyGrossSalary >=10000 && monthlyGrossSalary < 14000){
        employerContribution = 480
    } else if (pensionTier == Tier1 && monthlyGrossSalary >= 14000 && monthlyGrossSalary < 18000){
        employerContribution = 360
    } else if (pensionTier == Tier2 && monthlyGrossSalary >= 14000 && monthlyGrossSalary < 18000){
        employerContribution = 720
    } else if (pensionTier == Tier1 && monthlyGrossSalary >= 18000){
        employerContribution = 360
    } else if (pensionTier == Tier2 && monthlyGrossSalary >= 18000){
        employerContribution = 720
    }
    return employerContribution
}
let employerContribution = nssfCalculator(Tier1,Tier2);

//Calculating Net Salary
let netSalary = monthlyGrossSalary - taxPayable - nhifDeduction - employerContribution;

//Output of the Results
function outputResults(){
alert("Your Gross Salary is " + monthlyGrossSalary)
alert("Your Tax Payable is " + taxPayable)
alert("Your NHIF Deduction is " + nhifDeduction)
alert("Your NSSF Contibution is " + employerContribution)
alert("Your Net Salary is " + netSalary)
}
outputResults()