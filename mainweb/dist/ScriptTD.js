// -------------------ขึ้นพิมพ์โดยไม่ต้องกด--------------------------
// window.onload = function() {
//     document.getElementById("nametext","").focus();}

// ---------------เช็คคำหยาบ--------------------------
const input = document.querySelector("input");
input.addEventListener("input", updateInput);
// test
function updateInput(e) {
 
  const slangWords = ["ลุงตู่","อัยการศึก","พระมหากษัตริย์","เสรีภาพ","Freedom","สำนักราช","ความจริง","สุจริต","หยาบ","หมิ่น","มาตรา","สังคม","เสรีภาพ","หมิ่นประมาท","เสี่ยโอ","รัชทายาท","กฎหมาย","อาญา","hlab","senate","วุฒิสภา","วุฒิสภา","สว.","สว.","ตู่","หนึ่งหนึ่งสอง","goverment","king","112","5h1t","5hit","a_s_s","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f_u_c_k","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lmfao","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s_h_i_t","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","กระดอ","กะหรี่","กู","ควย","ควาย","เงี่ยน","จิ๋ม","จู๋","เจี๊ยว","ชิบหาย","ดอกทอง","ตอแหล","แตด","ถ่อย","พ่อมึงตาย","ไพร่","มึง","แม่ง","แมงดา","แม่มึงตาย","เยด","เย็ด","เย๊ด","ร่าน","สถุน","ส้นตีน","สลัม","สวะ","สัด","สาส","สัส","เสือก","หน้าด้าน","หน้าตัวเมีย","หมอย","หัม","ห่า","หำ","หี","เหี้ย","เหยด","เย้ด","หงี่","เน้ด","กะดอ","Yed","กระดอ","kuy","hee","หัวดอ","เหรี้ย","สันขวาน","จัญไร","ควยถอก","กระแดะ","เย็ดแม่","ถอก","ลวยคุย","เยี่ยว","หนังหี","กะโปก","ชักว่าว","โม้ค","ลากมูก","เชรี้ย","พ่อง","พ่อม","ฆวย","ฅวย","ส๊าส","สาด","Fuck"];

  for (let i = 0; i < slangWords.length; i++) {
 
  if(e.target.value.includes(slangWords[i].toLowerCase())){
    document.querySelector("input").value=''
    document.getElementById('error').style.display = 'block';
  }

  document.getElementById('popup-Gotit-button').onclick = function(){document.getElementById('error').style.display = 'none';}
}
}

// -------------------เช็คยังไม่ได้กรอชื่อ-------------------------
const nextButton = document.getElementById("next");

nextButton.addEventListener("click", function() {
    const nameInput = document.getElementById("nametext");
    const name = nameInput.value.trim(); 

    if (name.length <= 0) {
        document.getElementById('popup').style.display = 'block'; 
        document.getElementById('popup-confirm-button').onclick = function(){document.getElementById('popup').style.display = 'none';
    }
    } else {
        document.getElementById('error').style.display = 'none'; 
        showPage2(); 
    }
});

// -------------กด next ปิด page 1 โชว์ page2 -------------------------
function showPage2() {
    const nameInput = document.getElementById("nametext");
    const name = nameInput.value.trim(); 
    document.getElementById("showName").innerText = "Name: " + name; 

    document.querySelectorAll(".page1").forEach(element => {
        element.style.display = "none";
    });
    document.querySelector(".page2").style.display = "block";
    
}
// -------------ปรับ Text  -------------------------


  













// ----------------------อัพภาพ-------------------------
function uploadImage() {
    const input = document.getElementById('imageUpload');
    const file = input.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Image uploaded successfully!');
        } else {
            alert('Failed to upload image.');
        }
    })
    .catch(error => {
        console.error('Error uploading image:', error);
        alert('An error occurred while uploading the image.');
    });
    }
    

    