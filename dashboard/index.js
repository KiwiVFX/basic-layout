const { useQuasar } = Quasar;
const baseURL = "http://localhost";
const CG_MAX_SIZE = 1000000000;
const cgAllowedTypes = ["image/jpeg", "image/png", "video/mp4", "video/webm"];

// import Sortable from '../node_modules/sortablejs/modular/sortable.esm.js';
// import Sortable, { MultiDrag, Swap } from '../node_modules/sortablejs/modular/sortable.esm.js';

const app = Vue.createApp({
  setup() {
    const $q = useQuasar();

    // function notify() {
    //   $q.notify("Running on Quasar v" + $q.version);
    // }
    // notify();
    return {
      // notify,

      changeSetting(category) {
        // console.log("category is: ", category);
        if (category === "settings") {
          $q.dialog({
            class: "dialog-card",
            title: this.language === 'he' ? '<span class="text-h3 text-primary text-bold q-my-lg">הגדרות</span>' : this.language === 'ar' ? '????' : '<span class="text-h3 text-primary text-bold q-my-lg">Settings</span>',
              
            ok: {
              color: "primary",
            },
            cancel: {
              color: "primary",
            },
            options: {
              type: "checkbox",
              model: [],
              // inline: true
              items: [
                { label: this.language === 'he' ? "שמירה אוטומטית" : this.language === 'ar' ? '????' : "Auto Save", value: "opt1", color: "primary" },
                { label: this.language === 'he' ? "כל כמה זמן לעשות שמירה אוטומטית" : this.language === 'ar' ? '????' : "Auto Save Interval time", value: "opt2", color: "primary" },
                {
                  label: this.language === 'he' ? "זמן לרענון פרוייקטים" : this.language === 'ar' ? '????' : "time for refreshing projects",
                  value: "opt3",
                  color: "primary",
                },
                {
                  label: this.language === 'he' ? "לפתוח אייטם או אלמנט מעל?" : this.language === 'ar' ? '????' : "Create new item and element above?",
                  value: "opt4",
                  color: "primary",
                },
                // {
                //   label:
                //   this.language === 'he' ? "לפתוח אלמנט חדש באתחלה?" : this.language === 'ar' ? '????' : "Create new item and element at the end of begining of item or items",
                //   value: "opt5",
                //   color: "primary",
                // },
                {
                  label:
                  this.language === 'he' ? "לכבוד את הכלי עזר להזזת פריטים" : this.language === 'ar' ? '????' :  "Turn off arrows helper bar for moving",
                  value: "opt5",
                  color: "primary",
                },
              ],
            },
            html: true,
            // persistent: true,
            dark: true,
            cancel: true,
          })
            .onOk(() => {
              // console.log('OK')
            })
            .onCancel(() => {
              // console.log('Cancel')
            })
            .onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            });
      //   } else if (category === "keyboard") {
      //     $q.dialog({
      //       class: "dialog-card",
      //       title:
      //         '<span class="text-h4 text-primary text-bold q-my-lg">Keyboard Shortcuts</span>',
      //       ok: {
      //         color: "primary",
      //       },
      //       cancel: {
      //         color: "primary",
      //       },

      //       message: `<div class="row">
      //   <div class="col-10">
      //     <strong>Setting name Setting Name</strong>
      //   </div>
      //   <div class="col-2">
      //   ${category}
      //   </div>
      // </div>
      // <q-separator dark></q-separator>
      // <div class="row">
      //   <div class="col-10">
      //   <strong>Setting name Setting Name</strong>
      //   </div>
      //   <div class="col-2">
      //   ${category}
      //   </div>
      // </div>
      // <q-separator dark></q-separator>
      // <div class="row">
      //   <div class="col-10">
      //   <strong>Setting name Setting Name</strong>
      //   </div>
      //   <div class="col-2">
      //     ${category}
      //   </div>
      // </div>`,
      //       html: true,
      //       // persistent: true,
      //       dark: true,
      //       cancel: true,
      //     })
      //       .onOk(() => {
      //         // console.log('OK')
      //       })
      //       .onCancel(() => {
      //         // console.log('Cancel')
      //       })
      //       .onDismiss(() => {
      //         // console.log('I am triggered on both OK and Cancel')
      //       });
        } else if (category === "features") {
          $q.dialog({
            class: "dialog-card",
            title: this.language === 'he' ? `<span class="text-h4 text-primary text-bold q-my-lg">פיצ'רים</span>` : this.language === 'ar' ? '????' : `<span class="text-h4 text-primary text-bold q-my-lg">Features</span>`,
            ok: {
              color: "primary",
            },
            cancel: {
              color: "primary",
            },

            message: this.language === 'he' ? `
            <div>
              <strong>התראה על אייטם ופריט זהה</strong>
            </div>
            <div>
            <strong>פיצ'ר 2</strong>
          </div>
          <div>
          <strong>פיצ'ר 3</strong>
        </div>
            
          <q-separator dark></q-separator>` : this.language === 'ar' ? `
          <div>
            <strong>?????? 1</strong>
          </div>
          <div>
          <strong>?????? 2</strong>
        </div>
        <div>
        <strong>?????? 3</strong>
      </div>
          
        <q-separator dark></q-separator>` : `
            <div>
              <strong>Alert if item already has same element with same name</strong>
            </div>
            <div>
            <strong>Feature 2</strong>
          </div>
          <div>
          <strong>Feature 3</strong>
        </div>
            
          <q-separator dark></q-separator>`,
            html: true,
            persistent: true,
            dark: true,
            cancel: true,
          })
            .onOk(() => {
              // console.log('OK')
            })
            .onCancel(() => {
              // console.log('Cancel')
            })
            .onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            });
        } else {
          $q.dialog({
            class: "dialog-card",
            title: this.language === 'he' ? `<span class="text-h3 text-red text-bold q-my-lg">${category}</span>` : this.language === 'ar' ? '????' : `<span class="text-h3 text-red text-bold q-my-lg">${category}</span>`,
            ok: {
              color: "primary",
            },
            cancel: {
              color: "primary",
            },
            message: this.language === 'he' ? `<strong>לא יצרו אותי עדיין :(</strong>` : this.language === 'ar' ? '????' : `<strong>I wasn't created :(</strong>`,
            html: true,
            dark: true,
            cancel: true,
          })
            .onOk(() => {
              // console.log('OK')
            })
            .onCancel(() => {
              // console.log('Cancel')
            })
            .onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            });
        }
      },
    };
  },
  mounted() {
    // this.$nextTick(function () {
    //   console.log("refs for myid is: " + this.$refs.myid)
    // console.log("getelementByid is: " + document.getElementById('myid'))
    // })
    // console.log("registered keyup")
    
    document.addEventListener('keydown', this.testHotKeys)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.testHotKeys, true)
    clearInterval(this.interval);
    clearInterval(this.timer);
    if (this.tickerInterval) {
      clearInterval(this.tickerInterval);
      this.counter.currentMain = null;
      this.counter.currentSub = null;
    }
    if (this.counterInterval) {
      clearInterval(this.tickerInterval);
      this.counter.currentText = null;
      this.counter.currentAmount = null;
    }
  },
  data() {
    return {
      naturalWidth: 1000,
      naturalHeight: 562.5,
      width: 1000,
      height: 562.5,
      top: 0,
      left: 0,
// tab: 'basic',

      settings: {
        hotkeys: {
          insert: 'NumpadEnter',
          createSuper: 'Digit1',
          createStripe: 'Digit2',
          createBox: 'Digit3',
          createCG: 'Digit4',
          createFinger: 'Digit5',
          createCounter: 'Digit6',
          createLive: 'Digit7',
          createTicker: 'Digit8',
          createPromo: 'Digit9',
          createRoller: 'Digit0',
          clearSupers: 'Numpad1',
          clearStripe: 'Numpad2',
          clearBox: 'Numpad3',
          clearCG: 'Numpad4',
          clearFingers: 'Numpad5',
          clearCounter: 'Numpad6',
          clearLive: 'Numpad7',
          clearTicker: 'Numpad8',
          clearPromo: 'Numpad9',
          clearRoller: 'Numpad0',
          clearAll: 'NumpadDivide',

          newProject: 'KeyP',
          newItem: 'KeyN',
          newImport: 'KeyI',
          moveUp: 'NumpadSubtract',
          moveDown: 'NumpadAdd',
        }},

      
      search: "",
      // blobTest: false,
      importDialog: false,
      hotkeysDialog: false,
      hotkeysTab: 'inouts',
      cutElement: null,
      cutItem: null,
      rtl: false, // default false for ltr users
      language: "en",
      importedData: "",
      // importedCleanData: null,
      searchLoading: false,
      cropper: null,
      objectUrl: null,
      previewCropped: null,
      selectedFile: [],
      CGUploadProgress: 0,
      boxUploadProgress: 0,
      promoUploadProgress: 0,
      zoom: 0,
      flipXVal: 1,
      flipYVal: 1,
      cg: {
        lockCG: false,
        cropper: null,
        // objectUrl: null,
        // previewCropped: null,
        selectedFile: null,
        // debouncedUpdatePreview: _.debounce(this.updatePreview, 257),
        // files: null,
      },

      debug: false,
      selectedItem: null,
      selectedElement: null,
      effectOptions: ["Mix", "Wipe", "Push", "Cut"],
      // element: null,
      items: [
        { id: "0", data: "Draggable 1" },
        { id: "1", data: "Draggable 2" },
        { id: "2", data: "Draggable 3" },
        { id: "3", data: "Draggable 4" },
        { id: "4", data: "Draggable 5" },
        { id: "5", data: "Draggable 6" },
      ],
      layoutsRTL: [
        "Lower Third",
        "Kan",
        // "kan-he",
        "Keshet",
        "Reshet",
        // "scroll",
        // "full-frame",
      ],
      layoutsLTR: [
        "Lower Third",
        "Kan",
        // "kan-he",
        // "Keshet",
        // "Reshet",
        // "scroll",
        // "full-frame",
      ],
      align: [
        "Center",
        // "Side Title Above",
        "Side",
        // "center-between-rtl",
      ],
      // alignLTR: [
      //   "center-ltr",
      //   "title-above-ltr",
      //   "ltr",
      //   // "center-between-ltr",
      // ],
      interval: undefined,
      timer: null,
      projectsHover: false,
      drawer: false,
      miniState: true,
      splitterModel: 50,
      filter: "Super",
      drag: false,
      setting: null,
      lang: "en",
      langOptions: [
        { label: "English", value: "en" },
        { label: "עברית", value: "he" },
      ],
      element:
        //  null,
        {
          index: 0,
          uid: uuidv4(),
          name: "New Super",
          type: "Super",
          effect: "Wipe",
          // FROM HERE DIFFERS
          rtl: false,
          phone: false,
          position: "DR.",
          person: "Person's name",
          title: "Physician at Harward Uni.",
        },
      projects: [],
      projectRefreshTime: 0,
      selectedProject: [],
      onAirElements: [],
      selectedProjectName: null,
      selectedProjectId: null,
      newSelectedProjectName: null,
      superName: "",
      superTitle: "",
      superLoading: false,
      stripeLoading: false,
      boxLoading: false,
      CGLoading: false,
      promoLoading: false,
      fingerLoading: false,
      counterLoading: false,
      liveLoading: false,
      tickerLoading: false,
      rollerLoading: false,
      tickerInterval: null,
      ticker: {
        currentMain: null,
        currentSub: null,
      },
      tickerTimer: null,
      counterInterval: null,
      counter: {
        currentText: null,
        currentAmount: null,
      },
      counterTimer: null,
      projectsModel: false,
      highlightCreateProject: false,
      backgroundProcess: {
        progress: 0,
        message: null,
        icon: "camera",
      },
      removeProjectName: null,
      removeProjectIndex: null,
      highlightEditingProjects: false,
      RemoveProject: false,
    };
  },
  computed: {
    // parseProject(project) {
    //   console.log("new project is: ", JSON.stringify(project))
    //  return JSON.stringify(project);
    // }
    testFunc() {
      // console.log("test passed")
      const stripeCheck = this.onAirElements.filter(
        (x) => x.type === 'Stripe'
      );
      // console.log("stripeCheck is:", stripeCheck[0])
      const tickerCheck = this.onAirElements.filter(
        (x) => x.type === 'Ticker'
      );
      const boxCheck = this.onAirElements.filter(
        (x) => x.type === 'Box'
      );
      if(stripeCheck[0]) {
        // this.rtl = !e
        // console.log("stripe: sending to out: ", stripeCheck[0])
        this.TakeElementFromAir(stripeCheck[0])
        this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      progress: true,
                      position: "bottom-left",
                      message: this.language === 'he' ? 'תוציאו את הסטרייפ לפני ההחלפה!' : this.language === 'ar' ? '????' : `Taking out Stripe element before changing!`,
                    });
                    return false
      }
      if(tickerCheck[0]) {
        // this.rtl = !e
        // console.log("ticker: sending to out: ", tickerCheck[0])
        this.TakeElementFromAir(tickerCheck[0])
        this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      progress: true,
                      position: "bottom-left",
                      message: this.language === 'he' ? 'תוציאו את הטיקר לפני ההחלפה!' : this.language === 'ar' ? '????' : `Taking out Ticker element before changing!`,
                    });
                    return false
      }
      if(boxCheck[0]) {
        // this.rtl = !e
        // console.log("box: sending to out: ", boxCheck[0])
        this.TakeElementFromAir(boxCheck[0])
        this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      progress: true,
                      position: "bottom-left",
                      message: this.language === 'he' ? 'תוציאו את התיבה לפני ההחלפה!' : this.language === 'ar' ? '????' : `Taking out Box element before changing!`,
                    });
                    return false
      }
      if(!stripeCheck && !tickerCheck && !boxCheck) {
        return true
      }
    },
    selectedCheck() {
      if (this.selectedProject.length > 0) {
        return true;
      } else return false;
    },
    searchForElement() {
      this.searchLoading = true;
      // console.log("search is: ", value)
      if (this.search) {
        // var search = value // value
        var items = this.selectedProject.items;
        // var foundElements = []
        // console.log("items are: ", )
        if (items && items.length > 0) {
          // console.log("items are bigger than 0")

          var reconstructProject = {
            name: this.selectedProject.name,
            _id: this.selectedProject.id,
            items: [],
            files: this.files,
          };

          for (let i = 0; i < items.length; ++i) {
            var reconstructItem = {
              index: items[i].index,
              name: items[i].name,
              expanded: items[i].expanded,
              options: items[i].options,
              elements: [],
            };

            for (let k = 0; k < items[i].elements.length; ++k) {
              // var elementsArray = [];
              if (
                items[i].elements[k].name
                  .toLowerCase()
                  .match(this.search.toLowerCase())
              ) {
                // if(items[i].elementslength > 0) {
                reconstructItem.elements.push(items[i].elements[k]);
                // }
              }
              // if (k === items[i].elements.length - 1) {
              //   // if(elementsArray.length > 0) {
              //     var reconstructItem = {
              //       index: items[i].index,
              //       name: items[i].name,
              //       expanded: items[i].expanded,
              //       options: items[i].options,
              //       elements: elementsArray,
              //     };
              //     reconstructProject.items.push(reconstructItem);
              //   // }

              // }
            }

            if (reconstructItem.elements.length > 0) {
              reconstructProject.items.push(reconstructItem);
            }
            //   // console.log("index is: ", i)
            //   // if(items[i].name.toLowerCase().match(value.toLowerCase())) {
            //     if (items[i].elements && items[i].elements.length > 0) {
            //   // }

            //   }

            // if (i === items.length - 1) {
            //   if(reconstructProject.items.length > 0) {
            //     return reconstructProject
            //   }

            // }
          }

          if (reconstructProject.items.length > 0) {
            this.searchLoading = false;
            return reconstructProject;
          } else {
            this.searchLoading = false;
            return null;
          }
          // }

          // return null;

          // console.log("new array is: ", reconstructProject)
        } else {
          this.searchLoading = false;
          return this.selectedProject;
        }
      } else {
        this.searchLoading = false;
        return this.selectedProject;
      }

      // if (this.selectedProject.length > 0) {
      //   return true;
      // } else return false;
    },
  },
  watch: {
    // whenever question changes, this function will run
    
//           selectedProject: function () {
//             // this.answer = 'Waiting for you to stop typing...'
//             // this.debouncedGetAnswer()
//             // console.log("selected check changed", this.selectedProject)
//             // console.log("refs for myid is: " + this.$refs.myid)
//             // console.log("getelementByid is: " + document.getElementById('myid'))
//             if(this.selectedProject.items && this.selectedProject.items.length > 0) {
//               // console.log("longer than 0")
//               this.$nextTick(function () {
//                 // console.log("items length is: ", this.selectedProject.items.length)
//                 for (let j = 0; j < this.selectedProject.items.length; ++j) {

//     // console.log("j is: ", j)
//                   const listItem = document.getElementById('item' + j)
//                   // console.log("item is: ", j, listItem)
//                   // console.log("list item is: ", listItem)
//                  new Sortable(listItem, {
//                     animation: 350,
//                     group: 'nested',
//                     ghostClass: 'sortable-background-class',
//                     dragoverBubble: true,
//                     // invertSwap: true,
//                     // swap: true, // Enable swap plugin
//                     // swapClass: 'highlight', // The class applied to the hovered swap item
//                     fallbackOnBody: true,
//     		            swapThreshold: 0.65,
//                     // protectRoot:true,
// // nested: false,
//                     // multiDrag: true, // Enable the plugin
//                     // selectedClass: "sortable-selected-item", // Class name for selected item
//                     handle: '.itemHandle', // handle's class
//                     // multiDragKey: 'CTRL', // Key that must be down for items to be selected
//                     //  containment: 'parent',

                    
// 	easing: "cubic-bezier(1, 0, 0, 1)", // Easing for animation. Defaults to null. See https://easings.net/ for examples.
// 	// handle: ".my-handle",  // Drag handle selector within list items
// 	// filter: ".ignore-elements",  // Selectors that do not lead to dragging (String or Function)
// 	// preventOnFilter: true, // Call `event.preventDefault()` when triggered `filter`
// 	// draggable: ".item",  // Specifies which items inside the element should be draggable

// 	dataIdAttr: 'item' + j, // HTML attribute that is used by the `toArray()` method
//   id: 'item' + j,

//                     // Called when an item is selected
//                     onSelect: function(/**Event*/evt) {
//                       evt.item // The selected item
//                       // console.log("selected: ", evt.item)
//                       // console.log("selected item is: ", evt.item)
//                       // var group = evt.target.id;
//                       // console.log('receiving item id: ', parseInt(group.replace('item','')));
//                       // console.log("id is: ", val)
//                     },

//                     // Called when an item is deselected
//                     onDeselect: function(/**Event*/evt) {
//                       evt.item // The deselected item
//                       // console.log("deselected: ", evt.item)
//                       // console.log("deselected item is: ", evt.item)
//                     },
//                     // Element dragging ended
// 	onEnd: function (/**Event*/evt) {
// 		// var itemEl = evt.item;  // dragged HTMLElement
//     // // console.log("item element id is: ", itemEl.id)
//     // console.log("event from item is: ", evt.Sortable("toArray"))
   
//     // // console.log("sortable to array is: ", itemEl.sortable( "toArray"))
// 		// evt.to;    // target list
// 		// evt.from;  // previous list
// 		// evt.oldIndex;  // element's old index within old parent
   
// 		// evt.newIndex;  // element's new index within new parent
 
// 		// evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
//     // // console.log("onEnd Dragging: oldIndex is: ", evt.oldDraggableIndex)
// 		// evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
//     // // console.log("onEnd Dragging: newIndex is: ", evt.newDraggableIndex)
// 		// evt.clone // the clone element
// 		// evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
// const fromItem = parseInt(evt.from.id.replace(/item/g,''))
// const toItem =  parseInt(evt.to.id.replace(/item/g,''))
// vm.selectedItem = toItem
//     // console.log("from is: ", from)
//     // console.log("to is: ", to)
//         // setTimeout(function(){
//           // console.log("take this obj: ", vm.selectedProject.items[from], " and move to new index + re-index: ", to);
//           // .splice(selectedItem, 1);
//         // console.log("Send id: ", vm.selectedProject._id)
//         // console.log("from is: ", from)
//         // console.log("to is: ", to)
//         if(!isNaN(fromItem) && !isNaN(toItem)) {
//           vm.backgroundProcess.message = `Moving Item in DB...`;
//           try {
//             axios
//             .put(
//               baseURL +
//                 "/project/" +
//                 vm.selectedProject._id + 
//                 "/item/move",
//               {fromItem: fromItem, toItem: toItem}
//             )
//             .then(() => {
//               vm.backgroundProcess.message = null;
          
//             });
//            } catch (error) {
//             vm.backgroundProcess.message = error.message;
//                           this.$q.notify({
//                             color: "red-5",
//                             progress: true,
//                             textColor: "white",
//                             icon: "warning",
//                             position: "bottom-left",
//                             message: error.message,
//                           });
          
//                           setTimeout(function(){
//                             vm.backgroundProcess.message = null;
//           }, 5000);
//                         }
//         } else {
//           vm.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: this.language === 'he' ? 'לא נבחר טווח אייטמים!' : this.language === 'ar' ? '????' : `No item Range was selected!`,
//           });
//         }
       

//         //   var array = _.cloneDeep(vm.selectedProject.items)
//         //   console.log("cloned array is: ", array)
//         //  var splicedItem = array.splice(from, 1);
//         //   console.log("after removing item from array: ", array)
//         //   // var splicedItem = vm.selectedProject.items[from]
//         //   console.log("spliced item is: ", splicedItem[0])
          
//         //   array.splice(to, 0, splicedItem[0]);
//         //   // // .splice(from, 1);
//         //   console.log("newArray is: ", array);
//           // var newArray = vm.selectedProject.items
//             // console.log("take this obj: ", vm.selectedProject.items[from], " and move to new index + re-index: ", to);
//       // }, 1000);
    
//     // console.log("Update DB!!")
// 	},

//                   })

//     if(this.selectedProject.items[j].elements !== undefined) {
//       if(this.selectedProject.items[j].elements !== [] && this.selectedProject.items[j].elements.length > 0) {
//         // console.log("elements length is: ", this.selectedProject.items[j].elements.length)
//         for (let i = 0; i < this.selectedProject.items[j].elements.length; ++i) {
//           // console.log("creating element: ", i, "for item: ", j)
          
//     // Sortable.mount(new MultiDrag());
//     const listElement = document.getElementById('item'+ j + 'element' + i)
//     // console.log("element is: ", i, listElement)
//     // console.log("list element is: ", listElement)
//     var elSortable = new Sortable(listElement, {
//     animation: 350,
//     group: 'nested',
//     ghostClass: 'sortable-background-class',
//     dragoverBubble: true,
//     // swap: true, // Enable swap plugin
//     // swapClass: 'highlight', // The class applied to the hovered swap item
//     fallbackOnBody: true,
//     // nested: true,
//     // protectRoot:true,
//     // invertSwap: true,
//     swapThreshold: 0.65,
//     handle: '.handle', // handle's class
//     // multiDrag: true, // Enable the plugin
//     // selectedClass: "sortable-selected-element", // Class name for selected item
//     // multiDragKey: 'CTRL', // Key that must be down for items to be selected
// id: i,
//     dataIdAttr: 'item'+ j + 'element' + i, // HTML attribute that is used by the `toArray()` method
//     // Called when an item is selected
//     onSelect: function(/**Event*/evt) {
//     evt.item // The selected item
//     // console.log("selected item is: ", evt.item)
//     var group = evt.target.id;

//     // console.log('receiving element from item ???', parseInt(group.replace('element','')));
//     // console.log("id is: ", val)
//     },

//   //   onSort: function (evt) {
//   //   // console.log("evt is: ", evt)
  
//   //  },   
 
//     // Called when an item is deselected
//     onDeselect: function(/**Event*/evt) {
//     evt.item // The deselected item
//     // this.selectedItem = null
//     // this.selectedElement = null
//     // this.element = null
//     // console.log("deselected item is: ", evt.item)
//     },
//     onMove: event => {
      
//       // function doCheck () {
//       //   console.log("event is:", event)
//         if(!event.to.id.includes('element')) {
//           // console.log("Moved outside!")
//           return false
//         } else return true
//       // }
//       // _.debounce(doCheck, 500);
    
//       // return !event.related.classList.contains('disabled');
//  },
//     onEnd: function (/**Event*/evt) {
      
//       // var itemEl = evt.item;  // dragged HTMLElement
//       // // console.log("item element id is: ", itemEl.id)
//       // // console.log("id is: ", 'item' + j)
     
//       // // console.log("sortable to array is: ", itemEl.sortable( "toArray"))
//       // evt.to;    // target list
//       // evt.from;  // previous list
//       // evt.oldIndex;  // element's old index within old parent
     
//       // evt.newIndex;  // element's new index within new parent
   
//       // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
//       // // console.log("onEnd Dragging: oldIndex is: ", evt.oldDraggableIndex)
//       // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
//       // // console.log("onEnd Dragging: newIndex is: ", evt.newDraggableIndex)
//       // evt.clone // the clone element
//       // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
// // console.log("event is: ", evt)
// // var elementFrom = j
// // // var elementTo = 
// // console.log("event item from is: ", evt.from.getAttribute('groupindex'))
// // console.log("event item from is: ",  evt.from.getAttribute('groupindex'))
// // console.log("event item to is: ",  evt.to.getAttribute('groupindex'))
// // console.log("event Element from is: ", evt.from.id)
// // var toItem = 
// // var fromItem = 



// const convertItemTo = evt.to.getAttribute('groupindex');
// const convertItemFrom = evt.from.getAttribute('groupindex');
// var toItem =  convertItemTo ? convertItemTo : j
// var fromItem =  convertItemFrom ? convertItemFrom : j
// // console.log("event Item to is:", toItem)
// // console.log("event Item from is:", fromItem)
// vm.selectedItem = toItem
// // console.log("event 1 is: ", evt.from.id[0])
// // console.log("event 2 is: ", evt.from.id[1])
// // const foundDoc = document.querySelector("div[groupindex]")
// // console.log("found doc index is: ", foundDoc.groupindex)
// // console.log("event Element index to is: ", evt.to.id.getAttribute('groupindex'))
// // elSortable.sort()
// // const array = elSortable.sort()
// // console.log("array is: ", array)
// // CHECK IF MULTIPLE
// // if(evt.from.childNodes.length < 3) {
// // // console.log ("handle multiple drag")
// // console.log("Multi: event Element to is:", evt.to)
// // console.log("Multi: event Element from is:", evt.from)
// // console.log("Multi: from: child divs length is:", evt.to.childNodes.length)
// // // for( i=0; i< evt.to.childNodes.length; i++ )
// // // {
 
// // // //  var childDiv = evt.to[i];
// // //  console.log("Multi: to: child div is:", evt.to.childNodes[i])
// // // }
// // } else {
//   const elValue = 'item' + j + 'element'
// // console.log(" element value is: ", i)
// var toElement =  parseInt(evt.to.id.replace(elValue, ''))
// var fromElement =  parseInt(evt.from.id.replace(elValue, ''))
// console.log("event Element to is:", toElement)
// // console.log("event Element from is:", fromElement)
// vm.selectedElement = toElement

// // console.log("item is: ", evt.item)
// // console.log("to event is: ", evt.to.id)
// // console.log("from element is: ", parseInt(evt.from.id.replace(elValue, '')))//g,''))
// // console.log("to element is: ", parseInt(evt.to.id.replace(elValue, '')))
// // console.log("from event is: ", evt.from.id)
// //       const from = parseInt(evt.from.id.replace(/item/g,''))
// // const to =  parseInt(evt.to.id.replace(/item/g,''))

// if(!isNaN(fromItem) && !isNaN(toItem)) {
//   if(!isNaN(fromElement) && !isNaN(toElement)) {
//   vm.backgroundProcess.message = `Moving Element in DB...`;
//   try {
//     axios
//     .put(
//       baseURL +
//         "/project/" +
//         vm.selectedProject._id + 
//         "/element/move",
//       {fromItem: fromItem, toItem: toItem, fromElement: fromElement, toElement: toElement}
//     )
//     .then(() => {
//       vm.backgroundProcess.message = null;
//     });
//    } catch (error) {
//     vm.backgroundProcess.message = error.message;
//                   this.$q.notify({
//                     color: "red-5",
//                     progress: true,
//                     textColor: "white",
//                     icon: "warning",
//                     position: "bottom-left",
//                     message: error.message,
//                   });
  
//                   setTimeout(function(){
//                     vm.backgroundProcess.message = null;
//   }, 5000);
//                 }
//               } else {
//                 vm.$q.notify({
//                   color: "red-5",
//                   textColor: "white",
//                   icon: "warning",
//                   progress: true,
//                   position: "bottom-left",
//                   message: this.language === 'he' ? 'לא נבחר טווח פריטים!' : this.language === 'ar' ? '????' : `No Element Range was given!`,
//                 });
//               }
// } else {
//           vm.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: this.language === 'he' ? 'לא נבחר טווח אייטמים!' : this.language === 'ar' ? '????' : `No item Range was given!`,
//           });
//         }
// // }



// //   const elementFrom = parseInt(evt.from.id.replace(/element/g,''))
// //   const elementTo =  parseInt(evt.to.id.replace(/element/g,''))
//       // console.log("from is: ", from)
//       // console.log("to is: ", to)
//           // setTimeout(function(){
//             // console.log("take this obj: ", vm.selectedProject.items[from], " and move to new index + re-index: ", to);
//             // .splice(selectedItem, 1);


//           // console.log("Send id: ", vm.selectedProject._id)
//           // console.log("elementFrom is: ", elementFrom)
//           // console.log("elementTo is: ", elementTo)
  
//           // axios
//           // .put(
//           //   baseURL +
//           //     "/project/" +
//           //     vm.selectedProject._id + 
//           //     "/item/move",
//           //   {from: from, to: to}
//           // )
//           // .then(() => {
//           //   vm.backgroundProcess.message = null;
//           // });
  
//           //   var array = _.cloneDeep(vm.selectedProject.items)
//           //   console.log("cloned array is: ", array)
//           //  var splicedItem = array.splice(from, 1);
//           //   console.log("after removing item from array: ", array)
//           //   // var splicedItem = vm.selectedProject.items[from]
//           //   console.log("spliced item is: ", splicedItem[0])
            
//           //   array.splice(to, 0, splicedItem[0]);
//           //   // // .splice(from, 1);
//           //   console.log("newArray is: ", array);
//             // var newArray = vm.selectedProject.items
//               // console.log("take this obj: ", vm.selectedProject.items[from], " and move to new index + re-index: ", to);
//         // }, 1000);
      
//       // console.log("Update DB!!")
//     },

//     })
//     // Sortable.mount(new MultiDrag(), new Swap());

//         }

//       }
//     }

//                 }
//                 })

//             }

//           },
    filter: function () {
      if (this.filter !== "CG") {
        // console.log("Filter changed");

        // if(this.filter !== 'CG') {
        if (this.element.src) {
          if (this.element.src.substring(0, 5) === "blob:") {
            window.URL.revokeObjectURL(this.element.src);
            if (this.cropper) {
              this.cropper.destroy();
            }
            // this.cropper = null;
          } else this.element.src = null;
        }
        // }

        this.previewCropped = null;
        this.selectedFile = [];
        this.CGUploadProgress = 0;
        this.zoom = 0;
        this.flipXVal = 1;
        this.flipYVal = 1;
        // this.cg = {
        //   lockCG: false,
        //   cropper: null,
        //   // objectUrl: null,
        //   // previewCropped: null,
        //   // selectedFile: null,
        //   // debouncedUpdatePreview: _.debounce(this.updatePreview, 257),
        //   // files: null,
        // };
      }
      //  else {

      //   this.selectFile()
      // }
    },

    rtl: function (e) {
      this.elementsCheck()
      // console.log("event is:", e)
     
    },
//     keyListener: function (e) {
//       // console.log("Event has happend!")
//       // function doc_keyUp(e) {
//         var e = e || window.event; // for IE to cover IEs window event-object
// console.log("event code is: ", e.code)
//         // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
//         // if (e.ctrlKey && e.key === 'ArrowDown') {
//         //     // call your function to do the thing
//         //     testHotKeys();
//         // }
//     // }
//       // if (e.key === '1' && (e.ctrlKey || e.metaKey)) {
//       //   this.$root.$emit('userAlert', 'fatal', 'A message from the president', 'Obey the president!')
//       // } else if (e.key === '2' && (e.ctrlKey || e.metaKey)) {
//       //   this.$root.$emit('userNotify', 'Ivey sent you a new message', '5 min ago.', 'notifications_active')
//       // } else if (e.key === '3' && (e.ctrlKey || e.metaKey)) {
//       //   this.$root.$emit('showProgress', 0.35)
//       // } else if (e.key === '4' && (e.ctrlKey || e.metaKey)) {
//       //   this.$root.$emit('showProgress', 0.70)
//       // } else if (e.key === '5' && (e.ctrlKey || e.metaKey)) {
//       //   this.$root.$emit('showProgress', 1.00)
//       // }
//     }
  },
  methods: {
    checkElementClass(id){
    var testId = 'item' + this.selectedItem + 'element' + this.selectedElement
    // console.log("test is: ", testId)
    if(id === testId) {
      return true
    } else return false
      
//       var idToSpecific = 
// if(id)
    },
    toggleDebug(){
      if(this.debug) {
        this.debug = false
      } else this.debug = true
    },
    translateFilter(filter) {
      if(filter === 'Super') {
        return 'סופר'
      }
      else if(filter === 'Stripe') {
        return 'טסרייפ'
      }  else if(filter === 'Box') {
        return 'תיבה'
      }  else if(filter === 'Counter') {
        return 'קאונטר'
      }   else if(filter === 'Ticker') {
        return 'טיקר'
      }   else if(filter === 'Roller') {
        return 'רולר'
      }   else if(filter === 'CG') {
        return `סי ג'י`
      }   else if(filter === 'Finger') {
        return 'אצבע'
      }   else if(filter === 'Live') {
        return 'לייב'
      }   else if(filter === 'Promo') {
        return 'פרומו'
      } else return filter
    },
  elementsCheck() {
    var checkIfStripeOnAir = this.onAirElements.find(
      (x) => x.type === 'Stripe'
    );
    var checkIfBoxOnAir = this.onAirElements.find(
      (x) => x.type === 'Box'
    );
    var checkIfCounterOnAir = this.onAirElements.find(
      (x) => x.type === 'Counter'
    );
    var checkIfTickerOnAir = this.onAirElements.find(
      (x) => x.type === 'Ticker'
    );
    var checkIfRollerrOnAir = this.onAirElements.find(
      (x) => x.type === 'Roller'
    );
    if(checkIfStripeOnAir) {
      this.$q.notify({
        color: "red",
        // textColor,
        icon: "priority_high",
        message: this.language === 'he' ? 'סטרייפ באוויר! תחליפו חזרה, תוציאו אותו ואז תחליפו חופשי!' : this.language === 'ar' ? '????' : `Stripe Is on Air! Switch Back, Take element out and then switch freely!`,
        progress: true,
        position: "bottom-left",
      });
    }
    if(checkIfBoxOnAir) {
      this.$q.notify({
        color: "red",
        // textColor,
        icon: "priority_high",
        message: this.language === 'he' ? 'תיבה באוויר! תחליפו חזרה, תוציאו אותה ואז תחליפו חופשי!' : this.language === 'ar' ? '????' : `Box Is on Air! Switch Back, Take element out and then switch freely!`,
        progress: true,
        position: "bottom-left",
      });
    }
    if(checkIfCounterOnAir) {
      this.$q.notify({
        color: "red",
        // textColor,
        icon: "priority_high",
        message: this.language === 'he' ? 'קאונטר באוויר! תחליפו חזרה, תוציאו אותו ואז תחליפו חופשי!' : this.language === 'ar' ? '????' : `Counter Is on Air! Switch Back, Take element out and then switch freely!`,
        progress: true,
        position: "bottom-left",
      });
    }
    if(checkIfTickerOnAir) {
      this.$q.notify({
        color: "red",
        // textColor,
        icon: "priority_high",
        message: this.language === 'he' ? 'טיקר באוויר! תחליפו חזרה, תוציאו אותו ואז תחליפו חופשי!' : this.language === 'ar' ? '????' : `Ticker Is on Air! Switch Back, Take element out and then switch freely!`,
        progress: true,
        position: "bottom-left",
      });
    }
    if(checkIfRollerrOnAir) {
      this.$q.notify({
        color: "red",
        // textColor,
        icon: "priority_high",
        message: this.language === 'he' ? 'רולר באוויר! תחליפו חזרה, תוציאו אותו ואז תחליפו חופשי!' : this.language === 'ar' ? '????' : `Roller Is on Air! Switch Back, Take element out and then switch freely!`,
        progress: true,
        position: "bottom-left",
      });
    }
  },
    cleanUpHotKeys(key) {
      // if(key === '')
      
      var checkIfKey = key.substring(0, 3) === "Key";
      var checkIfDigit = key.substring(0, 5) === "Digit";
if(checkIfKey) {
  return key.slice(3)
} else if(checkIfDigit) {
  return key.slice(5)
} else {
      return key
    }
         },
    testHotKeys(e){
      var e = e || window.event; // for IE to cover IEs window event-object
      // console.log("hot key was pressed")
      // console.log("pressed key is: ", e.code)
      // if(e.altKey && e.which == 65) {
      //   alert('Keyboard shortcut working!');
      //   return false;
      // }
    
      if(e.code === this.settings.hotkeys.insert) {
// console.log(this.settings.hotkeys.insert + " was pressed!")
this.sendElementToAir(this.element)
      }
      else if(e.code === this.settings.hotkeys.clearSupers) {
        // console.log(this.settings.hotkeys.clearSupers + " was pressed!")
        if(this.element.type === 'Super') {
          this.TakeElementFromAir(this.element)
        }
        
              }
              else if(e.code === this.settings.hotkeys.clearStripe) {
                // console.log(this.settings.hotkeys.clearStripe + " was pressed!")
                
                if(this.element.type === 'Stripe') {
                  this.TakeElementFromAir(this.element)
                }
                      }
                      else if(e.code === this.settings.hotkeys.clearBox) {
                        // console.log(this.settings.hotkeys.clearBox + " was pressed!")
                        if(this.element.type === 'Box') {
                          this.TakeElementFromAir(this.element)
                        }
                        
                              }
                              else if(e.code === this.settings.hotkeys.clearCG) {
                                // console.log(this.settings.hotkeys.clearCG + " was pressed!")
                                if(this.element.type === 'CG') {
                                  this.TakeElementFromAir(this.element)
                                }
                                      }
                                      else if(e.code === this.settings.hotkeys.clearFingers) {
                                        // console.log(this.settings.hotkeys.clearFingers + " was pressed!")
                                        if(this.element.type === 'Finger') {
                                          this.TakeElementFromAir(this.element)
                                        }
                                              }
                                              else if(e.code === this.settings.hotkeys.clearCounter) {
                                                // console.log(this.settings.hotkeys.clearCounter + " was pressed!")
                                                if(this.element.type === 'Counter') {
                                                  this.TakeElementFromAir(this.element)
                                                }
                                                      }
                                                      else if(e.code === this.settings.hotkeys.clearLive) {
                                                        // console.log(this.settings.hotkeys.clearLive + " was pressed!")
                                                        if(this.element.type === 'Live') {
                                                          this.TakeElementFromAir(this.element)
                                                        }
                                                              }
                                                              else if(e.code === this.settings.hotkeys.clearTicker) {
                                                                // console.log(this.settings.hotkeys.clearTicker + " was pressed!")
                                                                if(this.element.type === 'Ticker') {
                                                                  this.TakeElementFromAir(this.element)
                                                                }
                                                                      }
                                                                      else if(e.code === this.settings.hotkeys.clearRoller) {
                                                                        // console.log(this.settings.hotkeys.clearRoller + " was pressed!")
                                                                        if(this.element.type === 'Roller') {
                                                                          this.TakeElementFromAir(this.element)
                                                                        }
                                                                              }
                                                                              else if(e.code === this.settings.hotkeys.clearPromo) {
                                                                                // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                if(this.element.type === 'Promo') {
                                                                                  this.TakeElementFromAir(this.element)
                                                                                }
                                                                                      }
     else if(e.code === this.settings.hotkeys.clearAll) {
        // console.log(this.settings.hotkeys.clearAll + " was pressed!")
        this.clearAll()
              }
              else if(e.altKey && e.code === this.settings.hotkeys.createSuper) {
                // console.log("Create Super Element!")
                this.createElementTemplate('Super')
                this.filter = 'Super'
                // console.log(this.settings.hotkeys.clearAll + " was pressed!")
                // this.clearAll()
                      }
                      else if(e.altKey && e.code === this.settings.hotkeys.createStripe) {
                        // console.log("Create stripe Element!")
                        this.createElementTemplate('Stripe')
                        this.filter = 'Stripe'
                        // console.log(this.settings.hotkeys.createStripe + " was pressed!")
                        // this.TakeElementFromAir(this.element, this.selectedElement)
                              }
                      else if(e.altKey && e.code === this.settings.hotkeys.createBox) {
                        // console.log("Create Box Element!")
                        this.createElementTemplate('Box')
                        this.filter = 'Box'
                        // console.log(this.settings.hotkeys.clearBox + " was pressed!")
                        // this.TakeElementFromAir(this.element, this.selectedElement)
                              }
                              else if(e.altKey && e.code === this.settings.hotkeys.createCG) {
                                // console.log("Create CG Element!")
                                this.createElementTemplate('CG')
                                this.filter = 'CG'
                                // console.log(this.settings.hotkeys.clearCG + " was pressed!")
                                // this.TakeElementFromAir(this.element, this.selectedElement)
                                      }
                                      else if(e.altKey && e.code === this.settings.hotkeys.createFinger) {
                                        // console.log("Create Finger Element!")
                                        this.createElementTemplate('Finger')
                                        this.filter = 'Finger'
                                        // console.log(this.settings.hotkeys.clearFingers + " was pressed!")
                                        // this.TakeElementFromAir(this.element, this.selectedElement)
                                              }
                                              else if(e.altKey && e.code === this.settings.hotkeys.createCounter) {
                                                // console.log("Create Counter Element!")
                                                this.createElementTemplate('Counter')
                                                this.filter = 'Counter'
                                                // console.log(this.settings.hotkeys.clearCounter + " was pressed!")
                                                // this.TakeElementFromAir(this.element, this.selectedElement)
                                                      }
                                                      else if(e.altKey && e.code === this.settings.hotkeys.createLive) {
                                                        // console.log("Create Live Element!")
                                                        this.createElementTemplate('Live')
                                                        this.filter = 'Live'
                                                        // console.log(this.settings.hotkeys.clearLive + " was pressed!")
                                                        // this.TakeElementFromAir(this.element, this.selectedElement)
                                                              }
                                                              else if(e.altKey && e.code === this.settings.hotkeys.createTicker) {
                                                                // console.log("Create Ticker Element!")
                                                                this.createElementTemplate('Ticker')
                                                                this.filter = 'Ticker'
                                                                // console.log(this.settings.hotkeys.clearTicker + " was pressed!")
                                                                // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                      }
                                                                      else if(e.altKey && e.code === this.settings.hotkeys.createRoller) {
                                                                        // console.log("Create Roller Element!")
                                                                        this.createElementTemplate('Roller')
                                                                        this.filter = 'Roller'
                                                                        // console.log(this.settings.hotkeys.clearRoller + " was pressed!")
                                                                        // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                              }
                                                                              else if(e.altKey && e.code === this.settings.hotkeys.createPromo) {
                                                                                // console.log("Create Promo Element!")
                                                                                this.createElementTemplate('Promo')
                                                                                this.filter = 'Promo'
                                                                                // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                                      }
                                                                                      // newProject: '',
                                                                                      // newItem: '',
                                                                                      // newImport: '',
                                                                                      // moveUp: '',
                                                                                      // moveDown: '',
                                                                                      else if(e.altKey && e.code === this.settings.hotkeys.newProject) {
                                                                                        // console.log("Create new Project!")
                                                                                        this.createProject()
                                                                                        // this.createElementTemplate('Promo')
                                                                                        // this.filter = 'Promo'
                                                                                        // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                        // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                                              }
                                                                                              else if(e.altKey && e.code === this.settings.hotkeys.newItem) {
                                                                                                // console.log("Create New item!")
                                                                                                this.newItem()
                                                                                                // this.createElementTemplate('Promo')
                                                                                                // this.filter = 'Promo'
                                                                                                // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                                // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                                                      }
                                                                                                      else if(e.altKey && e.code === this.settings.hotkeys.newImport) {
                                                                                                        // console.log("Create New Import!")
                                                                                                        if(this.importDialog) {
                                                                                                          this.importDialog = false
                                                                                                        } else {
                                                                                                          this.importDialog = true
                                                                                                        }
                                                                                                        // this.createElementTemplate('Promo')
                                                                                                        // this.filter = 'Promo'
                                                                                                        // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                                        // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                                                              }
                                                                                                              else if(e.code === this.settings.hotkeys.moveUp) {
                                                                                                                // console.log("Move up!")
                                                                                                                this.moveSelectedUp()
                                                                                                                // this.createElementTemplate('Promo')
                                                                                                                // this.filter = 'Promo'
                                                                                                                // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                                                // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                                                                      }
                                                                                                                      else if(e.code === this.settings.hotkeys.moveDown) {
                                                                                                                        // console.log("Move Down!")
                                                                                                                        this.moveSelectedDown()
                                                                                                                        // this.createElementTemplate('Promo')
                                                                                                                        // this.filter = 'Promo'
                                                                                                                        // console.log(this.settings.hotkeys.clearPromo + " was pressed!")
                                                                                                                        // this.TakeElementFromAir(this.element, this.selectedElement)
                                                                                                                              }

                                                                                                                              else if(e.ctrlKey && e.shiftKey && e.code === 'KeyX') {
                                                                                                                                // console.log("Doing cut!")
                                                                                                                                console.log("not cutting items fix!")
                                                                                                                                // if(this.element) {

                                                                                                                                // } else {
                                                                                                                                  this.cutSelectedElement()
                                                                                                                                // }
                                                                                                                                
                                                                                                                                      }
                                                                                                                                      else if(e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
                                                                                                                                        // console.log("Doing copy!")
                                                                                                                                        console.log("not copying items fix!")  
                                                                                                                                        this.copySelectedElement()
                                                                                                                                              }
                                                                                                                                              else if(e.ctrlKey && e.shiftKey && e.code === 'KeyV') {
                                                                                                                                                // console.log("Doing paste!")
                                                                                                                                                console.log("not pasting items fix!") 
                                                                                                                                                this.pasteSelectedElement()
                                                                                                                                                      }
                                                                                                                                                      else if(e.altKey && e.shiftKey && e.code === 'KeyD') {
                                                                                                                                                        console.log("not deleting items fix!") 
                                                                                                                                                        // console.log("Doing delete!")
                                                                                                                                                        this.deleteElement(this.selectedItem, this.selectedElement, this.element.name)
                                                                                                                                                              }
    },
//     changeRTL(){
//       // console.log("doing rtl check!")
//       var forbiddenStripeCheck = this.onAirElements.find(
//         (x) => x.type === 'Stripe'
//       );
//       var forbiddenTickerCheck = this.onAirElements.find(
//         (x) => x.type === 'Ticker'
//       );
//       var forbiddenBoxCheck = this.onAirElements.find(
//         (x) => x.type === 'Box'
//       );
//       var forbiddenCounterCheck = this.onAirElements.find(
//         (x) => x.type === 'Counter'
//       );
//       var forbiddenRollerCheck = this.onAirElements.find(
//         (x) => x.type === 'Roller'
//       );
   
//       if (forbiddenStripeCheck) {
// if(this.rtl) {
//   this.rtl = true
//   this.$q.notify({
//     color: "red-5",
//     textColor: "white",
//     icon: "warning",
//     progress: true,
//     position: "bottom-left",
//     message: `Please take out Stripe element`,
//   });
// } else {
//   this.rtl = false
//   this.$q.notify({
//     color: "red-5",
//     textColor: "white",
//     icon: "warning",
//     progress: true,
//     position: "bottom-left",
//     message: `Please take out Stripe element`,
//   });
// }
//       }
//       if (forbiddenTickerCheck) {
//         if(this.rtl) {
//           this.rtl = true
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Ticker element`,
//           });
//         } else {
//           this.rtl = false
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Ticker element`,
//           });
//         }
//       }
//       if (forbiddenBoxCheck) {
//         if(this.rtl) {
//           this.rtl = true
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Box element`,
//           });
//         } else {
//           this.rtl = false
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Box element`,
//           });
//         }
//       }
//       if (forbiddenCounterCheck) {
//         if(this.rtl) {
//           this.rtl = true
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Counter element`,
//           });
//         } else {
//           this.rtl = false
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Counter element`,
//           });
//         }
//       }
//       if (forbiddenRollerCheck) {
//         if(this.rtl) {
//           this.rtl = true
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Roller element`,
//           });
//         } else {
//           this.rtl = false
//           this.$q.notify({
//             color: "red-5",
//             textColor: "white",
//             icon: "warning",
//             progress: true,
//             position: "bottom-left",
//             message: `Please take out Roller element`,
//           });
//         }
//       }
//       // if(this.rtl) {
//       //   this.rtl = false
//       // } else {
//       //   this.rtl = true
//       // }
//     },
    importTextData() {
      // console.log("hello from import text data, val is: ", this.importedData);

      var data = _.clone(this.importedData);
      this.backgroundProcess.message = this.language === 'he' ? 'מפריד אייטמים...' : this.language === 'ar' ? '????' : "Splitting Items...";
      data = data.split("---");
      var createItemArray = [];
      // console.log("data length is: ", data.length);
      // console.log("selectedProject is: ", this.selectedProject);
      if (this.selectedProject.length === 0) {
        for (var j = 0; j < data.length; j++) {
          this.backgroundProcess.message = this.language === 'he' ? `מעבד אייטם מספר ${j + 1}` : this.language === 'ar' ? '????' : `Processing item ${j + 1}`;
          // this.backgroundProcess.message = `Checking for New Lines for item ${
          //   j + 1
          // }`;
          if (this.importedData.includes("\n")) {
            // console.log("found new lines!")
            this.backgroundProcess.message = this.language === 'he' ? `מוחק שורות של אייטם מספר ${j + 1}` : this.language === 'ar' ? '????' : `Removing Lines for item ${
              j + 1
            }`;
            data[j] = data[j].replace(/\n/g, "");
            this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
          }
          this.backgroundProcess.message = this.language === 'he' ? `מפריד תגיות לאייטם ${j + 1}.` : this.language === 'ar' ? '????' : `Splitting Tags for item ${j + 1}`;
          var oneLinerTest = data[j]
            .split(
              /(?=S#)|(?= S#)|(?=S# )|(?=SR#)|(?= SR#)|(?=SR# )|(?=T#)| (?= T#)|(?=T# )|(?=TR#)| (?= TR#)|(?=TR# )|(?=BX#)| (?= BX#)|(?=BX# )|(?=BXR#)| (?= BXR#)|(?=BXR# )|(?=CG#)|(?= CG#)|(?=CG# )|(?=FBL#)|(?= F#)|(?=F# )|(?=F#)|(?= FTL#)|(?=FTL# )|(?=FBR#)|(?= FBR#)|(?=FBR# )|(?=FTR#)|(?= FTR#)|(?=FTR# )|(?=C#)|(?= C#)|(?=C# )|(?=CU#)|(?= CU#)|(?=CU# )|(?=L#)|(?= L#)|(?=L#)|(?=TI#)|(?= TI#)|(?=TI# )|(?=RO#)|(?= RO#)|(?=RO# )|(?=PR#)| (?= PR#)|(?=PR# )|(?=PRR#)| (?= PRR#)|(?=PRR# )/gi
            )
            .filter(String);
          for (var i = 0; i < oneLinerTest.length; i++) {
            this.backgroundProcess.message = this.language === 'he' ? `בודק רווחים ריקים לאייטם מספר ${j + 1}...` : this.language === 'ar' ? '????' : `Checking for empty spaces for item ${
              j + 1
            }`;
            if (oneLinerTest[i][0] === " ") {
              this.backgroundProcess.message = this.language === 'he' ? `מוחק רווחים ריקים לאייטם מספר ${j + 1}...` : this.language === 'ar' ? '????' : `Removing empty spaces for item ${
                j + 1
              }`;
              // console.log("found space! at index: ", i, "array to remove: ", oneLinerTest[i].slice(0))
              // oneLinerTest[i].substr(1)
              oneLinerTest[i] = oneLinerTest[i].substring(1);
              this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
            }
            // if(oneLinerTest[i] === '') {
            //   console.log("testing if empty")
            //   oneLinerTest[i] = oneLinerTest.splice(i, 1)
            // }

            var doc = oneLinerTest;

            // console.log("oneliner test is: ", oneLinerTest);
            // var testSplitOneLiner = this.importedData.split(/S# |SL#|SR#|T#|CG#|F#|FBL#|FTL#|FBR#|FTR#|C#|L#|TI# |RO#/).replace('\n', '')
            // console.log("splitted one liner is: ", testSplitOneLiner)
            // var cleanAnswer = []
            // console.log("answerlength is: ", doc.length);
            // console.log('match is: ', answer[0].match("George"))
            // console.log('match is: ', answer[0].match("S#"))
            var createElementsArray = [];

            for (var i = 0; i < doc.length; i++) {
              this.backgroundProcess.message = this.language === 'he' ? `מחפש אלמנטים בתוך האייטם מספר ${j + 1}...` : this.language === 'ar' ? '????' : `Looking for elements in item ${
                j + 1
              }`;

              // console.log('answer[i] is: ', answer[i].match("George"))
              if (doc[i].match("S#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין סופר...` : this.language === 'ar' ? '????' : `Creating Super...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות...` : this.language === 'ar' ? '????' : `Removing Super Tags...`;
                doc[i] = doc[i].replace(/S# |S#| S#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מחפש טייטל...` : this.language === 'ar' ? '????' : `Looking For Title...`;
                if (doc[i].match("A#")) {
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הטייטל.` : this.language === 'ar' ? '????' : `Cleaing Title Tags...`;
                  var newSplit = doc[i].split("A#");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  // console.log("new split length is: ", newSplit.length)
                  if (newSplit.length > 1) {
                    var lengthRemovedIndex = newSplit.length - 1;
                    // this.backgroundProcess.message = this.language === 'he' ? `מוסיף טייטל ל-${newSplit[0]}.` : this.language === 'ar' ? '????' : `Adding Title for ${newSplit[0]}`;
                    for (var k = 0; k < lengthRemovedIndex; k++) {
                      this.backgroundProcess.message = this.language === 'he' ? `מוסיף טייטל... ${newSplit[
                        k + 1
                      ].substring(0, 20)}... עבור ${newSplit[0].substring(
                        0,
                        20
                      )}...` : this.language === 'ar' ? '????' : `Adding title ${newSplit[
                        k + 1
                      ].substring(0, 20)}... for ${newSplit[0].substring(
                        0,
                        20
                      )}...`;
                      createElementsArray.push({
                        name: `Super Left - ${newSplit[0]} ${k + 1}`,
                        index: null,
                        uid: uuidv4(),
                        type: "Super",
                        effect: "Wipe",
                        position: "Left",
                        person: newSplit[0],
                        title: newSplit[k + 1],
                      });
                      this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    }
                  } else {
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף טייטל... ${newSplit[
                      k + 1
                    ].substring(0, 20)}... עבור ${newSplit[0].substring(
                      0,
                      20
                    )}...` : this.language === 'ar' ? '????' : `Adding title ${newSplit[
                      k + 1
                    ].substring(0, 20)}... for ${newSplit[0].substring(
                      0,
                      20
                    )}...`;
                    createElementsArray.push({
                      name: `Super Left - ${newSplit[0]}`,
                      index: null,
                      uid: uuidv4(),
                      type: "Super",
                      effect: "Wipe",
                      position: "Left",
                      name: newSplit[0],
                      title: newSplit[1],
                    });
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  }

                  // doc[i].match("S#")
                }

                // createElementsArray.push({
                //   type: 'Super',
                //   position: null,
                //   data: doc[i]
                // })
                // CHECK IF TAGS ARE LEFT!
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("SR#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין סופר ימין.` : this.language === 'ar' ? '????' : `Creating Right Super...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הסופר...` : this.language === 'ar' ? '????' : `Removing Super Tags...`;
                doc[i] = doc[i].replace(/SR# |SR#| SR#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // this.backgroundProcess.message = `Looking For Title...`;
                if (doc[i].match("A#")) {
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות...` : this.language === 'ar' ? '????' : `Cleaing Title Tags...`;
                  var newSplit = doc[i].split("A#");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  // console.log("new split length is: ", newSplit.length)
                  if (newSplit.length > 1) {
                    var lengthRemovedIndex = newSplit.length - 1;
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף טייטל עבור ${newSplit[0].substring(
                      0,
                      20
                    )}` : this.language === 'ar' ? '????' : `Adding Title for ${newSplit[0].substring(
                      0,
                      20
                    )}`;
                    for (var k = 0; k < lengthRemovedIndex; k++) {
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף טייטל... ${newSplit[
                        k + 1
                      ].substring(0, 20)}... עבור ${newSplit[0].substring(
                        0,
                        20
                      )}...` : this.language === 'ar' ? '????' : `Adding title ${newSplit[
                        k + 1
                      ].substring(0, 20)}... for ${newSplit[0].substring(
                        0,
                        20
                      )}...`;
                      createElementsArray.push({
                        name: `Super Right - ${newSplit[0]} ${k + 1}`,
                        index: null,
                        uid: uuidv4(),
                        type: "Super",
                        effect: "Wipe",
                        position: null,
                        name: newSplit[0],
                        title: newSplit[k + 1],
                      });
                      this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    }
                  } else {
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף טייטל... ${newSplit[
                      k + 1
                    ].substring(0, 20)}... עבור ${newSplit[0].substring(
                      0,
                      20
                    )}...` : this.language === 'ar' ? '????' : `Adding title ${newSplit[
                      k + 1
                    ].substring(0, 20)}... for ${newSplit[0].substring(
                      0,
                      20
                    )}...`;
                    createElementsArray.push({
                      name: `Super Right - ${newSplit[0]}`,
                      index: null,
                      uid: uuidv4(),
                      type: "Super",
                      effect: "Wipe",
                      position: null,
                      name: newSplit[0],
                      title: newSplit[1],
                    });
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  }

                  // doc[i].match("S#")
                }
                // } else if (doc[i].match("SL#")) {
                //   // console.log('found s')
                //   this.backgroundProcess.message = `Creating Left Super...`;
                //   this.backgroundProcess.message = `Removing Super Tags...`;
                //   doc[i] = doc[i].replace(/SL# |SL#| SL#/gi, "");
                //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //   this.backgroundProcess.message = `Looking For Title...`;

                //   if (doc[i].match("A#")) {
                //     this.backgroundProcess.message = `Cleaing Title Tags...`;
                //     var newSplit = doc[i].split("A#");
                //     this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //     // console.log("new split length is: ", newSplit.length)
                //     if (newSplit.length > 1) {
                //       var lengthRemovedIndex = newSplit.length - 1;
                //       this.backgroundProcess.message = `Adding Title for ${newSplit[0].substring(
                //         0,
                //         20
                //       )}...`;
                //       for (var k = 0; k < lengthRemovedIndex; k++) {
                //         this.backgroundProcess.message = `Adding title ${newSplit[
                //           k + 1
                //         ].substring(0, 20)}... for ${newSplit[0].substring(
                //           0,
                //           20
                //         )}...`;
                //         createElementsArray.push({
                //           name: `Super Left - ${newSplit[0]} ${k + 1}`,
                //           index: null,
                //           uid: uuidv4(),
                //           type: "Super",
                //           position: null,
                //           person: newSplit[0],
                //           title: newSplit[k + 1],
                //         });
                //         this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //       }
                //     } else {
                //       this.backgroundProcess.message = `Adding title ${newSplit[1].substring(
                //         0,
                //         20
                //       )} for ${newSplit[0].substring(0, 20)}...`;
                //       createElementsArray.push({
                //         name: `Super Left - ${newSplit[0]}`,
                //         index: null,
                //         uid: uuidv4(),
                //         type: "Super",
                //         position: null,
                //         name: newSplit[0],
                //         title: newSplit[1],
                //       });
                //       this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //     }

                //     // doc[i].match("S#")
                //   }
              } else if (doc[i].match("T#")) {
                // console.log("found t");
                this.backgroundProcess.message = this.language === 'he' ? `מכין סטרייפ.` : this.language === 'ar' ? '????' : `Creating Stripe...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיול של סטרייפ...` : this.language === 'ar' ? '????' : `Removing Stripe Tags...`;
                doc[i] = doc[i].replace(/T# |T#| T#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף סטרייפ ${doc[
                  i
                ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Stripe ${doc[
                  i
                ].substring(0, 20)}...`;

                if (doc[i].match("A#")) {
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק הפרדות...` : this.language === 'ar' ? '????' : `Cleaing Stripe Separation Tags...`;
                  var newSplit = doc[i].split("A#");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  // console.log("new split length is: ", newSplit.length)
                  if (newSplit.length > 1) {
                    var lengthRemovedIndex = newSplit.length - 1;
                  
                    for (var k = 0; k < lengthRemovedIndex; k++) {

                      this.backgroundProcess.message = this.language === 'he' ? `מוסיף כותרת משנה ל ${newSplit[0].substring(
                        0,
                        20
                      )}...` : this.language === 'ar' ? '????' : `Adding Sub Stripe for ${newSplit[0].substring(
                        0,
                        20
                      )}...`;
                      createElementsArray.push({
                        name: `Stripe - ${newSplit[0]} ${k + 1}`,
                        index: null,
                        uid: uuidv4(),
                        type: "Stripe",
                        effect: "Wipe",
                        position: null,
                        main: newSplit[0],
                        sub: newSplit[k + 1],
                        titleSize: 'Big',
                      });
                      this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    }
                  } else {
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף כותרת משנה ל ${newSplit[1].substring(
                      0,
                      20
                    )}...` : this.language === 'ar' ? '????' : `Adding Sub Stripe for ${newSplit[0].substring(
                      0,
                      20
                    )}...`;
                    createElementsArray.push({
                      name: `Stripe - ${newSplit[0]}`,
                      index: null,
                      uid: uuidv4(),
                      type: "Stripe",
                      effect: "Wipe",
                      position: null,
                      main: newSplit[0],
                      sub: newSplit[1],
                      titleSize: 'Big',
                    });
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  }

                  // doc[i].match("S#")
                } else {
                  createElementsArray.push({
                    name: `${doc[i]}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Stripe",
                    effect: "Wipe",
                    main: doc[i],
                    sub: "",
                    titleSize: 'Big',
                  });
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                }

                // createElementsArray.push({
                //   name: `${doc[i].substring(0, 20)}`,
                //   index: null,
                //   uid: uuidv4(),
                //   type: "Stripe",
                //   main: doc[i],
                //   sub:
                // });
                // this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("TR#")) {
                // console.log("found tr");
                this.backgroundProcess.message = this.language === 'he' ? `מכין סטרייפ ימין.` : this.language === 'ar' ? '????' : `Creating Right Stripe...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של סטרייפ ימין...` : this.language === 'ar' ? '????' : `Removing Right Stripe Tags...`;
                doc[i] = doc[i].replace(/TR# |TR#| TR#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף סטרייפ ${doc[
                  i
                ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Stripe ${doc[
                  i
                ].substring(0, 20)}...`;

                if (doc[i].match("A#")) {
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות מפרידות...` : this.language === 'ar' ? '????' : `Removing Separation Tags...`;
                  var newSplit = doc[i].split("A#");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  // console.log("new split length is: ", newSplit.length)
                  if (newSplit.length > 1) {
                    var lengthRemovedIndex = newSplit.length - 1;
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Adding Stripe for ${newSplit[0].substring(
                      0,
                      20
                    )}...`;
                    for (var k = 0; k < lengthRemovedIndex; k++) {
                      this.backgroundProcess.message = this.language === 'he' ? `מוסיף כותרת משנה ${newSplit[
                        k + 1
                      ].substring(0, 20)}... עבור ${newSplit[0].substring(
                        0,
                        20
                      )}...` : this.language === 'ar' ? '????' : `Adding Sub Stripe ${newSplit[
                        k + 1
                      ].substring(0, 20)}... for ${newSplit[0].substring(
                        0,
                        20
                      )}...`;
                      createElementsArray.push({
                        name: `Stripe - ${newSplit[0]} ${k + 1}`,
                        index: null,
                        uid: uuidv4(),
                        type: "Stripe",
                        effect: "Wipe",
                        position: null,
                        main: newSplit[0],
                        sub: newSplit[k + 1],
                        titleSize: 'Big',
                      });
                      this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    }
                  } else {
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף כותרת משנה ${newSplit[1].substring(
                      0,
                      20
                    )}... עבור ${newSplit[0].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Stripe ${newSplit[1].substring(
                      0,
                      20
                    )}... for ${newSplit[0].substring(0, 20)}...`;
                    createElementsArray.push({
                      name: `Stripe - ${newSplit[0]}`,
                      index: null,
                      uid: uuidv4(),
                      type: "Stripe",
                      effect: "Wipe",
                      position: null,
                      main: newSplit[0],
                      sub: newSplit[1],
                      titleSize: 'Big',
                    });
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  }

                  // doc[i].match("S#")
                } else {
                  createElementsArray.push({
                    name: `${doc[i]}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Stripe",
                    effect: "Wipe",
                    main: doc[i],
                    sub: "",
                    titleSize: 'Big',
                  });
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                }
              } else if (doc[i].match("BX#")) {
                  // console.log('found s')
                  this.backgroundProcess.message = this.language === 'he' ? `מכין תיבה...` : this.language === 'ar' ? '????' : `Creating Box...`;
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של תיבה...` : this.language === 'ar' ? '????' : `Removing Box Tags...`;
                  doc[i] = doc[i].replace(/BX# |BX#| BX#/gi, "");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  this.backgroundProcess.message = this.language === 'he' ? `פןתח תיבה ${doc[i]
                    .split("/")
                    .pop()
                    .substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Box ${doc[i]
                    .split("/")
                    .pop()
                    .substring(0, 20)}...`;
                  createElementsArray.push({
                    name: `Box - ${doc[i].split("/").pop()}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Box",
                    effect: "Push",
                    src: doc[i],
                  });
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
  
                  // createElementsArray.push({
                  //   type: 'Super',
                  //   position: null,
                  //   data: doc[i]
                  // })
                  // CHECK IF TAGS ARE LEFT!
                  // if (
                  //   doc[i].match("S#") ||
                  //   doc[i].match("SL#") ||
                  //   doc[i].match("SR#") ||
                  //   doc[i].match("T#") ||
                  //   doc[i].match("CG#") ||
                  //   doc[i].match("F#") ||
                  //   doc[i].match("FBL#") ||
                  //   doc[i].match("FTL#") ||
                  //   doc[i].match("FBR#") ||
                  //   doc[i].match("FTR#") ||
                  //   doc[i].match("C#") ||
                  //   doc[i].match("L#") ||
                  //   doc[i].match("TI#") ||
                  //   doc[i].match("RO#")
                  // ) {
                  //   console.log("found left overs of tags - notify!!");
                  // }
                } else if (doc[i].match("BXR#")) {
                  // console.log('found s')
                  this.backgroundProcess.message = this.language === 'he' ? `מכין תיבה ימנית...` : this.language === 'ar' ? '????' : `Creating Right Box...`;
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של תיבה ימנית...` : this.language === 'ar' ? '????' : `Removing Right Box Tags...`;
                doc[i] = doc[i].replace(/BXR# |BXR#| BXR#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף תיבה ימנית ${doc[i]
                  .split("/")
                  .pop()
                  .substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Right Box ${doc[i]
                  .split("/")
                  .pop()
                  .substring(0, 20)}...`;
                createElementsArray.push({
                  name: `Box Right - ${doc[i].split("/").pop()}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Box",
                  effect: "Push",
                  src: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
              
              } else if (doc[i].match("CG#")) {
                // console.log('found s')
                   this.backgroundProcess.message = this.language === 'he' ? `מכין סי ג'י...` : this.language === 'ar' ? '????' : `Creating CG...`;
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הסי ג'י...` : this.language === 'ar' ? '????' : `Removing CG Tags...`;
                doc[i] = doc[i].replace(/CG# |CG#| CG#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י ${doc[i]
                  .split("/")
                  .pop()
                  .substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding CG ${doc[i]
                  .split("/")
                  .pop()
                  .substring(0, 20)}...`;
                createElementsArray.push({
                  name: `CG - ${doc[i].split("/").pop()}`,
                  index: null,
                  uid: uuidv4(),
                  type: "CG",
                  effect: "Mix",
                  src: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("F#")) {
                // console.log('found s')
                 this.backgroundProcess.message = this.language === 'he' ? `מכין אצבע תחתונה משמאל...` : this.language === 'ar' ? '????' : `Creating Bottom Left Finger...`;
                                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של האצבע...` : this.language === 'ar' ? '????' : `Removing Finger Tags...`;
                doc[i] = doc[i].replace(/F# |F#| F#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע תחתונה משמאל ${doc[
                  i
                ].substring(0, 15)}...` : this.language === 'ar' ? '????' : `Adding Bottom Left Finger ${doc[
                  i
                ].substring(0, 15)}...`;
                createElementsArray.push({
                  name: `Finger Bottom Left - ${doc[i]}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Finger",
                  effect: "Wipe",
                  position: "bottomleft",
                  main: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
                // }
                //  else if (doc[i].match("FBL#")) {
                //   // console.log('found s')
                //   this.backgroundProcess.message = `Creating Bottom Left Finger...`;
                //   this.backgroundProcess.message = `Removing Finger Tags...`;
                //   doc[i] = doc[i].replace(/FBL# |FBL#| FBL#/gi, "");
                //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //   this.backgroundProcess.message = `Adding Finger ${doc[
                //     i
                //   ].substring(0, 15)}...`;
                //   createElementsArray.push({
                //     name: `Finger Bottom Left - ${doc[i]}`,
                //     index: null,
                //     uid: uuidv4(),
                //     type: "Finger",
                //     position: "bottomleft",
                //     main: doc[i],
                //   });
                //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //   // if (
                //   //   doc[i].match("S#") ||
                //   //   doc[i].match("SL#") ||
                //   //   doc[i].match("SR#") ||
                //   //   doc[i].match("T#") ||
                //   //   doc[i].match("CG#") ||
                //   //   doc[i].match("F#") ||
                //   //   doc[i].match("FBL#") ||
                //   //   doc[i].match("FTL#") ||
                //   //   doc[i].match("FBR#") ||
                //   //   doc[i].match("FTR#") ||
                //   //   doc[i].match("C#") ||
                //   //   doc[i].match("L#") ||
                //   //   doc[i].match("TI#") ||
                //   //   doc[i].match("RO#")
                //   // ) {
                //   //   console.log("found left overs of tags - notify!!");
                //   // }
              } else if (doc[i].match("FTL#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין אצבע עליונה משמאל...` : this.language === 'ar' ? '????' : `Creating Top Left Finger...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של האצבע...` : this.language === 'ar' ? '????' : `Removing Finger Tags...`;
           
                doc[i] = doc[i].replace(/FTL# |FTL#| FTL#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע עליונה משמאל ${doc[
                  i
                ].substring(0, 15)}...` : this.language === 'ar' ? '????' : `Adding Top Left Finger ${doc[
                  i
                ].substring(0, 15)}...`;
                createElementsArray.push({
                  name: `Finger Top Left - ${doc[i]}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Finger",
                  effect: "Wipe",
                  position: "TopLeft",
                  main: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("FTR#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין אצבע עליונה מימין...` : this.language === 'ar' ? '????' : `Creating Top Right Finger...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של האצבע...` : this.language === 'ar' ? '????' : `Removing Finger Tags...`;
            
                doc[i] = doc[i].replace(/FTR# |FTR#| FTR#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע עליונה מימין ${doc[
                  i
                ].substring(0, 15)}...` : this.language === 'ar' ? '????' : `Adding Top Right Finger ${doc[
                  i
                ].substring(0, 15)}...`;
                createElementsArray.push({
                  name: `Finger Top Right - ${doc[i]}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Finger",
                  effect: "Wipe",
                  position: "TopRight",
                  main: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("FBR#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין אצבע תחתונה מימין...` : this.language === 'ar' ? '????' : `Creating Bottom Right Finger...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של האצבע...` : this.language === 'ar' ? '????' : `Removing Finger Tags...`;
                
                // this.backgroundProcess.message = `Removing Finger Tags...`;
                doc[i] = doc[i].replace(/FBR# |FBR#| FBR#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מכין אצבע תחתונה מימין ${doc[
                  i
                ].substring(0, 15)}...` : this.language === 'ar' ? '????' : `Adding Bottom Right Finger ${doc[
                  i
                ].substring(0, 15)}...`;
                createElementsArray.push({
                  name: `Finger Bottom Right - ${doc[i]}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Finger",
                  effect: "Wipe",
                  position: "BottomRight",
                  main: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
                // } else if (doc[i].match("FBR#")) {
                //   // console.log('found s')
                //   doc[i] = doc[i].replace(/FBR# |FBR#| FBR#/gi, "");
                //   if (
                //     doc[i].match("S#") ||
                //     doc[i].match("SL#") ||
                //     doc[i].match("SR#") ||
                //     doc[i].match("T#") ||
                //     doc[i].match("CG#") ||
                //     doc[i].match("F#") ||
                //     doc[i].match("FBL#") ||
                //     doc[i].match("FTL#") ||
                //     doc[i].match("FBR#") ||
                //     doc[i].match("FTR#") ||
                //     doc[i].match("C#") ||
                //     doc[i].match("L#") ||
                //     doc[i].match("TI#") ||
                //     doc[i].match("RO#")
                //   ) {
                //     console.log("found left overs of tags - notify!!");
                //   }
              } else if (doc[i].match("C#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין קאונטר...` : this.language === 'ar' ? '????' :  `Creating Counter...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הקאונטר...` : this.language === 'ar' ? '????' : `Removing Counter Tags...`;
                // this.backgroundProcess.message =
                // this.backgroundProcess.message = `Removing Counter Tags...`;
                doc[i] = doc[i].replace(/C# |C#| C#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף קאונטר ${doc[
                  i
                ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Counter ${doc[
                  i
                ].substring(0, 20)}...`;

                if (doc[i].match("A#")) {
                  // console.log("found Split on Counter")
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות מפרידות של הקאונטר...` : this.language === 'ar' ? '????' : `Removing Counter Separation Tags...`;
                  var newSplit = doc[i].split("A#");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  createElementsArray.push({
                    name: `Counter down of ${parseInt(newSplit[0])}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Counter",
                    effect: "Wipe",
                    counterType: "down",
                    text: newSplit[1],
                    amount: parseInt(newSplit[0]),
                  });
                } else {
                  var tickerData = [];
                  tickerData.push(doc[i]);
                  createElementsArray.push({
                    name: `Counter down of ${parseInt(doc[0])}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Counter",
                    effect: "Wipe",
                    counterType: "down",
                    amount: parseInt(doc[0]),
                  });
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                }

                // }  else if (doc[i].match("CD#")) {
                //   // console.log('found s')
                //   this.backgroundProcess.message = `Creating Down Counter...`;
                //   this.backgroundProcess.message = `Removing Counter Tags...`;
                //   doc[i] = doc[i].replace(/C# |C#| C#/gi, "");
                //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //   this.backgroundProcess.message = `Adding Counter ${doc[
                //     i
                //   ].substring(0, 20)}...`;

                //   if (doc[i].match("A#")) {
                //     // console.log("found Split on Counter")
                //     this.backgroundProcess.message = `Cleaing Counter Tags...`;
                //     var newSplit = doc[i].split("A#");
                //     this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //     createElementsArray.push({
                //       name: `Counter down of ${parseInt(newSplit[0])}`,
                //       index: null,
                //       uid: uuidv4(),
                //       type: "Counter",
                //       counterType: 'down',
                //       text: newSplit[1],
                //       amount: parseInt(newSplit[0])
                //     });

                //   } else {
                //     var tickerData = [];
                //     tickerData.push(doc[i]);
                //     createElementsArray.push({
                //       name: `Counter down of ${parseInt(doc[0])}`,
                //       index: null,
                //       uid: uuidv4(),
                //       type: "Counter",
                //       counterType: 'down',
                //       amount: parseInt(doc[0])
                //     });
                //     this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                //   }
              } else if (doc[i].match("CU#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין קאונטר עולה...` : this.language === 'ar' ? '????' :  `Creating Going Up Counter...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הקאונטר...` : this.language === 'ar' ? '????' : `Removing Counter Tags...`;
                // this.backgroundProcess.message = `Creating up Counter...`;
                // this.backgroundProcess.message = `Removing Counter Tags...`;
                doc[i] = doc[i].replace(/C# |C#| C#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף קאונטר עולה ${doc[
                  i
                ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Going Up Counter ${doc[
                  i
                ].substring(0, 20)}...`;

                if (doc[i].match("A#")) {
                  // console.log("found Split on Counter")
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות מפרידות של הקאונטר...` : this.language === 'ar' ? '????' : `Removing Counter Separation Tags...`;
                  var newSplit = doc[i].split("A#");
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  createElementsArray.push({
                    name: `Counter up of ${parseInt(doc[0])}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Counter",
                    effect: "Wipe",
                    counterType: "up",
                    text: newSplit[1],
                    amount: parseInt(newSplit[0]),
                  });
                } else {
                  var tickerData = [];
                  tickerData.push(doc[i]);
                  createElementsArray.push({
                    name: `Counter up of ${parseInt(doc[0])}`,
                    index: null,
                    uid: uuidv4(),
                    type: "Counter",
                    effect: "Wipe",
                    counterType: "up",
                    amount: parseInt(doc[0]),
                  });
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                }
              } else if (doc[i].match("L#")) {
                this.backgroundProcess.message = this.language === 'he' ? `מכין לייב...` : this.language === 'ar' ? '????' :  `Creating Live...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הלייב...` : this.language === 'ar' ? '????' : `Removing Live Tags...`;
         
                doc[i] = doc[i].replace(/L# |L#| L#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב ${doc[
                  i
                ].substring(0, 15)}...` : this.language === 'ar' ? '????' : `Adding Live ${doc[
                  i
                ].substring(0, 15)}...`;
// console.log('live is: ', doc[i])
                if (doc[i].match("A#")) {
                  
                  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות מפרידות של הלייב...` : this.language === 'ar' ? '????' : `Removing Live Separation Tags...`;
                  var newSplit = doc[i].split("A#");
                  // console.log('matched A, split is: ', newSplit)
                  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  // console.log("new split length is: ", newSplit.length)
                  if (newSplit.length > 2) {
                    // console.log('split length is bigger than 2!')
                     var lengthRemovedIndex = newSplit.length - 1;
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב עבור ${newSplit[0].substring(
                      0,
                      20
                    )}...` : this.language === 'ar' ? '????' : `Adding Live for ${newSplit[0].substring(
                      0,
                      20
                    )}...`;
for (var k = 0; k < lengthRemovedIndex; k++) {
// console.log("Create One for: ", newSplit[(k + 1)])
  createElementsArray.push({
                        name: `Live - ${newSplit[(k + 1)]}`,
                          index: null,
                      uid: uuidv4(),
                      type: "Live",
                      effect: "Wipe",
                        main: newSplit[0],
                        location: newSplit[(k + 1)],
                        color: '#FF0000'
                        // sub: newSplit[1],
                        // titleSize: 'Big',
                      });
}

    // createElementsArray.push({
    //                     name: `Live - ${newSplit[1]}`,
    //                       index: null,
    //                   uid: uuidv4(),
    //                   type: "Live",
    //                   effect: "Wipe",
    //                     main: newSplit[0],
    //                     location: newSplit[1],
    //                     color: '#FF0000'
    //                     // sub: newSplit[1],
    //                     // titleSize: 'Big',
    //                   });
                  

                    // for (var k = 0; k < lengthRemovedIndex; k++) {
                    //   this.backgroundProcess.message = `Adding Live ${newSplit[
                    //     k + 1
                    //   ].substring(0, 20)}... for ${newSplit[0].substring(
                    //     0,
                    //     20
                    //   )}...`;
                    //   // createElementsArray.push({
                    //   //   name: `Stripe - ${newSplit[0]} ${k + 1}`,
                    //   //   index: null,
                    //   //   uid: uuidv4(),
                    //   //   type: "Stripe",
                    //   //   effect: "Wipe",
                    //   //   position: null,
                    //   //   main: newSplit[0],
                    //   //   sub: newSplit[k + 1],
                    //   //   titleSize: 'Big',
                    //   // });
                    //   createElementsArray.push({
                    //     name: `Live - ${newSplit[0]} ${k + 1}`,
                    //     index: null,
                    //     uid: uuidv4(),
                    //     type: "Live",
                    //     effect: "Wipe",
                    //     location: doc[i],
                    //     color: '#ff0000'
                    //   });
                    //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    // }
                  } else if(newSplit.length === 2) {
                    // var lengthRemovedIndex = newSplit.length - 1;
                    this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב עבור ${newSplit[0].substring(
                      0,
                      20
                    )}...` : this.language === 'ar' ? '????' : `Adding Live for ${newSplit[0].substring(
                      0,
                      20
                    )}...`;


    createElementsArray.push({
                        name: `Live - ${newSplit[1]}`,
                          index: null,
                      uid: uuidv4(),
                      type: "Live",
                      effect: "Wipe",
                        main: newSplit[0],
                        location: newSplit[1],
                        color: '#FF0000'
                        // sub: newSplit[1],
                        // titleSize: 'Big',
                      });
                  }
                  //  else if(newSplit.length === 1) {
                  //   console.log('split length is 1!')
                  //   this.backgroundProcess.message = `Adding Live ${newSplit[1].substring(
                  //     0,
                  //     20
                  //   )}... for ${newSplit[0].substring(0, 20)}...`;
                  //   // createElementsArray.push({
                  //   //   name: `Stripe - ${newSplit[0]}`,
                  //   //   index: null,
                  //   //   uid: uuidv4(),
                  //   //   type: "Stripe",
                  //   //   effect: "Wipe",
                  //   //   position: null,
                  //   //   main: newSplit[0],
                  //   //   sub: newSplit[1],
                  //   //   titleSize: 'Big',
                  //   // });
                  //   createElementsArray.push({
                  //     name: `Live - ${newSplit[0]}`,
                  //     index: null,
                  //     uid: uuidv4(),
                  //     type: "Live",
                  //     effect: "Wipe",
                  //     location: doc[i],
                  //     color: '#ff0000'
                  //   });
                  //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  // }

                  // doc[i].match("S#")
                } else {
                  createElementsArray.push({
                  name: `Live - ${doc[i]}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Live",
                  effect: "Wipe",
                  main: doc[i],
                  location: '',
                  color: '#ff0000'
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                }

               
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("TI#")) {
                // console.log('found TI')
                this.backgroundProcess.message = this.language === 'he' ? `מכין טיקר...` : this.language === 'ar' ? '????' :  `Creating Ticker...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הטיקר...` : this.language === 'ar' ? '????' : `Removing Ticker Tags...`;
                // this.backgroundProcess.message = 
                // this.backgroundProcess.message = `Removing Ticker Tags...`;
                doc[i] = doc[i].replace(/TI# |TI#| TI#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיקר ${doc[
                  i
                ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Ticker ${doc[
                  i
                ].substring(0, 20)}...`;

                if (doc[i].match("TIK#")) {
// console.log("Matched TIK!")
// console.log("Tik is: ", doc[i])
this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של טיקים...` : this.language === 'ar' ? '????' : `Cleaing Ticker Tick Tags...`;
// this.backgroundProcess.message = 
var newSplit = doc[i].split("TIK#");
// console.log("newSplit is: ", newSplit)

if(newSplit.length > 1) {
  // console.log("new split length is bigger than 1")
  var tickerData = [];
  for (var j = 0; j < newSplit.length; j++) {
// console.log("doing split #: ", j)
if (newSplit[j].match("A#")) {
  this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הטיקר...` : this.language === 'ar' ? '????' : `Removing Ticker Tags...`;
  // this.backgroundProcess.message = `Cleaning Ticker Tags...`;
  var newDeepSplitRecursion = newSplit[j].split("A#");
  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
  // console.log("newDeepSplit is: ", newDeepSplitRecursion)
  tickerData.push({main: newDeepSplitRecursion[0], sub: newDeepSplitRecursion[1]})
  // if (newSplit.length > 1) {
  //   var lengthRemovedIndex = newSplit.length - 1;
  //   this.backgroundProcess.message = `Adding Ticker for ${newSplit[0].substring(
  //     0,
  //     20
  //   )}...`;
 
  // for (var k = 0; k < newDeepSplitRecursion.length; k++) {
  //   this.backgroundProcess.message = `Adding Ticker Tick ${newDeepSplitRecursion[
  //     k
  //   ].substring(0, 20)}...`;
  //   tickerData.push(newDeepSplitRecursion[k]);
  //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
  // }
  
  // } else {
  //   this.backgroundProcess.message = `Adding Ticker ${newSplit[1].substring(
  //     0,
  //     20
  //   )} for ${newSplit[0].substring(0, 20)}...`;
  //   createElementsArray.push({
  //     name: `Ticker - ${newSplit[0].substring(0, 20)}`,
  //     index: null,
  //     uid: uuidv4(),
  //     type: "Ticker",
  //     position: null,
  //     main: newSplit[0],
  //     sub: newSplit[1],
  //   });
  //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
  // }

  // doc[i].match("S#")
} else {
  // PUSH WHAVETER YOU HAVE
  tickerData.push({main: newSplit[j]})


  // var tickerData = [];
  // tickerData.push(doc[i]);
  // createElementsArray.push({
  //   name: `Ticker - ${doc[i]}`,
  //   index: null,
  //   uid: uuidv4(),
  //   type: "Ticker",
  //   effect: "Wipe",
  //   data: tickerData,
  // });
  this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
}


  }
  createElementsArray.push({
    name: `Ticker`,
    index: null,
    uid: uuidv4(),
    tick: 3,
    type: "Ticker",
    effect: "Wipe",
    data: tickerData,
  });
} else if(newSplit.length === 1) {
  // console.log("new split length is 1")
  if (doc[i].match("A#")) {
    // this.backgroundProcess.message = `Cleaning Ticker Tags...`;
    this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הטיקר...` : this.language === 'ar' ? '????' : `Removing Ticker Tags...`;
    var newDeepSplit = doc[i].split("A#");
    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
    // console.log("newDeepSplit is: ", newDeepSplit)
    // if (newSplit.length > 1) {
    //   var lengthRemovedIndex = newSplit.length - 1;
    //   this.backgroundProcess.message = `Adding Ticker for ${newSplit[0].substring(
    //     0,
    //     20
    //   )}...`;
    
    var tickerData = [];
    for (var k = 0; k < newDeepSplit.length; k++) {
      this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיק לטיקר ${newDeepSplit[
        k
      ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Ticker Tick ${newDeepSplit[
        k
      ].substring(0, 20)}...`;
      this.backgroundProcess.message = 
      tickerData.push(newDeepSplit[k]);
      this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
    }
    createElementsArray.push({
      name: `Ticker`,
      index: null,
      uid: uuidv4(),
      tick: 3,
      type: "Ticker",
      effect: "Wipe",
      data: tickerData,
    });
    // } else {
    //   this.backgroundProcess.message = `Adding Ticker ${newSplit[1].substring(
    //     0,
    //     20
    //   )} for ${newSplit[0].substring(0, 20)}...`;
    //   createElementsArray.push({
    //     name: `Ticker - ${newSplit[0].substring(0, 20)}`,
    //     index: null,
    //     uid: uuidv4(),
    //     type: "Ticker",
    //     position: null,
    //     main: newSplit[0],
    //     sub: newSplit[1],
    //   });
    //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
    // }
  
    // doc[i].match("S#")
  } else {
    var tickerData = [];
    tickerData.push({main: doc[i]});
    createElementsArray.push({
      name: `Ticker - ${doc[i]}`,
      index: null,
      uid: uuidv4(),
      type: "Ticker",
      effect: "Wipe",
      data: tickerData,
    });
    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
  }
}


                } else {
                  if (doc[i].match("A#")) {
                    // this.backgroundProcess.message = `Cleaning Ticker Tags...`;
                    this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הטיקר...` : this.language === 'ar' ? '????' : `Removing Ticker Tags...`;
                    var newDeepSplit = doc[i].split("A#");
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    // console.log("newDeepSplit is: ", newDeepSplit)
                    // if (newSplit.length > 1) {
                    //   var lengthRemovedIndex = newSplit.length - 1;
                    //   this.backgroundProcess.message = `Adding Ticker for ${newSplit[0].substring(
                    //     0,
                    //     20
                    //   )}...`;
                    // console.log("newDeepSplit is: ", newDeepSplit)
                    var tickerData = [];

                    if(newDeepSplit.length > 2) {
                      // console.log("deep split is multiple")
                      var newRemovedLength = newDeepSplit.length - 1
                      for (var k = 0; k < newRemovedLength; k++) {
                        this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיק לטיקר ${newDeepSplit[
                          k
                        ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Ticker Tick ${newDeepSplit[
                          k
                        ].substring(0, 20)}...`;
                        
                        tickerData.push({main: newDeepSplit[0], sub: newDeepSplit[(k + 1)]});
                        this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                      }
                    } else if(newDeepSplit.length === 2) {
                      // console.log("deep split is Single")
                      this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיק לטיקר ${newDeepSplit[
                        k
                      ].substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Ticker Tick ${newDeepSplit[
                        k
                      ].substring(0, 20)}...`;
                      tickerData.push({main: newDeepSplit[0], sub: newDeepSplit[1]});
                      this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    }
                    
                  
                    createElementsArray.push({
                      name: `Ticker`,
                      index: null,
                      uid: uuidv4(),
                      tick: 3,
                      type: "Ticker",
                      effect: "Wipe",
                      data: tickerData,
                    });
                    // } else {
                    //   this.backgroundProcess.message = `Adding Ticker ${newSplit[1].substring(
                    //     0,
                    //     20
                    //   )} for ${newSplit[0].substring(0, 20)}...`;
                    //   createElementsArray.push({
                    //     name: `Ticker - ${newSplit[0].substring(0, 20)}`,
                    //     index: null,
                    //     uid: uuidv4(),
                    //     type: "Ticker",
                    //     position: null,
                    //     main: newSplit[0],
                    //     sub: newSplit[1],
                    //   });
                    //   this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                    // }
                  
                    // doc[i].match("S#")
                  } else {
                    var tickerData = [];
                    tickerData.push({main: doc[i]});
                    createElementsArray.push({
                      name: `Ticker - ${doc[i]}`,
                      index: null,
                      uid: uuidv4(),
                      type: "Ticker",
                      effect: "Wipe",
                      data: tickerData,
                    });
                    this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                  }
                }
                

                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("RO#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין רולר...` : this.language === 'ar' ? '????' : `Creating Roller...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הרולר...` : this.language === 'ar' ? '????' : `Removing Roller Tags...`;
               
                doc[i] = doc[i].replace(/RO# |RO#| RO#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // this.backgroundProcess.message = 
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף רולר ${doc[i]}` : this.language === 'ar' ? '????' : `Adding Roller ${doc[i]}`;
                createElementsArray.push({
                  name: `Roller #1 - ${doc[i].substring(0, 20)}...`,
                  index: null,
                  uid: uuidv4(),
                  type: "Roller",
                  effect: "Cut",
                  data: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              }  else if (doc[i].match("PR#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין פרומו...` : this.language === 'ar' ? '????' : `Creating Promo...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הפרומו...` : this.language === 'ar' ? '????' : `Removing Promo Tags...`;
           
                doc[i] = doc[i].replace(/PR# |PR#| PR#/gi, "");
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
                this.backgroundProcess.message = this.language === 'he' ? `מוסיף פרומו ${doc[i]
                  .split("/")
                  .pop()
                  .substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Promo ${doc[i]
                  .split("/")
                  .pop()
                  .substring(0, 20)}...`;
                createElementsArray.push({
                  name: `Promo - ${doc[i].split("/").pop()}`,
                  index: null,
                  uid: uuidv4(),
                  type: "Promo",
                  effect: "Push",
                  src: doc[i],
                });
                this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;

                // createElementsArray.push({
                //   type: 'Super',
                //   position: null,
                //   data: doc[i]
                // })
                // CHECK IF TAGS ARE LEFT!
                // if (
                //   doc[i].match("S#") ||
                //   doc[i].match("SL#") ||
                //   doc[i].match("SR#") ||
                //   doc[i].match("T#") ||
                //   doc[i].match("CG#") ||
                //   doc[i].match("F#") ||
                //   doc[i].match("FBL#") ||
                //   doc[i].match("FTL#") ||
                //   doc[i].match("FBR#") ||
                //   doc[i].match("FTR#") ||
                //   doc[i].match("C#") ||
                //   doc[i].match("L#") ||
                //   doc[i].match("TI#") ||
                //   doc[i].match("RO#")
                // ) {
                //   console.log("found left overs of tags - notify!!");
                // }
              } else if (doc[i].match("PRR#")) {
                // console.log('found s')
                this.backgroundProcess.message = this.language === 'he' ? `מכין פרומו ימין...` : this.language === 'ar' ? '????' : `Creating Right Promo...`;
                this.backgroundProcess.message = this.language === 'he' ? `מוחק תגיות של הפרומו הימני...` : this.language === 'ar' ? '????' : `Removing Right Promo Tags...`;
         
              doc[i] = doc[i].replace(/PRR# |PRR#| PRR#/gi, "");
              this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף פרומו ימין ${doc[i]
                .split("/")
                .pop()
                .substring(0, 20)}...` : this.language === 'ar' ? '????' : `Adding Right Promo ${doc[i]
                .split("/")
                .pop()
                .substring(0, 20)}...`;
              createElementsArray.push({
                name: `Promo Right - ${doc[i].split("/").pop()}`,
                index: null,
                uid: uuidv4(),
                type: "Promo",
                effect: "Push",
                src: doc[i],
              });
              this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
            
            }
          }
            // console.log("newly created array is: ", createElementsArray);
            
            this.backgroundProcess.message = this.language === 'he' ? `ממספר מחדש...` : this.language === 'ar' ? '????' : `Building Indexes...`;
            // this.backgroundProcess.message = `Removing Ticker Tags...`;
            for (var k = 0; k < createElementsArray.length; k++) {
              this.backgroundProcess.message = this.language === 'he' ? `מגדיר ${k} עבור ${createElementsArray[k]}` : this.language === 'ar' ? '????' : `Setting ${k} for ${createElementsArray[k]}`;;
              createElementsArray[k].index = k;
            }
            this.backgroundProcess.message = this.language === 'he' ? `בוצע.` : this.language === 'ar' ? '????' : `Done.`;
            createItemArray.push(createElementsArray);
          }
        }
        // console.log("Items array is: ", createItemArray);
        const project = {
          name: "Example Project",
          index: 0,
          items: [],
          files: [],
          // settings
          // font
        };

        // this.selectedProject = project;
        for (var k = 0; k < createItemArray.length; k++) {
          this.backgroundProcess.message = this.language === 'he' ? `מכין אייטם ${k + 1}...` : this.language === 'ar' ? '????' : `Creating item ${k + 1}...`;
          // CREATE RELATED ITEM
          // this.newItem('Test Name')
          const item = {
            index: 0,
            name: `Item ${k + 1}`,
            expanded: true,
            options: false,
            elements: [],
          };
          project.items.push(item);
          for (var j = 0; j < createItemArray[k].length; j++) {
            // console.log(`Creating element ${createItemArray[k][j].name}`)
            this.backgroundProcess.message = this.language === 'he' ? `מכין פריט ${createItemArray[k][j].name}...` : this.language === 'ar' ? '????' : `Creating element ${createItemArray[k][j].name}...`;
            // CREATE RELATED ELEMENT
            // if(createItemArray[k][j].type === 'Super') {
            item.elements.push(createItemArray[k][j]);
            // this.addSuper()
            // }
          }

          // this.backgroundProcess.message = `Setting ${k} for ${createElementsArray[k]}`;
          // createElementsArray[k].index = k;
        }
        this.selectedProject = project;
        this.$q.notify({
          color: "green",
          textColor: "white",
          progress: true,
          position: "bottom-left",
          icon: "done",
          message: this.language === 'he' ? `יבוא צלח!` : this.language === 'ar' ? '????' : `Successfully imported text!`,
        });
        this.backgroundProcess.message = null;
        this.importDialog = false;
        this.importedData = null;
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `פרוייקט אמור להיות ריק לפני היבוא!` : this.language === 'ar' ? '????' : `Project should be empty to import!`,
        });
      }
      // this.importedCleanData = doc;
      // var checkIfTagsLeft = answer.find(obj => obj.match('TI#'));
      // console.log("clean text is: ", this.importedCleanData);

      // console.log("checkIfTagsLeft: ", doc[0].match('TI#'))
      // console.log("checkIfTagsLeft: ", checkIfTagsLeft)
    },

    cutSelectedItem() {
      // console.log("this.selectedItem is: ", this.selectedItem)
      // console.log("item is: ", this.selectedProject.items[this.selectedItem])
      if (this.selectedItem >= 0) {
        var selectedItem = this.selectedItem;
        // var selectedElement = elementIndex
        // console.log("selected item is: ", selectedItem)
        // console.log("selected Element is: ", selectedElement)
        // console.log("Element is: ", element)
        this.cutItem = {
          selectedItem: selectedItem,
          // selectedElement: selectedElement,
          item: this.selectedProject.items[this.selectedItem],
        };
        this.selectedProject.items.splice(selectedItem, 1);
        if (this.selectedProjectId) {
          this.backgroundProcess.message = this.language === 'he' ? `מעדכן מוסד נתונים...` : this.language === 'ar' ? '????' : `Updating DB...`;
          const update = {
            selectedItem: selectedItem,
          };
          axios
            .put(
              baseURL + "/project/" + this.selectedProjectId + "/item/cut",
              update
            )
            .then(() => {
              this.backgroundProcess.message = null;
            });
        }
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `בחרו אייטם קודם בבקשה.` : this.language === 'ar' ? '????' : `Please select an Item first!`
        });
      }
    },
    copySelectedItem() {
      if (this.selectedItem >= 0) {
        var selectedItem = this.selectedItem;
        this.cutItem = {
          selectedItem: selectedItem,
          item: _.cloneDeep(this.selectedProject.items[selectedItem]),
        };
        this.cutItem.item.uid = uuidv4();
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `בחרו אייטם קודם בבקשה.` : this.language === 'ar' ? '????' : `Please select an Item first!`
        });
      }
    },
    pasteSelectedItem() {
      // console.log("this.cut.item is: ", this.cutItem.item);
      if (this.selectedItem >= 0) {
        if (this.cutItem) {
          var selectedItem = this.selectedItem;
          this.selectedProject.items.splice(
            selectedItem,
            0,
            _.cloneDeep(this.cutItem.item)
          );
          for (var i = 0; i < this.selectedProject.items.length; i++) {
            this.selectedProject.items[i].index = i;
          }
          if (this.selectedProjectId) {
            this.backgroundProcess.message = this.language === 'he' ? `מוסיף אייטם למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Item to DB...";
            const update = {
              selectedItem: selectedItem,
              item: this.cutItem.item,
            };
            axios
              .put(
                baseURL + "/project/" + this.selectedProjectId + "/item/paste",
                update
              )
              .then(() => {
                this.backgroundProcess.message = null;
              });
          }
        }
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `בחרו אייטם קודם בבקשה.` : this.language === 'ar' ? '????' : `Please select an Item first!`
        });
      }
    },
    cutSelectedElement() {
      // console.log("second pass: ", this.element)
      if (this.selectedItem >= 0) {
        if (this.selectedElement >= 0) {
          var selectedItem = this.selectedItem;
          var selectedElement = this.selectedElement;
          // console.log("selected item is: ", selectedItem)
          // console.log("selected Element is: ", selectedElement)
          // console.log("Element is: ", element)
          this.cutElement = {
            selectedItem: selectedItem,
            selectedElement: selectedElement,
            element: this.element,
          };
          this.selectedProject.items[selectedItem].elements.splice(
            selectedElement,
            1
          );
          if (this.selectedProjectId) {
            this.backgroundProcess.message = this.language === 'he' ? `מעדכן מוסד נתונים...` : this.language === 'ar' ? '????' : `Updating DB...`;
            const update = {
              selectedItem: selectedItem,
              selectedElement: selectedElement,
            };
            axios
              .put(
                baseURL + "/project/" + this.selectedProjectId + "/element/cut",
                update
              )
              .then(() => {
                this.backgroundProcess.message = null;
              });
          }
        } else {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? `בחרו פריט בבקשה.` : this.language === 'ar' ? '????' : `Please select an Element!`
          });
        }
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `בחרו אייטם קודם בבקשה.` : this.language === 'ar' ? '????' : `Please select an Item first!`
        });
      }
    },
    copySelectedElement() {
      if (this.selectedItem >= 0) {
        if (this.selectedElement >= 0) {
          var selectedItem = this.selectedItem;
          var selectedElement = this.selectedElement;
          // console.log("selected item is: ", selectedItem)
          // console.log("selected Element is: ", selectedElement)
          // console.log("Element is: ", element)

          this.cutElement = {
            selectedItem: selectedItem,
            selectedElement: selectedElement,
            element: _.clone(this.element),
          };
          this.cutElement.element.uid = uuidv4();
        } else {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? `בחרו פריט בבקשה.` : this.language === 'ar' ? '????' : `Please select an Element!`
          });
        }
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `בחרו אייטם קודם בבקשה.` : this.language === 'ar' ? '????' : `Please select an Item first!`
        });
      }

      //   if(!isNaN(this.selectedItem) && !isNaN(this.selectedElement) && this.element) {

      // } else {
      //   console.log("please select Element")
      // }
      // console.log("copied: ", this.cutElement)
      // this.selectedProject.items[selectedItem].elements.splice(
      //   selectedElement,
      //   1
      // );
      // var element = element
    },
    pasteSelectedElement() {
      if (this.selectedItem >= 0) {
        if (this.selectedElement >= 0) {
          if (this.cutElement) {
            var selectedItem = this.selectedItem;
            // var selectedItem = this.selectedItem
            var selectedElement = this.selectedElement;
            this.selectedProject.items[selectedItem].elements.splice(
              selectedElement,
              0,
              _.clone(this.cutElement.element)
            );
            for (
              var i = 0;
              i < this.selectedProject.items[this.selectedItem].elements.length;
              i++
            ) {
              this.selectedProject.items[this.selectedItem].elements[i].index =
                i;
            }
            this.onSelectElement(
              selectedItem,
              selectedElement,
              _.clone(this.cutElement.element)
            );
            if (this.selectedProjectId) {
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף פריט למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Element to DB...";
              const update = {
                selectedItem: selectedItem,
                selectedElement: selectedElement,
                element: this.cutElement.element,
              };
              axios
                .put(
                  baseURL +
                    "/project/" +
                    this.selectedProjectId +
                    "/element/paste",
                  update
                )
                .then(() => {
                  this.backgroundProcess.message = null;
                });
            }
          }
        } else {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? `בחרו פריט בבקשה.` : this.language === 'ar' ? '????' : `Please select an Element!`
          });
        }
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `בחרו אייטם קודם בבקשה.` : this.language === 'ar' ? '????' : `Please select an Item first!`
        });
      }

      // if(!isNaN(this.selectedItem) && !isNaN(this.selectedElement)) {

      //    } else {
      //   console.log("please select Element")
      // }
      // var element = element
    },

    selectFile() {
      // console.log("was triggered");
      // var file = e.target
      // console.log("file is: ", file)
      // console.log("selected file is: ", this.selectedFile[0])
      // console.log("selected file type is: ", this.selectedFile[0].type)
      //       if(this.selectedFile[0].type === 'video/quicktime') {
      // console.log("found quicktime")

      // // let img = this.selectedFile[0];
      // // let reader = new FileReader();
      // // reader.readAsDataURL(img);
      // // reader.onload = () => {
      // //   this.element.src = window.URL.createObjectURL(img);
      // //   this.$nextTick(this.setupCropperInstance);
      // // };

      //       } else {
      //         console.log("at else of quicktime")
      // if (!this.blobTest) {
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.element.src) {
        window.URL.revokeObjectURL(this.element.src);
      }

      if (!this.selectedFile[0]) {
        this.cropper = null;
        this.element.src = null;
        this.previewCropped = null;
        return;
      }
      // console.log("File is: ", this.selectedFile[0]);
      if (this.selectedFile[0].size > CG_MAX_SIZE) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `גדול מדי. הגודל המירבי הינו ${CG_MAX_SIZE / 1000000} מגה` : this.language === 'ar' ? '????' : `Too large. Max size is ${CG_MAX_SIZE / 1000000} MB`,
        });
        return this.language === 'he' ? `גדול מדי. הגודל המירבי הינו ${CG_MAX_SIZE / 1000000} מגה` : this.language === 'ar' ? '????' : `Too large. Max size is ${CG_MAX_SIZE / 1000000} MB`
      }

      if (!cgAllowedTypes.includes(this.selectedFile[0].type)) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? "רק קבצי PNG, JPEG, MP4 מותרים!" : this.language === 'ar' ? '????' : "Only PNG, JPEG, MP4 are allowed!",
        });
        return this.language === 'he' ? "רק קבצי PNG, JPEG, MP4 מותרים!" : this.language === 'ar' ? '????' : "Only PNG, JPEG, MP4 are allowed!";
      } else {
        //  if (data.height <= 150 || data.width <= 150) {
        //         data.width = 151;
        //         data.height = 151;

        //         $(e.target).cropper('setCropBoxData', data);
        //     }

        let img = this.selectedFile[0];
        this.element.assetType = this.selectedFile[0].type;
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
          this.element.src = URL.createObjectURL(img);
          if (
            this.selectedFile[0].type === "image/png" ||
            this.selectedFile[0].type === "image/jpeg"
          ) {
            // console.log("passed to cropper");
            this.$nextTick(this.setupCropperInstance);
          }
          //  else if(this.selectedFile[0].type === "video/mp4") {
          //   this.$nextTick(this.setupVideoCropperInstance);
          // }
        };
      }
      // } else {
      //   let img = this.element.src;
      //   // let reader = new FileReader();
      //   // reader.readAsDataURL(img);
      //   // reader.onload = () => {
      //   this.element.objectUrl = window.URL.createObjectURL(img);
      //   this.$nextTick(this.setupCropperInstance);
      //   // };
      // }
      // }
    },
//     setupVideoCropperInstance() {
//       // console.log("Source is: ", this.$refs.source)
// console.log("cropCanvas is: ", this.$refs.cropCanvas)
//       this.cropper = new Cropper(this.$refs.cropCanvas, {
//         aspectRatio: 16 / 9,
//         viewMode: 2,
//         zoomable: true,
//         toggleDragModeOnDblclick: true,
//         cropBoxMovable: true,
//         autoCropArea: 0.99,
//         // scalable: false,
//         // crop: this.debouncedUpdatePreview,
//         crop: () => {
//           const canvas = this.cropper.getCroppedCanvas({
//             // minWidth: 200,
//             // minHeight: 200,
//             // maxWidth: 4000,
//             // maxHeight: 4000,
//             width: 480,
//             height: 270,
//           });
//           this.previewCropped = canvas.toDataURL("image/png");
//         },
//       });
//     },
    setupCropperInstance() {
      // console.log("Source is: ", this.$refs.source)

      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: 16 / 9,
        viewMode: 2,
        zoomable: true,
        toggleDragModeOnDblclick: true,
        cropBoxMovable: true,
        // autoCropArea: 1,
        // scalable: false,
        // crop: this.debouncedUpdatePreview,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas({
            // minWidth: 200,
            // minHeight: 200,
            // maxWidth: 4000,
            // maxHeight: 4000,
            width: 480,
            height: 270,
          });
          this.previewCropped = canvas.toDataURL("image/png");
        },
      });
    },
    addCG() {
      // console.log("update here!");
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף סי ג'י..." : this.language === 'ar' ? '????' : "Preparing to add CG...";
      this.CGLoading = true;

  
// // CHANGE FILTER TO TYPE
// this.filter = element.type;
// var oldUid = _.clone(this.element.uid);
// // console.log("old uid is: ", oldUid)
// var newUid = _.clone(element.uid);
// // console.log("new uid is: ", newUid)
// if (oldUid && newUid && oldUid !== newUid) {
// console.log("Ids don't match!")
// } else {
//   console.log("doing Else")
//   // if (element.type !== "CG") {
//   //   this.element = element;
//   // }
// }




      // const projectName = null;
      // 'yelpish-9'
      // console.log("Project name is: ", this.projectName)
      // console.log("Selected project is: ", this.selectedProjectId)
      if (this.selectedProjectName && this.selectedProjectId) {
        return new Promise((resolve) => {
          // do something async here
          // then call "resolve()"
          this.CGLoading = true;
          if (this.element.assetType === 'image/jpeg' || this.element.assetType === 'image/png') {
            // Resizing to 1920x1080
            const canvas = this.cropper.getCroppedCanvas({
              // minWidth: 200,
              // minHeight: 200,
              // maxWidth: 4000,
              // maxHeight: 4000,
              width: 1920,
              height: 1080,
            });
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("cg", blob, this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.CGUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
           
              try {
                axios
                  .post(
                    baseURL + "/" + this.selectedProjectName + "/cg",
                    formData,
                    headers
                  )
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                    this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { uid, index, name, type, src, assetType, effect } =
                      this.element;
  
                    // CHECK INPUTS
                    if (uid && name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        uid: uid,
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        effect: effect,
                        assetType: assetType,
                      });
                      // CHECK IF PROJECT EXISTS
                      // if (this.selectedProjectId) {
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? "ממספר פריטים מחדש..." : this.language === 'ar' ? '????' : "Updating Element Indexes...";
                            
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
  
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(0, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        }
                      } else {
                        // console.log("No item Selected");
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              // this.selectedProject = res.data;
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                              // console.log("project is: ", res.data)
                            });
                        }
                      }
  
                      this.backgroundProcess.message = null;
                      // } else {
                      //   // No DB HERE!
  
                      //   if (this.selectedItem) {
                      //     // CHECK IF THERE IS SELECTED ITEM
  
                      //     if (this.selectedElement) {
                      //       // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         k++
                      //       ) {
                      //         if (
                      //           this.selectedProject.items[this.selectedItem].elements[k]
                      //             .name === name
                      //         ) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       template.index =
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[this.selectedItem].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       this.backgroundProcess.message = "Updating Element Indexes..";
                      //       for (
                      //         var i = 0;
                      //         i <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         i++
                      //       ) {
                      //         this.selectedProject.items[this.selectedItem].elements[
                      //           i
                      //         ].index = i;
                      //       }
                      //       resolve();
                      //       this.CGLoading = false;
  
                      //       // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                      //     } else {
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         k++
                      //       ) {
                      //         if (
                      //           this.selectedProject.items[this.selectedItem].elements[k]
                      //             .name === name
                      //         ) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       // console.log("i'm at else")
                      //       if (
                      //         this.selectedProject.items[this.selectedItem].elements
                      //           .length === 0
                      //       ) {
                      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //         this.selectedProject.items[this.selectedItem].elements.splice(
                      //           0,
                      //           0,
                      //           template
                      //         );
                      //         resolve();
                      //         this.CGLoading = false;
                      //       } else {
                      //         template.index =
                      //           this.selectedProject.items[this.selectedItem].elements.length;
                      //         this.selectedProject.items[this.selectedItem].elements.splice(
                      //           this.selectedElement,
                      //           0,
                      //           template
                      //         );
                      //         this.backgroundProcess.message = "Updating Element Indexes..";
                      //         for (
                      //           var i = 0;
                      //           i <
                      //           this.selectedProject.items[this.selectedItem].elements.length;
                      //           i++
                      //         ) {
                      //           this.selectedProject.items[this.selectedItem].elements[
                      //             i
                      //           ].index = i;
                      //         }
                      //         resolve();
                      //         this.CGLoading = false;
                      //       }
                      //     }
                      //   } else {
                      //     if (this.selectedProject.length === 0) {
                      //       this.newItem(name);
                      //       this.selectedProject.items[0].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       resolve();
                      //       this.CGLoading = false;
                      //     } else {
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k < this.selectedProject.items[0].elements.length;
                      //         k++
                      //       ) {
                      //         if (this.selectedProject.items[0].elements[k].name === name) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       template.index = this.selectedProject.items[0].elements.length;
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[0].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       resolve();
                      //       this.CGLoading = false;
                      //       // this.stripeLoading = false;
                      //       // }
                      //     }
                      //   }
  
                      //   this.backgroundProcess.message = null;
                      // }
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט !` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            });
          } else if (this.element.assetType === 'video/mp4' || this.element.assetType === 'video/webm') {
            // const canvas = this.cropper.getCroppedCanvas();
            // this.imageDialog = false;
            // this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            // canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("cg", this.selectedFile[0], this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.CGUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(
                    baseURL + "/" + this.selectedProjectName + "/cg",
                    formData,
                    headers
                  )
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                    this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { uid, index, name, type, src, assetType, effect } =
                      this.element;
  
                    // CHECK INPUTS
                    if (uid && name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        uid: uid,
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        effect: effect,
                      });
                      // CHECK IF PROJECT EXISTS
                      // if (this.selectedProjectId) {
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
  
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(0, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        }
                      } else {
                        // console.log("No item Selected");
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף סי ג'י למוסד נתונים...` : this.language === 'ar' ? '????' : `Adding CG to DB...`;
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              // this.selectedProject = res.data;
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                              // console.log("project is: ", res.data)
                            });
                        }
                      }
  
                      this.backgroundProcess.message = null;
                      // } else {
                      //   // No DB HERE!
  
                      //   if (this.selectedItem) {
                      //     // CHECK IF THERE IS SELECTED ITEM
  
                      //     if (this.selectedElement) {
                      //       // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         k++
                      //       ) {
                      //         if (
                      //           this.selectedProject.items[this.selectedItem].elements[k]
                      //             .name === name
                      //         ) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       template.index =
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[this.selectedItem].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       this.backgroundProcess.message = "Updating Element Indexes..";
                      //       for (
                      //         var i = 0;
                      //         i <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         i++
                      //       ) {
                      //         this.selectedProject.items[this.selectedItem].elements[
                      //           i
                      //         ].index = i;
                      //       }
                      //       resolve();
                      //       this.CGLoading = false;
  
                      //       // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                      //     } else {
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         k++
                      //       ) {
                      //         if (
                      //           this.selectedProject.items[this.selectedItem].elements[k]
                      //             .name === name
                      //         ) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       // console.log("i'm at else")
                      //       if (
                      //         this.selectedProject.items[this.selectedItem].elements
                      //           .length === 0
                      //       ) {
                      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //         this.selectedProject.items[this.selectedItem].elements.splice(
                      //           0,
                      //           0,
                      //           template
                      //         );
                      //         resolve();
                      //         this.CGLoading = false;
                      //       } else {
                      //         template.index =
                      //           this.selectedProject.items[this.selectedItem].elements.length;
                      //         this.selectedProject.items[this.selectedItem].elements.splice(
                      //           this.selectedElement,
                      //           0,
                      //           template
                      //         );
                      //         this.backgroundProcess.message = "Updating Element Indexes..";
                      //         for (
                      //           var i = 0;
                      //           i <
                      //           this.selectedProject.items[this.selectedItem].elements.length;
                      //           i++
                      //         ) {
                      //           this.selectedProject.items[this.selectedItem].elements[
                      //             i
                      //           ].index = i;
                      //         }
                      //         resolve();
                      //         this.CGLoading = false;
                      //       }
                      //     }
                      //   } else {
                      //     if (this.selectedProject.length === 0) {
                      //       this.newItem(name);
                      //       this.selectedProject.items[0].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       resolve();
                      //       this.CGLoading = false;
                      //     } else {
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k < this.selectedProject.items[0].elements.length;
                      //         k++
                      //       ) {
                      //         if (this.selectedProject.items[0].elements[k].name === name) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       template.index = this.selectedProject.items[0].elements.length;
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[0].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       resolve();
                      //       this.CGLoading = false;
                      //       // this.stripeLoading = false;
                      //       // }
                      //     }
                      //   }
  
                      //   this.backgroundProcess.message = null;
                      // }
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            // });
          } else {
            console.log("unknown asset type!")
          }
          
        }).then(() => {
          this.CGLoading = false;
        });
      } else {
        // NO PROJECT
        // console.log("No project name")
        return new Promise((resolve) => {
          // do something async here
          this.CGLoading = true;
          if (this.element.assetType === 'image/jpeg' || this.element.assetType === 'image/png') {
            const canvas = this.cropper.getCroppedCanvas({
              // minWidth: 200,
              // minHeight: 200,
              // maxWidth: 4000,
              // maxHeight: 4000,
              width: 1920,
              height: 1080,
            });
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("cg", blob, this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.CGUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/cg", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        effect: effect,
                      });
                      // // CHECK IF PROJECT EXISTS
                      // if (this.selectedProjectId) {
                      //   if (this.selectedItem) {
                      //     // CHECK IF THERE IS SELECTED ITEM
  
                      //     if (this.selectedElement) {
                      //       // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         k++
                      //       ) {
                      //         if (
                      //           this.selectedProject.items[this.selectedItem].elements[k]
                      //             .name === name
                      //         ) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       template.index =
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[this.selectedItem].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       this.backgroundProcess.message = "Updating Element Indexes..";
                      //       for (
                      //         var i = 0;
                      //         i <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         i++
                      //       ) {
                      //         this.selectedProject.items[this.selectedItem].elements[
                      //           i
                      //         ].index = i;
                      //       }
                      //       resolve();
                      //       this.CGLoading = false;
                      //       this.backgroundProcess.message = "Adding Stripe to DB..";
                      //       var expandedTemplate = {
                      //         template: template,
                      //         selectedItem: this.selectedItem,
                      //         selectedElement: this.selectedElement,
                      //       };
                      //       axios
                      //         .post(
                      //           baseURL + "/project/" + this.selectedProjectId + "/element",
                      //           expandedTemplate
                      //         )
                      //         .then((res) => {
                      //           this.backgroundProcess.message = null;
                      //           this.$q.notify({
                      //             color: "grey-10",
                      //             textColor: "white",
                      //             progress: true,
                      //             position: "bottom-left",
                      //             icon: "done",
                      //             message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                      //           });
                      //         });
  
                      //       // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                      //     } else {
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         k++
                      //       ) {
                      //         if (
                      //           this.selectedProject.items[this.selectedItem].elements[k]
                      //             .name === name
                      //         ) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
  
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[this.selectedItem].elements.splice(
                      //         0,
                      //         0,
                      //         template
                      //       );
                      //       this.backgroundProcess.message = "Updating Element Indexes..";
                      //       for (
                      //         var i = 0;
                      //         i <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         i++
                      //       ) {
                      //         this.selectedProject.items[this.selectedItem].elements[
                      //           i
                      //         ].index = i;
                      //       }
                      //       resolve();
                      //       this.CGLoading = false;
                      //       this.backgroundProcess.message = "Adding Stripe to DB..";
                      //       var expandedTemplate = {
                      //         template: template,
                      //         selectedItem: this.selectedItem,
                      //         selectedElement: this.selectedElement,
                      //       };
                      //       axios
                      //         .post(
                      //           baseURL + "/project/" + this.selectedProjectId + "/element",
                      //           expandedTemplate
                      //         )
                      //         .then((res) => {
                      //           this.backgroundProcess.message = null;
                      //           this.$q.notify({
                      //             color: "grey-10",
                      //             textColor: "white",
                      //             progress: true,
                      //             position: "bottom-left",
                      //             icon: "done",
                      //             message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                      //           });
                      //         });
                      //     }
                      //   } else {
                      //     if (this.selectedProject.length === 0) {
                      //       this.newItem(name);
                      //       this.selectedProject.items[0].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       this.backgroundProcess.message = "Updating Element Indexes..";
                      //       for (
                      //         var i = 0;
                      //         i <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         i++
                      //       ) {
                      //         this.selectedProject.items[this.selectedItem].elements[
                      //           i
                      //         ].index = i;
                      //       }
                      //       resolve();
                      //       this.CGLoading = false;
                      //       this.backgroundProcess.message = "Adding Stripe to DB..";
                      //       var expandedTemplate = {
                      //         template: template,
                      //         selectedItem: this.selectedItem,
                      //         selectedElement: this.selectedElement,
                      //       };
                      //       axios
                      //         .post(
                      //           baseURL + "/project/" + this.selectedProjectId + "/element",
                      //           expandedTemplate
                      //         )
                      //         .then((res) => {
                      //           this.backgroundProcess.message = null;
                      //           this.$q.notify({
                      //             color: "grey-10",
                      //             textColor: "white",
                      //             progress: true,
                      //             position: "bottom-left",
                      //             icon: "done",
                      //             message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                      //           });
                      //         });
                      //     } else {
                      //       var checkIfNameExists = false;
                      //       for (
                      //         var k = 0;
                      //         k < this.selectedProject.items[0].elements.length;
                      //         k++
                      //       ) {
                      //         if (this.selectedProject.items[0].elements[k].name === name) {
                      //           checkIfNameExists = true;
                      //         }
                      //       }
  
                      //       if (checkIfNameExists) {
                      //         this.$q.notify({
                      //           color: "red",
                      //           // textColor,
                      //           icon: "priority_high",
                      //           message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                      //           progress: true,
                      //           position: "bottom-left",
                      //         });
                      //       }
                      //       template.index = this.selectedProject.items[0].elements.length;
                      //       // ADD AS FIRST ELEMENT IN FIRST ITEM!
                      //       this.selectedProject.items[0].elements.splice(
                      //         this.selectedElement,
                      //         0,
                      //         template
                      //       );
                      //       this.backgroundProcess.message = "Updating Element Indexes..";
                      //       console.log("selectedItem is: ", this.selectedItem)
                      //       console.log("elements are: ", this.selectedProject.items[this.selectedItem].elements)
                      //       for (
                      //         var i = 0;
                      //         i <
                      //         this.selectedProject.items[this.selectedItem].elements.length;
                      //         i++
                      //       ) {
                      //         this.selectedProject.items[this.selectedItem].elements[
                      //           i
                      //         ].index = i;
                      //       }
                      //       resolve();
                      //       this.CGLoading = false;
                      //       this.backgroundProcess.message = "Adding Stripe to DB..";
                      //       var expandedTemplate = {
                      //         template: template,
                      //         selectedItem: this.selectedItem,
                      //         selectedElement: this.selectedElement,
                      //       };
                      //       axios
                      //         .post(
                      //           baseURL + "/project/" + this.selectedProjectId + "/element",
                      //           expandedTemplate
                      //         )
                      //         .then((res) => {
                      //           // this.selectedProject = res.data;
                      //           this.backgroundProcess.message = null;
                      //           this.$q.notify({
                      //             color: "grey-10",
                      //             textColor: "white",
                      //             progress: true,
                      //             position: "bottom-left",
                      //             icon: "done",
                      //             message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                      //           });
                      //           // console.log("project is: ", res.data)
                      //         });
                      //     }
                      //   }
  
                      //   this.backgroundProcess.message = null;
                      // } else {
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.CGLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.CGLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.CGLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.CGLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.CGLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            });
          } else if (this.element.assetType === 'video/mp4' || this.element.assetType === 'video/webm') {
            let formData = new FormData();
            formData.append("cg", this.selectedFile[0], this.selectedFile[0].name);

            let headers = {
              headers: { contenttype: "multipart/form-data" },
              onUploadProgress: (e) =>
                (this.CGUploadProgress = Math.round(
                  (e.loaded * 100) / e.total
                )),
            };
            // console.log("FormData is: ", formData)
            this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
            try {
              axios
                .post(
                  baseURL + "/temp/cg",
                  formData,
                  headers
                )
                .then((res) => {
                  // console.log("HANDLE ADD TO DATABASE: ", res.data);

                  const asset = res.data[0];
                 this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                  this.element.src =
                    baseURL + "/" + asset.path.replace(/\\/g, "/");
                  this.element.assetType = asset.mimetype;

                  const { uid, index, name, type, src, assetType, effect } =
                    this.element;

                  // CHECK INPUTS
                  if (uid && name && type && src && assetType) {
                    this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                    const template = _.clone({
                      uid: uid,
                      index: index,
                      name: name,
                      type: type,
                      // FROM HERE DIFFERS
                      src: src,
                      assetType: assetType,
                      effect: effect,
                    });
                    // CHECK IF PROJECT EXISTS
                    // if (this.selectedProjectId) {
                    if (this.selectedItem) {
                      // CHECK IF THERE IS SELECTED ITEM

                      if (this.selectedElement) {
                        // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
                        var checkIfNameExists = false;
                        for (
                          var k = 0;
                          k <
                          this.selectedProject.items[this.selectedItem].elements
                            .length;
                          k++
                        ) {
                          if (
                            this.selectedProject.items[this.selectedItem]
                              .elements[k].name === name
                          ) {
                            checkIfNameExists = true;
                          }
                        }

                        if (checkIfNameExists) {
                          this.$q.notify({
                            color: "red",
                            // textColor,
                            icon: "priority_high",
                            message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                            progress: true,
                            position: "bottom-left",
                          });
                        }
                        template.index =
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.length;
                        // ADD AS FIRST ELEMENT IN FIRST ITEM!
                        this.selectedProject.items[
                          this.selectedItem
                        ].elements.splice(this.selectedElement, 0, template);
                        this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                        for (
                          var i = 0;
                          i <
                          this.selectedProject.items[this.selectedItem].elements
                            .length;
                          i++
                        ) {
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements[i].index = i;
                        }
                        resolve();
                        this.CGLoading = false;
                            this.backgroundProcess.message = null;
                        // this.backgroundProcess.message =
                        //   "Adding CG to DB..";
                        // var expandedTemplate = {
                        //   template: template,
                        //   selectedItem: this.selectedItem,
                        //   selectedElement: this.selectedElement,
                        // };
                        // axios
                        //   .post(
                        //     baseURL +
                        //       "/project/" +
                        //       this.selectedProjectId +
                        //       "/element",
                        //     expandedTemplate
                        //   )
                        //   .then((res) => {
                        //     this.backgroundProcess.message = null;
                        //     this.$q.notify({
                        //       color: "grey-10",
                        //       textColor: "white",
                        //       progress: true,
                        //       position: "bottom-left",
                        //       icon: "done",
                        //       message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                        //     });
                        //   });

                        // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                      } else {
                        var checkIfNameExists = false;
                        for (
                          var k = 0;
                          k <
                          this.selectedProject.items[this.selectedItem].elements
                            .length;
                          k++
                        ) {
                          if (
                            this.selectedProject.items[this.selectedItem]
                              .elements[k].name === name
                          ) {
                            checkIfNameExists = true;
                          }
                        }

                        if (checkIfNameExists) {
                          this.$q.notify({
                            color: "red",
                            // textColor,
                            icon: "priority_high",
                            message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                            progress: true,
                            position: "bottom-left",
                          });
                        }

                        // ADD AS FIRST ELEMENT IN FIRST ITEM!
                        this.selectedProject.items[
                          this.selectedItem
                        ].elements.splice(0, 0, template);
                        this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                        for (
                          var i = 0;
                          i <
                          this.selectedProject.items[this.selectedItem].elements
                            .length;
                          i++
                        ) {
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements[i].index = i;
                        }
                        resolve();
                        this.CGLoading = false;
                            this.backgroundProcess.message = null;
                        // this.backgroundProcess.message =
                        //   "Adding CG to DB..";
                        // var expandedTemplate = {
                        //   template: template,
                        //   selectedItem: this.selectedItem,
                        //   selectedElement: this.selectedElement,
                        // };
                        // axios
                        //   .post(
                        //     baseURL +
                        //       "/project/" +
                        //       this.selectedProjectId +
                        //       "/element",
                        //     expandedTemplate
                        //   )
                        //   .then((res) => {
                        //     this.backgroundProcess.message = null;
                        //     this.$q.notify({
                        //       color: "grey-10",
                        //       textColor: "white",
                        //       progress: true,
                        //       position: "bottom-left",
                        //       icon: "done",
                        //       message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                        //     });
                        //   });
                      }
                    } else {
                      // console.log("No item Selected");
                      if (this.selectedProject.length === 0) {
                        this.newItem(name);
                        this.selectedProject.items[0].elements.splice(
                          this.selectedElement,
                          0,
                          template
                        );
                        this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                        for (
                          var i = 0;
                          i < this.selectedProject.items[0].elements.length;
                          i++
                        ) {
                          this.selectedProject.items[0].elements[i].index = i;
                        }
                        resolve();
                        this.CGLoading = false;
                            this.backgroundProcess.message = null;
                        // this.backgroundProcess.message =
                        //   "Adding CG to DB..";
                        // var expandedTemplate = {
                        //   template: template,
                        //   selectedItem: this.selectedItem,
                        //   selectedElement: this.selectedElement,
                        // };
                        // axios
                        //   .post(
                        //     baseURL +
                        //       "/project/" +
                        //       this.selectedProjectId +
                        //       "/element",
                        //     expandedTemplate
                        //   )
                        //   .then((res) => {
                        //     this.backgroundProcess.message = null;
                        //     this.$q.notify({
                        //       color: "grey-10",
                        //       textColor: "white",
                        //       progress: true,
                        //       position: "bottom-left",
                        //       icon: "done",
                        //       message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                        //     });
                        //   });
                      } else {
                        var checkIfNameExists = false;
                        for (
                          var k = 0;
                          k < this.selectedProject.items[0].elements.length;
                          k++
                        ) {
                          if (
                            this.selectedProject.items[0].elements[k].name ===
                            name
                          ) {
                            checkIfNameExists = true;
                          }
                        }

                        if (checkIfNameExists) {
                          this.$q.notify({
                            color: "red",
                            // textColor,
                            icon: "priority_high",
                            message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                            progress: true,
                            position: "bottom-left",
                          });
                        }
                        template.index =
                          this.selectedProject.items[0].elements.length;
                        // ADD AS FIRST ELEMENT IN FIRST ITEM!
                        this.selectedProject.items[0].elements.splice(
                          this.selectedElement,
                          0,
                          template
                        );
                        this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                         
                        for (
                          var i = 0;
                          i < this.selectedProject.items[0].elements.length;
                          i++
                        ) {
                          this.selectedProject.items[0].elements[i].index = i;
                        }
                        resolve();
                        this.CGLoading = false;
                            this.backgroundProcess.message = null;
                        // this.backgroundProcess.message =
                        //   "Adding CG to DB..";
                        // var expandedTemplate = {
                        //   template: template,
                        //   selectedItem: this.selectedItem,
                        //   selectedElement: this.selectedElement,
                        // };
                        // axios
                        //   .post(
                        //     baseURL +
                        //       "/project/" +
                        //       this.selectedProjectId +
                        //       "/element",
                        //     expandedTemplate
                        //   )
                        //   .then((res) => {
                        //     // this.selectedProject = res.data;
                        //     this.backgroundProcess.message = null;
                        //     this.$q.notify({
                        //       color: "grey-10",
                        //       textColor: "white",
                        //       progress: true,
                        //       position: "bottom-left",
                        //       icon: "done",
                        //       message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                        //     });
                        //     // console.log("project is: ", res.data)
                        //   });
                      }
                    }

                    this.backgroundProcess.message = null;
                  
                  } else {
                    // console.log("one of core setting are missing on element");
                    if (name === null) {
                      this.$q.notify({
                        color: "orange",
                        // textColor,
                        icon: "priority_high",
                        message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                        progress: true,
                        position: "bottom-left",
                      });
                    }
                  }
                });
            } catch (error) {
              this.$q.notify({
                color: "red-5",
                progress: true,
                textColor: "white",
                icon: "warning",
                position: "bottom-left",
                message: error.message,
              });
            }
          // });
          } else {
            console.log("unknown asset type!")
          }
          
        }).then(() => {
          this.CGLoading = false;
        });
      }

      // const { index, name, type, src, assetType } = this.element;

      // // CHECK INPUTS
      // if (name && type && main && src && assetType) {
      //   this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
      //   const template = {
      //     index: index,
      //     name: name,
      //     type: type,
      //     // FROM HERE DIFFERS
      //     src: src,
      //     assetType: assetType,
      //   };
      //   // CHECK IF PROJECT EXISTS
      //   if (this.selectedProjectId !== null) {
      //     if (this.selectedItem !== null) {
      //       // CHECK IF THERE IS SELECTED ITEM

      //       if (this.selectedElement !== null) {
      //         // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
      //         var checkIfNameExists = false;
      //         for (
      //           var k = 0;
      //           k <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           k++
      //         ) {
      //           if (
      //             this.selectedProject.items[this.selectedItem].elements[k]
      //               .name === name
      //           ) {
      //             checkIfNameExists = true;
      //           }
      //         }

      //         if (checkIfNameExists) {
      //           this.$q.notify({
      //             color: "red",
      //             // textColor,
      //             icon: "priority_high",
      //             message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
      //             progress: true,
      //             position: "bottom-left",
      //           });
      //         }
      //         template.index =
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
      //         this.selectedProject.items[this.selectedItem].elements.splice(
      //           this.selectedElement,
      //           0,
      //           template
      //         );
      //         this.backgroundProcess.message = "Updating Element Indexes..";
      //         for (
      //           var i = 0;
      //           i <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           i++
      //         ) {
      //           this.selectedProject.items[this.selectedItem].elements[
      //             i
      //           ].index = i;
      //         }
      //         this.stripeLoading = false;
      //         this.backgroundProcess.message = "Adding Stripe to DB..";
      //         var expandedTemplate = {
      //           template: template,
      //           selectedItem: this.selectedItem,
      //           selectedElement: this.selectedElement,
      //         };
      //         axios
      //           .post(
      //             baseURL + "/project/" + this.selectedProjectId + "/element",
      //             expandedTemplate
      //           )
      //           .then((res) => {
      //             this.backgroundProcess.message = null;
      //             this.$q.notify({
      //               color: "grey-10",
      //               textColor: "white",
      //               progress: true,
      //               position: "bottom-left",
      //               icon: "done",
      //               message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
      //             });
      //           });

      //         // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
      //       } else {
      //         var checkIfNameExists = false;
      //         for (
      //           var k = 0;
      //           k <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           k++
      //         ) {
      //           if (
      //             this.selectedProject.items[this.selectedItem].elements[k]
      //               .name === name
      //           ) {
      //             checkIfNameExists = true;
      //           }
      //         }

      //         if (checkIfNameExists) {
      //           this.$q.notify({
      //             color: "red",
      //             // textColor,
      //             icon: "priority_high",
      //             message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
      //             progress: true,
      //             position: "bottom-left",
      //           });
      //         }

      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
      //         this.selectedProject.items[this.selectedItem].elements.splice(
      //           0,
      //           0,
      //           template
      //         );
      //         this.backgroundProcess.message = "Updating Element Indexes..";
      //         for (
      //           var i = 0;
      //           i <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           i++
      //         ) {
      //           this.selectedProject.items[this.selectedItem].elements[
      //             i
      //           ].index = i;
      //         }
      //         this.stripeLoading = false;
      //         this.backgroundProcess.message = "Adding Stripe to DB..";
      //         var expandedTemplate = {
      //           template: template,
      //           selectedItem: this.selectedItem,
      //           selectedElement: this.selectedElement,
      //         };
      //         axios
      //           .post(
      //             baseURL + "/project/" + this.selectedProjectId + "/element",
      //             expandedTemplate
      //           )
      //           .then((res) => {
      //             this.backgroundProcess.message = null;
      //             this.$q.notify({
      //               color: "grey-10",
      //               textColor: "white",
      //               progress: true,
      //               position: "bottom-left",
      //               icon: "done",
      //               message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
      //             });
      //           });
      //       }
      //     } else {
      //       if (this.selectedProject.length === 0) {
      //         this.newItem(name);
      //         this.selectedProject.items[0].elements.splice(
      //           this.selectedElement,
      //           0,
      //           template
      //         );
      //         this.backgroundProcess.message = "Updating Element Indexes..";
      //         for (
      //           var i = 0;
      //           i <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           i++
      //         ) {
      //           this.selectedProject.items[this.selectedItem].elements[
      //             i
      //           ].index = i;
      //         }
      //         this.stripeLoading = false;
      //         this.backgroundProcess.message = "Adding Stripe to DB..";
      //         var expandedTemplate = {
      //           template: template,
      //           selectedItem: this.selectedItem,
      //           selectedElement: this.selectedElement,
      //         };
      //         axios
      //           .post(
      //             baseURL + "/project/" + this.selectedProjectId + "/element",
      //             expandedTemplate
      //           )
      //           .then((res) => {
      //             this.backgroundProcess.message = null;
      //             this.$q.notify({
      //               color: "grey-10",
      //               textColor: "white",
      //               progress: true,
      //               position: "bottom-left",
      //               icon: "done",
      //               message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
      //             });
      //           });
      //       } else {
      //         var checkIfNameExists = false;
      //         for (
      //           var k = 0;
      //           k < this.selectedProject.items[0].elements.length;
      //           k++
      //         ) {
      //           if (this.selectedProject.items[0].elements[k].name === name) {
      //             checkIfNameExists = true;
      //           }
      //         }

      //         if (checkIfNameExists) {
      //           this.$q.notify({
      //             color: "red",
      //             // textColor,
      //             icon: "priority_high",
      //             message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
      //             progress: true,
      //             position: "bottom-left",
      //           });
      //         }
      //         template.index = this.selectedProject.items[0].elements.length;
      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
      //         this.selectedProject.items[0].elements.splice(
      //           this.selectedElement,
      //           0,
      //           template
      //         );
      //         this.backgroundProcess.message = "Updating Element Indexes..";
      //         for (
      //           var i = 0;
      //           i <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           i++
      //         ) {
      //           this.selectedProject.items[this.selectedItem].elements[
      //             i
      //           ].index = i;
      //         }
      //         this.stripeLoading = false;
      //         this.backgroundProcess.message = "Adding Stripe to DB..";
      //         var expandedTemplate = {
      //           template: template,
      //           selectedItem: this.selectedItem,
      //           selectedElement: this.selectedElement,
      //         };
      //         axios
      //           .post(
      //             baseURL + "/project/" + this.selectedProjectId + "/element",
      //             expandedTemplate
      //           )
      //           .then((res) => {
      //             // this.selectedProject = res.data;
      //             this.backgroundProcess.message = null;
      //             this.$q.notify({
      //               color: "grey-10",
      //               textColor: "white",
      //               progress: true,
      //               position: "bottom-left",
      //               icon: "done",
      //               message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
      //             });
      //             // console.log("project is: ", res.data)
      //           });
      //       }
      //     }

      //     this.backgroundProcess.message = null;
      //   } else {
      //     // No DB HERE!

      //     if (this.selectedItem !== null) {
      //       // CHECK IF THERE IS SELECTED ITEM

      //       if (this.selectedElement !== null) {
      //         // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below

      //         var checkIfNameExists = false;
      //         for (
      //           var k = 0;
      //           k <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           k++
      //         ) {
      //           if (
      //             this.selectedProject.items[this.selectedItem].elements[k]
      //               .name === name
      //           ) {
      //             checkIfNameExists = true;
      //           }
      //         }

      //         if (checkIfNameExists) {
      //           this.$q.notify({
      //             color: "red",
      //             // textColor,
      //             icon: "priority_high",
      //             message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
      //             progress: true,
      //             position: "bottom-left",
      //           });
      //         }
      //         template.index =
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
      //         this.selectedProject.items[this.selectedItem].elements.splice(
      //           this.selectedElement,
      //           0,
      //           template
      //         );
      //         this.backgroundProcess.message = "Updating Element Indexes..";
      //         for (
      //           var i = 0;
      //           i <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           i++
      //         ) {
      //           this.selectedProject.items[this.selectedItem].elements[
      //             i
      //           ].index = i;
      //         }
      //         this.stripeLoading = false;

      //         // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
      //       } else {
      //         var checkIfNameExists = false;
      //         for (
      //           var k = 0;
      //           k <
      //           this.selectedProject.items[this.selectedItem].elements.length;
      //           k++
      //         ) {
      //           if (
      //             this.selectedProject.items[this.selectedItem].elements[k]
      //               .name === name
      //           ) {
      //             checkIfNameExists = true;
      //           }
      //         }

      //         if (checkIfNameExists) {
      //           this.$q.notify({
      //             color: "red",
      //             // textColor,
      //             icon: "priority_high",
      //             message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
      //             progress: true,
      //             position: "bottom-left",
      //           });
      //         }
      //         // console.log("i'm at else")
      //         if (
      //           this.selectedProject.items[this.selectedItem].elements
      //             .length === 0
      //         ) {
      //           // ADD AS FIRST ELEMENT IN FIRST ITEM!
      //           this.selectedProject.items[this.selectedItem].elements.splice(
      //             0,
      //             0,
      //             template
      //           );
      //           this.stripeLoading = false;
      //         } else {
      //           template.index =
      //             this.selectedProject.items[this.selectedItem].elements.length;
      //           this.selectedProject.items[this.selectedItem].elements.splice(
      //             this.selectedElement,
      //             0,
      //             template
      //           );
      //           this.backgroundProcess.message = "Updating Element Indexes..";
      //           for (
      //             var i = 0;
      //             i <
      //             this.selectedProject.items[this.selectedItem].elements.length;
      //             i++
      //           ) {
      //             this.selectedProject.items[this.selectedItem].elements[
      //               i
      //             ].index = i;
      //           }
      //           this.stripeLoading = false;
      //         }
      //       }
      //     } else {
      //       if (this.selectedProject.length === 0) {
      //         this.newItem(name);
      //         this.selectedProject.items[0].elements.splice(
      //           this.selectedElement,
      //           0,
      //           template
      //         );
      //         this.stripeLoading = false;
      //       } else {
      //         var checkIfNameExists = false;
      //         for (
      //           var k = 0;
      //           k < this.selectedProject.items[0].elements.length;
      //           k++
      //         ) {
      //           if (this.selectedProject.items[0].elements[k].name === name) {
      //             checkIfNameExists = true;
      //           }
      //         }

      //         if (checkIfNameExists) {
      //           this.$q.notify({
      //             color: "red",
      //             // textColor,
      //             icon: "priority_high",
      //             message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
      //             progress: true,
      //             position: "bottom-left",
      //           });
      //         }
      //         template.index = this.selectedProject.items[0].elements.length;
      //         // ADD AS FIRST ELEMENT IN FIRST ITEM!
      //         this.selectedProject.items[0].elements.splice(
      //           this.selectedElement,
      //           0,
      //           template
      //         );
      //         this.stripeLoading = false;
      //         // }
      //       }
      //     }

      //     this.backgroundProcess.message = null;
      //   }
      // } else {
      //   // console.log("one of core setting are missing on element");
      //   if (name === null) {
      //     this.$q.notify({
      //       color: "orange",
      //       // textColor,
      //       icon: "priority_high",
      //       message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
      //       progress: true,
      //       position: "bottom-left",
      //     });
      //   }
      // }

      // this.$q.loading.show({
      //   message: "Uploading Profile Photo...",
      //   spinnerColor: "primary"
      // });

      // PROJECT ID AND NAME NEED ELSE PUSH TO TEMP FOLDER!
      // const projectId = 'oRgj5p9ahIZZqqVG'

      // if (this.previewCropped !== null) {

      // } else {

      //   let credentials = {
      //     displayName: this.displayName,
      //     firstName: this.firstName,
      //     lastName: this.lastName,
      //     phoneNumber: this.phoneNumber
      //   };
      //   // console.log("Fix store handling")
      //   // console.log("Credentials are: ", credentials);
      //   this.$store.dispatch("auth/changeProfile", credentials).catch(error => {
      //     this.$q.notify({
      //       color: "red-5",
      //       progress: true,
      //       textColor: "white",
      //       icon: "warning",
      //       message: error.message
      //     });
      //   });
      // }
    },


    addBox() {
      // console.log("update here!");
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף תיבה..." : this.language === 'ar' ? '????' : "Preparing to add Box...";
      this.boxLoading = true;

      // const projectName = null;
      // 'yelpish-9'
      // console.log("Project name is: ", this.projectName)
      // console.log("Selected project is: ", this.selectedProjectId)
      if (this.selectedProjectName && this.selectedProjectId) {
        return new Promise((resolve) => {
          // do something async here
          // then call "resolve()"
          this.boxLoading = true;
          if (this.element.assetType === 'image/jpeg' || this.element.assetType === 'image/png') {
            const canvas = this.cropper.getCroppedCanvas({
              // minWidth: 200,
              // minHeight: 200,
              // maxWidth: 4000,
              // maxHeight: 4000,
              width: 480,
              height: 270,
            });
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("box", blob, this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.boxUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(
                    baseURL + "/" + this.selectedProjectName + "/box",
                    formData,
                    headers
                  )
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { uid, index, name, type, src, assetType, effect } =
                      this.element;
  
                    // CHECK INPUTS
                    if (uid && name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        uid: uid,
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        effect: effect,
                      });
                      // CHECK IF PROJECT EXISTS
                      // if (this.selectedProjectId) {
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף תיבה למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Box to DB..";
                            
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
  
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(0, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף תיבה למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Box to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        }
                      } else {
                        // console.log("No item Selected");
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף תיבה למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Box to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף תיבה למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Box to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              // this.selectedProject = res.data;
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                              // console.log("project is: ", res.data)
                            });
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            });
          } else if (this.element.assetType === 'video/mp4' || this.element.assetType === 'video/webm') {
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            // console.log("this.selectedFile[0].src", this.element.src)
            // canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("box", this.selectedFile[0], this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.boxUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/box", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        effect: effect,
                      });
                    
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.boxLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.boxLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.boxLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.boxLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
          } else {
            console.log("unknown asset type!")
          }
          
        }).then(() => {
          this.boxLoading = false;
        });
      } else {
        // NO PROJECT
        // console.log("No project name")
        return new Promise((resolve) => {
          // do something async here
          this.boxLoading = true;
          if (this.element.assetType === 'image/jpeg' || this.element.assetType === 'image/png') {
            const canvas = this.cropper.getCroppedCanvas({
              // minWidth: 200,
              // minHeight: 200,
              // maxWidth: 4000,
              // maxHeight: 4000,
              width: 480,
              height: 270,
            });
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("box", blob, this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.boxUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/box", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        effect: effect,
                      });
                    
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.boxLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.boxLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.boxLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.boxLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            });
          } else if(this.element.assetType === 'video/mp4' || this.element.assetType === 'video/webm') {
            // const canvas = this.cropper.getCroppedCanvas();
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            // console.log("this.selectedFile[0].src", this.element.src)
            // canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("box", this.selectedFile[0], this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.boxUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/box", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        effect: effect,
                      });
                    
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.boxLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.boxLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.boxLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.boxLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.boxLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            // });
         
          } else {
            console.log("Unknown type")
          }
          
        }).then(() => {
          this.boxLoading = false;
        });
      }

     
    },


    addPromo() {
      // console.log("update here!");
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף פרומו..." : this.language === 'ar' ? '????' : "Preparing to add Promo...";
      this.promoLoading = true;

      // const projectName = null;
      // 'yelpish-9'
      // console.log("Project name is: ", this.projectName)
      // console.log("Selected project is: ", this.selectedProjectId)
      if (this.selectedProjectName && this.selectedProjectId) {
        return new Promise((resolve) => {
          // do something async here
          // then call "resolve()"
          this.promoLoading = true;
          if (this.element.assetType === 'image/jpeg' || this.element.assetType === 'image/png') {
            const canvas = this.cropper.getCroppedCanvas({
              // minWidth: 200,
              // minHeight: 200,
              // maxWidth: 4000,
              // maxHeight: 4000,
              width: 640,
              height: 360,
            });
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("promo", blob, this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.promoUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(
                    baseURL + "/" + this.selectedProjectName + "/promo",
                    formData,
                    headers
                  )
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { uid, index, name, type, src, assetType, text, effect } =
                      this.element;
  
                    // CHECK INPUTS
                    if (uid && name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        uid: uid,
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        text: text,
                        effect: effect,
                      });
                      // CHECK IF PROJECT EXISTS
                      // if (this.selectedProjectId) {
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף תיבה למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Box to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
  
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(0, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף פרומו למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Promo to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        }
                      } else {
                        // console.log("No item Selected");
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף פרומו למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Promo to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                            });
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i < this.selectedProject.items[0].elements.length;
                            i++
                          ) {
                            this.selectedProject.items[0].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
                          this.backgroundProcess.message = this.language === 'he' ? `מוסיף פרומו למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Promo to DB..";
                          var expandedTemplate = {
                            template: template,
                            selectedItem: this.selectedItem,
                            selectedElement: this.selectedElement,
                          };
                          axios
                            .post(
                              baseURL +
                                "/project/" +
                                this.selectedProjectId +
                                "/element",
                              expandedTemplate
                            )
                            .then((res) => {
                              // this.selectedProject = res.data;
                              this.backgroundProcess.message = null;
                              this.$q.notify({
                                color: "grey-10",
                                textColor: "white",
                                progress: true,
                                position: "bottom-left",
                                icon: "done",
                                message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                              });
                              // console.log("project is: ", res.data)
                            });
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            });
          } else if (this.element.assetType === 'video/mp4' || this.element.assetType === 'video/webm') {
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            // console.log("this.selectedFile[0].src", this.element.src)
            // canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("promo", this.selectedFile[0], this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.promoUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/promo", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, text, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        text: text,
                        effect: effect
                      });
                    
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.promoLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.promoLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.promoLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.promoLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
          } else {
            console.log("unknown asset type!")
          }
          
        }).then(() => {
          this.promoLoading = false;
        });
      } else {
        // NO PROJECT
        // console.log("No project name")
        return new Promise((resolve) => {
          // do something async here
          this.promoLoading = true;
          if (this.element.assetType === 'image/jpeg' || this.element.assetType === 'image/png') {
            const canvas = this.cropper.getCroppedCanvas({
              // minWidth: 200,
              // minHeight: 200,
              // maxWidth: 4000,
              // maxHeight: 4000,
              width: 640,
              height: 360,
            });
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("promo", blob, this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.promoUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/promo", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, text, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        text: text,
                        effect: effect
                      });
                    
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.promoLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.promoLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.promoLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.promoLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            });
          } else if(this.element.assetType === 'video/mp4' || this.element.assetType === 'video/webm') {
            // const canvas = this.cropper.getCroppedCanvas();
            // this.imageDialog = false;
            this.backgroundProcess.message = this.language === 'he' ? "מבצע המרה..." : this.language === 'ar' ? '????' : `Converting blob...`;
            // console.log("this.selectedFile[0].src", this.element.src)
            // canvas.toBlob((blob) => {
              let formData = new FormData();
              formData.append("promo", this.selectedFile[0], this.selectedFile[0].name);
  
              let headers = {
                headers: { contenttype: "multipart/form-data" },
                onUploadProgress: (e) =>
                  (this.promoUploadProgress = Math.round(
                    (e.loaded * 100) / e.total
                  )),
              };
              // console.log("FormData is: ", formData)
              this.backgroundProcess.message = this.language === 'he' ? "מנסה לעלות את הקובץ..." : this.language === 'ar' ? '????' : `Trying to upload...`;
              try {
                axios
                  .post(baseURL + "/temp/promo", formData, headers)
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
  
                    const asset = res.data[0];
                   this.backgroundProcess.message = this.language === 'he' ? `${asset.originalname} עלה בהצלחה.` : this.language === 'ar' ? '????' : `Successfully uploaded ${asset.originalname}`;
                    this.element.src =
                      baseURL + "/" + asset.path.replace(/\\/g, "/");
                    this.element.assetType = asset.mimetype;
  
                    const { index, name, type, src, assetType, text, effect } = this.element;
  
                    // CHECK INPUTS
                    if (name && type && src && assetType) {
                      this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
                      const template = _.clone({
                        index: index,
                        name: name,
                        type: type,
                        // FROM HERE DIFFERS
                        src: src,
                        assetType: assetType,
                        text: text,
                        effect: effect
                      });
                    
                      // No DB HERE!
  
                      if (this.selectedItem) {
                        // CHECK IF THERE IS SELECTED ITEM
  
                        if (this.selectedElement) {
                          // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
  
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[
                            this.selectedItem
                          ].elements.splice(this.selectedElement, 0, template);
                          this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                          for (
                            var i = 0;
                            i <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            i++
                          ) {
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements[i].index = i;
                          }
                          resolve();
                          this.promoLoading = false;
  
                          // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k <
                            this.selectedProject.items[this.selectedItem].elements
                              .length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[this.selectedItem]
                                .elements[k].name === name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          // console.log("i'm at else")
                          if (
                            this.selectedProject.items[this.selectedItem].elements
                              .length === 0
                          ) {
                            // ADD AS FIRST ELEMENT IN FIRST ITEM!
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(0, 0, template);
                            resolve();
                            this.promoLoading = false;
                          } else {
                            template.index =
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements.length;
                            this.selectedProject.items[
                              this.selectedItem
                            ].elements.splice(this.selectedElement, 0, template);
                            this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                            for (
                              var i = 0;
                              i <
                              this.selectedProject.items[this.selectedItem]
                                .elements.length;
                              i++
                            ) {
                              this.selectedProject.items[
                                this.selectedItem
                              ].elements[i].index = i;
                            }
                            resolve();
                            this.promoLoading = false;
                          }
                        }
                      } else {
                        if (this.selectedProject.length === 0) {
                          this.newItem(name);
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.promoLoading = false;
                        } else {
                          var checkIfNameExists = false;
                          for (
                            var k = 0;
                            k < this.selectedProject.items[0].elements.length;
                            k++
                          ) {
                            if (
                              this.selectedProject.items[0].elements[k].name ===
                              name
                            ) {
                              checkIfNameExists = true;
                            }
                          }
  
                          if (checkIfNameExists) {
                            this.$q.notify({
                              color: "red",
                              // textColor,
                              icon: "priority_high",
                              message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                              progress: true,
                              position: "bottom-left",
                            });
                          }
                          template.index =
                            this.selectedProject.items[0].elements.length;
                          // ADD AS FIRST ELEMENT IN FIRST ITEM!
                          this.selectedProject.items[0].elements.splice(
                            this.selectedElement,
                            0,
                            template
                          );
                          resolve();
                          this.promoLoading = false;
                          // this.stripeLoading = false;
                          // }
                        }
                      }
  
                      this.backgroundProcess.message = null;
                    } else {
                      // console.log("one of core setting are missing on element");
                      if (name === null) {
                        this.$q.notify({
                          color: "orange",
                          // textColor,
                          icon: "priority_high",
                          message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
                          progress: true,
                          position: "bottom-left",
                        });
                      }
                    }
                  });
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
            // });
         
          } else {
            console.log("Unknown type")
          }
          
        }).then(() => {
          this.promoLoading = false;
        });
      }

     
    },
   
    resetCropper() {
      // console.log("reset was hit")
      this.cropper.reset();
    },
    rotateLeft() {
      // console.log("rotateLeft was hit")
      this.cropper.rotate(-90);
    },
    zoomIn() {
      // console.log("zoomIn was hit")
      if (this.zoom === 0.8) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          message: this.language === 'he' ? `הגעת להגדלה מקסימלית.` : this.language === 'ar' ? '????' : `Maximum Zoom In reached.`,
          position: "bottom-left",
        });
      } else {
        this.cropper.zoom(0.2);
        this.zoom = this.zoom + 0.2;
      }
    },
    zoomOut() {
      // console.log("zoomOut was hit")
      if (this.zoom === -0.8) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          message: this.language === 'he' ? `הגעת להקטנה מקסימלית.` : this.language === 'ar' ? '????' : `Maximum Zoom In reached.`,
          position: "bottom-left",
        });
      } else {
        this.cropper.zoom(-0.2);
        this.zoom = this.zoom - 0.2;
      }
    },
    rotateRight() {
      // console.log("rotateRight was hit")
      this.cropper.rotate(90);
    },
    flipX() {
      // console.log("scale x is: ", this.cropper.scaleX)
      if (this.flipXVal === 1) {
        this.cropper.scaleX(-1);
        this.flipXVal = -1;
      } else {
        this.flipXVal = 1;
        this.cropper.scaleX(1);
      }
    },
    flipY() {
      // console.log("rotateRight was hit")
      if (this.flipYVal === 1) {
        this.cropper.scaleY(-1);
        this.flipYVal = -1;
      } else {
        this.flipYVal = 1;
        this.cropper.scaleY(1);
      }
    },
    // cancelBlob(){},
    createItemId(index) {
      return "item" + index;
    },
    createElementId(index) {
      return "element" + index;
    },
    onSelectElement(itemIndex, elementIndex, element) {
      // console.log("selected item index is: ", itemIndex);
      // console.log("selected element index is: ", elementIndex);
      // console.log("selected element is: ", element);
      // this.selectedItem = null
      // this.selectedElement = null
      // this.element = null

      if (element === null && elementIndex === null) {
        // console.log('element index and element are null')
        if (itemIndex >= 0) {
          // console.log("selected item index is: ", itemIndex)

          this.selectedItem = itemIndex;
          this.selectedElement = null;
          this.element = null;
        }
      } else {
        if (itemIndex >= 0) {
          // console.log("selected item index is: ", itemIndex)

          this.selectedItem = itemIndex;
        }
        if (elementIndex >= 0) {
          // console.log("selected element index is: ", elementIndex)

          this.selectedElement = elementIndex;
        }
        if (element) {
          // console.log("selected element is: ", element)

          // CHANGE FILTER TO TYPE
          // this.filter = element.type;
          // var oldUid = _.clone(this.element.uid);
          // // console.log("old uid is: ", oldUid)
          // var newUid = _.clone(element.uid);
          // // console.log("new uid is: ", newUid)
          // if (oldUid && newUid && oldUid !== newUid) {

          // } else {
          //   if (element.type !== "CG") {
          //     this.element = element;
          //   }
          // }





            // PUSH TEMPLATE TO THIS.TEMPLATE
            // this.template = element;
            if (element.type === "CG") {
              // this.blobTest = true
              if(element.assetType === 'image/png' || element.assetType === 'image/jpeg') {
                this.selectedFile = [];
                if (this.element.src) {
                  if (this.element.src.substring(0, 5) === "blob:") {
                    window.URL.revokeObjectURL(this.element.src);
                  }
                }
  
                if (this.cropper) {
                  this.cropper.destroy();
                }
                // this.cropper = null;
  
                // initiate cropper HERE
                // console.log("this.$refs.source is: ", this.$refs.source)
                var cleanElement = _.clone(element);
                this.element = cleanElement;
                vm.$q.loading.show({
                  message: this.language === 'he' ? "טוען קרופר..." : this.language === 'ar' ? '????' : "Loading Cropper...",
                  // boxClass: 'bg-grey-2 text-grey-9',
                  spinnerColor: "primary",
                });
                this.$nextTick(this.nextInitCropper);
              } else {
                // this.selectedFile = [];
                if (this.element.src) {
                  if (this.element.src.substring(0, 5) === "blob:") {
                    window.URL.revokeObjectURL(this.element.src);
                  }
                }
  
                if (this.cropper) {
                  this.cropper.destroy();
                }
                this.element = element;
              }
             
            } else {
              this.element = element;
            }
         
        }
      }
    },
    nextInitCropper() {
      console.log("source is: ", this.$refs.source),
      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: 16 / 9,
        viewMode: 2,
        zoomable: true,
        toggleDragModeOnDblclick: true,
        cropBoxMovable: true,
        // autoCropArea: 1,
        // scalable: false,
        // crop: this.debouncedUpdatePreview,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas({
            // minWidth: 200,
            // minHeight: 200,
            // maxWidth: 4000,
            // maxHeight: 4000,
            width: 480,
            height: 270,
          });
          this.previewCropped = canvas.toDataURL("image/png");
        },
      });
      vm.$q.loading.hide();
    },
    moveSelectedUp() {
      // console.log("Move UP!");
      function array_move(arr, fromIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(fromIndex - 1, 0, element);
      }
      const itemIndex = this.selectedItem;
      const elementIndex = this.selectedElement;
      if (itemIndex > 0) {
        if (elementIndex > 0) {
          if (this.selectedProject) {
            if (this.selectedElement !== 0) {
              this.selectedElement -= 1;
              array_move(
                this.selectedProject.items[itemIndex].elements,
                elementIndex
              );
              if (this.selectedProjectId) {
                const update = {
                  selectedItem: itemIndex,
                  selectedElement: elementIndex,
                };
                axios
                  .put(
                    baseURL +
                      "/project/" +
                      this.selectedProjectId +
                      "/element/up",
                    update
                  )
                  .then(() => {
                    this.backgroundProcess.message = null;
                  });
              }
            } else {
              this.$q.notify({
                color: "red",
                // textColor,
                icon: "priority_high",
                message: this.language === 'he' ? "זה הכי גבוה שאפשר לעלות!" : this.language === 'ar' ? '????' : "That's the Highest you can move it!",
                progress: true,
                position: "bottom-left",
              });
            }
          }
        } else {
          if (this.selectedProject) {
            // const adjustedLength = this.selectedProject.length - 1
            if (this.selectedItem !== 0) {
              this.selectedItem -= 1;
              array_move(this.selectedProject.items, itemIndex);
              if (this.selectedProjectId) {
                const update = {
                  selectedItem: itemIndex,
                  selectedElement: null,
                };
                axios
                  .put(
                    baseURL + "/project/" + this.selectedProjectId + "/item/up",
                    update
                  )
                  .then(() => {
                    this.backgroundProcess.message = null;
                  });
              }
            } else {
              this.$q.notify({
                color: "red",
                // textColor,
                icon: "priority_high",
                message: this.language === 'he' ? "זה הכי גבוה שאפשר לעלות!" : this.language === 'ar' ? '????' : "That's the Highest you can move it!",
                progress: true,
                position: "bottom-left",
              });
            }
          }
        }
      } else {
        this.$q.notify({
          color: "red",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? "לא סימנתם לא אייטם ולא פריט!" : this.language === 'ar' ? '????' : "No item or Element were selected!",
          progress: true,
          position: "bottom-left",
        });
      }
    },
    moveSelectedDown() {
      function array_move(arr, fromIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(fromIndex + 1, 0, element);
      }
      const itemIndex = this.selectedItem;
      const elementIndex = this.selectedElement;
      if (itemIndex >= 0) {
        if (elementIndex >= 0) {
          if (this.selectedProject) {
            // console.log("Check elements length: ", this.selectedProject.items[itemIndex].elements.length)
            var elementsLengthTest =
              this.selectedProject.items[itemIndex].elements.length - 1;
            if (this.selectedElement <= elementsLengthTest) {
              // console.log("Check elements length: ", this.selectedProject.items[itemIndex].elements.length)
              this.selectedElement += 1;
              array_move(
                this.selectedProject.items[itemIndex].elements,
                elementIndex
              );
              if (this.selectedProjectId) {
                const update = {
                  selectedItem: itemIndex,
                  selectedElement: elementIndex,
                };
                axios
                  .put(
                    baseURL +
                      "/project/" +
                      this.selectedProjectId +
                      "/element/down",
                    update
                  )
                  .then(() => {
                    this.backgroundProcess.message = null;
                  });
              }
            } else {
              this.$q.notify({
                color: "red",
                // textColor,
                icon: "priority_high",
                message: this.language === 'he' ? "זה הכי נמוך שאפשר להוריד!" : this.language === 'ar' ? '????' : "That's the Lowest you can move it!",
                progress: true,
                position: "bottom-left",
              });
            }
          }
        } else {
          if (this.selectedProject) {
            var elementsLengthTest = this.selectedProject.items.length - 1;
            if (this.selectedItem < elementsLengthTest) {
              this.selectedItem += 1;
              array_move(this.selectedProject.items, itemIndex);
              if (this.selectedProjectId) {
                const update = {
                  selectedItem: itemIndex,
                  selectedElement: null,
                };
                axios
                  .put(
                    baseURL +
                      "/project/" +
                      this.selectedProjectId +
                      "/item/down",
                    update
                  )
                  .then(() => {
                    this.backgroundProcess.message = null;
                  });
              }
            } else {
              this.$q.notify({
                color: "red",
                // textColor,
                icon: "priority_high",
                message: this.language === 'he' ? "זה הכי נמוך שאפשר להוריד!" : this.language === 'ar' ? '????' : "That's the Lowest you can move it!",
                progress: true,
                position: "bottom-left",
              });
            }
          }
        }
      } else {
        this.$q.notify({
          color: "red",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? "לא סימנתם לא אייטם ולא פריט!" : this.language === 'ar' ? '????' : "No item or Element were selected!",
          progress: true,
          position: "bottom-left",
        });
      }
    },
   
    changeLang(event) {


      var forbiddenStripeCheck = this.onAirElements.find(
        (x) => x.type === 'Stripe'
      );
      var forbiddenTickerCheck = this.onAirElements.find(
        (x) => x.type === 'Ticker'
      );
      var forbiddenBoxCheck = this.onAirElements.find(
        (x) => x.type === 'Box'
      );
      var forbiddenCounterCheck = this.onAirElements.find(
        (x) => x.type === 'Counter'
      );
      var forbiddenRollerCheck = this.onAirElements.find(
        (x) => x.type === 'Roller'
      );
   
      if (forbiddenStripeCheck) {
if(this.rtl) {
  this.rtl = true
  this.$q.notify({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    progress: true,
    position: "bottom-left",
    message: this.language === 'he' ? "בבקשה תוציעו סטרייפ!" : this.language === 'ar' ? '????' : `Please take out Stripe element!`,
  });
} else {
  this.rtl = false
  this.$q.notify({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    progress: true,
    position: "bottom-left",
    message: this.language === 'he' ? "בבקשה תוציעו סטרייפ!" : this.language === 'ar' ? '????' : `Please take out Stripe element!`,
  });
}
      }
      if (forbiddenTickerCheck) {
        if(this.rtl) {
          this.rtl = true
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו טיקר!" : this.language === 'ar' ? '????' : `Please take out Ticker element!`,
          });
        } else {
          this.rtl = false
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו טיקר!" : this.language === 'ar' ? '????' : `Please take out Ticker element!`,
          });
        }
      }
      if (forbiddenBoxCheck) {
        if(this.rtl) {
          this.rtl = true
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו תיבה!" : this.language === 'ar' ? '????' : `Please take out Box element!`,
          });
        } else {
          this.rtl = false
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו תיבה!" : this.language === 'ar' ? '????' : `Please take out Box element!`,
          });
        }
      }
      if (forbiddenCounterCheck) {
        if(this.rtl) {
          this.rtl = true
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו קאונטר!" : this.language === 'ar' ? '????' : `Please take out Counter element!`,
          });
        } else {
          this.rtl = false
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו קאונטר!" : this.language === 'ar' ? '????' : `Please take out Counter element!`,
          });
        }
      }
      if (forbiddenRollerCheck) {
        if(this.rtl) {
          this.rtl = true
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו רולר!" : this.language === 'ar' ? '????' : `Please take out Roller element!`,
          });
        } else {
          this.rtl = false
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            progress: true,
            position: "bottom-left",
            message: this.language === 'he' ? "בבקשה תוציעו רולר!" : this.language === 'ar' ? '????' : `Please take out Roller element!`,
          });
        }
      }

      if(!forbiddenStripeCheck && !forbiddenTickerCheck && !forbiddenBoxCheck && !forbiddenCounterCheck && !forbiddenRollerCheck) {
        var lang = event.srcElement.value;
        if (lang === "en") {
          this.$q.loading.show({
            message: this.language === 'he' ? "מחליף עיצוב..." : this.language === 'ar' ? '????' : "Changing Layout...",
            spinnerColor: "primary",
          });
          this.rtl = false;
          this.language = 'en'
          Quasar.lang.set(Quasar.lang.en);
          this.$q.loading.hide();
          // console.log("English was selected!");
        } else if (lang === "he") {
          this.$q.loading.show({
            message: this.language === 'he' ? "מחליף עיצוב..." : this.language === 'ar' ? '????' : "Changing Layout...",
            spinnerColor: "primary",
          });
          this.rtl = true;
          this.language = 'he'
          Quasar.lang.set(Quasar.lang.he);
          this.$q.loading.hide();
          // console.log("Hebrew was selected!");
        } else if (lang === "ar") {
          this.$q.loading.show({
            message: this.language === 'he' ? "מחליף עיצוב..." : this.language === 'ar' ? '????' : "Changing Layout...",
            spinnerColor: "primary",
          });
          this.rtl = true;
          this.language = 'ar'
          Quasar.lang.set(Quasar.lang.ar);
          this.$q.loading.hide();
          // console.log("Arabic was selected!");
        }
      }
     
      // console.log("hello", event.srcElement.value);
    },

    // dialogOnOKClick() {
    //   console.log("dialog OK was clicked");
    // },
    // dialogOnCancelClick() {
    //   console.log("dialog CANCEL was clicked");
    //   this.promptDialog = false;
    // },
    newProject() {
      this.selectedProject = [];
      this.selectedProjectId = null;
      this.selectedProjectName = null;
    },
    createProject() {
      this.projectsModel = false;
      this.highlightCreateProject = false;
      this.$q
        .dialog({
          dark: true,
          title: this.language === 'he' ? "שם פרוייקט" : this.language === 'ar' ? '????' : "Project Name",
          message: this.language === 'he' ? "מה שם הפרוייקט?" : this.language === 'ar' ? '????' : `What is your project's name?`,
          prompt: {
            model: "",
            // isValid: val => this.checkIfProjectExists(val), // << here is the magic
            type: "text", // optional
          },
          cancel: true,
          persistent: true,
        })
        .onOk((name) => {
          this.$q.loading.show({
            message: this.language === 'he' ? "בודק אם הפרוייקט קיים..." : this.language === 'ar' ? '????' : "Checking if project exists...",
            spinnerColor: "primary",
          });

          // console.log("got ok, data is: ", data)
          // console.log("name is: ", name)
          // CHECK if project exists
          // const check = this.checkIfProjectExists(name)

          axios.get(baseURL + "/project/prompt/" + name).then((res) => {
            // vm.projects = res.data
            // console.log("at check, response is: ", res.data)
            // console.log("data is: ", res.data)
            // return res.data
            const check = res.data;
            this.selectedProjectName = res.data.name;
            this.selectedProjectId = res.data._id;
            if (!check) {
              //  console.log("name is: ", name)
              if (this.selectedProject.length > 0) {
                axios
                  .post(baseURL + "/project/create/" + name, {
                    project: this.selectedProject,
                  })
                  .then((res) => {
                    this.selectedProject = res.data;
                    getProjects();
                    this.$q.loading.hide();
                    // this.projects.push({name: res.data.name, id: res.data._id})
                    // console.log("project is: ", res.data)
                  });
              } else {
                axios.post(baseURL + "/project/create/" + name).then((res) => {
                  this.selectedProject = res.data;
                  getProjects();
                  this.$q.loading.hide();
                  // this.projects.push({name: res.data.name, id: res.data._id})
                  // console.log("project is: ", res.data)
                });
              }
            } else {
              // console.log("project exists")
              this.$nextTick(this.prompToOverwriteProject(name));
              this.$q.loading.hide();
            }
          });

          // console.log('>>>> OK, received', data)
        })
        .onCancel(() => {
          this.selectedProjectName = null;
          this.selectedProjectId = null;
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          this.selectedProjectName = null;
          this.selectedProjectId = null;
          // console.log('I am triggered on both OK and Cancel')
        });
    },
    prompToOverwriteProject(name) {
      this.$q
        .dialog({
          dark: true,
          title: this.language === 'he' ? `<strong><span class="text-red">השם קיים!</span></strong>` : this.language === 'ar' ? '????' : `<strong><span class="text-red">Name Exists!</span></strong>`,
          message: this.language === 'he' ? `האם תרצו לרמוס את הפרוייקט ${name} עם אחד נקי?` : this.language === 'ar' ? '????' : `Do You want to overwrite the existing project ${name} with a clean one?`,
          // prompt: {
          //   model: '',
          //   // isValid: val => this.checkIfProjectExists(val), // << here is the magic
          //   type: 'text' // optional
          // },
          cancel: true,
          persistent: true,
          html: true,
        })
        .onOk((data) => {
          this.$q.loading.show({
            message: this.language === 'he' ? "רומס פרוייקט קודם..." : this.language === 'ar' ? '????' : "overwriting Existing Project...",
            spinnerColor: "primary",
          });
          // console.log('OK: ', data)
          // this.selectedProjectName = data;
          //  console.log("name is: ", name)
          axios
            .post(baseURL + "/project/create/" + this.selectedProjectName, {
              overwrite: true,
            })
            .then((res) => {
              this.selectedProject = res.data;
              getProjects();
              this.$q.loading.hide();
              // this.projects.push({name: res.data.name, id: res.data._id})
              // this.selectedProjectName = res.data.name
              // console.log("project is: ", res.data)
            });
        })
        .onCancel(() => {
          // console.log('Cancel')
          this.selectedProjectName = null;
          this.selectedProjectId = null;
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
          this.selectedProjectName = null;
          this.selectedProjectId = null;
        });
    },
    refreshProjects() {
      getProjects();
    },
    // autoRefreshProjects(){
    //   const timerId = setTimeout(function(){

    //     getProjects()
    //     clearTimeout(timerId);
    //   }, 30000);

    // },
    loadProject(id, name) {
      this.$q.loading.show({
        message: this.language === 'he' ? `טוען ${name}...` : this.language === 'ar' ? '????' :  `Loading ${name}...`,
        spinnerColor: "primary",
      });

      //  console.log("name is: ", name)
      axios.get(baseURL + "/project/" + id).then((res) => {
        this.selectedProject = res.data;
        this.selectedProjectName = name;
        this.selectedProjectId = res.data._id;
        this.$q.loading.hide();
        // console.log("selectedProjectName is: ", this.selectedProjectName)
        // console.log("project is: ", res.data)
      });
    },
    // checkIfProjectisSaved(name) {
    //   // this.$q.loading.show({
    //   //   message: `Loading ${name}...`,
    //   //   spinnerColor: "primary",
    //   // });
    //   if (selectedProjectName !== null) {
    //     axios.get(baseURL + "/project/prompt/" + name).then((res) => {
    //       // vm.projects = res.data
    //       // console.log("at check, response is: ", res.data)
    //       // console.log("data is: ", res.data)
    //       // return res.data
    //       const check = res.data;

    //       if (!check) {
    //         this.selectedProjectName = name;
    //         //  console.log("name is: ", name)
    //         axios
    //           .post(baseURL + "/project/create", { name: name })
    //           .then((res) => {
    //             this.selectedProject = res.data;
    //             // this.$q.loading.hide();
    //             // console.log("project is: ", res.data)
    //           });
    //       } else {
    //         // console.log("project exists")
    //         this.$nextTick(this.prompToOverwriteProject(name));
    //         // this.$q.loading.hide();
    //       }
    //     });
    //   } else {
    //     this.$q.notify({
    //       color: "orange",
    //       // textColor,
    //       icon: "priority_high",
    //       message:
    //         "Please Save Your Project once in a while, else progress can be lost!",
    //       progress: true,
    //       position: "bottom-left",
    //     });
    //   }

    //   // this.$q
    //   //   .dialog({
    //   //     dark: true,
    //   //     title: "Save Project",
    //   //     message: `You are items`,
    //   //     prompt: {
    //   //       model: "",
    //   //       // isValid: val => this.checkIfProjectExists(val), // << here is the magic
    //   //       type: "text", // optional
    //   //     },
    //   //     cancel: true,
    //   //     persistent: true,
    //   //   })
    //   //   .onOk((name) => {
    //   //     // this.$q.loading.show({
    //   //     //   message: "Checking if project exists",
    //   //     //   spinnerColor: "primary",
    //   //     // });

    //   //     // console.log("got ok, data is: ", data)
    //   //     // console.log("name is: ", name)
    //   //     // CHECK if project exists
    //   //     // const check = this.checkIfProjectExists(name)

    //   //     // console.log('>>>> OK, received', data)
    //   //   })
    //   //   .onCancel(() => {
    //   //     // console.log('>>>> Cancel')
    //   //   })
    //   //   .onDismiss(() => {
    //   //     // console.log('I am triggered on both OK and Cancel')
    //   //   });
    // },
    renameProject(project, index, newVal) {
      // console.log("event: ", event)
      // console.log("project: ", project)
      // console.log("index: ", index)
      // console.log("newName: ", newVal)
      // console.log("this.selectedProjectId", this.selectedProjectId)

      var id = project.id;
      var oldName = project.name;
      var newName = newVal;

      for (var i = 0; i < this.projects.length; ++i) {
        // console.log("i'm at number:", i, " and object's index is: ", items[i].index)
        if (this.projects[i].name.toLowerCase() === newName.toLowerCase()) {
          // console.log("Name exists: ", this.projects[i].name);
          // getProjects()
          this.$q.notify({
            color: "red",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `פרוייקט עם השם ${newName} כבר קיים, תחליפו את השם שנית למשהו אחר` : this.language === 'ar' ? '????' :  `Project with ${newName} already exists, please rename again with different name!`,
            progress: true,
            position: "bottom-left",
          });
          break;
        } else {
          if (i === this.projects.length - 1) {
            this.backgroundProcess.message = this.language === 'he' ? `מחליף ${oldName} ל ${newName}..` : this.language === 'ar' ? '????' : `Changing ${oldName} to ${newName}..`;
            if (this.selectedProjectName !== oldName) {
              // console.log("condition met, names don't match")
              this.selectedProjectName = newName;
            }
            // // console.log("rename project, old name is: ", index)
            // // console.log("rename project, new name is: ", newName)
            this.projects[index].name = newName;

            // // console.log("this.selectedProjectId", this.selectedProjectId)
            // CHECK IF PROJECT ID EXISTS
            if (id) {
              // UPDATE DB WITH NEW PROJECT NAME
              this.backgroundProcess.message = this.language === 'he' ? `מחליף ${oldName} ל ${newName} במוסד נתונים..` : this.language === 'ar' ? '????' : `Changing ${oldName} to ${newName} in DB..`;
              // this.backgroundProcess.message = 
              axios
                .post(baseURL + "/project/" + id + "/rename", {
                  newName: newName,
                })
                .then(() => {
                  this.backgroundProcess.message = null;
                });
            }
          }
        }
      }

      // console.log("AFTER: ", this.projects)
    },
    showProjectSelection() {
      this.projectsModel = true;
      this.highlightCreateProject = true;
    },
    promptRemoveProject(project, index) {
      // console.log("project is: ", project)
      // console.log("index is: ", index)
      // console.log("remove project was clicked!, index is: ", index)

      this.removeProjectName = project.name;
      this.removeProjectIndex = index;
      this.RemoveProject = false;

      // console.log("projectsModel is: ", this.projectsModel)
    },
    cancelPromptRemoveProject() {
      this.removeProjectName = null;
      this.removeProjectIndex = null;
      this.RemoveProject = false;
    },
    removeProject(project, index) {
      //       console.log("name is: ", name)
      // console.log("remove project was clicked!, index is: ", index)
      this.backgroundProcess.message = this.language === 'he' ? `מוחק ${project.name}...` : this.language === 'ar' ? '????' : `Removing ${project.name}...`;
      this.removeProjectName = null;
      this.removeProjectIndex = null;
      this.RemoveProject = false;
      if (this.selectedProject.name === this.selectedProjectName) {
        // console.log("reseting project!");
        this.selectedProject = [];
        this.selectedProjectId = null;
        this.selectedProjectName = null;
      }
      // console.log("projectsModel is: ", this.projectsModel)
      this.projects.splice(index, 1);
      this.backgroundProcess.message = this.language === 'he' ? `מוחק ${project.name} במוסד נתונים...` : this.language === 'ar' ? '????' : `Removing ${project.name} in DB...`;
      axios.delete(baseURL + "/project/" + project.id).then((res) => {
        this.backgroundProcess.message = this.language === 'he' ? `מאפס את הממשק של הפרוייקט...` : this.language === 'ar' ? '????' : `Resetting UI Project...`;

        this.backgroundProcess.message = null;
        this.$q.notify({
          color: "green",
          // textColor,
          icon: "done",
          message: this.language === 'he' ? `פרוייקט ${project.name} נמחק בהצלחה.` : this.language === 'ar' ? '????' : `Succesfully removed project ${project.name}.`,
          progress: true,
          position: "bottom-left",
        });
        // this.selectedProject = res.data;
        // this.$q.loading.hide();
        // console.log("project is: ", res.data)
      });
    },
    newItem(name) {
      // console.log("item name is: ", name)
      
      // console.log("selectedProjectId: ", this.selectedProjectId)
      // CHECK if PROJECT WAS LOADED!
      // if(!name) {
      //   console.log("item is null!")
      //  var accName = 'New Item'
      // }
      // console.log("accName name is: ", accName)
      // name = name === null ? 'New Item' : name
      if (this.selectedProject.length === 0) {
        // console.log("no project created!")
        const project = {
          name: this.language === 'he' ? 'פרוייקט לדוגמא' : this.language === 'ar' ? '????' : 'Example Project',
          index: 0,
          items: [],
          files: [],
          // settings
          // font
        };

        const item = {
          index: 0,
          name: this.language === 'he' ? 'אייטם ראשון' : this.language === 'ar' ? '????' : "First Item",
          expanded: true,
          options: false,
          elements: [],
        };
        project.items.push(item);
        this.selectedProject = project;
        this.$q.notify({
          color: "orange",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
           
          progress: true,
          position: "bottom-left",
        });
      } else {
        if (name && name !== 'null') {
          // CHECK IF ITEM NAME EXISTS
          
          this.backgroundProcess.message = this.language === 'he' ? `מוסיף אייטם בשם ${name}...` : this.language === 'ar' ? '????' :  `Adding ${name} item...`;
          const item = {
            index: 0,
            name: this.language === 'he' ? name + " אייטם" : this.language === 'ar' ? name + " ????" : name + " Item",
            expanded: true,
            elements: [],
          };
          this.selectedProject.items.splice(0, 0, item);
          this.backgroundProcess.message = this.language === 'he' ? "ממספר אייטמים מחדש..." : this.language === 'ar' ? '????' :  "Updating Item Indexes...";
          for (var i = 0; i < this.selectedProject.items.length; i++) {
            this.selectedProject.items[i].index = i;
          }
          // .push(item);
          this.backgroundProcess.message = this.language === 'he' ? "בודק אם הפרוייקט קיים.." : this.language === 'ar' ? '????' :  "Checking if project Exists..";
          // UPDATE DB WITH *NEW ITEM*
          if (this.selectedProjectId) {
            this.backgroundProcess.message = this.language === 'he' ? `מוסיף אייטם בשם ${name} למוסד נתונים...` : this.language === 'ar' ? '????' :  `Adding ${name} item to DB...`;
            axios
              .post(
                baseURL + "/project/" + this.selectedProjectId + "/item",
                item
              )
              .then(() => {
                this.backgroundProcess.message = null;
              });
          } else {
            this.backgroundProcess.message = null;
            this.$q.notify({
              color: "orange",
              // textColor,
              icon: "priority_high",
              message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
              progress: true,
              position: "bottom-left",
            });
          }
        } else {
          this.backgroundProcess.message = this.language === 'he' ? "מוסיף אייטם חדש..." : this.language === 'ar' ? '????' :  "Adding new item...";
          const item = {
            index: 0,
            name: this.language === 'he' ? "אייטם ריק חדש" : this.language === 'ar' ? "?? ????? ??" : "New Empty Item",
            expanded: true,
            elements: [],
          };
          this.selectedProject.items.splice(0, 0, item);
          this.backgroundProcess.message = this.language === 'he' ? "ממספר אייטמים מחדש..." : this.language === 'ar' ? '????' :  "Updating Item Indexes...";
          for (var i = 0; i < this.selectedProject.items.length; i++) {
            this.selectedProject.items[i].index = i;
          }
          // this.backgroundProcess.message = "Checking if project Exists..";
          // UPDATE DB WITH *NEW ITEM*
          if (this.selectedProjectId) {
            this.backgroundProcess.message = this.language === 'he' ? "מעדכן את מוסד הנתונים..." : this.language === 'ar' ? '????' : "Updating DB..";
            axios
              .post(
                baseURL + "/project/" + this.selectedProjectId + "/item",
                item
              )
              .then(() => {
                this.backgroundProcess.message = null;
              });
          } else {
            this.backgroundProcess.message = null;
            this.$q.notify({
              color: "orange",
              // textColor,
              icon: "priority_high",
              message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
              progress: true,
              position: "bottom-left",
            });
          }
        }
      }
    },
    updateItemName(index, newName) {
      // console.log("hello")
      // console.log("id is: ", _id)
      // console.log("name is: ", name)
      // this.backgroundProcess.message = `Updating item ${name}..`;

      // // this.selectedProject.push(item)
      // console.log("item is: ", item)
      // UPDATE DB WITH *NEW ITEM*
      if (this.selectedProjectId) {
        const item = {
          selectedItem: index,
          name: newName,
        };
        this.backgroundProcess.message = this.language === 'he' ? `מעדכן אייטם בשם ${newName} בתוך מוסד הנתונים..` : this.language === 'ar' ? '????' :  `Updating item ${newName} in DB..`;
        // console.log("sending item: ", item);
        axios
          .put(
            baseURL + "/project/" + this.selectedProjectId + "/itemname",
            item
          )
          .then(() => {
            this.backgroundProcess.message = null;
          });
      } else {
        // this.backgroundProcess.message = null;
        this.$q.notify({
          color: "orange",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
          progress: true,
          position: "bottom-left",
        });
      }
    },
    deleteItem(index, name) {
      // console.log("hello")
      // console.log("id is: ", id)
      // console.log("name is: ", name)
      this.backgroundProcess.message = this.language === 'he' ? `מוחק אייטם בשם ${name}..` : this.language === 'ar' ? '????' : `Removing ${name}..`;
      this.selectedProject.items.splice(index, 1);

      // // this.selectedProject.push(item)
      // console.log("item is: ", item)
      // UPDATE DB WITH *NEW ITEM*
      if (this.selectedProjectId) {
        const item = {
          selectedItem: index,
        };
        this.backgroundProcess.message = this.language === 'he' ? `מוחק אייטם בשם ${name} מתוך מוסד הנתונים..` : this.language === 'ar' ? '????' : `Removing ${name} from DB..`;
        axios
          .post(
            baseURL + "/project/" + this.selectedProjectId + "/deleteitem",
            item
          )
          .then(() => {
            this.backgroundProcess.message = null;
          });
      } else {
        this.backgroundProcess.message = null;
        this.$q.notify({
          color: "orange",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
          progress: true,
          position: "bottom-left",
        });
      }
    },
    createElementTemplate(type) {
      this.filter = type;
      // CHECK INDEX FROM TEMPLATE BEFORE AND INJECT TO TEMPLATE
      if (type === "Super") {
        // console.log("creating Super Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Super",
          type: "Super",
          effect: "Wipe",
          // FROM HERE DIFFERS
          rtl: false,
          phone: false,
          position: "DR.",
          person: "Person's name",
          title: "Physician at Harward Uni.",
          // uid: uid()
        };
        if(this.language === 'he') {
          this.element.name = 'סופר חדש'
        }
      } else if (type === "Stripe") {
        // console.log("creating Stripe Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Stripe",
          type: "Stripe",
          titleSize: "Big",
          effect: "Wipe",
          // FROM HERE DIFFERS
          main: "I'm Analogy to the title aka main title",
          sub: "I'm Descriptional title, i have tons of content to have, but still.. i have boundaries!",
        };
        if(this.language === 'he') {
          this.element.name = 'סטרייפ חדש'
        }
      } else if (type === "Box") {
        // console.log("creating Stripe Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Box",
          type: "Box",
          effect: "Push",
          // FROM HERE DIFFERS
          src: "",
          assetType: null // video or image !!!
        };
        if(this.language === 'he') {
          this.element.name = 'תיבה חדשה'
        }
      } else if (type === "CG") {
        // console.log("creating CG Template");
        this.element = {
          index: null,
          // crop: false,
          uid: uuidv4(),
          name: "New CG",
          type: "CG",
          effect: "Mix",
          // FROM HERE DIFFERS
          src: "",
          // objectUrl: null,
          // cropper: null, // Cropper instance to upload
          assetType: null,
          // uploaded: false,
          // sub: "I'm Descriptional title, i have tons of content to have, but still.. i have boundaries!",
        };
        if(this.language === 'he') {
          this.element.name = 'תמונה חדשה'
        }
      } else if (type === "Finger") {
        // console.log("creating CG Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Finger",
          type: "Finger",
          effect: "Wipe",
          // FROM HERE DIFFERS
          expanded: false,
          position: "bottomLeft",
          main: "From Youtube Chanel of KiwiVFX",
          sub: [
            { Title1: "Name1" },
            { Title2: "Name2" },
            { Title3: "Name3" },
            { Title4: "Name4" },
          ],
          // sub: "I'm Descriptional title, i have tons of content to have, but still.. i have boundaries!",
        };
        if(this.language === 'he') {
          this.element.name = 'אצבע חדשה'
        }
      } else if (type === "Counter") {
        // console.log("creating CG Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Counter",
          type: "Counter",
          effect: "Wipe",
          // FROM HERE DIFFERS
          rtl: false,
          counterType: "down", // up or down
          amount: 5, // in seconds
          text: "Coming in...", // above text
          // sub: "I'm Descriptional title, i have tons of content to have, but still.. i have boundaries!",
        };
        if(this.language === 'he') {
          this.element.name = 'קאונטר חדש'
        }
      } else if (type === "Live") {
        // console.log("creating CG Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Live",
          type: "Live",
          effect: "Wipe",
          // FROM HERE DIFFERS
          // position: "topLeft",
          main: 'LIVE',
          location: "NY, Downtown", // up or down
          color: '#ff0000'
        };
        if(this.language === 'he') {
          this.element.name = 'לייב חדש'
        }
      } else if (type === "Ticker") {
        // console.log("creating CG Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Ticker",
          type: "Ticker",
          effect: "Wipe",
          // FROM HERE DIFFERS
          tick: 3,
          data: [
            {main: "Title 1:", sub: "Longgg Description title related! you can make it really long..."},
            {main: "", sub: ""},
            {main: "", sub: ""},
            {main: "", sub: ""},
            {main: "", sub: ""},
            {main: "", sub: ""},
            // "Title 2: Longgg Description title related! you can make it really long...2",
            // "Title 3: Longgg Description title related! you can make it really long...3",
            // "Title 4: Longgg Description title related! you can make it really long...4",
            // "Title 5: Longgg Description title related! you can make it really long...5",
            // "Title 6: Longgg Description title related! you can make it really long...6",
          ], // up or down
        };
        if(this.language === 'he') {
          this.element.name = 'טיקר חדש'
        }
      } else if (type === "Roller") {
        // console.log("creating CG Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Roller",
          type: "Roller",
          effect: "Cut",
          // FROM HERE DIFFERS
          layout: "Lower Third",
          align: "Side",
          header: "Header",
          
          // header: "",
          
          // rtl: false,

          // headerBold: true,

          // pages: [
          // page: {
            group1: [
              { title: "Title1", name: "Name1" },
              { title: "Title2", name: "Name2" },
              { title: "Title3", name: "Name3" },
              { title: "Title4", name: "Name4" },
            ],
            group2: [
              { title: "Title5", name: "Name5" },
              { title: "Title6", name: "Name6" },
              { title: "Title7", name: "Name7" },
              { title: "Title8", name: "Name8" },
            ],
            group3: [
              { title: "Title9", name: "Name9" },
              { title: "Title10", name: "Name10" },
              { title: "Title11", name: "Name11" },
              { title: "Title12", name: "Name12" },
            ],
            group4: [
              { title: "Title13", name: "Name13" },
              { title: "Title14", name: "Name14" },
              { title: "Title15", name: "Name15" },
              { title: "Title16", name: "Name16" },
            ],
            // group5: [{}, {}, {}, {}],
            // group6: [{}, {}, {}, {}],
            // group7: [{}, {}, {}, {}],
            // group8: [{}, {}, {}, {}],
            // group9: [{}, {}, {}, {}],
          // },
          // ], // up or down
        };
        if(this.language === 'he') {
          this.element.name = 'רולר חדש'
        }
      } else if (type === "Promo") {
        // console.log("creating Stripe Template");
        this.element = {
          index: null,
          uid: uuidv4(),
          name: "New Promo",
          type: "Promo",
          effect: "Push",
          // FROM HERE DIFFERS
          src: "",
          text: "",
          rtl: false,
          assetType: null // video or image !!!
        };
        if(this.language === 'he') {
          this.element.name = 'פרומו חדש'
        }
      }
    },
    updateElementName(itemIndex, elementIndex, name) {
      // console.log("hello")
      // console.log("id is: ", _id)
      // console.log("name is: ", name)
      // console.log("index is: ", index)
      this.backgroundProcess.message = this.language === 'he' ? `מעדכן פריט בשם ${name}...` : this.language === 'ar' ? '????' : `Updating Element ${name}...`;
      const item = {
        selectedItem: itemIndex,
        selectedElement: elementIndex,
        name: name,
      };
      // // this.selectedProject.push(item)
      // console.log("item is: ", item)
      // UPDATE DB WITH *NEW ITEM*
      if (this.selectedProjectId) {
        this.backgroundProcess.message = this.language === 'he' ? `מעדכן פריט בשם ${name} במוסד הנתונים...` : this.language === 'ar' ? '????' : `Updating Element ${name} in DB..`;
        axios
          .put(
            baseURL + "/project/" + this.selectedProjectId + "/elementname",
            item
          )
          .then(() => {
            this.backgroundProcess.message = null;
          });
      } else {
        this.backgroundProcess.message = null;
        this.$q.notify({
          color: "orange",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
          progress: true,
          position: "bottom-left",
        });
      }
    },
    deleteElement(itemIndex, elementIndex, name) {
      // console.log("hello")
      // console.log("id is: ", _id)
      // console.log("name is: ", name)
      // console.log("index is: ", projectIndex)
      // console.log("index is: ", index)
      this.backgroundProcess.message = this.language === 'he' ? `מוחק פריט בשם ${name}...` : this.language === 'ar' ? '????' : `Removing Element ${name}..`;
      // this.projects[projectIndex].elements.splice(index, 1)
      this.selectedProject.items[itemIndex].elements.splice(itemIndex, 1);
      // console.log("found it: ", selectedElement)

      // // this.selectedProject.push(item)
      // console.log("item is: ", item)
      // UPDATE DB WITH *NEW ITEM*
      if (this.selectedProjectId) {
        const item = {
          selectedItem: itemIndex,
          // name: name,
          selectedElement: elementIndex,
        };
        this.backgroundProcess.message = this.language === 'he' ? `מוחק פריט בשם ${name} ממוסד הנתונים...` : this.language === 'ar' ? '????' : `Removing Element ${name} from DB..`;
        axios
          .post(
            baseURL + "/project/" + this.selectedProjectId + "/deleteelement",
            item
          )
          .then(() => {
            this.backgroundProcess.message = null;
          });
      } else {
        this.backgroundProcess.message = null;
        this.$q.notify({
          color: "orange",
          // textColor,
          icon: "priority_high",
          message: this.language === 'he' ? 'תשמרו את  הפרוייקט מדי פעם על מנת לא להפסיד את כל ההתקדמות!' : this.language === 'ar' ? '????' :  "Please Save Your Project once in a while, else all progress can be lost!",
          progress: true,
          position: "bottom-left",
        });
      }
    },
    addSuper() {
      // console.log("template is: ", template)
      // console.log("project name is: ", this.selectedProjectName)
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף סופר..." : this.language === 'ar' ? '????' : "Preparing to add Super...";
      this.superLoading = true;
      const { uid, index, name, type, person, position, title, rtl } =
        this.element;
      // const nameInput = this.superName;
      // const titleInput = this.superTitle;
      // const positionInput = this.SuperPosition;
      // const personInput = this.SuperPerson;
      // const index = this.selectedProject.items[this.selectedItem].elements === undefined ? 0 : this.selectedProject.items[this.selectedItem].elements.length

      // CHECK INPUTS
      if (uid && name && type && person) {
        this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
        const template = _.cloneDeep({
          // type: "Super",
          // name: nameInput,
          // title: titleInput,
          uid: uid,
          index: index,
          name: name,
          type: type,
          person: person,
          // FROM HERE DIFFERS
          position: position,
          title: title,
          rtl: rtl,
        });
        // CHECK IF PROJECT EXISTS
        if (this.selectedProjectId) {
          // console.log("project exists!");

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM
            // console.log("can save to db, but i have item!");

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              // console.log("can save to db, but i have ELEMENT!");
              // if(this.selectedProject.length === 0) {
              //   this.newItem(name)
              //   this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              //   this.superLoading = false;
              // } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              // if(this.selectedProject.items[0].elements.length === 0) {
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.superLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סופר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Super to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });

              // }
              // this.superLoading = false;
              // console.log('pushing data: ', superTemplate)
              // this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              // }

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              // console.log("can save to db, but i DO NOT HAVE ELEMENT!");
              // if(this.selectedProject.length === 0) {
              //   this.newItem(name)
              //   this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              //   this.superLoading = false;
              // } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              // if (
              //   this.selectedProject.items[this.selectedItem].elements.length === 0
              // ) {

              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                0,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.superLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סופר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Super to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });

              // } else {
              //   template.index = this.selectedProject.items[this.selectedItem].elements.length
              //   this.selectedProject.items[this.selectedItem].elements.splice(
              //     this.selectedElement,
              //     0,
              //     template
              //   );
              //   this.superLoading = false;
              //     this.backgroundProcess.message = "Adding Super to DB..";
              //     var expandedTemplate = {
              //       template: template,
              //       selectedItem: this.selectedItem,
              //       selectedElement: this.selectedElement,
              //     };
              //     axios
              //       .post(
              //         baseURL + "/project/" + this.selectedProjectId + "/elements/super",
              //         expandedTemplate
              //       )
              //       .then((res) => {
              //         // this.selectedProject = res.data;
              //         this.backgroundProcess.message = null;
              //         this.$q.notify({
              //           color: "grey-10",
              //           textColor: "white",
              //           progress: true,
              //           position: "bottom-left",
              //           icon: "done",
              //           message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
              //         });
              //         // console.log("project is: ", res.data)
              //       });

              // }
              // this.superLoading = false;
              // console.log('pushing data: ', superTemplate)
              // this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              // }
            }
          } else {
            // console.log("nothing is selected!")

            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.superLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סופר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Super to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              // if(this.selectedProject.items[0].elements.length === 0) {
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.superLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סופר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Super to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });

              // }
              // this.superLoading = false;
              // console.log('pushing data: ', superTemplate)
              // this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
            }

            // .push(data);
          }

          this.backgroundProcess.message = null;
        } else {
          // No DB HERE!

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM
            // console.log("can't save to db, but i have item!");

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              // console.log("can't save to db, but i have ELEMENT!");
              // if(this.selectedProject.length === 0) {
              //   this.newItem(name)
              //   this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              //   this.superLoading = false;
              // } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              // if(this.selectedProject.items[0].elements.length === 0) {
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.superLoading = false;
              // }
              // this.superLoading = false;
              // console.log('pushing data: ', superTemplate)
              // this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              // }

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              // console.log("can't save to db, but i DO NOT HAVE ELEMENT!");
              // if(this.selectedProject.length === 0) {
              //   this.newItem(name)
              //   this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              //   this.superLoading = false;
              // } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              if (
                this.selectedProject.items[this.selectedItem].elements
                  .length === 0
              ) {
                // ADD AS FIRST ELEMENT IN FIRST ITEM!
                this.selectedProject.items[this.selectedItem].elements.splice(
                  0,
                  0,
                  template
                );
                this.superLoading = false;
              } else {
                template.index =
                  this.selectedProject.items[this.selectedItem].elements.length;
                this.selectedProject.items[this.selectedItem].elements.splice(
                  this.selectedElement,
                  0,
                  template
                );
                this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                for (
                  var i = 0;
                  i <
                  this.selectedProject.items[this.selectedItem].elements.length;
                  i++
                ) {
                  this.selectedProject.items[this.selectedItem].elements[
                    i
                  ].index = i;
                }
                this.superLoading = false;
              }
              // this.superLoading = false;
              // console.log('pushing data: ', superTemplate)
              // this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
              // }
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.superLoading = false;
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              // if(this.selectedProject.items[0].elements.length === 0) {
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.superLoading = false;
              // }
              // this.superLoading = false;
              // console.log('pushing data: ', superTemplate)
              // this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, superTemplate)
            }

            // .push(data);
          }

          this.backgroundProcess.message = null;
          // this.$q.notify({
          //   color: "orange",
          //   // textColor,
          //   icon: "priority_high",
          //   message:
          //     "Please Save Your Project once in a while, else progress can be lost!",
          //   progress: true,
          //   position: "bottom-left",
          // });
        }
      } else {
        // console.log("one of core setting are missing on element");
        if (name === null) {
          this.$q.notify({
            color: "orange",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
            progress: true,
            position: "bottom-left",
          });
        }
      }

      // CHECK IF ELEMENT NAME ALREADY EXISTS

      // POST TO DB IF PROJECT EXISTS

      //       // console.log('this.selectedItem: ', this.selectedItem)
      //       // console.log('this.selectedElement: ', this.selectedElement)
      //       if(this.selectedItem !== null && this.selectedElement !== null) {
      //         // console.log('everything should be defined')
      //         // arr.splice(index, 0, item);
      //         // const project = this.selectedProject.items[this.selectedItem]
      //         // console.log('this.selectedProject.items[this.selectedItem] is: ', project.elements[this.selectedElement])
      //         console.log('pushing data: ', data)
      //         this.selectedProject.items[this.selectedItem].elements.splice(this.selectedElement, 0, data)
      //         // .push(data);
      //         this.superLoading = false;
      //         this.backgroundProcess.message = 'Adding Super to DB..';
      //         if (this.selectedProjectName !== null) {
      //           axios.post(baseURL + "/project/" + this.selectedProjectName + '/item/super', data).then((res) => {
      //             // this.selectedProject = res.data;
      //             this.$q.notify({
      //               color: "grey-10",
      //               textColor: "white",
      //               progress: true,
      //               position: "bottom-left",
      //               icon: "done",
      //               message: `save ${data.name + " " + data.type} to project!`,
      //             });
      //             // console.log("project is: ", res.data)
      //           });
      //         } else {
      //           this.backgroundProcess.message = null;
      //           this.$q.notify({
      //             color: 'orange',
      //             // textColor,
      //             icon: 'priority_high',
      //             message : 'Please Save Your Project once in a while, else progress can be lost!',
      //             progress: true,
      //             position: "bottom-left",
      //           })

      //         }
      //       } else if (this.selectedItem !== null && this.selectedElement === null) {
      // console.log('selected item is null')
      //       } else {
      //         console.log("i'm at something else", this.selectedProject)
      //         if(this.selectedProject.length === 0) {
      //           console.log('pushing data: ', data)
      //           this.newItem(this.template.name)
      //         }

      // // if(this.selectedProject.items[0].elements.length > 0) {
      //   const index = this.selectedProject.items[0].elements.length
      //   this.template.index = index
      // // }
      //         this.selectedProject.items[0].elements.push(data)
      //         this.superLoading = false;
      //       }
    },

    addStripe() {
      // console.log("template is: ", template)
      // console.log("project name is: ", this.selectedProjectName)
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף סטרייפ..." : this.language === 'ar' ? '????' : "Preparing to add Stripe...";
      this.stripeLoading = true;
      const { uid, index, name, type, main, sub } = this.element;

      // CHECK INPUTS
      if (uid && name && type && main) {
        this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
        const template = _.clone({
          index: index,
          uid: uid,
          name: name,
          type: type,
          // FROM HERE DIFFERS
          main: main,
          sub: sub,
        });
        // CHECK IF PROJECT EXISTS
        if (this.selectedProjectId) {
          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סטרייפ למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Stripe to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }

              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                0,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סטרייפ למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Stripe to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סטרייפ למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Stripe to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף סטרייפ למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Stripe to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });
            }
          }

          this.backgroundProcess.message = null;
        } else {
          // No DB HERE!

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below

              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.stripeLoading = false;

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              if (
                this.selectedProject.items[this.selectedItem].elements
                  .length === 0
              ) {
                // ADD AS FIRST ELEMENT IN FIRST ITEM!
                this.selectedProject.items[this.selectedItem].elements.splice(
                  0,
                  0,
                  template
                );
                this.stripeLoading = false;
              } else {
                template.index =
                  this.selectedProject.items[this.selectedItem].elements.length;
                this.selectedProject.items[this.selectedItem].elements.splice(
                  this.selectedElement,
                  0,
                  template
                );
                this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                for (
                  var i = 0;
                  i <
                  this.selectedProject.items[this.selectedItem].elements.length;
                  i++
                ) {
                  this.selectedProject.items[this.selectedItem].elements[
                    i
                  ].index = i;
                }
                this.stripeLoading = false;
              }
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.stripeLoading = false;
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.stripeLoading = false;
              // }
            }
          }

          this.backgroundProcess.message = null;
        }
      } else {
        // console.log("one of core setting are missing on element");
        if (name === null) {
          this.$q.notify({
            color: "orange",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
            progress: true,
            position: "bottom-left",
          });
        }
      }
    },
    addFinger() {
      // console.log("template is: ", this.element)
      // console.log("project name is: ", this.selectedProjectName)
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף אצבע..." : this.language === 'ar' ? '????' : "Preparing to add Finger...";
      this.fingerLoading = true;
      const { uid, name, type, position, expanded, main, sub } = this.element;
      // CHECK INPUTS
      if (uid && name && type && main && position) {
        this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
        const template = _.clone({
          index: 0,
          uid: uid,
          name: name,
          type: type,
          // FROM HERE DIFFERS
          expanded: expanded,
          position: position,
          main: main,
          sub: sub,
        });
        // CHECK IF PROJECT EXISTS
        if (this.selectedProjectId) {
          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.fingerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Finger to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }

              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                0,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.fingerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Finger to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.fingerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Finger to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.fingerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף אצבע למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Finger to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });
            }
          }

          this.backgroundProcess.message = null;
        } else {
          // No DB HERE!

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below

              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.fingerLoading = false;

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              if (
                this.selectedProject.items[this.selectedItem].elements
                  .length === 0
              ) {
                // ADD AS FIRST ELEMENT IN FIRST ITEM!
                this.selectedProject.items[this.selectedItem].elements.splice(
                  0,
                  0,
                  template
                );
                this.fingerLoading = false;
              } else {
                template.index =
                  this.selectedProject.items[this.selectedItem].elements.length;
                this.selectedProject.items[this.selectedItem].elements.splice(
                  this.selectedElement,
                  0,
                  template
                );
                this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                for (
                  var i = 0;
                  i <
                  this.selectedProject.items[this.selectedItem].elements.length;
                  i++
                ) {
                  this.selectedProject.items[this.selectedItem].elements[
                    i
                  ].index = i;
                }
                this.fingerLoading = false;
              }
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.fingerLoading = false;
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.fingerLoading = false;
              // }
            }
          }

          this.backgroundProcess.message = null;
        }
      } else {
        // console.log("one of core setting are missing on element");
        if (name === null) {
          this.$q.notify({
            color: "orange",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
            progress: true,
            position: "bottom-left",
          });
        }
      }
    },
    addCounter() {
      // console.log("handle totaly");

      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף קאונטר..." : this.language === 'ar' ? '????' : "Preparing to add Counter...";
      this.stripeLoading = true;
      const { index, uid, name, type, rtl, counterType, amount, text } =
        this.element;

      // CHECK INPUTS
      if (uid && name && type && counterType && amount && text) {
        this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
        const template = _.clone({
          index: index,
          uid: uid,
          name: name,
          type: type,
          // FROM HERE DIFFERS
          rtl: rtl,
          counterType: counterType, // up or down
          amount: amount, // in seconds
          text: text, // above text
        });
        // CHECK IF PROJECT EXISTS
        if (this.selectedProjectId) {
          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף קאונטר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Counter to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }

              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                0,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף קאונטר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Counter to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף קאונטר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Counter to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.stripeLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף קאונטר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Counter to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });
            }
          }

          this.backgroundProcess.message = null;
        } else {
          // No DB HERE!

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below

              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.stripeLoading = false;

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              if (
                this.selectedProject.items[this.selectedItem].elements
                  .length === 0
              ) {
                // ADD AS FIRST ELEMENT IN FIRST ITEM!
                this.selectedProject.items[this.selectedItem].elements.splice(
                  0,
                  0,
                  template
                );
                this.stripeLoading = false;
              } else {
                template.index =
                  this.selectedProject.items[this.selectedItem].elements.length;
                this.selectedProject.items[this.selectedItem].elements.splice(
                  this.selectedElement,
                  0,
                  template
                );
                this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                for (
                  var i = 0;
                  i <
                  this.selectedProject.items[this.selectedItem].elements.length;
                  i++
                ) {
                  this.selectedProject.items[this.selectedItem].elements[
                    i
                  ].index = i;
                }
                this.stripeLoading = false;
              }
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.stripeLoading = false;
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.stripeLoading = false;
              // }
            }
          }

          this.backgroundProcess.message = null;
        }
      } else {
        // console.log("one of core setting are missing on element");
        if (name === null) {
          this.$q.notify({
            color: "orange",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
            progress: true,
            position: "bottom-left",
          });
        }
      }
    },
    addLive() {
      // console.log("template is: ", template)
      // console.log("project name is: ", this.selectedProjectName)
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף אצבע..." : this.language === 'ar' ? '????' : "Preparing to add Finger...";
      this.liveLoading = true;
      const { uid, name, type, location } = this.element;

      // CHECK INPUTS
      if (uid && name && type && location) {
        this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
        const template = _.clone({
          index: 0,
          uid: uid,
          name: name,
          type: type,
          // FROM HERE DIFFERS
          main: "Live",
          location: location,
        });
        // CHECK IF PROJECT EXISTS
        if (this.selectedProjectId) {
          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.liveLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Live to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }

              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                0,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.liveLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Live to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.liveLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Live to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.liveLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף לייב למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Live to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });
            }
          }

          this.backgroundProcess.message = null;
        } else {
          // No DB HERE!

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below

              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.liveLoading = false;

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              if (
                this.selectedProject.items[this.selectedItem].elements
                  .length === 0
              ) {
                // ADD AS FIRST ELEMENT IN FIRST ITEM!
                this.selectedProject.items[this.selectedItem].elements.splice(
                  0,
                  0,
                  template
                );
                this.liveLoading = false;
              } else {
                template.index =
                  this.selectedProject.items[this.selectedItem].elements.length;
                this.selectedProject.items[this.selectedItem].elements.splice(
                  this.selectedElement,
                  0,
                  template
                );
                this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                for (
                  var i = 0;
                  i <
                  this.selectedProject.items[this.selectedItem].elements.length;
                  i++
                ) {
                  this.selectedProject.items[this.selectedItem].elements[
                    i
                  ].index = i;
                }
                this.liveLoading = false;
              }
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.liveLoading = false;
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.liveLoading = false;
              // }
            }
          }

          this.backgroundProcess.message = null;
        }
      } else {
        // console.log("one of core setting are missing on element");
        if (name === null) {
          this.$q.notify({
            color: "orange",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
            progress: true,
            position: "bottom-left",
          });
        }
      }
    },
    addTicker() {
      // console.log("template is: ", template)
      // console.log("project name is: ", this.selectedProjectName)
      this.backgroundProcess.message = this.language === 'he' ? "מתכונן להוסיף טיקר..." : this.language === 'ar' ? '????' : "Preparing to add Ticker...";
      this.tickerLoading = true;
      const { uid, index, name, type, data } = this.element;

      // CHECK INPUTS
      if (uid && name && type && data && data.length > 0) {
        this.backgroundProcess.message = this.language === 'he' ? `בודק אימפוטים...` : this.language === 'ar' ? '????' : `Checking inputs..`;
        const template = _.clone({
          uid: uid,
          index: index,
          name: name,
          type: type,
          // FROM HERE DIFFERS
          data: data,
        });
        // CHECK IF PROJECT EXISTS
        if (this.selectedProjectId) {
          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.tickerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיקר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Ticker to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }

              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                0,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.tickerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיקר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Ticker to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.tickerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיקר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Ticker to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                });
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i < this.selectedProject.items[0].elements.length;
                i++
              ) {
                this.selectedProject.items[0].elements[i].index = i;
              }
              this.tickerLoading = false;
              this.backgroundProcess.message = this.language === 'he' ? `מוסיף טיקר למוסד נתונים...` : this.language === 'ar' ? '????' : "Adding Ticker to DB..";
              var expandedTemplate = {
                template: template,
                selectedItem: this.selectedItem,
                selectedElement: this.selectedElement,
              };
              axios
                .post(
                  baseURL + "/project/" + this.selectedProjectId + "/element",
                  expandedTemplate
                )
                .then((res) => {
                  // this.selectedProject = res.data;
                  this.backgroundProcess.message = null;
                  this.$q.notify({
                    color: "grey-10",
                    textColor: "white",
                    progress: true,
                    position: "bottom-left",
                    icon: "done",
                    message: this.language === 'he' ? `${template.name} נשמר בפרוייקט ${this.selectedProjectName}!` : this.language === 'ar' ? '????' : `saved ${template.name} to ${this.selectedProjectName}!`
                  });
                  // console.log("project is: ", res.data)
                });
            }
          }

          this.backgroundProcess.message = null;
        } else {
          // No DB HERE!

          if (this.selectedItem) {
            // CHECK IF THERE IS SELECTED ITEM

            if (this.selectedElement) {
              // CHECK HOW MANY ELEMENTS THERE ARE + SELECTED ELEMENT + insert below

              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index =
                this.selectedProject.items[this.selectedItem].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[this.selectedItem].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
              for (
                var i = 0;
                i <
                this.selectedProject.items[this.selectedItem].elements.length;
                i++
              ) {
                this.selectedProject.items[this.selectedItem].elements[
                  i
                ].index = i;
              }
              this.tickerLoading = false;

              // CHECK IF ELEMENT NAME ALREADY EXISTS IN THIS ITEM
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k <
                this.selectedProject.items[this.selectedItem].elements.length;
                k++
              ) {
                if (
                  this.selectedProject.items[this.selectedItem].elements[k]
                    .name === name
                ) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              // console.log("i'm at else")
              if (
                this.selectedProject.items[this.selectedItem].elements
                  .length === 0
              ) {
                // ADD AS FIRST ELEMENT IN FIRST ITEM!
                this.selectedProject.items[this.selectedItem].elements.splice(
                  0,
                  0,
                  template
                );
                this.tickerLoading = false;
              } else {
                template.index =
                  this.selectedProject.items[this.selectedItem].elements.length;
                this.selectedProject.items[this.selectedItem].elements.splice(
                  this.selectedElement,
                  0,
                  template
                );
                this.backgroundProcess.message = this.language === 'he' ? `ממספר פריטים מחדש...` : this.language === 'ar' ? '????' :  "Updating Element Indexes..";
                for (
                  var i = 0;
                  i <
                  this.selectedProject.items[this.selectedItem].elements.length;
                  i++
                ) {
                  this.selectedProject.items[this.selectedItem].elements[
                    i
                  ].index = i;
                }
                this.tickerLoading = false;
              }
            }
          } else {
            if (this.selectedProject.length === 0) {
              this.newItem(name);
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.tickerLoading = false;
            } else {
              var checkIfNameExists = false;
              for (
                var k = 0;
                k < this.selectedProject.items[0].elements.length;
                k++
              ) {
                if (this.selectedProject.items[0].elements[k].name === name) {
                  checkIfNameExists = true;
                }
              }

              if (checkIfNameExists) {
                this.$q.notify({
                  color: "red",
                  // textColor,
                  icon: "priority_high",
                  message: this.language === 'he' ? `פריט עם שם '${name}' כבר קיים! נוצר עתק!.` : this.language === 'ar' ? '????' : `Element with name '${name}' already exists! Created a copy.`,
                  progress: true,
                  position: "bottom-left",
                });
              }
              template.index = this.selectedProject.items[0].elements.length;
              // ADD AS FIRST ELEMENT IN FIRST ITEM!
              this.selectedProject.items[0].elements.splice(
                this.selectedElement,
                0,
                template
              );
              this.tickerLoading = false;
              // }
            }
          }

          this.backgroundProcess.message = null;
        }
      } else {
        // console.log("one of core setting are missing on element");
        if (name === null) {
          this.$q.notify({
            color: "orange",
            // textColor,
            icon: "priority_high",
            message: this.language === 'he' ? `תזינו לפחות אות בשם הפרוייקט!` : this.language === 'ar' ? '????' : "Please Type in atleast a letter in project name!",
            progress: true,
            position: "bottom-left",
          });
        }
      }
    },
    addRoller() {
      console.log("Handle totaly!");
    },

    sendElementToAir(element) {
      // console.log("element is :", _.clone(element))

      // function dispatchSuper() {
      // const actionCheck = this.onAirElements.find(
      //   (x) => x.type === element.type && x.person === element.person
      // );
      // console.log("actionCheck is: ", actionCheck)

      if (element.type === "Super") {
        // console.log("super was triggered");

        // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
if (element.person) {
  var data = {
    position: element.position,
    name: element.person,
    title: element.title,
    phone: element.phone,
    effect: element.effect,
    // type: null,
    action: null,
  };

  var checkIfAlreadyOnAir = this.onAirElements.find(
    (x) => x.type === element.type && x.rtl === element.rtl
  );
  var checkIfNoMatch = this.onAirElements.find(
    (x) => x.uid === element.uid && x.rtl !== element.rtl
  );
  if (checkIfAlreadyOnAir) {
    // console.log("action check is positive")
    data.action = "Change";
    var index = this.onAirElements.findIndex(
      (x) => x.uid === element.uid
    );
    if (!element.rtl) {
      leftSuper.value = data;
    } else {
      rightSuper.value = data;
    }
    this.onAirElements[index] = _.clone(element);
  } else {
    // console.log("action check is negative")
    data.action = "In";
    if (!element.rtl) {
      // CHECK IF CREDIT LEFT ON AIR TO PREVENT OVERLAY!
      const leftCreditpositionCheck = this.onAirElements.find(
        (x) => x.type === 'Finger' && x.position === 'bottomLeft'
      );
      if(!leftCreditpositionCheck) {
        leftSuper.value = data;
        if (checkIfNoMatch) {
          var newEl = _.clone(element);
          newEl.uid = uuidv4();
          this.onAirElements.push(newEl);
        } else this.onAirElements.push(_.clone(element));
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `אצבע תחתונה משמאל '${leftCreditpositionCheck.name}' באוויר!` : this.language === 'ar' ? '????' : `Left Bottom finger '${leftCreditpositionCheck.name}' is on air!`,
        });
      }
      
    } else {
      // CHECK IF CREDIT LEFT ON AIR TO PREVENT OVERLAY!
      const rightCreditpositionCheck = this.onAirElements.find(
        (x) => x.type === 'Finger' && x.position === 'bottomRight'
      );
      if(!rightCreditpositionCheck) {
        rightSuper.value = data;
        if (checkIfNoMatch) {
          var newEl = _.clone(element);
          newEl.uid = uuidv4();
          this.onAirElements.push(newEl);
        } else this.onAirElements.push(_.clone(element));
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          progress: true,
          position: "bottom-left",
          message: this.language === 'he' ? `אצבע תחתונה מימין '${rightCreditpositionCheck.name}' באוויר!` : this.language === 'ar' ? '????' : `Right Bottom finger '${rightCreditpositionCheck.name}' is on air!`,
          // message: `Right finger '${rightCreditpositionCheck.name}' is on air!`,
        });
      }
      
    }
  
  }
} else {
  this.$q.notify({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    progress: true,
    position: "bottom-left",
    message: this.language === 'he' ? `בבקשה תזינו שם אדם!` : this.language === 'ar' ? '????' : `Please provide person's name!`,
  });
}
        
      } else if (element.type === "Box") {
           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
          //  console.log("is instance of blob?", element.src.substring(0, 5) === "blob:")
           if(element.src.substring(0, 5) === "blob:") {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              progress: true,
              position: "bottom-left",
              message: this.language === 'he' ? `בבקשה העלו את הקובץ של התיבה לפני השימוש בה!` : this.language === 'ar' ? '????' : `Please upload Box before using it!`,
            });
           } else {
            if (element.type && element.src) {
              var data = {
                src: element.src,
                type: element.assetType,
                effect: element.effect,
                action: null,
              };
              var actionCheck = this.onAirElements.find(
                (x) => x.type === element.type
              );
              if (actionCheck) {
                // console.log("changing");
                var index = this.onAirElements.findIndex(
                  (x) => x.uid === element.uid
                );
                this.onAirElements[index] = _.clone(element);
                data.action = "Change";
                // console.log("changing data: ", data)
                if (this.rtl) {
                  boxRight.value = data;
                } else {
                  boxLeft.value = data;
                }
              } else {
                data.action = "In";
            // console.log("sending data: ", data)
                if (this.rtl) {
                  boxRight.value = data;
                } else {
                  boxLeft.value = data;
                }
                this.onAirElements.push(_.clone(element));
              }
              // console.log("sending data: ", data);
              // nodecg.sendMessage("stripe", data);
            } else {
              if(element.type) {
                this.$q.notify({
                  color: "red-5",
                  textColor: "white",
                  icon: "warning",
                  progress: true,
                  position: "bottom-left",
                  message: this.language === 'he' ? `לא נבחר קובץ!` : this.language === 'ar' ? '????' : `No File is selected!`,
                });
              } else {
                this.$q.notify({
                  color: "red-5",
                  textColor: "white",
                  icon: "warning",
                  progress: true,
                  position: "bottom-left",
                  message: this.language === 'he' ? `סוג קובץ לא ברור, צרו קשר עם שירות לקוחות!` : this.language === 'ar' ? '????' : `Type is not defined! Contact support!`,
                  // message: 
                });
              }
             
            }
           }

       
      
      } else if (element.type === "CG") {
           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
           if(element.src.substring(0, 5) === "blob:") {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              progress: true,
              position: "bottom-left",
              message: this.language === 'he' ? `בבקשה העלו את הקובץ של הסי ג'י לפני השימוש בו!` : this.language === 'ar' ? '????' : `Please upload CG before using it!`,
            });
           } else {
if (element.type && element.src) {
 // if(element.uploaded) {
  var data = {
    src: element.src,
    type: element.type,
    assetType: element.assetType,
    effect: element.effect,
    action: null,
  };
  // } else {
  //   var data = {
  //     src: element.objectUrl,
  //     type: element.type,
  //     action: null,
  //   };
  // }

  var actionCheck = this.onAirElements.find(
    (x) => x.type === element.type
  );
  if (actionCheck) {
    var index = this.onAirElements.findIndex(
      (x) => x.type === element.type
    );
    data.action = "Change";
    cg.value = data;
    this.onAirElements[index] = _.clone(element);
  } else {
    data.action = "In";
    cg.value = data;
    this.onAirElements.push(_.clone(element));
  }
} else {
  if(element.type) {
    this.$q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      progress: true,
      position: "bottom-left",
      message: this.language === 'he' ? `לא נבחר קובץ!` : this.language === 'ar' ? '????' : `No File is selected!`,
    });
  } else {
    this.$q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      progress: true,
      position: "bottom-left",
      message: this.language === 'he' ? `סוג קובץ לא ברור, צרו קשר עם שירות לקוחות!` : this.language === 'ar' ? '????' : `Type is not defined! Contact support!`,
    });
  }
 
}
    }   
        // console.log("I need handling!");
      } else if (element.type === "Finger") {

           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
if (element.main) {
  var data = {
    main: element.main,
    // sub: element.sub,
    effect: element.effect,
    action: null,
  };
  // const actionCheck = this.onAirElements.find(
  //   (x) => x.uid === element.uid && x.position === element.position
  // );
  // var checkIfNoMatch = this.onAirElements.find(
  //   (x) => x.type === element.type && x.position !== element.position
  // );
  const positionCheck = this.onAirElements.find(
    (x) => x.position === element.position
  );
  // console.log("positoion check is: ", positionCheck)
  if (positionCheck) {
    // console.log("found element")
    var index = this.onAirElements.findIndex(
      (x) => x.position === element.position
    );
    this.onAirElements[index] = _.clone(element);
    data.action = "Change";
    if (element.position === "topLeft") {
      topLeftFinger.value = data;
    } else if (element.position === "topRight") {
      topRightFinger.value = data;
    } else if (element.position === "bottomRight") {

     
        bottomRightFinger.value = data;
     
  

    } else {
     
        bottomleftFinger.value = data;
     
      
    }
  } else {
    data.action = "In";
    // if(checkIfNoMatch) {
    // check for similarities
    if (element.position === "topLeft") {
      topLeftFinger.value = data;
      this.onAirElements.push(data);
    } else if (element.position === "topRight") {
      topRightFinger.value = data;
      this.onAirElements.push(data);
    } else if (element.position === "bottomRight") {

        // CHECK IF CREDIT LEFT ON AIR TO PREVENT OVERLAY!
        const rightSuperCheck = this.onAirElements.find(
         (x) => x.type === 'Super' && x.rtl
       );
       if(!rightSuperCheck) {
         bottomRightFinger.value = data;
         if (!positionCheck) {
          var newEl = _.clone(element);
          newEl.uid = uuidv4();
          this.onAirElements.push(newEl);
        }
       } else {
         this.$q.notify({
           color: "red-5",
           textColor: "white",
           icon: "warning",
           progress: true,
           position: "bottom-left",
           message: this.language === 'he' ? `סופר ימין '${rightSuperCheck.name}' באוויר!` : this.language === 'ar' ? '????' : `Right Super '${rightSuperCheck.name}' is on air!`,
         });
       }
   
 
     } else {
        // CHECK IF CREDIT LEFT ON AIR TO PREVENT OVERLAY!
        const leftSuperCheck = this.onAirElements.find(
         (x) => x.type === 'Super' && !x.rtl
       );
       if(!leftSuperCheck) {
         bottomleftFinger.value = data;
         if (!positionCheck) {
          var newEl = _.clone(element);
          newEl.uid = uuidv4();
          this.onAirElements.push(newEl);
        }
       } else {
         this.$q.notify({
           color: "red-5",
           textColor: "white",
           icon: "warning",
           progress: true,
           position: "bottom-left",
           message: this.language === 'he' ? `סופר שמאל '${leftSuperCheck.name}' באוויר!` : this.language === 'ar' ? '????' : `Left Super '${leftSuperCheck.name}' is on air!`,
         });
       }
       
     }
   
    // else this.onAirElements.push(_.clone(element));
    // }
  }
} else {
 
    this.$q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      progress: true,
      position: "bottom-left",
      message: this.language === 'he' ? `בבקשה תזינו תוכן לאצבע!` : this.language === 'ar' ? '????' : `Please input content for Finger!`,
    });
  
 
}
        
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
      } else if (element.type === "Stripe") {
           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
if (element.main) {
  var data = {
    main: element.main,
    sub: element.sub,
    titleSize: element.sub !== '' ? 'Small' : element.titleSize,
    effect: element.effect,
    action: null,
  };
  var actionCheck = this.onAirElements.find(
    (x) => x.type === element.type
  );
  if (actionCheck) {
    // console.log("changing");
    var index = this.onAirElements.findIndex(
      (x) => x.uid === element.uid
    );
    this.onAirElements[index] = _.clone(element);
    data.action = "Change";
    if (this.rtl) {
      stripeRight.value = data;
    } else {
      stripeLeft.value = data;
    }
  } else {
    data.action = "In";
    if (this.rtl) {
      stripeRight.value = data;
    } else {
      stripeLeft.value = data;
    }
    this.onAirElements.push(_.clone(element));
  }
} else {
  this.$q.notify({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    progress: true,
    position: "bottom-left",
    message: this.language === 'he' ? `בבקשה תזינו תוכן לסטרייפ!` : this.language === 'ar' ? '????' : `Please input content for Stripe!`,
    // message: `Please input content for Stripe!`,
  });
}
        
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
      } else if (element.type === "Counter") {
        // console.log("I need handling!")
        // console.log("do here up or down!")

        // var index = 0;
        // var pre = true;
        // var Flip = element.counterType === 'down' ? true : false;
        // console.log("element.down: ", Flip)
           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
if (element.amount) {
  var length = _.clone(element.amount);

  // CHECK IF ELEMENT IS ON AIR
  var actionCheck = this.onAirElements.find(
    (x) => x.type === element.type
  );

  if (actionCheck) {
    // console.log("found element")
    var amount = _.clone(element.amount);
    var text = _.clone(element.text);
    var index = 0;
    clearInterval(this.counterInterval);

    this.counterInterval = setInterval(function () {
      // console.log("index is: ", index)
      // console.log("reversed: ", (value - --reverse_counter))

      // for (let j = 0; j < this.selectedProject.length; ++j) {
      // if (pre) {
      //   var data = {
      //     amount: element.amount - index,
      //     text: element.text,
      //     action: "In",
      //   };
      //   vm.counter.currentText = data.text;
      //   vm.counter.currentAmount = data.amount;
      //   // console.log("ticket current main is: ", vm.ticker.currentMain)
      //   counterLeft.value = data;
      //   pre = false;
      // } else {
      var data = _.clone({
        amount: element.counterType === "down" ? amount - index : index,
        text: text,
        effect: element.effect,
        action: "Change",
      });
      // console.log("sending data: ", data)
      if (this.rtl) {
        counterRight.value = data;
      } else {
        counterLeft.value = data;
      }

      vm.counter.currentText = text;
      vm.counter.currentAmount =
        element.counterType === "down" ? amount - index : index;

      // }

      // // RECONFIG!
      // var actionCheck = this.onAirElements.find(
      //   (x) =>
      //     x.type === element.type && x.data === element.data
      // );

      // if (actionCheck) {
      //   var elementIndex = this.onAirElements.findIndex(
      //     (x) => x.type === element.type && x.data === element.data
      //   );
      //   this.onAirElements[elementIndex] = element;
      //   data.action = "Change";
      // } else {
      //   data.action = "In";

      // }
      // console.log("found element on air: ", this.onAirElements)
      // console.log("sending data: ", data);
      // nodecg.sendMessage("stripe", data);

      // }
      // console.log("element type is: ", element.type)
      // console.log("element type is: ", element.type)
      index += 1;
      // var elementIndex = this.onAirElements.findIndex(
      //   (x) =>
      //     x.type === element.type
      // );
      // console.log("element index is: ", elementIndex)
      // this.onAirElements[elementIndex] = _.clone(element);
      // console.log("counting: ", index)
      // vm.projectRefreshTime = counter;
      // // console.log("projectRefreshTime: ", this.projectRefreshTime)
      // // console.log("counting: ", (value - --reverse_counter))
      // // document.getElementById("pbar").value = value - --reverse_counter;
      // console.log("index is: ", index)
      // console.log("length is: ", length)
      if (index === length) {
        // console.log("reseting")
        // index = 0
        clearInterval(vm.counterInterval);
        var data = _.clone({
          amount: element.counterType === "down" ? amount - index : index,
          text: text,
          effect: element.effect,
          action: "Out",
        });
        // console.log("sending data: ", data)
        // vm.counter.currentText = null
        // vm.counter.currentAmount = null
        setTimeout(function () {
          if (vm.rtl) {
            counterRight.value = data;
          } else {
            counterLeft.value = data;
          }
          var index = vm.onAirElements.findIndex(
            (x) => x.uid === vm.element.uid
          );
          vm.onAirElements.splice(index, 1);
        }, 500);
      }

      // document.getElementById("counting").innerHTML= reverse_counter;
    }, 1000);
    // this.onAirElements.push(_.clone(element));
  } else {
    // console.log("element wasn't found")
    var amount = _.clone(element.amount);
    var text = _.clone(element.text);
    var index = 0;

    var data = _.clone({
      amount: element.counterType === "down" ? amount - index : index,
      text: text,
      effect: element.effect,
      action: "In",
    });
    // console.log("sending data: ", data)
    if (this.rtl) {
      // console.log("found rtl")
      counterRight.value = data;
    } else {
      counterLeft.value = data;
    }
    vm.counter.currentText = text;
    vm.counter.currentAmount =
      element.counterType === "down" ? amount - index : index;
    // console.log("ticket current main is: ", vm.ticker.currentMain)
    // console.log("sending data to gfx", data)

    // pre = false;

    this.counterInterval = setInterval(function () {
      // console.log("index is: ", index)
      // console.log("reversed: ", (value - --reverse_counter))
      index += 1;
      // for (let j = 0; j < this.selectedProject.length; ++j) {

      var data = _.clone({
        amount: element.counterType === "down" ? amount - index : index,
        text: text,
        effect: element.effect,
        action: "Change",
      });
      // console.log("sending data: ", data)
      // console.log("sending data: ", data)
      if (vm.rtl) {
        counterRight.value = data;
      } else {
        counterLeft.value = data;
      }
      vm.counter.currentText = text;
      vm.counter.currentAmount =
        element.counterType === "down" ? amount - index : index;

      // // RECONFIG!
      // var actionCheck = this.onAirElements.find(
      //   (x) =>
      //     x.type === element.type && x.data === element.data
      // );

      // if (actionCheck) {
      //   var elementIndex = this.onAirElements.findIndex(
      //     (x) => x.type === element.type && x.data === element.data
      //   );
      //   this.onAirElements[elementIndex] = element;
      //   data.action = "Change";
      // } else {
      //   data.action = "In";

      // }
      // console.log("found element on air: ", this.onAirElements)
      // console.log("sending data: ", data);
      // nodecg.sendMessage("stripe", data);

      // }

      // console.log("counting: ", index)
      // vm.projectRefreshTime = counter;
      // // console.log("projectRefreshTime: ", this.projectRefreshTime)
      // // console.log("counting: ", (value - --reverse_counter))
      // // document.getElementById("pbar").value = value - --reverse_counter;
      // console.log("index is: ", index)
      // console.log("length is: ", length)
      if (index === length) {
        // console.log("reseting")
        // console.log("reseting")
        // index = 0
        clearInterval(vm.counterInterval);
        var data = _.clone({
          amount: element.counterType === "down" ? amount - index : index,
          text: text,
          effect: element.effect,
          action: "Out",
        });
        // console.log("sending data: ", data)
        vm.counter.currentText = text;
        vm.counter.currentAmount =
          element.counterType === "down" ? 0 : index;
        setTimeout(function () {
          if (vm.rtl) {
            counterRight.value = data;
          } else {
            counterLeft.value = data;
          }
          var index = vm.onAirElements.findIndex(
            (x) => x.uid === vm.element.uid
          );
          vm.onAirElements.splice(index, 1);
        }, 500);
      }

      // document.getElementById("counting").innerHTML= reverse_counter;
    }, 1000);
    this.onAirElements.push(_.clone(element));
  }
} else {
  this.$q.notify({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    progress: true,
    position: "bottom-left",
    message: this.language === 'he' ? `בבקשה תזינו תוכן לקאונטר!` : this.language === 'ar' ? '????' : `Please input content for Counter!`,
    // message: `Please set a number for counter!`,
  });
}
        
        // console.log("counter length is: ", length)
      } else if (element.type === "Live") {
           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!

        var data = {
          main: element.main,
          sub: element.location,
          color: element.color,
          effect: element.effect,
          action: null,
        };
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        if (actionCheck) {
          var index = this.onAirElements.findIndex(
            (x) => x.type === element.type
          );
          this.onAirElements[index] = _.clone(element);
          data.action = "Change";
        } else {
          data.action = "In";
          this.onAirElements.push(element);
        }
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
        
          live.value = data;
        
        // liveLeft.value = data;
      } else if (element.type === "Ticker") {
        if (element.data[0].main.length > 0 && element.data[0].sub.length > 0) {
          var index = 0;
          var actionCheck = this.onAirElements.find(
            (x) => x.type === element.type
          );
          // var tickerData = element.data
          if (actionCheck) {
            // console.log("element is on air");
            var dataTest = _.clone(element.data.filter((val) => val.main !== '' && val.sub !== '' || val.main !== '' && val.sub === '' || val.main === '' && val.sub !== ''));
            // console.log("element data after cleaning: ", dataTest)
            // element.data =
            var length = dataTest.length;
            // console.log("data length is: ", element.data.length)
            if (length > 1) {
              // console.log("length is: ", length, "index is: ", index)
              // console.log("chercking if data exists from before: ", vm.ticker.currentMain)
              // var pre = true;
              // console.log("length is bigger than 1")
              clearInterval(this.tickerInterval);
              this.tickerInterval = setInterval(function () {
                // console.log("reversed: ", (value - --reverse_counter))
  
                // for (let j = 0; j < this.selectedProject.length; ++j) {
  
                var data = _.clone({
                  main: dataTest[index].main,
                  sub: dataTest[index].sub,
                  effect: element.effect,
                  action: "Change",
                });
                // console.log("sending data: ", data)
                if (vm.rtl) {
                  // console.log("changing right data: ", data)
                  tickerRight.value = data;
                } else {
                  // console.log("changing left data: ", data)
                  tickerLeft.value = data;
                }
                // index += 1;
                vm.ticker.currentMain = {main: data.main, sub: data.sub};
                // vm.ticker.currentSub = data.sub;
  
                // // RECONFIG!
                // var actionCheck = this.onAirElements.find(
                //   (x) =>
                //     x.type === element.type && x.data === element.data
                // );
  
                // if (actionCheck) {
                //   var elementIndex = this.onAirElements.findIndex(
                //     (x) => x.type === element.type && x.data === element.data
                //   );
                //   this.onAirElements[elementIndex] = element;
                //   data.action = "Change";
                // } else {
                //   data.action = "In";
  
                // }
                // console.log("found element on air: ", this.onAirElements)
                // console.log("sending data: ", data);
                // nodecg.sendMessage("stripe", data);
  
                // }
  
                index += 1;
                // // console.log("counting: ", counter)
                // vm.projectRefreshTime = counter;
                // // console.log("projectRefreshTime: ", this.projectRefreshTime)
                // // console.log("counting: ", (value - --reverse_counter))
                // // document.getElementById("pbar").value = value - --reverse_counter;
                if (index === length) {
                  // console.log("reseting")
                  index = 0;
                  clearInterval(vm.timer);
                }
  
                // document.getElementById("counting").innerHTML= reverse_counter;
              }, element.tick * 1000);
              // this.onAirElements.push(_.clone(element));
            } else if (length === 1) {
              // console.log("length is 1")
              clearInterval(vm.tickerInterval);
              // console.log("got a value inside")
              var data = _.clone({
                main: dataTest[index].main,
                sub: dataTest[index].sub,
                effect: element.effect,
                action: "Change",
              });
              // console.log("sending data: ", data)
              if (this.rtl) {
                tickerRight.value = data;
              } else {
                tickerLeft.value = data;
              }
              vm.ticker.currentMain = {main: data.main, sub: data.sub};
              // vm.ticker.currentSub = data.sub;
  
              // this.onAirElements.push(_.clone(element));
            }
          } else {
            console.log("element isn't on air")
            var dataTest = _.clone(element.data.filter((val) => val.main !== '' && val.sub !== '' || val.main !== '' && val.sub === '' || val.main === '' && val.sub !== ''));
            console.log("element data after cleaning: ", dataTest)
            // element.data =
            var length = dataTest.length;
            // console.log("data length is: ", element.data.length)
            if (length > 1) {
              console.log("chercking if data exists from before: ", vm.ticker.currentMain)
              // var pre = true;
              // console.log("length is bigger than 1")
              var data = _.clone({
                main: dataTest[index].main,
                sub: dataTest[index].sub,
                effect: element.effect,
                action: "In",
              });
              // console.log("sending data: ", data)
              if (this.rtl) {
                tickerRight.value = data;
              } else {
                tickerLeft.value = data;
              }
              index += 1;
              vm.ticker.currentMain = {main: data.main, sub: data.sub};
  
              this.tickerInterval = setInterval(function () {
                console.log("DataTest Length is: ", dataTest.length, "index is:", index)
                // console.log("reversed: ", (value - --reverse_counter))
                
                // for (let j = 0; j < this.selectedProject.length; ++j) {
                // if (pre) {
  
                //   // vm.ticker.currentSub = data.sub;
                //   // console.log("ticket current main is: ", vm.ticker.currentMain)
  
                //   // pre = false;
                // } else {
                var data = _.clone({
                  main: dataTest[index].main,
                  sub: dataTest[index].sub,
                  effect: element.effect,
                  action: "Change",
                });
                console.log("sending data: ", data)
                if (vm.rtl) {
                  // console.log("chaning right data: ", data)
                  tickerRight.value = data;
                } else {
                  // console.log("chaning left data: ", data)
                  tickerLeft.value = data;
                }
                // console.log("sending data: ", data)
                vm.ticker.currentMain = {main: data.main, sub: data.sub};
                // vm.ticker.currentSub = data.sub;
                // }
  
                // // RECONFIG!
                // var actionCheck = this.onAirElements.find(
                //   (x) =>
                //     x.type === element.type && x.data === element.data
                // );
  
                // if (actionCheck) {
                //   var elementIndex = this.onAirElements.findIndex(
                //     (x) => x.type === element.type && x.data === element.data
                //   );
                //   this.onAirElements[elementIndex] = element;
                //   data.action = "Change";
                // } else {
                //   data.action = "In";
  
                // }
                // console.log("found element on air: ", this.onAirElements)
                // console.log("sending data: ", data);
                // nodecg.sendMessage("stripe", data);
  
                // }
  
                index += 1;
                // // console.log("counting: ", counter)
                // vm.projectRefreshTime = counter;
                // // console.log("projectRefreshTime: ", this.projectRefreshTime)
                // // console.log("counting: ", (value - --reverse_counter))
                // // document.getElementById("pbar").value = value - --reverse_counter;
                if (index === length) {
                  console.log("reseting")
                  index = 0;
                  clearInterval(vm.timer);
                }
  
                // document.getElementById("counting").innerHTML= reverse_counter;
              }, element.tick * 1000);
              this.onAirElements.push(_.clone(element));
            } else if (length === 1) {
              // console.log("length is 1")
              // if (!vm.ticker.currentMain) {
              // console.log("Don't have value inside!");
              var data = {
                main: dataTest[index].main,
                sub: dataTest[index].sub,
                effect: element.effect,
                action: "In",
              };
              // console.log("sending data: ", data)
              if (this.rtl) {
                tickerRight.value = data;
              } else {
                tickerLeft.value = data;
              }
              vm.ticker.currentMain = {main: data.main, sub: data.sub};
              // vm.ticker.currentSub = data.sub;
              // console.log("ticket current main is: ", vm.ticker.currentMain)
  
              this.onAirElements.push(_.clone(element));
              // pre = false;
              // } else {
              //   console.log("got a value inside");
              //   var data = {
              //     main: dataTest[index],
              //     action: "Change",
              //   };
              //   // console.log("sending data: ", data)
              //   vm.ticker.currentMain = data;
              //   // vm.ticker.currentSub = data.sub;
              //   ticker.value = data;
              //   this.onAirElements.push(_.clone(element));
              // }
            }
          }
        } else {
          
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              progress: true,
              position: "bottom-left",
              message: this.language === 'he' ? `בבקשה תזינו תוכן לטיק ראשון!` : this.language === 'ar' ? '????' : `Please provide First tick!`,
            });
        
         
        }
        
      } else if (element.type === "Roller") {
        // console.log("I need handling!");
        // console.log("sending roller: ", this.element)


        // var data = _.cloneDeep({
        //   layout: element.layout,
        //   align: element.align,
        //   header: element.header,
        //   group1: element.group1,
        //   group2: element.group2,
        //   group3: element.group3,
        //   group4: element.group4,
        //   // type: element.type,
        //   type: element.assetType,
        //   effect: element.effect,
        //   action: "Out",
        // });

        // roller.value = data




        if (element.layout && element.align) {
          var data =  _.cloneDeep({
            layout: element.layout,
            align: element.align,
            header: element.header,
            group1: element.group1,
            group2: element.group2,
            group3: element.group3,
            group4: element.group4,
            type: element.assetType,
            effect: element.effect,
            action: null,
          });
          var actionCheck = this.onAirElements.find(
            (x) => x.type === element.type
          );
          if (actionCheck) {
            // console.log("changing");
            var index = this.onAirElements.findIndex(
              (x) => x.uid === element.uid
            );
            this.onAirElements[index] = _.clone(element);
            data.action = "Change";
            // console.log("changing data: ", data)
            // if (this.rtl) {
            //   promoRight.value = data;
            // } else {
              // if(element.align === 'Center') {
              //   console.log("sending roller center data: ", data)
              //   centerRoller.value = data
              // } else {
               if (this.rtl) {
                console.log("changing roller RTL data: ", data)
                  rightRoller.value = data
                } else {
                  console.log("changing roller left data: ", data)
                  leftRoller.value = data
                }
              // }
              
              
            // }
          } else {
            data.action = "In";
        // console.log("sending data: ", data)
        // if (!element.rtl) {
          // if(element.align === 'Center') {
          //   console.log("sending roller center data: ", data)
          //   centerRoller.value = data
          // } else {
           if (this.rtl) {
            console.log("sending roller RTL data: ", data)
              rightRoller.value = data
            } else {
              console.log("sending roller left data: ", data)
              leftRoller.value = data
            }
          // }
        // } else {
        // promoRight.value = data;
        // }
            this.onAirElements.push(_.clone(element));
          }
        } else {
          if(element.layout) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              progress: true,
              position: "bottom-left",
              message: this.language === 'he' ? `לא סומן עיצוב!` : this.language === 'ar' ? '????' : `No layout is selected!`,
            });
          } else {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              progress: true,
              position: "bottom-left",
              message: this.language === 'he' ? `יישור לא מוגדר!` : this.language === 'ar' ? '????' : `Alignment isn not defined!`,
            });
          }
         
        }
      } else if (element.type === "Promo") {
           // CHECK IF ALL NEEDED FIELDS ARE DEFINED!
           if(element.src.substring(0, 5) === "blob:") {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              progress: true,
              position: "bottom-left",
              message: this.language === 'he' ? `בבקשה העלו את הקובץ של הפרומו לפני השימוש בו!` : this.language === 'ar' ? '????' : `Please upload Promo before using it!`,
            });
           } else {
if (element.type && element.src) {
  var data = {
    src: element.src,
    text: element.text,
    type: element.assetType,
    effect: element.effect,
    action: null,
  };
  var actionCheck = this.onAirElements.find(
    (x) => x.type === element.type && x.rtl === element.rtl
  );
  if (actionCheck) {
    // console.log("changing");
    var index = this.onAirElements.findIndex(
      (x) => x.uid === element.uid && x.rtl === element.rtl
    );
    this.onAirElements[index] = _.clone(element);
    data.action = "Change";
    // console.log("changing data: ", data)
    if (this.rtl) {
      promoRight.value = data;
    } else {
      promoLeft.value = data;
    }
  } else {
    data.action = "In";
// console.log("sending data: ", data)
if (!element.rtl) {
promoLeft.value = data;
} else {
promoRight.value = data;
}
    this.onAirElements.push(_.clone(element));
  }

} else {
  if(element.type) {
    this.$q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      progress: true,
      position: "bottom-left",
      message: this.language === 'he' ? `לא נבחר קובץ!` : this.language === 'ar' ? '????' : `No File is selected!`,
    });
  } else {
    this.$q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      progress: true,
      position: "bottom-left",
      message: this.language === 'he' ? `סוג קובץ לא ברור, צרו קשר עם שירות לקוחות!` : this.language === 'ar' ? '????' : `Type is not defined! Contact support!`,
    });
  }
 
}
           }
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
      }

      // }
    },
    TakeElementFromAir(element) {
      // console.log("take element from air is :", element, " and index is: ", index)
      if (element.type === "Super") {
       
        // var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        // console.log("onAirElements are: ", _.clone(this.onAirElements))
        var actionCheck = _.clone(this.onAirElements).filter(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
          // console.log("passed action check!", actionCheck)
          if(actionCheck.length === 1) {
            const data = {
              position: element.position,
              name: element.person,
              title: element.title,
              phone: element.phone,
              effect: element.effect,
              action: "Out",
            };
            if (!element.rtl) {
              leftSuper.value = data;
            } else {
              rightSuper.value = data;
            }
            this.onAirElements.splice(index, 1);
          } else {
            var dataBoth = []
            for (let i = 0; i < actionCheck.length; ++i) {
              if(!actionCheck[i].rtl && i === 0) {
                const data = {
                  position: actionCheck[i].position,
                  name: actionCheck[i].person,
                  title: actionCheck[i].title,
                  phone: actionCheck[i].phone,
                  effect: actionCheck[i].effect,
                  action: "Out",
                };
                dataBoth.push(data)
              } else {
                const data = {
                  position: actionCheck[i].position,
                  name: actionCheck[i].person,
                  title: actionCheck[i].title,
                  phone: actionCheck[i].phone,
                  effect: actionCheck[i].effect,
                  action: "Out",
                };
                dataBoth.push(data)
              }
             
              
              
            }
            // if (i === 0) {
              
              var leftindex = this.onAirElements.findIndex((x) => x.uid === dataBoth[0].uid);
              
              this.onAirElements.splice(leftindex, 1);
              var rightindex = this.onAirElements.findIndex((x) => x.uid === dataBoth[1].uid);
              this.onAirElements.splice(rightindex, 1);
                leftSuper.value = dataBoth[0];
              // } else {
                rightSuper.value = dataBoth[1];
              // }
          }
         
          // console.log("action check length is: ", actionCheck.length)
          
        }
      } else if (element.type === "Stripe") {
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
          const data = {
            main: element.main,
            sub: element.sub,
            titleSize: element.titleSize,
            effect: element.effect,
            action: "Out",
          };
          if (this.rtl) {
            stripeRight.value = data;
          } else {
            stripeLeft.value = data;
          }
          var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
          this.onAirElements.splice(index, 1);
        }
       
        
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
        // this.onAirElements.splice(index, 1);
      
      } else if (element.type === "CG") {
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
        // if(element.uploaded) {
        var data = {
          src: element.src,
          type: element.type,
          assetType: element.assetType,
          effect: element.effect,
          action: "Out",
        };
        // } else {
        //   var data = {
        //     src: element.objectUrl,
        //     type: element.type,
        //     action: "Out",
        //   };
        // }

        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
        // this.onAirElements.splice(index, 1);
        cg.value = data;
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        this.onAirElements.splice(index, 1);
      }

      } else if (element.type === "Box") {
        // if(element.uploaded) {
          var actionCheck = this.onAirElements.find(
            (x) => x.type === element.type
          );
          // console.log("action check is: ", actionCheck)
          if (actionCheck) {
        var data = {
          src: element.src,
          // type: element.type,
          type: element.assetType,
          effect: element.effect,
          action: "Out",
        };
        // } else {
        //   var data = {
        //     src: element.objectUrl,
        //     type: element.type,
        //     action: "Out",
        //   };
        // }

        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
        // this.onAirElements.splice(index, 1);
        if (this.rtl) {
          boxRight.value = data;
        } else {
          boxLeft.value = data;
        }
        // cg.value = data;
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        this.onAirElements.splice(index, 1);
      }
        // console.log("i need handling");
      } else if (element.type === "Finger") {
        var actionCheck = _.clone(this.onAirElements).filter(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
          // console.log("passed action check is: ", actionCheck)
          if(actionCheck.length === 1) {
            const data = {
              main: element.main,
              sub: element.sub,
              effect: element.effect,
              action: "Out",
            };
            if (element.position === "topLeft") {
              topLeftFinger.value = data;
            } else if (element.position === "topRight") {
              topRightFinger.value = data;
            } else if (element.position === "bottomRight") {
              bottomRightFinger.value = data;
            } else {
              bottomleftFinger.value = data;
            }
            var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
            this.onAirElements.splice(index, 1);





        } else {
          // var fingerCount = []
          // console.log("doing else")
          for (let i = 0; i < actionCheck.length; ++i) {
            // if(!actionCheck[i].rtl && i === 0) {
              var data = {
                main: actionCheck[i].main,
                sub: actionCheck[i].sub,
                effect: actionCheck[i].effect,
                action: "Out",
              };
              if (actionCheck[i].position === "topLeft") {
                topLeftFinger.value = data;
                var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
                this.onAirElements.splice(index, 1);
              } else if (actionCheck[i].position === "topRight") {
                topRightFinger.value = data;
                var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
                this.onAirElements.splice(index, 1);
              } else if (actionCheck[i].position === "bottomRight") {
                bottomRightFinger.value = data;
                var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
                this.onAirElements.splice(index, 1);
              } else {
                bottomleftFinger.value = data;
                var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
                this.onAirElements.splice(index, 1);
              }
          
            // }
          }
        }






       
        // this.onAirElements.splice(index, 1);
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);

      }
      
      } else if (element.type === "Counter") {
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
        
        const data = {
          text: this.counter.currentText,
          amount: this.counter.currentAmount,
          effect: element.effect,
          action: "Out",
        };
        // this.onAirElements.splice(index, 1);
        if (this.rtl) {
          counterRight.value = data;
        } else {
          counterLeft.value = data;
        }
        
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        this.onAirElements.splice(index, 1);
        clearInterval(this.counterInterval);
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
      }
      } else if (element.type === "Live") {
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
        const data = {
          main: "Live",
          sub: element.location,
          color: element.color,
          effect: element.effect,
          action: "Out",
        };
        // if (this.rtl) {
        //   liveRight.value = data;
        // } else {
          live.value = data;
        // }
        
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        this.onAirElements.splice(index, 1);
        // this.onAirElements.splice(index, 1);
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
      }
      } else if (element.type === "Ticker") {
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
        
        // console.log("ticker is: ", this.ticker)
        // console.log("current main is: ", this.ticker.currentMain)
        // vm.ticker.currentMain = {main: data.main, sub: data.sub};
        const data = {
          main: this.ticker.currentMain.main,
          sub: this.ticker.currentMain.sub,
          effect: element.effect,
          action: "Out",
        };
        // console.log("sending data: ", data)
        if (this.rtl) {
          tickerRight.value = data;
        } else {
          tickerLeft.value = data;
        }
        
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        this.onAirElements.splice(index, 1);
        clearInterval(this.tickerInterval);
      }
        // this.onAirElements.splice(index, 1);
        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
      } else if (element.type === "Roller") {
        // console.log("i need handling");
        var actionCheck = this.onAirElements.find(
          (x) => x.type === element.type
        );
        // console.log("action check is: ", actionCheck)
        if (actionCheck) {
        var data =  _.cloneDeep({
          layout: element.layout,
          align: element.align,
          header: element.header,
          group1: element.group1,
          group2: element.group2,
          group3: element.group3,
          group4: element.group4,
          effect: element.effect,
          action: "Out",
        });
        // } else {
        //   var data = {
        //     src: element.objectUrl,
        //     type: element.type,
        //     action: "Out",
        //   };
        // }

        // console.log("sending out data: ", data);
        // nodecg.sendMessage("stripe", data);
        // this.onAirElements.splice(index, 1);
        // if(element.align === 'Center') {
        //   console.log("out roller center data: ", data)
        //   centerRoller.value = data
        // } else {
         if (this.rtl) {
          // console.log("out roller RTL data: ", data)
            rightRoller.value = data
          } else {
            // console.log("out roller left data: ", data)
            leftRoller.value = data
          }
        // }
        // cg.value = data;
        
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid);
        this.onAirElements.splice(index, 1);
        }
      } else if (element.type === "Promo") {
        // if(element.uploaded) {
          var actionCheck = this.onAirElements.find(
            (x) => x.type === element.type
          );
          // console.log("action check is: ", actionCheck)
          if (actionCheck) {
        var data = {
          src: element.src,
          text: element.text,
          // type: element.type,
          type: element.assetType,
          effect: element.effect,
          action: "Out",
        };
        // } else {
        //   var data = {
        //     src: element.objectUrl,
        //     type: element.type,
        //     action: "Out",
        //   };
        // }

        // console.log("sending data: ", data);
        // nodecg.sendMessage("stripe", data);
        // this.onAirElements.splice(index, 1);
        if (!element.rtl) {
          promoLeft.value = data;
        } else {
          promoRight.value = data;
        }
        // cg.value = data;
        
        var index = this.onAirElements.findIndex((x) => x.uid === element.uid && x.rtl === element.rtl);
        this.onAirElements.splice(index, 1);
      }
        // console.log("i need handling");
      }

      // }
    },
    clearAll() {
      // console.log("sending clear all")
      this.onAirElements = []
      clearall.value = {clear: true};
//       setTimeout(function(){
//         clearall.value = {clear: false};
//  }, 2000);
    },
    // showSelectProject(){

    // }
    // changeSetting(setting){
    //   // console.log("setting is: ", setting)
    //   this.setting = setting
    //   this.dialog = true
    // }
  },
});

app.use(Quasar, { config: {} });
const vm = app.mount("#q-app");
// Quasar.lang.set(Quasar.lang.he)
// vm.showDialog()
// const nameInput = document.getElementById("name");
// const titleInput = document.getElementById("title");

function getProjects() {
  
  if(vm.CGLoading > 0 && vm.CGLoading < 100 || vm.boxLoading > 0 && vm.boxLoading < 100 || vm.promoLoading > 0 && vm.promoLoading < 100) {
    vm.backgroundProcess.message = "Failed to load projects. currently uploading.";
    setTimeout(function(){
      vm.backgroundProcess.message = null;
}, 2000);
    
  } else {
    vm.backgroundProcess.message = "Refreshing Projects..";
    axios.get(baseURL + "/projects").then((res) => {
      vm.projects = res.data;
      // console.log("data is: ", res.data)
      vm.backgroundProcess.message = null;
    });
  }
 
}

// function start_countdown(value){
//   var reverse_counter = value;
//   var counter = reverse_counter
// var downloadTimer = setInterval(function(){
// // console.log("reversed: ", (value - --reverse_counter))
// counter -= 1
// // console.log("counting: ", counter)
// vm.projectRefreshTime = counter
// // console.log("projectRefreshTime: ", this.projectRefreshTime)
// // console.log("counting: ", (value - --reverse_counter))
// // document.getElementById("pbar").value = value - --reverse_counter;
// if(counter <= 0) {
//   clearInterval(downloadTimer);
// }

// // document.getElementById("counting").innerHTML= reverse_counter;

// },1000);
// }
// start_countdown(10)
// getProjects()
function start_countdown(value) {
  var reverse_counter = value;
  var counter = reverse_counter;
  vm.timer = setInterval(function () {
    // console.log("reversed: ", (value - --reverse_counter))
    
    counter -= 1;
    // console.log("counting: ", counter)
    vm.projectRefreshTime = counter;
    // console.log("projectRefreshTime: ", this.projectRefreshTime)
    // console.log("counting: ", (value - --reverse_counter))
    // document.getElementById("pbar").value = value - --reverse_counter;
    if (counter === 0) {
      getProjects();
      clearInterval(vm.timer);
      counter = 30;
    }

    // document.getElementById("counting").innerHTML= reverse_counter;
  }, 1000);
}
// console.log("vm el is: ", vm.$el)
// console.log("vm el myid is: ", vm.$el.myid)
// console.log("vm refs myid are: ", vm.$refs['items'])
// console.log("vm refs are: ", vm.$refs.myid)
getProjects();
start_countdown(30);


vm.interval = setInterval(() => {
  start_countdown(30);
 
}, 31000);



// function dispatchSuper() {
//   const data = {
//     name: vm.element.name,
//     title: vm.element.title,
//     rtl: true,
//   };

//   console.log("sending data: ", data);
//   // nodecg.sendMessage("showLowerthird", data);
// }

// NODE CG SETTINGS
// SUPERS
const leftSuper = nodecg.Replicant("leftsuper");
const rightSuper = nodecg.Replicant("rightsuper");
// CG
const cg = nodecg.Replicant("cg");
// FINGERS
const topLeftFinger = nodecg.Replicant("topleftfinger");
const bottomleftFinger = nodecg.Replicant("bottomleftfinger");
const topRightFinger = nodecg.Replicant("toprightfinger");
const bottomRightFinger = nodecg.Replicant("bottomrightfinger");
// LIVE
const live = nodecg.Replicant("live");
const liveContent = nodecg.Replicant("livecontent");
const clearall = nodecg.Replicant("clearall");

// LEFT TO RIGHT
// STRIPE
const stripeLeft = nodecg.Replicant("stripeleft");
const boxLeft = nodecg.Replicant("boxleft");
const promoLeft = nodecg.Replicant("promoleft");
// COUNTER
const counterLeft = nodecg.Replicant("counterleft");


// TICKER
const tickerLeft = nodecg.Replicant("tickerleft");

// RIGHT TO LEFT
// STRIPE
const stripeRight = nodecg.Replicant("striperight");
const boxRight = nodecg.Replicant("boxright");
const promoRight = nodecg.Replicant("promoright");
// COUNTER
const counterRight = nodecg.Replicant("counterright");
// TICKER
const tickerRight = nodecg.Replicant("tickerright");

const leftRoller = nodecg.Replicant("leftroller");
// const centerRoller = nodecg.Replicant("centerroller");
const rightRoller = nodecg.Replicant("rightroller");
