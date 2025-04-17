const cron = require("node-cron");
const Employee = require("../model/employeeSchema");
const sendEmail = require("../utils/sendEmail");
require("dotenv").config();

const HR_EMAIL = process.env.HR_EMAIL;

// Schedule the cron job to run every day at midnight
cron.schedule(" 0 0 * * *", async () => { // Updated to run at midnight every day
  console.log("⏰ Running daily hiring anniversary check...");

  try {
    const today = new Date();
    
    // Format today's date to DD MM YYYY for comparison
    const todayFormatted = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

    const employees = await Employee.find();

    for (const emp of employees) {
      if (!emp.hireDate) continue; // Skip employees without hireDate

      const doj = new Date(emp.hireDate);
      doj.setHours(0, 0, 0, 0); // Reset time for clean comparison

      // Format hire date to DD MM YYYY for comparison
      const hireDateFormatted = `${doj.getDate().toString().padStart(2, '0')}/${(doj.getMonth() + 1).toString().padStart(2, '0')}/${doj.getFullYear()}`;

      // Debugging: Log formatted dates for comparison
      console.log(`🔍 Checking ${emp.name} (${emp.email})`);
      console.log(`📅 Hire Date: ${hireDateFormatted} (Day: ${doj.getDate()}, Month: ${doj.getMonth() + 1})`);
      console.log(`Today: ${todayFormatted} (Day: ${today.getDate()}, Month: ${today.getMonth() + 1})`);

      // Compare the formatted hireDate and today's formatted date (DD/MM/YYYY)
      const diffInYears = today.getFullYear() - doj.getFullYear();
      const isSameDayAndMonth =
        today.getDate() === doj.getDate() && today.getMonth() === doj.getMonth();

      console.log(`🧮 Years Completed: ${diffInYears}, Match Day/Month: ${isSameDayAndMonth}`);

      // Send email only if it's the anniversary and the employee has completed at least 1 year
      if (isSameDayAndMonth && diffInYears >= 1) {
       const empMsg = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <h2 style="color: #2E86C1;">🎉 Congratulations ${emp.name}!</h2>
          <p style="font-size: 16px;">
            Today marks your <strong>${diffInYears}-year</strong> work anniversary with us!
          </p>
          <p style="font-size: 16px;">
            Your dedication, hard work, and positive energy have played a significant role in our journey, and we are truly grateful to have you on the team.
          </p>
          <p style="font-size: 16px;">
            Here's to celebrating your achievements and looking forward to many more successful years together!
          </p>
          <p style="margin-top: 30px; font-size: 16px;">Warm wishes,</p>
          <p style="font-size: 16px;"><strong>Team Veegahii</strong></p>
        </div>
      `;
      
      const hrMsg = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8; color: #333;">
        <h2 style="color: #117A65;">📢 Employee Anniversary Alert</h2>
        <p style="font-size: 16px;">
          We’re excited to share that <strong>${emp.name}</strong> has completed <strong>${diffInYears} year(s)</strong> with the company today, on <strong>${hireDateFormatted}</strong>.
        </p>
        <p style="font-size: 16px;">
          Their contributions and dedication continue to positively impact our organization.
        </p>
        <p style="font-size: 16px;">
          Please consider sending them your congratulations or a token of appreciation!
        </p>
        <p style="margin-top: 30px; font-size: 16px;">Regards,</p>
        <p style="font-size: 16px;"><strong>Automated HR Notification System</strong></p>
      </div>
    `;
    

        console.log(`📧 Sending anniversary email to ${emp.email}`);
        await sendEmail(emp.email, "🎉 Work Anniversary!", empMsg);
        await sendEmail(HR_EMAIL, "🎉 Employee Work Anniversary Alert", hrMsg);
      }
    }
  } catch (error) {
    console.error("❌ Cron job error:", error);
  }
});
