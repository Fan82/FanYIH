export default [
  {
    id: "takeTask",
    name: "Track Tasks",
    detail:
      "Free your hands! Our app automatically syncs with your calendar, email, messages, and other everyday apps, creating your daily to-do list for you so you can effortlessly stay on top of everything.",
    image: "/projects/takeTask/MockUp.png",
    hero: "/projects/takeTask/hero-mockup.png",
    logo: "/projects/takeTask/logo.png",
    userMock: "/projects/takeTask/using-mockup.png",
    inspiration: "/projects/takeTask/userFlow.png",
    videoMock: "/projects/takeTask/MP4.mp4",
    content: {
      client: "Flight company",
      solutions: "Rebranding | Ux Search | Brand Design | Design Think",
      background:
        "Modern professionals and students seek efficient ways to manage tasks and boost productivity. This project introduces an intelligent task management app that automates task generation, prioritization, and organization, helping users stay on top of their goals.",
      problem:
        "Many to-do list apps only provide basic checklist functionality, lacking intelligent task categorization and priority recommendations. As a result, users struggle to effectively manage their time and workflow.",
      designProcess: [
        {
          title: "Management Research & UX Strategy",
          description:
            "Analyzed successful productivity and task management apps to design an intuitive and efficient user experience.",
        },
        {
          title: "Wireframe & Prototype",
          description:
            "Created interactive prototypes to optimize task creation, priority setting, and automation features.",
        },
        {
          title: "UI Design",
          details:
            // "Designed a clean and user-friendly interface with a focus on usability and clarity.",
            "Integrated AI-powered suggestions for task prioritization and scheduling.",
        },
        {
          title: "Front-End Development",
          details:
            // "Developed interactive UI components using HTML, CSS, and JavaScript.",
            "Optimized performance for smooth task updates and automation processes.",
        },
        {
          title: "User Testing & Optimization",
          description:
            "Conducted usability tests and iterated on UI elements based on user feedback to enhance task management efficiency.",
        },
      ],
      inspiration:
        "Get back to basics, focusing on doing, not organizing. We believe the best to-do list should be simple, intuitive, and automated. The core philosophy of this app is to reduce your cognitive load. It automatically organizes all external tasks, freeing up your mental energy. You no longer need to spend time planning, typing, or sorting; you just need to focus on completing each item on your list. This app liberates you from the tediousness of daily management and gets you back to the essence of 'doing', letting you truly enjoy the satisfaction of getting things done efficiently.",
    },
  },
  {
    id: "bookFlight",
    name: "Flight Booking Web",
    detail:
      "My goal was to explore how to transform a seemingly simple form into an intelligent interface that offers a seamless user experience. The core of this project lies in demonstrating my understanding of Vue.js's fundamental concepts and applying them to a real-world design challenge.",
    image: "/projects/bookFlight/MockUp.png",
    hero: "/projects/bookFlight/hero-mockup.png",
    logo: "/projects/bookFlight/logo.png",
    userMock: "/projects/bookFlight/using-mockup.png",
    inspiration: "/projects/bookFlight/userFlow.png",
    videoMock: "/projects/bookFlight/MP4.mp4",
    content: {
      client: "Flight company",
      solutions: "Rebranding | Ux Search | Brand Design | Design Think",
      background:
        "I broke down the entire interface into several independent, reusable Vue components. I envisioned the Date Picker, City Picker, and Passenger Counter as separate, self-contained units. This approach reflects a key principle of Vue.js development: creating modular, readable, and maintainable code by focusing on individual component logic.",
      problem:
        "I envisioned and planned the smart logic and interactive user flow for this interface. I designed a robust data validation system to prevent user errors, such as a rule that would ensure the return date could never be earlier than the departure date. I also planned how to use conditional rendering to dynamically show or hide elements, creating a cleaner, more intuitive user experience.",
      designProcess: [
        {
          title: "Data Flow and Validation",
          description:
            "I envisioned a robust data flow to ensure the return date could never be set before the departure date. The design includes a clear visual state to provide instant feedback if a user attempts an invalid action.",
        },
        {
          title: "Designing Intelligent Logic and Interaction",
          description:
            "Conditional Rendering: I designed the interface to conditionally hide the return date section when a user selects a 'one-way' flight. This is a practical application of Vue.js directives to reduce visual clutter and improve the user experience.",
        },
        {
          title: "Connecting the Dots",
          details:
            "This project helped me transition from seeing a web page as a single entity to viewing it as an ecosystem of interconnected components. It taught me how to design and plan the logical connections between components, like using props and events, to create a cohesive and functional application.",
        },
        {
          title: "Form State Management",
          details:
            "I also planned how to track the state of all input fields and use that state to control the 'submit' button, activating or deactivating it to guide the user through the process smoothly.",
        },
      ],
      inspiration:
        "Beyond technical planning, I focused on user experience. I designed the interface to provide clear error messages and intuitive interactions, such as a user-friendly calendar, to make the entire process straightforward. This project reinforced the idea that a great application requires not only solid technical skills but also a deep understanding of user needs.",
    },
  },
  // {
  //   id: "nunu",
  //   name: "nunu Wheel Cake",
  //   detail:
  //     "Made to Warm Your Heart - Every dessert is a small piece of happiness, crafted from natural ingredients and a lot of love",
  //   image: "/projects/nunuCake/MockUp.png",
  //   hero: "/projects/nunuCake/hero-mockup.webp",
  //   logo: "/projects/nunuCake/logo.png",
  //   userMock: "/projects/nunuCake/using-mockup.png",
  //   inspiration: "/projects/nunuCake/userFlow.png",
  //   videoMock: "/projects/nunuCake/MP4.mp4",
  //   content: {
  //     client: "nunu WheelCake Shop",
  //     solutions: "Branding Design | Ux Search | Brand Design | Design Think",
  //     background:
  //       "The sense of smell connects our emotions and memories—familiar scents can instantly transport us back to long-forgotten moments.When I was a child, my mom would always buy me wheel cake for an after-school snack. Sometimes wishing for more even after I would finished! Looking back now, I realize maybe it wasn't just the creamy wheel cake I loved so much—it was how my mom knew exactly what I liked and bought it specially for me.",
  //     problem:
  //       "It is difficult to buy freshly made table wheel cakes locally and promote to everywhere.",
  //     designProcess: [
  //       {
  //         title: "Define target audience",
  //         description:
  //           "Taiwanese in the world, local young people who love Asian desserts, dessert control, and delivery people who pay attention to fresh quality.",
  //       },
  //       {
  //         title: "Core Values",
  //         description:
  //           "Made to Warm Your Heart - Every dessert is a small piece of happiness, crafted from natural ingredients and a lot of love.",
  //       },
  //       {
  //         title: "Product differentiation",
  //         details:
  //           "Singapore's first dessert brand to focus on tabletop wheels and support online ordering and same-day delivery.",
  //       },
  //       {
  //         title: "Target market positioning",
  //         details:
  //           "The mid-to-high-end dessert market focuses on quality and service experience.",
  //       },
  //       {
  //         title: "User Testing & Optimization",
  //         description:
  //           "Collected feedback and refined the UI and interactions to improve the overall experience.",
  //       },
  //     ],
  //     inspiration:
  //       "more detail and inspiration about this project / more detail and inspiration about this project / more detail and inspiration about this project / more detail and inspiration about this project / more detail and inspiration about this project / more detail and inspiration about this project /more detail and inspiration about this project / more detail and inspiration",
  //   },
  // },
  {
    id: "easyBank",
    name: "Easy Bank",
    detail:
      "The primary goal of this project was to faithfully reproduce a modern financial service brand's image through a static website.",
    image: "/projects/easyBank/MockUp.png",
    hero: "/projects/easyBank/hero-mockup.png",
    logo: "/projects/easyBank/logo.png",
    userMock: "/projects/easyBank/using-mockup.png",
    inspiration: "/projects/easyBank/userFlow.png",
    videoMock: "/projects/easyBank/MP4.mp4",
    content: {
      client: "Easy Bank",
      solutions: "Ux Search | Brand Design | Design Think | Design Develop",
      background:
        "When I started the Easybank project, I asked myself: 'How can a clean and elegant interface convey the convenience and trustworthiness of a modern digital bank?' This project was more than just a coding exercise; it was an exploration of how to use front-end technologies to create a website that aligns with a brand's identity and user expectations.",
      problem:
        "How to make it not only the code more readable and maintainable but also significantly boosts development efficiency.",
      designProcess: [
        {
          title: "Visualizing a Brand's Identity",
          description:
            "Through careful color selection, typography, and layout, I brought Easybank's brand spirit—simple, easy, and modern—to life on the website. I paid close attention to details, such as the hover animations on buttons and the whitespace between sections, making the interface not only visually appealing but also interactive.",
        },
        {
          title: "Translating Design Mockups into Code",
          description:
            "This project served as a practical exercise in translating a design mockup into a functional website. I learned how to analyze the layout, spacing, and typography of a design and accurately convert them into CSS code. This skill is an indispensable part of being a professional front-end developer.",
        },
      ],
      inspiration:
        "The Easybank project was a milestone in my journey of mastering foundational front-end skills like HTML and CSS. It not only demonstrates my ability to independently complete high-quality front-end layouts but also taught me that a good front-end developer must possess both technical skill and aesthetic sensibility.",
    },
  },

  {
    id: "publicTransp",
    name: "Public Transportation",
    detail:
      "' How can I transform a vast and constantly changing stream of real-time bus data into a clear, intuitive, and efficient query tool?' This project was not only a test of my UI design skills but also an opportunity to gracefully handle asynchronous data flow and state management.",
    image: "/projects/publicTransp/MockUp.png",
    hero: "/projects/publicTransp/hero-mockup.png",
    logo: "/projects/publicTransp/logo.png",
    userMock: "/projects/publicTransp/using-mockup.png",
    inspiration: "/projects/publicTransp/userFlow.png",
    videoMock: "/projects/publicTransp/MP4.mp4",
    content: {
      client: "Public Transport",
      solutions: "Ux Search | Design Think | UI Design",
      background:
        "This project was created to solve that everyone wondered how long until their bus arrives. I designed a simple and intuitive real-time bus tracker website to help you effortlessly stay on top of your commute. By leveraging refined front-end technologies, I transformed complex data into a valuable interface, aiming to provide a smoother, stress-free user experience.",
      problem:
        "How to effectively manage asynchronous operations, handle error states, and coordinate data across multiple components within the Vue.js ecosystem. This represents not just a technical leap but also a significant development in my ability to solve complex front-end engineering problems.",
      designProcess: [
        {
          title: "Real-Time Data Integration",
          description:
            "The core of the website lies in its connection to a real-time public transportation API. I used asynchronous JavaScript requests to fetch and process the latest bus arrival times. To ensure accuracy, I also implemented an automatic update mechanism, so you never have to manually refresh the page.",
        },
        {
          title: "Fluid Interface Interaction",
          description:
            "To provide a seamless user experience, I designed the search functionality as a real-time filter. As you type a keyword, the interface instantly displays matching routes without requiring a page reload. This not only boosts efficiency but also makes the interaction more intuitive.",
        },
        {
          title: "Responsive Design",
          description:
            "The project features a responsive web design, ensuring the interface automatically adapts to screens of all sizes, whether you're on a phone or a desktop. This allows users to easily access bus information from any device.",
        },
        {
          title: "User-Centric Design Thinking",
          description:
            "I learned to focus not just on technical implementation, but on real user needs. Questions like ' Why should a bus tracker update in real-time? ' and 'Why must the search function be so fast?' pushed me to think from the user's perspective and apply technology to solve practical problems.",
        },
      ],
      inspiration:
        "I noticed people at bus stops, constantly checking their phones and looking down the street with expressions of anxiety or uncertainty. They might be using different apps or websites, but the information might not be real-time enough, or the user experience might be complex.",
    },
  },
  {
    id: "goTravel",
    name: "Let's Travel",
    detail:
      "To create a site that not only clearly showcases travel services but also provides a smooth and engaging user experience. This project was a practical application of translating design concepts into a concrete web structure and layout.",
    image: "/projects/goTravel/MockUp.png",
    hero: "/projects/goTravel/hero-mockup.png",
    logo: "/projects/goTravel/logo.png",
    userMock: "/projects/goTravel/using-mockup.png",
    inspiration: "/projects/goTravel/userFlow.png",
    videoMock: "/projects/goTravel/MP4.mp4",
    content: {
      client: "Travel Website",
      solutions: "Design Think | Ux Search | Brand Design",
      background:
        "In the digital age, a travel website is more than just a source of information; it's the starting point for people's longing for the unknown. The inspiration for this GoTravel project came from my thoughts on how to use visual language to tell a travel story. I observed many successful travel platforms and noticed a common thread: they all use captivating images, clear information, and fluid interfaces to ignite a user's desire to explore.",
      problem:
        "To help users quickly browse different destinations or blog posts, I adopted a card-based design. Each card contains key information (e.g., title, image, summary), and this visual presentation makes large amounts of information easy to digest while enhancing the overall modern feel of the interface.",
      designProcess: [
        {
          title: "Modular Layout Design",
          description:
            "Broke down the website's content into several distinct, independent sections, such as 'Why Choose Us,' 'Top Destinations,' and 'Blog.' This design approach allowed for a clear and organized page structure, and it enabled me to apply specific layouts to each section. I used CSS Grid and Flexbox to precisely control the arrangement of elements, ensuring a cohesive yet distinct visual identity for each section.",
        },
        {
          title: "Responsive Web Design",
          description:
            "I adopted a mobile-first design strategy to ensure the website renders perfectly on any device. As the screen size changes, the layout of sections and cards automatically adjusts. For example, cards that are side-by-side on a desktop re-stack into a single column on a mobile phone, allowing users to effortlessly scroll through all the content.",
        },
        {
          title: "Mastering Complex Layout Techniques",
          details:
            "This project was an opportunity to apply CSS Flexbox and Grid extensively, helping me deeply understand how to handle complex, multi-layered layouts. I learned to precisely control spacing and alignment, giving the entire site a professional and organized appearance.",
        },
        {
          title: "Developing a Component-Based Mindset",
          details:
            "Although this is a static website, I approached its development with a component-based mindset. Each information card and content block can be seen as an independent component, which would make it much faster to upgrade the site to a dynamic application using a framework like Vue.js or React in the future.",
        },
        {
          title: "From Design to Code Implementation",
          description:
            "This project was a practical exercise in bringing a complete interface design concept to life from scratch using HTML and CSS. This skill is an essential foundation for any professional front-end developer.",
        },
      ],
      inspiration:
        "The GoTravel project is a result of combining my passion for travel with my front-end development skills. When I envisioned this website, it wasn't just about slicing a design; it was about answering a question: 'How can a website interface make users feel the charm of travel and inspire their desire to explore the world?' This project represents a deep dive into the integration of visual design, brand identity, and front-end technology.",
    },
  },
];
