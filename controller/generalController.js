const kmeans = require("kmeans-js");
const User = require("../schemas/generalSchema");
const { saveDetails } = require("../repositories/generalRepository");

const programs = [
  {
    title: "Bachelor of Science in Computer Science",
    variables: [
      "software engineer",
      "systems software developer",
      "research and development computing professional",
      "applications software developer, computer programmer ",
      "applied mathematics ",
      "computer engineering",
      "electrical engineering",
      "electronics engineering",
      "entertainment and multimedia computing, mathematics",
      "physics",
      "statistics",
      "algorithms and complexities",
      "architecture and organization",
      "discrete structures",
      " programming languages",
      "software development fundamentals",
    ],
    about1: [
      "Computer science is the driving force behind our modern world. It is the key to unlocking the potential of technology and turning it into real-world solutions that can benefit society as a whole. With its ability to solve complex problems, design new systems and applications, and develop innovative software and hardware, computer science is essential to virtually every industry and aspect of life.",
      "At its core, computer science is about understanding how computers work and how they can be used to solve problems. It involves the study of algorithms, programming languages, data structures, databases, and other essential components of modern computing. With this knowledge, computer scientists can develop new software, hardware, and systems that can transform the way we live, work, and interact with the world around us.",
      "But computer science is much more than just programming and technical skills. It also requires creativity, critical thinking, and problem-solving skills. As a computer scientist, you will be constantly challenged to come up with new and innovative solutions to complex problems. You will need to be able to work collaboratively with others, communicate effectively, and be adaptable to change.",
      "In short, computer science is an exciting and dynamic field that offers endless opportunities for growth and innovation. Whether you are interested in developing new applications, working with cutting-edge technology, or solving some of the world's most pressing problems, computer science is the field for you. So if you are looking for a career that is both challenging and rewarding, consider pursuing a degree in computer science today.",
    ],
    about2: [
      "If you are looking for a degree that offers endless opportunities for growth, innovation, and intellectual challenge, then computer science is the perfect choice for you. Here are a few reasons why you should consider studying computer science:",
      "High demand for computer science professionals: The world is becoming increasingly digitized, and with that comes a growing demand for computer science professionals. From software development to data analysis, cybersecurity to artificial intelligence, there are endless job opportunities in this field.",
      "Endless opportunities for innovation: Computer science is a field that is constantly evolving, and as a computer science professional, you will be at the forefront of that innovation. You will have the opportunity to develop new software, hardware, and systems that can transform the way we live, work, and interact with the world around us.",
      "Competitive salary and benefits: Computer science is one of the highest-paying fields, with salaries that far exceed those of many other professions. Additionally, many employers offer excellent benefits packages, including health insurance, retirement plans, and paid time off.",
      "Flexibility and work-life balance: Many computer science jobs offer flexible working arrangements, including the ability to work from home or set your own schedule. This can make it easier to balance work with other important aspects of your life, such as family, friends, and hobbies.",
      "Opportunities for personal and professional growth: Computer science is a field that offers endless opportunities for personal and professional growth. Whether you want to specialize in a particular area of computer science, pursue advanced degrees, or take on leadership roles within your organization, the possibilities are virtually limitless.",
      "In short, if you are looking for a career that offers intellectual challenge, innovation, competitive salary, and excellent work-life balance, then computer science is the perfect choice for you. So don't hesitate – start exploring your options today!",
    ],
    about3: [
      "Software Developer: A software developer is responsible for designing, developing, and testing computer programs and applications. They work in various industries, such as finance, healthcare, and technology.",
      "Cybersecurity Analyst: A cybersecurity analyst protects an organization's computer systems from cyber attacks by developing and implementing security measures. They work in various industries, such as government, finance, and healthcare.",
      "Artificial Intelligence/Machine Learning Engineer: An AI/ML engineer is responsible for developing and implementing artificial intelligence and machine learning algorithms to solve complex problems. They work in various industries, such as healthcare, finance, and technology.",
      "Mobile Application Developer: A mobile application developer is responsible for designing, developing, and testing mobile applications for various platforms, such as iOS and Android. They work in various industries, such as technology and entertainment.",
      "Web And Application developer: A software developer designs, creates, and maintains software applications for computers, mobile devices, and other devices. This is a highly in-demand job, and there are many different types of software development jobs, such as web development, mobile app development, and game development.",
    ],
    link: "",
  },
  {
    title: "Bachelor of Science in Information Technology",
    variables: [
      "web and applications developer",
      "junior database administrator",
      "systems administrator",
      "network engineer",
      "junior information security administrator",
      " systems integration personnel",
      "it audit assistant",
      "technical support specialist",
      "computer engineering",
      " electrical engineering",
      "electronics engineering",
      " informatics",
      "information management",
      "information technology fundamentals",
      " human computer interaction",
      " web systems and technologies",
      "networking",
      "platform technologies",
      "systems integration and architecture",
    ],
    about1: [
      "An Information Technology (IT) degree is an excellent choice for anyone looking to pursue a career in the rapidly growing and ever-changing field of technology. This degree program provides students with a strong foundation in the fundamental principles of computer science, programming, and data analysis, as well as an understanding of how technology is used in business and other industries. Here are some reasons why you should consider pursuing an IT degree:",
      "High demand for IT professionals: In today's digital age, businesses and organizations of all sizes rely heavily on technology to function, creating a high demand for IT professionals. This means that an IT degree can lead to many career opportunities, including roles such as IT manager, network administrator, database analyst, cybersecurity specialist, and more.",
      "Versatility of IT skills: The skills and knowledge gained through an IT degree program are highly versatile, making graduates valuable assets to a wide range of industries. IT professionals are needed in everything from healthcare and finance to education and entertainment, meaning that an IT degree can lead to a diverse array of job opportunities.",
      "Competitive salaries and benefits: IT professionals are some of the highest-paid professionals in the job market, with salaries that continue to increase as demand for their skills grows. Additionally, many employers offer excellent benefits packages, including health insurance, retirement plans, and paid time off.",
      "Opportunities for innovation and creativity: IT professionals are often at the forefront of technological innovation and creativity, developing new software, hardware, and systems that can transform the way we live, work, and interact with the world around us. An IT degree can provide you with the skills and knowledge to be a part of this exciting and dynamic field.",
      "Work-life balance and flexibility: Many IT jobs offer flexible working arrangements, including the ability to work remotely or set your own schedule. This can make it easier to balance work with other important aspects of your life, such as family, friends, and hobbies.",
    ],
    about2: [
      "Choosing a degree program can be a daunting task, but pursuing an Information Technology (IT) degree is an excellent choice for many reasons. Here are some persuasive reasons why you should consider taking an IT degree:",
      "High demand for IT professionals: As technology continues to shape every aspect of our lives, the demand for IT professionals is skyrocketing. Every industry from healthcare to finance needs skilled IT professionals, which means there are many opportunities for employment and career growth.",
      "Wide range of career opportunities: IT professionals can choose from a wide range of careers, including software development, network administration, cybersecurity, database management, and more. This diversity of opportunities means you can explore different career paths and find the one that best aligns with your interests and skills.",
      "High earning potential: IT professionals are among the highest-paid professionals in the job market. According to the Bureau of Labor Statistics, the median annual salary for computer and information technology occupations was over $91,000 in 2020, and many IT professionals earn well over six figures.",
      "Job security: As technology continues to evolve and become more complex, the need for IT professionals will only increase. This means that jobs in the IT field offer a high degree of job security, which can provide peace of mind in uncertain economic times.",
      "Flexibility and work-life balance: Many IT jobs offer flexible working arrangements, such as remote work or flexible schedules. This can provide a better work-life balance and allow you to pursue other interests or spend time with family and friends.",
      "Intellectual challenge and creativity: IT is a field that requires constant learning and problem-solving. IT professionals are responsible for designing and implementing systems that are efficient, secure, and reliable. This can provide a sense of intellectual challenge and creativity, as you work to develop new solutions to complex problems.",
      "In conclusion, pursuing an IT degree offers many benefits, including high earning potential, job security, a wide range of career opportunities, and flexibility. The field of IT is constantly evolving, which means that pursuing a degree in this field will allow you to be at the forefront of innovation and technology. So, if you're looking for a challenging and rewarding career that offers endless opportunities for growth and success, an IT degree is the perfect choice for you.",
    ],
    about3: [
      "Web And Application developer: A software developer designs, creates, and maintains software applications for computers, mobile devices, and other devices. This is a highly in-demand job, and there are many different types of software development jobs, such as web development, mobile app development, and game development.",
      "Network administrator: A network administrator is responsible for managing and maintaining an organization's computer networks, including local area networks (LANs), wide area networks (WANs), and intranets. This includes installing, configuring, and troubleshooting network hardware and software.",
      "Cybersecurity specialist: A cybersecurity specialist is responsible for protecting an organization's computer systems and networks from cyber threats such as hacking, phishing, and malware. This includes implementing security protocols, monitoring networks for security breaches, and responding to security incidents.",
      "Database administrator: A database administrator manages an organization's databases, including designing, implementing, and maintaining databases that store critical information such as customer data, financial records, and inventory.",
      "IT project manager: An IT project manager oversees the planning, implementation, and delivery of IT projects, such as software development projects, network upgrades, and cybersecurity initiatives. They are responsible for ensuring that projects are completed on time, within budget, and to the required specifications.",
      "IT consultant: An IT consultant provides expert advice and guidance to organizations on how to use technology to achieve their business goals. This includes identifying areas where technology can improve business operations, developing technology strategies, and implementing technology solutions.",
      "Technical writer: A technical writer creates documentation for software applications, computer systems, and other technical products. This includes user manuals, installation guides, and technical specifications.",
    ],
    link: "",
  },
  {
    title: "Bachelor of Science in Information System",
    variables: [
      "organizational process analyst",
      "data analyst",
      "solutions specialist",
      "systems analyst",
      "is project management personnel",
      "applied mathematics",
      "industrial engineering",
      "information management",
      " library and information science",
      "statistics",
      " fundamentals of is,",
      "professional issues in information systems",
      " it infrastructure and network technologies",
      " systems analysis",
      " design and development",
      " enterprise architectures",
      " is project management",
      "is strategy",
      " management and acquisition",
      " informatics",
    ],
    about1: [
      "An Information Systems degree is an academic program that focuses on the study of information technology (IT) and its application in businesses and organizations. The degree program covers a range of topics, including database management, computer networking, software development, web development, project management, and information security.",
      "An Information Systems degree typically prepares students for careers in IT-related fields, such as systems analysis, information security administrator, is project management personnel, network administration, and project management. Graduates of the program are trained to design, develop, implement and manage complex information systems that can help organizations achieve their goals and objectives.",
      "The curriculum of an Information Systems degree program may vary depending on the institution offering the program, but it generally includes a mix of coursework in computer science, business, and management. Graduates of the program should have a solid understanding of both the technical and business aspects of information systems, which makes them highly desirable to employers in various industries.",
    ],
    about2: [
      "High demand for professionals: The field of Information Systems is rapidly growing, and there is a high demand for qualified professionals who can design, develop, implement and manage complex information systems. This means that graduates of Information Systems programs are likely to have many job opportunities available to them.",
      "Diverse career options: An Information Systems degree can prepare you for a variety of careers, including database administrator, network administrator, systems analyst, web developer, and project manager. This diversity of career options means that you can find a job that aligns with your interests and skill set.",
      "Excellent earning potential: Due to the high demand for Information Systems professionals, these careers tend to offer above-average salaries. This means that you can expect to earn a good living if you pursue a career in this field",
      "Opportunities for advancement: The field of Information Systems is constantly evolving, and there are always new technologies and tools emerging. This means that there are always opportunities for Information Systems professionals to continue learning and growing in their careers.",
      "Importance in modern business: In today's digital age, businesses rely heavily on technology to manage their operations and stay competitive. An Information Systems degree can give you the skills and knowledge you need to help businesses leverage technology effectively and efficiently.",
      "Overall, an Information Systems degree can be a great choice if you are interested in technology and want to pursue a career that offers high earning potential, diverse career options, and opportunities for advancement.",
    ],
    about3: [
      "Systems Analyst: In this role, you would be responsible for analyzing an organization's computer systems and procedures, identifying problems and opportunities for improvement, and designing and implementing new systems and processes to increase efficiency and productivity.",
      "Data Analyst: A data analyst collects, analyzes, and interprets complex data sets to help organizations make informed decisions. They work in various industries, such as marketing, healthcare, and finance.",
      "Project Manager: In this role, you would be responsible for overseeing the development and implementation of information systems projects. You would be responsible for ensuring that the project is completed on time and within budget, and that it meets the needs of the organization.",
    ],
    link: "",
  },
  {
    title: "Bachelor of Science in Computer Science",
    variables: [
      "software engineer",
      "systems software developer",
      "research and development computing professional",
      "applications software developer, computer programmer ",
      "applied mathematics ",
      "computer engineering",
      "electrical engineering",
      "electronics engineering",
      "entertainment and multimedia computing, mathematics",
      "physics",
      "statistics",
      "algorithms and complexities",
      "architecture and organization",
      "discrete structures",
      " programming languages",
      "software development fundamentals",
    ],
    about1: [
      "Computer science is the driving force behind our modern world. It is the key to unlocking the potential of technology and turning it into real-world solutions that can benefit society as a whole. With its ability to solve complex problems, design new systems and applications, and develop innovative software and hardware, computer science is essential to virtually every industry and aspect of life.",
      "At its core, computer science is about understanding how computers work and how they can be used to solve problems. It involves the study of algorithms, programming languages, data structures, databases, and other essential components of modern computing. With this knowledge, computer scientists can develop new software, hardware, and systems that can transform the way we live, work, and interact with the world around us.",
      "But computer science is much more than just programming and technical skills. It also requires creativity, critical thinking, and problem-solving skills. As a computer scientist, you will be constantly challenged to come up with new and innovative solutions to complex problems. You will need to be able to work collaboratively with others, communicate effectively, and be adaptable to change.",
      "In short, computer science is an exciting and dynamic field that offers endless opportunities for growth and innovation. Whether you are interested in developing new applications, working with cutting-edge technology, or solving some of the world's most pressing problems, computer science is the field for you. So if you are looking for a career that is both challenging and rewarding, consider pursuing a degree in computer science today.",
    ],
    about2: [
      "If you are looking for a degree that offers endless opportunities for growth, innovation, and intellectual challenge, then computer science is the perfect choice for you. Here are a few reasons why you should consider studying computer science:",
      "High demand for computer science professionals: The world is becoming increasingly digitized, and with that comes a growing demand for computer science professionals. From software development to data analysis, cybersecurity to artificial intelligence, there are endless job opportunities in this field.",
      "Endless opportunities for innovation: Computer science is a field that is constantly evolving, and as a computer science professional, you will be at the forefront of that innovation. You will have the opportunity to develop new software, hardware, and systems that can transform the way we live, work, and interact with the world around us.",
      "Competitive salary and benefits: Computer science is one of the highest-paying fields, with salaries that far exceed those of many other professions. Additionally, many employers offer excellent benefits packages, including health insurance, retirement plans, and paid time off.",
      "Flexibility and work-life balance: Many computer science jobs offer flexible working arrangements, including the ability to work from home or set your own schedule. This can make it easier to balance work with other important aspects of your life, such as family, friends, and hobbies.",
      "Opportunities for personal and professional growth: Computer science is a field that offers endless opportunities for personal and professional growth. Whether you want to specialize in a particular area of computer science, pursue advanced degrees, or take on leadership roles within your organization, the possibilities are virtually limitless.",
      "In short, if you are looking for a career that offers intellectual challenge, innovation, competitive salary, and excellent work-life balance, then computer science is the perfect choice for you. So don't hesitate – start exploring your options today!",
    ],
    about3: [
      "Software Developer: A software developer is responsible for designing, developing, and testing computer programs and applications. They work in various industries, such as finance, healthcare, and technology.",
      "Cybersecurity Analyst: A cybersecurity analyst protects an organization's computer systems from cyber attacks by developing and implementing security measures. They work in various industries, such as government, finance, and healthcare.",
      "Artificial Intelligence/Machine Learning Engineer: An AI/ML engineer is responsible for developing and implementing artificial intelligence and machine learning algorithms to solve complex problems. They work in various industries, such as healthcare, finance, and technology.",
      "Mobile Application Developer: A mobile application developer is responsible for designing, developing, and testing mobile applications for various platforms, such as iOS and Android. They work in various industries, such as technology and entertainment.",
      "Web And Application developer: A software developer designs, creates, and maintains software applications for computers, mobile devices, and other devices. This is a highly in-demand job, and there are many different types of software development jobs, such as web development, mobile app development, and game development.",
    ],
    link: "",
  },
  {
    title: "Bachelor of Science in Information Technology",
    variables: [
      "web and applications developer",
      "junior database administrator",
      "systems administrator",
      "network engineer",
      "junior information security administrator",
      " systems integration personnel",
      "it audit assistant",
      "technical support specialist",
      "computer engineering",
      " electrical engineering",
      "electronics engineering",
      " informatics",
      "information management",
      "information technology fundamentals",
      " human computer interaction",
      " web systems and technologies",
      "networking",
      "platform technologies",
      "systems integration and architecture",
    ],
    about1: [
      "An Information Technology (IT) degree is an excellent choice for anyone looking to pursue a career in the rapidly growing and ever-changing field of technology. This degree program provides students with a strong foundation in the fundamental principles of computer science, programming, and data analysis, as well as an understanding of how technology is used in business and other industries. Here are some reasons why you should consider pursuing an IT degree:",
      "High demand for IT professionals: In today's digital age, businesses and organizations of all sizes rely heavily on technology to function, creating a high demand for IT professionals. This means that an IT degree can lead to many career opportunities, including roles such as IT manager, network administrator, database analyst, cybersecurity specialist, and more.",
      "Versatility of IT skills: The skills and knowledge gained through an IT degree program are highly versatile, making graduates valuable assets to a wide range of industries. IT professionals are needed in everything from healthcare and finance to education and entertainment, meaning that an IT degree can lead to a diverse array of job opportunities.",
      "Competitive salaries and benefits: IT professionals are some of the highest-paid professionals in the job market, with salaries that continue to increase as demand for their skills grows. Additionally, many employers offer excellent benefits packages, including health insurance, retirement plans, and paid time off.",
      "Opportunities for innovation and creativity: IT professionals are often at the forefront of technological innovation and creativity, developing new software, hardware, and systems that can transform the way we live, work, and interact with the world around us. An IT degree can provide you with the skills and knowledge to be a part of this exciting and dynamic field.",
      "Work-life balance and flexibility: Many IT jobs offer flexible working arrangements, including the ability to work remotely or set your own schedule. This can make it easier to balance work with other important aspects of your life, such as family, friends, and hobbies.",
    ],
    about2: [
      "Choosing a degree program can be a daunting task, but pursuing an Information Technology (IT) degree is an excellent choice for many reasons. Here are some persuasive reasons why you should consider taking an IT degree:",
      "High demand for IT professionals: As technology continues to shape every aspect of our lives, the demand for IT professionals is skyrocketing. Every industry from healthcare to finance needs skilled IT professionals, which means there are many opportunities for employment and career growth.",
      "Wide range of career opportunities: IT professionals can choose from a wide range of careers, including software development, network administration, cybersecurity, database management, and more. This diversity of opportunities means you can explore different career paths and find the one that best aligns with your interests and skills.",
      "High earning potential: IT professionals are among the highest-paid professionals in the job market. According to the Bureau of Labor Statistics, the median annual salary for computer and information technology occupations was over $91,000 in 2020, and many IT professionals earn well over six figures.",
      "Job security: As technology continues to evolve and become more complex, the need for IT professionals will only increase. This means that jobs in the IT field offer a high degree of job security, which can provide peace of mind in uncertain economic times.",
      "Flexibility and work-life balance: Many IT jobs offer flexible working arrangements, such as remote work or flexible schedules. This can provide a better work-life balance and allow you to pursue other interests or spend time with family and friends.",
      "Intellectual challenge and creativity: IT is a field that requires constant learning and problem-solving. IT professionals are responsible for designing and implementing systems that are efficient, secure, and reliable. This can provide a sense of intellectual challenge and creativity, as you work to develop new solutions to complex problems.",
      "In conclusion, pursuing an IT degree offers many benefits, including high earning potential, job security, a wide range of career opportunities, and flexibility. The field of IT is constantly evolving, which means that pursuing a degree in this field will allow you to be at the forefront of innovation and technology. So, if you're looking for a challenging and rewarding career that offers endless opportunities for growth and success, an IT degree is the perfect choice for you.",
    ],
    about3: [
      "Web And Application developer: A software developer designs, creates, and maintains software applications for computers, mobile devices, and other devices. This is a highly in-demand job, and there are many different types of software development jobs, such as web development, mobile app development, and game development.",
      "Network administrator: A network administrator is responsible for managing and maintaining an organization's computer networks, including local area networks (LANs), wide area networks (WANs), and intranets. This includes installing, configuring, and troubleshooting network hardware and software.",
      "Cybersecurity specialist: A cybersecurity specialist is responsible for protecting an organization's computer systems and networks from cyber threats such as hacking, phishing, and malware. This includes implementing security protocols, monitoring networks for security breaches, and responding to security incidents.",
      "Database administrator: A database administrator manages an organization's databases, including designing, implementing, and maintaining databases that store critical information such as customer data, financial records, and inventory.",
      "IT project manager: An IT project manager oversees the planning, implementation, and delivery of IT projects, such as software development projects, network upgrades, and cybersecurity initiatives. They are responsible for ensuring that projects are completed on time, within budget, and to the required specifications.",
      "IT consultant: An IT consultant provides expert advice and guidance to organizations on how to use technology to achieve their business goals. This includes identifying areas where technology can improve business operations, developing technology strategies, and implementing technology solutions.",
      "Technical writer: A technical writer creates documentation for software applications, computer systems, and other technical products. This includes user manuals, installation guides, and technical specifications.",
    ],
    link: "",
  },
  {
    title: "Bachelor of Science in Information System",
    variables: [
      "organizational process analyst",
      "data analyst",
      "solutions specialist",
      "systems analyst",
      "is project management personnel",
      "applied mathematics",
      "industrial engineering",
      "information management",
      " library and information science",
      "statistics",
      " fundamentals of is,",
      "professional issues in information systems",
      " it infrastructure and network technologies",
      " systems analysis",
      " design and development",
      " enterprise architectures",
      " is project management",
      "is strategy",
      " management and acquisition",
      " informatics",
    ],
    about1: [
      "An Information Systems degree is an academic program that focuses on the study of information technology (IT) and its application in businesses and organizations. The degree program covers a range of topics, including database management, computer networking, software development, web development, project management, and information security.",
      "An Information Systems degree typically prepares students for careers in IT-related fields, such as systems analysis, information security administrator, is project management personnel, network administration, and project management. Graduates of the program are trained to design, develop, implement and manage complex information systems that can help organizations achieve their goals and objectives.",
      "The curriculum of an Information Systems degree program may vary depending on the institution offering the program, but it generally includes a mix of coursework in computer science, business, and management. Graduates of the program should have a solid understanding of both the technical and business aspects of information systems, which makes them highly desirable to employers in various industries.",
    ],
    about2: [
      "High demand for professionals: The field of Information Systems is rapidly growing, and there is a high demand for qualified professionals who can design, develop, implement and manage complex information systems. This means that graduates of Information Systems programs are likely to have many job opportunities available to them.",
      "Diverse career options: An Information Systems degree can prepare you for a variety of careers, including database administrator, network administrator, systems analyst, web developer, and project manager. This diversity of career options means that you can find a job that aligns with your interests and skill set.",
      "Excellent earning potential: Due to the high demand for Information Systems professionals, these careers tend to offer above-average salaries. This means that you can expect to earn a good living if you pursue a career in this field",
      "Opportunities for advancement: The field of Information Systems is constantly evolving, and there are always new technologies and tools emerging. This means that there are always opportunities for Information Systems professionals to continue learning and growing in their careers.",
      "Importance in modern business: In today's digital age, businesses rely heavily on technology to manage their operations and stay competitive. An Information Systems degree can give you the skills and knowledge you need to help businesses leverage technology effectively and efficiently.",
      "Overall, an Information Systems degree can be a great choice if you are interested in technology and want to pursue a career that offers high earning potential, diverse career options, and opportunities for advancement.",
    ],
    about3: [
      "Systems Analyst: In this role, you would be responsible for analyzing an organization's computer systems and procedures, identifying problems and opportunities for improvement, and designing and implementing new systems and processes to increase efficiency and productivity.",
      "Data Analyst: A data analyst collects, analyzes, and interprets complex data sets to help organizations make informed decisions. They work in various industries, such as marketing, healthcare, and finance.",
      "Project Manager: In this role, you would be responsible for overseeing the development and implementation of information systems projects. You would be responsible for ensuring that the project is completed on time and within budget, and that it meets the needs of the organization.",
    ],
    link: "",
  },
];

const kmeansFunction = async (req, res) => {
  try {
    const inputtedData = req.body;

    // user input variable
    const userInput = inputtedData.checkedItems;
    const userName = inputtedData.name;
    const userEmail = inputtedData.email;

    console.log("User Input");
    console.log(userInput);

    // convert variable into numeric values for k-means clustering
    const programValues = {};
    let value = 1;
    programs.forEach((program) => {
      program.variables.forEach((variable) => {
        if (!programValues[variable]) {
          programValues[variable] = value;
          value++;
        }
      });
    });
    // console.log(programValues)

    // cluster programs using k-means
    const data = [];
    programs.forEach((program) => {
      const point = [];
      Object.keys(programValues).forEach((variable) => {
        point.push(program.variables.includes(variable) ? 1 : 0);
      });
      data.push(point);
    });
    // console.log(data);

    var km = new kmeans({
      k: 2,
    });

    km.cluster(data);
    while (km.step()) {
      km.findClosestCentroids();
      km.moveCentroids();

      if (km.hasConverged()) break;
    }

    // find cluster with most same variable of user input genres
    let maxCount = 0;
    let maxCluster = null;
    km.clusters.forEach((cluster) => {
      let count = 0;
      //console.log(cluster);
      cluster.forEach((programIndex) => {
        const program = programs[programIndex];
        if (
          userInput.some((variable) => program.variables.includes(variable))
        ) {
          count++;
        }
      });
      if (count > maxCount) {
        maxCount = count;
        maxCluster = cluster;
      }
    });
    // console.log(maxCount);
    // console.log(maxCluster);
    //console.log(userGenres);

    // // recommend a program from the maxCluster
    let recommendedProgram = null;
    let maxScore = 0;

    maxCluster.forEach((programIndex) => {
      const program = programs[programIndex];
      let score = 0;
      userInput.forEach((variable) => {
        for (let i = 0; i < program.variables.length; i++) {
          if (program.variables[i] === variable) {
            score++;
          }
        }
      });
      if (score > maxScore) {
        maxScore = score;
        recommendedProgram = program;
      }
    });

    const payload = {
      name: userName,
      email: userEmail,
      checkedItems: userInput,
      recommendedCourse: recommendedProgram.title,
    };
    console.log(
      `Recommended program: ${recommendedProgram.title} ${payload.recommendedCourse}`
    );
    const result = await saveDetails(payload);

    console.log(result);
    const { title, about1, about2, about3 } = recommendedProgram;
    res.json({ title, about1, about2, about3 });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something went wrong", error: error.message });
  }
};

const fetchRecords = async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).send({ message: "Success", data: result });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something went wrong", error: error.message });
  }
};

exports.kmeansFunction = kmeansFunction;
exports.fetchRecords = fetchRecords;
