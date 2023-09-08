// Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

// Language translations
var language = {
    // eng: {
    //     homeButton: "Home",
    //     serviceButton: "Services",
    //     clientsButton: "Clients",
    //     aboutButton: "About",
    //     contactButton: "Contact"
    // },
    al: {
        // Navigation bar | .navigation-items, a
        homeButton: "Ballina",
        serviceButton: "Sherbimet",
        clientsButton: "Klientet",
        aboutButton: "Rreth Nesh",
        contactButton: "Kontakt",
    
        // Home Slider Content | #home, .slides .content
        heroTextTitle: "Ne jemi,",
        heroHeaderSpan: "Capital Accounting",
        heroParagraphText: "Zgjidhje të personalizuara të kontabilitetit për nevojat tuaja unike të biznesit"    
    },
    tr: {
        // Navigation bar | Navigation-items, a
        homeButton: "Anasayfa",
        serviceButton: "Hizmetler",
        clientsButton: "Partnerler",
        aboutButton: "Hakkında",
        contactButton: "Iletişim",
        
        // Home Slider Content | #home, .slides .content active
        heroTextTitle: "Capital Accounting",
        heroParagraphText: "Benzersiz İşletme İhtiyaçlarınız İçin Özelleştirilmiş Muhasebe Çözümleri",
        heroHeaderSpan:"",
        heroContactText:"Iletişim",
        // Home Slider Content 2 | #home, .slides .content
        heroTextTitle2: "Gelişmenizi Güçlendiriyoruz",
        heroParagraphText2: "Sizin Başarınız, Bizim Muhasebe Hizmetimiz",
        heroContactText2:"Iletişim",
        // Home Slider Content 3 | #home, .slides .content
        heroTextTitle3: "Sizin Vizyonunuz, Bizim Tecrübemiz",
        heroParagraphText3: "Birlikte Daha Parlak Bir Finansal Gelecek İnşaa Ediyoruz",
        heroContactText3:"Iletişim",
        
        // services
        servicesHeader: "Hizmetler",
        servicesTitle1: "Muhasebe",
        servicesDescription1: "Muhasebe, finansal içgörüler sağlamada, karar vermeye yardımcı olmada, finansal raporlama standartlarına ve vergi düzenlemelerine uyumu sağlamada çok önemli bir rol oynar.",
        servicesTitle2: "İş Planı",
        servicesDescription2: "İyi hazırlanmış bir iş planı, yatırımcıları çekmeye, finansmanı güvence altına almaya ve işletmenin uzun vadeli başarısını sağlamaya yardımcı olduğu için hem yeni başlayanlar hem de yerleşik işletmeler için çok önemlidir.",
        servicesTitle3: "Finans",
        servicesDescription3: "Finans, belirli hedeflere ulaşmak ve fonların kullanımını optimize etmek için paranın, yatırımların ve diğer finansal kaynakların yönetimini ifade eder.",
        servicesTitle4: "İşletme Kayıtları",
        servicesDescription4: "İşletme kaydı, uygun devlet makamlarıyla resmi olarak yeni bir ticari işletme kurmayı içerir.",
    
        // clients
        sectionClientsTitle: "Partnerler",
        grabInfo: "kaydırmak için sürükle",

        // about
        aboutTitle:"Hakkında",
        aboutContent:"2019 yılında Prizren'de kurulan Capital Accounting, profesyonel kadrosu ile muhasebe, teşvik ve yatırım fizibilite hizmetleri sunmaktadır. Capital Accounting'in amacı, şirketlerin mali ve vergisel konularla ilgili yasal yükümlülüklerini yerine getirirken, iş faaliyetlerinde karar alma ve açık yönetimde doğru, anlaşılır, güvenilir ve sürekli bilgi akışını doğru süreçte sağlamak, oluşabilecek tüm sorunlara ortak olmaktır.",
        meetOurTeamTitle: "Takımımız Ile Tanışın",
        jobA: "Kurucu, Ekonomist",
        jobB: "Muhasebe Teknikeri",

        // footer
        // quick links
        quickLinksTitle: "Kısayollar",
        footerHome: "Anasayfa",
        footerServices: "Hizmetler",
        footerClients: "Partnerler",
        footerAbout: "Hakkında",

        // follow us on social
        footerFollowUs: "Bizi Takip Edin!",
    
        // contact info
        footerContactTitle: "Iletişim Bilgileri",
        footerStreet: "Sahat Kulla Caddesi, No. 24",
        footerHoursTitle: "Açılış Saatleri: ",
        footerHours: "Pzt. - Cmt. | 09:00 - 16:00",

        // calendar
        atkCalendarTitle: "ATK'nin Önemli Tarihleri",
        calendarSun:"P",
        calendarMon:"Pts",
        calendarTue:"S",
        calendarWed:"Ç",
        calendarThu:"Prş",
        calendarFri:"C",
        calendarSat:"Cts",
        
        currentDateATK: "Bugünün tarihi",
        deadlineTaxATK: "KDV ödemelerinin yapıldığı tarih"
    }
};

// Define language via window hash
if(window.location.hash) {
    if (window.location.hash === "#tr") {
        // navigation
        navHome.textContent = language.tr.homeButton;
        navService.textContent = language.tr.serviceButton;
        navClients.textContent = language.tr.clientsButton;
        navAbout.textContent = language.tr.aboutButton;
        navContact.textContent = language.tr.contactButton;

        // hero
        heroTitle.textContent = language.tr.heroTextTitle;
        heroText.textContent = language.tr.heroParagraphText;
        heroSpan.textContent = language.tr.heroHeaderSpan;
        heroContact.textContent = language.tr.heroContactText;
        document.getElementById("heroSpan").style.display = "none"; //Span display
        
        heroTitle2.textContent = language.tr.heroTextTitle2;
        heroText2.textContent = language.tr.heroParagraphText2;
        heroContact2.textContent = language.tr.heroContactText2;
        
        heroTitle3.textContent = language.tr.heroTextTitle3;
        heroText3.textContent = language.tr.heroParagraphText3;
        heroContact3.textContent = language.tr.heroContactText3;

        // services
        sectionServicesTitle.textContent = language.tr.servicesHeader;
        servicesTitle1.textContent = language.tr.servicesTitle1;
        servicesDescription1.textContent = language.tr.servicesDescription1;
        servicesTitle2.textContent = language.tr.servicesTitle2;
        servicesDescription2.textContent = language.tr.servicesDescription2;
        servicesTitle3.textContent = language.tr.servicesTitle3;
        servicesDescription3.textContent = language.tr.servicesDescription3;
        servicesTitle4.textContent = language.tr.servicesTitle4;
        servicesDescription4.textContent = language.tr.servicesDescription4;

        // clients
        sectionClientsTitle.textContent = language.tr.sectionClientsTitle;
        grabInfo.textContent = language.tr.grabInfo;

        // about
        aboutTitle.textContent = language.tr.aboutTitle;
        aboutContent.textContent = language.tr.aboutContent;
        meetOurTeamTitle.textContent = language.tr.meetOurTeamTitle; // meet our team
        jobA.textContent = language.tr.jobA; // Sezer's job
        jobB.textContent = language.tr.jobB; // Mert's job

        // footer
        quickLinksTitle.textContent = language.tr.quickLinksTitle;
        footerHome.textContent = language.tr.footerHome;
        footerServices.textContent = language.tr.footerServices;
        footerClients.textContent = language.tr.footerClients;
        footerAbout.textContent = language.tr.footerAbout;

        footerFollowUs.textContent = language.tr.footerFollowUs;

        footerContactTitle.textContent = language.tr.footerContactTitle;
        footerStreet.textContent = language.tr.footerStreet;
        footerHoursTitle.textContent = language.tr.footerHoursTitle;
        footerHours.textContent = language.tr.footerHours;
        // footerBreak.textContent = language.tr.footerBreak;

        atkCalendarTitle.textContent = language.tr.atkCalendarTitle;
        calendarSun.textContent = language.tr.calendarSun;
        calendarMon.textContent = language.tr.calendarMon;
        calendarTue.textContent = language.tr.calendarTue;
        calendarWed.textContent = language.tr.calendarWed;
        calendarThu.textContent = language.tr.calendarThu;
        calendarFri.textContent = language.tr.calendarFri;
        calendarSat.textContent = language.tr.calendarSat;

        currentDateATK.textContent = language.tr.currentDateATK;
        deadlineTaxATK.textContent = language.tr.deadlineTaxATK;

    } else if (window.location.hash === "#al") {
        navHome.textContent = language.al.homeButton;
        navService.textContent = language.al.serviceButton;
        navClients.textContent = language.al.clientsButton;
        navAbout.textContent = language.al.aboutButton;
        navContact.textContent = language.al.contactButton;

        heroText.textContent = language.al.heroParagraphText;
        heroTitle.textContent = language.al.heroTextTitle;
        heroSpan.textContent = language.al.heroHeaderSpan;
    } 
}

function reloadPage() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }


// define language reload onclick illiteration
// for (i = 0; i < dataReload.length; i++) {
//     dataReload[i].onclick = function() {
//         location.reload(true);
//     };

// }