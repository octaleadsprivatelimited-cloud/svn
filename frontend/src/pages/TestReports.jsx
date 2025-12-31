import { Link } from 'react-router-dom';

const TestReports = () => {
  const reports = [
    {
      id: 1,
      title: 'ISO 9001:2015 Certification',
      description: 'Quality Management System Certification',
      date: '2024',
      category: 'Quality Certification',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'NABL Accredited Testing',
      description: 'National Accreditation Board for Testing and Calibration Laboratories',
      date: '2024',
      category: 'Laboratory Accreditation',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'RoHS Compliance Certificate',
      description: 'Restriction of Hazardous Substances Compliance',
      date: '2024',
      category: 'Environmental Compliance',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Chemical Composition Analysis',
      description: 'Detailed chemical analysis report for mica products',
      date: '2024',
      category: 'Product Analysis',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Physical Properties Test',
      description: 'Comprehensive physical properties testing report',
      date: '2024',
      category: 'Product Testing',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Thermal Resistance Test',
      description: 'High-temperature resistance and stability testing',
      date: '2024',
      category: 'Product Testing',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Test Reports & Certifications</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Quality assurance through rigorous testing and international
            certifications
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              SVN Global maintains the highest quality standards through
              comprehensive testing and international certifications. All our
              products undergo rigorous quality checks to ensure they meet
              global standards and customer requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">{report.icon}</div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                    {report.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {report.title}
                </h3>
                <p className="text-gray-600 mb-4">{report.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Issued: {report.date}</span>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Quality Assurance Process
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">
                        Raw Material Testing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        All raw materials undergo comprehensive quality checks
                        before processing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">
                        In-Process Quality Control
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Continuous monitoring during manufacturing to ensure
                        consistent quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">
                        Final Product Testing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Comprehensive testing of finished products before
                        shipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">
                        Certification & Documentation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Complete documentation and certification for all products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Quality Testing"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized by leading international certification bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">ISO</span>
              </div>
              <h3 className="font-semibold text-gray-900">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600 mt-2">Quality Management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">NABL</span>
              </div>
              <h3 className="font-semibold text-gray-900">NABL Accredited</h3>
              <p className="text-sm text-gray-600 mt-2">Laboratory Testing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">RoHS</span>
              </div>
              <h3 className="font-semibold text-gray-900">RoHS Compliant</h3>
              <p className="text-sm text-gray-600 mt-2">Environmental</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">CE</span>
              </div>
              <h3 className="font-semibold text-gray-900">CE Marking</h3>
              <p className="text-sm text-gray-600 mt-2">European Standards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request Test Reports
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Need detailed test reports or certifications? Contact us for
            complete documentation
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestReports;

