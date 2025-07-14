const products = [
  {
    id: 1,
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    price: 309000,
    Originalprice: 400000,
    image: "/assets/images01.jpg",
    category: "Lập trình website",
    shortDescription: "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
    description: `
      The Ultimate React Course 2025 is the most complete guide to mastering modern web development with React and its ecosystem.
      You will learn:
      - React fundamentals: JSX, Components, Hooks, Context API
      - Build full-stack apps with Next.js (SSR, SSG, API Routes)
      - Manage state using Redux Toolkit
      - Style apps with Tailwind CSS
      - Work with TypeScript and React Query
      - Deploy your applications to Vercel, Netlify, or AWS
      This course is perfect for beginners and experienced developers who want to stay ahead in 2025's tech landscape.
    `,
    rating: 5.0,
    student: 2459,
    review: 1320,
  },
  {
    id: 2,
    name: "Master JavaScript, HTML, and CSS with 30 Projects in 30 Days",
    price: 1200000,
    Originalprice: 1800000,
    image: "/assets/images02.jpg",
    category: "Lập trình website",
    shortDescription: "Learn JavaScript 30 Projects, HTML, and CSS Complete 30 Projects in 30 Days for Beginners 30 Projects in 30 Days",
    description: `
      Master core web development skills by building 30 real-world projects in just 30 days. 
      This hands-on course covers the fundamentals of JavaScript, HTML, and CSS while giving you practical experience every single day.
      You will learn:
      - Build interactive websites using modern JavaScript, HTML5, and CSS3.
      - Create animations, sliders, forms, and dynamic UI components.
      - Work with DOM manipulation and event handling.
      - Apply responsive design to make your sites mobile-friendly.
      - Build games, apps, and utilities that solve real problems.
      - Improve your problem-solving and coding speed through daily challenges.
      - Deploy your projects to GitHub Pages and Netlify.
      Perfect for beginners and those who want to sharpen their frontend development skills by practicing consistently.
    `,
    rating: 4.0,
    student: 2259,
    review: 320,
  },
  {
    id: 3,
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    price: 309000,
    Originalprice: 450000,
    image: "/assets/images03.jpg",
    category: "Lập trình website",
    shortDescription: "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
    description: `
    Master modern web development with the most comprehensive React course of 2025. 
    This hands-on course takes you from beginner to advanced, covering everything you need to build powerful, production-ready web applications.
    You will learn:
    - Build dynamic and responsive user interfaces with React and modern JavaScript.
    - Master core concepts like components, hooks, context API, and state management.
    - Develop full-stack applications using Next.js with SSR, SSG, and API Routes.
    - Manage complex application states efficiently with Redux Toolkit and Context API.
    - Style your apps with Tailwind CSS and work with TypeScript for scalable, type-safe code.
    - Fetch and manage data asynchronously with React Query and Axios.
    - Deploy your applications to Vercel, Netlify, or AWS with CI/CD workflows.
    - Apply best practices for performance optimization, testing, and maintainable architecture.
    Perfect for aspiring front-end developers, full-stack engineers, and anyone who wants to stay ahead in the fast-evolving React ecosystem of 2025.
    `,
    rating: 4.7,
    student: 2156,
    review: 820,
  },
  {
    id: 4,
    name: "Aprende MySQL sin dolor (con phpMyAdmin)",
    price: 300900,
    Originalprice: 510000,
    image: "/assets/images04.jpg",
    category: "Lập trình website",
    shortDescription: "En este curso aprenderás a manejar esta base de datos, con más de 6 millones de instalaciones en el mundo.",
    description: `
    Aprende a manejar bases de datos MySQL desde cero de manera sencilla y práctica utilizando phpMyAdmin. 
    Este curso está diseñado para que entiendas los fundamentos de las bases de datos relacionales y puedas crear, gestionar y consultar tus propias bases de datos con facilidad.
    Aprenderás a:
    - Comprender el modelo relacional y la estructura de una base de datos MySQL.
    - Crear bases de datos, tablas y relaciones entre ellas utilizando phpMyAdmin.
    - Insertar, modificar, eliminar y consultar datos con sentencias SQL básicas y avanzadas.
    - Aplicar filtros, ordenar resultados y usar funciones SQL.
    - Administrar usuarios, permisos y respaldos de base de datos.
    - Optimizar consultas y mejorar el rendimiento de tu base de datos.
    - Desarrollar proyectos web que utilicen MySQL como base de datos.
    Ideal para principiantes, estudiantes y desarrolladores que buscan aprender MySQL de forma rápida y sin complicaciones técnicas.
    `,
    rating: 4.5,
    student: 4411,
    review: 520,
  },
  {
    id: 5,
    name: "AI AUTOMATION IN BUSINESS",
    price: 2309000,
    Originalprice: 2900000,
    image: "/assets/images05.jpg",
    category: "AI",
    shortDescription: "Generative AI, AI automation, Create GenAI Chatbot, Learn ChatGPT, LLM, Start Your Generative AI, LLM, Prompt",
    description: `
    Discover how to harness the power of Artificial Intelligence to streamline business processes, improve productivity, and drive growth. 
    This practical course covers the tools and strategies needed to implement AI-powered automation across various business functions.
    You will learn:
    - Understand the fundamentals of AI automation and its impact on business operations.
    - Automate repetitive tasks in marketing, sales, HR, and customer support.
    - Integrate AI chatbots, virtual assistants, and workflow automation tools.
    - Leverage platforms like Zapier, Make (Integromat), and OpenAI APIs for automation.
    - Analyze business data to drive AI-powered decision-making and insights.
    - Design end-to-end automated workflows to save time and reduce manual errors.
    - Develop strategies to successfully implement AI automation in small and large businesses.
    Perfect for business owners, managers, and professionals looking to increase efficiency, reduce costs, and gain a competitive edge through AI automation.
    `,
    rating: 3.5,
    student: 3450,
    review: 921,
  },
  {
    id: 6,
    name: "Artificial Intelligence A-Z 2025: Agentic AI, Gen AI, and RL",
    price: 439000,
    Originalprice: 507000,
    image: "/assets/images06.jpg",
    category: "AI",
    shortDescription: "Combine the power of Agentic AI, Generative AI, Reinforcement Learning to create powerful AI for Real-World applications",
    description: `
    Master the full spectrum of Artificial Intelligence in 2025 — from foundational AI concepts to cutting-edge Agentic AI, Generative AI, and Reinforcement Learning. 
    This hands-on course equips you with practical skills to build intelligent systems that learn, create, and act autonomously.
    You will learn:
    - Understand the core concepts of AI, machine learning, and deep learning.
    - Build intelligent agents capable of autonomous decision-making and task execution.
    - Create generative AI applications using Large Language Models (LLMs), image generators, and creative AI tools.
    - Apply reinforcement learning (RL) to train agents in dynamic environments.
    - Work with frameworks like OpenAI Gym, Stable Baselines, TensorFlow, and PyTorch.
    - Explore agent frameworks such as AutoGen, CrewAI, and LangGraph for building multi-agent systems.
    - Deploy AI-powered solutions in real-world scenarios across industries.
    - Understand the ethical considerations and limitations of agentic and generative AI.
    Perfect for AI engineers, developers, researchers, and innovators who want to master the next generation of Artificial Intelligence technologies shaping the future.
    `,
    rating: 5.0,
    student: 1459,
    review: 168,
  },
    {
    id: 7,
    name: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
    price: 279000,
    Originalprice: 340000,
    image: "/assets/images07.jpg",
    category: "AI",
    shortDescription: "Complete AI Engineer Training: Python, NLP, Transformers, LLMs, LangChain, Hugging Face, APIs",
    description: `
    Become a highly skilled AI Engineer with this all-in-one bootcamp covering the latest tools, frameworks, and practical projects. 
    This complete course takes you from AI fundamentals to advanced machine learning, deep learning, and AI application deployment.
    You will learn:
    - Master the foundations of Artificial Intelligence, Machine Learning, and Deep Learning.
    - Build AI models using Python, TensorFlow, PyTorch, and Scikit-learn.
    - Work with natural language processing (NLP), computer vision, and recommendation systems.
    - Fine-tune and deploy Large Language Models (LLMs) like OpenAI GPT and open-source models.
    - Create AI-powered chatbots, smart applications, and automation tools.
    - Understand MLOps, model deployment, and monitoring with AWS, Azure, and GCP.
    - Work on real-world projects in AI product development and AI engineering pipelines.
    - Apply ethical AI principles and understand responsible AI practices.
    Perfect for software engineers, data scientists, and aspiring AI specialists who want to build cutting-edge AI systems and accelerate their career in artificial intelligence in 2025.
    `,
    rating: 4.5,
    student: 6980,
    review: 322,
    
  },
  {
    id: 8,
    name: "Data Science & AI Masters 2025 - From Python To Gen AI",
    price: 279000,
    Originalprice: 380000,
    image: "/assets/images08.jpg",
    category: "AI",
    shortDescription: "Master Data Science and AI: Learn Python, EDA, Stats, SQL, Machine Learning, NLP, Deep Learning and Gen AI",
    description: `
    Become a complete Data Science and AI professional with this all-in-one master program covering everything from Python programming to Generative AI. 
    This hands-on course takes you through the entire data science workflow, machine learning, and the latest advancements in AI.
    You will learn:
    - Master Python for data analysis, visualization, and automation.
    - Work with essential libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.
    - Build machine learning models for classification, regression, and clustering.
    - Explore deep learning using TensorFlow and PyTorch frameworks.
    - Work with Generative AI tools like ChatGPT, DALL·E, and Stable Diffusion.
    - Apply NLP, computer vision, and recommendation systems in real-world projects.
    - Deploy data science and AI solutions on cloud platforms (AWS, GCP, Azure).
    - Understand MLOps, data pipelines, and AI ethics for responsible AI development.
    Perfect for aspiring data scientists, AI engineers, and professionals who want to stay ahead in the data-driven world of 2025.
    `,
    rating: 5.0,
    student: 2000,
    review: 318,
  },
  {
    id: 9,
    name: "Advanced Brand Theory for Marketing",
    price: 279000,
    Originalprice: 440000,
    image: "/assets/images09.jpg",
    category: "Marketing",
    shortDescription: "Unlock psychological drivers and strategies to build lasting brand equity...",
    description: `
    Dive deep into the science and strategy behind successful brands with this advanced brand theory course. 
    Learn how to build, position, and manage brands that create long-term value and emotional connections with consumers.
    You will learn:
    - Understand key branding models and frameworks used by top global brands.
    - Develop brand positioning strategies that differentiate in crowded markets.
    - Build strong brand equity through storytelling, identity, and customer experience.
    - Analyze brand architecture and portfolio management for large organizations.
    - Explore consumer psychology and how it influences brand perception.
    - Measure brand performance using modern brand tracking and valuation techniques.
    - Apply advanced branding strategies to real-world business scenarios.
    Perfect for marketers, brand managers, entrepreneurs, and business leaders looking to deepen their understanding of brand strategy and drive impactful marketing results.
    `,
    rating: 4.8,
    student: 2080,
    review: 62,
  },
  {
    id: 10,
    name: "SEO Training: Complete SEO Course & ChatGPT SEO Copywriting",
    price: 429000,
    Originalprice: 557000,
    image: "/assets/images10.jpg",
    category: "Marketing",
    shortDescription: "SEO Guide: SEO Copywriting, Content Marketing, SEO Link Building, ChatGPT SEO, WordPress SEO, WooCommerce SEO, Local SEO",
    description: `
    Master the latest SEO strategies and learn how to create high-ranking content using ChatGPT. 
    This complete SEO course covers on-page, off-page, and technical SEO, along with AI-powered content creation techniques for 2025.
    You will learn:
    - Optimize website structure, meta tags, and page speed for better search rankings.
    - Perform effective keyword research and competitor analysis.
    - Build high-quality backlinks and develop a sustainable link-building strategy.
    - Create SEO-optimized content using ChatGPT and other AI tools.
    - Understand the latest Google algorithm updates and SEO best practices.
    - Improve local SEO, mobile SEO, and voice search optimization.
    - Analyze website traffic and SEO performance using Google Analytics and Search Console.
    - Write compelling SEO copy that drives traffic and conversions.
    Perfect for marketers, content creators, entrepreneurs, and anyone looking to master modern SEO and leverage AI tools for content creation.
    `,
    rating: 4.3,
    student: 3010,
    review: 422,
  },
  {
    id: 11,
    name: "Facebook Ads & Facebook Marketing MASTERY 2025 | Coursenvy",
    price: 279000,
    Originalprice: 392000,
    image: "/assets/images11.jpg",
    category: "Marketing",
    shortDescription: "Facebook Marketing from beginner to advanced! Join 218,000+ students who MASTERED Facebook and are Facebook Ads experts!",
    description: `
    Master the latest Facebook Ads and Facebook Marketing strategies to grow your business, generate leads, and drive sales in 2025. 
    This hands-on course from Coursenvy teaches you step by step how to create, manage, and optimize Facebook advertising campaigns for maximum ROI.
    You will learn:
    - Create effective Facebook Ads using proven ad copy and creative strategies.
    - Set up and manage Facebook Business Manager and Ad Accounts.
    - Target the right audiences using custom audiences, lookalike audiences, and interest targeting.
    - Optimize campaigns with A/B testing, budget scaling, and retargeting.
    - Analyze ad performance using Facebook Ads Manager and reporting tools.
    - Integrate Facebook Ads with Instagram and Messenger marketing.
    - Develop full-funnel marketing strategies that convert.
    Perfect for entrepreneurs, digital marketers, and business owners looking to unlock the full potential of Facebook marketing in the ever-changing digital landscape of 2025.
    `,
    rating: 4.6,
    student: 2110,
    review: 78,
  },
  {
    id: 12,
    name: "SEO Strategy 2025. SEO training to Unleash Career Potential!",
    price: 299000,
    Originalprice: 306000,
    image: "/assets/images12.jpg",
    category: "Marketing",
    shortDescription: "Become an expert in Search Engine Optimization. Master the best SEO tools and take a chance to land your dream job!",
    description: `
    Stay ahead in the digital marketing world with this complete SEO training for 2025. 
    Learn the latest strategies, tools, and best practices to improve website visibility, drive organic traffic, and grow your online presence.
    You will learn:
    - Master on-page, off-page, and technical SEO techniques.
    - Perform keyword research and competitive analysis using industry-standard tools.
    - Optimize website content, meta tags, and site structure for higher search rankings.
    - Build high-quality backlinks and develop an effective link-building strategy.
    - Understand the latest Google algorithm updates and how to adapt to them.
    - Analyze website performance with Google Analytics and Search Console.
    - Create SEO reports and strategies that deliver measurable results.
    This course is perfect for marketers, entrepreneurs, content creators, and anyone looking to grow their career in digital marketing and SEO in 2025 and beyond.
    `,
    rating: 5.0,
    student: 4290,
    review: 689,
  },
  {
    id: 13,
    name: "User Experience Design Essentials - Adobe XD UI UX Design",
    price: 389000,
    Originalprice: 412000,
    image: "/assets/images13.jpg",
    category: "Design",
    shortDescription: "Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design",
    description: `
    Learn the essential skills of User Experience (UX) and User Interface (UI) design using Adobe XD. 
    This practical course will help you design beautiful, user-friendly websites and mobile apps from concept to prototype.
    You will learn:
    - Understand UX principles and design thinking processes.
    - Create wireframes, user flows, and interactive prototypes in Adobe XD.
    - Design clean, modern, and responsive user interfaces.
    - Apply color theory, typography, and layout best practices to your designs.
    - Conduct user research and usability testing to improve your projects.
    - Collaborate with developers and product teams for better handoffs.
    - Build a professional portfolio to showcase your UX/UI design work.
    Perfect for beginners, graphic designers, and anyone interested in creating intuitive digital experiences for web and mobile platforms.
    `,
    rating: 3.9,
    student: 5521,
    review: 1230,
  },
  {
    id: 14,
    name: "Cinema 4D Complete : Vol. 3 Unleash the power of Mograph!",
    price: 279000,
    Originalprice: 340000,
    image: "/assets/images14.jpg",
    category: "Design",
    shortDescription: "Enter the world of Motion Design",
    description: `
    Take your motion design skills to the next level with Cinema 4D’s powerful Mograph tools. 
    This advanced course will help you master procedural animation, clones, effectors, and dynamics to create stunning motion graphics.
    You will learn:
    - Work with the Mograph module to create complex motion graphics effortlessly.
    - Master cloners, effectors, and fields to build procedural animations.
    - Design dynamic titles, logo animations, and broadcast graphics.
    - Integrate physics-based simulations like dynamics and soft bodies into your scenes.
    - Customize animations using shaders, deformers, and materials.
    - Optimize your workflow for faster rendering and creative flexibility.
    - Build portfolio-ready projects for advertising, social media, and broadcast.
    Perfect for motion designers, 3D artists, and content creators ready to unlock the full creative potential of Cinema 4D’s Mograph system.
    `,
    rating: 4.2,
    student: 1600,
    review: 440,
  },
  {
    id: 15,
    name: "Graphic Design Masterclass - Learn GREAT Design",
    price: 509000,
    Originalprice: 710000,
    image: "/assets/images15.jpg",
    category: "Design",
    shortDescription: "The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign, Design Theory, Branding, Logo Design",
    description: `
    The Graphic Design Masterclass is your complete guide to becoming a confident and skilled designer. 
    You will master the fundamental principles of design, including typography, color theory, layout composition, and branding. 
    This course provides hands-on practice with real-world projects to help you build a strong design portfolio.
    You will learn:
    - Create professional logos, posters, social media graphics, and marketing materials.
    - Work efficiently with Adobe Photoshop, Illustrator, and InDesign.
    - Understand the design process from concept to completion.
    - Apply color psychology and font pairing to create stunning visuals.
    - Build a consistent brand identity and cohesive design systems.
    - Develop creative thinking and a strong design mindset.
    This course is ideal for beginners and aspiring designers who want to turn creativity into real-world skills and work confidently on freelance projects or at design agencies.
    `,
    rating: 3.8,
    student: 4801,
    review: 5549,
  },
  {
    id: 16,
    name: "Canva Master Course 2025 | Learn Canva with Ronny",
    price: 309000,
    Originalprice: 406000,
    image: "/assets/images16.jpg",
    category: "Design",
    shortDescription: "Master Canva's Latest AI and Design Tools and Create Stunning Graphics, Videos, and Websites with an Ex-Canva Employee",
     description: `
      Unlock your creative potential with the Canva Master Course 2025, guided by expert instructor Ronny. 
      This course teaches you how to design stunning graphics, presentations, social media content, and more using Canva's latest tools and features.
      You will learn:
      - Master the Canva interface and design tools with ease.
      - Create eye-catching social media posts, banners, and ads.
      - Design professional presentations, posters, and business cards.
      - Build brand kits and maintain visual consistency across all your designs.
      - Work efficiently with Canva Pro features like Magic Resize and Brand Hub.
      - Collaborate with teams and share your projects effectively.
      - Apply design principles like color theory, typography, and layout to your projects.
      Perfect for entrepreneurs, marketers, content creators, and anyone looking to create professional-quality designs without graphic design experience.
    `,
    rating: 4.2,
    student: 2670,
    review: 390,
  },
  {
    id: 17,
    name: "Fundamentals of Business Analysis",
    price: 419000,
    Originalprice: 540700,
    image: "/assets/images17.jpg",
    category: "Business",
    shortDescription: "Get the foundation in business analysis you need to solve your organization's biggest problems.",
    description: `
    Master the essential skills of business analysis and learn how to bridge the gap between business needs and technology solutions. 
    This course provides a complete introduction to business analysis tools, techniques, and processes used in real-world projects.
    You will learn:
    - Understand the role of a Business Analyst in modern organizations.
    - Gather, document, and manage business requirements effectively.
    - Analyze processes and identify opportunities for improvement.
    - Create use cases, process flows, and business models.
    - Communicate clearly with stakeholders, developers, and project teams.
    - Apply industry-standard techniques like SWOT, PESTLE, and GAP analysis.
    - Learn Agile, Scrum, and Waterfall methodologies from a BA perspective.
    This course is ideal for aspiring Business Analysts, project team members, and professionals who want to develop analytical thinking and problem-solving skills to drive business success.
    `,
    rating: 5.0,
    student: 9040,
    review: 2908,
  },
  {
    id: 18,
    name: "PMP Certification Exam Prep 35 PDU Project Management Course",
    price: 459000,
    Originalprice: 601000,
    image: "/assets/images18.jpg",
    category: "Business",
    shortDescription: "Complete PMP Certification Course - Get 35 PDUs/Contact Hours - PMP 2025 Exam Training - PMBOK 7 - Project Management",
    description: `
    Prepare for the PMP® Certification Exam and earn your 35 Contact Hours (PDUs) with this comprehensive project management course. 
    Learn the complete project management framework based on the latest PMBOK® Guide and PMI exam objectives.
    You will learn:
    - Understand the 10 Knowledge Areas and 5 Process Groups of project management.
    - Master key concepts like scope, schedule, cost, risk, and stakeholder management.
    - Learn Agile, Scrum, and hybrid project management methodologies aligned with the PMP exam.
    - Study all PMP exam domains with real-world examples and practical applications.
    - Practice with PMP-style quizzes, assignments, and mock exams.
    - Get strategies for passing the PMP exam on your first attempt.
    - Earn your 35 Contact Hours of project management education required for PMP certification.
    Perfect for project managers, team leaders, and professionals aiming to pass the PMP® exam and advance their careers in project management.
    `,
    rating: 3.7,
    student: 1200,
    review: 50,
  },
  {
    id: 19,
    name: "Fundamentals of Analyzing Real Estate Investments",
    price: 329000,
    Originalprice: 402000,
    image: "/assets/images19.jpg",
    category: "Business",
    shortDescription: "Learn professional investment analysis techniques for real estate investing in residential and commercial propertiese",
    description: `
    Learn how to confidently analyze real estate investment opportunities and make smart financial decisions. 
    This practical course covers the key concepts, tools, and techniques used by real estate investors and professionals worldwide.
    You will learn:
    - Understand the fundamentals of real estate investing and financial analysis.
    - Calculate key metrics such as ROI, cash flow, cap rate, and IRR.
    - Build and analyze rental property pro formas and investment spreadsheets.
    - Evaluate property performance using real-world case studies.
    - Assess risks and develop strategies for long-term success.
    - Learn how to analyze single-family homes, multifamily properties, and commercial real estate deals.
    - Gain confidence to invest independently or support your career in real estate finance.
    Perfect for aspiring investors, real estate agents, financial analysts, and anyone looking to build wealth through real estate.
    `,
    rating: 4.8,
    student: 1182,
    review: 68,
  },
  {
    id: 20,
    name: "Investing In Stocks The Complete Course! (17+ Hours)",
    price: 449000,
    Originalprice: 540000,
    image: "/assets/images20.jpg",
    category: "Business",
    shortDescription: "Master Stock Market Investing & Trading in the Stock Market. Top 1% Instructor & Millionaire Investor. Invest & Trade!",
    description: `
    Master the fundamentals and advanced strategies of stock market investing with this complete 17+ hour course. 
    Whether you're a beginner or an experienced investor, this course will help you build a strong financial foundation and make informed investment decisions.
    You will learn:
    - Understand how the stock market works and how to get started as an investor.
    - Analyze stocks using fundamental and technical analysis.
    - Build a diversified investment portfolio tailored to your financial goals.
    - Learn long-term investing strategies like value investing and dividend growth investing.
    - Discover short-term trading techniques including swing trading and day trading.
    - Manage risk effectively to protect your capital and maximize returns.
    - Practice investing using real-world case studies and market simulations.
    Perfect for beginners, individual investors, and anyone looking to take control of their financial future through smart stock market investing.
    `,
    rating: 4.8,
    student: 2710,
    review: 670,
  },
  {
    id: 21,
    name: "Complete English Course: Master English Beginner to Advanced",
    price: 299000,
    Originalprice: 370000,
    image: "/assets/images21.jpg",
    category: "English",
    shortDescription: "Learn how to have a natural conversation FAST from a native English speaker!",
    description: `
    Become fluent in English with this complete, step-by-step course covering all essential language skills from beginner to advanced levels. 
    This course helps you improve your speaking, listening, reading, and writing while building a strong grammar and vocabulary foundation.
    You will learn:
    - Master English grammar from basic to advanced concepts.
    - Expand your vocabulary for everyday situations, business, and travel.
    - Improve your pronunciation and speak with clarity and confidence.
    - Practice listening comprehension with native and non-native speakers.
    - Develop reading and writing skills for academic and professional purposes.
    - Engage in real-life conversations, debates, and presentations.
    - Build fluency and accuracy through guided practice and interactive exercises.
    Perfect for beginners starting from scratch and intermediate learners aiming to reach advanced fluency in English communication.
    `,
    rating: 4.7,
    student: 6020,
    review: 1126,
  },
  {
    id: 22,
    name: "English Speaking Complete: English Language Mastery",
    price: 469000,
    Originalprice: 640000,
    image: "/assets/images22.jpg",
    category: "English",
    shortDescription: "Complete English Language Fluency: Master Speaking, Grammar, Vocabulary, Writing and More [Beginner to Advanced]",
    description: `
    Master the English language and become a confident speaker in everyday conversations, academic settings, and professional environments. 
    This complete English speaking course will help you improve your fluency, pronunciation, and communication skills step by step.
    You will learn:
    - Speak English clearly and confidently in various real-life situations.
    - Improve your pronunciation and reduce your native accent.
    - Expand your vocabulary and learn practical expressions for daily conversations.
    - Build strong listening and comprehension skills through real-world dialogues.
    - Practice speaking in discussions, presentations, and interviews.
    - Strengthen your grammar and sentence structure for clear communication.
    - Gain the confidence to speak fluently at work, school, and while traveling.
    Perfect for beginners and intermediate learners who want to speak English naturally and effortlessly in daily life, work, and social settings.
    `,
    rating: 5.0,
    student: 7050,
    review: 2318,
  },
  {
    id: 23,
    name: "English Writing Skills",
    price: 449000,
    Originalprice: 560200,
    image: "/assets/images23.jpg",
    category: "English",
    shortDescription: "Master Stock Market Investing & Trading in the Stock Market. Top 1% Instructor & Millionaire Investor. Invest & Trade!",
    description: `
    Master the art of writing clear, effective, and professional English in this comprehensive writing skills course. 
    You will learn how to structure sentences, organize paragraphs, and craft persuasive messages for academic, business, and personal contexts.
    You will learn:
    - Build strong grammar and vocabulary for better sentence construction.
    - Organize ideas clearly in paragraphs and essays.
    - Write emails, reports, and formal letters with correct tone and structure.
    - Avoid common writing mistakes made by English learners.
    - Practice writing summaries, opinions, and arguments effectively.
    - Improve editing and proofreading skills to polish your writing.
    This course is ideal for students, professionals, and anyone who wants to communicate more clearly and confidently in written English.
    `,
    rating: 4.5,
    student: 3710,
    review: 1310,
  },
  {
    id: 24,
    name: "English Course for Spanish Speakers: Improve Your Speaking",
    price: 449000,
    Originalprice: 640100,
    image: "/assets/images24.jpg",
    category: "English",
    shortDescription: "Improve your ability to speak and understand English by Practicing with many English sentences and phrases.",
    description: `
    This course is designed to help Spanish speakers improve their English speaking skills quickly and effectively. 
    You will learn practical vocabulary, essential grammar, and useful expressions for everyday conversations.
    You will learn:
    - Improve your pronunciation and reduce your Spanish accent.
    - Practice speaking through real-life dialogues and situations.
    - Expand your vocabulary for work, travel, and social conversations.
    - Build confidence to speak fluently and naturally.
    - Learn common phrasal verbs and idiomatic expressions.
    - Practice listening comprehension with native English speakers.
    Perfect for beginners and intermediate learners who want to speak English with confidence and clarity in daily life.
    `,
    rating: 3.0,
    student: 2010,
    review: 57,
  },

];

export default products;
