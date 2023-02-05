import DOMPurify from "dompurify";


const myHTMLFirstPart = `<div style="fontWeight:'bold',mt:2,ml:3,textAlign:'left'"><h1>Le patriarcat</h1>
<p>La &ldquo;masculinit&eacute; toxique&rdquo; peut &ecirc;tre d&eacute;finie comme l&rsquo;ensemble des comportements qui sont jug&eacute;s acceptables voire encourag&eacute;s pour les hommes bien qu&rsquo;ils puissent &ecirc;tre dangereux pour eux-m&ecirc;mes et pour les autres. Par exemple, le fait de consid&eacute;rer que les hommes sont naturellement violents. </p>
<p>Cette vision de la masculinit&eacute; est n&eacute;faste pour l&rsquo;ensemble de la soci&eacute;t&eacute; : les hommes ne peuvent pas montrer leurs &eacute;motions, ce qui peut g&eacute;n&eacute;rer un certain nombre de probl&egrave;mes psychologiques. Les autres personnes, quant &agrave; elles, peuvent souvent &ecirc;tre victimes de comportements violents de la part d&rsquo;hommes.</p>`;

const myHTMLSecondPart = `<p>Parmi les diff&eacute;rents comportements probl&eacute;matiques de la masculinit&eacute; toxique, on retrouve :&nbsp;</p>
<ul>
<li aria-level="1">Ne pas montrer ses &eacute;motions ou des signes de faiblesse</li>
<li aria-level="1">Garder une apparence physique &ldquo;d&rsquo;homme fort&rdquo;&nbsp;</li>
<li aria-level="1">&Ecirc;tre violent pour montrer sa force</li>
</ul>
<p>Un gar&ccedil;on, en grandissant, est conditionn&eacute; &agrave; l&rsquo;adoption de ces comportements. En effet, si ce n&rsquo;est pas le cas, celui-ci peut tr&egrave;s vite se retrouver &agrave; &ecirc;tre mis de c&ocirc;t&eacute;, jug&eacute;, voire harcel&eacute; pour ces diff&eacute;rences.&nbsp;</p>
<p><strong>Pour ces raisons, il est important de remettre en cause ces diff&eacute;rents comportements. </strong></p>
<p>Adopter des comportements plus bienveillants pourra ainsi, entre autres, favoriser de meilleures relations hommes/femmes Par exemple, cela peut se traduire par :&nbsp;</p>
<ul>
<li aria-level="1">Ne pas h&eacute;siter &agrave; &eacute;voquer ses &eacute;motions et ses sentiments &agrave; des personnes proches</li>
<li aria-level="1">Consulter des sp&eacute;cialistes si on en ressent le besoin&nbsp;</li>
<li aria-level="1">&Eacute;viter la violence &agrave; tout prix</li>
</ul></div>`;


const mySafeHTMLFirstPart = DOMPurify.sanitize(myHTMLFirstPart);
const mySafeHTMLSecondPart = DOMPurify.sanitize(myHTMLSecondPart);


export default function Patriarcat () { return(
  <div>
  <div dangerouslySetInnerHTML={{ __html: mySafeHTMLFirstPart }}/>
  <div>
  <script src="https://www.arte.tv/player/v7/embed.php?json_url=https%3A%2F%2Fapi.arte.tv%2Fapi%2Fplayer%2Fv2%2Fconfig%2Ffr%2F102190-036-A&lang=fr&width=640&height=360&autoplay=true&mute=0"></script>  </div>
  <div dangerouslySetInnerHTML={{ __html: mySafeHTMLSecondPart }}/>
  </div>
);}
