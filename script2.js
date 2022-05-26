var audio = new Audio('sentmessage.mp3');
var contactString = "<div  </a>Click here <a target='_blank' href='Course_Registration_Form.html'> <div class='socialItem'> <img class='socialItemI' src='images/telegram.svg' alt=''></div> </div>";
var resumeString = "<img src='tum.png  ' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='pdf.png'><label>WeMun Brochure.pdf</label></div><a href='https://drive.google.com/file/d/1V8lyqLhx-RgzHvTVE42zAneN42r7Cidq/view?usp=sharing' download='brochure'><img class='download' src='downloadIcon.svg'></a></div>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>You can call me <span class='bold'><a class='alink'>WEBOT</a>.</span><br><br>They Have programmed 👨🏻‍💻me to Expain About WeMun. </span><br><br>Look these Guys have hosted me on the inernet and it's too boring , So please interact with me 🥺 .<br><br>Send <span class='bold'>'Hi'</span> to know more... .<br>");
            }, 2000);
            break;
        case "hi":
            sendTextMessage("<span class='sk'>Send Following Keyword which Your Interested in...<br>e.g<br><span class='bold'>'wemun'</span> -get to know about WeMun in detail <br><span class='bold'>'UNSC'</span> - Committe description<br><span class='bold'>'UNEA'</span> - Committe descriptions<br><span class='bold'>'Lok Sabha'</span> - Committe description<br><span class='bold'>'IP'</span> - Committe description <br> <span class='bold'>'WHO'</span> - Committe description <br> <span class='bold'>'brochure'</span> - Download our Brochure <br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'Register'</span> - Get the Registration Link</span>");
            break;
        case "brochure":
            sendTextMessage(resumeString);
            break;
        case "wemun":
            sendTextMessage("<span class='sk'>WeMun aims to provide a forum for future world leaders to develop original, creative solutions. Delegates will acquire insight into the dynamics of mediation and international decision-making. Throughout the process, participants will improve a variety of abilities, including speaking, negotiating, leadership, and policy formulation.</span>");
            break;

        case "unsc":
            sendTextMessage("The UN Security Council is one of the United Nations' five primary organs. It is made up of ten rotating members, each serving a two-year term. The five permanent members are known as the P5; they were key World War II winners. Each have the authority to reject any resolution that the body is considering.<br><br>Agenda: Deliberation on the Syrian War<br>");
            break;

         case "unea":
                sendTextMessage("The United Nations Environment Assembly (UNEA) was founded in 2012. The UNEA tackles the world's most pressing environmental issues. It provides environmental direction to the UN and other stakeholders through resolutions and calls to action. Furthermore, the UNEA has sections that address intersectionality of environmental challenges.<br><br>Agenda: Structuting methods for mitigating and adapting to desertification and  drought while ensuring sustainable consumption and production. <br>");
                break;

         case "lok sabha":
                 sendTextMessage("Lok Sabha is India's bicameral Parliament. The Rajya Sabha is the Upper House. Members are chosen by universal suffrage and first-past-the-post voting. The Lok Sabha meets in the Sansad Bhavan's Lok Sabha Chambers in New Delhi.<br><br>Agenda: deliberation on the kashmiri pandit exodus<br>");
                 break;

         case "ip":
                    sendTextMessage("IPC is unlike any other Model United Nations (MUN) experience. Reporters will have the chance to act as a third party in other committees to report their progress, debate flow, alliance making etc..<br><br>Those who wish to join IPC should have a passion for journalism, or just writing in general.<br>");
                    break;
        
         case "who":
                    sendTextMessage("Its mission is to promote health, keep the world safe and serve the vulnerable. It advocates that a billion more people should have access to universal health care. The agency's goal is to ensure that everyone can attain the highest level of health..<br><br>Agenda:the epidemic of psycho-social distress and mental illness around the world <br><br>Special Committee Only for Project Inclusion delegates<br>");
                     break;            

        case "register":
            sendTextMessage(contactString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/vinayak_patil_09/'><span class='bold'>Vinayak Patil</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        
        
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
