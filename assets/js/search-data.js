// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Explore my research publications, listed in reverse chronological order to showcase my most recent work first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here you can find an overview of my academic profile, including my research activities, publications, and professional experience, as well as a downloadable version of my academic CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "nav-presentations",
          title: "presentations",
          description: "A collection of my recent presentations and invited talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-hobbies",
          title: "hobbies",
          description: "Activities beyond research that bring balance, structure, and inspiration to my academic life.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "post-avner-bensoussan-avner-bensoussan",
        
          title: 'Avner Bensoussan | Avner Bensoussan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "“𝑼𝒏 𝒎𝒂𝒍 𝒑𝒐𝒖𝒓 𝒖𝒏 𝒃𝒊𝒆𝒏” 🙂Our work “A Taxonomy of Real Faults in Hybrid Quantum-Classical Architectures” has been accepted to the FSE 2026 Journal First track 🎉The initial short version was rejected ~1.5 years ago—but that turned out to be 𝘢 𝘣𝘭𝘦𝘴𝘴𝘪𝘯𝘨 𝘪𝘯 𝘥𝘪𝘴𝘨𝘶𝘪𝘴𝘦. It gave me the chance to go much deeper, gather valuable feedback from multiple presentations, and develop a more mature version of the work.That journey led to a full paper in TOSEM, and now to presenting this stronger version at FSE.📄 Paper: https://lnkd.in/enDPsETa🔎 Read more about my work: https://lnkd.in/efQGE6J6Looking forward to sharing it with the community—see you in Montreal!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/feed/update/urn:li:activity:7442182866224082944/", "_blank");
          
        },
      },{id: "post-a-taxonomy-of-real-faults-for-hybrid-quantum-classical-software-architectures-acm-transactions-on-software-engineering-and-methodology-avner-bensoussan",
        
          title: 'A Taxonomy of Real Faults for Hybrid Quantum-Classical Software Architectures | ACM Transactions... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🎉 Excited to share that my first journal paper has been accepted at ACM TOSEM! 🌱 This paper is more than a publication—it reflects how much I’ve learned about research and communication along the way.Good research is more than resultsWhen I started this project—the first of my PhD—I thought success meant getting the methods right and producing solid results. That alone took about a year. What I didn’t anticipate was that learning how to explain why those results mattered would take just as long.I presented this work in very different contexts: in Oxford to quantum physicists and chemists, in Copenhagen to non-quantum software researchers, and in Montpellier to quantum algorithms experts. In each community, a few people with very different backgrounds paused to bridge their perspective with this work. That led to rich discussions. The most fascinating part was aligning our vocabularies and finding shared ground. After each conference, I reshaped the paper with these new perspectives in mind.💭 At one conference, I met a professor I deeply admire. We jumped straight into a technical discussion. She assumed I had a similar background—and I didn’t pause to explain that while our areas are related, we approach problems differently. She eventually walked away saying my work felt neither theoretical nor practical. That moment stuck with me. It was frustrating, unsettling, and honestly quite disorienting, but it now guides how I explain results.Quantum software research is about communicationThe same challenge appeared during the review process. No reviewer questioned the methodology or results. Instead, feedback focused on framing, context, and narrative. Comparing the first version with the current one—shaped by reviews and discussions—the difference is massive.🔗 I realized this isn’t a secondary skill. In interdisciplinary fields like quantum computing, communication is part of the research itself. This is especially true for quantum software research: still underexplored, yet crucial for moving from lab-scale demonstrations to industrial pipelines and real-world use cases. Building that bridge isn’t just about better hardware or algorithms—it’s about elegant software that smartly connects the two, layers of abstraction, fault understanding, and, above all, a shared language across communities.Interdisciplinary collaboration drives innovationWorking across quantum physics, chemistry, and software engineering taught me that breakthroughs often happen at the intersections. When experts from different fields try to connect perspectives, new questions arise, assumptions are challenged, and insights emerge that wouldn’t have been possible within a single discipline. Each discussion shaped the paper and, more importantly, shaped how I think as a researcher.🙏 Grateful to my supervisors and co-authors for their support. Excited—and a bit wiser—to enter my final PhD year. There’s a lot coming!https://lnkd.in/enDPsETa",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_excited-to-share-that-my-first-journal-share-7419361816222531584-XCAy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-what-a-way-to-finish-the-year-had-a-lot-of-fun-guest-lecturing-in-prof-mohammad-reza-mousavi-s-testing-module-super-exciting-to-present-my-work-in-depth-and-tease-some-very-fresh-results-that-avner-bensoussan",
        
          title: 'What a way to finish the year!! 🎉 Had a lot of fun... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What a way to finish the year!! 🎉Had a lot of fun guest lecturing in Prof. Mohammad Reza Mousavi’s Testing Module. Super exciting to present my work in depth and tease some very fresh results that will be published soon 👀!Big thanks for the trust and guidance of my supervisors, and massive respect to the 3rd-year Bachelor and Master students for being there at the very end of the semester, in full exam-stress mode. I know the feeling — I was sitting exactly where you are a couple of years ago 😅If nothing else, I hope I at least kept you awake with some quality memes ☕📈Ending the year on a high note 🚀",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_what-a-way-to-finish-the-year-had-a-activity-7407437081334927361-3_1d?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-first-academic-event-in-france-since-i-left-11-years-ago-and-what-a-return-the-advanced-quantum-algorithms-for-many-body-systems-workshop-in-montpellier-was-fantastic-super-sharp-avner-bensoussan",
        
          title: '🇫🇷 First academic event in France since I left 11 years ago —... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🇫🇷 First academic event in France since I left 11 years ago — and what a return! The Advanced Quantum Algorithms for Many-Body Systems workshop in Montpellier was fantastic.🧠 Super sharp, state-of-the-art talks on quantum algorithms for many-body physics and chemistry.🌿 Breaks in the botanical garden + real French cheese and natural wine… perfect setup for good science.🤝 Great to catch up with the SEEQA crew, meet new people, and share my poster on Quantum Testability — paper coming soon!Huge thanks to the organisers for such a great event. Feeling inspired to connect more with the quantum community in France!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_first-academic-event-in-france-since-ugcPost-7398646456330645504-iCSD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-what-an-amazing-week-it-was-participating-at-icfp-splash-2025-the-first-ever-joint-edition-of-these-two-flagship-sigplan-conferences-held-in-the-vibrant-city-of-singapore-the-energy-avner-bensoussan",
        
          title: '🎉 What an amazing week it was participating at ICFP/SPLASH 2025 — the first-ever joint... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🎉 What an amazing week it was participating at ICFP/SPLASH 2025 — the first-ever joint edition of these two flagship SIGPLAN conferences, held in the vibrant city of Singapore! The energy, diversity, and depth of ideas exchanged were simply inspiring.💡 The week was filled with outstanding talks, thought-provoking discussions, and so many opportunities to connect with brilliant minds from across the programming languages and software engineering communities. It was truly a celebration of innovation at the intersection of theory and practice.⚛️ I was particularly pleasantly impressed by the Quantum session, where I had the honor to present our two papers published at OOPSLA:👉 AccelerQ: Accelerating Quantum Eigensolvers with Machine Learning on Quantum Simulatorshttps://lnkd.in/eTPP9YcD👉 Shaking Up Quantum Simulators with Fuzzing and Rigourhttps://lnkd.in/eDCgaG-nIt was incredibly rewarding to share our work and engage in deep discussions about the future of quantum software testing and hybrid quantum-classical computation.🌇 Beyond the conference, Singapore was absolutely stunning — from the breathtaking Marina Bay skyline to the amazing diversity of food across hawker centres and the lively Lau Pa Sat atmosphere, every moment was a delight. And the visit to the gorgeous Orchid National Garden was the perfect way to unwind and appreciate the beauty of this vibrant city.🌍 Huge thanks to the organizers and all participants who made this conference such a memorable and intellectually stimulating experience. Looking forward to seeing how the dialogue between programming languages and quantum computing continues to grow!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_what-an-amazing-week-it-was-participating-ugcPost-7386723040807624704-RdEo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-accelerq-accelerating-quantum-eigensolvers-with-machine-learning-on-quantum-simulators-splash-2025-oopsla-splash-2025-avner-bensoussan",
        
          title: 'AccelerQ: Accelerating Quantum Eigensolvers With Machine Learning on Quantum Simulators (SPLASH 2025 -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🙏 I&#39;m honored to share that two of our papers have been accepted at OOPSLA 2025! It&#39;s been a long and exciting journey, and I&#39;m thrilled to see our work recognized at this top venue.🔬 The first paper, AccelerQ: Accelerating Quantum Eigensolvers With Machine Learning on Quantum Simulators, reframes the challenge of tuning NISQ (Noisy Intermediate-Scale Quantum) algorithms as a hyperparameter optimization problem — opening the door for the software engineering and ML communities to engage with quantum algorithm optimisation in novel ways.🧪 The second, Shaking Up Quantum Simulators with Fuzzing and Rigour, introduces a powerful combination of fuzz testing and formal methods to systematically uncover bugs in quantum simulators — pushing for more reliable quantum software stacks.🌏 Looking forward to presenting both papers in Singapore and connecting with the amazing SPLASH/OOPSLA community. See you there!https://lnkd.in/eT6e5XPBhttps://lnkd.in/eEBaYW-T",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_accelerq-accelerating-quantum-eigensolvers-share-7368572630318223361-XQ66?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-thrilled-to-share-that-i-have-successfully-passed-my-upgrade-viva-with-no-revisions-it-was-a-great-opportunity-to-present-my-progress-on-my-project-testing-hybrid-quantum-classical-programs-avner-bensoussan",
        
          title: '🎉 Thrilled to share that I have successfully passed my Upgrade Viva with... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🎉 Thrilled to share that I have successfully passed my Upgrade Viva with no revisions!🚀 It was a great opportunity to present my progress on my project, Testing Hybrid Quantum-Classical Programs, and to discuss my future plans. I’m particularly excited to explore how Quantum Information Theory can help define a formal notion of Testability in a quantum context—paving the way for more robust and reliable quantum systems.⚡️Looking forward to the next steps!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_thrilled-to-share-that-i-have-successfully-ugcPost-7274741056041095168-qhHP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-had-an-amazing-time-at-the-king-s-quantum-annual-symposium-today-super-proud-to-have-presented-my-poster-on-a-taxonomy-of-real-faults-in-hybrid-quantum-classical-architectures-a-project-that-avner-bensoussan",
        
          title: '✨ Had an amazing time at the King’s Quantum Annual Symposium today! 📄... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "✨ Had an amazing time at the King’s Quantum Annual Symposium today!📄  Super proud to have presented my poster on A Taxonomy of Real Faults in Hybrid Quantum-Classical Architectures—a project that gathered and categorised real faults from online sources and expert interviews to better understand Hybrid Quantum-Classical Architectures as a software engineering paradigm, and to propose guidelines for building more robust and reliable hybrid systems. You can read the paper here: https://lnkd.in/ehJnMsHx⛰️ The day was packed with brilliant talks, including an unforgettable keynote from Professor Sir Peter Knight, who reminded us that “we are in front of a triply exponentially scaling mountain, and we are going to climb it.” Couldn’t think of a better metaphor for what it feels like to work in quantum right now—challenging, but full of possibility.⚛️ Even more exciting is being part of King’s Quantum, a vibrant and growing team with amazing new researchers coming in. The future looks bright—and weird, and entangled.📸 (Pic below from Peter Knight’s talk!)",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_had-an-amazing-time-at-the-kings-quantum-ugcPost-7317937574767988736-PFc2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-what-a-fantastic-week-at-the-pics-2024-summer-school-at-itu-copenhagen-despite-the-not-so-summer-weather-the-speakers-and-the-range-of-cutting-edge-applications-of-probabilistic-methods-in-avner-bensoussan",
        
          title: '🌍 What a fantastic week at the PICS 2024 Summer School at ITU... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🌍 What a fantastic week at the PICS 2024 Summer School at ITU Copenhagen, despite the not-so-summer weather!🎤 The speakers and the range of cutting-edge applications of probabilistic methods in theoretical computer science were truly inspiring. It’s remarkable how these techniques are advancing research across various fields.🖼 I presented my poster, A Taxonomy of Real Fault in Hybrid Quantum Classical Architectures, for the second time. It was fascinating to engage with a broader computer science audience after previously presenting to a quantum computing group at Oxford. The discussions were incredibly enriching!🤝 I also had the chance to connect with PhD students and researchers from around the world. Their fresh ideas and approaches were truly motivating, and it was rewarding to explore potential collaborations.✨ Proud to be part of this vibrant community, I return with fresh ideas and new perspectives for my research.🚀 Excited for continued growth and collaboration in this field!Learn more about the PICS 2024 school here: https://lnkd.in/ehdMHQrD",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_what-a-fantastic-week-at-the-pics-2024-ugcPost-7254049426837499904-SCsF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-feeling-inspired-after-attending-the-second-annual-meeting-of-the-roarq-robust-and-reliable-quantum-computing-initiative-at-imperial-college-london-last-week-it-was-incredible-to-connect-avner-bensoussan",
        
          title: '✨ Feeling inspired after attending the second annual meeting of the RoaRQ (Robust... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "✨ Feeling inspired after attending the second annual meeting of the RoaRQ (Robust and Reliable Quantum Computing) initiative at Imperial College London last week!🚀 It was incredible to connect with brilliant researchers from universities across the UK. Seeing the progress in quantum software testing and verification research was a true highlight.👩‍🎓 It was also great to catch up with colleagues from the early career researchers event held at Oxford a few months ago. This community continues to grow, and it’s exciting to be part of such impactful work.Check out the new beautiful website showcasing the initiative: https://lnkd.in/esmds6Ha 💻",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_feeling-inspired-after-attending-the-second-ugcPost-7241361610575876096-bCfJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "post-reflections-on-an-amazing-conference-seeking-quantum-advantage-seeqa-at-oxford-university-last-week-i-had-the-privilege-of-attending-an-incredible-conference-at-oxford-university-focused-avner-bensoussan",
        
          title: '🌟 Reflections on an Amazing Conference: Seeking Quantum Advantage (SeeQa) at Oxford University 🌟 Last... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🌟 Reflections on an Amazing Conference: Seeking Quantum Advantage (SeeQa) at Oxford University 🌟Last week, I had the privilege of attending an incredible conference at Oxford University, focused on the pursuit of Quantum Advantage. The event featured an outstanding lineup of talks from both industry leaders and academic pioneers, highlighting breakthroughs in quantum algorithms, quantum hardware, and cutting-edge theoretical research. The level of expertise shared was truly remarkable!One of the standout moments was the debate evening, held in the mythic Divinity Hall—a setting steeped in history that added even more weight to the discussions. Experts from both academia and industry engaged in thoughtful debates on the ethical implications, scalability, and societal impact of quantum technologies, bridging the gap between theory and real-world implementation.In addition to the stimulating talks, we were treated to a couple of sunny days, perfect for exploring the beautiful Oxford campus. The punting session on the River Cherwell was an absolute blast and a great opportunity to connect with fellow attendees in a more relaxed atmosphere.A huge thank you to the organizers, speakers, and attendees for making this such a memorable experience. The collaboration between academia and industry is accelerating the journey toward quantum advantage, and I’m excited to see where this transformative technology will lead us!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/avner-bensoussan-a6494322b_reflections-on-an-amazing-conference-ugcPost-7238869707213209600-1tlV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmgOiwBnQQLJM15lDf6uuGWFWS0OPttFmY", "_blank");
          
        },
      },{id: "news-my-first-journal-paper-and-a-journal-first-one-a-taxonomy-of-real-faults-for-hybrid-quantum-classical-software-architectures-has-been-accepted-at-acm-tosem",
          title: 'My first journal paper — and a journal-first one — “A Taxonomy of...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-vision-paper-simshadow-toward-live-noise-fingerprinting-for-discrepancy-analysis-in-quantum-software-engineering-has-been-accepted-at-icst-2026",
          title: 'Excited to share that our vision paper — “SimShadow: Toward Live Noise Fingerprinting...',
          description: "",
          section: "News",},{id: "news-our-work-a-taxonomy-of-real-faults-in-hybrid-quantum-classical-architectures-has-been-accepted-to-the-fse-2026-journal-first-track",
          title: 'Our work “A Taxonomy of Real Faults in Hybrid Quantum-Classical Architectures” has been...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%76%6E%65%72.%62%65%6E%73%6F%75%73%73%61%6E@%6B%63%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/avnerbensoussan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/avner-bensoussan-a6494322b", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-3285-9468", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Avner-Bensoussan/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sK-d-vAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
