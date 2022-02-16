import { gsap, TimelineMax } from "../node_modules/gsap/src/all.js";

// SUPERS
// SUPER LEFT
var tlLeftSuperActive = false;
var tlLeftSuper = gsap.timeline();
var tlLeftSuperPhone = gsap.timeline();
const Superphone = document.getElementsByClassName("phoneleft");
const SuperphoneSrc = document.getElementById("superphoneleftsrc");
const Superpre = document.getElementById("leftsuperpre");
const Supername = document.getElementById("leftsupername");
const Supertitle = document.getElementById("leftsupertitle");
// const leftSuperMain = document.getElementById("leftsuper");

const leftSuper = nodecg.Replicant("leftsuper");
leftSuper.on("change", (newVal, oldVal) => {
  console.log("Left Super: newVal is: ", newVal, ' and old value is: ', oldVal)
 

  
 

	

	// .call(() => {
	// 	nameEl.innerHTML = "";
	// 	titleEl.innerHTML = "";
	// })
	
  // .set(".super-phone-left", { xPercent: -100, opacity: 0 })
  // .to(".super-phone-left", { xPercent: 0, opacity: 100 }, 0)
  // // .to([Superpre, Supername, Supertitle], { x: 30 }, 0, "boxIn")
  // // .add("boxStartEnd")
  // .to(".super-phone-left", { xPercent: -100, opacity: 0 }, '+=3', "boxOut")
  // .to("#text-group-left", { x: 0 }, 3, "textGroupOut")
  // .fromTo(
  //   '.super-phone-left',
  //   0.33,
  //   {
  //     width: 0,
  //     // padding: "0px 0px 0px 0px",
  //     //   ease: "Power1.easeIn",
  //   },
  //   {
  //     width: '28px',
  //     // padding: "0px 0px 0px 8px",
  //     ease: "Power1.easeIn",
  //   }
  // )

  // console.log("leftSuperMain.offsetWidth is: ", leftSuperMain.offsetWidth)
  // console.log("Supername.offsetWidth is: ", Supername.offsetWidth)
  // console.log("Supertitle.offsetWidth is: ", Supertitle.offsetWidth)




  if (newVal.action === "In") {
    // console.log("in happend for super!")
    if(newVal.phone) {
      console.log("phone is on!")
      // Superphone.src = 'https://renderbox.io:9090/assets/icons/phone/phoneToRight.png';
    
      tlLeftSuperPhone
      .set('.super-phone-left', {width: "",  transformOrigin: "50% 50%"})
      .from('.super-phone-left', {width: 0,  transformOrigin: "50% 50%"})
      
    }

    // } else {
      // Superphone.src = '';
      Superpre.innerHTML = newVal.position;
      Supername.innerHTML = newVal.name;
      Supertitle.innerHTML = newVal.title;
      tlLeftSuper
  
      .to(
        [Superpre],
        0.33,
        // {
        //   width: 0,
        //   padding: "0px 0px 0px 0px",
        // },
        {
          width: Superpre.clientWidth,
          padding: "0px 5px 0px 7px",
          ease: "Power1.easeIn",
        }
      )

      .fromTo(
        [Supername],
        0.33,
        {
          width: 0,
          padding: "0px 0px 0px 0px",
        },
        {
          width: Supername.clientWidth,
          padding: "0px 5px 0px 7px",
          ease: "Power1.easeIn",
        }
      )
      // .from(
      //   [Supername],
      //   {
      //     width: 0,
      //   }
      // )
      .fromTo(
        [Supertitle],
        0.33,
        {
          width: 0,
          padding: "0px 0px 0px 0px",
        },
        {
          width: Supertitle.clientWidth,
          padding: "0px 5px 0px 7px",
          ease: "Power1.easeIn",
        }
      );
    // }
    
    tlLeftSuperActive = true;
  } else if (newVal.action === "Change") {
    // console.log("at change")
    // tlLeftSuper
    // .call(() => {
    // console.log("oldVal is: ", oldVal)
    // console.log("oldVal.position is: ", oldVal.position)
    // console.log("compare position: equal: ", oldVal.position !== newVal.position)
    // leftSuperMain.style.width = "auto"
    // console.log("Supername before width is: ", Supername.offsetWidth)
    
     
    if (oldVal && !oldVal.phone && newVal.phone) {
      // console.log("updating pre!")
      // Superpre.textContent = newVal.position;
      // if(newVal.phone) {
        // console.log("phone change is on!")
        // Superphone.src = 'https://renderbox.io:9090/assets/icons/phone/phoneToRight.png';
      
        tlLeftSuperPhone
        .set('.super-phone-left', {width: "",  transformOrigin: "50% 50%"})
        .from('.super-phone-left', {width: 0,  transformOrigin: "50% 50%"})
        
      
    }
    if (oldVal && oldVal.phone && oldVal.phone !== newVal.phone) {
      // console.log("updating pre!")
      // Superpre.textContent = newVal.position;
      // if(newVal.phone) {
        // console.log("phone change is off!")
        // Superphone.src = 'https://renderbox.io:9090/assets/icons/phone/phoneToRight.png';
      
          tlLeftSuperPhone
       
          .to('.super-phone-left', {width: 0,  transformOrigin: "50% 50%"})
          // .set('.super-phone-left', { width: "", padding: "0px 0px 0px 0px" });
        
        
      
    }
    
    if (oldVal && oldVal.position && oldVal.position !== newVal.position) {
      // console.log("updating pre!")
      // Superpre.textContent = newVal.position;
      Superpre.innerHTML = newVal.position;
      Superpre.style.width = "auto";
    }
    // console.log("oldVal.person is: ", oldVal.name)
    // console.log("compare person: equal: ", oldVal.name !== newVal.name)
    if (oldVal && oldVal.name && oldVal.name !== newVal.name) {
      // console.log("updating name!")
      // Supername.textContent = newVal.name;
      Supername.innerHTML = newVal.name;
      Supername.style.width = "auto";
    }
    // console.log("oldVal.title is: ", oldVal.title)
    // console.log("compare title: equal: ", oldVal.title !== newVal.title)
    if (oldVal && oldVal.title && oldVal.title !== newVal.title) {
      // console.log("updating title!")
      // Supertitle.textContent = newVal.title;
      Supertitle.innerHTML = newVal.title;
      Supertitle.style.width = "auto";
      // }

      // console.log("Supertitle before width is: ", Supertitle.clientWidth)

      // String.prototype.width = function(font) {
      //   var f = font || '12px arial',
      //       o = $('<div></div>')
      //             .text(this)
      //             .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
      //             .appendTo($('body')),
      //       w = o.width();

      //   o.remove();

      //   return w;
      // }
      // var canvas = document.createElement('canvas');
      // var ctx = canvas.getContext("2d");
      // ctx.font = "12px Arial";
      // var okwidth = ctx.measureText(Supertitle.textContent).width;
      // console.log("string measurement: ", "a string".width())
      // const newWidth = Supertitle.clientWidth + okwidth + 'px'

      // .setAttribute("style","width:500px");

      // })
    }
  } else {
    // console.log("how??at out")
    tlLeftSuper
    
      .to(Supername, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .to(Supertitle, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .to(Superpre, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      // .to('.super-phone-left', 0.33, {
      //   width: 0,
      //   // padding: "0px 0px 0px 0px",
      //   ease: "Power1.easeOut",
      // })

      .call(() => {
        // Superphone.src = "";
        Superpre.innerHTML = "";
        Supername.innerHTML = "";
        Supertitle.innerHTML = "";
        tlLeftSuperActive = false;
      })
      // .set('.super-phone-left', { width: "", padding: "0px 0px 0px 0px" })
      .set(Superpre, { width: "", padding: "0px 0px 0px 0px" })
      .set(Supername, { width: "", padding: "0px 0px 0px 0px" })
      .set(Supertitle, { width: "", padding: "0px 0px 0px 0px" });
      if(newVal.phone) {
        tlLeftSuperPhone
     
        .to('.super-phone-left', {width: 0,  transformOrigin: "50% 50%"})
        // .set('.super-phone-left', { width: "", padding: "0px 0px 0px 0px" });
      }
    
  }
  // console.log("Out happend for super!")
  // const outSuperLeft = tlLeftSuper.fromTo([leftSuperMain, Supername, Supertitle],{
  //   width: leftSuperMain.offsetWidth,
  // }, {
  //   width: 0,
  //   duration: 1
  // });

  // const tl = gsap.timeline();

  // tl.from([nameplateEl, nameEl, titleEl], 1, {width: 0});

  // tl.to([nameplateEl, nameEl, titleEl], 1, {width: 0}, "+=4");

  // tl.call(() => {
  // 	nameEl.innerHTML = "";
  // 	titleEl.innerHTML = "";
  // })
  // tl.set([nameplateEl, nameEl, titleEl], {width: ""})

  // .to([leftSuperMain, Supername, Supertitle], 0.5, { rotation: 180})
  // .addPause(9999999999999999999999999999999999999999999999999999)
  // .set

  // .to([leftSuperMain, Supername, Supertitle], 0.5, { rotation: 0 })
  // .repeat(-1);
  // tl.from([leftSuperMain, Supername, Supertitle], {width: 0})

  // tl.repeat(-1)
  // .addPause(999999);

  // tl.to([leftSuperMain, Supername, Supertitle], 1, {width: 0}, "+=4");

  // .call(() => {
  // 	Supername.innerHTML = "";
  // 	Supertitle.innerHTML = "";
  // })
  // .set([leftSuperMain, Supername, Supertitle], {width: "", repeat: -1})
});

// SUPER RIGHT
var tlRightSuperActive = false;
var tlRightSuper = gsap.timeline();
var tlRightSuperPhone = gsap.timeline();
// const rightSuperMain = document.getElementById("rightsuper");
const rightSuperpre = document.getElementById("rightsuperpre");
const rightSupername = document.getElementById("rightsupername");
const rightSupertitle = document.getElementById("rightsupertitle");

const rightSuper = nodecg.Replicant("rightsuper");
rightSuper.on("change", (newVal, oldVal) => {
  // console.log("Right Super: newVal is: ", newVal, ' and old value is: ', oldVal)
  rightSuperpre.innerHTML = newVal.position;
  rightSupername.innerHTML = newVal.name;
  rightSupertitle.innerHTML = newVal.title;

  if (newVal.action === "In") {
    // console.log("in happend for super!")
    if(newVal.phone) {
      tlRightSuperPhone
    .set('.super-phone-right', {width: "",  transformOrigin: "50% 50%"})
    .from('.super-phone-right', {width: 0,  transformOrigin: "50% 50%"})
    }
    
    tlRightSuper
      .to(
        [rightSuperpre],
        0.33,
        // {
        //   width: 0,
        //   padding: "0px 0px 0px 0px",
        // },
        {
          width: rightSuperpre.clientWidth,
          padding: "0px 5px 0px 7px",
          ease: "Power1.easeIn",
        }
      )

      .fromTo(
        [rightSupername],
        0.33,
        {
          width: 0,
          padding: "0px 0px 0px 0px",
        },
        {
          width: rightSupername.clientWidth,
          padding: "0px 5px 0px 7px",
          ease: "Power1.easeIn",
        }
      )
      // .from(
      //   [Supername],
      //   {
      //     width: 0,
      //   }
      // )
      .fromTo(
        [rightSupertitle],
        0.33,
        {
          width: 0,
          padding: "0px 0px 0px 0px",
        },
        {
          width: rightSupertitle.clientWidth,
          padding: "0px 5px 0px 7px",
          ease: "Power1.easeIn",
        }
      );
    tlRightSuperActive = true;
    // .fromTo(
    //   [rightSuperpre, rightSupername],
    //   {
    //     width: 0,
    //     padding: '0px 0px 0px 0px'
    //   }
    // )
    // // .from(
    // //   [Supername],
    // //   {
    // //     width: 0,
    // //   }
    // // )
    // .from(
    //   [rightSupertitle],
    //   {
    //     width: 0,
    //     padding: '0px 0px 0px 0px'
    //   }
    // )
  } else if (newVal.action === "Change") {
    // console.log("at change")
    // tlRightSuper.call(() => {
      // leftSuperMain.style.width = "auto"
      // console.log("Supername before width is: ", Supername.offsetWidth)

      if (oldVal && !oldVal.phone && newVal.phone) {
        // console.log("updating pre!")
        // Superpre.textContent = newVal.position;
        // if(newVal.phone) {
          // console.log("phone change is on!")
          // Superphone.src = 'https://renderbox.io:9090/assets/icons/phone/phoneToRight.png';
        
          tlRightSuperPhone
          .set('.super-phone-right', {width: "",  transformOrigin: "50% 50%"})
          .from('.super-phone-right', {width: 0,  transformOrigin: "50% 50%"})
          
        
      }
      if (oldVal && oldVal.phone && oldVal.phone !== newVal.phone) {
        // console.log("updating pre!")
        // Superpre.textContent = newVal.position;
        // if(newVal.phone) {
          // console.log("phone change is off!")
          // Superphone.src = 'https://renderbox.io:9090/assets/icons/phone/phoneToRight.png';
        
            tlRightSuperPhone
         
            .to('.super-phone-right', {width: 0,  transformOrigin: "50% 50%"})
            // .set('.super-phone-left', { width: "", padding: "0px 0px 0px 0px" });
          
          
        
      }
      
      if (oldVal && oldVal.position && oldVal.position !== newVal.position) {
        // console.log("updating pre!")
        // rightSuperpre.textContent = newVal.position;
        rightSuperpre.style.width = "auto";
      }

      if (oldVal && oldVal.name && oldVal.name !== newVal.name) {
        // console.log("updating person!")
        // rightSupername.textContent = newVal.name;
        rightSupername.style.width = "auto";
      }

      if (oldVal && oldVal.title && oldVal.title !== newVal.title) {
        // console.log("updating title!")
        // rightSupertitle.textContent = newVal.title;
        rightSupertitle.style.width = "auto";
      }
    // });
  } else {
    // console.log("at out")
    tlRightSuper
      .to(rightSuperpre, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .to(rightSupername, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .to(rightSupertitle, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })

      .call(() => {
        rightSuperpre.innerHTML = "";
        rightSupername.innerHTML = "";
        rightSupertitle.innerHTML = "";
        tlRightSuperActive = false;
      })
      .set(rightSuperpre, { width: "", padding: "0px 0px 0px 0px" })
      .set(rightSupername, { width: "", padding: "0px 0px 0px 0px" })
      .set(rightSupertitle, { width: "", padding: "0px 0px 0px 0px" });

      if(newVal.phone) {
        tlRightSuperPhone
     
      .to('.super-phone-right', {width: 0,  transformOrigin: "50% 50%"})
      }
      
  }

  // if (newVal.action === "In") {
  //   // console.log("in happend for super!")
  //   const inRightSuper = tlRightSuper.from(
  //     [rightSuperMain, rightSupername, rightSupertitle],
  //     { width: 0 }
  //   );
  //   inRightSuper;
  // } else if (newVal.action === "Out") {
  //   // console.log("Out happend for super!")
  //   const outRightSuper = tlRightSuper.to(rightSuperMain, { width: 0 });
  //   outRightSuper
  //     .call(() => {
  //       rightSupername.innerHTML = "";
  //       rightSupertitle.innerHTML = "";
  //     })
  //     .set(rightSuperMain, {
  //       width: "",
  //       repeat: -1,
  //     });
  // } else {
  //   tlRightSuper
  //     .call(() => {
  //       rightSupername.innerHTML = newVal.name;
  //       rightSupertitle.innerHTML = newVal.title;
  //     })
  //     .set(rightSuperMain, { width: "" });
  // }
});

// CG
var tlCGActive = false;
var tlCG = gsap.timeline();
var tlVCG = gsap.timeline();
const cg = document.getElementById("cg");
const vcg = document.getElementById("vcg");
// const cgMain = document.getElementById("cgmain");
// const stripeSub = document.getElementById("stripesub");

const cgReplicant = nodecg.Replicant("cg");
cgReplicant.on("change", (newVal, oldVal) => {
  console.log("cg: newVal is: ", newVal, ' and old value is: ', oldVal)
  //   console.log("check is: ", cg.src)
 
    //   stripeSub.innerHTML = newVal.sub;
    if (newVal.action === "In") {
      // console.log("in Happend")
      if(newVal.assetType === 'image/jpeg' || newVal.assetType === 'image/png') {
        cg.src = newVal.src;
      if(newVal.effect === 'Mix') {
        
        tlCG.fromTo(cg, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "+=0.2");
      } else {
        tlCG.fromTo(cg, { opacity: 0 }, { opacity: 1, duration: 0 }, "+=0.2");
        
      }
      tlCGActive = true;
  } else if(newVal.assetType === 'video/mp4' || newVal.assetType === 'video/mp4') {
    // console.log("got video")
    vcg.src = newVal.src;
    if(newVal.effect === 'Mix') {
        
      tlVCG.fromTo(vcg, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "+=0.2");
    } else {
      tlVCG.fromTo(vcg, { opacity: 0 }, { opacity: 1, duration: 0 }, "+=0.2");
      
    }
    tlCGActive = true;
  }
  
    
    
    // tlCG.from(cg, 1, {opacity: 1});
    // tlCG.from(stripe, {
    //   width: "rect(0px,0px,200px,0px)",
    //   duration: 0.6,
    //   ease: "Power1.easeIn",
    // });
  } else if (newVal.action === "Change") {
    // console.log("change Happend")
    // tlCG.call(() => {
      if(newVal.assetType === 'image/jpeg' || newVal.assetType === 'image/png') {
    cg.src = newVal.src;
  } else if(newVal.assetType === 'video/mp4' || newVal.assetType === 'video/mp4') {
    vcg.src = newVal.src;
  }
    //   stripeSub.innerHTML = newVal.sub;
    // });
  } else if (newVal.action === "Out") {
    // console.log("out Happend")
    if(newVal.assetType === 'image/jpeg' || newVal.assetType === 'image/png') {
      if(newVal.effect === 'Mix') {
        tlCG
          // .to(
          //   stripe,
          //   //{ rect(top, right, bottom, left)
          //   { clip: "rect(0px,0px,200px,0px)", duration: 0.6, ease: "Power1.easeIn" }
          // )
          .fromTo(cg, { opacity: 1 }, { opacity: 0, duration: 0.3 })
          .set(cg, { opacity: 0 })
          .call(() => {
            cg.src = "";
            tlCGActive = false;
            // stripeSub.innerHTML = "";
          });
        } else {
          tlCG
          // .to(
          //   stripe,
          //   //{ rect(top, right, bottom, left)
          //   { clip: "rect(0px,0px,200px,0px)", duration: 0.6, ease: "Power1.easeIn" }
          // )
          .fromTo(cg, { opacity: 1 }, { opacity: 0, duration: 0 })
          .set(cg, { opacity: 0 })
          .call(() => {
            cg.src = "";
            tlCGActive = false;
            // stripeSub.innerHTML = "";
          });
        }
    } else if(newVal.assetType === 'video/mp4' || newVal.assetType === 'video/mp4') {
      if(newVal.effect === 'Mix') {
        tlVCG
          // .to(
          //   stripe,
          //   //{ rect(top, right, bottom, left)
          //   { clip: "rect(0px,0px,200px,0px)", duration: 0.6, ease: "Power1.easeIn" }
          // )
          .fromTo(vcg, { opacity: 1 }, { opacity: 0, duration: 0.3 })
          .set(vcg, { opacity: 0 })
          .call(() => {
            vcg.src = "";
            tlCGActive = false;
            // stripeSub.innerHTML = "";
          });
        } else {
          tlVCG
          // .to(
          //   stripe,
          //   //{ rect(top, right, bottom, left)
          //   { clip: "rect(0px,0px,200px,0px)", duration: 0.6, ease: "Power1.easeIn" }
          // )
          .fromTo(vcg, { opacity: 1 }, { opacity: 0, duration: 0 })
          .set(vcg, { opacity: 0 })
          .call(() => {
            vcg.src = "";
            tlCGActive = false;
            // stripeSub.innerHTML = "";
          });
        }
    }
    
    //   .set(stripe, { clip: "rect(0px,2000px,200px,0px)", repeat: -1 });
  }

  //   clip:"rect(50px 100px 50px 0px)", duration: 1});

  //   	if(newVal.action ==='In') {
  //   		console.log("in happend for stripe!")
  //   		const inStripe = tl.from(stripe,
  //   			 {clip: "rect(0px,0px,2000px,0px)", duration: 0.6, ease:
  //   			 "Power1.easeIn" })
  //   			// clip:"rect(50px 100px 50px 0px)", duration: 1});
  //   		inStripe

  //   	}
  //   	else if(newVal.action ==='Out') {
  //   		console.log("Out happend for stripe!")
  //   		const outStripe = tl.to(stripe,
  //   		//{ rect(top, right, bottom, left)
  //   			 {clip: "rect(0px,0px,2000px,0px)", duration: 0.6, ease:
  //   			 "Power1.easeIn" })
  //   		outStripe
  //   			.call(() => {
  //   				stripeMain.innerHTML = "";
  //   				stripeSub.innerHTML = "";
  //   })
  //   // .set('#stripe', {width: "", repeat: -1})

  //   } else {
  //   	console.log("change happend for stripe!")
  //   	tl
  //   	.call(() => {
  //   		stripeMain.innerHTML = newVal.main;
  //   		stripeSub.innerHTML = newVal.sub;
  //   	})
  //   	// .set('#stripe', {width: ""})
  //   }
});

// FINGERS
// FINGER TOP LEFT
var tlTopLeftFingerActive = false;
var tlTopLeftFinger = gsap.timeline();
// const topLeftFinger = document.getElementById("topleftfinger");
const topLeftFingerMain = document.getElementById("topleftfingermain");
// const topLeftFingerSub = document.getElementById("topleftfingersub");

const topLeftFingerReplicant = nodecg.Replicant("topleftfinger");
topLeftFingerReplicant.on("change", (newVal, oldVal) => {
  // console.log(
  //   "Top Left Finger: newVal is: ",
  //   newVal,
  //   " and old value is: ",
  //   oldVal
  // );
  topLeftFingerMain.innerHTML = newVal.main;

  if (newVal.action === "In") {
    // console.log("in happend for super!")
    tlTopLeftFinger.fromTo(
      [topLeftFingerMain],
      0.33,
      {
        width: 0,
        padding: "0px 0px 0px 0px",
      },
      {
        width: topLeftFingerMain.clientWidth,
        padding: "0px 5px 0px 7px",
        ease: "Power1.easeIn",
      }
    );
    tlTopLeftFingerActive = true;
  } else if (newVal.action === "Change") {
    // console.log("change happend for finger!")
    topLeftFingerMain.style.width = "auto";
  } else {
    // console.log("Out happend for super!")

    tlTopLeftFinger
      .to(topLeftFingerMain, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .set([topLeftFingerMain], {
        width: "",
        padding: "0px 0px 0px 0px",
      })
      .call(() => {
        topLeftFingerMain.innerHTML = "";
        tlTopLeftFingerActive = false;
      });
  }
});

// FINGER TOP RIGHT
var tlTopRightFingerActive = false;
var tlTopRightFinger = gsap.timeline();
// const topRightFinger = document.getElementById("toprightfinger");
const topRightFingerMain = document.getElementById("toprightfingermain");
// const topRightFingerSub = document.getElementById("toprightfingersub");

const topRightFingerReplicant = nodecg.Replicant("toprightfinger");
topRightFingerReplicant.on("change", (newVal, oldVal) => {
  // console.log("Top Right Finger: newVal is: ", newVal, ' and old value is: ', oldVal)
  topRightFingerMain.innerHTML = newVal.main;
  // topRightFingerSub.innerHTML = newVal.sub;

  if (newVal.action === "In") {
    // console.log("in happend for super!")
    tlTopRightFinger.fromTo(
      [topRightFingerMain],
      0.33,
      {
        width: 0,
        padding: "0px 0px 0px 0px",
      },
      {
        width: topRightFingerMain.clientWidth,
        padding: "0px 5px 0px 7px",
        ease: "Power1.easeIn",
      }
    );
    tlTopRightFingerActive = true;
  } else if (newVal.action === "Change") {
    // console.log("change happend for finger!")
    topRightFingerMain.style.width = "auto";
  } else {
    // console.log("Out happend for super!")

    tlTopRightFinger
      .to(topRightFingerMain, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .set([topRightFingerMain], {
        width: "",
        padding: "0px 0px 0px 0px",
      })
      .call(() => {
        topRightFingerMain.innerHTML = "";
        tlTopRightFingerActive = false;
      });
  }

  // if (newVal.action === "In") {
  //   // console.log("in happend for super!")
  //   const inTopRightFinger = tlTopRightFinger.from(
  //     [topRightFinger, topRightFingerMain, topRightFingerSub],
  //     { width: 0 }
  //   );
  //   inTopRightFinger;
  // } else if (newVal.action === "Out") {
  //   // console.log("Out happend for super!")
  //   const outTopRightFinger = tlTopRightFinger.to(
  //     [topRightFinger, topRightFingerMain, topRightFingerSub],
  //     { width: 0 }
  //   );
  //   outTopRightFinger
  //     .call(() => {
  //       topRightFingerMain.innerHTML = "";
  //       // topRightFingerSub.innerHTML = "";
  //     })
  //     .set([topRightFinger, topRightFingerMain, topRightFingerSub], {
  //       width: "",
  //       repeat: -1,
  //     });
  // } else {
  //   tlTopRightFinger
  //     .call(() => {
  //       topRightFingerMain.style.width = "auto"
  //       topRightFingerMain.innerHTML = newVal.main;
  //       // topRightFingerSub.innerHTML = newVal.sub;
  //     })
  //     // .set([topRightFinger, topRightFingerMain, topRightFingerSub], {
  //     //   width: "",
  //     // });
  // }
});

// FINGER BOTTOM LEFT
var tlBottomLeftFingerActive = false;
var tlBottomLeftFinger = gsap.timeline();
// const bottomLeftFinger = document.getElementById("bottomleftfinger");
const bottomLeftFingerMain = document.getElementById("bottomleftfingermain");
// const bottomLeftFingerSub = document.getElementById("bottomleftfingersub");

const bottomLeftFingerReplicant = nodecg.Replicant("bottomleftfinger");
bottomLeftFingerReplicant.on("change", (newVal, oldVal) => {
  // console.log(
  //   "Bottom Left Finger: newVal is: ",
  //   newVal,
  //   " and old value is: ",
  //   oldVal
  // );
  bottomLeftFingerMain.innerHTML = newVal.main;
  // bottomLeftFingerSub.innerHTML = newVal.sub;

  if (newVal.action === "In") {
    // console.log("in happend for super!")
    tlBottomLeftFinger.fromTo(
      [bottomLeftFingerMain],
      0.33,
      {
        width: 0,
        padding: "0px 0px 0px 0px",
      },
      {
        width: bottomLeftFingerMain.clientWidth,
        padding: "0px 5px 0px 7px",
        ease: "Power1.easeIn",
      }
    );
    tlBottomLeftFingerActive = true;
  } else if (newVal.action === "Change") {
    // console.log("change happend for finger!")
    bottomLeftFingerMain.style.width = "auto";
  } else {
    // console.log("Out happend for super!")

    tlBottomLeftFinger
      .to(bottomLeftFingerMain, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .set([bottomLeftFingerMain], {
        width: "",
        padding: "0px 0px 0px 0px",
      })
      .call(() => {
        bottomLeftFingerMain.innerHTML = "";
        tlBottomLeftFingerActive = false;
      });
  }

  // if (newVal.action === "In") {
  //   // console.log("in happend for super!")
  //   const inBottomLeftFinger = tlBottomLeftFinger.from(
  //     [bottomLeftFinger, bottomLeftFingerMain, bottomLeftFingerSub],
  //     { width: 0 }
  //   );
  //   inBottomLeftFinger;
  // } else if (newVal.action === "Out") {
  //   // console.log("Out happend for super!")
  //   const outBottomLeftFinger = tlBottomLeftFinger.to(
  //     [bottomLeftFinger, bottomLeftFingerMain, bottomLeftFingerSub],
  //     { width: 0 }
  //   );
  //   outBottomLeftFinger
  //     .call(() => {
  //       bottomLeftFingerMain.innerHTML = "";
  //       // bottomLeftFingerSub.innerHTML = "";
  //     })
  //     .set([bottomLeftFinger, bottomLeftFingerMain, bottomLeftFingerSub], {
  //       width: "",
  //       repeat: -1,
  //     });
  // } else {
  //   tlBottomLeftFinger
  //     .call(() => {
  //       bottomLeftFingerMain.innerHTML = newVal.main;
  //       // bottomLeftFingerSub.innerHTML = newVal.title;
  //     })
  //     .set([bottomLeftFinger, bottomLeftFingerMain, bottomLeftFingerSub], {
  //       width: "",
  //     });
  // }
});
// FINGER BOTTOM RIGHT
var tlBottomRightFingerActive = false;
var tlBottomRightFinger = gsap.timeline();
// const bottomRightFinger = document.getElementById("bottomrightfinger");
const bottomRightFingerMain = document.getElementById("bottomrightfingermain");
// const bottomRightFingerSub = document.getElementById("bottomrightfingersub");

const bottomRightFingerReplicant = nodecg.Replicant("bottomrightfinger");
bottomRightFingerReplicant.on("change", (newVal, oldVal) => {
  // console.log("Bottom Right Finger: newVal is: ", newVal, ' and old value is: ', oldVal)
  bottomRightFingerMain.innerHTML = newVal.main;
  // bottomRightFingerSub.innerHTML = newVal.sub;

  if (newVal.action === "In") {
    // console.log("in happend for super!")
    tlBottomRightFinger.fromTo(
      [bottomRightFingerMain],
      0.33,
      {
        width: 0,
        padding: "0px 0px 0px 0px",
      },
      {
        width: bottomRightFingerMain.clientWidth,
        padding: "0px 5px 0px 7px",
        ease: "Power1.easeIn",
      }
    );
    tlBottomRightFingerActive = true;
  } else if (newVal.action === "Change") {
    // console.log("change happend for finger!")
    bottomRightFingerMain.style.width = "auto";
  } else {
    // console.log("Out happend for super!")

    tlBottomRightFinger
      .to(bottomRightFingerMain, 0.33, {
        width: 0,
        padding: "0px 0px 0px 0px",
        ease: "Power1.easeOut",
      })
      .set([bottomRightFingerMain], {
        width: "",
        padding: "0px 0px 0px 0px",
      })
      .call(() => {
        bottomRightFingerMain.innerHTML = "";
        tlBottomRightFingerActive = false;
      });
  }

  // if (newVal.action === "In") {
  //   // console.log("in happend for super!")
  //   const inBottomRightFinger = tlBottomRightFinger.from(
  //     [bottomRightFinger, bottomRightFingerMain, bottomRightFingerSub],
  //     { width: 0 }
  //   );
  //   inBottomRightFinger;
  // } else if (newVal.action === "Out") {
  //   // console.log("Out happend for super!")
  //   const outBottomRightFinger = tlBottomRightFinger.to(
  //     [bottomRightFinger, bottomRightFingerMain, bottomRightFingerSub],
  //     { width: 0 }
  //   );
  //   outBottomRightFinger
  //     .call(() => {
  //       bottomRightFingerMain.innerHTML = "";
  //       // bottomRightFingerSub.innerHTML = "";
  //     })
  //     .set([bottomRightFinger, bottomRightFingerMain, bottomLeftFingerSub], {
  //       width: "",
  //       repeat: -1,
  //     });
  // } else {
  //   tlBottomRightFinger
  //     .call(() => {
  //       bottomRightFingerMain.innerHTML = newVal.main;
  //       // bottomRightFingerSub.innerHTML = newVal.title;
  //     })
  //     .set([bottomRightFinger, bottomRightFingerMain, bottomRightFingerSub], {
  //       width: "",
  //     });
  // }
});

// LEFT TO RIGHT
// STRIPE

// BOX
// const tlBoxLeft = gsap.timeline();
// const boxLeftGroup = document.getElementById("stripe-left-group");
const boxMainLeft = document.getElementById("stripeboxleft");
const videoBoxMainLeft = document.getElementById("stripevideoboxleft");
const boxContainerLeft = document.getElementById("box-container-left");
// const boxSubLeft = document.getElementById("stripesubleft");
var tlBoxLeftActive = false;
var tlVideoBoxLeftActive = false;
const textLeftGroup = document.getElementById("text-group-left");

const tlBoxLeft = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("boxStart")
  // .call(() => { boxMainLeft.src = "https://picsum.photos/500/300"; })
  .set("#stripeboxleft", { xPercent: -100 })
  .to("#stripeboxleft", { xPercent: 0 }, 0)
  .to("#text-group-left", { x: 213 }, 0, "boxIn")
  .add("boxStartEnd")
  .to("#stripeboxleft", { xPercent: -100 }, 3, "boxOut")
  .to("#text-group-left", { x: 0 }, 3, "textGroupOut")
  .call(() => { boxMainLeft.src = ""; }, null, 4)
  .add("boxEnd");

// const tlBoxLeft = gsap
// .timeline({
//   paused: true,
//   // repeat: -1,
//   // yoyo: true,
//   // repeatDelay: 1,
//   // defaults: { duration: 1, ease: "sine.inOut" }
// })
// .add("boxStart")
// // .call(() => { boxMainLeft.src = "https://picsum.photos/500/300"; })
// .set("#stripeboxleft", { xPercent: -100 })

// .to("#stripeboxleft", { xPercent: 0 },0, "boxIn")

// .to("#text-group-left", { x: 213 },0, "textGroupIn")
// .add("boxMiddle")

// .add("boxChangeStart")
// .to("#stripeboxleft", { xPercent: -100 },1, "boxOut")
// .to("#text-group-left", { x: 0 },1, "textGroupOut")
// .call(() => {
//   // boxMainLeft.src = newVal.src;
//   console.log("changing box")
//   boxMainLeft.src = 'https://picsum.photos/200/300';
// },2)
// // .set("#stripeboxleft", { xPercent: -100 })

// // .to("#stripeboxleft", { xPercent: 0 },2, "boxIn")

// .to("#text-group-left", { x: 213 },2, "textGroupIn")
// // .set("#stripeboxleft", { xPercent: 0 },2)
// .to("#stripeboxleft", { xPercent: 0 },2, "boxIn")
// // .to("#text-group-left", { x: 213 }, 0,2, "textGroupIn")
// .add("boxChangeEnd")

// .to("#stripeboxleft", { xPercent: -100 },3, "boxOut")
// .to("#text-group-left", { x: 0 },3, "textGroupOut")
// .set("#stripeboxleft", { xPercent: -100 })
// .set("#text-group-left", { x: 0 })
// .call(() => {
//   boxMainLeft.src = "";
// }, 4)
// .add("boxEnd");

const tlVideoBoxLeft = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("videoBoxStart")
  // .call(() => {
  //   // console.log("Doing video!")
  //   videoBoxMainLeft.src = newVal.src;
  //  })
  .set("#stripevideoboxleft", { xPercent: -100 })

  .to("#stripevideoboxleft", { xPercent: 0 }, 0, "videoBoxIn")

  .to("#text-group-left", { x: 213, delay: 0.007 }, 0, "videoTextGroupIn")
  .add("videoBoxStartEnd")
  .to("#stripevideoboxleft", { xPercent: -103, delay: 0.02 }, 3, "videoBoxOut")
  .to("#text-group-left", { x: 0 }, 3, "videoTextGroupOut")
  // .set("#stripevideoboxleft", { xPercent: -100 })
  // .set("#text-group-left", { x: 0 })
  // .call(() => {
  //   videoBoxMainLeft.src = "";
  // })
  .call(() => { videoBoxMainLeft.src = ""; }, null, 4)
  .add("videoBoxEnd");

const leftBox = nodecg.Replicant("boxleft");
leftBox.on("change", (newVal, oldVal) => {
  // console.log("LTR: Box: newVal is: ", newVal, " and old value is: ", oldVal);

  //  tlTest1.play('boxStart')

  if (newVal.action === "In") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      boxMainLeft.src = newVal.src;
      // tlBoxLeft.seek('boxIn')
      tlBoxLeft.tweenFromTo("boxStart", "boxStartEnd", {
        immediateRender: false,
      });
      tlBoxLeftActive = true;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!");
      videoBoxMainLeft.src = newVal.src;
      // tlBoxLeft.call(() => {
      setTimeout(function () {
        tlVideoBoxLeft.tweenFromTo("videoBoxStart", "videoBoxStartEnd");
        tlVideoBoxLeftActive = true;
      }, 500);
      // })
    } else {
      console.log("unknown asset type!");
    }
  } else if (newVal.action === "Change") {
    // console.log("change!")
    //     tlBoxLeft.tweenFromTo(1, 0)
    // console.log("changing, old val type is: ", oldVal);
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      if (
        (oldVal && oldVal.type && oldVal.type === "image/png") ||
        (oldVal && oldVal.type && oldVal.type === "image/jpeg")
      ) {
        console.log("asset before was image!");
        tlBoxLeft.tweenFromTo(3, "boxEnd");
        // tlBoxLeft.call(() => {
        setTimeout(function () {
          boxMainLeft.src = newVal.src;
          //         console.log("changed value!")
          tlBoxLeft.tweenFromTo("boxStart", "boxStartEnd", {
            immediateRender: false,
          });
        }, 500);
      } else if (oldVal && oldVal.type && oldVal.type === "video/mp4") {
        console.log("asset before was video!");
        tlVideoBoxLeft.tweenFromTo(3, "videoBoxEnd");

        // tlBoxLeft.call(() => {
        setTimeout(function () {
          videoBoxMainLeft.src = "";
          boxMainLeft.src = newVal.src;
          //         console.log("changed value!")
          tlBoxLeft.tweenFromTo("boxStart", "boxStartEnd", {
            immediateRender: false,
          });
        }, 500);
      }
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!");
      if (
        (oldVal && oldVal.type && oldVal.type === "image/png") ||
        (oldVal && oldVal.type && oldVal.type === "image/jpeg")
      ) {
        tlBoxLeft.tweenFromTo(3, "boxEnd");

        // tlBoxLeft.call(() => {
        setTimeout(function () {
          boxMainLeft.src = "";
          videoBoxMainLeft.src = newVal.src;
          //         console.log("changed value!")
          tlVideoBoxLeft.tweenFromTo("videoBoxStart", "videoBoxStartEnd", {
            immediateRender: false,
          });
        }, 700);
      } else if (oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoBoxLeft.tweenFromTo(3, "videoBoxEnd");
        // tlBoxLeft.call(() => {
        setTimeout(function () {
          videoBoxMainLeft.src = newVal.src;
          //         console.log("changed value!")
          tlVideoBoxLeft.tweenFromTo("videoBoxStart", "videoBoxStartEnd", {
            immediateRender: false,
          });
        }, 700);
      }

      //   videoBoxMainLeft.src = newVal.src;

      //   // tlBoxLeft.call(() => {
      //     setTimeout(function(){

      //     tlVideoBoxLeft.tweenFromTo("videoBoxStart", "videoBoxMiddle");
      //   tlVideoBoxLeftActive = true
      // }, 500);
      // })
    } else {
      console.log("unknown asset type!");
    }

    // })

    // .tweenFromTo('boxStart', 'boxStartEnd')
    //     // tlBoxLeft.tweenFromTo("boxChangeStart", "boxChangeEnd");
  } else if (newVal.action === "Out") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      tlBoxLeft.tweenFromTo(3, "boxEnd");
      tlBoxLeftActive = false;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!");
      tlVideoBoxLeft.tweenFromTo(3, "videoBoxEnd");
      tlVideoBoxLeftActive = false;
    } else {
      console.log("unknown asset type!");
    }
  }
});

// PROMO LEFT

const promoMainLeft = document.getElementById("promoleft");
const promoTextMainLeft = document.getElementById("promoTextLeft");
const videoPromoMainLeft = document.getElementById("promovideoleft");
const promoBoxContainerLeft = document.getElementById("promo-container-left");
// const tlPromoLeft = gsap.timeline({
//   // repeat: -1,
//   // yoyo: true,
//   // repeatDelay: 1,
//   defaults: { duration: 1, ease: "sine.inOut" }
// });
var tlPromoLeftActive = false;
var tlVideoPromoLeftActive = false;
var tlPromoLeft = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("promoStart")
  // .call(() => {
  //   // console.log("Doing video!")
  //   // videoBoxMainLeft.src = newVal.src;
  //   console.log("text overlay width is: ", promoTextMainLeft.clientWidth)
  //  })
  // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
  .set("#promoleft", { yPercent: 150, width: "100%" })
  // .set('#promoOverlayText', { width: 0 })
  .to("#promoleft", { yPercent: 0 }, 0, "boxIn")
  // .from('#promoOverlayText', { width: 0 }, 0.1)
  // .to("#text-group-left", { x: 200 }, 0, "textGroupIn")
  .add("promoMiddle")
  // .to('#promoOverlayText', { width: 0 }, 1)
  .to("#promoleft", { yPercent: 150 }, 1.5, "boxOut")
  // .to("#text-group-left", { x: 0 }, 1, "textGroupOut")
  .set("#promoleft", { yPercent: 150, width: 0 })
  // // .set('#promoOverlayText', { width: 0 })
  // // .set('#text-group-left', { x: 0 })

  .call(() => {
    //   promoLeft.src = "";
    promoTextMainLeft.innerHTML = "";
  })
  .add("promoEnd");

var tlVideoPromoLeft = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("promoVideoStart")
  // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
  .set("#promovideoleft", { yPercent: 150, width: "100%" })
  // .set('#promoOverlayText', { width: 0 })
  // .set('#promoText', { xPercent: -200 })
  .to("#promovideoleft", { yPercent: 0 }, 0)
  // .to('#promoOverlayText', { width: 0 }, 0.1)
  // .to('#promoText', { xPercent: 0 }, 0.5)

  // .to("#text-group-left", { x: 200 }, 0, "videoTextGroupIn")
  .add("promoVideoMiddle")
  // .to('#promoOverlayText', { width: 0 }, 1)
  .to("#promovideoleft", { yPercent: 150 }, 1.5)

  // .to('#promoText', { xPercent: -200 }, 1.2)
  // .to("#text-group-left", { x: 0 }, 1, "videoTextGroupOut")
  .set("#promovideoleft", { yPercent: 150, width: 0 })
  // .set('#promoOverlayText', { width: 0 })
  // .set('#promoText', { xPercent: -200 })
  // .set('#text-group-left', { x: 0 })

  .call(() => {
    // videoPromoMainLeft.src = "";
    promoTextMainLeft.innerHTML = "";
  })
  .add("promoVideoEnd");
const promoLeftGroup = document.getElementById("promo-group-left");
// const textLeftGroup = document.getElementById("text-group-left");

const promoLeft = nodecg.Replicant("promoleft");
promoLeft.on("change", (newVal, oldVal) => {
  // console.log("LTR: PROMO: newVal is: ", newVal, " and old value is: ", oldVal);

  //               videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';

  //                    tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
  // setTimeout(function(){
  //   console.log("doing out!")
  //   tlVideoPromoLeft.tweenFromTo(1, 5)
  //  }, 5000);

  //  videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';
  //  tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
  //  promoMainLeft.src = "https://picsum.photos/500/300";
  // //  promoTextMainLeft.innerHTML = 'newVal.text'
  //  tlPromoLeft.tweenFromTo('promoStart', 'promoMiddle')

  // setTimeout(function(){
  // console.log("doing out!")
  // tlPromoLeft.tweenFromTo(1, 5)
  // // tlVideoPromoLeft.tweenFromTo(1, 5)
  // }, 5000);

  // IN
  //           if(newVal.type && newVal.type ==='image/png' || newVal.type && newVal.type === 'image/jpeg') {
  //   boxMainLeft.src = newVal.src;
  //   tlBoxLeft.tweenFromTo('boxStart', 'boxMiddle')
  // } else if(newVal.type && newVal.type ==='video/mp4') {
  //   console.log("found video!")
  //   videoBoxMainLeft.src = newVal.src;
  //   tlVideoBoxLeft.tweenFromTo('videoBoxStart', 'videoBoxMiddle')
  // } else {
  //   console.log("unknown asset type!")
  // }

  //  tlTest1.play('boxStart')

  if (newVal.action === "In") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      promoMainLeft.src = newVal.src;
      // promoTextMainLeft.innerText = newVal.text;
      tlPromoLeft.tweenFromTo("promoStart", "promoMiddle",  {
        immediateRender: false,
      });
      tlPromoLeftActive = true;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!")
      videoPromoMainLeft.src = newVal.src;
      // promoTextMainLeft.innerText = newVal.text;
      tlVideoPromoLeft.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
        immediateRender: false,
      });
      tlVideoPromoLeftActive = true;
    } else {
      console.log("unknown asset type!");
    }
  } else if (newVal.action === "Change") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {

      if(oldVal && oldVal.type && oldVal.type === "image/png" || oldVal && oldVal.type && oldVal.type === "image/jpeg") {
        tlPromoLeft.tweenFromTo(1, "promoEnd");
        setTimeout(function () {
          promoMainLeft.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
  
          tlPromoLeft.tweenFromTo("promoStart", "promoMiddle", {
            immediateRender: false,
          });
        }, 700);
      } else if(oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoPromoLeft.tweenFromTo(1, "promoVideoEnd");
        setTimeout(function () {
          videoPromoMainLeft.src = '';
          promoMainLeft.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
  
          tlPromoLeft.tweenFromTo("promoStart", "promoMiddle",  {
            immediateRender: false,
          });
        }, 700);
      }
     
    } else if (newVal.type && newVal.type === "video/mp4") {

      if(oldVal && oldVal.type && oldVal.type === "image/png" || oldVal && oldVal.type && oldVal.type === "image/jpeg") {
        tlPromoLeft.tweenFromTo(1, "promoEnd");
        setTimeout(function () {
          promoMainLeft.src = '';
          videoPromoMainLeft.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
          tlVideoPromoLeft.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
            immediateRender: false,
          });
        }, 700);
      } else if(oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoPromoLeft.tweenFromTo(1, "promoVideoEnd");
        setTimeout(function () {
          videoPromoMainLeft.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
          tlVideoPromoLeft.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
            immediateRender: false,
          });
        }, 700);
      }
     
    } else {
      console.log("unknown asset type!");
    }
  } else if (newVal.action === "Out") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      tlPromoLeft.tweenFromTo(1, "promoEnd");
      tlPromoLeftActive = false;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!")
      tlVideoPromoLeft.tweenFromTo(1, "promoVideoEnd");
      tlVideoPromoLeftActive = false;
    } else {
      console.log("unknown asset type!");
    }
  }
});

// PROMO RIGHT


const promoMainRight = document.getElementById("promoright");
const promoTextMainRight = document.getElementById("promoTextright");
const videoPromoMainRight = document.getElementById("promovideoright");
const promoBoxContainerRight = document.getElementById("promo-container-right");
// const tlPromoLeft = gsap.timeline({
//   // repeat: -1,
//   // yoyo: true,
//   // repeatDelay: 1,
//   defaults: { duration: 1, ease: "sine.inOut" }
// });
var tlPromoRightActive = false;
var tlVideoPromoRightActive = false;
const tlPromoRight = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("promoStart")
  // .call(() => {
  //   // console.log("Doing video!")
  //   // videoBoxMainLeft.src = newVal.src;
  //   console.log("text overlay width is: ", promoTextMainLeft.clientWidth)
  //  })
  // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
  .set("#promoright", { yPercent: 150, width: "100%" })
  // .set('#promoOverlayText', { width: 0 })
  .to("#promoright", { yPercent: 0 }, 0, "boxIn")
  // .from('#promoOverlayText', { width: 0 }, 0.1)
  // .to("#text-group-left", { x: 200 }, 0, "textGroupIn")
  .add("promoMiddle")
  // .to('#promoOverlayText', { width: 0 }, 1)
  .to("#promoright", { yPercent: 150 }, 1.5, "boxOut")
  // .to("#text-group-left", { x: 0 }, 1, "textGroupOut")
  .set("#promoright", { yPercent: 150, width: 0 })
  // // .set('#promoOverlayText', { width: 0 })
  // // .set('#text-group-left', { x: 0 })

  .call(() => {
      promoLeft.src = "";
    // promoTextMainRight.innerHTML = "";
  })
  .add("promoEnd");

const tlVideoPromoRight = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("promoVideoStart")
  // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
  .set("#promovideoright", { yPercent: 150, width: "100%" })
  // .set('#promoOverlayText', { width: 0 })
  // .set('#promoText', { xPercent: -200 })
  .to("#promovideoright", { yPercent: 0 }, 0)
  // .to('#promoOverlayText', { width: 0 }, 0.1)
  // .to('#promoText', { xPercent: 0 }, 0.5)

  // .to("#text-group-left", { x: 200 }, 0, "videoTextGroupIn")
  .add("promoVideoMiddle")
  // .to('#promoOverlayText', { width: 0 }, 1)
  .to("#promovideoright", { yPercent: 150 }, 1.5)

  // .to('#promoText', { xPercent: -200 }, 1.2)
  // .to("#text-group-left", { x: 0 }, 1, "videoTextGroupOut")
  .set("#promovideoright", { yPercent: 150, width: 0 })
  // .set('#promoOverlayText', { width: 0 })
  // .set('#promoText', { xPercent: -200 })
  // .set('#text-group-left', { x: 0 })

  .call(() => {
    videoPromoMainLeft.src = "";
    // promoTextMainRight.innerHTML = "";
  })
  .add("promoVideoEnd");
const promoRightGroup = document.getElementById("promo-group-right");
// const textLeftGroup = document.getElementById("text-group-left");

const promoRight = nodecg.Replicant("promoright");
promoRight.on("change", (newVal, oldVal) => {
  // console.log("RTL: PROMO: newVal is: ", newVal, " and old value is: ", oldVal);

  //               videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';

  //                    tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
  // setTimeout(function(){
  //   console.log("doing out!")
  //   tlVideoPromoLeft.tweenFromTo(1, 5)
  //  }, 5000);

  //  videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';
  //  tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
  //  promoMainLeft.src = "https://picsum.photos/500/300";
  // //  promoTextMainLeft.innerHTML = 'newVal.text'
  //  tlPromoLeft.tweenFromTo('promoStart', 'promoMiddle')

  // setTimeout(function(){
  // console.log("doing out!")
  // tlPromoLeft.tweenFromTo(1, 5)
  // // tlVideoPromoLeft.tweenFromTo(1, 5)
  // }, 5000);

  // IN
  //           if(newVal.type && newVal.type ==='image/png' || newVal.type && newVal.type === 'image/jpeg') {
  //   boxMainLeft.src = newVal.src;
  //   tlBoxLeft.tweenFromTo('boxStart', 'boxMiddle')
  // } else if(newVal.type && newVal.type ==='video/mp4') {
  //   console.log("found video!")
  //   videoBoxMainLeft.src = newVal.src;
  //   tlVideoBoxLeft.tweenFromTo('videoBoxStart', 'videoBoxMiddle')
  // } else {
  //   console.log("unknown asset type!")
  // }

  //  tlTest1.play('boxStart')

  if (newVal.action === "In") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      promoMainRight.src = newVal.src;
      // promoTextMainLeft.innerText = newVal.text;
      tlPromoRight.tweenFromTo("promoStart", "promoMiddle",  {
        immediateRender: false,
      });
      tlPromoRightActive = true;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!")
      videoPromoMainRight.src = newVal.src;
      // promoTextMainLeft.innerText = newVal.text;
      tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
        immediateRender: false,
      });
      tlVideoPromoRightActive = true;
    } else {
      console.log("unknown asset type!");
    }
  } else if (newVal.action === "Change") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {

      if(oldVal && oldVal.type && oldVal.type === "image/png" || oldVal && oldVal.type && oldVal.type === "image/jpeg") {
        tlPromoRight.tweenFromTo(1, "promoEnd");
        setTimeout(function () {
          promoMainRight.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
  
          tlPromoRight.tweenFromTo("promoStart", "promoMiddle", {
            immediateRender: false,
          });
        }, 700);
      } else if(oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
        setTimeout(function () {
          videoPromoMainRight.src = '';
          promoMainRight.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
  
          tlPromoRight.tweenFromTo("promoStart", "promoMiddle",  {
            immediateRender: false,
          });
        }, 700);
      }
     
    } else if (newVal.type && newVal.type === "video/mp4") {

      if(oldVal && oldVal.type && oldVal.type === "image/png" || oldVal && oldVal.type && oldVal.type === "image/jpeg") {
        tlPromoRight.tweenFromTo(1, "promoEnd");
        setTimeout(function () {
          promoMainRight.src = '';
          videoPromoMainRight.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
          tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
            immediateRender: false,
          });
        }, 700);
      } else if(oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
        setTimeout(function () {
          videoPromoMainRight.src = newVal.src;
          // promoTextMainLeft.innerText = newVal.text;
          tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
            immediateRender: false,
          });
        }, 700);
      }
     
    } else {
      console.log("unknown asset type!");
    }
  } else if (newVal.action === "Out") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      tlPromoRight.tweenFromTo(1, "promoEnd");
      tlPromoRightActive = false;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!")
      tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
      tlVideoPromoRightActive = false;
    } else {
      console.log("unknown asset type!");
    }
  }
});



// // PROMO RIGHT

// const promoMainRight = document.getElementById("promoright");
// const promoTextMainRight = document.getElementById("promoTextRight");
// const videoPromoMainRight = document.getElementById("promovideoright");
// const promoBoxContainerRight = document.getElementById("promo-container-right");
// // const tlPromoLeft = gsap.timeline({
// //   // repeat: -1,
// //   // yoyo: true,
// //   // repeatDelay: 1,
// //   defaults: { duration: 1, ease: "sine.inOut" }
// // });
// const promoRightGroup = document.getElementById("promo-group-right");
// // const textLeftGroup = document.getElementById("text-group-left");

// const promoRight = nodecg.Replicant("promoright");
// promoRight.on("change", (newVal, oldVal) => {
//   console.log(
//     "RTL: PROMO RIGHT: newVal is: ",
//     newVal,
//     " and old value is: ",
//     oldVal
//   );

//   const tlPromoRight = gsap
//     .timeline({
//       paused: true,
//       // repeat: -1,
//       // yoyo: true,
//       // repeatDelay: 1,
//       // defaults: { duration: 1, ease: "sine.inOut" }
//     })
//     .add("promoStart")
//     // .call(() => {
//     //   // console.log("Doing video!")
//     //   // videoBoxMainLeft.src = newVal.src;
//     //   console.log("text overlay width is: ", promoTextMainLeft.clientWidth)
//     //  })
//     // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
//     .set("#promoright", { yPercent: 150 })
//     // .set('#promoOverlayText', { width: 0 })
//     .to("#promoright", { yPercent: 0 }, 0, "boxIn")
//     // .from('#promoOverlayText', { width: 0 }, 0.1)
//     // .to("#text-group-left", { x: 200 }, 0, "textGroupIn")
//     .add("promoMiddle")
//     // .to('#promoOverlayText', { width: 0 }, 1)
//     .to("#promoright", { yPercent: 150 }, 1.5, "boxOut")
//     // .to("#text-group-left", { x: 0 }, 1, "textGroupOut")
//     .set("#promoright", { yPercent: 150, x: 3 })
//     // .set('#promoOverlayText', { width: 0 })
//     // .set('#text-group-left', { x: 0 })
//     .call(() => {
//       promoMainRight.src = "";
//       // promoTextMainRight.innerHTML = "";
//     })
//     .add("promoEnd");

//   const tlVideoPromoRight = gsap
//     .timeline({
//       paused: true,
//       // repeat: -1,
//       // yoyo: true,
//       // repeatDelay: 1,
//       // defaults: { duration: 1, ease: "sine.inOut" }
//     })
//     .add("promoVideoStart")
//     // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
//     .set("#promovideoright", { yPercent: 150 })
//     // .set('#promoOverlayText', { width: 0 })
//     // .set('#promoText', { xPercent: -200 })
//     .to("#promovideoright", { yPercent: 0 }, 0)
//     // .to('#promoOverlayText', { width: 0 }, 0.1)
//     // .to('#promoText', { xPercent: 0 }, 0.5)

//     // .to("#text-group-left", { x: 200 }, 0, "videoTextGroupIn")
//     .add("promoVideoMiddle")
//     // .to('#promoOverlayText', { width: 0 }, 1)
//     .to("#promovideoright", { yPercent: 150 }, 1.5)

//     // .to('#promoText', { xPercent: -200 }, 1.2)
//     // .to("#text-group-left", { x: 0 }, 1, "videoTextGroupOut")
//     .set("#promovideoright", { yPercent: 150 })
//     // .set('#promoOverlayText', { width: 0 })
//     // .set('#promoText', { xPercent: -200 })
//     // .set('#text-group-left', { x: 0 })
//     .call(() => {
//       videoPromoMainRight.src = "";
//       // promoTextMainRight.innerHTML = "";
//       //  promoTextMainLeft.innerHTML = "";
//     })
//     .add("promoVideoEnd");

//   //               videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';

//   //                    tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
//   // setTimeout(function(){
//   //   console.log("doing out!")
//   //   tlVideoPromoLeft.tweenFromTo(1, 5)
//   //  }, 5000);

//   //  videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';
//   //  tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
//   //  promoMainLeft.src = "https://picsum.photos/500/300";
//   // //  promoTextMainLeft.innerHTML = 'newVal.text'
//   //  tlPromoLeft.tweenFromTo('promoStart', 'promoMiddle')

//   // setTimeout(function(){
//   // console.log("doing out!")
//   // tlPromoLeft.tweenFromTo(1, 5)
//   // // tlVideoPromoLeft.tweenFromTo(1, 5)
//   // }, 5000);

//   // IN
//   //           if(newVal.type && newVal.type ==='image/png' || newVal.type && newVal.type === 'image/jpeg') {
//   //   boxMainLeft.src = newVal.src;
//   //   tlBoxLeft.tweenFromTo('boxStart', 'boxMiddle')
//   // } else if(newVal.type && newVal.type ==='video/mp4') {
//   //   console.log("found video!")
//   //   videoBoxMainLeft.src = newVal.src;
//   //   tlVideoBoxLeft.tweenFromTo('videoBoxStart', 'videoBoxMiddle')
//   // } else {
//   //   console.log("unknown asset type!")
//   // }

//   // newVal.action = "In"

//   //  tlTest1.play('boxStart')

//   if (newVal.action === "In") {
//     if (
//       (newVal.type && newVal.type === "image/png") ||
//       (newVal.type && newVal.type === "image/jpeg")
//     ) {
//       promoMainRight.src = newVal.src;
//       // promoTextMainRight.innerText = newVal.text;
//       tlPromoRight.tweenFromTo("promoStart", "promoMiddle",  {
//         immediateRender: false,
//       });
//     } else if (newVal.type && newVal.type === "video/mp4") {
//       // console.log("found video!")
//       videoPromoMainRight.src = newVal.src;
//       // promoTextMainRight.innerText = newVal.text;
//       tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
//         immediateRender: false,
//       });
//     } else {
//       console.log("unknown asset type!");
//     }
//   } else if (newVal.action === "Change") {
//     if (
//       (newVal.type && newVal.type === "image/png") ||
//       (newVal.type && newVal.type === "image/jpeg")
//     ) {
//       if(oldVal && oldVal.type && oldVal.type === "image/png" || oldVal && oldVal.type && oldVal.type === "image/jpeg") {
//         tlPromoRight.tweenFromTo(0, "promoEnd");
//         setTimeout(function () {
//           promoMainRight.src = newVal.src;
//           // promoTextMainRight.innerText = newVal.text;
//           tlPromoRight.tweenFromTo("promoStart", "promoMiddle",  {
//             immediateRender: false,
//           });
//         }, 700);
//       } else if(oldVal && oldVal.type && oldVal.type === "video/mp4") {
//         tlVideoPromoRight.tweenFromTo(0, "promoVideoEnd");
//         setTimeout(function () {
//           videoPromoMainRight.src = '';
//           promoMainRight.src = newVal.src;
//           // promoTextMainRight.innerText = newVal.text;
//           tlPromoRight.tweenFromTo("promoStart", "promoMiddle",  {
//             immediateRender: false,
//           });
//         }, 700);
//       }
      
    
//     } else if (newVal.type && newVal.type === "video/mp4") {

//       if(oldVal && oldVal.type && oldVal.type === "image/png" || oldVal && oldVal.type && oldVal.type === "image/jpeg") {
//         tlPromoRight.tweenFromTo(0, "promoEnd");
//         setTimeout(function () {
//           promoMainRight.src = '';
//                     videoPromoMainRight.src = newVal.src;
//           // promoTextMainRight.innerText = newVal.text;
//           tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
//             immediateRender: false,
//           });
//         }, 700);
//       } else if(oldVal && oldVal.type && oldVal.type === "video/mp4") {
//         tlVideoPromoRight.tweenFromTo(0, "promoVideoEnd");
//         setTimeout(function () {
//           videoPromoMainRight.src = newVal.src;
//           // promoTextMainRight.innerText = newVal.text;
//           tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle",  {
//             immediateRender: false,
//           });
//         }, 700);
//       }
//       // console.log("found video!")
     
//     } else {
//       console.log("unknown asset type!");
//     }
//   } else if (newVal.action === "Out") {
//     if (
//       (newVal.type && newVal.type === "image/png") ||
//       (newVal.type && newVal.type === "image/jpeg")
//     ) {
//       tlPromoRight.tweenFromTo(1, "promoEnd");
//     } else if (newVal.type && newVal.type === "video/mp4") {
//       // console.log("found video!")
//       tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
//     } else {
//       console.log("unknown asset type!");
//     }
//   }
// });

// const promoMainRight = document.getElementById("promoright");
// const promoTextMainRight = document.getElementById("promoTextRight");
// // const promoTextMainRight = document.getElementById("promoTextRight");
// const videoPromoMainRight = document.getElementById("promovideoright");
// const promoBoxContainerRight = document.getElementById("promo-container-right");
// // const tlPromoLeft = gsap.timeline({
// //   // repeat: -1,
// //   // yoyo: true,
// //   // repeatDelay: 1,
// //   defaults: { duration: 1, ease: "sine.inOut" }
// // });
// var tlPromoRightActive = false
// var tlVideoPromoRightActive = false
// const tlPromoRight = gsap
//     .timeline({
//       paused: true,
//       // repeat: -1,
//       // yoyo: true,
//       // repeatDelay: 1,
//       // defaults: { duration: 1, ease: "sine.inOut" }
//     })
//     .add("promoStart")
//     // .call(() => {
//     //   // console.log("Doing video!")
//     //   // videoBoxMainLeft.src = newVal.src;
//     //   console.log("text overlay width is: ", promoTextMainLeft.clientWidth)
//     //  })
//     // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
//     // .set("#promoright", { yPercent: 150, width: 0 })
//     // .set('#promoOverlayText', { width: 0 })
//     .to("#promoright", { yPercent: 0 }, 0, "boxIn")
//     // .from('#promoOverlayText', { width: 0 }, 0.1)
//     // .to("#text-group-left", { x: 200 }, 0, "textGroupIn")
//     .add("promoMiddle")
//     // .to('#promoOverlayText', { width: 0 }, 1)
//     .to("#promoright", { yPercent: 100 }, 1.5, "boxOut")
//     // .to("#text-group-left", { x: 0 }, 1, "textGroupOut")
//     .set("#promoright", { yPercent: 150, x: 3, width: 0 })
//     // .set('#promoOverlayText', { width: 0 })
//     // .set('#text-group-left', { x: 0 })
//     .call(() => {
//       // promoRight.src = "";
//       promoTextMainRight.innerHTML = "";
//     })
//     .add("promoEnd");

//   const tlVideoPromoRight = gsap
//     .timeline({
//       paused: true,
//       // repeat: -1,
//       // yoyo: true,
//       // repeatDelay: 1,
//       // defaults: { duration: 1, ease: "sine.inOut" }
//     })
//     .add("promoVideoStart")
//     // .call(() => { promoTextMainLeft.innerHTML = newVal.text; })
//     .set("#promovideoright", { yPercent: 150, width: "100%" })
//     // .set('#promoOverlayTextRight', { width: 0 })
//     // .set('#promoText', { xPercent: -200 })
//     .to("#promovideoright", { yPercent: 0 }, 0)
//     // .from('#promoOverlayTextRight', { width: 0 }, 0.1)
//     // .to('#promoText', { xPercent: 0 }, 0.5)

//     // .to("#text-group-left", { x: 200 }, 0, "videoTextGroupIn")
//     .add("promoVideoMiddle")
//     // .to('#promoOverlayTextRight', { width: 0 }, 1)
//     .to("#promovideoright", { yPercent: 150 }, 1.5)

//     // .to('#promoText', { xPercent: -200 }, 1.2)
//     // .to("#text-group-left", { x: 0 }, 1, "videoTextGroupOut")
//     .set("#promovideoright", { yPercent: 150, width: 0 })
//     // .set('#promoOverlayTextRight', { width: 0 })
//     // .set('#promoText', { xPercent: -200 })
//     // .set('#text-group-left', { x: 0 })
//     .call(() => {
//       videoPromoMainRight.src = "";
//       promoTextMainRight.innerHTML = "";
//     })

//     .add("promoVideoEnd");
// const promoRightGroup = document.getElementById("promo-group-right");
// // const textLeftGroup = document.getElementById("text-group-left");

// const promoRight = nodecg.Replicant("promoright");
// promoRight.on("change", (newVal, oldVal) => {
//   console.log(
//     "LTR: PROMO RIGHT: newVal is: ",
//     newVal,
//     " and old value is: ",
//     oldVal
//   );

//   //               videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';

//   //                    tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
//   // setTimeout(function(){
//   //   console.log("doing out!")
//   //   tlVideoPromoLeft.tweenFromTo(1, 5)
//   //  }, 5000);

//   //  videoPromoMainLeft.src = 'https://www.w3schools.com/howto/rain.mp4';
//   //  tlVideoPromoLeft.tweenFromTo('promoVideoStart', 'promoVideoMiddle')
//   //  promoMainLeft.src = "https://picsum.photos/500/300";
//   // //  promoTextMainLeft.innerHTML = 'newVal.text'
//   //  tlPromoLeft.tweenFromTo('promoStart', 'promoMiddle')

//   // setTimeout(function(){
//   // console.log("doing out!")
//   // tlPromoLeft.tweenFromTo(1, 5)
//   // // tlVideoPromoLeft.tweenFromTo(1, 5)
//   // }, 5000);

//   // IN
//   //           if(newVal.type && newVal.type ==='image/png' || newVal.type && newVal.type === 'image/jpeg') {
//   //   boxMainLeft.src = newVal.src;
//   //   tlBoxLeft.tweenFromTo('boxStart', 'boxMiddle')
//   // } else if(newVal.type && newVal.type ==='video/mp4') {
//   //   console.log("found video!")
//   //   videoBoxMainLeft.src = newVal.src;
//   //   tlVideoBoxLeft.tweenFromTo('videoBoxStart', 'videoBoxMiddle')
//   // } else {
//   //   console.log("unknown asset type!")
//   // }

//   // newVal.action = "In"

//   //  tlTest1.play('boxStart')

//   if (newVal.action === "In") {
//     if (
//       (newVal.type && newVal.type === "image/png") ||
//       (newVal.type && newVal.type === "image/jpeg")
//     ) {
//       promoMainRight.src = newVal.src;
//       promoTextMainRight.innerText = newVal.text;
//       tlPromoRight.tweenFromTo("promoStart", "promoMiddle");
//       tlPromoRightActive = true
//     } else if (newVal.type && newVal.type === "video/mp4") {
//       // console.log("found video!")
//       videoPromoMainRight.src = newVal.src;
//       promoTextMainRight.innerText = newVal.text;
//       tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle");
//       tlVideoPromoRightActive = true
//     } else {
//       console.log("unknown asset type!");
//     }
//   } else if (newVal.action === "Change") {

//     if (
//       (newVal.type && newVal.type === "image/png") ||
//       (newVal.type && newVal.type === "image/jpeg")
//     ) {
//       tlPromoRight.tweenFromTo(1, "promoEnd");
//       setTimeout(function(){
//         promoMainRight.src = newVal.src;
//         promoTextMainRight.innerText = newVal.text;
//         tlPromoRight.tweenFromTo("promoStart", "promoMiddle");
//     }, 700);

//     } else if (newVal.type && newVal.type === "video/mp4") {
//       tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
//       setTimeout(function(){
//         videoPromoMainRight.src = newVal.src;
//       promoTextMainRight.innerText = newVal.text;
//       tlVideoPromoRight.tweenFromTo("promoVideoStart", "promoVideoMiddle");
//       }, 700);

//     } else {
//       console.log("unknown asset type!");
//     }

//   } else if (newVal.action === "Out") {
//     if (
//       (newVal.type && newVal.type === "image/png") ||
//       (newVal.type && newVal.type === "image/jpeg")
//     ) {
//       tlPromoRight.tweenFromTo(1, "promoEnd");
//       tlPromoRightActive = false
//     } else if (newVal.type && newVal.type === "video/mp4") {
//       // console.log("found video!")
//       tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
//       tlVideoPromoRightActive = false
//     } else {
//       console.log("unknown asset type!");
//     }
//   }
// });

const stripeMainLeft = document.getElementById("stripemainleft");
const stripeSubLeft = document.getElementById("stripesubleft");
var tlStripeLeftActive = false;

// const stripeLeftGroup = document.getElementById("stripe-group-left");
const stripeLeftTextGroup = document.getElementById("text-group-left");
const leftStripeReplicant = nodecg.Replicant("stripeleft");
var tlStripeLeftTest = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeStart")
  // .set('#text-group-left-inner', { yPercent: -100 }, 0)
 
  
  .fromTo(
    stripeLeftTextGroup,
    {
      clipPath: "inset(0px 1920px 0px 0px)",
    },
    {
      duration: 0.7,
      clipPath: `inset(0px 0px 0px 0px)`,
      ease: "power2.in",
    },
    0
  )
  // .to('#text-group-left-inner', { yPercent: 0}, 0.1)
  .add("stripeMiddle")
  .fromTo(
    stripeLeftTextGroup,
    0.7,
    {
      clipPath: `inset(0px 0px 0px 0px)`,
    },
    {
      clipPath: "inset(0px 1920px 0px 0px)",
      ease: "power2.out",
    }
  )
  .call(() => {
    stripeMainLeft.innerHTML = "";
    stripeSubLeft.innerHTML = "";
    stripeMainLeft.style.marginTop = '';
    stripeMainLeft.style.fontSize = '65px';
    tlStripeLeftActive = false;
  })
  .add("stripeEnd");



  var tlStripeLeftChangeMainOut = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to(
    '#text-group-left-inner',
    { yPercent: 130},
    0
  )
  .set('#text-group-left-inner', { yPercent: -100 })


  var tlStripeLeftChangeMainIn = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to('#text-group-left-inner', { yPercent: 0}, 0.71)
  .add("stripeChangeEnd")

  // console.log("newVal is: ", newVal)
  var tlStripeLeftChangeSubIn = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to( '#stripesubleft', { yPercent: 50}, 0)
  .set('#stripesubleft', { yPercent: -50 })
  .add("stripeChangeEnd")

  var tlStripeLeftChangeSubOut = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to('#stripesubleft', { yPercent: 0}, 0.71)
  .add("stripeChangeEnd")



leftStripeReplicant.on("change", (newVal, oldVal) => {
  console.log(
    "LTR: Stripe: newVal is: ",
    newVal,
    " and old value is: ",
    oldVal
  );
  var fontSize = newVal.titleSize === 'Big' ? '100px' : newVal.titleSize === 'Medium' ? '75px' : '65px'
  var marginTop = newVal.titleSize === 'Big' ? '0px' : newVal.titleSize === 'Medium' ? '15px' : '25px'

 

 
 

  if (newVal.action === "In") {
    if(newVal.sub === '') {
        
      
      stripeSubLeft.innerHTML = '';
      stripeMainLeft.innerHTML = newVal.main;
      if(newVal.titleSize === 'Small') {
        stripeMainLeft.style.fontSize = '65px';
        stripeMainLeft.style.marginTop = '25px';
      } else if (newVal.titleSize === 'Medium') {
        stripeMainLeft.style.fontSize = '75px';
        stripeMainLeft.style.marginTop = '15px';
      } else {
        stripeMainLeft.style.fontSize = '100px';
        // stripeMainLeft.style.marginTop = '0px';
      }
    
      tlStripeLeftActive = true;
      tlStripeLeftTest.tweenFromTo("stripeStart", "stripeMiddle");
    } else {
      stripeMainLeft.innerHTML = newVal.main;
      stripeSubLeft.innerHTML = newVal.sub;
      stripeMainLeft.style.fontSize = '65px';
      stripeMainLeft.style.marginTop = '';
      tlStripeLeftActive = true;
      tlStripeLeftTest.tweenFromTo("stripeStart", "stripeMiddle");
    }
  
  } else if (newVal.action === "Change") {
    
    
      



      if(oldVal && oldVal.main !== newVal.main && newVal.sub === '') {
          // console.log("change main")
          tlStripeLeftChangeMainOut.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
          setTimeout(function(){
            // console.log("Doing timeout!")
            if(newVal.sub === '') {
              console.log("sub is empty!")
        // console.log("margin top is: ", stripeMainLeft.style.marginTop)
              // document.getElementById("text-group-right").style.alignItems = "center";
              // stripeMainLeft.style.alignItems = "center";
              stripeMainLeft.innerHTML = newVal.main;
              stripeSubLeft.innerHTML = '';
              if(newVal.titleSize === 'Small') {
                stripeMainLeft.style.fontSize = '65px';
                stripeMainLeft.style.marginTop = '25px';
              } else if (newVal.titleSize === 'Medium') {
                stripeMainLeft.style.fontSize = '75px';
                stripeMainLeft.style.marginTop = '15px';
              } else {
                stripeMainLeft.style.fontSize = '100px';
                // stripeMainLeft.style.marginTop = '0px';
              }
              
           
              tlStripeLeftChangeMainIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
            } else {
              stripeMainLeft.innerHTML = newVal.main;
              stripeSubLeft.innerHTML = newVal.sub;
              stripeMainLeft.style.fontSize = '65px';
              stripeMainLeft.style.marginTop = '';
              tlStripeLeftChangeMainIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
            }
            
          }, 300);
        // }
        
      }
      else if(oldVal && oldVal.sub !== '' && newVal.sub !== '' && newVal.main !== '' && oldVal.sub !== newVal.sub && oldVal.main === newVal.main) {
        tlStripeLeftChangeSubIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
          setTimeout(function(){
            stripeSubLeft.innerHTML = newVal.sub;
            tlStripeLeftChangeSubOut.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
 }, 300);
       
        // console.log("change only sub - secondary")
      }
      else if(oldVal && oldVal.sub === '' && newVal.sub !== '' && oldVal.main === newVal.main) {

        var tlStripeLeftChangeOpenSub = gsap
        .timeline({
          paused: true,
          // repeat: -1,
          // yoyo: true,
          // repeatDelay: 1,
          // defaults: { duration: 1, ease: "sine.inOut" }
        })
        .add("stripeChangeStart")
        .set('#stripesubleft', { yPercent: -100 }, 0)
        .fromTo(
          '#stripemainleft',
          { /*scaleX: '100%', scaleY: '100%',*/ marginTop: stripeMainLeft.style.marginTop, fontSize: stripeMainLeft.style.fontSize},
          { /*scaleX: '80%', scaleY: '80%',*/ marginTop: '', marginLeft: '', fontSize: '65px', duration: 0.3, ease: "Power1.easeOut"}
        )
        
        
        .call(() => {
              stripeSubLeft.innerHTML = newVal.sub;
         }, null, 0.2)
        .to('#stripesubleft', { yPercent: 0}, 0.2)
        .add("stripeChangeEnd")

        tlStripeLeftChangeOpenSub.tweenTo("stripeChangeEnd");
     
      
        // console.log("open sub")
      }
      else if(oldVal && oldVal.main !== newVal.main && oldVal.sub !== '') {
        // console.log("change both")
    

        tlStripeLeftChangeMainOut.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
        setTimeout(function(){
       
            stripeMainLeft.innerHTML = newVal.main;
            stripeSubLeft.innerHTML = newVal.sub;
          
            tlStripeLeftChangeMainIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
        
          
        }, 300);
  
      }
      else if(oldVal && oldVal.sub !== '' && newVal.sub === '' && newVal.main !== '' && oldVal.sub !== newVal.sub && oldVal.main === newVal.main){
console.log("size up title!")
var tlStripeLeftChangeCloseSub = gsap
.timeline({
  paused: true,
  // repeat: -1,
  // yoyo: true,
  // repeatDelay: 1,
  // defaults: { duration: 1, ease: "sine.inOut" }
})
.add("stripeChangeStart")
.to( '#stripesubleft', { yPercent: 50}, 0)
.set('#stripesubleft', { yPercent: -50 })
.fromTo(
  '#stripemainleft',
  { /*scaleX: '80%', scaleY: '80%',*/ marginTop: '', marginLeft: '', fontSize: '65px'},
  { /*scaleX: '100%', scaleY: '100%',*/ marginTop: marginTop, fontSize: fontSize, duration: 0.3, ease: "Power1.easeOut"},
  
)
// .set('#stripesubright', { yPercent: -100 }, 0)
// .fromTo(
//   '#stripemainright',
//   { /*scaleX: '100%', scaleY: '100%',*/ marginTop: stripeMainRight.style.marginTop, fontSize: stripeMainRight.style.fontSize},
//   { /*scaleX: '80%', scaleY: '80%',*/ marginTop: '', marginLeft: '', fontSize: '65px', transformOrigin:"0% 0%", duration: 0.3, ease: "Power1.easeOut"}
// )


// .call(() => {
//       stripeSubRight.innerHTML = '';
//  }, null, 0.2)
// .to('#stripesubright', { yPercent: 0}, 0.2)
.add("stripeChangeEnd")
tlStripeLeftChangeCloseSub.tweenTo("stripeChangeEnd");
      }
    // }
   
    
    
    
  } else if (newVal.action === "Out") {
// console.log("doing out!")
  
      stripeMainLeft.innerHTML = newVal.main;
      stripeSubLeft.innerHTML = newVal.sub;
     
      tlStripeLeftTest.tweenFromTo('stripeMiddle', "stripeEnd");
    tlStripeLeftActive = false;
  

   
  }

 
});

var tlLeftCounterActive = false;
var tlLeftCounter = gsap.timeline();
// Counter
const counterMainLeft = document.getElementById("counterleft");
const counterTextLeft = document.getElementById("countertextleft");
const counterAmountLeft = document.getElementById("counteramountleft");

const leftCounter = nodecg.Replicant("counterleft");
leftCounter.on("change", (newVal, oldVal) => {
  // console.log(
  //   "LTR: Counter: newVal is: ",
  //   newVal,
  //   " and old value is: ",
  //   oldVal
  // );
  counterTextLeft.innerHTML = newVal.text;
  counterAmountLeft.innerHTML = newVal.amount;

  if (newVal.action === "In") {
    // console.log("in happend for counter!")
    // const inCounterLeft =
    tlLeftCounter.from([counterMainLeft, counterTextLeft, counterAmountLeft], {
      width: 0,
      ease: "Power1.easeIn",
    });
    tlLeftCounterActive = true;
    // inCounterLeft;
  } else if (newVal.action === "Change") {
    console.log("Change happend for counter!");
    // console.log("Out happend for super!")
    // tlLeftCounter
    // .call(() => {
    //   counterTextLeft.innerHTML = newVal.text;
    //   counterAmountLeft.innerHTML = newVal.amount;
    // })
    // .set([counterMainLeft, counterTextLeft, counterAmountLeft], {
    //   width: "",
    // });
  } else {
    // console.log("Out happend for counter!")
    tlLeftCounter
      .to([counterMainLeft, counterTextLeft, counterAmountLeft], {
        width: 0,
        ease: "Power1.easeOut",
      })
      .set([counterMainLeft, counterTextLeft, counterAmountLeft], {
        width: "",
        repeat: -1,
      })
      .call(() => {
        counterTextLeft.innerHTML = "";
        counterAmountLeft.innerHTML = "";
        tlLeftCounterActive = false;
      });
  }
});

// TICKER AND LIVE

// NOT GETTING ALL DATA PROPERLY
// const bottomGroup = document.getElementById("bottom-group-left");

// const tickerSub = document.getElementById("tickersub");
// var tickerWidth = 0;
// var liveWidth = 0;
// LIVE
// NOT GETTING ALL DATA PROPERLY
// const liveGroup = document.getElementById("livegroup");
// console.log("width is: ",)
// const liveMainLeft = document.getElementById("livemainleft");
// console.log("live main is: ", liveMain)
// const liveSubLeft = document.getElementById("livesubleft");
const liveMainLeft = document.getElementById("livemainleft");
const liveSubLeft = document.getElementById("livesubleft");
// const valOne = document.getElementById("livemainleft");
// const valTwo = document.getElementById("livesubleft");
const valThree = document.getElementById("live-group");
var tlLiveLeftActive = false;
// var tlTest1 = gsap.timeline();
// var tlTest2 = gsap.timeline();
const tlLiveLeftTestIn = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    defaults: { duration: 0.7/*, ease: "sine.inOut" */}
  })
  .addLabel("start")
  .set(['#livemainleft', '#livesubleft', valThree], {  width: "",
  padding: "0px 0px 0px 0px" })
         .fromTo(
          valThree,
          {
                      // width: valOne.clientWidth,
                      // left: valOne.clientWidth,
                      width: 0,
                      padding: "0px 0px 0px 0px",
                    },
                    {
                      padding: "0px 5px 0px 5px",
                      // margin: 0,
                      width: 'auto',
                      ease: "Power1.easeIn",
                    },
          0
        )
        .fromTo(
          '#livesubleft',
          {
                      // width: valOne.clientWidth,
                      // left: valOne.clientWidth,
                      marginLeft: '',
                      // padding: "0px 0px 0px 0px",
                    },
                    {
                     marginLeft: '4px'
                    },
          0
        )
     
  .addLabel("startEnd")

  const tlLiveLeftTestOut = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    defaults: { duration: 0.7/*, ease: "sine.inOut" */}
  })
  .addLabel("start")
        .fromTo(
          ['#livemainleft', '#livesubleft', valThree],
         
                    {
                      padding: "0px 5px 0px 5px",
                      width: 'auto'
                      
                    },
                    {
                      width: 0,
                      marginLeft: "",
                      padding: "0px 0px 0px 0px"
                    },
          0
        )
         .call(() => {
          liveMainLeft.innerHTML = "";
          liveSubLeft.innerText = "";
          tlLiveLeftActive = false;
                     }, null,  0.7)
  .addLabel("startEnd")

  const tlLiveLeftTestSubIn = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    defaults: { duration: 0.7/*, ease: "sine.inOut" */}
  })
  .addLabel("start")
  // .set('#livesubleft', {  width: "",
  // padding: "0px 0px 0px 0px" })
         .fromTo(
          '#livesubleft',
          {
                      // width: valOne.clientWidth,
                      // left: valOne.clientWidth,
                      width: 0,
                      padding: "0px 0px 0px 0px",
                    },
                    {
                      padding: "0px 5px 0px 5px",
                      // margin: 0,
                      width: 'auto',
                      ease: "Power1.easeIn",
                    },
          0
        )
  .addLabel("startEnd")

  const tlLiveLeftTestSubOut = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    defaults: { duration: 0.7/*, ease: "sine.inOut" */}
  })
  .addLabel("start")
        .fromTo(
          ['#livesubleft'],
         
                    {
                      padding: "0px 5px 0px 5px",
                      width: 'auto'
                      
                    },
                    {
                      width: 0,
                      marginLeft: '0px',
                      padding: "0px 0px 0px 0px"
                    },
          0
        )
         .call(() => {
          // liveMainLeft.innerHTML = "";
          liveSubLeft.innerText = "";
          // tlLiveLeftActive = false;
                     }, null,  0.7)
  .addLabel("startEnd")
  
  
const leftLiveReplicant = nodecg.Replicant("live");
leftLiveReplicant.on("change", (newVal, oldVal) => {
  console.log("Live: newVal is: ", newVal, " and old value is: ", oldVal);
  // console.log("")
 
 


if (newVal.action === "In") {
//   liveMainLeft.innerHTML = "Live";
// liveSubLeft.innerHTML = newVal.sub;
//   // liveSubLeft.innerText = newVal.sub;
  
// console.log("doing in!")
tlLiveLeftTestIn.tweenFromTo('start', 'startEnd');

liveMainLeft.innerHTML = newVal.main;
  liveSubLeft.innerText = newVal.sub;
  valThree.style.background = newVal.color
  liveMainLeft.style.background = newVal.color
  liveSubLeft.style.background = newVal.color
  tlLiveLeftActive = true;
// //   // console.log("valTwo client width is: ", valTwo.clientWidth)
} else if (newVal.action === "Change") {
  // console.log("do change!")
  if(oldVal && oldVal.sub !== newVal.sub) {
    // console.log("sub is not the same!")
    tlLiveLeftTestSubOut.tweenFromTo('start', 'startEnd');
    setTimeout(function () {
      // liveMainLeft.innerHTML = 'Changed';
    liveSubLeft.innerText = newVal.sub;
    valThree.style.background = newVal.color
    liveMainLeft.style.background = newVal.color
    liveSubLeft.style.background = newVal.color
      // promoTextMainLeft.innerText = newVal.text;
  
      tlLiveLeftTestSubIn.tweenFromTo('start', 'startEnd');
    }, 1000);

  } else if (oldVal && oldVal.sub !== newVal.sub && oldVal.main !== newVal.main) {
    // console.log("doing else on live")
    tlLiveLeftTestOut.tweenFromTo('start', 'startEnd');
    setTimeout(function () {
      liveMainLeft.innerHTML = newVal.main;
    liveSubLeft.innerText = newVal.sub;
    valThree.style.background = newVal.color
    liveMainLeft.style.background = newVal.color
    liveSubLeft.style.background = newVal.color
      // promoTextMainLeft.innerText = newVal.text;
  
      tlLiveLeftTestIn.tweenFromTo('start', 'startEnd');
    }, 800);
  
  }
  


} else {
  // console.log("do out!")
  // tlLiveLeftTestIn.tweenFromTo('startEnd', 'start');
  tlLiveLeftTestOut.tweenFromTo('start', 'startEnd');
//   setTimeout(function () {
//   console.log("doing timeout")
//   liveMainLeft.innerHTML = "";
//   liveSubLeft.innerText = "";
// }, 1000);
// //   // liveMainLeft.innerHTML = "Live";
// //   // liveSubLeft.innerText = newVal.sub;
// //   // tlLiveLeftActive = true;



}
});




// gsap.timeline();
const tickerMainLeft = document.getElementById("tickermainleft");
const tickerSubLeft = document.getElementById("tickersubleft");
var tlTickerLeftActive = false;
var tlTickerLeft = gsap
.timeline({
  paused: true,
  // repeat: -1,
  // yoyo: true,
  // repeatDelay: 1,
  // defaults: { duration: 1, ease: "sine.inOut" }
})
.add("tickerStart")
.set([".ticker-group"], { clipPath: "inset(0px 1920px 0px 0px)" })
.fromTo(
  '.ticker-group',
  {
    clipPath: "inset(0px 1920px 0px 0px)",
  },
  {
    duration: 0.7,
    clipPath: `inset(0px 0px 0px 0px)`,
    padding: '0 8px 0 5px',
    ease: "power2.in",
  },
  0
)
// .fromTo(
//   '.ticker-text-main-left',
//   {
//     // clipPath: "inset(0px 1920px 0px 0px)",
//     padding: '0 0 0 0'
//   },
//   {
//     // duration: 0.7,
//     // clipPath: `inset(0px 0px 0px 0px)`,
//     padding: '0 5px 0 0',
//     // ease: "power2.in",
//   },
//   0
// )
// .to(
//   '.ticker-group',
//   // {
//   //   clipPath: "inset(0px 1920px 0px 0px)",
//   // },
//   {
//     duration: 0.7,
//     clipPath: "inset(0px 1920px 0px 0px)",
//     ease: "power2.in",
//   }
// )
.add("tickerMiddle")

.add("tickerChangeEnd")
  .fromTo(
    '.ticker-group',
    0.7,
    {
      clipPath: `inset(0px 0px 0px 0px)`,
    },
    {
      clipPath: "inset(0px 1920px 0px 0px)",
      ease: "power2.out",
    }
  )
  .set([".ticker-group"], { clipPath: "inset(0px 1920px 0px 0px)" })
  .call(() => {
    tickerMainLeft.innerHTML = "";
    tickerSubLeft.innerHTML = "";
    tlTickerLeftActive = false
    // stripeSubLeft.innerHTML = "";
    // tlStripeLeftActive = false;
  })
  .add("tickerEnd");
const leftTickerReplicant = nodecg.Replicant("tickerleft");
leftTickerReplicant.on("change", (newVal, oldVal) => {
  console.log(
    "LTR: Ticker: newVal is: ",
    newVal,
    " and old value is: ",
    oldVal
  );

  var tlTickerLeftChange = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("tickerMiddle")
  .to('.ticker-inner-group-left', 0.7, { yPercent: 100 })
  .call(() => {
      tickerMainLeft.innerHTML = newVal.main;
      tickerSubLeft.innerHTML = newVal.sub;
    // tlTickerLeftActive = false;
  })
  .set('.ticker-inner-group-left', { yPercent: -100 })
  .to('.ticker-inner-group-left', 0.7, { yPercent: 0 })
  .add("tickerChangeEnd")
   
  var tlTickerLeftMainChange = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("tickerMiddle")
  .to('#tickermainleft', 0.7, { yPercent: 100 })
    .call(() => {
      tickerMainLeft.innerHTML = newVal.main;
      // tickerSubRight.innerHTML = newVal.sub;
      // tlTickerLeftActive = false;
  })
  .set('#tickermainleft', { yPercent: -100 })
  .to('#tickermainleft', 0.7, { yPercent: 0 })
  .add("tickerChangeEnd")

  var tlTickerLeftSubChange = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("tickerMiddle")
  .to('#tickersubleft', 0.7, { yPercent: 100 })
    .call(() => {
      // tickerMainRight.innerHTML = newVal.main;
      tickerSubLeft.innerHTML = newVal.sub;
      // tlTickerLeftActive = false;
  })
  .set('#tickersubleft', { yPercent: -100 })
  .to('#tickersubleft', 0.7, { yPercent: 0 })
  .add("tickerChangeEnd")
  // const valThree = document.getElementById("value-three");
    
  // tlTickerLeft.tweenFromTo('tickerStart', "tickerMiddle");


  if (newVal.action === "In") {
    // console.log("In Happend")
    tickerMainLeft.innerHTML = newVal.main;
    tickerSubLeft.innerHTML = newVal.sub;
    tlTickerLeft.tweenFromTo('tickerStart', 'tickerMiddle');
    tlTickerLeftActive = true
} else if (newVal.action === "Change") {
  // console.log("change Happend")
  // if(oldVal && oldVal.main !== newVal.main) {
  //   tlTickerLeftChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
  // }
  if(oldVal && oldVal.main !== newVal.main && oldVal.sub === newVal.sub) {
    tlTickerLeftMainChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
  } else if(oldVal && oldVal.sub !== newVal.sub && oldVal.main === newVal.main) {
    tlTickerLeftSubChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
  } else {
    tlTickerLeftChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
  }

  // tlTickerLeft.tweenFromTo(1, "promoEnd");
  // setTimeout(function () {
  //   promoMainLeft.src = newVal.src;
  //   // promoTextMainLeft.innerText = newVal.text;

  //   tlTickerLeft.tweenFromTo("promoStart", "promoMiddle", {
  //     immediateRender: false,
  //   });
  // }, 700);



} else {
  // console.log("Out Happend")
  tlTickerLeft.tweenFromTo('tickerChangeEnd', 'tickerEnd');
  // tickerMainLeft.innerHTML = "";
  // tlTickerLeftActive = false;
}




  // if (newVal.action === "In") {
  //   // IN
  //   // console.log("in happend for Ticker!")
  //   tickerMainLeft.innerHTML = newVal.main;
  //   tlTickerLeft.fromTo(
  //     '.ticker-text-left',
  //     {
  //       clipPath: "inset(0px 1920px 0px 0px)",
  //     },
  //     {
  //       duration: 0.7,
  //       clipPath: "inset(0px 0px 0px 0px)",
  //       ease: "power2.in",
  //     }
  //   );
  //   tlTickerLeftActive = true;
  // } else if (newVal.action === "Change") {
  //   // CHANGE
  //   // console.log("Change happend for Ticker!")
  //   // tlTickerLeft.call(() => {
      
  //     tlTickerLeft
  //     .to(
  //       '#tickermainleft',
  //       0.7,
        
  //       {
  //         yPercent: 100,
  //       }
  //     )
  //     // tlVideoPromoLeft.tweenFromTo(1, "promoVideoEnd");
  //     // setTimeout(function () {
        
        
  //       .call(() => {
  //         tickerMainLeft.innerHTML = newVal.main;
  //       // tlTickerLeftActive = false;
  //     })
  //       .set(
  //         '#tickermainleft',
  //         {
  //           yPercent: -100
  //         }
  //       )
      
  //     .to(
  //       '#tickermainleft',
  //       0.7,
  //       {
  //         yPercent: 0
  //       }
  //     )
  //     // }, 700);
      
  //   // });
  // } else {
  //   // OUT
  //   // console.log("Out happend for Ticker!")
  //   tlTickerLeft
  //     .fromTo(
  //       '.ticker-text-left',
  //       0.7,
  //       {
  //         clipPath: "inset(0px 0px 0px 0px)",
  //       },
  //       {
  //         clipPath: "inset(0px 1920px 0px 0px)",
  //         ease: "power2.out",
  //       }
  //     )

  //     .call(() => {
  //       tickerMainLeft.innerHTML = "";
  //       tlTickerLeftActive = false;
  //     })
  //     .set('.ticker-text-left', { clipPath: "inset(0px 0px 0px 0px)" });
  // }
});

// RIGHT TO LEFT

const stripeMainRight = document.getElementById("stripemainright");
const stripeSubRight = document.getElementById("stripesubright");
var tlStripeRightActive = false;

// const stripeLeftGroup = document.getElementById("stripe-group-left");
const stripeRightTextGroup = document.getElementById("text-group-right");
const rightStripeReplicant = nodecg.Replicant("striperight");
var tlStripeRightTest = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeStart")
  // .set('#text-group-right-inner', { yPercent: -100 }, 0)
  .fromTo(
    stripeRightTextGroup,
    {
      clipPath: "inset(0px 0px 0px 1920px)",
    },
    {
      duration: 0.7,
      clipPath: `inset(0px 0px 0px 0px)`,
      ease: "power2.in",
    },
    0
  )
  
  // .to('#text-group-right-inner', { yPercent: 0}, 0)
  .add("stripeMiddle")
  .fromTo(
    stripeRightTextGroup,
    0.7,
    {
      clipPath: `inset(0px 0px 0px 0px)`,
    },
    {
      clipPath: "inset(0px 0px 0px 1920px)",
      ease: "power2.out",
    }
  )
  .call(() => {
    stripeMainRight.innerHTML = "";
    stripeSubRight.innerHTML = "";
    stripeMainRight.style.marginTop = '';
    stripeMainRight.style.fontSize = '65px';
    tlStripeRightActive = false;
  })
  .add("stripeEnd");



  var tlStripeRightChangeMainOut = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to(
    '#text-group-right-inner',
    { yPercent: 130},
    0
  )
  .set('#text-group-right-inner', { yPercent: -100 })


  var tlStripeRightChangeMainIn = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to('#text-group-right-inner', { yPercent: 0}, 0.71)
  .add("stripeChangeEnd")

  // console.log("newVal is: ", newVal)
  var tlStripeRightChangeSubIn = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to( '#stripesubright', { yPercent: 50}, 0)
  .set('#stripesubright', { yPercent: -50 })
  .add("stripeChangeEnd")

  var tlStripeRightChangeSubOut = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to('#stripesubright', { yPercent: 0}, 0.71)
  .add("stripeChangeEnd")



rightStripeReplicant.on("change", (newVal, oldVal) => {
  console.log(
    "RTL: Stripe: newVal is: ",
    newVal,
    " and old value is: ",
    oldVal
  );
  var fontSize = newVal.titleSize === 'Big' ? '100px' : newVal.titleSize === 'Medium' ? '75px' : '65px'
  var marginTop = newVal.titleSize === 'Big' ? '0px' : newVal.titleSize === 'Medium' ? '15px' : '25px'
  var tlStripeRightChangeOpenSub = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  // .set('#stripesubright', { yPercent: -100 }, 0)
  .fromTo(
    '#stripemainright',
    { /*scaleX: '100%', scaleY: '100%',*/ marginTop: stripeMainRight.style.marginTop, fontSize: stripeMainRight.style.fontSize},
    { /*scaleX: '80%', scaleY: '80%',*/ marginTop: '', marginLeft: '', fontSize: '65px', duration: 0.3, ease: "Power1.easeOut"}
  )
  
  
  .call(() => {
        stripeSubRight.innerHTML = newVal.sub;
   }, null, 0.2)
  .to('#stripesubright', { yPercent: 0}, 0.2)
  .add("stripeChangeEnd")

  var tlStripeRightChangeCloseSub = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("stripeChangeStart")
  .to( '#stripesubright', { yPercent: 50}, 0)
  .set('#stripesubright', { yPercent: -50 })
  .fromTo(
    '#stripemainright',
    { /*scaleX: '80%', scaleY: '80%',*/ marginTop: '', marginLeft: '', fontSize: '65px'},
    { /*scaleX: '100%', scaleY: '100%',*/ marginTop: marginTop, fontSize: fontSize, transformOrigin:"0% 0%", duration: 0.3, ease: "Power1.easeOut"},
    
  )
  // .set('#stripesubright', { yPercent: -100 }, 0)
  // .fromTo(
  //   '#stripemainright',
  //   { /*scaleX: '100%', scaleY: '100%',*/ marginTop: stripeMainRight.style.marginTop, fontSize: stripeMainRight.style.fontSize},
  //   { /*scaleX: '80%', scaleY: '80%',*/ marginTop: '', marginLeft: '', fontSize: '65px', transformOrigin:"0% 0%", duration: 0.3, ease: "Power1.easeOut"}
  // )
  
  
  // .call(() => {
  //       stripeSubRight.innerHTML = '';
  //  }, null, 0.2)
  // .to('#stripesubright', { yPercent: 0}, 0.2)
  .add("stripeChangeEnd")
 

  if (newVal.action === "In") {
    if(newVal.sub === '') {
        
      
      stripeSubRight.innerHTML = '';
      stripeMainRight.innerHTML = newVal.main;
      if(newVal.titleSize === 'Small') {
        stripeMainRight.style.fontSize = '65px';
        stripeMainRight.style.marginTop = '25px';
      } else if (newVal.titleSize === 'Medium') {
        stripeMainRight.style.fontSize = '75px';
        stripeMainRight.style.marginTop = '15px';
      } else {
        stripeMainRight.style.fontSize = '100px';
        // stripeMainLeft.style.marginTop = '0px';
      }
    
      tlStripeRightActive = true;
      tlStripeRightTest.tweenFromTo("stripeStart", "stripeMiddle");
    } else {
      stripeMainRight.innerHTML = newVal.main;
      stripeSubRight.innerHTML = newVal.sub;
      stripeMainRight.style.fontSize = '65px';
      stripeMainRight.style.marginTop = '';
      tlStripeRightActive = true;
      tlStripeRightTest.tweenFromTo("stripeStart", "stripeMiddle");
    }
  
  } else if (newVal.action === "Change") {
     
      if(oldVal && oldVal.main !== newVal.main && newVal.sub === '') {
          // console.log("change main")
          tlStripeRightChangeMainOut.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
          setTimeout(function(){
            // console.log("Doing timeout!")
            if(newVal.sub === '') {
              // console.log("sub is empty!")
        // console.log("margin top is: ", stripeMainLeft.style.marginTop)
              // document.getElementById("text-group-right").style.alignItems = "center";
              // stripeMainLeft.style.alignItems = "center";
              stripeMainRight.innerHTML = newVal.main;
              stripeSubRight.innerHTML = '';
              if(newVal.titleSize === 'Small') {
                stripeMainRight.style.fontSize = '65px';
                stripeMainRight.style.marginTop = '25px';
              } else if (newVal.titleSize === 'Medium') {
                stripeMainRight.style.fontSize = '75px';
                stripeMainRight.style.marginTop = '15px';
              } else {
                stripeMainRight.style.fontSize = '100px';
                // stripeMainLeft.style.marginTop = '0px';
              }
              
           
              tlStripeRightChangeMainIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
            } else {
              stripeMainRight.innerHTML = newVal.main;
              stripeSubRight.innerHTML = newVal.sub;
              stripeMainRight.style.fontSize = '65px';
              stripeMainRight.style.marginTop = '';
              tlStripeRightChangeMainIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
            }
            
          }, 300);
        // }
        
      }
       else if(oldVal && oldVal.sub !== '' && newVal.sub !== '' && newVal.main !== '' && oldVal.sub !== newVal.sub && oldVal.main === newVal.main) {
        tlStripeRightChangeSubIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
          setTimeout(function(){
            stripeSubRight.innerHTML = newVal.sub;
            tlStripeRightChangeSubOut.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
 }, 300);
       
        // console.log("change only sub - secondary")
      }
       else if(oldVal && oldVal.sub === '' && newVal.sub !== '' && oldVal.main === newVal.main) {

        

        tlStripeRightChangeOpenSub.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
     
      
        console.log("open sub")
      }
       else if(oldVal && oldVal.main !== newVal.main && oldVal.sub !== '') {
        // console.log("change both")
    

        tlStripeRightChangeMainOut.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
        setTimeout(function(){
       
            stripeMainRight.innerHTML = newVal.main;
            stripeSubRight.innerHTML = newVal.sub;
          
            tlStripeRightChangeMainIn.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
        
          
        }, 300);
  
      }
      else if(oldVal && oldVal.sub !== '' && newVal.sub === '' && newVal.main !== '' && oldVal.sub !== newVal.sub && oldVal.main === newVal.main){
        // console.log("scale back title!")
        
        tlStripeRightChangeCloseSub.tweenTo("stripeChangeEnd");
      }
    // }
   
    
    
    
  } else if (newVal.action === "Out") {
// console.log("doing out!")
  
      stripeMainRight.innerHTML = newVal.main;
      stripeSubRight.innerHTML = newVal.sub;
     
      tlStripeRightTest.tweenFromTo('stripeMiddle', "stripeEnd");
    tlStripeRightActive = false;
  

   
  }

 
});


// const stripeMainRight = document.getElementById("stripemainright");
// const stripeSubRight = document.getElementById("stripesubright");
// var tlStripeRightActive = false;
// const tlStripeRight = gsap.timeline({
//   // repeat: -1,
//   // yoyo: true,
//   // repeatDelay: 1,
//   // defaults: { duration: 1, ease: "sine.inOut" }
// });

// const stripeRightGroup = document.getElementById("stripe-group-right");
// const stripeRightTextGroup = document.getElementById("text-group-right");
// const rightStripeReplicant = nodecg.Replicant("striperight");
// var tlStripeRightTest = gsap
//   .timeline({
//     paused: true,
//     // repeat: -1,
//     // yoyo: true,
//     // repeatDelay: 1,
//     // defaults: { duration: 1, ease: "sine.inOut" }
//   })
//   .add("stripeStart")

//   .fromTo(
//     stripeRightTextGroup,
//     {
//       clipPath: "inset(0px 0px 0px 1920px)",
//     },
//     {
//       duration: 0.7,
//       clipPath: `inset(0px 0px 0px 0px)`,
//       ease: "power2.in",
//     }
//   )
//   .add("stripeMiddle")
//   .fromTo(
//     stripeRightTextGroup,
//     0.7,
//     {
//       clipPath: `inset(0px 0px 0px 0px)`,
//     },
//     {
//       clipPath: "inset(0px 0px 0px 1920px)",
//       ease: "power2.out",
//     }
//   )
//   .call(() => {
//     stripeMainRight.innerHTML = "";
//     stripeSubRight.innerHTML = "";
//     tlStripeRightActive = false;
//   })
//   .add("stripeEnd");
// rightStripeReplicant.on("change", (newVal, oldVal) => {
//   console.log(
//     "RTL: Stripe: newVal is: ",
//     newVal,
//     " and old value is: ",
//     oldVal
//   );
//   // console.log("newVal is: ", newVal)
//   const tlStripeRightChange = gsap
//   .timeline({
//     paused: true,
//     // repeat: -1,
//     // yoyo: true,
//     // repeatDelay: 1,
//     // defaults: { duration: 1, ease: "sine.inOut" }
//   })
//   .add("stripeChangeStart")
//   // .call(() => {
//   //  console.log("doing change!")
//   // })
//   .to(
//     '#text-group-right-inner',
//     { yPercent: 130},
//     0
//   )
//   .call(() => {
//     // if(newVal) {
//       if(!newVal.sub) {
//         // console.log("sub is empty!")
       
//         stripeMainRight.innerHTML = newVal.main;
//         stripeSubRight.innerHTML = '';
//         if(newVal.titleSize === 'Small') {
//           stripeMainRight.style.fontSize = '65px';
//           stripeMainRight.style.marginTop = '25px';
//         } else if (newVal.titleSize === 'Medium') {
//           stripeMainRight.style.fontSize = '75px';
//           stripeMainRight.style.marginTop = '15px';
//         } else {
//           stripeMainRight.style.fontSize = '100px';
//           stripeMainRight.style.marginTop = '0px';
//         }
        
        
//       } else {
//         stripeMainRight.innerHTML = newVal.main;
//         stripeSubRight.innerHTML = newVal.sub;
//         stripeMainRight.style.fontSize = '65px';
//         stripeMainRight.style.marginTop = '0px';
//       }
//     // }

//    }, null, 0.7)
//   .set('#text-group-right-inner', { yPercent: -100 })
//   .to(
//     '#text-group-right-inner',
//     { yPercent: 0}, 0.71
//   )
//   .add("stripeChangeEnd")

//   if (newVal.action === "In") {
//     if(!newVal.sub) {
//       // console.log("sub is empty!")
     
//       stripeMainRight.innerHTML = newVal.main;
//       if(newVal.titleSize === 'Small') {
//         stripeMainRight.style.fontSize = '65px';
//         stripeMainRight.style.marginTop = '25px';
//       } else if (newVal.titleSize === 'Medium') {
//         stripeMainRight.style.fontSize = '75px';
//         stripeMainRight.style.marginTop = '15px';
//       } else {
//         stripeMainRight.style.fontSize = '100px';
//         stripeMainRight.style.marginTop = '0px';
//       }
      
      
//       tlStripeRightActive = true;
//       tlStripeRightTest.tweenFromTo("stripeStart", "stripeMiddle");
//     } else {
//       stripeMainRight.innerHTML = newVal.main;
//       stripeSubRight.innerHTML = newVal.sub;
//       stripeMainRight.style.fontSize = '65px';
//       stripeMainRight.style.marginTop = '0px';
//       tlStripeRightActive = true;
//       tlStripeRightTest.tweenFromTo("stripeStart", "stripeMiddle");
//     }
  
//   } else if (newVal.action === "Change") {
//     if(oldVal && oldVal.main !== newVal.main) {
//       tlStripeRightChange.tweenFromTo("stripeChangeStart", "stripeChangeEnd");
//     }
    
    
    
//   } else if (newVal.action === "Out") {

//     if(!newVal.sub) {
//       stripeMainRight.innerHTML = newVal.main;
//       if(newVal.titleSize === 'Small') {
//         stripeMainRight.style.fontSize = '65px';
//         stripeMainRight.style.marginTop = '25px';
//       } else if (newVal.titleSize === 'Medium') {
//         stripeMainRight.style.fontSize = '75px';
//         stripeMainRight.style.marginTop = '15px';
//       } else {
//         stripeMainRight.style.fontSize = '100px';
//         stripeMainRight.style.marginTop = '0px';
//       }
      
      
//       tlStripeRightTest.tweenFromTo('stripeMiddle', "stripeEnd");
//     } else {
//       stripeMainRight.innerHTML = newVal.main;
//       stripeSubRight.innerHTML = newVal.sub;
//       stripeMainRight.style.fontSize = '65px';
//       stripeMainRight.style.marginTop = '0px';
//       tlStripeRightTest.tweenFromTo('stripeMiddle', "stripeEnd");
//     }

   
//   }
// });

var tlRightCounterActive = false;
var tlRightCounter = gsap.timeline();
// Counter
const counterMainRight = document.getElementById("counterright");
const counterTextRight = document.getElementById("countertextright");
const counterAmountRight = document.getElementById("counteramountright");

const rightCounter = nodecg.Replicant("counterright");
rightCounter.on("change", (newVal, oldVal) => {
  // console.log(
  //   "RTL: Counter: newVal is: ",
  //   newVal,
  //   " and old value is: ",
  //   oldVal
  // );
  counterTextRight.innerHTML = newVal.text;
  counterAmountRight.innerHTML = newVal.amount;

  if (newVal.action === "In") {
    // console.log("in happend for counter!")
    // const inCounterRight =
    tlRightCounter.from(
      [counterMainRight, counterTextRight, counterAmountRight],
      {
        width: 0,
        ease: "Power1.easeIn",
      }
    );
    tlRightCounterActive = true;
    // inCounterRight;
  } else if (newVal.action === "Change") {
    console.log("change happend for counter!");

    // tlRightCounter
    // .call(() => {
    //   counterTextRight.innerHTML = newVal.text;
    //   counterAmountRight.innerHTML = newVal.amount;
    // })
    // .set([counterMainRight, counterTextRight, counterAmountRight], {
    //   width: "",
    // });
  } else {
    // console.log("out happend for counter!")
    tlRightCounter
      .to([counterMainRight, counterTextRight, counterAmountRight], {
        width: 0,
        ease: "Power1.easeOut",
      })
      .set([counterMainRight, counterTextRight, counterAmountRight], {
        width: "",
        repeat: -1,
      })
      .call(() => {
        counterTextRight.innerHTML = "";
        counterAmountRight.innerHTML = "";
        tlRightCounterActive = false;
      });
  }
});

// BOX
// const tlBoxLeft = gsap.timeline();
// const boxLeftGroup = document.getElementById("stripe-left-group");
const boxMainRight = document.getElementById("stripeboxright");
const videoBoxMainRight = document.getElementById("stripevideoboxright");
const boxContainerRight = document.getElementById("box-container-right");
// const boxSubLeft = document.getElementById("stripesubleft");
// const tlStripeRight = gsap.timeline({
//   // repeat: -1,
//   // yoyo: true,
//   // repeatDelay: 1,
//   // defaults: { duration: 1, ease: "sine.inOut" }
// });
// const stripeRightGroup = document.getElementById("stripe-group-right");
const textRightGroup = document.getElementById("text-group-right");
var tlBoxRightActive = false;
var tlVideoBoxRightActive = false;

const tlBoxRight = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("boxStart")
  // .call(() => { boxMainLeft.src = "https://picsum.photos/500/300"; })
  .set("#stripeboxright", { xPercent: 100 })
  .to("#stripeboxright", { xPercent: 0 }, 0)
  .to("#text-group-right", { x: -213 }, 0, "boxIn")
  .add("boxStartEnd")
  .to("#stripeboxright", { xPercent: 100 }, 3, "boxOut")
  .to("#text-group-right", { x: 0 }, 3, "textGroupOut")
  .call(() => { boxMainRight.src = ""; }, null, 4)
  .add("boxEnd");

// const tlBoxLeft = gsap
// .timeline({
//   paused: true,
//   // repeat: -1,
//   // yoyo: true,
//   // repeatDelay: 1,
//   // defaults: { duration: 1, ease: "sine.inOut" }
// })
// .add("boxStart")
// // .call(() => { boxMainLeft.src = "https://picsum.photos/500/300"; })
// .set("#stripeboxleft", { xPercent: -100 })

// .to("#stripeboxleft", { xPercent: 0 },0, "boxIn")

// .to("#text-group-left", { x: 213 },0, "textGroupIn")
// .add("boxMiddle")

// .add("boxChangeStart")
// .to("#stripeboxleft", { xPercent: -100 },1, "boxOut")
// .to("#text-group-left", { x: 0 },1, "textGroupOut")
// .call(() => {
//   // boxMainLeft.src = newVal.src;
//   console.log("changing box")
//   boxMainLeft.src = 'https://picsum.photos/200/300';
// },2)
// // .set("#stripeboxleft", { xPercent: -100 })

// // .to("#stripeboxleft", { xPercent: 0 },2, "boxIn")

// .to("#text-group-left", { x: 213 },2, "textGroupIn")
// // .set("#stripeboxleft", { xPercent: 0 },2)
// .to("#stripeboxleft", { xPercent: 0 },2, "boxIn")
// // .to("#text-group-left", { x: 213 }, 0,2, "textGroupIn")
// .add("boxChangeEnd")

// .to("#stripeboxleft", { xPercent: -100 },3, "boxOut")
// .to("#text-group-left", { x: 0 },3, "textGroupOut")
// .set("#stripeboxleft", { xPercent: -100 })
// .set("#text-group-left", { x: 0 })
// .call(() => {
//   boxMainLeft.src = "";
// }, 4)
// .add("boxEnd");

const tlVideoBoxRight = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("videoBoxStart")
  // .call(() => {
  //   // console.log("Doing video!")
  //   videoBoxMainLeft.src = newVal.src;
  //  })
  .set("#stripevideoboxright", { xPercent: 100 })

  .to("#stripevideoboxright", { xPercent: 0 }, 0, "videoBoxIn")

  .to("#text-group-right", { x: -210 }, 0, "videoTextGroupIn")
  .add("videoBoxStartEnd")
  .to("#stripevideoboxright", { xPercent: 100 }, 3, "videoBoxOut")
  .to("#text-group-right", { x: 0 }, 3, "videoTextGroupOut")
  // .set("#stripevideoboxleft", { xPercent: -100 })
  // .set("#text-group-left", { x: 0 })
  // .call(() => {
  //   videoBoxMainLeft.src = "";
  // })
  .call(() => { videoBoxMainRight.src = ""; }, null, 4)
  .add("videoBoxEnd");

const rightBox = nodecg.Replicant("boxright");
rightBox.on("change", (newVal, oldVal) => {
  // console.log("RTL: Box: newVal is: ", newVal, " and old value is: ", oldVal);

  //  tlTest1.play('boxStart')

  if (newVal.action === "In") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      boxMainRight.src = newVal.src;
      // tlBoxLeft.seek('boxIn')
      tlBoxRight.tweenFromTo("boxStart", "boxStartEnd", {
        immediateRender: false,
      });
      tlBoxLeftActive = true;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!");
      videoBoxMainRight.src = newVal.src;
      // tlBoxLeft.call(() => {
      setTimeout(function () {
        tlVideoBoxRight.tweenFromTo("videoBoxStart", "videoBoxStartEnd");
        tlVideoBoxRightActive = true;
      }, 500);
      // })
    } else {
      console.log("unknown asset type!");
    }
  } else if (newVal.action === "Change") {
    // console.log("change!")
    //     tlBoxLeft.tweenFromTo(1, 0)
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      if (
        (oldVal && oldVal.type && oldVal.type === "image/png") ||
        (oldVal && oldVal.type && oldVal.type === "image/jpeg")
      ) {
        tlBoxRight.tweenFromTo(3, "boxEnd");
        // tlBoxLeft.call(() => {
        setTimeout(function () {
          boxMainRight.src = newVal.src;
          //         console.log("changed value!")
          tlBoxRight.tweenFromTo("boxStart", "boxStartEnd", {
            immediateRender: false,
          });
        }, 500);
      } else if (oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoBoxRight.tweenFromTo(3, "videoBoxEnd");
        // tlBoxLeft.call(() => {
        setTimeout(function () {
          videoBoxMainRight.src = "";
          boxMainRight.src = newVal.src;
          //         console.log("changed value!")
          tlBoxRight.tweenFromTo("boxStart", "boxStartEnd", {
            immediateRender: false,
          });
        }, 500);
      }
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!");
      if (
        (oldVal && oldVal.type && oldVal.type === "image/png") ||
        (oldVal && oldVal.type && oldVal.type === "image/jpeg")
      ) {
        tlBoxRight.tweenFromTo(3, "boxEnd");
        // tlBoxLeft.call(() => {
        setTimeout(function () {
          boxMainRight.src = "";
          videoBoxMainRight.src = newVal.src;
          //         console.log("changed value!")
          tlVideoBoxRight.tweenFromTo(0, "videoBoxStartEnd", {
            immediateRender: false,
          });
        }, 700);
      } else if (oldVal && oldVal.type && oldVal.type === "video/mp4") {
        tlVideoBoxRight.tweenFromTo(3, "videoBoxEnd");
        // tlBoxLeft.call(() => {
        setTimeout(function () {
          videoBoxMainRight.src = newVal.src;
          //         console.log("changed value!")
          tlVideoBoxRight.tweenFromTo(0, "videoBoxStartEnd", {
            immediateRender: false,
          });
        }, 700);
      }

      //   videoBoxMainLeft.src = newVal.src;

      //   // tlBoxLeft.call(() => {
      //     setTimeout(function(){

      //     tlVideoBoxLeft.tweenFromTo("videoBoxStart", "videoBoxMiddle");
      //   tlVideoBoxLeftActive = true
      // }, 500);
      // })
    } else {
      console.log("unknown asset type!");
    }

    // })

    // .tweenFromTo('boxStart', 'boxStartEnd')
    //     // tlBoxLeft.tweenFromTo("boxChangeStart", "boxChangeEnd");
  } else if (newVal.action === "Out") {
    if (
      (newVal.type && newVal.type === "image/png") ||
      (newVal.type && newVal.type === "image/jpeg")
    ) {
      tlBoxRight.tweenFromTo(3, "boxEnd");
      tlBoxRightActive = false;
    } else if (newVal.type && newVal.type === "video/mp4") {
      // console.log("found video!");
      tlVideoBoxRight.tweenFromTo(3, "videoBoxEnd");
      tlVideoBoxRightActive = false;
    } else {
      console.log("unknown asset type!");
    }
  }

  // const tlBoxRight = gsap
  //     .timeline({
  //       paused: true,
  //       // repeat: -1,
  //       // yoyo: true,
  //       // repeatDelay: 1,
  //       // defaults: { duration: 1, ease: "sine.inOut" }
  //     })
  //     .add("boxStart")
  //     // .call(() => { boxMainLeft.src = "https://picsum.photos/500/300"; })
  //     .set("#stripeboxright", { xPercent: 100 })

  //     .to("#stripeboxright", { xPercent: 0 }, 0, "boxIn")

  //     .to("#text-group-right", { x: -213 }, 0, "textGroupIn")
  //     .add("boxMiddle")
  //     .to("#stripeboxright", { xPercent: 100 }, 1, "boxOut")
  //     .to("#text-group-right", { x: 0 }, 1, "textGroupOut")
  //     .set("#stripeboxright", { xPercent: 100 })
  //     .set("#text-group-right", { x: 0 })
  //     .call(() => {
  //       boxMainRight.src = "";
  //     })
  //     .add("boxEnd");

  //   const tlVideoBoxRight = gsap
  //     .timeline({
  //       paused: true,
  //       // repeat: -1,
  //       // yoyo: true,
  //       // repeatDelay: 1,
  //       // defaults: { duration: 1, ease: "sine.inOut" }
  //     })
  //     .add("videoBoxStart")
  //     // .call(() => {
  //     //   // console.log("Doing video!")
  //     //   videoBoxMainLeft.src = newVal.src;
  //     //  })
  //     .set("#stripevideoboxright", { xPercent: 100 })

  //     .to("#stripevideoboxright", { xPercent: 0 }, 0, "videoBoxIn")

  //     .to("#text-group-right", { x: -213 }, 0, "videoTextGroupIn")
  //     .add("videoBoxMiddle")
  //     .to("#stripevideoboxright", { xPercent: 100 }, 1, "videoBoxOut")
  //     .to("#text-group-right", { x: 0 }, 1, "videoTextGroupOut")
  //     // .set("#stripevideoboxright", { xPercent: 100 })
  //     // .set("#text-group-right", { x: 0 })
  //     // .call(() => {
  //     //   videoBoxMainRight.src = "";
  //     // })
  //     .add("videoBoxEnd");

  // const rightBox = nodecg.Replicant("boxright");
  // rightBox.on("change", (newVal, oldVal) => {
  //   console.log("RTL: Box: newVal is: ", newVal, " and old value is: ", oldVal);

  //   //  tlTest1.play('boxStart')

  //   if (newVal.action === "In") {
  //     // console.log("checking main stripe text: ", stripeMainRight.innerText)
  //     // if(!stripeMainRight.innerText) {
  //     //   console.log("stripe isn't in!")

  //     // }
  //     // tlStripeRight
  //     // .to(stripeRightGroup, {
  //     //   clipPath: "inset(0px 0px 0px 1920px)",
  //     // }, {
  //     // duration:0.7,
  //     //   clipPath: "inset(0px 0px 0px 0px)",
  //     //   ease: "power2.in",
  //     // })
  //     if (
  //       (newVal.type && newVal.type === "image/png") ||
  //       (newVal.type && newVal.type === "image/jpeg")
  //     ) {
  //       boxMainRight.src = newVal.src;
  //       tlBoxRight.tweenFromTo("boxStart", "boxMiddle");
  //       tlBoxRightActive = true
  //     } else if (newVal.type && newVal.type === "video/mp4") {
  //       // console.log("found video!")
  //       videoBoxMainRight.src = newVal.src;
  //       tlVideoBoxRight.tweenFromTo("videoBoxStart", "videoBoxMiddle");
  //       tlVideoBoxRightActive = true
  //     } else {
  //       console.log("unknown asset type!");
  //     }
  //   } else if (newVal.action === "Change") {

  //     if (
  //       (newVal.type && newVal.type === "image/png") ||
  //       (newVal.type && newVal.type === "image/jpeg")
  //     ) {
  //     tlBoxRight
  //     .tweenFromTo(1, 'boxEnd')
  //     // tlBoxLeft.call(() => {
  //             setTimeout(function(){
  //             boxMainRight.src = newVal.src;
  //     //         console.log("changed value!")
  //     tlBoxRight
  //     .tweenFromTo('boxStart', 'boxStartEnd', {immediateRender: false});

  //      }, 500);
  //     } else if (newVal.type && newVal.type === "video/mp4") {
  //       // console.log("found video!");

  //       tlVideoBoxRight.tweenFromTo(1, "videoBoxEnd");
  //     // tlBoxLeft.call(() => {
  //             setTimeout(function(){
  //               videoBoxMainLeft.src = newVal.src;
  //     //         console.log("changed value!")
  //     // tlVideoBoxLeft
  //     // .tweenFromTo('videoBoxStart', 'videoBoxStartEnd', {immediateRender: false});
  //     tlVideoBoxRight.tweenFromTo("videoBoxStart", "videoBoxMiddle", {immediateRender: false});
  //      }, 700);

  //     //   videoBoxMainLeft.src = newVal.src;

  //     //   // tlBoxLeft.call(() => {
  //     //     setTimeout(function(){

  //     //     tlVideoBoxLeft.tweenFromTo("videoBoxStart", "videoBoxMiddle");
  //     //   tlVideoBoxLeftActive = true
  //     // }, 500);
  //     // })
  //     } else {
  //       console.log("unknown asset type!");
  //     }

  //   } else if (newVal.action === "Out") {
  //     if (
  //       (newVal.type && newVal.type === "image/png") ||
  //       (newVal.type && newVal.type === "image/jpeg")
  //     ) {
  //       tlBoxRight.tweenFromTo(1, "boxEnd");
  //       tlBoxRightActive = false
  //     } else if (newVal.type && newVal.type === "video/mp4") {
  //       // console.log("found video!");
  //       tlVideoBoxRight.tweenFromTo(1, "videoBoxEnd");
  //       tlVideoBoxRightActive = false
  //     } else {
  //       console.log("unknown asset type!");
  //     }
  //   }
});

const tickerSubRight = document.getElementById("tickersubright");
const tickerMainRight = document.getElementById("tickermainright");
var tlTickerRightActive = false;
var tlTickerRight = gsap
.timeline({
  paused: true,
  // repeat: -1,
  // yoyo: true,
  // repeatDelay: 1,
  // defaults: { duration: 1, ease: "sine.inOut" }
})
.add("tickerStart")
.set([".ticker-group"], { clipPath: "inset(0px 0px 0px 1920px)", float: 'right' })
.fromTo(
  '.ticker-group',
  {
    clipPath: "inset(0px 0px 0px 1920px)",
  },
  {
    duration: 0.7,
    clipPath: `inset(0px 0px 0px 0px)`,
    ease: "power2.in",
  }
)
// .to(
//   '.ticker-group',
//   // {
//   //   clipPath: "inset(0px 1920px 0px 0px)",
//   // },
//   {
//     duration: 0.7,
//     clipPath: "inset(0px 1920px 0px 0px)",
//     ease: "power2.in",
//   }
// )
.add("tickerMiddle")

.add("tickerChangeEnd")
  .fromTo(
    '.ticker-group',
    0.7,
    {
      clipPath: `inset(0px 0px 0px 0px)`,
    },
    {
      clipPath: "inset(0px 0px 0px 1920px)",
      ease: "power2.out",
    }
  )
  .set([".ticker-group"], { clipPath: "inset(0px 0px 0px 1920px)" })
  .call(() => {
    tickerMainRight.innerHTML = "";
    tickerSubRight.innerHTML = "";
    tlTickerLeftActive = false
    // stripeSubLeft.innerHTML = "";
    // tlStripeLeftActive = false;
  })
  .add("tickerEnd");
const rightTickerReplicant = nodecg.Replicant("tickerright");
rightTickerReplicant.on("change", (newVal, oldVal) => {
  console.log(
    "RTL: Ticker: newVal is: ",
    newVal,
    " and old value is: ",
    oldVal
  );

  var tlTickerRightChange = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("tickerMiddle")
  .to('.ticker-inner-group-right', 0.7, { yPercent: 100 })
    .call(() => {
      tickerMainRight.innerHTML = newVal.main;
      tickerSubRight.innerHTML = newVal.sub;
      // tlTickerLeftActive = false;
  })
  .set('.ticker-inner-group-right', { yPercent: -100 })
  .to('.ticker-inner-group-right', 0.7, { yPercent: 0 })
  .add("tickerChangeEnd")

  var tlTickerRightMainChange = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("tickerMiddle")
  .to('#tickermainright', 0.7, { yPercent: 100 })
    .call(() => {
      tickerMainRight.innerHTML = newVal.main;
      // tickerSubRight.innerHTML = newVal.sub;
      // tlTickerLeftActive = false;
  })
  .set('#tickermainright', { yPercent: -100 })
  .to('#tickermainright', 0.7, { yPercent: 0 })
  .add("tickerChangeEnd")

  var tlTickerRightSubChange = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("tickerMiddle")
  .to('#tickersubright', 0.7, { yPercent: 100 })
    .call(() => {
      // tickerMainRight.innerHTML = newVal.main;
      tickerSubRight.innerHTML = newVal.sub;
      // tlTickerLeftActive = false;
  })
  .set('#tickersubright', { yPercent: -100 })
  .to('#tickersubright', 0.7, { yPercent: 0 })
  .add("tickerChangeEnd")
  
   

  // const valThree = document.getElementById("value-three");
    
  // tlTickerLeft.tweenFromTo('tickerStart', "tickerMiddle");


  if (newVal.action === "In") {
    // console.log("In Happend")
    tickerMainRight.innerHTML = newVal.main;
    tickerSubRight.innerHTML = newVal.sub;
    tlTickerRight.tweenFromTo('tickerStart', 'tickerMiddle');
    tlTickerRightActive = true
} else if (newVal.action === "Change") {
  // console.log("change Happend")
if(oldVal && oldVal.main !== newVal.main && oldVal.sub === newVal.sub) {
  tlTickerRightMainChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
} else if(oldVal && oldVal.sub !== newVal.sub && oldVal.main === newVal.main) {
  tlTickerRightSubChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
} else {
  tlTickerRightChange.tweenFromTo('tickerMiddle', 'tickerChangeEnd');
}
  

  // tlTickerLeft.tweenFromTo(1, "promoEnd");
  // setTimeout(function () {
  //   promoMainLeft.src = newVal.src;
  //   // promoTextMainLeft.innerText = newVal.text;

  //   tlTickerLeft.tweenFromTo("promoStart", "promoMiddle", {
  //     immediateRender: false,
  //   });
  // }, 700);



} else {
  // console.log("Out Happend")
  tlTickerRight.tweenFromTo('tickerChangeEnd', 'tickerEnd');
  // tickerMainLeft.innerHTML = "";
  // tlTickerLeftActive = false;
}
  // }
});


// ROLLER LEFT
var tlRollerLeftActive = false;
// var tlRollerLeft = gsap.timeline();
// const rollerGroup = document.getElementById("tickermainright");
const rollerheader = document.getElementById("rollerheader");

const rollerTitle1 = document.getElementById("rollertitle1");
const rollerName1 = document.getElementById("rollername1");
const rollerTitle2 = document.getElementById("rollertitle2");
const rollerName2 = document.getElementById("rollername2");
const rollerTitle3 = document.getElementById("rollertitle3");
const rollerName3 = document.getElementById("rollername3");
const rollerTitle4 = document.getElementById("rollertitle4");
const rollerName4 = document.getElementById("rollername4");

const rollerTitle5 = document.getElementById("rollertitle5");
const rollerName5 = document.getElementById("rollername5");
const rollerTitle6 = document.getElementById("rollertitle6");
const rollerName6 = document.getElementById("rollername6");
const rollerTitle7 = document.getElementById("rollertitle7");
const rollerName7 = document.getElementById("rollername7");
const rollerTitle8 = document.getElementById("rollertitle8");
const rollerName8 = document.getElementById("rollername8");

const rollerTitle9 = document.getElementById("rollertitle9");
const rollerName9 = document.getElementById("rollername9");
const rollerTitle10 = document.getElementById("rollertitle10");
const rollerName10 = document.getElementById("rollername10");
const rollerTitle11 = document.getElementById("rollertitle11");
const rollerName11 = document.getElementById("rollername11");
const rollerTitle12 = document.getElementById("rollertitle12");
const rollerName12 = document.getElementById("rollername12");

const rollerTitle13 = document.getElementById("rollertitle13");
const rollerName13 = document.getElementById("rollername13");
const rollerTitle14 = document.getElementById("rollertitle14");
const rollerName14 = document.getElementById("rollername14");
const rollerTitle15 = document.getElementById("rollertitle15");
const rollerName15 = document.getElementById("rollername15");
const rollerTitle16 = document.getElementById("rollertitle16");
const rollerName16 = document.getElementById("rollername16");

// 4 COLUMNS
const rollerCenter4LeftTitle1 = document.getElementById("rollercenter4lefttitle1");
const rollerCenter4LeftName1 = document.getElementById("rollercenter4leftname1");
// const rollerTitle2 = document.getElementById("rollertitle2");
const rollerCenter4LeftName2 = document.getElementById("rollercenter4leftname2");
// const rollerTitle3 = document.getElementById("rollertitle3");
const rollerCenter4LeftName3 = document.getElementById("rollercenter4leftname3");
// const rollerTitle4 = document.getElementById("rollertitle4");
const rollerCenter4LeftName4 = document.getElementById("rollercenter4leftname4");

const rollerCenter4LeftTitle5 = document.getElementById("rollercenter4lefttitle5");
const rollerCenter4LeftName5 = document.getElementById("rollercenter4leftname5");
// const rollerTitle6 = document.getElementById("rollertitle6");
const rollerCenter4LeftName6 = document.getElementById("rollercenter4leftname6");
// const rollerTitle7 = document.getElementById("rollertitle7");
const rollerCenter4LeftName7 = document.getElementById("rollercenter4leftname7");
// const rollerTitle8 = document.getElementById("rollertitle8");
const rollerCenter4LeftName8 = document.getElementById("rollercenter4leftname8");

const rollerCenter4LeftTitle9 = document.getElementById("rollercenter4lefttitle9");
const rollerCenter4LeftName9 = document.getElementById("rollercenter4leftname9");
// const rollerTitle10 = document.getElementById("rollertitle10");
const rollerCenter4LeftName10 = document.getElementById("rollercenter4leftname10");
// const rollerTitle11 = document.getElementById("rollertitle11");
const rollerCenter4LeftName11 = document.getElementById("rollercenter4leftname11");
// const rollerTitle12 = document.getElementById("rollertitle12");
const rollerCenter4LeftName12 = document.getElementById("rollercenter4leftname12");

const rollerCenter4LeftTitle13 = document.getElementById("rollercenter4lefttitle13");
const rollerCenter4LeftName13 = document.getElementById("rollercenter4leftname13");
// const rollerTitle14 = document.getElementById("rollertitle14");
const rollerCenter4LeftName14 = document.getElementById("rollercenter4leftname14");
// const rollerTitle15 = document.getElementById("rollertitle15");
const rollerCenter4LeftName15 = document.getElementById("rollercenter4leftname15");
// const rollerTitle16 = document.getElementById("rollertitle16");
const rollerCenter4LeftName16 = document.getElementById("rollercenter4leftname16");

// 3 COLUMNS
const rollerCenter3LeftTitle1 = document.getElementById("rollercenter3lefttitle1");
const rollerCenter3LeftName1 = document.getElementById("rollercenter3leftname1");
const rollerCenter3LeftName2 = document.getElementById("rollercenter3leftname2");
const rollerCenter3LeftName3 = document.getElementById("rollercenter3leftname3");
const rollerCenter3LeftName4 = document.getElementById("rollercenter3leftname4");
const rollerCenter3LeftTitle5 = document.getElementById("rollercenter3lefttitle5");
const rollerCenter3LeftName5 = document.getElementById("rollercenter3leftname5");
const rollerCenter3LeftName6 = document.getElementById("rollercenter3leftname6");
const rollerCenter3LeftName7 = document.getElementById("rollercenter3leftname7");
const rollerCenter3LeftName8 = document.getElementById("rollercenter3leftname8");
const rollerCenter3LeftTitle9 = document.getElementById("rollercenter3lefttitle9");
const rollerCenter3LeftName9 = document.getElementById("rollercenter3leftname9");
const rollerCenter3LeftName10 = document.getElementById("rollercenter3leftname10");
const rollerCenter3LeftName11 = document.getElementById("rollercenter3leftname11");
const rollerCenter3LeftName12 = document.getElementById("rollercenter3leftname12");


// 2 COLUMNS
const rollerCenter2LeftTitle1 = document.getElementById("rollercenter2lefttitle1");
const rollerCenter2LeftName1 = document.getElementById("rollercenter2leftname1");
const rollerCenter2LeftName2 = document.getElementById("rollercenter2leftname2");
const rollerCenter2LeftName3 = document.getElementById("rollercenter2leftname3");
const rollerCenter2LeftName4 = document.getElementById("rollercenter2leftname4");
const rollerCenter2LeftTitle5 = document.getElementById("rollercenter2lefttitle5");
const rollerCenter2LeftName5 = document.getElementById("rollercenter2leftname5");
const rollerCenter2LeftName6 = document.getElementById("rollercenter2leftname6");
const rollerCenter2LeftName7 = document.getElementById("rollercenter2leftname7");
const rollerCenter2LeftName8 = document.getElementById("rollercenter2leftname8");

// 1 COLUMN
const rollerCenter1LeftTitle1 = document.getElementById("rollercenter1lefttitle1");
const rollerCenter1LeftName1 = document.getElementById("rollercenter1leftname1");
const rollerCenter1LeftName2 = document.getElementById("rollercenter1leftname2");
const rollerCenter1LeftName3 = document.getElementById("rollercenter1leftname3");
const rollerCenter1LeftName4 = document.getElementById("rollercenter1leftname4");

const leftRoller = nodecg.Replicant("leftroller");
leftRoller.on("change", (newVal, oldVal) => {
  console.log("roller LEFT: newVal is: ", newVal, " and old value is: ", oldVal);

  const tlLeftRoller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
   .set([".roller-left-header", ".roller-left-one", ".roller-left-two", ".roller-left-three", ".roller-left-four", ".roller-left-five", ".roller-left-six", ".roller-left-seven", ".roller-left-eight", ".roller-left-nine", ".roller-left-ten", ".roller-left-eleven", ".roller-left-twelve", ".roller-left-thirteen", ".roller-left-fourteen", ".roller-left-fifteen", ".roller-left-sixteen"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
  
   .to([".roller-left-header", ".roller-left-one", ".roller-left-two", ".roller-left-three", ".roller-left-four", ".roller-left-five", ".roller-left-six", ".roller-left-seven", ".roller-left-eight", ".roller-left-nine", ".roller-left-ten", ".roller-left-eleven", ".roller-left-twelve", ".roller-left-thirteen", ".roller-left-fourteen", ".roller-left-fifteen", ".roller-left-sixteen"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")
 

  const tlCenter4Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-four-left-title-one", ".roller-center-four-left-one", ".roller-center-four-left-two", ".roller-center-four-left-three", ".roller-center-four-left-four", ".roller-center-four-left-title-two", ".roller-center-four-left-five", ".roller-center-four-left-six", ".roller-center-four-left-seven", ".roller-center-four-left-eight",".roller-center-four-left-title-three", ".roller-center-four-left-nine", ".roller-center-four-left-ten", ".roller-center-four-left-eleven", ".roller-center-four-left-twelve", ".roller-center-four-left-title-four", ".roller-center-four-left-thirteen", ".roller-center-four-left-fourteen", ".roller-center-four-left-fifteen", ".roller-center-four-left-sixteen"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-four-left-title-one", ".roller-center-four-left-one", ".roller-center-four-left-two", ".roller-center-four-left-three", ".roller-center-four-left-four", ".roller-center-four-left-title-two", ".roller-center-four-left-five", ".roller-center-four-left-six", ".roller-center-four-left-seven", ".roller-center-four-left-eight",".roller-center-four-left-title-three", ".roller-center-four-left-nine", ".roller-center-four-left-ten", ".roller-center-four-left-eleven", ".roller-center-four-left-twelve", ".roller-center-four-left-title-four", ".roller-center-four-left-thirteen", ".roller-center-four-left-fourteen", ".roller-center-four-left-fifteen", ".roller-center-four-left-sixteen"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

  const tlCenter3Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-three-left-title-one", ".roller-center-three-left-one", ".roller-center-three-left-two", ".roller-center-three-left-three", ".roller-center-three-left-four", ".roller-center-three-left-title-two", ".roller-center-three-left-five", ".roller-center-three-left-six", ".roller-center-three-left-seven", ".roller-center-three-left-eight",".roller-center-three-left-title-three", ".roller-center-three-left-nine", ".roller-center-three-left-ten", ".roller-center-three-left-eleven", ".roller-center-three-left-twelve"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-three-left-title-one", ".roller-center-three-left-one", ".roller-center-three-left-two", ".roller-center-three-left-three", ".roller-center-three-left-four", ".roller-center-three-left-title-two", ".roller-center-three-left-five", ".roller-center-three-left-six", ".roller-center-three-left-seven", ".roller-center-three-left-eight",".roller-center-three-left-title-three", ".roller-center-three-left-nine", ".roller-center-three-left-ten", ".roller-center-three-left-eleven", ".roller-center-three-left-twelve"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

        
  const tlCenter2Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-two-left-title-one", ".roller-center-two-left-one", ".roller-center-two-left-two", ".roller-center-two-left-three", ".roller-center-two-left-four", ".roller-center-two-left-title-two", ".roller-center-two-left-five", ".roller-center-two-left-six", ".roller-center-two-left-seven", ".roller-center-two-left-eight"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-two-left-title-one", ".roller-center-two-left-one", ".roller-center-two-left-two", ".roller-center-two-left-three", ".roller-center-two-left-four", ".roller-center-two-left-title-two", ".roller-center-two-left-five", ".roller-center-two-left-six", ".roller-center-two-left-seven", ".roller-center-two-left-eight"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

  const tlCenter1Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-one-left-title-one", ".roller-center-one-left-one", ".roller-center-one-left-two", ".roller-center-one-left-three", ".roller-center-one-left-four"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-one-left-title-one", ".roller-center-one-left-one", ".roller-center-one-left-two", ".roller-center-one-left-three", ".roller-center-one-left-four"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")
  var col4Count = newVal.group4.filter((text) => text.name !== "");
  var col3Count = newVal.group3.filter((text) => text.name !== "");
  var col2Count = newVal.group2.filter((text) => text.name !== "");
  console.log('counting columns: ', col4Count.length)
  console.log('counting columns: ', col3Count.length)
  console.log('counting columns: ', col2Count.length)

      if (newVal.action === "In") {
if(newVal.align === 'Center') {
  if(col4Count.length > 0) {
    console.log("In Center 4 columns!")
     // console.log(" center was in!")
  rollerCenter4LeftTitle1.innerHTML = newVal.group1[0].title
  rollerCenter4LeftName1.innerHTML = newVal.group1[0].name
 //  rollerTitle2.innerHTML = newVal.group1[1].title
  rollerCenter4LeftName2.innerHTML = newVal.group1[1].name
 //  rollerTitle3.innerHTML = newVal.group1[2].title
  rollerCenter4LeftName3.innerHTML = newVal.group1[2].name
 //  rollerTitle4.innerHTML = newVal.group1[3].title
  rollerCenter4LeftName4.innerHTML = newVal.group1[3].name
 
  rollerCenter4LeftTitle5.innerHTML = newVal.group2[0].title
  rollerCenter4LeftName5.innerHTML = newVal.group2[0].name
 //  rollerTitle6.innerHTML = newVal.group2[1].title
  rollerCenter4LeftName6.innerHTML = newVal.group2[1].name
 //  rollerTitle7.innerHTML = newVal.group2[2].title
  rollerCenter4LeftName7.innerHTML = newVal.group2[2].name
 //  rollerTitle8.innerHTML = newVal.group2[3].title
  rollerCenter4LeftName8.innerHTML = newVal.group2[3].name
 
  rollerCenter4LeftTitle9.innerHTML = newVal.group3[0].title
  rollerCenter4LeftName9.innerHTML = newVal.group3[0].name
 //  rollerTitle10.innerHTML = newVal.group3[1].title
  rollerCenter4LeftName10.innerHTML = newVal.group3[1].name
 //  rollerTitle11.innerHTML = newVal.group3[2].title
  rollerCenter4LeftName11.innerHTML = newVal.group3[2].name
 //  rollerTitle12.innerHTML = newVal.group3[3].title
  rollerCenter4LeftName12.innerHTML = newVal.group3[3].name
 
  rollerCenter4LeftTitle13.innerHTML = newVal.group4[0].title
  rollerCenter4LeftName13.innerHTML = newVal.group4[0].name
 //  rollerTitle14.innerHTML = newVal.group4[1].title
  rollerCenter4LeftName14.innerHTML = newVal.group4[1].name
 //  rollerTitle15.innerHTML = newVal.group4[2].title
  rollerCenter4LeftName15.innerHTML = newVal.group4[2].name
 //  rollerTitle16.innerHTML = newVal.group4[3].title
  rollerCenter4LeftName16.innerHTML = newVal.group4[3].name
  tlCenter4Roller.tweenFromTo("rollerStart", "rollerStartEnd");
  
  } else if(col4Count.length === 0 && col3Count.length > 0) {
    console.log("In Center 3 columns!")
     // console.log(" center was in!")
  rollerCenter3LeftTitle1.innerHTML = newVal.group1[0].title
  rollerCenter3LeftName1.innerHTML = newVal.group1[0].name
  rollerCenter3LeftName2.innerHTML = newVal.group1[1].name
  rollerCenter3LeftName3.innerHTML = newVal.group1[2].name
  rollerCenter3LeftName4.innerHTML = newVal.group1[3].name
 
  rollerCenter3LeftTitle5.innerHTML = newVal.group2[0].title
  rollerCenter3LeftName5.innerHTML = newVal.group2[0].name
  rollerCenter3LeftName6.innerHTML = newVal.group2[1].name
  rollerCenter3LeftName7.innerHTML = newVal.group2[2].name
  rollerCenter3LeftName8.innerHTML = newVal.group2[3].name
 
  rollerCenter3LeftTitle9.innerHTML = newVal.group3[0].title
  rollerCenter3LeftName9.innerHTML = newVal.group3[0].name
  rollerCenter3LeftName10.innerHTML = newVal.group3[1].name
  rollerCenter3LeftName11.innerHTML = newVal.group3[2].name
  rollerCenter3LeftName12.innerHTML = newVal.group3[3].name
  tlCenter3Roller.tweenFromTo("rollerStart", "rollerStartEnd");
  } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length > 0) {
    console.log("In Center 2 columns!")
  } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length === 0) {
    console.log("In Center 1 Column!")
  }
 
tlRollerRightActive = true

} else {
        // SETTING ROLLER
        rollerheader.innerHTML = newVal.header;
        rollerTitle1.innerHTML = newVal.group1[0].title
        rollerName1.innerHTML = newVal.group1[0].name
        rollerTitle2.innerHTML = newVal.group1[1].title
        rollerName2.innerHTML = newVal.group1[1].name
        rollerTitle3.innerHTML = newVal.group1[2].title
        rollerName3.innerHTML = newVal.group1[2].name
        rollerTitle4.innerHTML = newVal.group1[3].title
        rollerName4.innerHTML = newVal.group1[3].name
        
        rollerTitle5.innerHTML = newVal.group2[0].title
        rollerName5.innerHTML = newVal.group2[0].name
        rollerTitle6.innerHTML = newVal.group2[1].title
        rollerName6.innerHTML = newVal.group2[1].name
        rollerTitle7.innerHTML = newVal.group2[2].title
        rollerName7.innerHTML = newVal.group2[2].name
        rollerTitle8.innerHTML = newVal.group2[3].title
        rollerName8.innerHTML = newVal.group2[3].name
        
        rollerTitle9.innerHTML = newVal.group3[0].title
        rollerName9.innerHTML = newVal.group3[0].name
        rollerTitle10.innerHTML = newVal.group3[1].title
        rollerName10.innerHTML = newVal.group3[1].name
        rollerTitle11.innerHTML = newVal.group3[2].title
        rollerName11.innerHTML = newVal.group3[2].name
        rollerTitle12.innerHTML = newVal.group3[3].title
        rollerName12.innerHTML = newVal.group3[3].name
        
        rollerTitle13.innerHTML = newVal.group4[0].title
        rollerName13.innerHTML = newVal.group4[0].name
        rollerTitle14.innerHTML = newVal.group4[1].title
        rollerName14.innerHTML = newVal.group4[1].name
        rollerTitle15.innerHTML = newVal.group4[2].title
        rollerName15.innerHTML = newVal.group4[2].name
        rollerTitle16.innerHTML = newVal.group4[3].title
        rollerName16.innerHTML = newVal.group4[3].name

 tlRollerRightActive = true
 tlLeftRoller.tweenFromTo("rollerStart", "rollerStartEnd");
}
    } else if (newVal.action === "Change") {
      // console.log("do change!")
      
      tlCenter4Roller.seek("rollerStartEnd")
        // .call(() => {
          if(newVal.align === 'Center') {
            console.log("center change happend!")
            // if(oldVal && oldVal.align !== 'Center') {
            
            // } else if(oldVal && oldVal.align === 'Center') {
              if(oldVal && oldVal.align !== 'Center') {
                tlLeftRoller.set([".roller-center-four-left-title-one", ".roller-center-four-left-one", ".roller-center-four-left-two", ".roller-center-four-left-three", ".roller-center-four-left-four", ".roller-center-four-left-title-two", ".roller-center-four-left-five", ".roller-center-four-left-six", ".roller-center-four-left-seven", ".roller-center-four-left-eight",".roller-center-four-left-title-three", ".roller-center-four-left-nine", ".roller-center-four-left-ten", ".roller-center-four-left-eleven", ".roller-center-four-left-twelve", ".roller-center-four-left-title-four", ".roller-center-four-left-thirteen", ".roller-center-four-left-fourteen", ".roller-center-four-left-fifteen", ".roller-center-four-left-sixteen"], {
                yPercent: 100, opacity: 0
              })
              rollerheader.innerHTML = ''
              rollerTitle1.innerHTML = ''
              rollerName1.innerHTML = ''
              rollerTitle2.innerHTML = ''
              rollerName2.innerHTML = ''
              rollerTitle3.innerHTML = ''
              rollerName3.innerHTML = ''
              rollerTitle4.innerHTML = ''
              rollerName4.innerHTML = ''
              
              rollerTitle5.innerHTML = ''
              rollerName5.innerHTML = ''
              rollerTitle6.innerHTML = ''
              rollerName6.innerHTML = ''
              rollerTitle7.innerHTML = ''
              rollerName7.innerHTML = ''
              rollerTitle8.innerHTML = ''
              rollerName8.innerHTML = ''
              
              rollerTitle9.innerHTML = ''
              rollerName9.innerHTML = ''
              rollerTitle10.innerHTML = ''
              rollerName10.innerHTML = ''
              rollerTitle11.innerHTML = ''
              rollerName11.innerHTML = ''
              rollerTitle12.innerHTML = ''
              rollerName12.innerHTML = ''
              
              rollerTitle13.innerHTML = ''
              rollerName13.innerHTML = ''
              rollerTitle14.innerHTML = ''
              rollerName14.innerHTML = ''
              rollerTitle15.innerHTML = ''
              rollerName15.innerHTML = ''
              rollerTitle16.innerHTML = ''
              rollerName16.innerHTML = ''
            }
              rollerCenter4LeftTitle1.innerHTML = newVal.group1[0].title
              rollerCenter4LeftName1.innerHTML = newVal.group1[0].name
             //  rollerTitle2.innerHTML = newVal.group1[1].title
              rollerCenter4LeftName2.innerHTML = newVal.group1[1].name
             //  rollerTitle3.innerHTML = newVal.group1[2].title
              rollerCenter4LeftName3.innerHTML = newVal.group1[2].name
             //  rollerTitle4.innerHTML = newVal.group1[3].title
              rollerCenter4LeftName4.innerHTML = newVal.group1[3].name
             
              rollerCenter4LeftTitle5.innerHTML = newVal.group2[0].title
              rollerCenter4LeftName5.innerHTML = newVal.group2[0].name
             //  rollerTitle6.innerHTML = newVal.group2[1].title
              rollerCenter4LeftName6.innerHTML = newVal.group2[1].name
             //  rollerTitle7.innerHTML = newVal.group2[2].title
              rollerCenter4LeftName7.innerHTML = newVal.group2[2].name
             //  rollerTitle8.innerHTML = newVal.group2[3].title
              rollerCenter4LeftName8.innerHTML = newVal.group2[3].name
             
              rollerCenter4LeftTitle9.innerHTML = newVal.group3[0].title
              rollerCenter4LeftName9.innerHTML = newVal.group3[0].name
             //  rollerTitle10.innerHTML = newVal.group3[1].title
              rollerCenter4LeftName10.innerHTML = newVal.group3[1].name
             //  rollerTitle11.innerHTML = newVal.group3[2].title
              rollerCenter4LeftName11.innerHTML = newVal.group3[2].name
             //  rollerTitle12.innerHTML = newVal.group3[3].title
              rollerCenter4LeftName12.innerHTML = newVal.group3[3].name
             
              rollerCenter4LeftTitle13.innerHTML = newVal.group4[0].title
              rollerCenter4LeftName13.innerHTML = newVal.group4[0].name
             //  rollerTitle14.innerHTML = newVal.group4[1].title
              rollerCenter4LeftName14.innerHTML = newVal.group4[1].name
             //  rollerTitle15.innerHTML = newVal.group4[2].title
              rollerCenter4LeftName15.innerHTML = newVal.group4[2].name
             //  rollerTitle16.innerHTML = newVal.group4[3].title
              rollerCenter4LeftName16.innerHTML = newVal.group4[3].name
            // }
           

//  tlRightRoller
  
//    .to([".roller-center-title-one", ".roller-center-one", ".roller-center-two", ".roller-center-three", ".roller-center-four", ".roller-center-title-two", ".roller-center-five", ".roller-center-six", ".roller-center-seven", ".roller-center-eight",".roller-center-title-three", ".roller-center-nine", ".roller-center-ten", ".roller-center-eleven", ".roller-center-twelve", ".roller-center-title-four", ".roller-center-thirteen", ".roller-center-fourteen", ".roller-center-fifteen", ".roller-center-sixteen"],
//     {
//       yPercent: 0,
//       opacity: 100,
//     stagger: 0.05
//   })
          } else {
            
            if(oldVal && oldVal.align === 'Center') {
              tlLeftRoller.seek("rollerStartEnd")
              tlCenter4Roller.set([".roller-center-four-left-title-one", ".roller-center-four-left-one", ".roller-center-four-left-two", ".roller-center-four-left-three", ".roller-center-four-left-four", ".roller-center-four-left-title-two", ".roller-center-four-left-five", ".roller-center-four-left-six", ".roller-center-four-left-seven", ".roller-center-four-left-eight",".roller-center-four-left-title-three", ".roller-center-four-left-nine", ".roller-center-four-left-ten", ".roller-center-four-left-eleven", ".roller-center-four-left-twelve", ".roller-center-four-left-title-four", ".roller-center-four-left-thirteen", ".roller-center-four-left-fourteen", ".roller-center-four-left-fifteen", ".roller-center-four-left-sixteen"], {
              yPercent: 100, opacity: 0
            })
            
            rollerCenter4LeftTitle1.innerHTML = ''
            rollerCenter4LeftName1.innerHTML = ''
           //  rollerTitle2.innerHTML = newVal.group1[1].title
            rollerCenter4LeftName2.innerHTML = ''
           //  rollerTitle3.innerHTML = newVal.group1[2].title
            rollerCenter4LeftName3.innerHTML = ''
           //  rollerTitle4.innerHTML = newVal.group1[3].title
            rollerCenter4LeftName4.innerHTML = ''
           
            rollerCenter4LeftTitle5.innerHTML = ''
            rollerCenter4LeftName5.innerHTML = ''
           //  rollerTitle6.innerHTML = newVal.group2[1].title
            rollerCenter4LeftName6.innerHTML = ''
           //  rollerTitle7.innerHTML = newVal.group2[2].title
            rollerCenter4LeftName7.innerHTML = ''
           //  rollerTitle8.innerHTML = newVal.group2[3].title
            rollerCenter4LeftName8.innerHTML = ''
           
            rollerCenter4LeftTitle9.innerHTML = ''
            rollerCenter4LeftName9.innerHTML = ''
           //  rollerTitle10.innerHTML = newVal.group3[1].title
            rollerCenter4LeftName10.innerHTML = ''
           //  rollerTitle11.innerHTML = newVal.group3[2].title
            rollerCenter4LeftName11.innerHTML = ''
           //  rollerTitle12.innerHTML = newVal.group3[3].title
            rollerCenter4LeftName12.innerHTML = ''
           
            rollerCenter4LeftTitle13.innerHTML = ''
            rollerCenter4LeftName13.innerHTML = ''
           //  rollerTitle14.innerHTML = newVal.group4[1].title
            rollerCenter4LeftName14.innerHTML = ''
           //  rollerTitle15.innerHTML = newVal.group4[2].title
            rollerCenter4LeftName15.innerHTML = ''
           //  rollerTitle16.innerHTML = newVal.group4[3].title
            rollerCenter4LeftName16.innerHTML = ''
            }
            

        rollerheader.innerHTML = newVal.header;
        rollerTitle1.innerHTML = newVal.group1[0].title
        rollerName1.innerHTML = newVal.group1[0].name
        rollerTitle2.innerHTML = newVal.group1[1].title
        rollerName2.innerHTML = newVal.group1[1].name
        rollerTitle3.innerHTML = newVal.group1[2].title
        rollerName3.innerHTML = newVal.group1[2].name
        rollerTitle4.innerHTML = newVal.group1[3].title
        rollerName4.innerHTML = newVal.group1[3].name
        
        rollerTitle5.innerHTML = newVal.group2[0].title
        rollerName5.innerHTML = newVal.group2[0].name
        rollerTitle6.innerHTML = newVal.group2[1].title
        rollerName6.innerHTML = newVal.group2[1].name
        rollerTitle7.innerHTML = newVal.group2[2].title
        rollerName7.innerHTML = newVal.group2[2].name
        rollerTitle8.innerHTML = newVal.group2[3].title
        rollerName8.innerHTML = newVal.group2[3].name
        
        rollerTitle9.innerHTML = newVal.group3[0].title
        rollerName9.innerHTML = newVal.group3[0].name
        rollerTitle10.innerHTML = newVal.group3[1].title
        rollerName10.innerHTML = newVal.group3[1].name
        rollerTitle11.innerHTML = newVal.group3[2].title
        rollerName11.innerHTML = newVal.group3[2].name
        rollerTitle12.innerHTML = newVal.group3[3].title
        rollerName12.innerHTML = newVal.group3[3].name
        
        rollerTitle13.innerHTML = newVal.group4[0].title
        rollerName13.innerHTML = newVal.group4[0].name
        rollerTitle14.innerHTML = newVal.group4[1].title
        rollerName14.innerHTML = newVal.group4[1].name
        rollerTitle15.innerHTML = newVal.group4[2].title
        rollerName15.innerHTML = newVal.group4[2].name
        rollerTitle16.innerHTML = newVal.group4[3].title
        rollerName16.innerHTML = newVal.group4[3].name
          }
        // })

       // SETTING ROLLER
      //  rollerheader.innerHTML = newVal.header
      // tlLeftRoller 
      // .call(() => {
      //   rollerheader.innerHTML = newVal.header;
      //   })
//       
    } else if (newVal.action === "Out") {
      if(newVal.align === 'Center') {
        tlCenter4Roller.tweenFromTo("rollerStartEnd", "rollerStart");
        setTimeout(function () {
          rollerCenter4LeftTitle1.innerHTML = ''
          rollerCenter4LeftName1.innerHTML = ''
         //  rollerTitle2.innerHTML = newVal.group1[1].title
          rollerCenter4LeftName2.innerHTML = ''
         //  rollerTitle3.innerHTML = newVal.group1[2].title
          rollerCenter4LeftName3.innerHTML = ''
         //  rollerTitle4.innerHTML = newVal.group1[3].title
          rollerCenter4LeftName4.innerHTML = ''
         
          rollerCenter4LeftTitle5.innerHTML = ''
          rollerCenter4LeftName5.innerHTML = ''
         //  rollerTitle6.innerHTML = newVal.group2[1].title
          rollerCenter4LeftName6.innerHTML = ''
         //  rollerTitle7.innerHTML = newVal.group2[2].title
          rollerCenter4LeftName7.innerHTML = ''
         //  rollerTitle8.innerHTML = newVal.group2[3].title
          rollerCenter4LeftName8.innerHTML = ''
         
          rollerCenter4LeftTitle9.innerHTML = ''
          rollerCenter4LeftName9.innerHTML = ''
         //  rollerTitle10.innerHTML = newVal.group3[1].title
          rollerCenter4LeftName10.innerHTML = ''
         //  rollerTitle11.innerHTML = newVal.group3[2].title
          rollerCenter4LeftName11.innerHTML = ''
         //  rollerTitle12.innerHTML = newVal.group3[3].title
          rollerCenter4LeftName12.innerHTML = ''
         
          rollerCenter4LeftTitle13.innerHTML = ''
          rollerCenter4LeftName13.innerHTML = ''
         //  rollerTitle14.innerHTML = newVal.group4[1].title
          rollerCenter4LeftName14.innerHTML = ''
         //  rollerTitle15.innerHTML = newVal.group4[2].title
          rollerCenter4LeftName15.innerHTML = ''
         //  rollerTitle16.innerHTML = newVal.group4[3].title
          rollerCenter4LeftName16.innerHTML = ''
        }, 3000);
           
       
      } else {
        tlLeftRoller.tweenFromTo("rollerStartEnd", "rollerStart");
        setTimeout(function () {
          rollerheader.innerHTML = ''
          rollerTitle1.innerHTML = ''
          rollerName1.innerHTML = ''
          rollerTitle2.innerHTML = ''
          rollerName2.innerHTML = ''
          rollerTitle3.innerHTML = ''
          rollerName3.innerHTML = ''
          rollerTitle4.innerHTML = ''
          rollerName4.innerHTML = ''
          
          rollerTitle5.innerHTML = ''
          rollerName5.innerHTML = ''
          rollerTitle6.innerHTML = ''
          rollerName6.innerHTML = ''
          rollerTitle7.innerHTML = ''
          rollerName7.innerHTML = ''
          rollerTitle8.innerHTML = ''
          rollerName8.innerHTML = ''
          
          rollerTitle9.innerHTML = ''
          rollerName9.innerHTML = ''
          rollerTitle10.innerHTML = ''
          rollerName10.innerHTML = ''
          rollerTitle11.innerHTML = ''
          rollerName11.innerHTML = ''
          rollerTitle12.innerHTML = ''
          rollerName12.innerHTML = ''
          
          rollerTitle13.innerHTML = ''
          rollerName13.innerHTML = ''
          rollerTitle14.innerHTML = ''
          rollerName14.innerHTML = ''
          rollerTitle15.innerHTML = ''
          rollerName15.innerHTML = ''
          rollerTitle16.innerHTML = ''
          rollerName16.innerHTML = ''
        }, 3000);
       
      }
     
      tlRollerLeftActive = false
    //  console.log("do out!")
}


  // tlTickerRight
  // .fromTo(
  //   '#bottom-group-left',
  //   0.7,
  //   {
  //     clipPath: "inset(0px 0px 0px 0px)",
  //   },
  //   {
  //     clipPath: "inset(0px 0px 0px 1920px)",
  //     ease: "power2.out",
  //   }
  // )

  // .call(() => {
  //   tickerMainRight.innerHTML = "";
  //   tlTickerRightActive = false;
  // })
  // .set('#bottom-group-left', { clipPath: "inset(0px 0px 0px 0px)" });
})


// // ROLLER CENTER
// var tlRollerCenterActive = false;
// const rollerheader = document.getElementById("rollerheader");




// const centerRoller = nodecg.Replicant("centerroller");
// centerRoller.on("change", (newVal, oldVal) => {
//   console.log("roller CENTER: newVal is: ", newVal, " and old value is: ", oldVal);

//   const tlCenterRoller = gsap
//   .timeline({
//     paused: true,
//     // repeat: -1,
//     // yoyo: true,
//     // repeatDelay: 1,
//     // defaults: { duration: 1, ease: "sine.inOut" }
//   })
//   // .set([".roller-left-header", ".roller-left-one", ".roller-left-two", ".roller-left-three", ".roller-left-four", ".roller-left-five", ".roller-left-six", ".roller-left-seven", ".roller-left-eight", ".roller-left-nine", ".roller-left-ten", ".roller-left-eleven", ".roller-left-twelve", ".roller-left-thirteen", ".roller-left-fourteen", ".roller-left-fifteen", ".roller-left-sixteen"], {
//   //   yPercent: 100, opacity: 0
//   // })
//   // .fromTo(
//   //   '#roller-group-left',
//   //   0.7,
//   //   {
//   //     clipPath: "inset(1920px 0px 0px 0px)",
//   //   },
//   //   {
//   //     clipPath: "inset(0px 0px 0px 0px)",
//   //     ease: "power2.out",
//   //   }
//   // )
  
//   //  .to([".roller-left-header", ".roller-left-one", ".roller-left-two", ".roller-left-three", ".roller-left-four", ".roller-left-five", ".roller-left-six", ".roller-left-seven", ".roller-left-eight", ".roller-left-nine", ".roller-left-ten", ".roller-left-eleven", ".roller-left-twelve", ".roller-left-thirteen", ".roller-left-fourteen", ".roller-left-fifteen", ".roller-left-sixteen"],
//   //   {
//   //     yPercent: 0,
//   //     opacity: 100,
//   //   stagger: 0.05
//   // })
//   .add("rollerStart")
//   // .call(() => {
//   //   // console.log("Doing video!")
//   //   videoBoxMainLeft.src = newVal.src;
//   //  })
//   .set([".roller-center-title-one", ".roller-center-one", ".roller-center-two", ".roller-center-three", ".roller-center-four", ".roller-center-title-two", ".roller-center-five", ".roller-center-six", ".roller-center-seven", ".roller-center-eight",".roller-center-title-three", ".roller-center-nine", ".roller-center-ten", ".roller-center-eleven", ".roller-center-twelve", ".roller-center-title-four", ".roller-center-thirteen", ".roller-center-fourteen", ".roller-center-fifteen", ".roller-center-sixteen"], {
//     yPercent: 100, opacity: 0
//   })
//   .fromTo(
//     '#roller-group-left',
//     0.7,
//     {
//       clipPath: "inset(1920px 0px 0px 0px)",
//     },
//     {
//       clipPath: "inset(0px 0px 0px 0px)",
//       ease: "power2.out",
//     }
//   )
  
//    .to([".roller-center-title-one", ".roller-center-one", ".roller-center-two", ".roller-center-three", ".roller-center-four", ".roller-center-title-two", ".roller-center-five", ".roller-center-six", ".roller-center-seven", ".roller-center-eight",".roller-center-title-three", ".roller-center-nine", ".roller-center-ten", ".roller-center-eleven", ".roller-center-twelve", ".roller-center-title-four", ".roller-center-thirteen", ".roller-center-fourteen", ".roller-center-fifteen", ".roller-center-sixteen"],
//     {
//       yPercent: 0,
//       opacity: 100,
//     stagger: 0.05
//   })
//   .add("rollerStartEnd")
//   // .to("#stripevideoboxright", { xPercent: 100 }, 3, "videoBoxOut")
//   // .to("#text-group-right", { x: 0 }, 3, "videoTextGroupOut")
//   // // .set("#stripevideoboxleft", { xPercent: -100 })
//   // // .set("#text-group-left", { x: 0 })
//   // // .call(() => {
//   // //   videoBoxMainLeft.src = "";
//   // // })
//   // .add("videoBoxEnd");



        
//         // tlRollerLeft.fromTo([".header", ".one", ".five", ".nine", ".thirteen", ".two", ".six", ".ten", ".fourteen", ".three", ".seven", ".eleven", ".fifteen", ".four", ".eight", ".twelve", ".sixteen"], {
//         //   opacity: 0},
//         //   {
//         //   opacity: 100,
//         //   stagger: 0.1
//         // });
        
//         // .set([".header", ".one", ".five", ".nine", ".thirteen", ".two", ".six", ".ten", ".fourteen", ".three", ".seven", ".eleven", ".fifteen", ".four", ".eight", ".twelve", ".sixteen"], {
//         //   yPercent: 100
//         // })
//         //  .to([".header", ".one", ".five", ".nine", ".thirteen", ".two", ".six", ".ten", ".fourteen", ".three", ".seven", ".eleven", ".fifteen", ".four", ".eight", ".twelve", ".sixteen"],
      
        


//       if (newVal.action === "In") {

//         // SETTING ROLLER
//         // rollerheader.innerHTML = newVal.header

//         rollerTitle1.innerHTML = newVal.group1[0].title
//  rollerName1.innerHTML = newVal.group1[0].name
// //  rollerTitle2.innerHTML = newVal.group1[1].title
//  rollerName2.innerHTML = newVal.group1[1].name
// //  rollerTitle3.innerHTML = newVal.group1[2].title
//  rollerName3.innerHTML = newVal.group1[2].name
// //  rollerTitle4.innerHTML = newVal.group1[3].title
//  rollerName4.innerHTML = newVal.group1[3].name

//  rollerTitle5.innerHTML = newVal.group2[0].title
//  rollerName5.innerHTML = newVal.group2[0].name
// //  rollerTitle6.innerHTML = newVal.group2[1].title
//  rollerName6.innerHTML = newVal.group2[1].name
// //  rollerTitle7.innerHTML = newVal.group2[2].title
//  rollerName7.innerHTML = newVal.group2[2].name
// //  rollerTitle8.innerHTML = newVal.group2[3].title
//  rollerName8.innerHTML = newVal.group2[3].name

//  rollerTitle9.innerHTML = newVal.group3[0].title
//  rollerName9.innerHTML = newVal.group3[0].name
// //  rollerTitle10.innerHTML = newVal.group3[1].title
//  rollerName10.innerHTML = newVal.group3[1].name
// //  rollerTitle11.innerHTML = newVal.group3[2].title
//  rollerName11.innerHTML = newVal.group3[2].name
// //  rollerTitle12.innerHTML = newVal.group3[3].title
//  rollerName12.innerHTML = newVal.group3[3].name

//  rollerTitle13.innerHTML = newVal.group4[0].title
//  rollerName13.innerHTML = newVal.group4[0].name
// //  rollerTitle14.innerHTML = newVal.group4[1].title
//  rollerName14.innerHTML = newVal.group4[1].name
// //  rollerTitle15.innerHTML = newVal.group4[2].title
//  rollerName15.innerHTML = newVal.group4[2].name
// //  rollerTitle16.innerHTML = newVal.group4[3].title
//  rollerName16.innerHTML = newVal.group4[3].name

//  tlRollerCenterActive = true
//  tlCenterRoller.tweenFromTo("rollerStart", "rollerStartEnd");
//     } else if (newVal.action === "Change") {
//       // console.log("do change!")
//       tlCenterRoller.seek("rollerStartEnd")
//         // .call(() => {
//         // rollerheader.innerHTML = newVal.header;
//         rollerTitle1.innerHTML = newVal.group1[0].title
//         rollerName1.innerHTML = newVal.group1[0].name
//         // rollerTitle2.innerHTML = newVal.group1[1].title
//         rollerName2.innerHTML = newVal.group1[1].name
//         // rollerTitle3.innerHTML = newVal.group1[2].title
//         rollerName3.innerHTML = newVal.group1[2].name
//         // rollerTitle4.innerHTML = newVal.group1[3].title
//         rollerName4.innerHTML = newVal.group1[3].name
        
//         rollerTitle5.innerHTML = newVal.group2[0].title
//         rollerName5.innerHTML = newVal.group2[0].name
//         // rollerTitle6.innerHTML = newVal.group2[1].title
//         rollerName6.innerHTML = newVal.group2[1].name
//         // rollerTitle7.innerHTML = newVal.group2[2].title
//         rollerName7.innerHTML = newVal.group2[2].name
//         // rollerTitle8.innerHTML = newVal.group2[3].title
//         rollerName8.innerHTML = newVal.group2[3].name
        
//         rollerTitle9.innerHTML = newVal.group3[0].title
//         rollerName9.innerHTML = newVal.group3[0].name
//         // rollerTitle10.innerHTML = newVal.group3[1].title
//         rollerName10.innerHTML = newVal.group3[1].name
//         // rollerTitle11.innerHTML = newVal.group3[2].title
//         rollerName11.innerHTML = newVal.group3[2].name
//         // rollerTitle12.innerHTML = newVal.group3[3].title
//         rollerName12.innerHTML = newVal.group3[3].name
        
//         rollerTitle13.innerHTML = newVal.group4[0].title
//         rollerName13.innerHTML = newVal.group4[0].name
//         // rollerTitle14.innerHTML = newVal.group4[1].title
//         rollerName14.innerHTML = newVal.group4[1].name
//         // rollerTitle15.innerHTML = newVal.group4[2].title
//         rollerName15.innerHTML = newVal.group4[2].name
//         // rollerTitle16.innerHTML = newVal.group4[3].title
//         rollerName16.innerHTML = newVal.group4[3].name
//         // })

//        // SETTING ROLLER
//       //  rollerheader.innerHTML = newVal.header
//       // tlLeftRoller 
//       // .call(() => {
//       //   rollerheader.innerHTML = newVal.header;
//       //   })
// //       
//     } else if (newVal.action === "Out") {
//       tlCenterRoller.tweenFromTo("rollerStartEnd", "rollerStart");
//       tlRollerCenterActive = false
//     //  console.log("do out!")
// }


//   // tlTickerRight
//   // .fromTo(
//   //   '#bottom-group-left',
//   //   0.7,
//   //   {
//   //     clipPath: "inset(0px 0px 0px 0px)",
//   //   },
//   //   {
//   //     clipPath: "inset(0px 0px 0px 1920px)",
//   //     ease: "power2.out",
//   //   }
//   // )

//   // .call(() => {
//   //   tickerMainRight.innerHTML = "";
//   //   tlTickerRightActive = false;
//   // })
//   // .set('#bottom-group-left', { clipPath: "inset(0px 0px 0px 0px)" });
// })
const rollerRightHeader = document.getElementById("rollerrightheader");

const rollerRightTitle1 = document.getElementById("rollerrighttitle1");
const rollerRightName1 = document.getElementById("rollerrightname1");
const rollerRightTitle2 = document.getElementById("rollerrighttitle2");
const rollerRightName2 = document.getElementById("rollerrightname2");
const rollerRightTitle3 = document.getElementById("rollerrighttitle3");
const rollerRightName3 = document.getElementById("rollerrightname3");
const rollerRightTitle4 = document.getElementById("rollerrighttitle4");
const rollerRightName4 = document.getElementById("rollerrightname4");

const rollerRightTitle5 = document.getElementById("rollerrighttitle5");
const rollerRightName5 = document.getElementById("rollerrightname5");
const rollerRightTitle6 = document.getElementById("rollerrighttitle6");
const rollerRightName6 = document.getElementById("rollerrightname6");
const rollerRightTitle7 = document.getElementById("rollerrighttitle7");
const rollerRightName7 = document.getElementById("rollerrightname7");
const rollerRightTitle8 = document.getElementById("rollerrighttitle8");
const rollerRightName8 = document.getElementById("rollerrightname8");

const rollerRightTitle9 = document.getElementById("rollerrighttitle9");
const rollerRightName9 = document.getElementById("rollerrightname9");
const rollerRightTitle10 = document.getElementById("rollerrighttitle10");
const rollerRightName10 = document.getElementById("rollerrightname10");
const rollerRightTitle11 = document.getElementById("rollerrighttitle11");
const rollerRightName11 = document.getElementById("rollerrightname11");
const rollerRightTitle12 = document.getElementById("rollerrighttitle12");
const rollerRightName12 = document.getElementById("rollerrightname12");

const rollerRightTitle13 = document.getElementById("rollerrighttitle13");
const rollerRightName13 = document.getElementById("rollerrightname13");
const rollerRightTitle14 = document.getElementById("rollerrighttitle14");
const rollerRightName14 = document.getElementById("rollerrightname14");
const rollerRightTitle15 = document.getElementById("rollerrighttitle15");
const rollerRightName15 = document.getElementById("rollerrightname15");
const rollerRightTitle16 = document.getElementById("rollerrighttitle16");
const rollerRightName16 = document.getElementById("rollerrightname16");

// 4 Columns
const rollerCenter4RightTitle1 = document.getElementById("rollercenter4righttitle1");
const rollerCenter4RightName1 = document.getElementById("rollercenter4rightname1");
const rollerCenter4RightName2 = document.getElementById("rollercenter4rightname2");
const rollerCenter4RightName3 = document.getElementById("rollercenter4rightname3");
const rollerCenter4RightName4 = document.getElementById("rollercenter4rightname4");

const rollerCenter4RightTitle5 = document.getElementById("rollercenter4righttitle5");
const rollerCenter4RightName5 = document.getElementById("rollercenter4rightname5");
const rollerCenter4RightName6 = document.getElementById("rollercenter4rightname6");
const rollerCenter4RightName7 = document.getElementById("rollercenter4rightname7");
const rollerCenter4RightName8 = document.getElementById("rollercenter4rightname8");

const rollerCenter4RightTitle9 = document.getElementById("rollercenter4righttitle9");
const rollerCenter4RightName9 = document.getElementById("rollercenter4rightname9");
const rollerCenter4RightName10 = document.getElementById("rollercenter4rightname10");
const rollerCenter4RightName11 = document.getElementById("rollercenter4rightname11");
const rollerCenter4RightName12 = document.getElementById("rollercenter4rightname12");

const rollerCenter4RightTitle13 = document.getElementById("rollercenter4righttitle13");
const rollerCenter4RightName13 = document.getElementById("rollercenter4rightname13");
const rollerCenter4RightName14 = document.getElementById("rollercenter4rightname14");
const rollerCenter4RightName15 = document.getElementById("rollercenter4rightname15");
const rollerCenter4RightName16 = document.getElementById("rollercenter4rightname16");

// 3 COLUMNS
const rollerCenter3RightTitle1 = document.getElementById("rollercenter3righttitle1");
const rollerCenter3RightName1 = document.getElementById("rollercenter3rightname1");
const rollerCenter3RightName2 = document.getElementById("rollercenter3rightname2");
const rollerCenter3RightName3 = document.getElementById("rollercenter3rightname3");
const rollerCenter3RightName4 = document.getElementById("rollercenter3rightname4");

const rollerCenter3RightTitle5 = document.getElementById("rollercenter3righttitle5");
const rollerCenter3RightName5 = document.getElementById("rollercenter3rightname5");
const rollerCenter3RightName6 = document.getElementById("rollercenter3rightname6");
const rollerCenter3RightName7 = document.getElementById("rollercenter3rightname7");
const rollerCenter3RightName8 = document.getElementById("rollercenter3rightname8");

const rollerCenter3RightTitle9 = document.getElementById("rollercenter3righttitle9");
const rollerCenter3RightName9 = document.getElementById("rollercenter3rightname9");
const rollerCenter3RightName10 = document.getElementById("rollercenter3rightname10");
const rollerCenter3RightName11 = document.getElementById("rollercenter3rightname11");
const rollerCenter3RightName12 = document.getElementById("rollercenter3rightname12");

// 2 COLUMNS
const rollerCenter2RightTitle1 = document.getElementById("rollercenter2righttitle1");
const rollerCenter2RightName1 = document.getElementById("rollercenter2rightname1");
const rollerCenter2RightName2 = document.getElementById("rollercenter2rightname2");
const rollerCenter2RightName3 = document.getElementById("rollercenter2rightname3");
const rollerCenter2RightName4 = document.getElementById("rollercenter2rightname4");

const rollerCenter2RightTitle5 = document.getElementById("rollercenter2righttitle5");
const rollerCenter2RightName5 = document.getElementById("rollercenter2rightname5");
const rollerCenter2RightName6 = document.getElementById("rollercenter2rightname6");
const rollerCenter2RightName7 = document.getElementById("rollercenter2rightname7");
const rollerCenter2RightName8 = document.getElementById("rollercenter2rightname8");

// 1 COLUMN
const rollerCenter1RightTitle1 = document.getElementById("rollercenter1righttitle1");
const rollerCenter1RightName1 = document.getElementById("rollercenter1rightname1");
const rollerCenter1RightName2 = document.getElementById("rollercenter1rightname2");
const rollerCenter1RightName3 = document.getElementById("rollercenter1rightname3");
const rollerCenter1RightName4 = document.getElementById("rollercenter1rightname4");

var tlRollerRightActive = false
const rightRoller = nodecg.Replicant("rightroller");
rightRoller.on("change", (newVal, oldVal) => {
  console.log("roller RIGHT: newVal is: ", newVal, " and old value is: ", oldVal);

  const tlRightRoller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
    .set([".roller-right-header", ".roller-right-one", ".roller-right-two", ".roller-right-three", ".roller-right-four", ".roller-right-five", ".roller-right-six", ".roller-right-seven", ".roller-right-eight", ".roller-right-nine", ".roller-right-ten", ".roller-right-eleven", ".roller-right-twelve", ".roller-right-thirteen", ".roller-right-fourteen", ".roller-right-fifteen", ".roller-right-sixteen"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
  
   .to([".roller-right-header", ".roller-right-one", ".roller-right-two", ".roller-right-three", ".roller-right-four", ".roller-right-five", ".roller-right-six", ".roller-right-seven", ".roller-right-eight", ".roller-right-nine", ".roller-right-ten", ".roller-right-eleven", ".roller-right-twelve", ".roller-right-thirteen", ".roller-right-fourteen", ".roller-right-fifteen", ".roller-right-sixteen"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")
 

  const tlCenter4Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight",".roller-center-four-right-title-three", ".roller-center-four-right-nine", ".roller-center-four-right-ten", ".roller-center-four-right-eleven", ".roller-center-four-right-twelve", ".roller-center-four-right-title-four", ".roller-center-four-right-thirteen", ".roller-center-four-right-fourteen", ".roller-center-four-right-fifteen", ".roller-center-four-right-sixteen"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight",".roller-center-four-right-title-three", ".roller-center-four-right-nine", ".roller-center-four-right-ten", ".roller-center-four-right-eleven", ".roller-center-four-right-twelve", ".roller-center-four-right-title-four", ".roller-center-four-right-thirteen", ".roller-center-four-right-fourteen", ".roller-center-four-right-fifteen", ".roller-center-four-right-sixteen"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

  const tlCenter3Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight",".roller-center-four-right-title-three", ".roller-center-four-right-nine", ".roller-center-four-right-ten", ".roller-center-four-right-eleven", ".roller-center-four-right-twelve"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight",".roller-center-four-right-title-three", ".roller-center-four-right-nine", ".roller-center-four-right-ten", ".roller-center-four-right-eleven", ".roller-center-four-right-twelve"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

  const tlCenter2Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

  const tlCenter1Roller = gsap
  .timeline({
    paused: true,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1,
    // defaults: { duration: 1, ease: "sine.inOut" }
  })
  .add("rollerStart")
  .set([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four"], {
    yPercent: 100, opacity: 0
  })
  .fromTo(
    '#roller-group-left',
    0.7,
    {
      clipPath: "inset(1920px 0px 0px 0px)",
    },
    {
      clipPath: "inset(0px 0px 0px 0px)",
      ease: "power2.out",
    }
  )
   .to([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four"],
    {
      yPercent: 0,
      opacity: 100,
    stagger: 0.05
  })
  .add("rollerStartEnd")

  var col4Count = newVal.group4.filter((text) => text.name !== "");
  var col3Count = newVal.group3.filter((text) => text.name !== "");
  var col2Count = newVal.group2.filter((text) => text.name !== "");
  console.log('counting columns: ', col4Count.length)
  console.log('counting columns: ', col3Count.length)
  console.log('counting columns: ', col2Count.length)


      if (newVal.action === "In") {
if(newVal.align === 'Center') {
  // console.log(" center was in!")
  if(col4Count.length > 0) {
    console.log("In Center 4 columns!")
   
  rollerCenter4RightTitle1.innerHTML = newVal.group1[0].title
  rollerCenter4RightName1.innerHTML = newVal.group1[0].name
  rollerCenter4RightName2.innerHTML = newVal.group1[1].name
  rollerCenter4RightName3.innerHTML = newVal.group1[2].name
  rollerCenter4RightName4.innerHTML = newVal.group1[3].name
 
  rollerCenter4RightTitle5.innerHTML = newVal.group2[0].title
  rollerCenter4RightName5.innerHTML = newVal.group2[0].name
  rollerCenter4RightName6.innerHTML = newVal.group2[1].name
  rollerCenter4RightName7.innerHTML = newVal.group2[2].name
  rollerCenter4RightName8.innerHTML = newVal.group2[3].name
 
  rollerCenter4RightTitle9.innerHTML = newVal.group3[0].title
  rollerCenter4RightName9.innerHTML = newVal.group3[0].name
  rollerCenter4RightName10.innerHTML = newVal.group3[1].name
  rollerCenter4RightName11.innerHTML = newVal.group3[2].name
  rollerCenter4RightName12.innerHTML = newVal.group3[3].name
 
  rollerCenter4RightTitle13.innerHTML = newVal.group4[0].title
  rollerCenter4RightName13.innerHTML = newVal.group4[0].name
  rollerCenter4RightName14.innerHTML = newVal.group4[1].name
  rollerCenter4RightName15.innerHTML = newVal.group4[2].name
  rollerCenter4RightName16.innerHTML = newVal.group4[3].name

tlRollerRightActive = true
tlCenter4Roller.tweenFromTo("rollerStart", "rollerStartEnd");
  } else if(col4Count.length === 0 && col3Count.length > 0) {
    console.log("In Center 3 columns!")
  } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length > 0) {
    console.log("In Center 2 columns!")
  } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length === 0) {
    console.log("In Center 1 Column!")
  }
  
} else {
        // SETTING ROLLER
        rollerRightHeader.innerHTML = newVal.header

        rollerRightTitle1.innerHTML = newVal.group1[0].title
 rollerRightName1.innerHTML = newVal.group1[0].name
 rollerRightTitle2.innerHTML = newVal.group1[1].title
 rollerRightName2.innerHTML = newVal.group1[1].name
 rollerRightTitle3.innerHTML = newVal.group1[2].title
 rollerRightName3.innerHTML = newVal.group1[2].name
 rollerRightTitle4.innerHTML = newVal.group1[3].title
 rollerRightName4.innerHTML = newVal.group1[3].name

 rollerRightTitle5.innerHTML = newVal.group2[0].title
 rollerRightName5.innerHTML = newVal.group2[0].name
 rollerRightTitle6.innerHTML = newVal.group2[1].title
 rollerRightName6.innerHTML = newVal.group2[1].name
 rollerRightTitle7.innerHTML = newVal.group2[2].title
 rollerRightName7.innerHTML = newVal.group2[2].name
 rollerRightTitle8.innerHTML = newVal.group2[3].title
 rollerRightName8.innerHTML = newVal.group2[3].name

 rollerRightTitle9.innerHTML = newVal.group3[0].title
 rollerRightName9.innerHTML = newVal.group3[0].name
 rollerRightTitle10.innerHTML = newVal.group3[1].title
 rollerRightName10.innerHTML = newVal.group3[1].name
 rollerRightTitle11.innerHTML = newVal.group3[2].title
 rollerRightName11.innerHTML = newVal.group3[2].name
 rollerRightTitle12.innerHTML = newVal.group3[3].title
 rollerRightName12.innerHTML = newVal.group3[3].name

 rollerRightTitle13.innerHTML = newVal.group4[0].title
 rollerRightName13.innerHTML = newVal.group4[0].name
 rollerRightTitle14.innerHTML = newVal.group4[1].title
 rollerRightName14.innerHTML = newVal.group4[1].name
 rollerRightTitle15.innerHTML = newVal.group4[2].title
 rollerRightName15.innerHTML = newVal.group4[2].name
 rollerRightTitle16.innerHTML = newVal.group4[3].title
 rollerRightName16.innerHTML = newVal.group4[3].name

 tlRollerRightActive = true
 tlRightRoller.tweenFromTo("rollerStart", "rollerStartEnd");
}
    } else if (newVal.action === "Change") {
      // console.log("do change!")
      
      tlCenter4Roller.seek("rollerStartEnd")
        // .call(() => {
          if(newVal.align === 'Center') {
            console.log("center change happend!")
            if(oldVal && oldVal.align !== 'Center') {
              tlRightRoller.set([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight",".roller-center-four-right-title-three", ".roller-center-four-right-nine", ".roller-center-four-right-ten", ".roller-center-four-right-eleven", ".roller-center-four-right-twelve", ".roller-center-four-right-title-four", ".roller-center-four-right-thirteen", ".roller-center-four-right-fourteen", ".roller-center-four-right-fifteen", ".roller-center-four-right-sixteen"], {
                yPercent: 100, opacity: 0
              })
              rollerRightHeader.innerHTML = ''
              rollerRightTitle1.innerHTML = ''
              rollerRightName1.innerHTML = ''
              rollerRightTitle2.innerHTML = ''
              rollerRightName2.innerHTML = ''
              rollerRightTitle3.innerHTML = ''
              rollerRightName3.innerHTML = ''
              rollerRightTitle4.innerHTML = ''
              rollerRightName4.innerHTML = ''
              
              rollerRightTitle5.innerHTML = ''
              rollerRightName5.innerHTML = ''
              rollerRightTitle6.innerHTML = ''
              rollerRightName6.innerHTML = ''
              rollerRightTitle7.innerHTML = ''
              rollerRightName7.innerHTML = ''
              rollerRightTitle8.innerHTML = ''
              rollerRightName8.innerHTML = ''
              
              rollerRightTitle9.innerHTML = ''
              rollerRightName9.innerHTML = ''
              rollerRightTitle10.innerHTML = ''
              rollerRightName10.innerHTML = ''
              rollerRightTitle11.innerHTML = ''
              rollerRightName11.innerHTML = ''
              rollerRightTitle12.innerHTML = ''
              rollerRightName12.innerHTML = ''
              
              rollerRightTitle13.innerHTML = ''
              rollerRightName13.innerHTML = ''
              rollerRightTitle14.innerHTML = ''
              rollerRightName14.innerHTML = ''
              rollerRightTitle15.innerHTML = ''
              rollerRightName15.innerHTML = ''
              rollerRightTitle16.innerHTML = ''
              rollerRightName16.innerHTML = ''
            }

         
            
          if(col4Count.length > 0) {
              console.log("Change Center 4 columns!")
              rollerCenter4RightTitle1.innerHTML = newVal.group1[0].title
              rollerCenter4RightName1.innerHTML = newVal.group1[0].name
              rollerCenter4RightName2.innerHTML = newVal.group1[1].name
              rollerCenter4RightName3.innerHTML = newVal.group1[2].name
              rollerCenter4RightName4.innerHTML = newVal.group1[3].name
             
              rollerCenter4RightTitle5.innerHTML = newVal.group2[0].title
              rollerCenter4RightName5.innerHTML = newVal.group2[0].name
              rollerCenter4RightName6.innerHTML = newVal.group2[1].name
              rollerCenter4RightName7.innerHTML = newVal.group2[2].name
              rollerCenter4RightName8.innerHTML = newVal.group2[3].name
             
              rollerCenter4RightTitle9.innerHTML = newVal.group3[0].title
              rollerCenter4RightName9.innerHTML = newVal.group3[0].name
              rollerCenter4RightName10.innerHTML = newVal.group3[1].name
              rollerCenter4RightName11.innerHTML = newVal.group3[2].name
              rollerCenter4RightName12.innerHTML = newVal.group3[3].name
             
              rollerCenter4RightTitle13.innerHTML = newVal.group4[0].title
              rollerCenter4RightName13.innerHTML = newVal.group4[0].name
              rollerCenter4RightName14.innerHTML = newVal.group4[1].name
              rollerCenter4RightName15.innerHTML = newVal.group4[2].name
              rollerCenter4RightName16.innerHTML = newVal.group4[3].name
          } else if(col4Count.length === 0 && col3Count.length > 0) {
            console.log("Change CENTER 3 columns!")
          } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length > 0) {
            console.log("Change CENTER 2 columns!")
          } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length === 0) {
            console.log("Change CENTER 1 Column!")
          }
            // if(oldVal && oldVal.align !== 'Center') {
            
            // } else if(oldVal && oldVal.align === 'Center') {
            
              
            // }
           

//  tlRightRoller
  
//    .to([".roller-center-title-one", ".roller-center-one", ".roller-center-two", ".roller-center-three", ".roller-center-four", ".roller-center-title-two", ".roller-center-five", ".roller-center-six", ".roller-center-seven", ".roller-center-eight",".roller-center-title-three", ".roller-center-nine", ".roller-center-ten", ".roller-center-eleven", ".roller-center-twelve", ".roller-center-title-four", ".roller-center-thirteen", ".roller-center-fourteen", ".roller-center-fifteen", ".roller-center-sixteen"],
//     {
//       yPercent: 0,
//       opacity: 100,
//     stagger: 0.05
//   })
          } else {
            
            if(oldVal && oldVal.align === 'Center') {
              if(col4Count.length > 0) {
                console.log("Change RTL 4 columns!")
                rollerCenter4RightTitle1.innerHTML = ''
            rollerCenter4RightName1.innerHTML = ''
            rollerCenter4RightName2.innerHTML = ''
            rollerCenter4RightName3.innerHTML = ''
            rollerCenter4RightName4.innerHTML = ''
           
            rollerCenter4RightTitle5.innerHTML = ''
            rollerCenter4RightName5.innerHTML = ''
            rollerCenter4RightName6.innerHTML = ''
            rollerCenter4RightName7.innerHTML = ''
            rollerCenter4RightName8.innerHTML = ''
           
            rollerCenter4RightTitle9.innerHTML = ''
            rollerCenter4RightName9.innerHTML = ''
            rollerCenter4RightName10.innerHTML = ''
            rollerCenter4RightName11.innerHTML = ''
            rollerCenter4RightName12.innerHTML = ''
           
            rollerCenter4RightTitle13.innerHTML = ''
            rollerCenter4RightName13.innerHTML = ''
            rollerCenter4RightName14.innerHTML = ''
            rollerCenter4RightName15.innerHTML = ''
            rollerCenter4RightName16.innerHTML = ''
            } else if(col4Count.length === 0 && col3Count.length > 0) {
              console.log("Change RTL 3 columns!")
            } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length > 0) {
              console.log("Change RTL 2 columns!")
            } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length === 0) {
              console.log("Change RTL 1 Column!")
            }
              tlRightRoller.seek("rollerStartEnd")
              tlCenter4Roller.set([".roller-center-four-right-title-one", ".roller-center-four-right-one", ".roller-center-four-right-two", ".roller-center-four-right-three", ".roller-center-four-right-four", ".roller-center-four-right-title-two", ".roller-center-four-right-five", ".roller-center-four-right-six", ".roller-center-four-right-seven", ".roller-center-four-right-eight",".roller-center-four-right-title-three", ".roller-center-four-right-nine", ".roller-center-four-right-ten", ".roller-center-four-right-eleven", ".roller-center-four-right-twelve", ".roller-center-four-right-title-four", ".roller-center-four-right-thirteen", ".roller-center-four-right-fourteen", ".roller-center-four-right-fifteen", ".roller-center-four-right-sixteen"], {
              yPercent: 100, opacity: 0
            })
            
            
            }
            rollerCenter4RightTitle1.innerHTML = ''
            rollerCenter4RightName1.innerHTML = ''
            rollerCenter4RightName2.innerHTML = ''
            rollerCenter4RightName3.innerHTML = ''
            rollerCenter4RightName4.innerHTML = ''
           
            rollerCenter4RightTitle5.innerHTML = ''
            rollerCenter4RightName5.innerHTML = ''
            rollerCenter4RightName6.innerHTML = ''
            rollerCenter4RightName7.innerHTML = ''
            rollerCenter4RightName8.innerHTML = ''
           
            rollerCenter4RightTitle9.innerHTML = ''
            rollerCenter4RightName9.innerHTML = ''
            rollerCenter4RightName10.innerHTML = ''
            rollerCenter4RightName11.innerHTML = ''
            rollerCenter4RightName12.innerHTML = ''
           
            rollerCenter4RightTitle13.innerHTML = ''
            rollerCenter4RightName13.innerHTML = ''
            rollerCenter4RightName14.innerHTML = ''
            rollerCenter4RightName15.innerHTML = ''
            rollerCenter4RightName16.innerHTML = ''
        
          }
        // })

       // SETTING ROLLER
      //  rollerheader.innerHTML = newVal.header
      // tlLeftRoller 
      // .call(() => {
      //   rollerheader.innerHTML = newVal.header;
      //   })
//       
    } else if (newVal.action === "Out") {
      if(newVal.align === 'Center') {
        if(col4Count.length > 0) {
          console.log("OUT Center 4 columns!")
          // tlCenter4Roller.tweenFromTo("rollerStartEnd", "rollerStart");
          if(newVal.align === 'Center') {
            tlCenter4Roller.tweenFromTo("rollerStartEnd", "rollerStart");
            setTimeout(function () {
              rollerCenter4LeftTitle1.innerHTML = ''
              rollerCenter4LeftName1.innerHTML = ''
             //  rollerTitle2.innerHTML = newVal.group1[1].title
              rollerCenter4LeftName2.innerHTML = ''
             //  rollerTitle3.innerHTML = newVal.group1[2].title
              rollerCenter4LeftName3.innerHTML = ''
             //  rollerTitle4.innerHTML = newVal.group1[3].title
              rollerCenter4LeftName4.innerHTML = ''
             
              rollerCenter4LeftTitle5.innerHTML = ''
              rollerCenter4LeftName5.innerHTML = ''
             //  rollerTitle6.innerHTML = newVal.group2[1].title
              rollerCenter4LeftName6.innerHTML = ''
             //  rollerTitle7.innerHTML = newVal.group2[2].title
              rollerCenter4LeftName7.innerHTML = ''
             //  rollerTitle8.innerHTML = newVal.group2[3].title
              rollerCenter4LeftName8.innerHTML = ''
             
              rollerCenter4LeftTitle9.innerHTML = ''
              rollerCenter4LeftName9.innerHTML = ''
             //  rollerTitle10.innerHTML = newVal.group3[1].title
              rollerCenter4LeftName10.innerHTML = ''
             //  rollerTitle11.innerHTML = newVal.group3[2].title
              rollerCenter4LeftName11.innerHTML = ''
             //  rollerTitle12.innerHTML = newVal.group3[3].title
              rollerCenter4LeftName12.innerHTML = ''
             
              rollerCenter4LeftTitle13.innerHTML = ''
              rollerCenter4LeftName13.innerHTML = ''
             //  rollerTitle14.innerHTML = newVal.group4[1].title
              rollerCenter4LeftName14.innerHTML = ''
             //  rollerTitle15.innerHTML = newVal.group4[2].title
              rollerCenter4LeftName15.innerHTML = ''
             //  rollerTitle16.innerHTML = newVal.group4[3].title
              rollerCenter4LeftName16.innerHTML = ''
            }, 3000);
               
           
          } else {
            tlRightRoller.tweenFromTo("rollerStartEnd", "rollerStart");
            setTimeout(function () {
              rollerRightHeader.innerHTML = ''
              rollerRightTitle1.innerHTML = ''
              rollerRightName1.innerHTML = ''
              rollerRightTitle2.innerHTML = ''
              rollerRightName2.innerHTML = ''
              rollerRightTitle3.innerHTML = ''
              rollerRightName3.innerHTML = ''
              rollerRightTitle4.innerHTML = ''
              rollerRightName4.innerHTML = ''
              
              rollerRightTitle5.innerHTML = ''
              rollerRightName5.innerHTML = ''
              rollerRightTitle6.innerHTML = ''
              rollerRightName6.innerHTML = ''
              rollerRightTitle7.innerHTML = ''
              rollerRightName7.innerHTML = ''
              rollerRightTitle8.innerHTML = ''
              rollerRightName8.innerHTML = ''
              
              rollerRightTitle9.innerHTML = ''
              rollerRightName9.innerHTML = ''
              rollerRightTitle10.innerHTML = ''
              rollerRightName10.innerHTML = ''
              rollerRightTitle11.innerHTML = ''
              rollerRightName11.innerHTML = ''
              rollerRightTitle12.innerHTML = ''
              rollerRightName12.innerHTML = ''
              
              rollerRightTitle13.innerHTML = ''
              rollerRightName13.innerHTML = ''
              rollerRightTitle14.innerHTML = ''
              rollerRightName14.innerHTML = ''
              rollerRightTitle15.innerHTML = ''
              rollerRightName15.innerHTML = ''
              rollerRightTitle16.innerHTML = ''
              rollerRightName16.innerHTML = ''
            }, 3000);
           
          }
      } else if(col4Count.length === 0 && col3Count.length > 0) {
        console.log("OUT Center 3 columns!")
      } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length > 0) {
        console.log("OUT Center 2 columns!")
      } else if(col4Count.length === 0 && col3Count.length === 0 && col2Count.length === 0) {
        console.log("OUT Center 1 Column!")
      }
        
      } else {
        tlRightRoller.tweenFromTo("rollerStartEnd", "rollerStart");
      }
     
      tlRollerRightActive = false
    //  console.log("do out!")
}


  // tlTickerRight
  // .fromTo(
  //   '#bottom-group-left',
  //   0.7,
  //   {
  //     clipPath: "inset(0px 0px 0px 0px)",
  //   },
  //   {
  //     clipPath: "inset(0px 0px 0px 1920px)",
  //     ease: "power2.out",
  //   }
  // )

  // .call(() => {
  //   tickerMainRight.innerHTML = "";
  //   tlTickerRightActive = false;
  // })
  // .set('#bottom-group-left', { clipPath: "inset(0px 0px 0px 0px)" });
})


const clearAll = nodecg.Replicant("clearall");
clearAll.on("change", (newVal, oldVal) => {
  // console.log("clearall: newVal is: ", newVal, " and old value is: ", oldVal);
  // console.log("checking if stripe is active: ", tlStripeRightActive)
  if (newVal.clear) {
    if (tlTopLeftFingerActive) {
      // console.log("Found Active Top Left Finger!")
      tlTopLeftFinger
        .to(topLeftFingerMain, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .set([topLeftFingerMain], {
          width: "",
          padding: "0px 0px 0px 0px",
        })
        .call(() => {
          topLeftFingerMain.innerHTML = "";
          tlTopLeftFingerActive = false;
        });
    }

    if (tlTopRightFingerActive) {
      // console.log("Found Active Top Right Finger!")
      tlTopRightFinger
        .to(topRightFingerMain, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .set([topRightFingerMain], {
          width: "",
          padding: "0px 0px 0px 0px",
        })
        .call(() => {
          topRightFingerMain.innerHTML = "";
          tlTopRightFingerActive = false;
        });
    }

    if (tlBottomLeftFingerActive) {
      // console.log("Found Active Bottom Left Finger!")
      tlBottomLeftFinger
        .to(bottomLeftFingerMain, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .set([bottomLeftFingerMain], {
          width: "",
          padding: "0px 0px 0px 0px",
        })
        .call(() => {
          bottomLeftFingerMain.innerHTML = "";
          tlBottomLeftFingerActive = false;
        });
    }

    if (tlBottomRightFingerActive) {
      // console.log("Found Active Bottom Right Finger!")
      tlBottomRightFinger
        .to(bottomRightFingerMain, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .set([bottomRightFingerMain], {
          width: "",
          padding: "0px 0px 0px 0px",
        })
        .call(() => {
          bottomRightFingerMain.innerHTML = "";
          tlBottomRightFingerActive = false;
        });
    }

    if (tlLeftSuperActive) {
      // console.log("Found Active Left Super!")
      tlLeftSuper
        .to(Supername, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .to(Supertitle, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .to(Superpre, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .to('.super-phone-left', {width: 0,  transformOrigin: "50% 50%"})
        .call(() => {
          Superpre.innerHTML = "";
          Supername.innerHTML = "";
          Supertitle.innerHTML = "";
          tlLeftSuperActive = false;
        })
        .set(Superpre, { width: "", padding: "0px 0px 0px 0px" })
        .set(Supername, { width: "", padding: "0px 0px 0px 0px" })
        .set(Supertitle, { width: "", padding: "0px 0px 0px 0px" })
        // .set('.super-phone-left', { width: "", padding: "0px 0px 0px 0px" });
        // if(newVal.phone) {
        //   tlLeftSuperPhone
       
          
        // }
    }

    if (tlRightSuperActive) {
      // console.log("Found Active Right Super!")
      tlRightSuper
        .to(rightSuperpre, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .to(rightSupername, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .to(rightSupertitle, 0.33, {
          width: 0,
          padding: "0px 0px 0px 0px",
          ease: "Power1.easeOut",
        })
        .to('.super-phone-right', {width: 0,  transformOrigin: "50% 50%"})
        .call(() => {
          rightSuperpre.innerHTML = "";
          rightSupername.innerHTML = "";
          rightSupertitle.innerHTML = "";
          tlRightSuperActive = false;
        })
        .set(rightSuperpre, { width: "", padding: "0px 0px 0px 0px" })
        .set(rightSupername, { width: "", padding: "0px 0px 0px 0px" })
        .set(rightSupertitle, { width: "", padding: "0px 0px 0px 0px" })
        // .set('.super-phone-right', { width: "", padding: "0px 0px 0px 0px" });
        // if(newVal.phone) {
        //   tlRightSuperPhone
       
          
        // }
    }

    if (tlBoxLeftActive) {
      // console.log("Found Active Left Image Box!")
      tlBoxLeft.tweenFromTo(1, "boxEnd");
      tlBoxLeftActive = false;
    }

    if (tlVideoBoxLeftActive) {
      // console.log("Found Active Left Video Box!")
      tlVideoBoxLeft.tweenFromTo(1, "videoBoxEnd");
      tlVideoBoxLeftActive = false;
    }

    if (tlPromoLeftActive) {
      // console.log("Found Active Left Image Promo!")
      tlPromoLeft.tweenFromTo(1, "promoEnd");
      tlPromoLeftActive = false;
    }

    if (tlVideoPromoLeftActive) {
      // console.log("Found Active Left Video Promo!")
      tlVideoPromoLeft.tweenFromTo(1, "promoVideoEnd");
      tlVideoPromoLeftActive = false;
    }

    if (tlPromoRightActive) {
      // console.log("Found Active Right Image Promo!")
      tlPromoRight.tweenFromTo(1, "promoEnd");
      tlPromoRightActive = false;
    }

    if (tlVideoPromoRightActive) {
      // console.log("Found Active Right Video Promo!")
      tlVideoPromoRight.tweenFromTo(1, "promoVideoEnd");
      tlVideoPromoRightActive = false;
    }

    if (tlBoxRightActive) {
      // console.log("Found Active Right Image Box!")
      tlBoxRight.tweenFromTo(1, "boxEnd");
      tlBoxRightActive = false;
    }

    if (tlVideoBoxRightActive) {
      // console.log("Found Active Right Video Box!")
      tlVideoBoxLeft.tweenFromTo(1, "videoBoxEnd");
      tlVideoBoxLeftActive = false;
    }

    if (tlLiveLeftActive) {
      tlLiveLeftTestOut.tweenFromTo('start', 'startEnd');
    }

    if (tlTickerLeftActive) {
      // console.log("Found Active Left Ticker!")
      tlTickerLeft.tweenFromTo('tickerChangeEnd', 'tickerEnd');
    }

    if (tlTickerRightActive) {
      // console.log("Found Active Right Ticker!")
      tlTickerRight.tweenFromTo('tickerChangeEnd', 'tickerEnd');
    }

    if (tlStripeLeftActive) {
      // console.log("Found Active Left Stripe!")
      tlStripeLeftTest.tweenFromTo('stripeMiddle', "stripeEnd");
      tlStripeLeftActive = false;
    }
    if (tlStripeRightActive) {
      // console.log("Found Active Right Stripe!")
      tlStripeRightTest.tweenFromTo('stripeMiddle', "stripeEnd");
      tlStripeRightActive = false;
    }

    if (tlLeftCounterActive) {
      // console.log("Found Active Left Counter!")
      tlLeftCounter
        .to([counterMainLeft, counterTextLeft, counterAmountLeft], {
          width: 0,
          ease: "Power1.easeOut",
        })
        .set([counterMainLeft, counterTextLeft, counterAmountLeft], {
          width: "",
          repeat: -1,
        })
        .call(() => {
          counterTextLeft.innerHTML = "";
          counterAmountLeft.innerHTML = "";
          tlLeftCounterActive = false;
        });
    }

    if (tlRightCounterActive) {
      // console.log("Found Active Right Counter!")
      tlRightCounter
        .to([counterMainRight, counterTextRight, counterAmountRight], {
          width: 0,
          ease: "Power1.easeOut",
        })
        .set([counterMainRight, counterTextRight, counterAmountRight], {
          width: "",
          repeat: -1,
        })
        .call(() => {
          counterTextRight.innerHTML = "";
          counterAmountRight.innerHTML = "";
          tlRightCounterActive = false;
        });
    }

    if (tlCGActive) {
      // console.log("Found Active CG!")
      tlCG
        // .to(
        //   stripe,
        //   //{ rect(top, right, bottom, left)
        //   { clip: "rect(0px,0px,200px,0px)", duration: 0.6, ease: "Power1.easeIn" }
        // )
        .fromTo(cg, { opacity: 1 }, { opacity: 0, duration: 0.3 })
        .set(cg, { opacity: 0 })
        .call(() => {
          cg.src = "";
          tlCGActive = false;
          // stripeSub.innerHTML = "";
        });

        tlVCG
        // .to(
        //   stripe,
        //   //{ rect(top, right, bottom, left)
        //   { clip: "rect(0px,0px,200px,0px)", duration: 0.6, ease: "Power1.easeIn" }
        // )
        .fromTo(vcg, { opacity: 1 }, { opacity: 0, duration: 0 })
        .set(vcg, { opacity: 0 })
        .call(() => {
          vcg.src = "";
          tlCGActive = false;
          // stripeSub.innerHTML = "";
        });
    }
  }

  console.log("add clear Roller!")
  //   gsap.globalTimeline.reverse()
  //   console.log("cleared")
  // if(newVal) {
  // tlLeftSuper.clear(true)
  // 	tlRightSuper.clear()
  // 	tlStripe.clear()
  // 	tlTopLeftFinger.clear()
  // 	tlTopRightFinger.clear()
  // tlBottomLeftFinger.clear()
  // 	tlBottomRightFinger.clear()
  // 	tlCounter.clear()
  // 	tlLive.clear()
  // 	tlTickerLeft.clear()
  // }
});
