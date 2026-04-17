'use client'

import { ReSeqt } from "reseqt";
import "reseqt/style.css";

const fasta = `>Mimivirus
--------------------MTNS----------------IPWIEKYRPVNIDDVIIDDN
ISKQINIFLQDR-ENVH-LIITGSPGVGKTSTVRCIAKELLGE-----------------
--D-MSQGYLEINAAED-RGVRSISTIIPPFCKKV------FAA------NKSKIILLDE
ADIMTSKCQYDINNMIKKFGRKTKFIFTCNDSSKIIEDIQSICRILRFK-KLTDEQINQ-
----YLSKICVNEKIPYDEQGLRTICYISNGDMRKSINDLQKTAFTFEK----------I
TKNLVLKICKVPDPEDIRKIISLCLE-SNLEKADE-------------------------
--------IMNN-II------------------KLDYCYFDIVTSFIYVLKVYD------
-------------------------MSENLRLRLIMIV----------------------
--------------------------NETKINISKGLRSKLQLTGMICRLIKE-------
---------------------------------IQRDE----------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------
>Anopheles
--------PG---APKEAEGKKKS----------------LPWIEKYRPQRFEEIVGNEE
TVARLGIFASQG-NAPN-IIIAGPPGVGKTTTILCLARILLGP-----------------
--N-FREAVLELNASNE-RGIDVVRSKIKMFAQQKVTLPR----------GRHKIVILDE
ADSMTEGAQQALRRTMEIYSNTTRFALACNTSEKIIEPIQSRCAMLRFS-KLSDAQVLA-
----KVVEICQHENLSYDEDGLEAIVFTAQGDMRQALNNLQSTANGFGH----------I
SGANVFKVCDEPHPLLVQDMLQHCVK-GDIHKAYK-------------------------
--------IMSK-LW------------------KLGYAAEDIIGNVFRVCRRMD------
-------------------------MNEKLKLYFIREI----------------------
--------------------------GETHMKIVDGLNSLLQMSGLLARMC---------
-----------------------------------EASYE--------------------
----------H-------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------
>Schizosaccharomyces_pombe_972h
----------------MSNAVSSSVFGEKNNSVA----YELPWVEKYRPIVLDDIVGNEE
TIDRLKVIAKEG-NMPH-LVISGMPGIGKTTSILCLAHALLGP-----------------
--A-YKEGVLELNASDE-RGIDVVRNRIKAFAQKKVILPP----------GRHKIIILDE
ADSMTAGAQQALRRTMEIYSNTTRFALACNQSNKIIEPIQSRCAILRYS-RLTDQQVLQ-
----RLLNICKAEKVNYTDDGLAALIMTAEGDMRQAVNNLQSTVAGFGL----------V
NGENVFRVADQPSPVAIHAMLTACQS-GNIDVALE-------------------------
--------KLQG-IW------------------DLGFSAVDIVTNMFRVVKTMD------
------------------------SIPEFSRLEMLKEI----------------------
--------------------------GQTHMIILEGVQTLLQLSGLVCRLA---------
-----------------------------------KSQMK--------------------
----------PESFII--------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------
>Strongylocentrotus_purpuratus
--------------------MTSSFLSILS----------LFRVEKYRPTSLSDVVGNEE
TVSRLEVFSREG-NVPN-VIIAGPPGTGKTTSILCLARTMLGA-----------------
--S-FKDAVLEMNASNE-RGIDVVRNKIKMFAQKKVTLPK----------GRHKIIILDE
ADSMTGAAQQAMRRTMEVFSKTTRFALACNASDKIIEPIQSRCAVLRYS-RLSDSQILK-
----RLLEICAAENVDHAEDGLEAIIYTAQGDMRQAINNLQSTYAGFGS----------I
TSENVFKVCDEPHPQLIKSMLDHCVE-ADIDKAYE-------------------------
--------IMHH-MS------------------HMGYSADDIITNIFRSCKTHQ------
-------------------------MAEYVKLEFIKEI----------------------
--------------------------GMTHMRIAEGVNSILQLSGLLARLC---------
-----------------------------------QKTAA--------------------
----------PSDKA---------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------
>Homo_sapiens
--MEVEAVCG---GAGEVEAQDSDPAPAFSKAPGSAGHYELPWVEKYRPVKLNEIVGNED
TVSRLEVFAREG-NVPN-IIIAGPPGTGKTTSILCLARALLGP-----------------
--A-LKDAMLELNASND-RGIDVVRNKIKMFAQQKVTLPK----------GRHKIIILDE
ADSMTDGAQQALRRTMEIYSKTTRFALACNASDKIIEPIQSRCAVLRYT-KLTDAQILT-
----RLMNVIEKERVPYTDDGLEAIIFTAQGDMRQALNNLQSTFSGFGF----------I
NSENVFKVCDEPHPLLVKEMIQHCVN-ANIDEAYK-------------------------
--------ILAH-LW------------------HLGYSPEDIIGNIFRVCKTFQ------
-------------------------MAEYLKLEFIKEI----------------------
--------------------------GYTHMKIAEGVNSLLQMAGLLARLC---------
-----------------------------------QKTMA--------------------
----------PVAS----------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------
>Ustilago_maydis_521
---------------MTVSSASSTAAPAASNTTG----YELPWVEKYRPLRLDDVVGNKD
TIDRLKVIQKDG-NCPH-LLISGLPGIGKTTSVLCLARALLGE-----------------
--A-YKEGVLELNASDE-RGVDVVRNKIKTFAQKKVSLPP----------GRHKIIILDE
ADSMTPAAQQALRRTMEIYSNTTRFCFACNQSNKIIEPIQSRCAILRYA-KVRDEHILK-
----RLLEICEMENVEYSDEGLAAIIFTTEGDMRQAINNLQSTWTGLGF----------V
SPDNVFKVCDQPHPFLIRSILLACKD-GHVDEALE-------------------------
--------KLDE-IS------------------SKGYAAVDIVTTLFRVVKTLD------
------------------------AIPEATKLDFIKEI----------------------
--------------------------GWTHIKILEGVATLVQLGGLLARLC---------
-----------------------------------KLSMH--------------------
----------PNQFQV--------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------`;

export default function Home() {
  return (
      <main className="min-h-screen p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <h1 className="text-3xl font-semibold">ReSeqt</h1>
            <p className="text-sm opacity-70">
              Temporary website test page for the alignment viewer.
            </p>
          </div>

          <div className="rounded-2xl border p-4">
            <ReSeqt fasta={fasta} isAminoAcid={true}/>
          </div>
        </div>
      </main>
  );
}