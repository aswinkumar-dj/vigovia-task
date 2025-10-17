import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { toggleToThankYou } from "../../../utils/userSlice";
import PDFWrapper from "../../Pdf/PDFWrapper";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

const ThankYouCard = () => {
  const pdfRef = useRef();
  const dispatch = useDispatch();

  const handleToggleToBack = () => {
    dispatch(toggleToThankYou());
  };

  const generatePDF = async (ref) => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pages = ref.current.querySelectorAll(".pdf-page");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save("Itinerary.pdf");
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white w-[794px] m-10 -px-40 py-30 border border-gray-200 rounded-2xl shadow-2xl  mx-auto text-center"
    >
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] bg-clip-text text-transparent">
        Thank You!!!
      </h1>

      <div className="flex justify-center gap-6">
        <button
          className="px-5 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => generatePDF(pdfRef)}
        >
          ↘ Generate Itinerary PDF
        </button>

        <button
          className="px-5 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToBack}
        >
          Go Back
        </button>
      </div>
      <div ref={pdfRef} className="mt-20">
        <PDFWrapper />
      </div>
    </motion.div>
  );
};

export default ThankYouCard;
