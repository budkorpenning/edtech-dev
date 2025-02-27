interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'From Windows to Ubuntu: Embracing Open Source',
    description: `Ditching proprietary systems for the freedom of Linux. This project documents my transition 
    from Windows to Ubuntu, exploring the power, flexibility, and philosophy of open-source software. 
    From initial setup to daily workflows, I break down the key lessons learned along the way.`,
    imgSrc: '/static/images/ubuntu-migration.png',
    href: '/ubuntu-guides',
},
{
    title: 'Running a Local AI Model on Ubuntu',
    description: `Exploring the power of local AI models without relying on the cloud. This project details 
    my journey installing and running a large language model on my Ubuntu laptop. From setup challenges 
    to real-world performance, I dive into the potential of offline AI.`,
    imgSrc: '/static/images/local_ai.png',
    href: '/projects/local-ai',
},

]

export default projectsData
