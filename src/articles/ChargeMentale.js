import DOMPurify from "dompurify";


const myHTML = `<div style="fontWeight:'bold',mt:2,ml:3,textAlign:'left'"><h1>Comprendre la charge mentale</h1>
<p>La charge mentale est d&eacute;crite par le dictionnaire le petit larousse comme un &ldquo;<strong><em>poids psychologique que fait peser (plus particuli&egrave;rement sur les femmes) la gestion des t&acirc;ches domestiques et &eacute;ducatives</em></strong><em>, engendrant une fatigue physique et, surtout, psychique. (Cette pr&eacute;occupation constante de la logistique du foyer, m&ecirc;me dans les moments o&ugrave; elles ne sont pas dans l&rsquo;ex&eacute;cution de ces t&acirc;ches, concerne avant tout les personnes qui travaillent.)</em>&rdquo;</p>
<p>Cette charge mentale a un r&eacute;el impact : stress, fatigue chronique, d&eacute;couragement, etc. Tout cela m&egrave;ne &agrave; des burn-out, des d&eacute;pressions, et &agrave; des tensions dans le couple. En effet, nombre de femmes doivent &agrave; la fois consacrer un certain nombre d&rsquo;heures &agrave; leur travail professionnel mais &eacute;galement en rentrant &agrave; la maison par le travail domestique.</p>
<p>Elle concerne la grande majorit&eacute; des femmes : en effet, &ldquo;<strong>8 femmes sur 10 (77%) d&eacute;clarent d&rsquo;ailleurs avoir trop de choses auxquelles penser&rdquo;. </strong>Environ 23% des femmes d&eacute;clarent souffrir d&rsquo;un exc&egrave;s de charge mentale en France.</p>
<p>Il est donc important, dans un couple h&eacute;t&eacute;rosexuel, que l&rsquo;homme partage la charge de travail domestique, qu&rsquo;elle concerne les t&acirc;ches m&eacute;nag&egrave;res, l&rsquo;&eacute;ducation des enfants, ou encore le travail &eacute;motionnel dans le couple.</p></div>`;


const mySafeHTML = DOMPurify.sanitize(myHTML);

export default function ChargeMentale () { return(<div dangerouslySetInnerHTML={{ __html: mySafeHTML }}/>);}
