import * as React from 'react';

export default function AutoScroll() {
  const containerRef = React.useRef(null);

  const handleScrollToBottom = () => containerRef?.current?.scrollToEnd();

  return (
    <React.Fragment>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <br />
      <div id="div-container" ref={containerRef}>
        <p>
          Incipit prima primi regis Siciliae particula Dux ubi Roggerius,
          Guiscardi clara propago, Iam fastidiret nomen habere ducis, Altius
          aspirat. Qui, delegante Calisto, Ungitur in regem. Rex nova regna
          facit. Quem fera barbaries timuit, quem Nilus et omnis Circulus
          oceani. Rex ut regna suis subduxit plurima regnis, Disposuit nomen
          perpetuare suum Inclita cui peperit plures Albidia natos: Occubuit
          tandem mater et orba suis. Successit viduo post hanc Sibilia lecto:
          Infelix sterilem clausit aborsa diem. Sic erat in fatis, ut tercia
          nuberet uxor, Per quam Romani cresceret orbis honor. A magnis veniens
          natalibus orta Beatrix, Concipit a sole, lux paritura, diem. Virtutem
          virtus, docilem proba, casta pudicam, Formosam peperit pulchra, beata
          piam. Nascitur in lucem de ventre beata beato, De Constantini nomine
          nomen habens. Traditur Augusto coniux Constantia magno; Lucius in
          nuptu pronuba causa fuit. Lucius hos iungit, quos Celestinus inungit:
          Lucidus hic unit, celicus ille sacrat. Tertius in sexto digne
          requiescit uterque: Sic notat Henricus sextus utrumque patrem.
          Nominibus tantis utinam respondeat actus ! Adsint et meritis nomina
          digna suis ! Luceat in sanctis unus, celestiat alter, A quibus
          Henricus munera bina capit. Tercius antistes sacrat hanc, et tercius
          alter Copulat, et patri tercia nupta tulit. Non licuit quartam patri
          traducere nuptam, Nam paritas numeri displicet ipsa Deo. Particula
          II.: Obitus Wilelmi secundi formosi regis Sicilie Post obitum,
          formose, tuum, que sceptra gubernet Et regat, ex proprio sanguine
          prole cares. Nec facis heredem, nec, qui succedat, adoptas: Ex
          intestato debita solvis humo. Quis novit secreta tue purissima mentis
          ? Quod tua mens loquitur, mundus et ipse taces. Certus eras certe,
          quoniam iustissimus heres Expugnaturus regna parentis erat. Nam satis
          est iurasse semel, te prole carente, Quod tuus in genero sceptra
          teneret avus. *** Iurat cum multis Archimatheus idem. Post miseros
          morbos, post regis triste necesse, Nocte sub oscura, sole latente,
          pluit. Postquam dimisit rex, res pulcherrima, mundum, Inglomerant sese
          prelia, preda, fames. Furta, lues, pestes, lites, periuria, cedes
          Infelix regnum diripuere sibi. Sol hominum moritur, superi patiuntur
          eclipsim, Anglica Sicilidem luna flet orba diem. Solis ad occasum
          commotus eclipticat orbis, Di flent, astra dolent, flet mare, plorat
          humus. Particula III.: Lamentatio et luctus Panormi Hactenus urbs
          felix, populo dotata trilingui, Corde ruit, fluitat pectore, mente
          cadit: Ore, manu, lacrimis clamant, clamoribus instant Cum pueris
          iuvenes, cum iuniore senes; Dives, inops, servus, liber, pius, impius,
          omnes Exequias equo pondere regis agunt; Cum viduis caste plorant, cum
          virgine nupte. Quid moror in lacrimis ? Nil nisi questus erat! Qui
          iacet in cunis, medio qui robore fretus Et quibus est baculus tercia
          forma pedum, Per loca, per vicos, per celsa palacia plorant. Desiccat
          lacrimas nona peracta dies. Tunc pater antistes fuit hec affatus ad
          omnes Nec potuit lacrimans plurima verba loqui: "Hactenus herrantes
          correximus, hactenus atros Mens erat a stabulis pellere nostra lupos.
          Hactenus ad caulas, nullo cogente, redibant Vespere lacte graves
          opilionis oves. Hactenus unguiferos bos herrans nulla leones,
          Rostriferas aquilas nulla timebat avis. Hactenus ibat ovans solus per
          opaca viator; Hactenus insidiis nec locus ullus erat. Hactenus in
          speculo poterat se quisque videre, Quod mors infregit bustaque noctis
          habent. Hactenus ardebant miseri candelabra regni: Ipsa sub oscura
          flamma cinescit humo. Mittite, quod properet Phebi soror et Iovis
          uxor, Imperii cornu iungat utrumque sui." Particula IV.: Adversa et
          diversa petentium voluntas Post lacrimas, post exequias, post triste
          sepulchrum Scismatis exoritur semen in urbe ducum. In sua versa manus
          precordia sanguinis hausit Urbs tantum, quantum nemo referre potest.
          Postquam sacrilego fuit urbs saturata cruore, A propria modicum cede
          quieta fuit. Quisque sibi petit in regem, quem norat amicum: Hic se
          maiorem querit, et ille parem; Hic consanguineum querit, petit ille
          sodalem; Hic humilem laudat, laudat et ille ferum. Quisque sibi regem
          petit hunc, legit hunc, petit illum; Non erat in voto mens pharisea
          pari. Tancredum petit hic, comitem petit ille Rogerum: Quod petit hic,
          negat hic; quod negat hic, petit hic. Ambo duces equitum, rationis
          uterque magister; Hic dator, ille tenax, hic brevis, ille gigas. Intus
          at interea vicecancellarius ardet: Ut sibi Tancredum gens petat, unus
          agit. Hoc negat antistes, qui gualterizatur ubique, Votaque Mathei
          curia tota negat. Ille suis ceptis magis ac magis instat iniquis, In
          votis animam dans nichil esse suam. Vi, prece, promissis, trahit in
          sua vota rebelles, Tendens multimodis recia plena dolis. Pollicitis
          humiles, prece magnos, munere faustos Vincit, et antistes simplicitate
          ruit.
        </p>
      </div>
    </React.Fragment>
  );
}
