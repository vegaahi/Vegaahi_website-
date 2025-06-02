import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import api from "../../api";

const IncrementLetterComponent = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [previousSalary, setPreviousSalary] = useState("");
  const [percentage, setPercentage] = useState("");
  const [newSalary, setNewSalary] = useState("");
  const [effectiveFromDate, setEffectiveFromDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (previousSalary && percentage) {
      const prev = Number(previousSalary);
      const perc = Number(percentage);
      const calculatedNewSalary = Math.round(prev + (prev * perc) / 100);
      setNewSalary(calculatedNewSalary);
    } else {
      setNewSalary("");
    }
  }, [previousSalary, percentage]);

  const handleGenerateAndDownload = async () => {
  if (
    !employeeId ||
    !employeeName ||
    !designation ||
    !percentage ||
    !previousSalary ||
    !effectiveFromDate
  ) {
    setError("All required fields must be filled.");
    setMessage("");
    return;
  }

  try {
    const res = await api.post("api/increment-letters", {
      employeeId,
      employeeName,
      designation,
      previousSalary: Number(previousSalary),
      percentage: Number(percentage),
      newSalary: newSalary ? Number(newSalary) : null,
      remarks,
      effectiveFromDate,
    });

    setMessage(res.data.message);
    setError("");

    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const logo = new Image();
    logo.src = "/vegaahilogo.png"; // Ensure logo is in public folder

   logo.onload = () => {
  const watermarkWidth = 120;
  const watermarkHeight = 120;
  const watermarkX = (pageWidth - watermarkWidth) / 2;
  const watermarkY = (pageHeight - watermarkHeight) / 2;

  // 🔷 Add watermark logo
  if (doc.setGState) {
    doc.setGState(new doc.GState({ opacity: 0.1 }));
  }
  doc.addImage(logo, "PNG", watermarkX, watermarkY, watermarkWidth, watermarkHeight);
  if (doc.setGState) {
    doc.setGState(new doc.GState({ opacity: 1 }));
  }

  let y = 20;
  const lineHeight = 6;

  // 🔷 Centered Logo and Company Name
  const headerLogoWidth = 20;
  const headerLogoHeight = 20;
  const combinedWidth = headerLogoWidth + 5 + 80; // logo + spacing + text
  const startX = (pageWidth - combinedWidth) / 2;

  doc.addImage(logo, "PNG", startX, y, headerLogoWidth, headerLogoHeight); // Logo
  doc.setFontSize(20);
  doc.setFont("MaindraGD", "bold");
  doc.text("VEGAAHI IT PVT LTD", startX + headerLogoWidth + 5, y + 12); // Text beside logo

  // 🔷 Regd. No. on right
  // 🔷 Regd. No. moved to top-right (closer to top margin)
doc.setFontSize(10);
doc.setFont("times", "normal");
doc.text("Regd. No: U62013TS2024PTC181697", pageWidth - 20, 12, { align: "right" });

// ✅ BLUE HR line below logo & company name
const lineY = y + headerLogoHeight + 4; // position below logo
doc.setDrawColor(176, 214, 247); // Blue color (RGB)
doc.setLineWidth(0.5);
doc.line(20, lineY, pageWidth - 20, lineY);

  y += lineHeight * 6;

  // Title
  doc.setFontSize(16);
  doc.setFont("times", "bold");
  doc.text("Salary Increment Letter", pageWidth / 2, y, { align: "center" });
      y += lineHeight * 2;
      doc.setFontSize(11);
      doc.setFont("times", "normal");
      doc.text(`Date: ${new Date().toLocaleDateString("en-GB")}`, pageWidth - 20, y, {
        align: "right",
      });

      y += lineHeight * 2;
      doc.text(`${employeeName.toUpperCase()},`, 20, y);
      y += lineHeight;
      doc.text(`Employee Code: ${employeeId},`, 20, y);
      y += lineHeight;
      doc.text(`Designation: ${designation.toUpperCase()},`, 20, y);

      y += lineHeight * 2;
      doc.setFont("times", "bold");
      doc.text("Subject: Letter of Increment", 20, y);
      doc.setFont("times", "normal");

      y += lineHeight * 2;
      doc.text(`Dear ${employeeName.split(" ")[0]},`, 20, y);

      y += lineHeight * 2;
      const paragraph1 = `We are pleased to inform you that keeping in view of your good performance at your workplace and role, the management has taken a decision to give you salary increment of ${percentage}% to your current CTC.`;
      doc.text(doc.splitTextToSize(paragraph1, 170), 20, y);
      y += lineHeight * (Math.ceil(paragraph1.length / 90) + 1);

      const formattedEffectiveDate = new Date(effectiveFromDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      const paragraph2 = `Consequently, your compensation has been revised and the new enhanced compensation will be effective from the ${formattedEffectiveDate}.`;
      doc.text(doc.splitTextToSize(paragraph2, 170), 20, y);
      y += lineHeight * (Math.ceil(paragraph2.length / 90) + 1);

      const paragraph3 = `Please note that annual CTC with effect from ${formattedEffectiveDate} will be Rs.${newSalary}/- PA. (You can approach the HR Department for detailed salary break-up and tax changes) Further, you will also be eligible for the other benefits as per your grade of employees.`;
      doc.text(doc.splitTextToSize(paragraph3, 170), 20, y);
      y += lineHeight * (Math.ceil(paragraph3.length / 90) + 1);

      const paragraph4 = `We are sure that this will motivate you and you will strive to continuously improve in your performance in future also.`;
      doc.text(doc.splitTextToSize(paragraph4, 170), 20, y);
      y += lineHeight * (Math.ceil(paragraph4.length / 90) + 1);

      y += lineHeight * 2;
      doc.text("Yours Faithfully,", 20, y);
      y += lineHeight;
      doc.text("HR Manager,", 20, y);
      y += lineHeight;
      doc.text("A Lavanya", 20, y);
      y += lineHeight * 2;
      doc.text("Signature", 20, y);

      y += 15; // small vertical gap before line

doc.setDrawColor(176, 214, 247); // Light blue (#b0d6f7)
doc.setLineWidth(0.5);
doc.line(20, y, pageWidth - 20, y); // full-width line


      y += lineHeight * 1;
      doc.setFontSize(10);
      doc.text(
        "Opp: Police Head Quarters, Sri Sai Pooja Complex, Kishanpura, Hanamkonda-506001, Telangana.",
        20,
        y
      );

      doc.save(`Increment_Letter_${employeeId}.pdf`);
    };
  } catch (err) {
    setError(err.response?.data?.message || "Failed to generate increment letter.");
    setMessage("");
  }
};


  return (
    <div className="container mt-5">
      <h2>Increment Letter Generator</h2>

      <div className="mb-3">
        <label className="form-label">Employee ID:</label>
        <input
          type="text"
          className="form-control"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Employee Name:</label>
        <input
          type="text"
          className="form-control"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Designation:</label>
        <input
          type="text"
          className="form-control"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Previous Salary (₹):</label>
        <input
          type="number"
          className="form-control"
          value={previousSalary}
          onChange={(e) => setPreviousSalary(e.target.value)}
          min="0"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Increment Percentage (%):</label>
        <input
          type="number"
          className="form-control"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          min="0"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Effective From Date:</label>
        <input
          type="date"
          className="form-control"
          value={effectiveFromDate}
          onChange={(e) => setEffectiveFromDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">New Salary (₹):</label>
        <input
          type="number"
          className="form-control"
          value={newSalary}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Remarks:</label>
        <textarea
          className="form-control"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          rows={3}
        />
      </div>

      <button className="btn btn-primary mt-3" onClick={handleGenerateAndDownload}>
        Generate & Download Increment Letter
      </button>

      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default IncrementLetterComponent;
