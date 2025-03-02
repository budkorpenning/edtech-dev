interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  key: string
}

const projectsData: Project[] = [
  {
    title: 'From Windows to Ubuntu: Embracing Open Source',
    description: `Ditching proprietary systems for the freedom of Linux. This project documents my transition 
    from Windows to Ubuntu, exploring the power, flexibility, and philosophy of open-source software. 
    From initial setup to daily workflows, I break down the key lessons learned along the way.`,
    imgSrc: '/static/images/linux.webp',
    href: '/ubuntu-guides',
    key: 'ubuntu-guides'
},
  {
  title: 'AI-Powered Speech-to-Text Web App',
  description: `Build a practical speech-to-text application using local AI models. This project walks 
  through the entire process of creating a web application that transcribes spoken audio in real-time 
  with open-source AI technology. Perfect for educators and students looking to leverage AI for better 
  accessibility and content creation.`,
  imgSrc: '/static/images/speech-to-text.webp',
  href: '/speech-to-text-app',
  key: 'speech-to-text-app'
},
{
    title: 'Running a Local AI Model on Ubuntu',
    description: `Exploring the power of local AI models without relying on the cloud. This project details 
    my journey installing and running a large language model on my Ubuntu laptop. From setup challenges 
    to real-world performance, I dive into the potential of offline AI.`,
    imgSrc: '/static/images/local-ai.webp',
    href: '/local-ai',
    key: 'local-ai'
},

]

export default projectsData
