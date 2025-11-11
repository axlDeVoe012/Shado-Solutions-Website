iniialize()

function iniialize() {
    const chief_organizer = [{
        name: 'Quintin Magaseng', image: 'assets/img/team/quintin.jpg', role: 'Digital Academy', cell: "072 033 7501", email: 'MagasengQM@tut.ac.za',
        bio: `<p> Quintin Malope Magaseng is a passionate lecturer, who began his academic journey as a tutor, leading
                  to lecturing roles at Eduvos, Capricorn TVET College, and currently Tshwane University of Technology
                  (TUT) as a Lecturer and Module Coordinator in the ICT: 1st Year and Foundation Unit.</p>
                <p>Beyond academia, he serves as the Chief Organizer in the TVH structure, driving innovation, talent
                  development, and industry exposure for students. He holds multiple qualifications from TUT, including
                  a National Diploma in IT: Software Development, BTech in IT Support Services, PGDip in IT, and a PGCE
                  from UNISA to refine his lecturing and pedagogical skills. Currently, he is completing his master’s
                  research on Gateway Placement in Wireless Mesh Networks.</p>
                <p>Quintin has also earned six international certifications from Cisco and Microsoft and has held key
                  leadership roles within TVH structure as the university-industry relations officer and the Lead Team
                  for Digital Academy. His dedication to education, research, advancing technology and industry
                  collaboration continues to shape the future of ICT and empower students for success.</p>`
    },
    {
        name: 'Ms Morongoe Mashoeng', image: 'assets/img/team/mrg.jpg', role: '2nd Vice Chief Organizer', cell: "078 229 3342", email: 'morongoeM@tshwane.gov.za',
        bio: `My name is Morongoe Mashoeng. I am the Acting Innovation Consultant in the City of Tshwane. In my 10 years in local government, I have been exposed to secretarial and 
        administrative work, finance, and innovation. I am currently pursuing a formal qualification in Innovation Management to sharpen my skill set and to 
        better serve the youth to realise their potential and growth in their professional lives. I find great pleasure in championing initiatives directed at 
        empowering the young and youth as I find it fulfilling to see how our future leaders grow beyond imaginable grounds. I equally strive to be an agent of positive change. 
        My motto is: The sky is certainly not the limit and there is no harm in taking a few people along the ride with you….`},

    ];

    const executive_organizer = [
        {
            name: 'Mr Nkulumo Nkuna', image: 'assets/img/team/nkuna.jpg', role: 'Infrastructure, Security & AWS Foundation', cell: "065 939 0102", email: 'NkunaNC@tut.ac.za',
            bio: `Meet Nkulumo Cry Nkuna a Masters degree candidate in Information Technology department, AWS certified x2, who is highly motivated and results-oriented with expertise in 
        AWS cloud infrastructure, optimizing AWS cloud services, Instructure learning management systems, security best practices and manage secure cloud solutions while fostering a culture 
        of continuous learning. Possesses a strong understanding of leveraging cloud services and security principles with a proven ability to design, implement, and maintain secure cloud 
        environments.`},
        {
            name: 'Masego Dibetle', image: 'assets/img/team/Masego2.jpg', role: 'Media,Marketing & entertainment', cell: "061 476 0264", email: 'DibetleMP@tut.ac.za',
            bio: `Masego Prudence Dibetle is a BTech Information Technology In Business Applications Graduate, current busy and almost done with her MComp in Informatics. Individual with a 
            passion for academics. Lecturer in the 1st Year & Foundation Unit with a focus on computing fundamentals. A two-time Cum-Laude holder. A Chancellor's award was presented to her in 
            2019 in recognition of her outstanding academic record. For both her NDip and Btech years, she was an ICT Top 10 Achiever at the Tshwane University of Technology. During the time 
            when TUT and Huawei were forming a partnership, she was selected to represent TUT at Huawei's Shenzhen, China headquarters. It is her passion to ensure that gender-responsive 
            climate education is implemented, and that everyone has access to it, so that more women and girls can participate in creating a sustainable and just future. It has been noted 
            throughout history that a significant gender gap has persisted in all sciences, technology, engineering and mathematics (STEM) disciplines worldwide. As part of her efforts to 
            empower women, she has been involved in the Grace Hopper Conference and the Women Techmakers Scholars Program.`},
        {
            name: 'Sydney Sediale', image: 'assets/img/team/sediale.jpg', role: 'Registrar', cell: "076 033 9699", email: 'SedielaMS@tut.ac.za',
            bio: `#`
        },
        {
            name: 'Nonkululeko Ntuli', image: 'assets/img/team/nonku.jpg', role: 'Industry Support', cell: "079 286 4212", email: 'Nntuli@iqbusiness.net',
            bio: `“Nonkululeko is a passionate consultant at IQBUSINESS with a background in Finance and Data Science. With a strong love for technology, Nonkululeko is dedicated to exploring 
                emerging technologies and believes in equipping young people with the tools and knowledge needed to thrive in the digital age. Driven by a desire to make a positive impact on 
                society, Nonkululeko strives to contribute to the growth of sustainable businesses characterized by efficiency, innovation, and a genuine commitment to bettering humanity. Her expertise 
                lies in financial modelling, data-driven strategic analysis, data analysis, valuable insights extraction, and machine learning. Alongside their professional pursuits, Nonkululeko is a 
                co-founder of Azima, a blockchain-based fintech startup, and a governor of H.E.R. DAO SA which works to promote diversity and inclusion within the web3, AI and IoT space. With a focus on 
                knowledge, skill, and collaboration, Nonkululeko aims to drive innovation, progress, and positive change in both the business world and society at large.”`},
        // {
        //     name: 'TBA', image: 'assets/img/team/TBA', role: 'Digital Academy', cell: "00000", email: 'example@onfo.com',
        //     bio: `My role is to coordinate participation and collaboration among all universities within Tshwane (UP, Unisa & SMU )`
        // },
    ]


    const chiefTeam = document.querySelector('.chief_team');
    const executiveTeam = document.querySelector('.executive_team');





    // Chief Organizers
    chief_organizer.map((chief) => {
        const postElement = document.createElement('div');
        postElement.classList.add('main');

        postElement.innerHTML = `
            <label id="view" class="popup"> </label>
            <img class='tokenImage' src=${chief.image} alt="profile" />
            <h3 id="name">${chief.name}</h3>
            <h5 id="role">${chief.role}</h5>
            <p class='description' id="cell">Cell &ensp;&nbsp;: ${chief.cell}</p>
            <p class='description' id="email">Email : ${chief.email}</p>
        `;

        const viewLabel = postElement.querySelector('#view');
        viewLabel.addEventListener('click', () => popup(chief));

        chiefTeam.appendChild(postElement);
    });
    // Executive Organizers
    executive_organizer.map((executive) => {
        const postElement = document.createElement('div');
        postElement.classList.add('main');
        postElement.innerHTML = `
                <label id="view" class="popup"> </label>
                <img class='tokenImage' src=${executive.image} alt="profile" />
                <h3 id="name">${executive.name}</h3>
                <h5 id="role">${executive.role}</h5>
                <p class='description' id="cell">Cell &ensp;&nbsp;: ${executive.cell}</p>
                <p class='description' id="email">Email : ${executive.email}</p>
            `;
        const viewLabel = postElement.querySelector('#view');
        viewLabel.addEventListener('click', () => popup(executive));
        executiveTeam.appendChild(postElement)
    })




    // chief_organizer.forEach(chief => {
    //     //document.getElementById('name').innerHTML = chief.name

    //     console.log(chief.name);
    //     name += `<span '>
    //             <img src='${chief.image}' alt="profile" />
    //              <h5>${chief.name}</h4>
    //              <h5>${chief.role}</h5>
    //              <h6> Cell  : ${chief.cell}</h6>
    //              <h6> Email : ${chief.email}</h6>        
    //     </span>`
    //     role += chief.role;
    //     cell += chief.cell;
    //     email += chief.email;
    //     bio += chief.bio;
    // });
    // console.log(chief_organizer);

    // console.log(name);

    // document.getElementById('individual').innerHTML = name;
}


function popup(data) {
    document.getElementById("popupImage").src = data.image;
    document.getElementById("popupName").textContent = data.name;
    document.getElementById("popupRole").textContent = data.role;
    document.getElementById("popupBio").innerHTML = data.bio;  
    document.getElementById("popupModal").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popupModal").style.display = "none";
  }
  