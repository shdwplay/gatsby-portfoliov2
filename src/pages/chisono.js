import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Chi Sono</h2>
        {/* <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p> */}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          {/* <h3>Lorem ipsum dolor</h3> */}
          <p>
            Ciao, sono Anna Della Badia, sono nata nel 1996 nella provincia di
            Varese. Fin da piccola mi sono avvicinata al mondo della fotografia,
            ancora alle elementari mi armavo di fotocamere usa e getta e
            rincorrevo i miei amici per immortalarli, ero felicissima quando mio
            padre mi faceva scattare con la sua macchina fotografica, fino a
            quando in casa nostra non è arrivata una piccola compatta digitale,
            con una risoluzione che ora riterremmo imbarazzante, ma che io
            portavo ovunque e con cui mi sentivo libera di creare ciò che mi
            passava per la testa.
          </p>
          <p>
            Al momento di scegliere la scuola superiore non ho avuto alcun
            dubbio e sono approdata in un istituto fotografico, passando quindi
            l'intera adolescenza a stretto contatto con quest'arte, impegnandomi
            sia in progetti scolastici che personali. Mi sono avvicinata alla
            fotografia di eventi, come concerti, potendo unire la mia passione
            per la fotografia con quella della musica, e al video, producendo
            alcuni stop motion.
          </p>
          <p>
            Terminato questo percorso scolastico ho avuto la possibilità di
            trasferirmi a Roma e frequentare il corso di cinema alla RUFA, Rome
            University of Fine Arts, laureandomi con 110 e lode. In questi anni
            mi sono indirizzata verso il reparto fotografia sui set,
            approfondendo questa passione sia dal punto di vista teorico che
            pratico.
          </p>
          <p>
            Il ritratto è il tipo di fotografia che amo di più realizzare. Che
            sia un mio amico, un cantante intento ad esibirsi o un'irrequieta
            manifestazione, mi piace immortalare l'espressione che compare sul
            volto del soggetto. Il mio percorso di studi e di vita è stato
            dunque totalmente incentrato sulla fotografia. Non ho mai avuto il
            desiderio di fare nient'altro.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
