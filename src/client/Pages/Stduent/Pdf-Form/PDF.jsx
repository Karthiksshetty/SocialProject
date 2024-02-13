import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import Label from '../../../components/Label';

class PDF extends Component {
  constructor(props) {
    super(props);
    this.pdfRef = React.createRef();
    this.state = {
      generatedPDF: null,
    };
  }

  handleDownloadPDF = () => {
    const input = this.pdfRef.current;

    const pdf = new jsPDF('p', 'mm', 'a4'); // Creating A4-sized PDF

    html2canvas(input, { scale: 2, scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297); // Adding A4-sized image to the PDF

      const pdfContent = pdf.output('datauristring');
      this.setState({ generatedPDF: pdfContent });
    });
  };

  render() {
    const { generatedPDF } = this.state;

    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8" style={{ width: '210mm', minHeight: '297mm' }}>
        {/* Ensure all content is wrapped inside the ref element */}
        <div ref={this.pdfRef}>
          <div style={{ padding: '1cm' }}>
            <header style={{ height: '4cm', padding: '0 1cm', position: 'running(header)', marginBottom: '1cm' }}>
              <div
                className="headerSection"
                style={{
                  display: 'flex',
                  height: '4cm',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div className='logo'
                  style={{
                    display: 'flex',
                    alignItems: 'right',
                    justifyContent: 'space-between',
                  }} >
                  <svg style={{ width: '1.5cm', height: '1.5cm', marginRight: '0.5cm' }}>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      strokeWidth="3"
                      fill="grey"
                    />
                  </svg>
                </div>
                <div
                  className="logoAndName"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h1><b>Canara Bus Operator's Association (R.)</b></h1>
                  <h1><b>ಕೆನರಾ ಬಸ್ಸು ಮಾಲಕರ ಸಂಘ (ರಿ.)</b></h1>
                </div>
                <div>
                  <svg className="w-52 h-67 mr-2">
                    <rect
                      x="57%" // You can adjust this value to position the square within the SVG
                      y="10%" // You can adjust this value to position the square within the SVG
                      width="80%"
                      height="80%"
                      // stroke="grey"
                      strokeWidth="3"
                      fill="grey"
                    />
                  </svg>
                </div>
              </div>
            </header>
            <footer style={{ marginBottom: '1cm' }} className="bg-gray-200 p-4 flex flex-col items-center justify-center text-center">
              <span className="text-gray-600 text-xs lg:text-sm">Mangalore-Ph: 7259018002 Udupi-Ph: 0820-2521211</span>
            </footer>
            <main style={{ marginBottom: '1cm' }}>
              <form name="application" method="POST" className="mx-auto">
                <div className="mb-4">
                  <hr className="my-4" />
                  <div className="flex mb-4">
                    <div className="w-full mr-2 flex items-center justify-between my-4">
                      <div className="flex flex-col w-full mx-2">
                        <div className="flex items-center mb-6">
                          <label className="font-bold mr-2"><b>First:</b></label>
                          <div className="text-sm">
                            <label htmlFor="FirstName" className="block w-full bg-white p-3">Rahul Rao</label>
                          </div>
                        </div>
                      </div>
                    </div>





                  </div>
                </div>

                {/* Address and info*/}
                <div className="mb-4">
                  <div className="w-full mr-2 flex items-center justify-between my-4">
                    <div className="flex flex-col w-full mx-2">
                      <div className="flex items-center mb-4">
                        <label className="block text-sm font-bold w-42 mb-2"><b>Residential_Address:</b></label>

                        <label className="py-2 px-3 block w-90 break-words">
                          Sample residential address text goes here. This is a longer text that might span multiple lines depending on the width of the container and the content.
                        </label>

                      </div>
                    </div>
                  </div>

                  <div className="w-full mr-2 flex items-center justify-between my-4">
                    <div className="flex flex-col w-full mx-2">
                      <div className="flex items-center mb-4">
                        <label className="block text-sm font-bold mb-2 mr-2"><b>Mobile Number:</b></label>

                        <label className="py-2 px-3 block">
                          1234567890 {/* Display the 10-digit number here */}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mr-2 flex items-center justify-between my-4">
                    <div className="flex flex-col w-full mx-2">
                      <div className="flex items-center mb-4">
                        <label className="block text-sm font-bold mb-2 mr-2"><b>Date of Birth:</b></label>

                        <label className="py-2 px-3 block">
                          01/01/1990 {/* Display the sample date here */}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mr-2 flex items-center justify-between my-4">
                    <div className="flex flex-col w-full mx-2">
                      <div className="flex items-center mb-4">
                        <label className="block text-sm font-bold mb-2 mr-2"><b>Name of the School/College:</b></label>

                        <label className="py-2 px-3 block w-64 break-words">
                          xyz College
                        </label>
                      </div>
                    </div>
                  </div>



                  <div className="flex mb-4">
                    <div className="w-2/3 mr-2">
                      <label className="block text-sm mb-1 font-semibold">Course/Class</label>
                      <label className=" bg-white p-2">
                        MCA
                      </label>
                    </div>
                    <div className="w-1/3">
                      <label className="block text-sm mb-1 font-semibold">Year</label>
                      <label className=" bg-white p-2">
                        2024
                      </label>
                    </div>
                  </div>

                  <label className="block text-sm mb-1 font-semibold">Email</label>
                  <div className="flex mb-4">
                    <label className="block rounded bg-white p-2 w-full">
                      xy123@gmail.com
                    </label>
                  </div>


                </div>


                {/* Bus Route */}
                <div className="mb-4">
  <hr className="my-4" />
  <label className="block text-sm mb-1">Bus Route required to Travel</label>

  <div className="flex mb-4">
    <div className="w-1/2 mr-2">
      <label className="block text-sm mb-1 font-semibold">From</label>
      <label className="block rounded bg-white p-2 w-full">
        {/* Display the "From" information */}
        Your From Information Here
      </label>
    </div>
    <div className="w-1/2">
      <label className="block text-sm mb-1 font-semibold">To</label>
      <label className="block rounded bg-white p-2 w-full">
        {/* Display the "To" information */}
        Your To Information Here
      </label>
    </div>
  </div>
</div>


                <hr className="my-4" />
              </form>
            </main>

            <footer className="footer" style={{ marginBottom: '1cm', height: '3cm', lineHeight: '3cm', padding: '0 2cm', position: 'running(footer)', backgroundColor: '#BFC0C3', fontSize: '8pt', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              {/* Your footer content */}
            </footer>

            <aside style={{ padding: '0 2cm', paddingBottom: '0.5cm' }}>
              {/* ... Aside content ... */}
            </aside>
          </div>


        </div>

        {!generatedPDF ? (
          <button
            type="button"
            onClick={this.handleDownloadPDF}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green mt-4"
          >
            Download as PDF
          </button>
        ) : (
          <embed src={generatedPDF} type="application/pdf" width="100%" height="600px" />
        )}
      </div>
    );
  }
}

export default PDF;
