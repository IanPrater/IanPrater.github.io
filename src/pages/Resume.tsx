
import { Box, Fab, Link } from '@mui/material';
import './resume.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function () {



  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Link href="/resume.pdf">
        <Fab 
            variant="extended" 
            color="primary"
            sx={{
              position: 'absolute',
              right: '5%',
              bottom: '5%',
              transition: 'all 0.3s ease',
              zIndex: 1000 // Ensures the Fab is visible on top of other content
            }}
            >
          <FileDownloadIcon sx={{ mr: 1 }} />
          Download PDF
        </Fab>
      </Link>

    
      <div className='Resume-div' style={{ border: '1px solid #ccc', padding: 25}}>
        <h1 id="-welcome-to-my-resume-website-">👋 Welcome to my resume website!</h1>
        <p>Hi there! I&#39;m <strong>Ian Prater</strong>, a passionate Software Engineer with a strong background in web development, AI, and game development. Thanks for stopping by—feel free to explore my resume below, and don&#39;t hesitate to reach out if you&#39;d like to connect!</p>
        <p><a href="mailto:IanLeonardPrater@gmail.com">Contact Me</a></p>
        <hr/>
        <h2 id="-work-experience">💼 Work Experience</h2>
        <h3 id="software-engineer-ii">Software Engineer II</h3>
        <p><strong>Noatum Logistics</strong><br/><em>October 2023 – Present</em>  </p>
        <ul>
        <li>Contributing to the development and maintenance of <span><strong>enterprise-level web applications</strong></span>, focusing on enhancing <span><strong>performance</strong></span> and optimizing <span><strong>code</strong></span>.</li>
        <li>Collaborating with <span><strong>cross-functional teams</strong></span> to implement new <span><strong>features</strong></span> and resolve <span><strong>issues</strong></span> across multiple platforms.</li>
        <li>Working with technologies such as <span><strong>C#</strong></span>, <span><strong>ASP.NET Core</strong></span>, and <span><strong>Kendo UI</strong></span> to improve <span><strong>workflows</strong></span> and <span><strong>user experiences</strong></span>.</li>
        <li>Assisting in implementing <span><strong>cloud migration strategies</strong></span> to increase <span><strong>scalability</strong></span> and reduce <span><strong>infrastructure costs</strong></span>.</li>
        </ul>
        <h3 id="software-developer-i">Software Developer I</h3>
        <p><strong>Yellow Corporation</strong><br/><em>October 2020 – July 2023</em>  </p>
        <ul>
        <li>Collaborated on a <span><strong>large-scale</strong></span> freight management system using <span><strong>Java</strong></span> and <span><strong>Spring Boot</strong></span>.</li>
        <li>Contributed to the <span><strong>database design</strong></span> and integration for the management of real-time freight data using <span><strong>SQL Server</strong></span>.</li>
        <li>Worked closely with team members to troubleshoot and resolve system-related issues, ensuring seamless operation.</li>
        </ul>
        <h3 id="intern-in-ai-research">Intern in AI Research</h3>
        <p><strong>U.S. Air Force</strong><br/><em>June 2019 – August 2019</em>  </p>
        <ul>
        <li>Assisted in research projects involving <span><strong>machine learning</strong></span> and <span><strong>data analysis</strong></span> for defense applications.</li>
        <li>Developed prototypes for data processing algorithms, contributing to the team&#39;s <span><strong>AI initiatives</strong></span>.</li>
        </ul>
        <h3 id="teaching-assistant">Teaching Assistant</h3>
        <p><strong>University of Central Missouri</strong><br/><em>January 2019 – May 2020</em>  </p>
        <ul>
        <li>Supported computer science faculty by helping students with programming assignments and project development.</li>
        <li>Conducted review sessions for various subjects, enhancing student understanding and performance.</li>
        </ul>
        <hr/>
        <h2 id="-skills">🛠️ Skills</h2>
        <ul>
        <li><strong>Languages</strong>: <span><strong>Java</strong></span>, <span><strong>C#</strong></span>, <span><strong>JavaScript</strong></span>, <span><strong>TypeScript</strong></span>, <span><strong>Python</strong></span>, <span><strong>SQL</strong></span></li>
        <li><strong>Frameworks</strong>: <span><strong>Spring Boot</strong></span>, <span><strong>React</strong></span>, <span><strong>Vue.js</strong></span>, <span><strong>ASP.NET Core</strong></span></li>
        <li><strong>Tools</strong>: <span><strong>Git</strong></span>, <span><strong>Docker</strong></span>, <span><strong>Jenkins</strong></span>, <span><strong>Postman</strong></span>, <span><strong>Jira</strong></span>, <span><strong>MongoDB</strong></span></li>
        <li><strong>Development</strong>: <span><strong>Full Stack Web Development</strong></span>, <span><strong>Game Development</strong></span>, <span><strong>AI &amp; Machine Learning</strong></span></li>
        </ul>
        <hr/>
        <h2 id="-education">🎓 Education</h2>
        <h3 id="bachelor-of-science-in-computer-science">Bachelor of Science in Computer Science</h3>
        <p><strong>University of Central Missouri</strong><br/><em>May 2020</em>  </p>
        <ul>
        <li>Graduated <strong>Summa Cum Laude</strong>  </li>
        <li><span><strong>3.8</strong></span> GPA </li>
        <li>Relevant Coursework: <span><strong>Data Structures</strong></span>, <span><strong>Algorithms</strong></span>, <span><strong>Database Management</strong></span>, <span><strong>Software Engineering</strong></span></li>
        </ul>
        <h3 id="certifications">Certifications</h3>
        <ul>
        <li><span><strong>SQL Training</strong></span> - The University of Akron, February 2022  </li>
        <li><span><strong>Full Stack Web Development</strong></span> - Johnson County Community College, May 2024  </li>
        </ul>
        <hr/>
        <h2 id="-additional-information">🌱 Additional Information</h2>
        <ul>
        <li><strong>Interests</strong>: <span><strong>Game development</strong></span>, <span><strong>AI research</strong></span>, <span><strong>modern surrealism</strong></span>.</li>
        <li><strong>Other Projects</strong>: I am often spending time working on personal projects such as Video Games and Simulation applications.</li>
        </ul>
      </div>
    </Box>
  );
}