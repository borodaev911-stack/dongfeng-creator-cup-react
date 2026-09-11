import participationArt from './assets/participation-steps.webp';
import { VideoBrief, PrizeShares, Engagement, ContestFAQ, ContestRules } from './ContestDetails.jsx';
import { useEffect, useRef, useState } from 'react';
import asset3 from './assets/asc-auto-logo-complete.png';
import asset4 from './assets/dongfeng-logo.svg';
import asset5 from './assets/duel.webp';
import asset6 from './assets/telegram-optimized.jpg';
const formatFund = views => new Intl.NumberFormat('ru-RU').format(views * 100000);
function LogoGlint({
  model
}) {
  const [flashing, setFlashing] = useState(false);
  return <button type="button" className={`logo-lustre${flashing ? ' flash' : ''}`} aria-label={`Подсветить логотип DONGFENG ${model}`} onClick={() => setFlashing(true)} onAnimationEnd={() => setFlashing(false)}><img src={asset4} alt="DONGFENG" /></button>;
}
function Header() {
  return <header><nav className="wrap"><a className="brand" href="https://dongfeng-creator-cup-demo.urijborodaev1.chatgpt.site/rdrc-guests/"><img src={asset3} alt="АСЦ Авто" /><b aria-hidden="true">{"×"}</b><img src={asset4} alt="DONGFENG" /></a><a className="back guest-link" href="https://dongfeng-creator-cup-demo.urijborodaev1.chatgpt.site/rdrc-guests/"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 5l-7 7 7 7M7 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg><span>{"Активности"}<br />{"для гостей"}</span></a></nav></header>;
}
function Hero() {
  return <section className="hero"><div className="sector-light" aria-hidden="true"></div><img className="hero-art" src={asset5} alt="Белый Dongfeng MAGE и чёрный Dongfeng HUGE в мультяшном космическом ангаре: синие и алые огни противостояния" fetchPriority="high" /><div className="wrap hero-copy"><div className="eyebrow">{"Космическое противостояние авторов"}</div><div className="duel"><span className="mage">{"MAGE"}</span><i>{"VS"}</i><span className="huge">{"HUGE"}</span></div><h1>{"Выбери сторону."}<br />{"Пусть о ней заговорят."}</h1></div><div className="wrap hero-foot"><p className="fund-label">{"Общий призовой фонд"}</p><p className="million">{"до 1 000 000 ₽"}</p><p className="hero-sub">{"Общие просмотры увеличивают денежный фонд"}</p><a className="btn" href="https://t.me/Ascauth_bot" target="_blank" rel="noopener">{"Принять вызов в Telegram "}<b>{"↗"}</b></a></div></section>;
}
function EventFacts() {
  return <div className="wrap meta"><div><strong>{"от 30 секунд"}</strong><span>{"длительность ролика"}</span></div><div><strong>{"10 млн"}</strong><span>{"просмотров — общая цель"}</span></div><div><strong>{"12 октября"}</strong><span>{"подведение итогов"}</span></div></div>;
}
function TeamChoice() {
  return <section className="block"><div className="wrap"><div className="eyebrow">{"01 / Выбери свою сторону"}</div><h2>{"Две машины."}<br />{"Твоя история."}</h2><p className="lead">{"MAGE или HUGE — кто станет героем твоего ролика? Выбирай сторону при регистрации в боте и снимай DONGFENG так, как видишь его ты."}</p><div className="teams"><article className="team"><h3><LogoGlint model="MAGE" /><em>{"MAGE"}</em></h3><p>{"Твой взгляд. Твой монтаж. Твоя сторона противостояния."}</p><a href="https://t.me/Ascauth_bot" target="_blank" rel="noopener">{"Хочу в команду MAGE ↗"}</a></article><article className="team huge-team"><h3><LogoGlint model="HUGE" /><em>{"HUGE"}</em></h3><p>{"Сделай HUGE героем истории, которую захочется смотреть."}</p><a href="https://t.me/Ascauth_bot" target="_blank" rel="noopener">{"Хочу в команду HUGE ↗"}</a></article></div><p className="fine">{"Обе кнопки открывают бот регистрации. Окончательный выбор команды — внутри бота."}</p></div></section>;
}
function ParticipationSteps() {
  return <section className="block" style={{
    "paddingTop": "0"
  }}><div className="wrap"><div className="eyebrow">{"02 / Как вступить в игру"}</div><h2>{"От идеи — к просмотрам."}</h2><p className="lead">Подай ролики до 11 октября включительно. Подведение итогов — 12 октября 2026 года.</p><div className="step-list"><article className="step"><img className="step-art" src={participationArt} style={{objectPosition:"left"}} alt="Регистрация в боте и выбор команды на экране телефона" loading="lazy" /><span className="number">{"01"}</span><h3>{"Зарегистрируйся"}</h3><p>{"Открой @Ascauth_bot и выбери сторону: MAGE или HUGE."}</p></article><article className="step"><img className="step-art" src={participationArt} style={{objectPosition:"center"}} alt="Съёмка DONGFENG MAGE и HUGE на камеру" loading="lazy" /><span className="number">{"02"}</span><h3>{"Сними от 30 секунд"}</h3><p>{"Сними видео от 30 секунд о DONGFENG MAGE или HUGE. Упомяни модель или покажи соответствующий автомобиль в кадре. Обзор, юмор, впечатления — подача за тобой."}</p></article><article className="step"><img className="step-art" src={participationArt} style={{objectPosition:"right"}} alt="Публикации, просмотры и реакции аудитории" loading="lazy" /><span className="number">{"03"}</span><h3>{"Собирай просмотры"}</h3><p>{"Опубликуй ролик с хэштегом #teammage или #teamhuge и добавь ссылку в приложение @Ascauth_bot. В зачёт идут просмотры допущенных публикаций без накрутки."}</p></article></div><VideoBrief /></div></section>;
}
function PrizeFund() {
  const [views, setViews] = useState(5);
  return <section className="block fund-section" id="fund"><div className="wrap fund-grid"><div><div className="eyebrow">{"03 / Больше просмотров — больше фонд"}</div><h2>{"Разгоняем"}<br />{"до миллиона."}</h2><p className="formula">{"1 млн просмотров"}<br />{"= +100 000 ₽ в фонд"}</p><p className="lead">{"Наша общая цель — 10 млн просмотров и призовой фонд 1 000 000 ₽. Ролики участников помогают приблизиться к этой цели."}</p><p className="fine">{"Речь об общем призовом фонде конкурса, а не об автоматической выплате каждому автору за просмотры. Максимальный фонд — 1 000 000 ₽."}</p></div><div className="sim"><label htmlFor="views">{"Посмотри, как растёт фонд · пример расчёта"}</label><div className="sim-output"><output id="viewsValue" htmlFor="views">{views.toLocaleString("ru-RU")}</output>{" млн просмотров"}</div><input id="views" type="range" min="0" max="10" step="0.1" value={views} onChange={event => setViews(Number(event.target.value))} aria-label="Миллионы просмотров для примера расчёта, шаг 0,1 миллиона" /><div className="fund-meter" aria-hidden="true"><span id="fundMeter" style={{
            transform: `scaleX(${views / 10})`
          }} /></div><div className="scale"><span>{"0"}</span><span>{"Цель: 10 млн"}</span></div><div className="sim-result">{"Общий призовой фонд"}<output id="fundValue" htmlFor="views"><strong>{formatFund(views)} ₽</strong></output></div><PrizeShares fund={views * 100000} /><p className="fine">{"Это пример механики, не счётчик текущих результатов. Фонд растёт пропорционально: один учтённый просмотр добавляет 0,10 ₽. Максимум — 1 000 000 ₽."}</p></div></div></section>;
}
function Registration() {
  return <section className="block" id="registration"><div className="wrap"><div className="registration"><div><div className="eyebrow">{"04 / Твой выход"}</div><h2>{"Камера готова?"}<br />{"Принимай вызов."}</h2><p className="lead">{"Выбери MAGE или HUGE и стань частью противостояния. Первый шаг — регистрация в Telegram-боте АСЦ."}</p><p className="date">{"Подведение итогов — 12 октября"}</p><p className="fine">{"Требования к видео, распределение фонда и проект порядка определения победителей — в правилах конкурса ниже."}</p></div><a className="telegram" href="https://t.me/Ascauth_bot" target="_blank" rel="noopener"><img src={asset6} alt="Telegram" loading="lazy" /><span className="btn">{"Зарегистрироваться "}<b>{"↗"}</b></span><small>{"Перейти в @Ascauth_bot"}</small></a></div><ContestFAQ /></div></section>;
}
function Footer() {
  return <footer><div className="wrap"><span>{"АСЦ × DONGFENG · CREATOR CUP 2026"}</span><a href="https://dongfeng-creator-cup-demo.urijborodaev1.chatgpt.site/rdrc-guests/">{"← Вернуться к активностям для гостей"}</a></div></footer>;
}
export default function App() {
  const pageRef = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: .15
    });
    pageRef.current.querySelectorAll('.team,.step').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div ref={pageRef}><Header /><main><Hero /><EventFacts /><TeamChoice /><ParticipationSteps /><PrizeFund /><Engagement /><Registration /><ContestRules /></main><Footer /></div>;
}
