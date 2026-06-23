/* ==========================================
   JAVASCRIPT INTERACTIVITY
   ========================================== */

// Language translations
const translations = {
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang Saya",
    "nav.projects": "Proyek",
    "nav.certificate": "Sertifikat",
    "nav.contact": "Kontak",
    "hero.greeting": "Halo Semua, Saya",
    "hero.subtitle": "Seorang Siswa di SMKN 1 CIOMAS",
    "hero.desc":
      "Saya sangat menyukai bidang Pemrograman dan Desain, hobi saya adalah menggambar, mendengarkan musik, dan menonton film.",
    "hero.name": "Mutiara Ramadhani",
    "about.title": "Tentang Saya",
    "about.desc":
      "Halo, perkenalkan saya Mutiara Ramadhani, siswi SMK Negeri 1 Ciomas jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki minat dalam bidang UI/UX dan administrasi. Saya mampu mengolah dan menyusun data menjadi informasi yang terstruktur untuk mendukung perancangan tampilan yang mudah dipahami dan user-friendly. Selain itu, saya terbiasa bekerja secara teliti, rapi, dan sistematis dalam mengelola data maupun dokumen.",
    "about.stat1": "Tahun Belajar",
    "about.stat2": "Sertifikat",
    "about.stat3": "Proyek Selesai",
    "about.downloadcv": "Unduh CV",
    "about.vision": "Visi Saya",
    "about.vision.desc":
      "Menjadi pengembang web profesional yang mampu menciptakan solusi digital yang kreatif dan berdampak bagi masyarakat.",
    "tools.title": "Tools Yang Digunakan",
    "tools.desc":
      "Berikut adalah tools yang biasa digunakan untuk pengembangan website",
    "projects.title": "Proyek Saya",
    "projects.desc":
      "Berikut adalah beberapa proyek yang saya kerjakan selama studi saya di SMKN 1 Ciomas di program PPLG (Pengembangan Perangkat Lunak dan Gim).",
    "projects.view": "Lihat Detail",
    "project1.desc":
      "Sistem kasir lengkap untuk warung sembako pa ruslan.",
    "project2.desc":
      "Sistem untuk mencatat data siswa, guru, dan peminjaman di sekolah.",
    "project3.desc":
      "Smartschool exam skanic website ujian online sekolah.",
    "cert.title": "Sertifikat Saya",
    "cert.view": "Lihat Detail",
    "contact.title": "Hubungi Saya",
    "contact.subtitle":
      "Ada pertanyaan atau ingin bekerja sama? Kirim pesan di bawah ini!",
    "form.name": "NAMA",
    "form.email": "EMAIL KAMU",
    "form.subject": "SUBJEK",
    "form.message": "PESAN",
    "form.send": "Kirim Pesan",
    "form.namePlaceholder": "Nama kamu...",
    "form.emailPlaceholder": "email@kamu.com",
    "form.subjectPlaceholder": "Tentang apa?",
    "form.messagePlaceholder": "Tuliskan pesanmu di sini...",
    "footer.links": "Tautan Cepat",
    "footer.follow": "Ikuti Saya",
    "tool.vscode": "Visual Studio Code",
    "tool.html": "HTML",
    "tool.css": "CSS",
    "tool.bootstrap": "Bootstrap",
    "tool.js": "Javascript",
    "tool.github": "Github",
    "tool.canva": "Canva",
    "tool.figma": "Figma",
    "tool.php": "PHP",
    "tool.mysql": "MySQL",
    "tool.desc1": "Code Editor",
    "tool.desc2": "Language",
    "tool.desc3": "Language",
    "tool.desc4": "Framework",
    "tool.desc5": "Language",
    "tool.desc6": "Repository",
    "tool.desc7": "Design App",
    "tool.desc8": "Design Tool",
    "tool.desc9": "Language",
    "tool.desc10": "Database",
    "hero.downloadcv": "Unduh CV",
    "footer.created": "Dibuat oleh",
    "cert1.title": "Sertifikat Dasar Pemrograman Web",
    "cert2.title": "Sertifikat Pemrograman JavaScript Dasar",
    "cert3.title": "Sertifikat Front-end Pemula",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.certificate": "Certificate",
    "nav.contact": "Contact",
    "hero.greeting": "Hello Everyone, I'm",
    "hero.subtitle": "A Student at SMKN 1 CIOMAS",
    "hero.desc":
      "I really love Programming and Design, my hobbies are drawing, listening to music, and watching movies.",
    "hero.name": "Mutiara Ramadhani",
    "about.title": "About Me",
    "about.desc":
      "Hello, let me introduce myself, Mutiara Ramadhani, a student at SMK Negeri 1 Ciomas majoring in Software Development and Game (PPLG). I have an interest in the UI/UX and administration fields. I am able to process and organize data into structured information to support the design of easy-to-understand and user-friendly displays. Additionally, I am accustomed to working carefully, neatly, and systematically in managing data and documents.",
    "about.stat1": "Years of Learning",
    "about.stat2": "Certificate",
    "about.stat3": "Projects Completed",
    "about.downloadcv": "Download CV",
    "about.vision": "My Vision",
    "about.vision.desc":
      "To become a professional web developer capable of creating creative and impactful digital solutions for society.",
    "tools.title": "Tools Used",
    "tools.desc": "Here are the tools commonly used for website development",
    "projects.title": "My Projects",
    "projects.desc":
      "Here are some projects I have worked on during my studies at SMKN 1 Ciomas in the PPLG (Software Development and Game) program.",
    "projects.view": "View Details",
    "project1.desc":
      "Complete cashier system for Pa Ruslan grocery store.",
    "project2.desc":
      "System for recording student, teacher, and loan data at school.",
    "project3.desc":
      "Smartschool exam skanic online exam website for school.",
    "cert.title": "My Certificates",
    "cert.view": "View Details",
    "contact.title": "Contact Me",
    "contact.subtitle":
      "Have questions or want to collaborate? Send a message below!",
    "form.name": "NAME",
    "form.email": "YOUR EMAIL",
    "form.subject": "SUBJECT",
    "form.message": "MESSAGE",
    "form.send": "Send Message",
    "form.namePlaceholder": "Your name...",
    "form.emailPlaceholder": "your@email.com",
    "form.subjectPlaceholder": "What is this about?",
    "form.messagePlaceholder": "Write your message here...",
    "footer.links": "Quick Links",
    "footer.follow": "Follow Me",
    "tool.vscode": "Visual Studio Code",
    "tool.html": "HTML",
    "tool.css": "CSS",
    "tool.bootstrap": "Bootstrap",
    "tool.js": "Javascript",
    "tool.github": "Github",
    "tool.canva": "Canva",
    "tool.figma": "Figma",
    "tool.php": "PHP",
    "tool.mysql": "MySQL",
    "tool.desc1": "Code Editor",
    "tool.desc2": "Language",
    "tool.desc3": "Language",
    "tool.desc4": "Framework",
    "tool.desc5": "Language",
    "tool.desc6": "Repository",
    "tool.desc7": "Design App",
    "tool.desc8": "Design Tool",
    "tool.desc9": "Language",
    "tool.desc10": "Database",
    "cert1.title": "Web Programming Basics Certificate",
    "cert2.title": "Basic JavaScript Programming Certificate",
    "cert3.title": "Beginner Front-end Certificate",
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我",
    "nav.projects": "项目",
    "nav.certificate": "证书",
    "nav.contact": "联系",
    "hero.greeting": "大家好，我是",
    "hero.subtitle": "SMKN 1 CIOMAS 的学生",
    "hero.desc": "我非常热爱编程和设计，我的爱好是绘画、听音乐和看电影。",
    "hero.name": "Mutiara Ramadhani",
    "about.title": "关于我",
    "about.desc":
      "你好，让我自我介绍，我是Mutiara Ramadhani，是SMKN 1 Ciomas的学生，主修软件开发和游戏（PPLG）。我对UI/UX和行政领域感兴趣。我能够处理和组织数据成为结构化的信息，以支持易于理解和用户友好的显示设计。此外，我习惯于在管理数据和文档时仔细、整洁和系统地工作。",
    "about.stat1": "学习年数",
    "about.stat2": "证书",
    "about.stat3": "已完成项目",
    "about.downloadcv": "下载 CV",
    "about.vision": "我的愿景",
    "about.vision.desc":
      "成为一名能够为社会创造创意且有影响力的 digital 解决方案的专业网络开发人员。",
    "tools.title": "使用的工具",
    "tools.desc": "以下是网站开发常用的工具",
    "projects.title": "我的项目",
    "projects.desc":
      "这是我在 SMKN 1 Ciomas 学习 PPLG（软件开发和游戏）课程期间参与的一些项目。",
    "projects.view": "查看详情",
    "project1.desc":
      "Pa Ruslan杂货店的完整收银系统。",
    "project2.desc":
      "学校学生、教师和贷款数据的记录系统。",
    "project3.desc":
      "学校的Smartschool考试skanic在线考试网站。",
    "cert.title": "我的证书",
    "cert.view": "查看详情",
    "contact.title": "联系我",
    "contact.subtitle": "有疑问或想合作？在下面发送消息！",
    "form.name": "姓名",
    "form.email": "您的邮箱",
    "form.subject": "主题",
    "form.message": "留言",
    "form.send": "发送消息",
    "form.namePlaceholder": "您的姓名...",
    "form.emailPlaceholder": "your@email.com",
    "form.subjectPlaceholder": "关于什么？",
    "form.messagePlaceholder": "在此输入您的消息...",
    "footer.links": "快速链接",
    "footer.follow": "关注我",
    "tool.vscode": "Visual Studio Code",
    "tool.html": "HTML",
    "tool.css": "CSS",
    "tool.bootstrap": "Bootstrap",
    "tool.js": "Javascript",
    "tool.github": "Github",
    "tool.canva": "Canva",
    "tool.figma": "Figma",
    "tool.php": "PHP",
    "tool.mysql": "MySQL",
    "tool.desc1": "Code Editor",
    "tool.desc2": "Language",
    "tool.desc3": "Language",
    "tool.desc4": "Framework",
    "tool.desc5": "Language",
    "tool.desc6": "Repository",
    "tool.desc7": "Design App",
    "tool.desc8": "Design Tool",
    "tool.desc9": "Language",
    "tool.desc10": "Database",
    "cert1.title": "网页编程基础证书",
    "cert2.title": "基础JavaScript编程证书",
    "cert3.title": "前端开发初级证书",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "私について",
    "nav.projects": "プロジェクト",
    "nav.certificate": "証明書",
    "nav.contact": "連絡先",
    "hero.greeting": "皆さん、こんにちは。私は",
    "hero.subtitle": "SMKN 1 CIOMAS の学生です",
    "hero.desc":
      "私はプログラミングとデザインが大好きで、趣味は絵を描くこと、音楽を聴くこと、映画を見ることです。",
    "hero.name": "Mutiara Ramadhani",
    "about.title": "私について",
    "about.desc":
      "こんにちは、Mutiara Ramadhaniです。SMKN 1 Ciomas のソフトウェア開発およびゲーム (PPLG) を専攻している学生です。UI/UX と管理分野に興味があります。私はデータを処理および編成して、理解しやすく、ユーザーフレンドリーな表示設計をサポートする構造化情報にすることができます。さらに、データと文書の管理では、細心、清潔、体系的に作業することに慣れています。",
    "about.stat1": "学習年数",
    "about.stat2": "証明書",
    "about.stat3": "完了したプロジェクト",
    "about.downloadcv": "CV をダウンロード",
    "about.vision": "私のビジョン",
    "about.vision.desc":
      "社会のために創造的で影響力のあるデジタルソリューションを作成できるプロのウェブ開発者になること。",
    "tools.title": "使用ツール",
    "tools.desc": "ウェブ開発でよく使用するツール",
    "projects.title": "私のプロジェクト",
    "projects.desc":
      "これらは、SMKN 1 Ciomas で PPLG（ソフトウェア開発およびゲーム）プログラムを学んでいる間に取り組んだプロジェクトです。",
    "projects.view": "詳細を見る",
    "project1.desc":
      "Pa Ruslan食料品店向けの完全なレジシステム。",
    "project2.desc":
      "学校の学生、教师、をよびローンデータの記録システム。",
    "project3.desc":
      "学校のSmartschool試騎 skanic オンライン試騎ウェブサイト。",
    "cert.title": "私の証明書",
    "cert.view": "詳細を見る",
    "contact.title": "お問い合わせ",
    "contact.subtitle":
      "質問やコラボレーションをご希望ですか？以下にメッセージを送信してください！",
    "form.name": "名前",
    "form.email": "メールアドレス",
    "form.subject": "件名",
    "form.message": "メッセージ",
    "form.send": "メッセージを送信",
    "form.namePlaceholder": "あなたの名前...",
    "form.emailPlaceholder": "your@email.com",
    "form.subjectPlaceholder": "これは何についてですか？",
    "form.messagePlaceholder": "ここにメッセージを入力してください...",
    "footer.links": "クイックリンク",
    "footer.follow": "フォローする",
    "tool.vscode": "Visual Studio Code",
    "tool.html": "HTML",
    "tool.css": "CSS",
    "tool.bootstrap": "Bootstrap",
    "tool.js": "Javascript",
    "tool.github": "Github",
    "tool.canva": "Canva",
    "tool.figma": "Figma",
    "tool.php": "PHP",
    "tool.mysql": "MySQL",
    "tool.desc1": "Code Editor",
    "tool.desc2": "Language",
    "tool.desc3": "Language",
    "tool.desc4": "Framework",
    "tool.desc5": "Language",
    "tool.desc6": "Repository",
    "tool.desc7": "Design App",
    "tool.desc8": "Design Tool",
    "tool.desc9": "Language",
    "tool.desc10": "Database",
    "cert1.title": "ウェブプログラミング基礎証明書",
    "cert2.title": "基礎JavaScriptプログラミング証明書",
    "cert3.title": "フロントエンド开发初级証明書",
  },
  ko: {
    "nav.home": "홈",
    "nav.about": "소개",
    "nav.projects": "프로젝트",
    "nav.certificate": "수료증",
    "nav.contact": "연락처",
    "hero.greeting": "안녕하세요, 저는",
    "hero.subtitle": "SMKN 1 CIOMAS 학생입니다",
    "hero.desc":
      "저는 프로그래밍과 디자인을 정말 좋아하며, 취미는 그림 그리기, 음악 감상, 영화 감상입니다.",
    "hero.name": "Mutiara Ramadhani",
    "about.title": "소개",
    "about.desc":
      "안녁하세요, 저는 Mutiara Ramadhani입니다. SMKN 1 Ciomas의 소프트웨어 개발 및 게임(PPLG) 전공 학생입니다. 나는 UI/UX 및 관리 분야에 관심이 있습니다. 저는 데이터를 처리하고 구성하여 이해하기 쉽고 사용자 친화적인 디스플레이 디자인을 지원하는 구조화된 정보로 만들 수 있습니다. 또한 저는 데이터와 문서 관리에 신중하기, 깊기 및 체계적으로 작업하는 데 떠르션 이류됩니다.",
    "about.stat1": "학습 년수",
    "about.stat2": "인증서",
    "about.stat3": "완료 프로젝트",
    "about.downloadcv": "CV 다운로드",
    "about.vision": "나의 비전",
    "about.vision.desc":
      "사회에 창의적이고 영향력 있는 디지털 솔루션을 제공할 수 있는 전문 웹 개발자가 되는 것입니다.",
    "tools.title": "사용 도구",
    "tools.desc": "웹사이트 개발에 자주 사용하는 도구들",
    "projects.title": "나의 프로젝트",
    "projects.desc":
      "이것들은 제가 SMKN 1 Ciomas에서 PPLG(소프트웨어 개발 및 게임) 프로그램을 공부하는 동안 수행한 몇 가지 프로젝트입니다.",
    "projects.view": "상세 보기",
    "project1.desc":
      "Pa Ruslan 식료품점을 위한 완전한 계산대 시스템입니다.",
    "project2.desc":
      "학교의 학생, 교사 및 대출 데이터 기록 시스템입니다.",
    "project3.desc":
      "학교의 Smartschool 시험 skanic 온라인 시험 웹사이트입니다。",
    "cert.title": "나의 수료증",
    "cert.view": "상세 보기",
    "contact.title": "문의하기",
    "contact.subtitle":
      "질문이 있거나 협업을 원하시나요? 아래에 메시지를 남겨주세요!",
    "form.name": "이름",
    "form.email": "이메일",
    "form.subject": "제목",
    "form.message": "메시지",
    "form.send": "메시지 보내기",
    "form.namePlaceholder": "당신의 이름...",
    "form.emailPlaceholder": "your@email.com",
    "form.subjectPlaceholder": "무엇에 관한 것입니까?",
    "form.messagePlaceholder": "여기에 메시지를 입력하세요...",
    "footer.links": "빠른 링크",
    "footer.follow": "팔로우",
    "tool.vscode": "Visual Studio Code",
    "tool.html": "HTML",
    "tool.css": "CSS",
    "tool.bootstrap": "Bootstrap",
    "tool.js": "Javascript",
    "tool.github": "Github",
    "tool.canva": "Canva",
    "tool.figma": "Figma",
    "tool.php": "PHP",
    "tool.mysql": "MySQL",
    "tool.desc1": "Code Editor",
    "tool.desc2": "Language",
    "tool.desc3": "Language",
    "tool.desc4": "Framework",
    "tool.desc5": "Language",
    "tool.desc6": "Repository",
    "tool.desc7": "Design App",
    "tool.desc8": "Design Tool",
    "tool.desc9": "Language",
    "tool.desc10": "Database",
    "cert1.title": "웹 프로그래밍 기초 수료증",
    "cert2.title": "기초 JavaScript 프로그래밍 수료증",
    "cert3.title": "프론트엔드 초급 수료증",
  },
};

// Global State
let currentLang = localStorage.getItem("portfolio-lang") || "en";
let currentProjectImages = [];
let currentImageIndex = 0;

// Project images mapping
const projectImagesMap = {
  "assets/img/project1.jpg": [
    "assets/img/project1.jpg",
    "assets/img/project1(ke2).jpg",
    "assets/img/project1(ke3).jpg",
    "assets/img/project1(ke4).jpg",
  ],
  "assets/img/project2.jpg": [
    "assets/img/project2.jpg",
    "assets/img/project2(ke2).jpg",
    "assets/img/project2(ke3).jpg",
    "assets/img/project2(ke4).jpg",
    "assets/img/project2(ke5).jpg",
  ],
  "assets/img/project3.jpg": ["assets/img/project3.jpg"],
};

// --- Language Functions ---
function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === "LABEL") {
        el.textContent = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("portfolio-lang", lang);
}

// --- Modal Functions ---
function openProjectModal(imageSrc) {
  const projectModal = document.getElementById("projectModal");
  currentProjectImages = projectImagesMap[imageSrc] || [imageSrc];
  currentImageIndex = 0;
  updateProjectModalImage();
  projectModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function updateProjectModalImage() {
  const container = document.getElementById("projectImagesContainer");
  const prevBtn = document.querySelector(".modal-nav-btn.prev");
  const nextBtn = document.querySelector(".modal-nav-btn.next");

  if (container && currentProjectImages[currentImageIndex]) {
    container.innerHTML = `<img src="${currentProjectImages[currentImageIndex]}" alt="Project Image">`;
  }

  // Show/hide navigation buttons based on number of images
  if (prevBtn && nextBtn) {
    if (currentProjectImages.length > 1) {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
    } else {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
  }
}

function changeProjectImage(direction) {
  if (currentProjectImages.length <= 1) return;
  currentImageIndex += direction;
  if (currentImageIndex < 0)
    currentImageIndex = currentProjectImages.length - 1;
  if (currentImageIndex >= currentProjectImages.length) currentImageIndex = 0;
  updateProjectModalImage();
}

function closeProjectModal() {
  const projectModal = document.getElementById("projectModal");
  if (projectModal) {
    projectModal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

function openCertificateModal(imageSrc) {
  const certImage = document.getElementById("certImage");
  const certModal = document.getElementById("certificateModal");
  if (certImage && certModal) {
    certImage.src = imageSrc;
    certModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeCertificateModal() {
  const certModal = document.getElementById("certificateModal");
  if (certModal) {
    certModal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

function closeCvModal() {
  const cvModal = document.getElementById("cvModal");
  if (cvModal) {
    cvModal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", function () {
  // 1. Navigation & Hamburger
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger) hamburger.classList.remove("active");
      if (navMenu) navMenu.classList.remove("active");
    });
  });

  // 2. Reveal Animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach((el) => revealObserver.observe(el));

  // 3. Language Selector
  const langBtn = document.getElementById("langBtn");
  const langOptions = document.getElementById("langOptions");
  const currentLangText = document.getElementById("currentLangText");

  updateLanguage(currentLang);
  if (currentLangText) currentLangText.textContent = currentLang.toUpperCase();

  if (langBtn && langOptions) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langOptions.classList.toggle("show");
    });

    langOptions.querySelectorAll("li").forEach((option) => {
      option.addEventListener("click", function () {
        const lang = this.getAttribute("data-value");
        updateLanguage(lang);
        if (currentLangText) currentLangText.textContent = lang.toUpperCase();
        langOptions.classList.remove("show");
      });
    });

    document.addEventListener("click", () => {
      langOptions.classList.remove("show");
    });
  }

  // 4. CV Modal
  const viewCvBtn = document.getElementById("viewCvBtn");
  const cvModal = document.getElementById("cvModal");
  const cvCloseBtn = document.querySelector(".cv-modal-close");

  if (viewCvBtn && cvModal) {
    viewCvBtn.addEventListener("click", () => {
      cvModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  if (cvCloseBtn) {
    cvCloseBtn.addEventListener("click", closeCvModal);
  }

  // 5. Back to Top
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 6. Global Modal Click Handling
  window.addEventListener("click", (e) => {
    if (e.target.id === "projectModal") closeProjectModal();
    if (e.target.id === "certificateModal") closeCertificateModal();
    if (e.target.id === "cvModal") closeCvModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeCertificateModal();
      closeCvModal();
    }
  });

  // 7. Contact Form
  const kontakForm = document.querySelector(".kontak-form");
  if (kontakForm) {
    kontakForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("nama")?.value;
      const email = document.getElementById("email")?.value;
      const subjek = document.getElementById("subjek")?.value;
      const pesan = document.getElementById("pesan")?.value;
      const mailtoLink = `mailto:ramadhanimutiara0925@gmail.com?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`)}`;
      window.location.href = mailtoLink;
    });
  }
});
