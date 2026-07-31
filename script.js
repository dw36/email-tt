// 1. Language Translation Matrix Dictionary Database
const langData = {
    en: {
        nav_logo: "Turbo Supply Chain",
        nav_home: "Home",
        nav_services: "Services",
        nav_international: "International",
        nav_freight: "Air & Sea Freight",
        nav_crossborder: "Cross-Border Logistics",
        nav_contact: "Contact Us",
        hero_title: "China-to-Global<br>Logistics & Supply Chain Solutions",
        hero_subtitle: "Reliable shipping services from China to destinations Worldwide",
        hero_tags: "Ocean Freight | Air Freight | Door-to-Door Delivery | China Sourcing",
        btn_quote: "Get Freight Quote",
        btn_whatsapp: "WhatsApp Us",
        btn_wechat: "WeChat Us",
        help_heading: "How Can We Help You?",
        card_biz_title: "🏢 Business Shipping",
        card_biz_desc: "For importers, wholesalers, retailers and companies.",
        li_biz_1: "Ocean Freight",
        li_biz_2: "Supply Chain",
        li_biz_3: "Supplier Coordination",
        li_biz_4: "Export Support",
        card_pers_title: "🏠 Personal Shipping",
        card_pers_desc: "For individuals shipping products from China overseas.",
        li_pers_1: "Furniture Shipping",
        li_pers_2: "Personal Cargo",
        li_pers_3: "Door Delivery",
        li_pers_4: "Home Products",
        contact_view_title: "Contact Our Logistics Team",
        contact_info_heading: "📍 Office Address",
        contact_address: "<strong>Shenzhen Turbo Trading Company Ltd.</strong><br>10H, Unit 1, Times Center, No. 102, Zhongxin Road, Shangxing Community, Bao'an District, Shenzhen, China<br><strong>Zip Code:</strong> 518125",
        contact_wa_heading: "💬 WhatsApp Support",
        contact_wc_heading: "📱 WeChat Contact",
        contact_wc_btn_text: "Click to Connect on WeChat ↗",
        form_heading: "Send Us A Message",
        form_btn: "Submit Inquiry",
        footer_company: "Turbo Supply Chain",
        footer_legal: "Shenzhen Turbo Trading Company Ltd.",
        footer_addr_text: "📍 Address: 10H, Unit 1, Times Center, No. 102, Zhongxin Road, Shangxing Community, Bao'an District, Shenzhen, China, Zip Code: 518125",
        footer_contact_btn: "Contact Us",
        modal_title: "Scan WeChat QR Code",
        modal_id_text: "WeChat ID:",
        modal_num_text: "WeChat Number:",
        modal_close: "Close",
        input_name_placeholder: "Your Name",
        input_email_placeholder: "Email Address",
        input_msg_placeholder: "Cargo details (Weight, Volume, Destination...)"
    },
    zh: {
        nav_logo: "彖柏贸易 (Turbo Supply Chain)",
        nav_home: "首页",
        nav_services: "核心服务",
        nav_international: "国际专线",
        nav_freight: "全球空海运",
        nav_crossborder: "跨境物流",
        nav_contact: "联系我们",
        hero_title: "中国至全球<br>物流与供应链解决方案",
        hero_subtitle: "提供中国至全球的可靠货运运输服务。",
        hero_tags: "海运货代 | 空运快线 | 门到门派送 | 中国采购协助",
        btn_quote: "获取货运报价",
        btn_whatsapp: "联系 WhatsApp",
        btn_wechat: "联系 微信",
        help_heading: "我们如何为您提供帮助？",
        card_biz_title: "🏢 商业货运",
        card_biz_desc: "面向进口商、批发商、零售商及各类企业机构。",
        li_biz_1: "海运集装箱运输",
        li_biz_2: "整体供应链优化",
        li_biz_3: "国内供应商对接协调",
        li_biz_4: "出口报关与清关支持",
        card_pers_title: "🏠 个人邮寄",
        card_pers_desc: "面向从中国向海外寄送或转运物品的个人客户。",
        li_pers_1: "大件家具海运派送",
        li_pers_2: "个人散货拼箱集运",
        li_pers_3: "双清关送货上门",
        li_pers_4: "家居生活用品转运",
        contact_view_title: "联系我们的物流顾问",
        contact_info_heading: "📍 公司地址",
        contact_address: "<strong>深圳市彖柏贸易有限公司</strong><br>深圳市宝安区新桥街道上星社区中心路102号时代中心1单元10H<br><strong>邮政编码:</strong> 518125",
        contact_wa_heading: "💬 WhatsApp 在线咨询",
        contact_wc_heading: "📱 微信在线联系",
        contact_wc_btn_text: "点击弹出微信二维码 ↗",
        form_heading: "在线提交货运需求",
        form_btn: "开始询价",
        footer_company: "彖柏贸易 (Turbo Supply Chain)",
        footer_legal: "深圳市彖柏贸易有限公司",
        footer_addr_text: "📍 地址：深圳市宝安区新桥街道上星社区中心路102号时代中心1单元10H (邮编: 518125)",
        footer_contact_btn: "联系我们",
        modal_title: "扫描微信二维码",
        modal_id_text: "微信号码：",
        modal_num_text: "微信手机号：",
        modal_close: "关闭窗口",
        input_name_placeholder: "您的姓名",
        input_email_placeholder: "邮箱地址",
        input_msg_placeholder: "请填写您的货物基础信息（如重量、体积、始发地、目的地等）"
    }
};

// 2. State Controller tracking current language flag
let currentLang = "en";

// 3. Main Translate Executor Function
function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (langData[lang][translationKey]) {
            element.innerHTML = langData[lang][translationKey];
        }
    });

    // Handle interactive form placeholder localized text updates
    document.getElementById("form-input-name").placeholder = langData[lang].input_name_placeholder;
    document.getElementById("form-input-email").placeholder = langData[lang].input_email_placeholder;
    document.getElementById("form-input-msg").placeholder = langData[lang].input_msg_placeholder;

    // Toggle button layout switcher text indicators flag
    const toggleBtn = document.getElementById("lang-toggle");
    toggleBtn.textContent = lang === "en" ? "🌐 中文" : "🌐 English";
}

// 4. Event Listener for Language Toggle Button Action Target
document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    localStorage.setItem("preferredLanguage", currentLang); // Save language preference for future visits
    applyLanguage(currentLang);
});

// 5. Single-Page Router View Controller Configuration
const homeView = document.getElementById("home-view");
const contactView = document.getElementById("contact-view");

function navigateToContact(e) {
    if(e) e.preventDefault();
    homeView.style.display = "none";
    contactView.style.display = "block";
    window.scrollTo(0, 0);
}

function navigateToHome(e) {
    if(e) e.preventDefault();
    contactView.style.display = "none";
    homeView.style.display = "block";
    window.scrollTo(0, 0);
}

// Bind Navigation Links actions
document.getElementById("contact-nav-link").addEventListener("click", navigateToContact);
document.getElementById("home-nav-link").addEventListener("click", navigateToHome);
document.getElementById("hero-quote-btn").addEventListener("click", navigateToContact);
document.getElementById("footer-contact-link").addEventListener("click", navigateToContact);
document.querySelector('header .logo').addEventListener("click", navigateToHome);

// ==========================================================
// 6. SMART DETECTOR ENGINE INITIALIZATION (AUTOMATIC ROUTER)
// ==========================================================
// Check if the user already manually selected a language during this or a previous visit
const savedLang = localStorage.getItem("preferredLanguage");

if (savedLang) {
    currentLang = savedLang;
} else {
    // Read the user's browser/system language settings automatically
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Route to Chinese if browser defaults to zh, zh-CN, zh-TW, etc.
    if (browserLang && browserLang.startsWith("zh")) {
        currentLang = "zh";
    } else {
        currentLang = "en"; // Default fallback language for all other international global locations
    }
}

// Initialize engine translation output view on load
applyLanguage(currentLang);
