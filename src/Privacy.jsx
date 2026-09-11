import { createContext, useContext, useId, useRef, useState } from 'react';
import { legalDocuments, legalVersion } from './legalDocuments.js';
const PrivacyContext = createContext(null);
export function PrivacyProvider({children}) {
 const [read,setRead]=useState(true);
 const [agreed,setAgreed]=useState(true);
 const [active,setActive]=useState('privacy');
 const dialog=useRef(null);
 const open=(kind)=>{setActive(kind);dialog.current.showModal();};
 const doc=legalDocuments[active];
 return <PrivacyContext.Provider value={{read,setRead,agreed,setAgreed,open}}>{children}<dialog ref={dialog} className="rules-dialog privacy-dialog" aria-labelledby="privacy-title"><div className="rules-dialog-top"><h2 id="privacy-title">{doc.title}</h2><button className="rules-close" type="button" onClick={()=>dialog.current.close()} aria-label="Закрыть документ">×</button></div><p className="fine">Редакция {legalVersion}</p><p className="draft-note">Проект для конкурсной страницы. Перед сбором данных оператору необходимо подтвердить фактический состав полей и инфраструктуру бота, сроки хранения и юридический адрес.</p>{doc.sections.map(([heading,text])=><section key={heading}><h3>{heading}</h3><p>{text}</p></section>)}<p><a href={`legal/${active}.html`} target="_blank" rel="noopener">Открыть документ отдельно ↗</a></p><form method="dialog"><button className="btn">Закрыть</button></form></dialog></PrivacyContext.Provider>;
}
export function RegistrationGate({children,className='btn',variant=''}) {
 const {read,setRead,agreed,setAgreed,open}=useContext(PrivacyContext);
 const id=useId();const allowed=read&&agreed;
 return <div className={`registration-gate ${variant}`}><a className={className} href={allowed?'https://t.me/Ascauth_bot':undefined} role="link" tabIndex={0} aria-disabled={!allowed} target="_blank" rel="noopener" onClick={e=>{if(!allowed)e.preventDefault();}}>{children}</a><div className="consent-controls"><div className="consent-row"><input id={`${id}-read`} aria-label="Ознакомление с политиками конфиденциальности и обработки персональных данных" type="checkbox" checked={read} onChange={e=>setRead(e.target.checked)}/><div><label htmlFor={`${id}-read`}>Я ознакомлен(а) с </label><button type="button" onClick={()=>open('privacy')}>политикой конфиденциальности</button><span> и </span><button type="button" onClick={()=>open('processing')}>политикой обработки персональных данных</button>.</div></div><div className="consent-row"><input id={`${id}-agree`} aria-label="Согласие на обработку персональных данных для участия в конкурсе" type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)}/><div><label htmlFor={`${id}-agree`}>Даю </label><button type="button" onClick={()=>open('consent')}>согласие на обработку персональных данных</button><span> для участия в конкурсе.</span></div></div>{!allowed&&<p className="consent-hint" role="status">Для перехода подтвердите ознакомление и согласие.</p>}</div></div>;
}
export function PrivacyLinks(){const {open}=useContext(PrivacyContext);return <div className="wrap privacy-links">{Object.entries(legalDocuments).map(([key,doc])=><button type="button" key={key} onClick={()=>open(key)}>{doc.title}</button>)}</div>;}
