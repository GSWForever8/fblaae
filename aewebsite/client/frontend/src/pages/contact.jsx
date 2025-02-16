import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    const leadershipContacts = [
        { name: "Grace Wen", role: "Public Relations Lead", email: "gracew5280@gmail.com", description: "Public Relations Lead" },
        { name: "Maxwell Huang", role: "Education & Research Lead", email: "maxhuang2008@gmail.com", description: "Education & Research Lead" },
        { name: "Ariel Shan", role: "Communications Lead", email: "arielshan2007@gmail.com", description: "Communications Lead" },
        { name: "Candy Tan", role: "Historian", email: "candytan325@gmail.com"},
        { name: "Grant Wang", role: "Secretary", email: "grantw487@gmail.com"},
        { name: "Jaden Zhou", role: "Activites & Events Director", email: "jadzho675@gmail.com"},
        { name: "Jolene Liu", role: "Community Outreach Coordinator", email: "joleneliu10@gmail.com"},
        { name: "Erika Chen", role: "Economics Researcher", email: "erikachen988@gmail.com"},
        { name: "Kyle Feng", role: "Economics Researcher", email: "kfeng.209@gmail.com"},
        { name: "Aidan Hong", role: "Website Developer", email: "aidanhong8@gmail.com"},
    ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12">Have questions? We&apos;d love to hear from you.</p>

          {/* Leadership Contacts */}
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-red-500 mb-2">{contact.name}</h3>
                <p className="text-blue-700 font-blue-700 mb-3">{contact.role}</p>
                <a 
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center text-black hover:text-blue-500 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}