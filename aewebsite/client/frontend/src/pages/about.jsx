import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import React from 'react';
import team from '/photos/IMG_1037.JPG';
import { FaLinkedin, FaGithub, FaGlobe} from 'react-icons/fa';
import timeline from '/photos/timeline.png';

function App() {
    const MemberProfile = ({ name, position, bio, imageUrl, linkedinUrl, githubUrl,url}) => {
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/5 h-256 lg:h-256 transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-lg text-gray-600 text-center mb-5">{position}</p>
            <p className="text-lg text-gray-700 text-center mb-5">{bio}</p>
            <div className="flex justify-center space-x-4">
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-800 hover:text-gray-600" />
                </a>
              )}
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="text-gray-800 hover:text-gray-600" />
                </a>
              )}
            </div>
          </div>
        );
      };
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
  <Header />
  <div className="flex flex-col items-center mb-6 p-4">
  <h1 className='text-6xl font-bold mb-6'>
            Our Team
          </h1>
  <img src={team} className="w-5/6  rounded-lg shadow-lg"></img>
  </div>
    
  <div className="flex flex-wrap justify-center gap-6">
      <MemberProfile 
        name="Ariel Shan" 
        position="Communications Chair" 
        bio="Hi, I'm Ariel, and I’m excited to lead DBHS FBLA's first-ever American Enterprise Project! My entrepreneurship knowledge and countless leadership and project management
experiences have prepared me to engage our community in financial literacy- an important yet undervalued skill everyone should have. I am looking forward to working with our outstanding committee members!
" 
      />
      <MemberProfile 
        name="Maxwell Huang" 
        position="Education/Research Chair" 
        bio="Hello, my name is Maxwell and I am excited to serve as your Education/Researcher lead this year. With my experience in the finance field through the Youth Investor Society, I am excited to teach financial literacy to everyone in the Diamond Bar Community. Feel free to reach out to me anytime about personal finance stocks, and anything that comes to mind! I can't wait to work with the committee for this upcoming year."
      />
      <MemberProfile 
        name="Grace Wen" 
        position="Public Relations Chair" 
        bio="Hello, my name is Grace! I am the Public Relations Lead this year. I am very excited to collaborate with my chapter members on this project and positively impact my community through financial literacy and engagement! I look forward to teaching others about the foundation of our economy and encouraging others to explore finance and entrepreneurship"
      />
      <MemberProfile 
        name="Grant Wang" 
        position="Secretary" 
        bio="Hello. My name is Grant Wang, and I am the Secretary this year. I am looking forward to helping my team members on this project to achieve our goals and have a meaningful impact on my community."
        />
        <MemberProfile 
        name="Jaden Zhou" 
        position="Events Director" 
        bio="Hi, my name is Jaden and I am the Activities and Events Director. I look forward to working with everyone and helping our community understand the economic system through financial literacy."
        />
         <MemberProfile 
        name="Jolene Liu" 
        position="Community Outreach Coordinator" 
        bio="Hi, I'm Jolene and this year I will be the Community Outreach Director. I can't wait to meet everyone and work to spread financial literacy. My long-term goal is to help students get involved and active within their communities."
        />
        <MemberProfile 
        name="Erika Chen" 
        position="Economics Researcher" 
        bio="Hi! My name is Erika and I'm super excited to be part of American Enterprise this year! I love acai bowls, taking photobooth photos, hanging out, and taking pictures with friends!
Through this project, I'm looking forward to teaching elementary kids financial literacy!
"
        />
        <MemberProfile 
        name="Kyle Feng" 
        position="Economics Researcher" 
        bio="Hello! My name is Kyle. I am one of the Economics Researchers this year. I’m excited to work with my chapter members on this project to make a meaningful impact in our community by educating financial literacy.
"
        />
        <MemberProfile 
        name="Aidan Hong" 
        position="Website Designer" 
        bio="Hi, my name is Aidan. I am the website designer for this. I look forward to creating a great and beautiful website that will effectively promote our mission!"
        />
        <MemberProfile 
        name="Candy Tan" 
        position="Historian" 
        bio="Hi, my name is Candy and I am the Historian this year! I am looking forward to working with my peers to grow the influence of this project and promote an understanding of personal finance."
        />
  </div>
  <div className="flex flex-col items-center mb-6 p-4">
  <h1 className='text-6xl font-bold mb-6'>
            Project Timeline
          </h1>
  <img src={timeline} className="w-5/6  rounded-lg shadow-lg"></img>
  </div>
  <Footer />
</div>

  );
}

export default App;
