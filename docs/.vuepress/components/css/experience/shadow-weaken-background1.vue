<template>
  <main>
    <p>
      Bacon ipsum dolor amet consectetur short loin ut tri-tip alcatra ground round jowl beef meatloaf in pork. Elit
      chicken ea spare ribs. Shank andouille ex boudin picanha turkey esse. Do doner fugiat tongue.
    </p>
    <p>
      Chuck filet mignon flank pork chop mollit enim veniam sed pork loin aliquip sausage prosciutto in deserunt. Nostrud
      porchetta non nulla sunt. Cupim et velit picanha laborum salami capicola exercitation alcatra sausage cillum
      shoulder minim esse. Pig boudin aliquip aute, tail ut cow incididunt short loin aliqua.
    </p>
    <p>
      Doner alcatra pastrami pig, strip steak eu in frankfurter occaecat in filet mignon chuck short loin nulla meatloaf.
      Adipisicing aliqua kielbasa nulla proident. Ground round meatloaf kevin, shank adipisicing pork frankfurter
      t-bone spare ribs cupidatat. Sed ham non duis enim, in ipsum fugiat est tongue short ribs ad bresaola prosciutto.
      Non minim picanha, ad in occaecat fugiat veniam dolor deserunt.
    </p>
    <div>111</div>
  </main>
</template>

<style scoped>
main {
  height: 300px;
  position: relative;
  overflow: hidden;
}

/* div {
  color: #fff;
  background: yellowgreen;
  padding: 10px;
  border-radius: 2px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
div::before {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
} */

div::before {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
div {
  color: #fff;
  background: yellowgreen;
  padding: 10px;
  border-radius: 2px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>