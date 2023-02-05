import DOMPurify from "dompurify";


const myHTML = `<div style="fontWeight:'bold',mt:2,ml:3,textAlign:'left'"><h1>En apprendre plus sur la contraception masculine</h1>
<h3>Quelle est la situation actuelle en mati&egrave;re de contraception ?</h3>
<p></p>
<p>Dans les couples h&eacute;t&eacute;rosexuels, la contraception repr&eacute;sente encore une charge mentale importante pour les femmes.&nbsp;</p>
<p></p>
<p>Selon un sondage effectu&eacute; en 2018 aupr&egrave;s de 752 femmes, <strong>83 % d&rsquo;entre elles estiment avoir davantage de responsabilit&eacute;s que leur compagnon en mati&egrave;re de sexualit&eacute; et de contraception</strong>. Ce manque de partage des responsabilit&eacute;s a un impact important car il fait peser une charge trop importante &agrave; la femme dans le couple, tout en d&eacute;responsabilisant les hommes vis-&agrave;-vis de ces sujets. <strong>Cela a pour effet d&rsquo;amoindrir la communication dans le couple, et pour les 71 % des sond&eacute;es, &agrave; nuire &agrave; la sexualit&eacute; de celui-ci.</strong></p>
<p></p>
<p>Parmi les m&eacute;thodes de contraception les plus utilis&eacute;es pour les femmes en France, on retrouve principalement la pilule contraceptive, le st&eacute;rilet, ou l&rsquo;implant. Parmi les femmes concern&eacute;es par la contraception en France, (72 % de la tranche 15-49 ans), environ 36,5 % d&rsquo;entre elles utilisent la pilule, 25,6 % un st&eacute;rilet (ou Dispositif Intra-Ut&eacute;rin, DIU), et 4,3 % un implant.</p>
<p></p>
<p><strong>Ces solutions contraceptives, en plus d&rsquo;&ecirc;tre &agrave; la responsabilit&eacute; des femmes, provoquent un certain nombre d&rsquo;effets secondaires.</strong> Par exemple, la prise de la pilule contraceptive peut provoquer une baisse du d&eacute;sir sexuel (libido), une prise de poids, des troubles de l&rsquo;humeur, des migraines, ou encore des douleurs diverses. <br />Le st&eacute;rilet, quant &agrave; lui, peut provoquer certains effets similaires &agrave; la pilule mais &eacute;galement une perturbation des r&egrave;gles, un &eacute;tat d&eacute;pressif ou des douleurs abdominales. </p>
<h3>Comment y rem&eacute;dier ?</h3>
<p>La solution, pour rem&eacute;dier &agrave; ce d&eacute;s&eacute;quilibre, r&eacute;side dans<strong> la prise de conscience des hommes que la contraception est aussi leur responsabilit&eacute;.&nbsp;</strong></p>
<p></p>
<p>Pour cela, de nombreuses m&eacute;thodes de contraception sont d&rsquo;ores et d&eacute;j&agrave; disponible, et m&eacute;ritent davantage de visibilit&eacute; et de r&eacute;flexion quant &agrave; leurs utilisations.&nbsp;</p>
<p></p>
<ul>
<li aria-level="1">M&eacute;thode hormonale : <br /><br /></li>
</ul>
<p>Cette m&eacute;thode consite en un injection de testost&eacute;rone une fois par semaine pendant une dur&eacute;e qui peut aller jusqu&rsquo;&agrave; 18 mois. Elle peut cependant provoquer des effets secondaires similaires &agrave; ceux de la pilule.<br />Lorsque le taux de testost&eacute;rone est &eacute;lev&eacute;, la production de spermatozo&iuml;des s&rsquo;arr&ecirc;te, permettant donc la contraception. Elle est effectivement en 3 mois et est r&eacute;versible.</p>
<p></p>
<ul>
<li aria-level="1">M&eacute;thode thermique :&nbsp;</li>
</ul>
<p></p>
<p>Ce mode de contraception r&eacute;side dans le fait d&rsquo;augmenter la temp&eacute;rature des testicules, ce qui rend impossible la fabrication des spermatozo&iuml;des.&nbsp;</p>
<p>Pour augmenter la temp&eacute;rature, nul besoin d&rsquo;utiliser un chauffage particulier, il suffit de faire remonter les testicules au niveau du bas ventre pendant 15 heures sur chaque journ&eacute;e. Des slips et anneaux permettent ainsi de maintenir les testicules dans cette position.&nbsp;</p>
<p>La m&eacute;thode est effective au bout de 3 mois de port et peut &ecirc;tre utilis&eacute;e durant 4 ann&eacute;es. Elle est &eacute;galement r&eacute;versible.&nbsp;</p>
<p></p>
<ul>
<li aria-level="1">La vasectomie :</li>
</ul>
<p></p>
<p>La vasectomie est une intervention chirurgicale permettant de bloquer les canaux d&eacute;f&eacute;rents, canaux qui sont charger d&rsquo;acheminer les spermatozo&iuml;des. Ce faisant, le transport n&rsquo;est plus possible, permettant d&rsquo;&ecirc;tre compl&egrave;tement contracept&eacute;.<br />Cette m&eacute;thode n&rsquo;est cependant pas r&eacute;versible.</p>
<p></p>
<h3>Comment utiliser ces m&eacute;thodes ?</h3>
<p></p>
<p>Si vous &ecirc;tes int&eacute;ress&eacute;s, vous pouvez consulter les articles et ressources disponibles dans la section &ldquo;Pour aller plus loin&rdquo;.&nbsp;</p>
<p></p>
<p>Si vous utilisez d&eacute;j&agrave; la m&eacute;thode contraceptive ou hormonale, vous pouvez utiliser l&rsquo;espace &ldquo;Mon compte&rdquo; pour g&eacute;rer votre contraception de mani&egrave;re efficace.</p>
</div>`;


const mySafeHTML = DOMPurify.sanitize(myHTML);


export default function Contraception () { return(<div dangerouslySetInnerHTML={{ __html: mySafeHTML }}/>);}
