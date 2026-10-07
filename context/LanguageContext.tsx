'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageCode = 'en' | 'si' | 'ta' | 'de' | 'fr' | 'zh' | 'ja';

export interface LanguageOption {
    code: LanguageCode;
    name: string;
    nativeName: string;
    flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇱🇰' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
];

export type TranslationsDict = Record<string, Record<LanguageCode, string>>;

export const TRANSLATIONS: TranslationsDict = {
    // Brand & General
    'brand.name': {
        en: 'ARALIYA CEYLON',
        si: 'අරලිය සිලෝන්',
        ta: 'அரலிய சிலோன்',
        de: 'ARALIYA CEYLON',
        fr: 'ARALIYA CEYLON',
        zh: 'ARALIYA CEYLON 斯里兰卡之旅',
        ja: 'ARALIYA CEYLON アラリヤ・セイロン',
    },
    'brand.tagline': {
        en: 'Travel Sri Lanka with a local touch.',
        si: 'දේශීය අත්දැකීමක් සමඟින් ශ්‍රී ලංකාවේ සංචාරය කරන්න.',
        ta: 'உள்ளூர் உணர்வுடன் இலங்கை பயணம் மேற்கொள்ளுங்கள்.',
        de: 'Reisen Sie durch Sri Lanka mit lokaler Note.',
        fr: 'Voyagez au Sri Lanka avec une touche locale.',
        zh: '以道地的地道视角探索斯里兰卡。',
        ja: 'ローカルな温もりに満ちたスリランカの 旅へ。',
    },

    // Navbar
    'nav.home': {
        en: 'Home',
        si: 'මුල් පිටුව',
        ta: 'முகப்பு',
        de: 'Startseite',
        fr: 'Accueil',
        zh: '首页',
        ja: 'ホーム',
    },
    'nav.destinations': {
        en: 'Destinations',
        si: 'ගමනාන්ත',
        ta: 'இலக்குகள்',
        de: 'Reiseziele',
        fr: 'Destinations',
        zh: '目的地',
        ja: '目的地',
    },
    'nav.experiences': {
        en: 'Experiences',
        si: 'අත්දැකීම්',
        ta: 'அனுபவங்கள்',
        de: 'Erlebnisse',
        fr: 'Expériences',
        zh: '特色体验',
        ja: '体験・アクティビティ',
    },
    'nav.tours': {
        en: 'Services & Tours',
        si: 'සේවා සහ සංචාර',
        ta: 'சேவைகள் & சுற்றுலாக்கள்',
        de: 'Reisen & Services',
        fr: 'Circuits & Services',
        zh: '行程与服务',
        ja: 'ツアー・サービス',
    },
    'nav.about': {
        en: 'About Us',
        si: 'අප ගැන',
        ta: 'எங்களைப் பற்றி',
        de: 'Über uns',
        fr: 'À propos',
        zh: '关于我们',
        ja: '私たちについて',
    },
    'nav.contact': {
        en: 'Contact',
        si: 'සම්බන්ධ වන්න',
        ta: 'தொடர்பு கொள்ள',
        de: 'Kontakt',
        fr: 'Contact',
        zh: '联系我们',
        ja: 'お問い合わせ',
    },
    'nav.planner': {
        en: 'Plan Your Trip',
        si: 'සංචාරය සැලසුම් කරන්න',
        ta: 'பயணத்தை திட்டமிடுங்கள்',
        de: 'Reise planen',
        fr: 'Planifier votre voyage',
        zh: '定制您的行程',
        ja: '旅行を計画する',
    },

    // Hero Section
    'hero.title.1': {
        en: 'Discover Sri Lanka,',
        si: 'ශ්‍රී ලංකාව අත්විඳින්න,',
        ta: 'இலங்கையைக் கண்டறியுங்கள்,',
        de: 'Entdecken Sie Sri Lanka,',
        fr: 'Découvrez le Sri Lanka,',
        zh: '探索斯里兰卡，',
        ja: 'スリランカを巡る、',
    },
    'hero.title.2': {
        en: 'your way.',
        si: 'ඔබේම රටාවට.',
        ta: 'உங்கள் விருப்பப்படி.',
        de: 'auf Ihre Art.',
        fr: 'à votre rythme.',
        zh: '按您的步调行进。',
        ja: 'あなただけの旅へ。',
    },
    'hero.subtitle': {
        en: 'From misty mountains and golden beaches to ancient cities and quiet village roads, experience the island through journeys made with care.',
        si: 'මීදුමෙන් වැසුණු කඳුකරයේ සිට රන්වන් වෙරළ තීරයන්, පුරාණ නගර සහ ග්‍රාමීය මංපෙත් දක්වා, සැලකිල්ලෙන් සැකසූ සංචාරයන් මගින් දිවයින අත්විඳින්න.',
        ta: 'பனிமூட்டமான மலைகள், பொன்மயமான கடற்கரைகள், பண்டைய நகரங்கள் முதல் அமைதியான கிராமப்புற பாதைகள் வரை கவனத்துடன் வடிவமைக்கப்பட்ட பயணங்கள்.',
        de: 'Von nebligen Bergen und goldenen Stränden bis hin zu alten Städten und ruhigen Dorfstraßen – erleben Sie die Insel mit sorgfältig gestalteten Reisen.',
        fr: 'Des montagnes brumeuses et plages dorées aux cités anciennes et paisibles routes de village, découvrez l’île grâce à des itinéraires élaborés avec soin.',
        zh: '从薄雾缭繞的高山茶园、金黄海滩，到千年古城与宁静乡村，感受精心雕琢的岛屿旅程。',
        ja: '霧に包まれた紅茶の丘、黄金色の coastline、古代遺跡、静かな村道まで、心を込めて作られた旅を通じて島を体験してください。',
    },
    'hero.search.destination': {
        en: 'Destination',
        si: 'ගමනාන්තය',
        ta: 'இலக்கு',
        de: 'Reiseziel',
        fr: 'Destination',
        zh: '目的地',
        ja: '目的地',
    },
    'hero.search.date': {
        en: 'Travel Month',
        si: 'සංචාරක මාසය',
        ta: 'பயண மாதம்',
        de: 'Reisemonat',
        fr: 'Mois de voyage',
        zh: '出行月份',
        ja: '旅行月',
    },
    'hero.search.type': {
        en: 'Travel Style',
        si: 'සංචාරක රටාව',
        ta: 'பயண பாணி',
        de: 'Reisestil',
        fr: 'Style de voyage',
        zh: '出行偏好',
        ja: '旅のスタイル',
    },
    'hero.search.button': {
        en: 'Explore Places',
        si: 'ස්ථාන සොයන්න',
        ta: 'இடங்களை ஆராய்க',
        de: 'Orte erkunden',
        fr: 'Explorer les lieux',
        zh: '查找目的地',
        ja: '目的地を探す',
    },

    // Buttons
    'btn.explore': {
        en: 'Explore Destinations',
        si: 'ගමනාන්ත ගවේෂණය කරන්න',
        ta: 'இலக்குகளை ஆராயுங்கள்',
        de: 'Reiseziele erkunden',
        fr: 'Explorer les destinations',
        zh: '探索所有目的地',
        ja: '目的地を詳しく見る',
    },
    'btn.viewTours': {
        en: 'View Tours',
        si: 'සංචාර නරඹන්න',
        ta: 'சுற்றுலாக்களைப் பார்க்க',
        de: 'Touren ansehen',
        fr: 'Voir les circuits',
        zh: '查看行程',
        ja: 'ツアーを見る',
    },
    'btn.planTrip': {
        en: 'Plan Your Trip',
        si: 'ඔබේ සංචාරය සැලසුම් කරන්න',
        ta: 'உங்கள் பயணத்தை திட்டமிடுங்கள்',
        de: 'Reise planen',
        fr: 'Planifier votre voyage',
        zh: '开始定制行程',
        ja: '旅をプランニング',
    },
    'btn.contactUs': {
        en: 'Contact Us',
        si: 'අප හා සම්බන්ධ වන්න',
        ta: 'எங்களை தொடர்பு கொள்ள',
        de: 'Kontaktieren Sie uns',
        fr: 'Nous contacter',
        zh: '联系我们',
        ja: 'お問い合わせ',
    },
    'btn.send': {
        en: 'Send Inquiry',
        si: 'විමසීම යොමු කරන්න',
        ta: 'விசாரணையை அனுப்புங்கள்',
        de: 'Anfrage senden',
        fr: 'Envoyer la demande',
        zh: '提交咨询',
        ja: '問い合わせを送信',
    },

    // Section Headers
    'section.destinations.title': {
        en: 'Popular Destinations',
        si: 'ජනප්‍රිය ගමනාන්ත',
        ta: 'பிரபலமான இடங்கள்',
        de: 'Beliebte Reiseziele',
        fr: 'Destinations populaires',
        zh: '精选目的地',
        ja: '人気の目的地',
    },
    'section.destinations.sub': {
        en: 'From the southern coast\'s warm waters to the cool air of the hill country — every corner of the island has something worth finding.',
        si: 'දකුණු වෙරළ තීරයේ උණුසුම් මුහුදු දිය සිට මධ්‍යම කඳුකරයේ සිසිල් සුළඟ දක්වා — දිවයිනේ සෑම කොනකම විඳගත යුතු සුන්දරත්වයක් ඇත.',
        ta: 'தெற்கு கடற்கரையின் மிதமான அலைகள் முதல் மலைநாட்டின் குளிர்ந்த காற்று வரை — தீவின் ஒவ்வொரு மூலையிலும் கண்டறியத் தகுந்த அழகுகள் உள்ளன.',
        de: 'Von den warmen Gewässern der Südküste bis zur kühlen Luft des Hochlands – jede Ecke der Insel ist eine Entdeckung wert.',
        fr: 'Des eaux chaudes de la côte sud à l’air frais des montagnes – chaque coin de l’île recèle des trésors à découvrir.',
        zh: '从南部海岸的温暖浪花到中央高地的清爽微风——斯里兰卡的每一处角落都有值得驻足的风景。',
        ja: '南海岸の温かな海から高冷地の爽やかな空気まで、島のあらゆる場所に訪れる価値があります。',
    },
    'section.about.title': {
        en: 'About Araliya Ceylon',
        si: 'අරලිය සිලෝන් ගැන',
        ta: 'அரலிய சிலோன் பற்றி',
        de: 'Über Araliya Ceylon',
        fr: 'À propos d’Araliya Ceylon',
        zh: '关于 Araliya Ceylon',
        ja: 'Araliya Ceylon について',
    },
    'section.reviews.title': {
        en: 'Traveler Notes',
        si: 'සංචාරකයින්ගේ අදහස්',
        ta: 'பயணிகளின் கருத்துகள்',
        de: 'Erfahrungsberichte',
        fr: 'Avis des voyageurs',
        zh: '游客评价',
        ja: '旅行者の声',
    },
    'section.contact.title': {
        en: 'Plan Your Journey With Us',
        si: 'ඔබේ සංචාරය අප සමඟ සැලසුම් කරන්න',
        ta: 'எங்களுடன் உங்கள் பயணத்தை திட்டமிடுங்கள்',
        de: 'Planen Sie Ihre Reise mit uns',
        fr: 'Planifiez votre voyage avec nous',
        zh: '与我们一同开启行程',
        ja: '旅のプランをご相談ください',
    },

    // Contact Details
    'contact.phone': {
        en: '+94 77 123 4567',
        si: '+94 77 123 4567',
        ta: '+94 77 123 4567',
        de: '+94 77 123 4567',
        fr: '+94 77 123 4567',
        zh: '+94 77 123 4567',
        ja: '+94 77 123 4567',
    },
    'contact.address': {
        en: 'Araliya Ceylon, 42 Galle Road, Colombo 03, Sri Lanka',
        si: 'අරලිය සිලෝන්, අංක 42, ගාලු පාර, කොළඹ 03, ශ්‍රී ලංකාව',
        ta: 'அரலிய சிலோன், 42 காலி வீதி, கொழும்பு 03, இலங்கை',
        de: 'Araliya Ceylon, 42 Galle Road, Colombo 03, Sri Lanka',
        fr: 'Araliya Ceylon, 42 Galle Road, Colombo 03, Sri Lanka',
        zh: 'Araliya Ceylon, 42 Galle Road, Colombo 03, Sri Lanka',
        ja: 'Araliya Ceylon, 42 Galle Road, Colombo 03, Sri Lanka',
    },
    'contact.email': {
        en: 'hello@araliyaceylon.com',
        si: 'hello@araliyaceylon.com',
        ta: 'hello@araliyaceylon.com',
        de: 'hello@araliyaceylon.com',
        fr: 'hello@araliyaceylon.com',
        zh: 'hello@araliyaceylon.com',
        ja: 'hello@araliyaceylon.com',
    },

    // Form labels
    'form.name': {
        en: 'Full Name',
        si: 'සම්පූර්ණ නම',
        ta: 'முழு பெயர்',
        de: 'Vollständiger Name',
        fr: 'Nom complet',
        zh: '姓名',
        ja: 'お名前',
    },
    'form.email': {
        en: 'Email Address',
        si: 'විද්‍යුත් තැපෑල',
        ta: 'மின்னஞ்சல் முகவரி',
        de: 'E-Mail-Adresse',
        fr: 'Adresse e-mail',
        zh: '电子邮箱',
        ja: 'メールアドレス',
    },
    'form.phone': {
        en: 'Phone Number (+94...)',
        si: 'දුරකථන අංකය (+94...)',
        ta: 'தொலைபேசி எண் (+94...)',
        de: 'Telefonnummer (+94...)',
        fr: 'Numéro de téléphone (+94...)',
        zh: '联系电话 (+94...)',
        ja: '電話番号 (+94...)',
    },
    'form.date': {
        en: 'Estimated Travel Date',
        si: 'අපේක්ෂිත සංචාරක දිනය',
        ta: 'எதிர்பார்க்கப்படும் பயண தேதி',
        de: 'Voraussichtliches Reisedatum',
        fr: 'Date de voyage prévue',
        zh: '计划出行日期',
        ja: '旅行予定日',
    },
    'form.travellers': {
        en: 'Number of Travelers',
        si: 'සංචාරකයින් ගණන',
        ta: 'பயணிகளின் எண்ணிக்கை',
        de: 'Anzahl der Reisenden',
        fr: 'Nombre de voyageurs',
        zh: '出行人数',
        ja: '旅行人数',
    },
    'form.destination': {
        en: 'Preferred Destination(s)',
        si: 'කැමති ගමනාන්ත',
        ta: 'விரும்பும் இடங்கள்',
        de: 'Bevorzugtes Reiseziel',
        fr: 'Destination(s) préférée(s)',
        zh: '意向目的地',
        ja: '希望目的地',
    },
    'form.message': {
        en: 'Your Travel Ideas / Notes',
        si: 'ඔබේ සංචාරක අදහස් / සටහන්',
        ta: 'உங்கள் பயண யோசனைகள் / குறிப்புகள்',
        de: 'Ihre Reisevorstellungen / Hinweise',
        fr: 'Vos idées de voyage / Notes',
        zh: '行程需求与备注',
        ja: '旅のご要望・メモ',
    },
    'form.success': {
        en: 'Thank you! A travel specialist from Araliya Ceylon will get back to you within 24 hours.',
        si: 'ස්තූතියි! අරලිය සිලෝන් සංචාරක විශේෂඥයෙකු පැය 24 ක් ඇතුළත ඔබ හා සම්බන්ධ වනු ඇත.',
        ta: 'நன்றி! அரலிய சிலோன் பயண நிபுணர் 24 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்வார்.',
        de: 'Vielen Dank! Ein Reisespezialist von Araliya Ceylon wird sich innerhalb von 24 Stunden bei Ihnen melden.',
        fr: 'Merci ! Un spécialiste Araliya Ceylon vous contactera sous 24 heures.',
        zh: '感谢您的咨询！Araliya Ceylon 旅行专家将在24小时内与您联系。',
        ja: 'ありがとうございます。Araliya Ceylon の旅行専任スタッフが24時間以内にご連絡いたします。',
    },

    // Footer
    'footer.copyright': {
        en: '© 2026 Araliya Ceylon. All rights reserved.',
        si: '© 2026 අරලිය සිලෝන්. සියලුම හිමිකම් ඇවිරිණි.',
        ta: '© 2026 அரலிய சிலோன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        de: '© 2026 Araliya Ceylon. Alle Rechte vorbehalten.',
        fr: '© 2026 Araliya Ceylon. Tous droits réservés.',
        zh: '© 2026 Araliya Ceylon. 保留所有权利。',
        ja: '© 2026 Araliya Ceylon. All rights reserved.',
    },
};

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (code: LanguageCode) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<LanguageCode>('en');

    useEffect(() => {
        const saved = localStorage.getItem('araliya_lang') as LanguageCode;
        if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (code: LanguageCode) => {
        setLanguageState(code);
        if (typeof window !== 'undefined') {
            localStorage.setItem('araliya_lang', code);
        }
    };

    const t = (key: string): string => {
        if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
            return TRANSLATIONS[key][language];
        }
        // Fallback to English if translation key missing
        if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
            return TRANSLATIONS[key]['en'];
        }
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
