function GoToPage(page) {
    window.location.href = `/${page}.html`;
}

let isDutch = true;

function toggleLanguage() {
    const description = document.getElementById('descriptionText');
    
    if (isDutch) {
        description.innerHTML = `I'm a second-year software development student with a strong foundation in HTML, CSS, JavaScript, and C#, with C# being my preferred programming language. My goal is to become a back-end developer skilled in multiple back-end languages.<br><br>

        I love challenging myself and always give my best to complete tasks successfully. Problem-solving is one of my strengths, and I enjoy finding creative ways to tackle challenges.<br><br>
        
        I'm also a good communicator and driven to constantly learn new skills and knowledge.<br><br>
        
        In my free time, I enjoy gaming, reading, and playing board games. I also like keeping up with the latest trends and innovations in the software world to stay up to date.`;
    } else {
        description.innerHTML = `Ik ben een tweedejaars student softwareontwikkeling met een sterke basis in HTML, CSS, JavaScript en C#, waarbij C# mijn voorkeursprogrammeertaal is. Mijn doel is om een back-end developer te worden die vaardig is in meerdere back-end talen.<br><br>

        Ik hou ervan om mezelf uit te dagen en zet me altijd volledig in om taken succesvol af te ronden. Probleemoplossend denken is een van mijn sterke punten, en ik vind het leuk om creatieve manieren te vinden om uitdagingen aan te gaan.<br><br>
        
        Daarnaast ben ik goed in communicatie en gedreven om constant nieuwe vaardigheden en kennis op te doen.<br><br>
        
        In mijn vrije tijd geniet ik van gamen, lezen en het spelen van bordspellen. Ook volg ik graag de nieuwste trends en innovaties in de softwarewereld om up-to-date te blijven.`;
    }
    isDutch = !isDutch;
}

